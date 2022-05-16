import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: '/',
        redirect: '/connect-two-nodes'
    },
    {
        path: '/connect-two-nodes',
        name: 'connect-tow-nodes',
        component: () => import('/@/views/connect-two-nodes.vue')
    },
    {
        path: '/draggable-node',
        name: 'draggable-node',
        component: () => import('/@/views/draggable-node.vue')
    },
    {
        path: '/connect-other-args',
        name: 'connect-other-args',
        component: () => import('/@/views/connect-other-args.vue')
    },
    {
        path: '/set-connect-default-value',
        name: 'set-connect-default-value',
        component: () => import('/@/views/set-connect-default-value.vue')
    },
    {
        path: '/set-connect-style',
        name: 'set-connect-style',
        component: () => import('/@/views/set-connect-style.vue')
    },
    {
        path: '/set-connect-arrow',
        name: 'set-connect-arrow',
        component: () => import('/@/views/set-connect-arrow.vue')
    },
    {
        path: '/add-end-point',
        name: 'add-end-point',
        component: () => import('/@/views/add-end-point.vue')
    },
    {
        path: '/drag-create-connect',
        name: 'drag-create-connect',
        component: () => import('/@/views/drag-create-connect.vue')
    },
    {
        path: '/set-end-point-style',
        name: 'set-end-point-style',
        component: () => import('/@/views/set-end-point-style.vue')
    },
    {
        path: '/node-change-size',
        name: 'node-change-size',
        component: () => import('/@/views/node-change-size.vue')
    },
    {
        path: '/limit-node-drag-area',
        name: 'limit-node-drag-area',
        component: () => import('/@/views/limit-node-drag-area.vue')
    },
    {
        path: '/node-grid-align',
        name: 'node-grid-align',
        component: () => import('/@/views/node-grid-align.vue')
    },
    {
        path: '/click-delete-line',
        name: 'click-delete-line',
        component: () => import('/@/views/click-delete-line.vue')
    },
    {
        path: '/delete-node-and-line',
        name: 'delete-node-and-line',
        component: () => import('/@/views/delete-node-and-line.vue')
    },
    {
        path: '/dynamic-connection-end-point',
        name: 'dynamic-connection-end-point',
        component: () => import('/@/views/dynamic-connection-end-point.vue')
    },
    {
        path: '/connection-before-if',
        name: 'connection-before-if',
        component: () => import('/@/views/connection-before-if.vue')
    },
    {
        path: '/one-end-point-2-more-line',
        name: 'one-end-point-2-more-line',
        component: () => import('/@/views/one-end-point-2-more-line.vue')
    },
    {
        path: '/node-as-source-or-target',
        name: 'node-as-source-or-target',
        component: () => import('/@/views/node-as-source-or-target.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;
