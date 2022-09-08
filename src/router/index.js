import { createRouter, createWebHashHistory } from 'vue-router';
import ClientBoard from '../views/ClientBoard.vue';

const routes = [
  {
    path: '/',
    name: 'clientboard',
    component: ClientBoard,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/index.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/ClientProducts.vue'),
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('../views/ClientProduct.vue'),
      },
      {
        path: 'favor',
        name: 'favor',
        component: () => import('../views/ClientFavor.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/ClientCart.vue'),
      },
      {
        path: 'check',
        name: 'check',
        component: () => import('../views/ClientCheck.vue'),
      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import('../views/ClientPayment.vue'),
      },
      {
        path: 'success',
        name: 'success',
        component: () => import('../views/ClientSuccess.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/ClientOrder.vue'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/Login.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'serverproducts',
        name: 'serverproducts',
        component: () => import('../views/ServerProducts.vue'),
      },
      {
        path: 'serverorder',
        name: 'serverorder',
        component: () => import('../views/ServerOrder.vue'),
      },
      {
        path: 'servercoupon',
        name: 'servercoupon',
        component: () => import('../views/ServerCoupon.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
