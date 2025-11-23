import HistoryItem from './HistoryItem';

const SearchHistory = ({ history, setCity, fetchWeatherByCity }) => {
    return (
        <div className='flex flex-col justify-start items-center flex-1 search-history bg-white/60 rounded-xl p-4 w-full max-w-xs'>
            <h3 className='font-medium text-xl text-orange-500'>
                Latest searches
            </h3>
            <hr className='w-full m-2' />
            {history.map((city, index) => (
                <HistoryItem
                    key={index}
                    city={city}
                    setCity={setCity}
                    fetchWeatherByCity={fetchWeatherByCity}
                />
            ))}
        </div>
    );
};

export default SearchHistory;
