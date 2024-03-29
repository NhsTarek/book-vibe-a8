import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Book from "../pages/Book";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import Authors from "../pages/Authors";
import PublishingSchedule from "../pages/PublishingSchedule";
import Wishlist from "../Components/Wishlist";
import Read from "../Components/Read";

export const router = createBrowserRouter([
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
          element:<ListedBooks></ListedBooks>,
          loader: () => fetch('../books.json'),
          children: [
            {
                index: true,
                element:<Read></Read>,
                loader: () => fetch('../books.json'),
            },
            {
                path:'wishlist',
                element: <Wishlist></Wishlist>,
                loader: () => fetch('../books.json'),
            }
          ]
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