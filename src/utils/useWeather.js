import { useState, useEffect } from 'react';

export function useWeather(defaultLat, defaultLon, API) {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

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

    const fetchWeatherByCity = async () => {
        try {
            setLoading(true);
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
            );
            if (!res.ok) {
                setError(true);
                return;
            }
            const data = await res.json();
            setWeather(data);
            console.log(data);
            setError(false);
        } catch (err) {
            console.log('Error fetching weather', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    return {
        city,
        setCity,
        weather,
        loading,
        error,
        fetchWeatherByCity,
    };
}
