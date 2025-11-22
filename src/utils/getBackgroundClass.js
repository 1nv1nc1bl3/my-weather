export function getBackgroundClass(condition) {
    switch (condition) {
        case 'Clear':
            return 'bg-clear';

        case 'Clouds':
            return 'bg-clouds';

        case 'Rain':
            return 'bg-rain';

        case 'Drizzle':
            return 'bg-light-rain';

        case 'Snow':
            return 'bg-snow';

        case 'Thunderstorm':
            return 'bg-thunderstorm';

        case 'Mist':
        case 'Fog':
        case 'Haze':
            return 'bg-fog';

        default:
            return 'bg-gray-100';
    }
}
