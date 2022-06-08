export default [
  {
    path: '/table/vue-good-table',
    name: 'table-good-table',
    component: () => import('@/views/table/vue-good-table/GoodTable.vue'),
    meta: {
      pageTitle: 'Good Table',
      contentClass: 'ecommerce-application',
      breadcrumb: [
        {
          text: 'Table',
        },
        {
          text: 'Good Table',
          active: true,
        },
      ],
    },
  },
]
