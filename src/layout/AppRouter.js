import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Frame from './Frame'

import Root from '../routes/Root'
import Dashboard from '../routes/Dashboard'
import About from '../routes/About'

import NoMatch from '../routes/NoMatch'

import CardProfile from '../routes/CardProfile'
import UpdateProfile from '../routes/UpdateProfile'

const otherRoutes = [
  {
    exact: true,
    path: '/updateprofile',
    title: 'Update Profile',
    element: <UpdateProfile />,
    auth: true
  }

  /*

    routes that that are not links from navigation

    example:

    {
      exact: true,
      path: '/updateprofile',
      title: 'Update Profile',
      element: <UpdateProfile paths={profilePaths} />,
      auth: true
    }
  */
]

export const navigationalRoutes = [
  {
    exact: true,
    path: '/',
    title: 'Root',
    element: <Root />
  },
  {
    exact: true,
    path: '/dashboard',
    title: 'Dashboard',
    element: <Dashboard />
  },
  {
    exact: true,
    path: '/about',
    title: 'About',
    element: <About />,
    auth: true
  },
  {
    exact: true,
    path: '/profile',
    title: 'Profile',
    element: <CardProfile />,
    auth: true
  }
]

export const allRoutes = [...otherRoutes, ...navigationalRoutes]

export const returnCurrentRoute = pathname => {
  if (!pathname) return null
  const route = allRoutes.find(i => i.path === pathname)
  if (route) return route

  const path = pathname.split('/')[1]
  return allRoutes.find(i => i.path.includes(path))
}

const AppRouter = ({ reactiveAuthToken }) => {
  return (
    <BrowserRouter>
      <Frame returnCurrentRoute={returnCurrentRoute}>
        <Routes>
          {
            allRoutes.map(route => <Route key={`route${route.path}`} {...route} />)
          }
          <Route path='*' element=<NoMatch /> />
        </Routes>

      </Frame>
    </BrowserRouter>
  )
}

export default AppRouter
