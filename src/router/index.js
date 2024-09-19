import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'days',
      component: () => import('@/views/DaysIdx.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/DaysIdx.vue')
    },
    {
      path: '/user-settings',
      name: 'user-settings',
      component: () => import('@/views/DaysIdx.vue')
    },
    {
      path: '/project',
      name: 'user-settings',
      component: () => import('@/views/DaysIdx.vue')
    },
    {
      path: '/project/:id',
      name: 'user-settings',
      component: () => import('@/views/DaysIdx.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    },
    {
      path: '/(*)',
      redirect: '/404'
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    // Scroll to the top of the page when navigating to a new route
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/projects',
//     name: 'Projects',
//     component: Projects
//   },
//   {
//     path: '/project/:id',
//     name: 'ProjectDetail',
//     component: ProjectDetail,
//     props: true
//   },
//   {
//     path: '/project/edit/:id?',
//     name: 'ProjectForm',
//     component: ProjectForm
//   },
//   {
//     path: '/profile',
//     name: 'Profile',
//     component: Profile
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: Login
//   },
//   {
//     path: '/time-entries',
//     name: 'TimeEntries',
//     component: TimeEntries
//   },
//   {
//     path: '/time-entry/:id',
//     name: 'TimeEntryDetail',
//     component: TimeEntryDetail,
//     props: true
//   },
//   {
//     path: '/settings',
//     name: 'Settings',
//     component: Settings
//   },
//   {
//     path: '/404',
//     name: 'NotFound',
//     component: NotFound
//   },
//   {
//     path: '*',
//     redirect: '/404'
//   }
// ];

// // Create the router instance
// const router = createRouter({
//   history: createWebHistory(),  // Using HTML5 history mode
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//     // Scroll to the top of the page when navigating to a new route
//     if (savedPosition) {
//       return savedPosition;
//     } else {
//       return { top: 0 };
//     }
//   }
// });

// export default router;
