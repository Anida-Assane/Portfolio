// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Le site d'une DevSecOps",
  tagline: "Ce site présentes",
  favicon: "img/devsecops.webp",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "My Site Logo",
          src: "img/devsecops.webp",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            type: "dropdown",
            label: "Projets",
            position: "left",
            items: [
              {
                label: "Terraform",
                to: "/docs/category/terraform",
              },
              {
                label: "Ansible",
                to: "/docs/category/ansible",
              },
              {
                label: "Jenkins",
                to: "/docs/category/jenkins",
              },
              {
                label: "Kubernetes",
                to: "/docs/category/kubernetes",
              },

              // ... plus d'éléments
            ],
          },

          { label: "Blog", position: "left", to: "/blog" },
          { label: "A propos", position: "right", to: "/blog" },
          { label: "Mon CV", position: "right", to: "/blog" },
          {
            type: "dropdown",
            label: "Liens sociaux",
            position: "right",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/anida-assane-81720a21b/",
              },
              {
                label: "Github",
                href: "https://github.com/Anida-Assane",
              },
            ],
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Copyright © Portfolio, Assane Yacouba Anida`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
