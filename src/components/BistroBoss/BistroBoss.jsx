import img from '../../assets/home/chef-service.jpg';

const BistroBoss = () => {
    return (
        <div className="hero  max-w-5xl mx-auto h-[372px]" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl bg-white text-black px-20 py-10">
                    <h1 className="mb-5 text-4xl font-bold">Bistro Boss</h1>
                    <p className="mb-5 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;