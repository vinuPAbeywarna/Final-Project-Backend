import Vue from 'vue';
import VueRouter from "vue-router";

const Authentication = () => import(/* webpackChunkName: "Authentication" */ '../Auth/Authentication');

const Home = () => import(/* webpackChunkName: "Home" */ '../Views/Home');
const UserProfile =() => import(/*webpackChunkName: "AdminProfile" */ '../Views/UserProfile');
const SellerAccountApproval =() => import(/*webpackChunkName: "SellerAccountApproval" */ '../Views/SellerAccountApproval');
const UserDetails =() => import(/*webpackChunkName: "UserDetails" */ '../Views/UserDetails');
const Cart =() => import(/*webpackChunkName: "Cart" */ '../Views/Cart');
const WishList =() => import(/*webpackChunkName: "WishList" */ '../Views/WishList');
const Products =() => import(/*webpackChunkName: "Products" */ '../Views/Products');


Vue.use(VueRouter);

const routes = [
    { name:'Auth',path: '/auth', component: Authentication },

    { name:'Home',path: '/', component: Home },

    { name:'AdminProfile',path: '/user-profile', component: UserProfile },
    { name:'SellerAccountApproval',path: '/seller-account-approval', component: SellerAccountApproval },
    { name:'UserDetails',path: '/user-details', component: UserDetails },
    { name:'Cart',path: '/cart', component: Cart },
    { name:'WishList',path: '/wish-list', component: WishList },
    { name:'Products',path: '/products', component: Products },
];

const Router = new VueRouter({
    mode: 'history',
    routes
});

export default Router;
