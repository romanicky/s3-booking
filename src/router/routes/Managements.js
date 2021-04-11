import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/managements/user/list',
    component: lazy(() => import('../../views/managements/user/list'))
  },
  {
    path: '/managements/user/edit',
    exact: true,
    component: () => <Redirect to='/managements/user/edit/1' />
  },
  {
    path: '/managements/user/edit/:id',
    component: lazy(() => import('../../views/managements/user/edit')),
    meta: {
      navLink: '/managements/user/edit'
    }
  },
  {
    path: '/managements/user/view',
    exact: true,
    component: () => <Redirect to='/managements/user/view/1' />
  },
  {
    path: '/managements/user/view/:id',
    component: lazy(() => import('../../views/managements/user/view')),
    meta: {
      navLink: '/managements/user/view'
    }
  }
]

export default AppRoutes
