import Manager from './manager'
import App from '@/app/App.vue'

const Application = new Manager(App, [
    { path: '/', name: 'home', component: () => import('./app/pages/Home.vue') },
    { path: '/about', name: 'about', component: () => import('./app/pages/About.vue') },
    { path: '/contact', name: 'contact', component: () => import('./app/pages/Contact.vue') },
])

Application.mount().then((object) => {
    console.log('Vue application is running.', object);
}).catch((error: any) => {
    if (error instanceof Error) {
        console.error('Error during Vue application mount:', error.message);
        console.error('Stack trace:', error.stack);
    } else {
        console.error('Unknown error during Vue application mount:', String(error));
    }
});