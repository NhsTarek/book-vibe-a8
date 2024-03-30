import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import { useLoaderData } from "react-router-dom";
import ReadBook from "./ReadBook";


const Read = () => {
    const books = useLoaderData();
    const [read, setReads] = useState([])
    useEffect(() =>{
        const storedBooks = getBooks
        setReads(storedBooks)
    }, [])
    return (
        <div>
            {
                read.map(r => <ReadBook r={r} key={r.id}></ReadBook>)
            }
        </div>
    );
};

export default Read;