const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'My App',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [
          'My_App',
          'Basics',
          'Getting Started',
          'Base',
          'Technologies',
          'Configuration',
          'Documentation',
        ],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/erhuz/Sites/my-app/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.mdx',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'My App',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/erhuz/Sites/my-app',
          templates:
            '/Users/erhuz/Sites/my-app/node_modules/docz-core/dist/templates',
          docz: '/Users/erhuz/Sites/my-app/.docz',
          cache: '/Users/erhuz/Sites/my-app/.docz/.cache',
          app: '/Users/erhuz/Sites/my-app/.docz/app',
          appPackageJson: '/Users/erhuz/Sites/my-app/package.json',
          gatsbyConfig: '/Users/erhuz/Sites/my-app/gatsby-config.js',
          gatsbyBrowser: '/Users/erhuz/Sites/my-app/gatsby-browser.js',
          gatsbyNode: '/Users/erhuz/Sites/my-app/gatsby-node.js',
          gatsbySSR: '/Users/erhuz/Sites/my-app/gatsby-ssr.js',
          importsJs: '/Users/erhuz/Sites/my-app/.docz/app/imports.js',
          rootJs: '/Users/erhuz/Sites/my-app/.docz/app/root.jsx',
          indexJs: '/Users/erhuz/Sites/my-app/.docz/app/index.jsx',
          indexHtml: '/Users/erhuz/Sites/my-app/.docz/app/index.html',
          db: '/Users/erhuz/Sites/my-app/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
