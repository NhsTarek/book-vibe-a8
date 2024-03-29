import image1 from '../assets/images/images1.jpg';
import image2 from '../assets/images/images2.jpg';
import image3 from '../assets/images/images3.png';
import image4 from '../assets/images/images4.jpg';

const Authors = () => {
    return (
        <div className="container mx-auto my-9">
            <h1 className="text-center my-5">Author of the week</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Author Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={image1} alt="Author 1" className="w-full h-56 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Matt Haig</h2>
                       
                    </div>
                </div>

                {/* Author Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={image2} alt="Author 2" className="w-full h-56 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Andy Weir</h2>
                     
                    </div>
                </div>

                {/* Author Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={image3} alt="Author 3" className="w-full h-56 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Erin Morgenstern</h2>
                        
                    </div>
                </div>

                {/* Author Card 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={image4} alt="Author 4" className="w-full h-56 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Patrick Rothfuss</h2>
                    
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Authors;