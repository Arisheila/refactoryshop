// 

import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css";





//import All components tobe used for routing
import HomeSection from './components/HomeSection';
import ProgramSection from './components/ProgramSection';
import CourseSection from './components/CourseSection';
import StaffSection from './components/StaffSection';
import AlumniSection from './components/AlumniSection';



//creating Routes for Navigating frontend Elements/components
const routes = [
    {path: '/', component: HomeSection},
    {path: '/', component: ProgramSection},
    {path: '/', component: AlumniSection},
    {path: '/', component: StaffSection},
    {path: '/', component: CourseSection},
    
]

//create a router for the application 
const router = VueRouter.createRouter({
    history : VueRouter.createwebHashHistory(),
    routes,
})
//6.Registering  the Router

// crete a vue application Instance

const app = createApp(App)
//register router Middleware  
app.use(router)
//mount 

app.mount('#app')


