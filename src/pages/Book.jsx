import { useLoaderData, useParams } from "react-router-dom";
import { saveBook, addToRead, addToWishlist, getWishlist, removeFromWishlist, getRead } from "../utils";
import toast from "react-hot-toast";






const Book = () => {
    const books = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;



    const handleRead = (book) =>{
        saveBook(book);
        addToRead(book);
        removeFromWishlist(book);
        
    }

    const handleWishlist = (book) => {
        const readBooks = getRead();
        const isRead = readBooks.some(readBook => readBook.id === book.id);
        if (isRead) {
            toast.error('Book is already in the Read list.');
        } else {
            addToWishlist(book);
            
        }
    }


    return (
        <div className=" container mx-auto flex flex-col lg:flex-row p-6  space-y-6 sm:space-y-12 items-center justify-center">
            <div className="bg-[#F3F3F3] rounded-xl p-5">
                <img src={image} alt="" className=" w-full h-full rounded" />
            </div>
            <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline mb-5">{bookName}</h3>
                <span className="text-xs dark:text-gray-600 ">By: {author}</span>
                <hr />
                <p>{category}</p>
                <hr />
                <h5>{review}</h5>
                <div className="flex gap-3 items-center pb-5">
                    <h5>Tag</h5>
                    {
                        tags.map((tag, index) => <p className="bg-[#F4FCF3] rounded-full shadow-xl px-4 py-4 text-[#23BE0A]" key={index}>{tag}</p>)
                    }
                </div>
                <hr />
                
                    <div className="flex gap-5">
                        <p>Number of Pages:</p>
                        <h5>{totalPages}</h5>
                    </div>
                    <div className="flex gap-5">
                        <p>Publisher:</p>
                        <h5>{publisher}</h5>
                    </div>
                    <div className="flex gap-5">
                        <p>Year of Publishing:</p>
                        <h5>{yearOfPublishing}</h5>
                    </div>
                    <div className="flex gap-5">
                        <p>Rating:</p>
                        <h5> {rating}</h5>
                    </div>
                <div className="flex gap-2">
                    <button onClick={() => handleRead(book)} className="btn bg-white text-[#131313]">Read</button>
                    <button onClick={() => handleWishlist(book)} className="btn bg-[#50B1C9]">Wishlist</button>
                </div>
            </div>
          

        </div>
    );
};

export default Book;