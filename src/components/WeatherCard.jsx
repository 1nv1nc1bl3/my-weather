export default function WeatherCard({
    theDate,
    name,
    visibility,
    wind,
    main,
    weather: weatherArr,
}) {
    const { temp, feels_like, temp_min, temp_max, humidity } = main;
    const { description, icon } = weatherArr[0];
    const { speed } = wind;

    return (
        <div className='flex flex-col bg-white rounded p-4 w-full max-w-xs'>
            {/* Title */}
            <div className='font-bold text-xl'>{name}</div>
            <div className='text-sm text-gray-500'>{theDate}</div>

            {/* Weather Icon (FULLY FIXED) */}
            <div className='mt-6 self-center flex items-center justify-center bg-indigo-300  rounded-full h-28 w-28'>
                <img
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={description}
                    className='w-20 h-20'
                />
            </div>

            {/* Temperature Row */}
            <div className='flex flex-row items-center justify-center mt-6'>
                {/* Main Temperature */}
                <div className='font-medium flex flex-col items-end'>
                    <div className='text-6xl'>{Math.round(temp)}°</div>
                    <div className='text-lg'>
                        Feels like: {Math.round(feels_like)}°
                    </div>
                </div>

                {/* Description + Min/Max */}
                <div className='flex flex-col items-center ml-6'>
                    <div className='capitalize'>{description}</div>

                    <div className='mt-1'>
                        <span className='text-sm mr-1'>▲</span>
                        <span className='text-sm font-light text-gray-500'>
                            {Math.round(temp_max)}°C
                        </span>
                    </div>

                    <div>
                        <span className='text-sm mr-1'>▼</span>
                        <span className='text-sm font-light text-gray-500'>
                            {Math.round(temp_min)}°C
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Stats */}
            <div className='flex flex-row justify-between mt-6'>
                <div className='flex flex-col items-center'>
                    <div className='font-medium text-sm'>Wind</div>
                    <div className='text-sm text-gray-500'>{speed} m/s</div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='font-medium text-sm'>Humidity</div>
                    <div className='text-sm text-gray-500'>{humidity}%</div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='font-medium text-sm'>Visibility</div>
                    <div className='text-sm text-gray-500'>
                        {(visibility / 1000).toFixed(1)} km
                    </div>
                </div>
            </div>
        </div>
    );
}
