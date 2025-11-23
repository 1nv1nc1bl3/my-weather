import { useState, useEffect } from 'react';

export function useWeather(defaultLat, defaultLon, API) {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [history, setHistory] = useState([]);

    const addToHistory = (city) => {
        if (!city) return;
        const filtered = history.filter((item) => item !== city);
        const newHistory = [city, ...filtered];
        if (newHistory.length > 10) {
            newHistory.splice(10);
        }
        setHistory(newHistory);
    };

    // FETCH BY CITY (with optional argument)
    const fetchWeatherByCity = async (cityArg) => {
        try {
            setLoading(true);

            const chosenCity = cityArg || city;

            if (!cityArg) return;

            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${API}&units=metric`
            );

            if (!res.ok) {
                setError(true);
                return;
            }
            const data = await res.json();
            setWeather(data);
            addToHistory(city);
            setError(false);
        } catch (err) {
            console.log('Error fetching weather', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    // INITIAL FETCH BY LAT/LON
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${defaultLat}&lon=${defaultLon}&appid=${API}&units=metric`
                );
                if (!res.ok) {
                    setError(true);
                    return;
                }
                const data = await res.json();
                setWeather(data);
            } catch (err) {
                console.log('Error fetching weather', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchWeather();
    }, []);

    return {
        city,
        setCity,
        weather,
        loading,
        error,
        fetchWeatherByCity,
        history,
        setHistory,
    };
}
