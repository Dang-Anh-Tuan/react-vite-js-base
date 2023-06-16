import { createBrowserRouter } from 'react-router-dom'
import Hello from '@components/Hello'
import Contact from '@components/Contact'
import ErrorPage from '@pages/error-page'
import Default from '@layouts/Default'
import LoginPage from '@pages/login'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
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
    element: <LoginPage />,
  }
])

export default router