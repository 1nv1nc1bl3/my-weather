import { useState, useEffect } from 'react';

export function useWeather(defaultLat, defaultLon, API) {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [history, setHistory] = useState([]);

    const addToHistory = (cityName) => {
        if (!cityName) return;
        const filtered = history.filter((item) => item !== cityName);
        const newHistory = [cityName, ...filtered];
        if (newHistory.length > 8) {
            newHistory.splice(8);
        }
        setHistory(newHistory);
    };

    // FETCH BY CITY (with optional argument)
    const fetchWeatherByCity = async (cityArg) => {
        try {
            setLoading(true);

            const chosenCity = cityArg || city;
            if (!chosenCity) return;

            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${API}&units=metric`
            );

            if (!res.ok) {
                setError(true);
                return;
            }
            const data = await res.json();
            setWeather(data);
            addToHistory(chosenCity);
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

    // Send props to App.jsx
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
