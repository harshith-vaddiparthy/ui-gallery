import { useEffect, useState } from "react";
import { UI_PROJECTS, UI_GALLERY } from "../data/uiProjects.js";
import "../styles/ui-gallery.css";

function OutLink({ href, children, ...props }) {
  return <a href={href} target="_blank" rel="noreferrer" {...props}>{children}<svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16"><path d="M4 12 12 4M4 4h8v8" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg></a>;
}

function ProjectStudy({ project, first }) {
  const [screenIndex, setScreenIndex] = useState(0);
  const screen = project.screens[screenIndex];
  return (
    <article className="ui-study" id={project.slug} aria-labelledby={`${project.slug}-title`}>
      <div className="ui-study-heading">
        <div><p className="ui-study-kind">{project.category} · {project.status}</p><h2 id={`${project.slug}-title`}>{project.name}</h2></div>
      </div>
      <figure className="ui-screen">
        <a href={screen.full || screen.src} target="_blank" rel="noreferrer" aria-label={`Open full-size ${project.name}: ${screen.label}`}>
          <img src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} loading={first ? "eager" : "lazy"} fetchPriority={first ? "high" : "auto"} decoding="async" />
        </a>
        <figcaption><span>{screen.caption}</span><a href={screen.full || screen.src} target="_blank" rel="noreferrer">Open full size</a></figcaption>
      </figure>
      {project.screens.length > 1 && <div className="ui-screen-picker" role="group" aria-label={`${project.name} views`}>
        {project.screens.map((item, index) => <button key={item.src} type="button" aria-pressed={screenIndex === index} onClick={() => setScreenIndex(index)}>{item.label}</button>)}
      </div>}
      <div className="ui-study-details">
        <p className="ui-study-summary">{project.summary}</p>
        <div className="ui-design-notes"><h3>Design decisions</h3><ul>{project.decisions.map(note => <li key={note}>{note}</li>)}</ul></div>
        <div className="ui-source-notes">
          <h3>Built with</h3><p>{project.stack.join(" · ")}</p>
          <p>{project.credit}</p>
          <div className="ui-project-links">
            {project.demo && <OutLink href={project.demo}>{project.demoLabel || "Open preview"}</OutLink>}
            {project.repository && <OutLink href={`${project.repository}/tree/${project.sourceSha}`}>View source</OutLink>}
            {project.license && <OutLink href={project.license.url}>{project.license.name} license</OutLink>}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function UiGallery() {
  const [category, setCategory] = useState("All work");
  useEffect(() => {
    const target = () => UI_PROJECTS.find(project => `#${project.slug}` === window.location.hash);
    const scrollToTarget = () => {
      const project = target();
      if (project) document.getElementById(project.slug)?.scrollIntoView();
    };
    // React mounts after initial fragment navigation. Subsequent fragments also
    // need to reveal a study hidden by the visitor's category filter.
    let frame = requestAnimationFrame(scrollToTarget);
    const onHashChange = () => {
      if (!target()) return;
      setCategory("All work");
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(scrollToTarget);
      });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
  const categories = ["All work", ...new Set(UI_PROJECTS.map(project => project.category))];
  const visible = UI_PROJECTS.filter(project => category === "All work" || project.category === category);
  return (
    <main id="ui-gallery" className="ui-gallery" tabIndex={-1}>
      <header className="ui-intro">
        <div><h1>Interfaces,<br /><em>in practice.</em></h1><p>Dashboards, editors and tools I’ve built. Real screens, the decisions behind them, and code you can explore.</p></div>
        <div className="ui-intro-aside"><p>Harshith Vaddiparthy<br /><span>AI consultant &amp; product builder</span></p><OutLink href={UI_GALLERY.repository}>Explore the GitHub collection</OutLink></div>
      </header>
      <div className="ui-collection-nav">
        <div className="ui-category-picker" role="group" aria-label="Filter interface studies">{categories.map(item => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <span role="status" aria-live="polite">{visible.length} {visible.length === 1 ? "project" : "projects"}</span>
      </div>
      <div className="ui-studies">{visible.map((project, index) => <ProjectStudy key={project.slug} project={project} first={index === 0} />)}</div>
      <section className="ui-colophon"><h2>Explore the work.<br /><em>Build on the code.</em></h2><div><p>The gallery code is MIT licensed. Each featured project keeps its own license and credits. Screens with sample data are labelled in their captions.</p><OutLink href={UI_GALLERY.repository}>Get the gallery source</OutLink><a href="https://www.harshith.com/consulting">Work with me</a></div></section>
    </main>
  );
}
