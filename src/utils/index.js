import toast from "react-hot-toast"

export const getBooks = () =>{
    let books = []
    const storedBooks = localStorage.getItem('books')
    if(storedBooks){
        books = JSON.parse(storedBooks)
    }
    return books
}


export const saveBook = book => {
    let books = getBooks()
    const isExist = books.find(b => b.id === book.id)
    if (isExist) {
      return toast.error('Already Bookmarked!')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Blog Bookmarked Successfully!')
  }
  

  export const addToWishlist = book => {
    let wishlist = getWishlist();
    const isExist = wishlist.find(b => b.id === book.id);
    if (isExist) {
        return toast.error('Already in Wishlist!');
    }
    wishlist.push(book);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    toast.success('Added to Wishlist Successfully!');
}

export const getWishlist = () => {
    let wishlist = [];
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
        wishlist = JSON.parse(storedWishlist);
    }
    return wishlist;
}
 