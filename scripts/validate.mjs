import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { UI_GALLERY, UI_PROJECTS } from "../src/data/uiProjects.js";

const root = resolve(import.meta.dirname, "..");
assert(UI_PROJECTS.length > 0, "Gallery needs real projects");
assert.equal(new Set(UI_PROJECTS.map(p => p.slug)).size, UI_PROJECTS.length, "Duplicate case anchor");
assert.equal(UI_GALLERY.canonical, "https://www.harshith.com/ui");
for (const project of UI_PROJECTS) {
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug), "Invalid public anchor");
  assert(project.name && project.summary && project.credit && project.decisions?.length, `${project.slug}: incomplete notes`);
  assert(/^https:\/\/github.com\/harshith-vaddiparthy\/[A-Za-z0-9._-]+$/.test(project.repository), "Unexpected source repository");
  assert(/^[a-f0-9]{40}$/.test(project.sourceSha), `${project.slug}: missing source revision`);
  assert(project.license?.url.includes(`/blob/${project.sourceSha}/`), "License must be revision-pinned");
  assert(project.screens?.length, `${project.slug}: no screenshots`);
  for (const screen of project.screens) {
    assert(typeof screen.src === "string" && screen.src.length > 0, "Missing screenshot src");
    assert(screen.alt && screen.caption && screen.label && screen.width > 0 && screen.height > 0, "Incomplete screenshot description");
    for (const path of [screen.src, screen.full].filter(Boolean)) {
      assert(/^\/ui-media\/[a-z0-9-]+\.(?:png|webp)$/.test(path), "Unsafe media path");
      assert(existsSync(resolve(root, `public${path}`)), `Missing image: ${path}`);
    }
  }
  assert(existsSync(resolve(root, `docs/${project.slug}.md`)), "Missing case study");
}
assert(readFileSync(resolve(root, "LICENSE"), "utf8").startsWith("MIT License"));
console.log(`Verified ${UI_PROJECTS.length} source-linked interface studies and all local media.`);
