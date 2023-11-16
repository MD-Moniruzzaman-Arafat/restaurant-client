import PropTypes from 'prop-types';


const Banner = ({ img, title, description }) => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl px-60 py-16 bg-[#15151599]">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



Banner.propTypes = {
    img: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string
};


export default Banner;