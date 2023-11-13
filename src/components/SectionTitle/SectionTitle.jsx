
import PropTypes from 'prop-types';

const SectionTitle = ({ smallTitle, bigTitle }) => {
    return (
        <div className='text-center mx-auto w-80 space-y-3 my-10'>
            <p className='text-[#D99904]'>{smallTitle}</p>
            <h1 className='text-4xl border-y-4 py-2'>{bigTitle}</h1>
        </div>
    );
};

SectionTitle.propTypes = {
    smallTitle: PropTypes.string,
    bigTitle: PropTypes.string
};

export default SectionTitle;