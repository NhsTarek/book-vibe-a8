import { useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero";
import Books from "../Components/Books";
import { useEffect, useState } from "react";



const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))

    },[])
   
    return (
        <div>
            <Hero></Hero>
           <div className="container mx-auto grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {
                books.map(book => <Books book={book} key={book.id}></Books>)
               }
           </div>

        </div>
    );
};

export default Home;