import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useState } from "react";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div className="container mx-auto">
            <div className="text-center bg-[#F3F3F3] shadow-xl rounded-xl p-5 my-5">
                <h1 className="font-extrabold text-3xl">Books</h1>
            </div>
          
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">


                <Link
                onClick={() => setTabIndex(0)}
                //  to=''
                 className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <span>Read Books</span>
                </Link>


                <Link
                onClick={() => setTabIndex(1)}
                //  to={`wishlist`} 
                 className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
            
                    <span>Wishlist Books</span>
                </Link>

               
            </div>
        </div>
    );
};

export default ListedBooks;