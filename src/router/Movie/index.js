export default {
    path : '/movie',
    component : () => import('@/views/Movie'),
    children : [
        {
            path: 'city',
            component: () => import('@/components/city/index.vue')
        },
        {
            path: 'coming',
            component: () => import('@/components/coming/index.vue')
        },
        {
            path: 'nowShowing',
            component: () => import('@/components/nowShowing/index.vue')
        },
        {
            path: 'search',
            component: () => import('@/components/search/index.vue')
        },
        {
            path: '/movie',
            redirect : '/movie/nowShowing'
        }
    ]
}