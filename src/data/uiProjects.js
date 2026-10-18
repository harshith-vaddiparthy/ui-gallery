// Public case metadata and verified screenshots. See public/ui-media/capture-manifest.json.
export const UI_GALLERY = {
  "repository": "https://github.com/harshith-vaddiparthy/ui-gallery",
  "canonical": "https://www.harshith.com/ui",
  "title": "UI Gallery — Harshith Vaddiparthy",
  "description": "Open-source dashboards, editors and document workflows by Harshith Vaddiparthy, with real screens, design decisions and source code."
};

export const UI_PROJECTS = [
  {
    "slug": "grain-studio",
    "name": "Grain Studio",
    "category": "Editors",
    "status": "Live app",
    "summary": "A local-first image texture workbench with a before-and-after canvas, material controls and deliberate export options.",
    "decisions": [
      "Keep effect selection, the comparison canvas and parameter controls in one editing workspace.",
      "Use a before-and-after scrubber to compare a texture with the original image.",
      "Make export visible through format, size, progress and cancellation states."
    ],
    "stack": [
      "React",
      "TypeScript",
      "Vite",
      "Phosphor Icons"
    ],
    "credit": "Application design and implementation by Harshith Vaddiparthy. Behavior was independently implemented after studying Textures; the tactile dock is informed by ThreeUI Community. React, Vite and Phosphor Icons provide the runtime foundations.",
    "repository": "https://github.com/harshith-vaddiparthy/grain-studio",
    "sourceSha": "1efb17c2f33c5e2a3e11ab01293633725ae7a2dc",
    "demo": "https://grainstudio.harshith.com/",
    "demoLabel": "Open the image editor",
    "screens": [
      {
        "label": "Texture workbench",
        "src": "/ui-media/grain-studio-editor-desktop.webp",
        "full": "/ui-media/grain-studio-editor-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "Grain Studio editor showing the included sample in Riso Print, its texture dock and material controls.",
        "caption": "Texture workbench. Included studio sample artwork."
      },
      {
        "label": "Original and texture comparison",
        "src": "/ui-media/grain-studio-compare-desktop.webp",
        "full": "/ui-media/grain-studio-compare-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "Grain Studio split comparison of the included generated sample before and after Riso Print.",
        "caption": "Original and texture comparison. Included studio sample artwork."
      },
      {
        "label": "Export controls",
        "src": "/ui-media/grain-studio-export-desktop.webp",
        "full": "/ui-media/grain-studio-export-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "Grain Studio export dialog showing PNG/JPEG/WebP, output dimensions and transparency controls.",
        "caption": "Export controls. Included studio sample artwork."
      },
      {
        "label": "Phone editor",
        "src": "/ui-media/grain-studio-editor-mobile.webp",
        "full": "/ui-media/grain-studio-editor-mobile.png",
        "width": 390,
        "height": 844,
        "alt": "Grain Studio phone layout with source preview, image actions, texture dock and material controls.",
        "caption": "Phone editor. Included studio sample artwork."
      }
    ],
    "license": {
      "name": "MIT",
      "url": "https://github.com/harshith-vaddiparthy/grain-studio/blob/1efb17c2f33c5e2a3e11ab01293633725ae7a2dc/LICENSE"
    }
  },
  {
    "slug": "ai-content-dashboard",
    "name": "AI Content Dashboard",
    "category": "Dashboards",
    "status": "Sample dashboard",
    "summary": "A workspace for planning, generating and organizing content, with one shared model behind its library, metrics and charts.",
    "decisions": [
      "Separate creation, the content library and settings with a flat sidebar and consistent page headers.",
      "Connect summary metrics, activity charts and recent content to the same sample-content model.",
      "Reuse content rows and type/status labels across the overview and library."
    ],
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "shadcn/ui",
      "Base UI",
      "Hugeicons"
    ],
    "credit": "Content workflow and interface composition by Harshith Vaddiparthy, built on shadcn/ui, Base UI, Hugeicons and the tweakcn Caffeine theme.",
    "repository": "https://github.com/harshith-vaddiparthy/ai-content-dashboard",
    "sourceSha": "fa0f1a0b64785f34d51f8caae5ef6aab8768ade4",
    "demo": "https://ai-content-dashboard-murex.vercel.app/dashboard",
    "demoLabel": "Open the sample dashboard",
    "screens": [
      {
        "label": "Content overview",
        "src": "/ui-media/ai-content-dashboard-overview-desktop.webp",
        "full": "/ui-media/ai-content-dashboard-overview-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "AI Content Dashboard overview with fictional sample content metrics, activity and content mix.",
        "caption": "Content overview. Fictional sample content; metrics are illustrative."
      },
      {
        "label": "Content library",
        "src": "/ui-media/ai-content-dashboard-library-desktop.webp",
        "full": "/ui-media/ai-content-dashboard-library-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "AI Content Dashboard library with fictional sample pieces, status tabs and type filters.",
        "caption": "Content library. Fictional sample content; metrics are illustrative."
      },
      {
        "label": "Brief to draft workspace",
        "src": "/ui-media/ai-content-dashboard-brief-desktop.webp",
        "full": "/ui-media/ai-content-dashboard-brief-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "AI Content Dashboard blog brief form and empty draft review pane, without generation.",
        "caption": "Brief to draft workspace. Fictional sample content; metrics are illustrative."
      },
      {
        "label": "Phone overview",
        "src": "/ui-media/ai-content-dashboard-overview-mobile.webp",
        "full": "/ui-media/ai-content-dashboard-overview-mobile.png",
        "width": 390,
        "height": 844,
        "alt": "AI Content Dashboard phone layout showing stacked fictional sample metrics.",
        "caption": "Phone overview. Fictional sample content; metrics are illustrative."
      }
    ],
    "license": {
      "name": "MIT",
      "url": "https://github.com/harshith-vaddiparthy/ai-content-dashboard/blob/fa0f1a0b64785f34d51f8caae5ef6aab8768ade4/LICENSE"
    }
  },
  {
    "slug": "ugc-genie",
    "name": "UGC Genie",
    "category": "Workflows",
    "status": "Local demo",
    "summary": "A node-based production workspace that makes product intake, creative direction and video-production stages understandable.",
    "decisions": [
      "Map product input, analysis, concept, generation, rendering and delivery onto ordered workflow nodes.",
      "Show each step’s status, progress and message instead of hiding the process behind one spinner.",
      "Keep product input, creative direction and output review alongside the workflow."
    ],
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "React Flow",
      "shadcn/ui"
    ],
    "credit": "Workflow composition and implementation by Harshith Vaddiparthy, using React Flow, shadcn/ui, Base UI and the tweakcn claymorphism theme.",
    "repository": "https://github.com/harshith-vaddiparthy/UGC-dashboard",
    "sourceSha": "274c42cc56864fb34c17b56e4743386aa4332e3f",
    "demo": null,
    "demoLabel": "Run public-demo mode locally",
    "screens": [
      {
        "label": "Simulated workflow detail",
        "src": "/ui-media/ugc-genie-workflow-zoom-desktop.webp",
        "full": "/ui-media/ugc-genie-workflow-zoom-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "UGC Genie client-side demo in progress, enlarged using the native canvas zoom controls. No generated video or provider execution is shown.",
        "caption": "Simulated workflow detail. Credit-free local demo with simulated workflow stages."
      },
      {
        "label": "Studio intake",
        "src": "/ui-media/ugc-genie-studio-desktop.webp",
        "full": "/ui-media/ugc-genie-studio-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "UGC Genie studio in safe local public-demo mode with product intake, creative direction and six-stage workflow canvas.",
        "caption": "Studio intake. Credit-free local demo with simulated workflow stages."
      },
      {
        "label": "Phone studio",
        "src": "/ui-media/ugc-genie-studio-mobile.webp",
        "full": "/ui-media/ugc-genie-studio-mobile.png",
        "width": 390,
        "height": 844,
        "alt": "UGC Genie phone layout in safe local public-demo mode with no-credit label and product intake controls.",
        "caption": "Phone studio. Credit-free local demo with simulated workflow stages."
      }
    ],
    "license": {
      "name": "MIT",
      "url": "https://github.com/harshith-vaddiparthy/UGC-dashboard/blob/274c42cc56864fb34c17b56e4743386aa4332e3f/LICENSE"
    }
  },
  {
    "slug": "pulse-crm",
    "name": "PulseCRM",
    "category": "Dashboards",
    "status": "Local demo",
    "summary": "A sales workspace that brings pipeline health, priority deals, next actions and account activity into one reviewable view.",
    "decisions": [
      "Adapt the shadcn/ui sidebar-07 foundation into CRM navigation and a consistent application shell.",
      "Bring pipeline KPIs, priority deals, next actions and account activity into one sales overview.",
      "Keep Sales Copilot suggestions review-required and clearly distinguish demo data from live data."
    ],
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "shadcn/ui",
      "Supabase"
    ],
    "credit": "CRM application and workflow customization by Harshith Vaddiparthy; the navigation shell adapts shadcn/ui’s sidebar-07 foundation.",
    "repository": "https://github.com/harshith-vaddiparthy/gen-ai-bootcamp-crm",
    "sourceSha": "007a6ca08158b052419b73c32432cb0108401ed7",
    "demo": null,
    "demoLabel": "Run the bundled-data preview locally",
    "screens": [
      {
        "label": "Sales overview",
        "src": "/ui-media/pulse-crm-overview-desktop.webp",
        "full": "/ui-media/pulse-crm-overview-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "PulseCRM sales overview with bundled fictional pipeline, account and task fixtures, rendered in the intended Geist font.",
        "caption": "Sales overview. Bundled CRM demo records; metrics are illustrative."
      },
      {
        "label": "Forecast workspace",
        "src": "/ui-media/pulse-crm-forecast-desktop.webp",
        "full": "/ui-media/pulse-crm-forecast-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "PulseCRM forecast page with bundled fictional commit, upside and risk figures, stage confidence and representative coverage.",
        "caption": "Forecast workspace. Bundled CRM demo records; metrics are illustrative."
      },
      {
        "label": "Human review workspace",
        "src": "/ui-media/pulse-crm-recommendations-desktop.webp",
        "full": "/ui-media/pulse-crm-recommendations-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "PulseCRM recommendations layout with bundled fictional suggestions and task/note review controls. No AI generation or CRM write was performed.",
        "caption": "Human review workspace. Bundled CRM demo records; metrics are illustrative."
      },
      {
        "label": "Phone sales overview",
        "src": "/ui-media/pulse-crm-overview-mobile.webp",
        "full": "/ui-media/pulse-crm-overview-mobile.png",
        "width": 390,
        "height": 844,
        "alt": "PulseCRM responsive phone overview using the same isolated bundled fixtures and corrected Geist font.",
        "caption": "Phone sales overview. Bundled CRM demo records; metrics are illustrative."
      }
    ],
    "license": {
      "name": "MIT",
      "url": "https://github.com/harshith-vaddiparthy/gen-ai-bootcamp-crm/blob/007a6ca08158b052419b73c32432cb0108401ed7/LICENSE"
    }
  },
  {
    "slug": "talent-lens",
    "name": "Talent Lens",
    "category": "Dashboards",
    "status": "Demo UI prototype",
    "summary": "An interface prototype for a workforce dashboard and a searchable document library.",
    "decisions": [
      "Use distinct color and type treatments for navigation, trends and document metadata.",
      "Keep demonstration and preview notices beside metrics, connector labels and storage controls.",
      "Open document metadata beside the searchable library so the list stays in context."
    ],
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "shadcn/ui",
      "Base UI",
      "Recharts"
    ],
    "credit": "Application prototype by Harshith Vaddiparthy, built on shadcn/ui and Base UI. The TweakCN cyberpunk preset supplies the visual foundation, with Outfit and Fira Code.",
    "repository": "https://github.com/harshith-vaddiparthy/talent-lens",
    "sourceSha": "c92ae8d0f255214c0ecf4b283b4f9a33fa7ca75a",
    "license": {
      "name": "MIT",
      "url": "https://github.com/harshith-vaddiparthy/talent-lens/blob/c92ae8d0f255214c0ecf4b283b4f9a33fa7ca75a/LICENSE"
    },
    "demo": null,
    "screens": [
      {
        "label": "Workspace Library preview",
        "src": "/ui-media/talent-lens-library-desktop.webp",
        "full": "/ui-media/talent-lens-library-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "Talent Lens library preview with demonstration document rows, filters and disabled persistent-library controls.",
        "caption": "Workspace Library preview. Bundled demonstration data; source and access labels are preview states."
      },
      {
        "label": "Demonstration dashboard",
        "src": "/ui-media/talent-lens-dashboard-desktop.webp",
        "full": "/ui-media/talent-lens-dashboard-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "Talent Lens dark dashboard with its demonstration-data notice, overview cards and chart.",
        "caption": "Demonstration dashboard. Bundled demonstration data; source and access labels are preview states."
      },
      {
        "label": "Demo document detail",
        "src": "/ui-media/talent-lens-document-detail-desktop.webp",
        "full": "/ui-media/talent-lens-document-detail-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "Talent Lens document detail drawer showing the metadata and summary of a bundled demonstration document.",
        "caption": "Demo document detail. Bundled demonstration data; source and access labels are preview states."
      },
      {
        "label": "Mobile demonstration dashboard",
        "src": "/ui-media/talent-lens-dashboard-mobile.webp",
        "full": "/ui-media/talent-lens-dashboard-mobile.png",
        "width": 390,
        "height": 844,
        "alt": "Mobile-width Talent Lens dashboard with the demo-data notice and stacked summary cards.",
        "caption": "Mobile demonstration dashboard. Bundled demonstration data; source and access labels are preview states."
      }
    ]
  },
  {
    "slug": "legal-vault",
    "name": "Kenzai Legal Vault",
    "category": "Workflows",
    "status": "Local document workflow",
    "summary": "A PDF-inspection workspace that keeps original pages beside extraction, diagnostics and cited search results.",
    "decisions": [
      "Keep the source PDF beside extracted text so the reader can compare them.",
      "Expose page-level native/OCR status and diagnostics alongside the output.",
      "Link local search snippets back to their source-page citations."
    ],
    "stack": [
      "Next.js",
      "React",
      "shadcn/ui",
      "Base UI",
      "Firecrawl PDF Inspector"
    ],
    "credit": "Document-workflow interface by Harshith Vaddiparthy. shadcn/Base UI provides the components, the browser displays the PDF, and Firecrawl PDF Inspector provides the parsing engine.",
    "repository": "https://github.com/harshith-vaddiparthy/kenzai-legal-vault",
    "sourceSha": "ba0d2104c0cdf376085fae60e6601127d18ccb35",
    "license": {
      "name": "MIT",
      "url": "https://github.com/harshith-vaddiparthy/kenzai-legal-vault/blob/ba0d2104c0cdf376085fae60e6601127d18ccb35/LICENSE"
    },
    "demo": null,
    "screens": [
      {
        "label": "Source PDF and parser output",
        "src": "/ui-media/legal-vault-source-view-desktop.webp",
        "full": "/ui-media/legal-vault-source-view-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "Legal Vault showing a fictional two-page project brief in the native PDF viewer alongside actual local parser output.",
        "caption": "Source PDF and parser output. Fictional native-text PDF, processed and searched locally."
      },
      {
        "label": "Page-level Markdown",
        "src": "/ui-media/legal-vault-extracted-text-desktop.webp",
        "full": "/ui-media/legal-vault-extracted-text-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "Legal Vault source page two beside its real native-text Markdown extraction.",
        "caption": "Page-level Markdown. Fictional native-text PDF, processed and searched locally."
      },
      {
        "label": "Local phrase search",
        "src": "/ui-media/legal-vault-local-search-desktop.webp",
        "full": "/ui-media/legal-vault-local-search-desktop.png",
        "width": 1600,
        "height": 1000,
        "alt": "Legal Vault showing four actual local phrase-search matches with page citations and highlighted words from the fictional PDF.",
        "caption": "Local phrase search. Fictional native-text PDF, processed and searched locally."
      },
      {
        "label": "Phone reading view",
        "src": "/ui-media/legal-vault-extracted-text-mobile.webp",
        "full": "/ui-media/legal-vault-extracted-text-mobile.png",
        "width": 390,
        "height": 844,
        "alt": "Legal Vault phone viewport scrolled to extracted page-two text from the same fictional local PDF.",
        "caption": "Phone reading view. Fictional native-text PDF, processed and searched locally."
      }
    ]
  }
];
