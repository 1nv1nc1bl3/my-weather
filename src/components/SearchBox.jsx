import WeatherCard from './WeatherCard';

const SearchBox = ({ city, setCity, onCitySubmit }) => {
    return (
        <div className='search-box relative'>
            <form onSubmit={onCitySubmit}>
                <input
                    className='px-3 py-2 mt-0.5 w-full rounded border-indigo-400 pe-10 shadow-sm sm:text-md'
                    id='Search'
                    type='text'
                    value={city}
                    placeholder='Search for a city...'
                    onChange={(e) => setCity(e.target.value)}
                />
                <span className='absolute inset-y-0 top-2 right-1 grid w-8 place-content-center'>
                    <button
                        type='submit'
                        aria-label='Submit'
                        className='rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='size-4'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                            ></path>
                        </svg>
                    </button>
                </span>
            </form>
        </div>
    );
};

export default SearchBox;
