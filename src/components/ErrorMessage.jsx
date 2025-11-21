import { FaExclamationCircle } from 'react-icons/fa';
const ErrorMessage = () => {
    return (
        <div className='text-center py-10'>
            <FaExclamationCircle className='text-red-500 w-16 h-16 mx-auto mb-5' />
            <h1 className='text-black-500  text-xl mx-auto'>
                Something went wrong
            </h1>
            <p className='text-black-500 text-xl mx-auto'>
                There was a problem processing the request. Please try again.
            </p>
        </div>
    );
};

export default ErrorMessage;
