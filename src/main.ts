import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './style.css'

import App from './App.vue'

import MainView from './views/MainView.vue'
import FollowView from './views/FollowView.vue'
import ContactView from './views/ContactView.vue'

const routes = [
    { path: '/', component: MainView },
    { path: '/follow', component: FollowView },
    { path: '/contact', component: ContactView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App)
    .use(router)
    .mount('#app')
