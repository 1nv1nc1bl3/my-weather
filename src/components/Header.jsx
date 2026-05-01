export default function Header() {
    const theTitle = document.title;

    return (
        <>
            <img
                className='w-10 h-10 lg:w-15 lg:h-15 flex justify-center self-center'
                src='weather.svg'
                alt='app logo'
            />
            <h2 className='text-center text-grey text-xl lg:text-3xl font-normal'>
                {theTitle}
            </h2>
        </>
    );
}
