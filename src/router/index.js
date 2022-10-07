import { createRouter, createWebHashHistory } from 'vue-router';
import UserBoard from '../views/UserBoard.vue';

const routes = [
  {
    path: '/',
    name: 'userBoard',
    component: UserBoard,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/index.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/UserProducts.vue'),
      },
      {
        path: 'products/:id',
        name: 'product',
        component: () => import('../views/UserProduct.vue'),
      },
      {
        path: 'favor',
        name: 'favor',
        component: () => import('../views/UserFavor.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/UserCart.vue'),
      },
      {
        path: 'check',
        name: 'check',
        component: () => import('../views/UserCheck.vue'),
      },
      {
        path: 'payment/:orderId',
        name: 'payment',
        component: () => import('../views/UserPayment.vue'),
      },
      {
        path: 'success',
        name: 'success',
        component: () => import('../views/UserSuccess.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/UserOrder.vue'),
      },
      {
        path: 'ordercheck/:orderId',
        name: 'ordercheck',
        component: () => import('../views/UserOrderCheck.vue'),
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
    component: () => import('../views/admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'adminProducts',
        component: () => import('../views/admin/AdminProducts.vue'),
      },
      {
        path: 'orders',
        name: 'adminOrders',
        component: () => import('../views/admin/AdminOrder.vue'),
      },
      {
        path: 'coupon',
        name: 'adminCoupon',
        component: () => import('../views/admin/AdminCoupon.vue'),
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
