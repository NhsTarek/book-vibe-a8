

const Hero = () => {
    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen bg-base-200 my-5 rounded-xl">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <img src="https://i.ibb.co/qdGTpq9/713be2009ed5e0a38a726ba628d93944-removebg-preview-1.png" className="max-w-sm" />
                    <div className="space-y-5">
                        <h1 className="text-5xl font-bold">Books to freshen up <br>
                        </br> your bookshelf</h1>
                        
                        <button className="btn bg-[#23BE0A]">View the list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;