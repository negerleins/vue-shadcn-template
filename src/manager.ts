import { createApp, type Component } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import '@/index.css'

export default class Manager {
    private router: any;
    private app: any;
    private appMount: any = null;

    constructor(app: Component, routes: Array<any> = []) {
        this.app = createApp(app);
        this.router = createRouter({
            history: createWebHistory(),
            routes: routes
        });
    }

    mount(): Promise<void> {
       return new Promise<void>((resolve, reject) => {
            try {
                this.app.use(this.router);
                this.appMount = this.app.mount('#app');

                if (this.appMount && this.appMount.$el) {
                    console.log('✅ Vue application mounted successfully.');
                    resolve(this.appMount);
                } else {
                    console.error('❌ Vue application failed to mount: No root element found');
                    reject(new Error('Vue application failed to mount'));
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error('❌ Error mounting Vue application:', error.message);
                    console.error('Stack trace:', error.stack);
                } else {
                    console.error('❌ Unknown error:', String(error));
                }
                reject(error);
            }
        });
    }
}