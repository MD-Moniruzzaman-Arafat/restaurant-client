import PropTypes from 'prop-types';

const MenuItem = ({ menu }) => {
    const { name, recipe, image, price } = menu;
    return (
        <div className='flex w-[500px] gap-5'>
            <img src={image} alt="" className='w-32 rounded-r-full rounded-b-full' />
            <div>
                <div className='flex justify-between'>
                    <h1 className='uppercase text-lg'>{name.slice(0, 8)}-----------</h1>
                    <p className='text-[#BB8506]'>${price}</p>
                </div>
                <p>{recipe.slice(0, 65)}</p>
            </div>
        </div>
    );
};

MenuItem.propTypes = {
    menu: PropTypes.object
};

export default MenuItem;