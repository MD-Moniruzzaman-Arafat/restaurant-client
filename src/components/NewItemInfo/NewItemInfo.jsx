import SectionTitle from "../SectionTitle/SectionTitle";
import img from '../../assets/home/featured.jpg'


const NewItemInfo = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <SectionTitle smallTitle={"---Check it out---"} bigTitle={"NEW ITEM "}></SectionTitle>
                        <div className="max-w-4xl md:flex  md:gap-10 items-center ">
                            <div>
                                <img src={img} alt="" />
                            </div>
                            <div>
                                <h1 className=" text-2xl text-start ">March 20, 2023</h1>
                                <h1 className="mb-2 text-2xl text-start "> WHERE CAN I GET SOME?</h1>
                                <p className="mb-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                <div className="w-48 -ml-8">
                                    <button className="btn border-b-4 border-b-cyan-950 border-t-0 border-r-0 border-l-0 text-center bg-transparent text-white hover:border-b-cyan-950 hover:bg-transparent">View Full  Menu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewItemInfo;