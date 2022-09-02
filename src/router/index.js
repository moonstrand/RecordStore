import { createRouter, createWebHashHistory } from 'vue-router';
import ClientBoard from '../views/ClientBoard.vue';

const routes = [
  {
    path: '/',
    name: 'ClientBoard',
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
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
