export default [
  {
    path: '/page/coming-soon',
    name: 'misc-coming-soon',
    component: () => import('@/views/pages/miscellaneous/ComingSoon.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/page/not-authorized',
    name: 'page-not-authorized',
    component: () => import('@/views/pages/miscellaneous/NotAuthorized.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read'
    },
  },
  {
    path: '/page/under-maintenance',
    name: 'page-under-maintenance',
    component: () => import('@/views/pages/miscellaneous/UnderMaintenance.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/page/not-found',
    name: 'page-not-found',
    component: () => import('@/views/pages/miscellaneous/Error.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },

  {
    path: '/page/faq',
    name: 'page-faq',
    component: () => import('@/views/pages/faq/Faq.vue'),
    meta: {
      pageTitle: 'FAQ',
      breadcrumb: [
        {
          text: 'Pages',
        },
        {
          text: 'FAQ',
          active: true,
        },
      ],
    },
  },
  {
    path: '/page/knowledge-base',
    name: 'page-knowledge-base',
    component: () => import('@/views/pages/Knowledge-base/KnowledgeBase.vue'),
    meta: {
      pageTitle: 'Knowledge Base',
      breadcrumb: [
        {
          text: 'Pages',
        },
        {
          text: 'Knowledge Base',
          active: true,
        },
      ],
    },
  },
  {
    path: '/page/knowledge-base/:category',
    name: 'page-knowledge-base-category',
    component: () => import('@/views/pages/Knowledge-base/KnowledgeBaseCategory.vue'),
    meta: {
      pageTitle: 'Category',
      breadcrumb: [
        {
          text: 'Pages',
        },
        {
          text: 'Knowledge Base',
          to: '/page/Knowledge-base',
        },
        {
          text: 'Category',
          active: true,
        },
      ],
      navActiveLink: 'pages-knowledge-base',
    },
  },
  {
    path: '/page/knowledge-base/:category/:slug',
    name: 'page-knowledge-base-question',
    component: () => import('@/views/pages/Knowledge-base/KnowledgeBaseCategoryQuestion.vue'),
    meta: {
      pageTitle: 'Question',
      breadcrumb: [
        {
          text: 'Pages',
        },
        {
          text: 'Knowledge Base',
          to: '/page/Knowledge-base',
        },
        {
          text: 'Category',
          to: '/page/Knowledge-base/category',
        },
        {
          text: 'Question',
          active: true,
        },
      ],
      navActiveLink: 'pages-knowledge-base',
    },
  },
  {
    path: '/page/pricing',
    name: 'page-pricing',
    component: () => import('@/views/pages/pricing/Pricing.vue'),
  }
]
