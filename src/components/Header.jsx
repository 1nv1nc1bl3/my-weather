export default function Header() {
    const theTitle = document.title;

    return (
        <div className='flex flex-col items-center justify-center relative rounded-full w-50 bg-opacity-10'>
            <img
                className='w-15 h-15 flex justify-center self-center'
                src='weather.svg'
                alt='app logo'
            />
            <h2 className='text-center text-orange-500 text-3xl'>{theTitle}</h2>
        </div>
    );
}
