function CountryCardSkeleton() {
    return(
        <div className="animate-pulse">
            <div className='bg-gray-200 border-2 h-[53vh] rounded-lg'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-gray-300 h-7 w-[50%] my-5 p-2'></div>
                    <div className='bg-gray-300 h-24 w-[65%] mt-3 mb-6 p-2'></div>
                    <div className='bg-gray-300 h-[10px] w-[90%] mx-3'></div>
                    <div className='bg-gray-300 h-6 w-[80%] mt-6 mb-2'></div>
                    <div className='bg-gray-300 h-6 w-[80%] my-2 '></div>
                    <div className='bg-gray-300 h-6 w-[80%] my-2 '></div>
                </div>
            </div>
        </div>
    )
}

export default CountryCardSkeleton