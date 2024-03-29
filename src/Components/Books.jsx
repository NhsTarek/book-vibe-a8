import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const Books = ({book}) => {
    const { image, author, category, bookName, id, tags, rating } = book
    return (
        <Link to={`book/${id}`}>
            <div className="card w-96 bg-base-100 shadow-xl p-5">
                <div className="px-10 pt-10 bg-[#F3F3F3] pb-5 mb-5">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </div>
                <div className="space-y-2 mb-5">
                    <div className="flex gap-3">
                        {
                            tags.map((tag, index) => <p className="bg-[#F4FCF3] rounded-full shadow-xl px-4 py-4 text-[#23BE0A]" key={index}>{tag}</p>)
                        }
                    </div>

                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>

                </div>
                <hr />
                <div className="flex justify-between">
                    <h5>{category}</h5>
                    <div className="flex gap-2 items-center">
                        <p>{rating} </p>
                        <span><CiStar /></span>
                    </div>

                </div>
            </div>
        </Link>
    );
};


export default Books;