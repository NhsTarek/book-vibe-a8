

const Authors = () => {
    return (
        <div className="container mx-auto my-9">
            <h1 className="text-center my-5">Author of the week</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Author Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="author1.jpg" alt="Author 1" className="w-full h-56 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Matt Haig</h2>
                       
                    </div>
                </div>

                {/* Author Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="author2.jpg" alt="Author 2" className="w-full h-56 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Andy Weir</h2>
                     
                    </div>
                </div>

                {/* Author Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="author3.jpg" alt="Author 3" className="w-full h-56 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Erin Morgenstern</h2>
                        
                    </div>
                </div>

                {/* Author Card 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="author4.jpg" alt="Author 4" className="w-full h-56 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Patrick Rothfuss</h2>
                    
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Authors;