import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { LuStickyNote } from "react-icons/lu";


const ReadBook = ({ r }) => {
    const { bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = r
    return (
        <div className=" container mx-auto flex flex-col lg:flex-row p-6  space-y-6 sm:space-y-12 shadow-xl rounded-xl items-center">
            <div className="bg-[#F3F3F3] w-[230px] h-64 rounded-xl p-5">
                <img src={image} alt="" className=" w-full h-full rounded" />
            </div>
            <div className="p-6 space-y-2 lg:col-span-5 space-y-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-[#131313]">{bookName}</h3>
                <h5 className="text-xl font-medium text-[#131313CC]">By: {author}</h5>
                <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                    <h5 className="text-[#131313] font-bold">Tag</h5>
                    {
                        tags.map((tag, index) => <p className="bg-[#F4FCF3] rounded-full shadow-xl px-4 py-4 text-[#23BE0A]" key={index}>#{tag}</p>)
                    }
                    <div className="flex items-center gap-2">
                    <CiLocationOn />

                        <h6 className="text-[#131313CC]">Year of Publishing: {yearOfPublishing}</h6>
                    </div>
                   
                </div>
                <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                         <BsPeople />
                         <h6>Publisher: {publisher}</h6>

                        </div>
                        <div className="flex gap-2 items-center">
                        <LuStickyNote />
                        <h6>Page {totalPages}</h6>
                        </div>
                    </div>
                <hr />
                <div className="flex gap-2">
                    <div className="bg-[#E0EEFF] rounded-3xl p-3">
                    <h6>Category: {category}</h6>
                    </div>
                    <div className="bg-[#FFF3E0] rounded-3xl p-3">
                    <h6> Rating: {rating}</h6>
                    </div>
                    <button className="btn rounded-3xl bg-[#23BE0A] text-white">View details</button>
                </div>

            </div>


        </div>
    );
};

export default ReadBook;