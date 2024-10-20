import { defaultTheme, defineUserConfig } from 'vuepress-webpack'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
  base: "/angular-training/",
  locales: {
    "/": {
      lang: "en-US",// this will be set as the lang attribute on <html>
      title: "Angular Training Platform",
      description: "Angular training Platform"
    },

  },

  head: [
    ['link', { rel: 'icon', href: 'logo.svg' }],
    ['meta', { name: 'theme-color', content: '#C3002F' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  theme: defaultTheme({
    logo: '/logo.svg',
    logoDark: '/logo.svg',
    navbar: [],
    sidebarDepth: 1,
    locales: {
      "/": {
        selectLanguageText: "Language",
        selectLanguageName: "English",
        sidebar: [
          "/introduction/",
          "/roadmap/",
          "/configuration/",
          "/components/",
          "/component-creation/",
          "/scope/",
          "/view-encapsulation/",
          "/component-communication/",
          "/siblings-to-siblings-communication/",
          "/data-binding/",
          "/directives/",
          "/pipes/",
          "/decorators/",
          "/life-cycle-hooks/",
          "/forms/",
          "/services/",
          "/routing/",
          "/http-client-module/",
          "/http-client/",
          "/destroy-ref/",
          "/http/",
          "/module/",
          "/route-parameters/",
          "/route-guards/",
          "/observables-in-angular/",
          "/unsubscribe-in-angular/",
          "/renderer2/",
          "/jit/",
          "/aot/",
          "/jit-vs-aot/",
          "/deferrable-views/",
          "/meta-tags/",
          "/security/",
          "/standalone-components/",
          "/angular-signals/",
          "/angular-animations/",
          "/angular-universal/",
          "/bootstrap/",
          "/angular-material/",
          "/tailwind-css/",
          "/primeng/",
          "/spa/",
          "/pwa/",
          "/cli-commands/",
          "/version-compatibility/",
          "/deploying-an-angular-application/",
          "/imports/",
          "/typescript/",
          "/rxjs/",
          "/ngrx/",
          "/debugging/",
          "/more-from"
      ]
      
      },

     
    },
    editLink: false,
    lastUpdated: false,
    contributors: false
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ]
})
