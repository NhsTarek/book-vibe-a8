import toast from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
}

export const saveBook = book => {
    let books = getBooks();
    const isExist = books.find(b => b.id === book.id);
    if (isExist) {
      return; 
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }


export const addToWishlist = book => {
  let wishlist = getWishlist();
  const isExist = wishlist.find(b => b.id === book.id);
  if (isExist) {
    toast.error('Already in Wishlist!');
    return;
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

export const addToRead = book => {
  let read = getRead();
  const isExist = read.find(b => b.id === book.id);
  if (isExist) {
    toast.error('Already in Read List!');
    return;
  }
  read.push(book);
  localStorage.setItem('read', JSON.stringify(read));
  toast.success('Added to Read List Successfully!');
}

export const getRead = () => {
  let read = [];
  const storedRead = localStorage.getItem('read');
  if (storedRead) {
    read = JSON.parse(storedRead);
  }
  return read;
}

export const removeFromWishlist = book => {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(b => b.id !== book.id);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }