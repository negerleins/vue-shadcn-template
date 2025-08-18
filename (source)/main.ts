import { createApp } from 'vue'
import '@/index.css'
import App from '@/app/App.vue'
import router from '@/router'

try {
    const app = createApp(App)
    const rt = app.use(router) 
    const vm = app.mount('#app')

    if (rt) {
        console.log('✅ Router installed successfully.')
    } else {
        console.error('❌ Router installation failed.')
    }

    if (vm && vm.$el) {
        console.log('✅ Vue application mounted successfully.')
    } else {
        console.error('❌ Vue application failed to mount: No root element found')
    }
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error('❌ Error mounting Vue application:', error.message)
        console.error('Stack trace:', error.stack)
    } else {
        console.error('❌ Unknown error:', String(error))
    }
}
