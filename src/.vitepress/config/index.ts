import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { zh } from './zh'
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(defineConfig({
  ...shared,
  // Set DOCS_BASE (e.g. /NapCatDocs/) for project-page deployments; defaults to root.
  base: process.env.DOCS_BASE || '/',
  locales: {
    root: { label: '简体中文', ...zh }
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  }
}));
