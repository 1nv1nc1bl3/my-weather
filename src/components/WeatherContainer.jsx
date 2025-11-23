import WeatherCard from './WeatherCard';

const WeatherContainer = ({ weather, theDate }) => {
    return (
        <div className='weather-card flex flex-col bg-white rounded-xl p-4 w-full max-w-xs'>
            {weather && <WeatherCard theDate={theDate} {...weather} />}
        </div>
    );
};

export default WeatherContainer;
