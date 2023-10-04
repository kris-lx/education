// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head : {
      titleTemplate:'%s - HomgITGrop',
      title: 'HomgITGrop',
      charset:'utf-8',
      meta:[
        {name:'description', content: 'jjjjjjjjjjjjjjjjjjj'},
        {name:'keywords',content: 'dfgdfsgsd'}
      ], 
      script:[
        // {src: 'https://'}
      ],
      link:[
        // {rel: 'stylesheet'}
      ]
    }
  },
    css:[
        '@/assets/css/main.css'
    ],
    modules: [
        'nuxt-windicss',
    ],
    build: {
        transpile:
          process.env.NODE_ENV === 'production'
            ? [
                'naive-ui',
                'vueuc',
                '@css-render/vue3-ssr',
                '@juggle/resize-observer'
              ]
            : ['@juggle/resize-observer']
      },
      vite: {
        optimizeDeps: {
          include:
            process.env.NODE_ENV === 'development'
              ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
              : []
        }
      }
})
