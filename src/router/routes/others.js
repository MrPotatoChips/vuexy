export default [
  {
    path: '/apps/email',
    name: 'apps-email',
    component: () => import('@/views/apps/email/Email.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'email-application',
    },
  },
  {
    path: '/apps/email/:folder',
    name: 'apps-email-folder',
    component: () => import('@/views/apps/email/Email.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'email-application',
      navActiveLink: 'apps-email',
    },
    beforeEnter(to, _, next) {
      if (['sent', 'draft', 'starred', 'spam', 'trash'].includes(to.params.folder)) next()
      else next({ name: 'error-404' })
    },
  },
  {
    path: '/apps/email/label/:label',
    name: 'apps-email-label',
    component: () => import('@/views/apps/email/Email.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'email-application',
      navActiveLink: 'apps-email',
    },
    beforeEnter(to, _, next) {
      if (['personal', 'company', 'important', 'private'].includes(to.params.label)) next()
      else next({ name: 'error-404' })
    },
  },
  {
    path: '/page/blog/list',
    name: 'page-blog-list',
    component: () => import('@/views/pages/blog/BlogList.vue'),
    meta: {
      pageTitle: 'Blog List',
      breadcrumb: [
        {
          text: 'Pages',
        },
        {
          text: 'Blog',
        },
        {
          text: 'List',
          active: true,
        },
      ],
    },
  },
  {
    path: '/page/blog/:id',
    name: 'pages-blog-detail',
    component: () => import('@/views/pages/blog/BlogDetail.vue'),
    meta: {
      pageTitle: 'Blog Detail',
      breadcrumb: [
        {
          text: 'Pages',
        },
        {
          text: 'Blog',
        },
        {
          text: 'Detail',
          active: true,
        },
      ],
    },
  },
  {
    path: '/page/blog/edit/:id',
    name: 'page-blog-edit',
    component: () => import('@/views/pages/blog/BlogEdit.vue'),
    meta: {
      pageTitle: 'Blog Edit',
      breadcrumb: [
        {
          text: 'Pages',
        },
        {
          text: 'Blog',
        },
        {
          text: 'Edit',
          active: true,
        },
      ],
    },
  },
]
