import Header from './components/Header';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import SearchBox from './components/SearchBox';
import WeatherContainer from './components/WeatherContainer';
import SearchHistory from './components/SearchHistory';
import { useWeather } from './utils/useWeather';
import { getBackgroundClass } from './utils/getBackgroundClass';

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

    const {
        history,
        setHistory,
        city,
        setCity,
        weather,
        loading,
        error,
        fetchWeatherByCity,
    } = useWeather(lat, lon, API);

    const condition = weather?.weather?.[0]?.main;
    const bgClass = condition ? getBackgroundClass(condition) : 'bg-gray-100';

    // RENDER CASES
    /* while loading */
    if (loading)
        return (
            <div className='min-h-screen flex flex-col gap-10 items-center justify-center bg-gray-100'>
                <Loading />
            </div>
        );

    /* if error */
    if (error)
        return (
            <div className='min-h-screen flex flex-col gap-10 items-center justify-center bg-gray-100'>
                <Header />
                <ErrorMessage error={error} />
            </div>
        );

    /* normal render */
    return (
        <div className='page-wrapper'>
            <div
                id='app-container'
                className={`min-h-screen flex flex-col gap-5 items-center justify-center ${bgClass}`}
            >
                <div className='header-section flex flex-col items-center justify-center relative rounded-full  bg-white/60 w-55 h-55'>
                    <Header />
                </div>
                <div className='boxes-section flex flex-row justify-stretch gap-5'>
                    <div className='flex flex-col'>
                        <WeatherContainer weather={weather} theDate={theDate} />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <SearchBox
                            onCitySubmit={handleCitySubmit}
                            city={city}
                            setCity={setCity}
                        />
                        <SearchHistory
                            history={history}
                            setHistory={setHistory}
                            setCity={setCity}
                            fetchWeatherByCity={fetchWeatherByCity}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
