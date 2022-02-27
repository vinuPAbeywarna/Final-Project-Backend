import Vue from 'vue';
import VueRouter from "vue-router";

const Authentication = () => import(/* webpackChunkName: "Authentication" */ '../Auth/Authentication');

const Home = () => import(/* webpackChunkName: "Home" */ '../Views/Home');
const AdminProfile =() => import(/*webpackChunkName: "AdminProfile" */ '../Views/AdminProfile');
const SellerAccountApproval =() => import(/*webpackChunkName: "SellerAccountApproval" */ '../Views/SellerAccountApproval');
const UserDetails =() => import(/*webpackChunkName: "UserDetails" */ '../Views/UserDetails');


Vue.use(VueRouter);

const routes = [
    { name:'Auth',path: '/auth', component: Authentication },

    { name:'Home',path: '/', component: Home },

    { name:'AdminProfile',path: '/admin-profile', component: AdminProfile },
    { name:'SellerAccountApproval',path: '/seller-account-approval', component: SellerAccountApproval },
    { name:'UserDetails',path: '/user-details', component: UserDetails },
];

const Router = new VueRouter({
    mode: 'history',
    routes
});

export default Router;
