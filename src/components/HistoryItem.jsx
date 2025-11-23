const HistoryItem = ({ city, setCity, fetchWeatherByCity }) => {
    return (
        <span
            onClick={() => {
                fetchWeatherByCity(city);
                setCity(city);
            }}
            className='cursor-pointer text-black-600 hover:text-indigo-600 bg-black-200 hover:bg-white w-full p-1 rounded text-center font-medium'
        >
            {city.toUpperCase()}
        </span>
    );
};

export default HistoryItem;
