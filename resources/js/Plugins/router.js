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
const Shops =() => import(/*webpackChunkName: "Shops" */ '../Views/Shops');
const Dashboard =() => import(/*webpackChunkName: "Dashboard" */ '../Views/Dashboard');
const ProductList =() => import(/*webpackChunkName: "ProductList" */ '../Views/ProductList');
const Orders =() => import(/*webpackChunkName: "Orders" */ '../Views/Orders');
const TrackingDetails =() => import(/*webpackChunkName: "TrackingDetails" */ '../Views/TrackingDetails');
const Settings =() => import(/*webpackChunkName: "Settings" */ '../Views/Settings');
const AddNewProducts =() => import(/*webpackChunkName: "AddNewProducts" */ '../Views/AddNewProducts');
const leatherItemShop =() => import(/*webpackChunkName: "leatherItemShop" */ '../Views/leatherItemShop');
const CheckoutPage =() => import(/*webpackChunkName: "CheckoutPage" */ '../Views/CheckoutPage');
const ArtAndCraftKitsShop =() => import(/*webpackChunkName: "ArtAndCraftKitsShop" */ '../Views/ArtAndCraftKitsShop');
const ArtAndCraftShop =() => import(/*webpackChunkName: "ArtAndCraftShop" */ '../Views/ArtAndCraftShop');




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
    { name:'Shops',path: '/shops', component: Shops },
    { name:'Dashboard',path: '/dashboard', component: Dashboard },
    { name:'ProductList',path: '/product-list', component: ProductList },
    { name:'Orders',path: '/orders', component: Orders },
    { name:'TrackingDetails',path: '/tracking-details', component: TrackingDetails },
    { name:'Settings',path: '/settings', component: Settings },
    { name:'AddNewProducts',path: '/add-new-products', component: AddNewProducts },
    { name:'leatherItemShop',path: '/leather-item-shop', component: leatherItemShop },
    { name:'CheckoutPage',path: '/checkout-page', component: CheckoutPage },
    { name:'ArtAndCraftKitsShop',path: '/art-and-craft-kit-shop', component: ArtAndCraftKitsShop },
    { name:'ArtAndCraftShop',path: '/art-and-craft-shop', component: ArtAndCraftShop },


];

const Router = new VueRouter({
    mode: 'history',
    routes
});

export default Router;
