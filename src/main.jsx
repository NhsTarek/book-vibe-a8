
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagesToRead from './pages/PagesToRead.jsx'
import MainLayout from './Layouts/MainLayout.jsx'
import Book from './pages/Book.jsx'
import Authors from './pages/Authors.jsx'
import PublishingSchedule from './pages/PublishingSchedule.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        // loader: () => fetch("./books.json"),
      },
      {
        path:'/book/:id',
        element: <Book></Book>,
        loader: () => fetch('../books.json'),
      },
      {
        path:'/listedbooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/pagestoread',
        element:<PagesToRead></PagesToRead>,
      },
      {
        path:'/authors',
        element:<Authors></Authors>,
      },
      {
        path:'/schedule',
        element:<PublishingSchedule></PublishingSchedule>,
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}></RouterProvider>
)
