import { createRouter, createWebHistory } from "vue-router";
import UserIndex from './components/UserIndex'
import UserCreate from './components/userform/UserCreate'
import UserEdit from './components/userform/UserEdit'

const routes = [
	{
		path: '/',
		name: 'user.index',
        component: UserIndex,
    },
    {
        path:'/create',
        name:'user.create',
        component: UserCreate
    },
    {
        path:'/edit/:id',
        name:'user.edit',
        component:UserEdit,
        props:true

    },
  
]
export default createRouter({
	history: createWebHistory(),
	routes
})