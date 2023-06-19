import { createBrowserRouter } from 'react-router-dom'
import Hello from '@components/Hello'
import Contact from '@components/Contact'
import ErrorPage from '@pages/error-page'
import Default from '@layouts/Default'
import LoginPage from '@pages/login'
import Middleware from '@middleware'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Middleware listMiddleware={
        [
          {
            name: 'AuthMiddleware',
            props: { needAuth: true }
          }
        ]
      }>
        <Default />
      </Middleware>),
    children: [
      { index: true, element: <h1>Home Page</h1> },
      {
        path: '/hello',
        element: <Hello />,
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element:  (<Middleware listMiddleware={
      [
        {
          name: 'AuthMiddleware',
          props: { needAuth: false }
        }
      ]
    }>
      <LoginPage />,
    </Middleware>),
  }
])

export default router