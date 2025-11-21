import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import SearchBox from './components/SearchBox';
import WeatherContainer from './components/WeatherContainer';
import { useWeather } from './utils/useWeather';

const API = '10774089302b5d5c5b8ab7a395fabbd3';
const lat = 37.9838;
const lon = 23.7278;

export default function App() {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });
    const [weekday, rest] = formattedDate.split(', ');
    const [month, day] = rest.split(' ');
    const theDate = `${weekday} ${day} ${month}`;

    const handleCitySubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;
        fetchWeatherByCity();
        setCity('');
    };

    const { city, setCity, weather, loading, error, fetchWeatherByCity } =
        useWeather(lat, lon, API);

    if (loading)
        return (
            <div className='min-h-screen flex flex-col gap-10 items-center justify-center bg-gray-100'>
                <Loading />
            </div>
        );

    if (error)
        return (
            <div className='min-h-screen flex flex-col gap-10 items-center justify-center bg-gray-100'>
                <ErrorMessage error={error} />
            </div>
        );

    return (
        <div className='page-wrapper'>
            <div className='min-h-screen flex flex-col gap-10 items-center justify-center bg-gray-100'>
                <SearchBox
                    onCitySubmit={handleCitySubmit}
                    city={city}
                    setCity={setCity}
                />
                <WeatherContainer weather={weather} theDate={theDate} />
            </div>
        </div>
    );
}
