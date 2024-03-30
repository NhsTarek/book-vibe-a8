import { useEffect, useState } from "react";
import {  getWishlist } from "../utils";
import { useLoaderData } from "react-router-dom";
import Wish from "./Wish";

const Wishlist = () => {
    const books = useLoaderData();
    const [wishlist, setWishList] = useState([])
    useEffect(() =>{
        const storedWishList = getWishlist
        setWishList(storedWishList)

    },[])

    return (
        <div>
          {
            wishlist.map(wish =><Wish wish={wish} key={wish.id}></Wish>)
          }
        </div>
    );
};

export default Wishlist;