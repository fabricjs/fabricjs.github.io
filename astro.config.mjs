import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    favicon: '/favicon.ico',
    title: 'Docs and Guides',
    disable404Route: true,
    logo: {
      src: './src/assets/logo.svg',
    },
    components: {
      // Override the default `SocialIcons` component.
      Header: './src/components/Header/Header.astro',
    },
    sidebar: [
      {
        label: 'Docs',
        // Collapse the group and its autogenerated subgroups by default.
        collapsed: true,
        autogenerate: { directory: 'docs' },
      },
      {
        label: 'Api',
        // Collapse the group and its autogenerated subgroups by default.
        collapsed: true,
        autogenerate: { directory: 'api' },
      },
    ],
    customCss: [
      // Relative path to your custom CSS file
      './src/layouts/colorvars.css',
    ],
    plugins: [
      // Generate the documentation.
      starlightTypeDoc({
        entryPoints: ['./fabric.js/fabric.ts'],
        tsconfig: './fabric.js/typedoc.config.json',
        typeDoc: {
          plugin: ['typedoc-plugin-no-inherit'],
          readme: 'none',
          gitRemote: 'https://github.com/fabricjs/fabric.js/blob',
          gitRevision: 'v6.0.0-rc4',
          entryFileName: 'index.md',
          includeVersion: true,
          sourceLinkExternal: true,
          sourceLinkTemplate: 'https://github.com/fabricjs/fabric.js/blob/{gitRevision}/{path}#L{line}',
        },
      }),
    ],
  }), react()],
});