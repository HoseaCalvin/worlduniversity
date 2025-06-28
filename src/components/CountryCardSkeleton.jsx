function CountryCardSkeleton() {
    return(
        <div className="animate-pulse">
            <div className="bg-gray-200 border-2 rounded-2xl p-2 shadow-lg max-w-[27rem] w-[9rem] h-[9rem] sm:p-4 sm:w-[13rem] sm:h-[15rem] md:w-[15rem] md:h-[16rem] lg:p-5 lg:w-[20rem] lg:h-[21rem] xl:w-[22rem] xl:h-[23rem]">
                <div className="flex flex-col justify-center sm:justify-between">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-gray-300 h-5 w-[60%] my-2 p-1 lg:h-8"></div>
                        <div className="bg-gray-300 h-16 w-[80%] mt-3 mb-4 p-1 lg:h-24"></div>
                    </div>
                    <div className="hidden sm:block">
                        <div className="bg-gray-300 h-[10px] w-[90%] mx-auto lg:mt-3"></div>
                        <div className="mt-4 lg:mt-6">
                            <div className="bg-gray-300 h-4 w-[80%] my-1 mx-auto lg:my-2 lg:h-[22px]"></div>
                            <div className="bg-gray-300 h-4 w-[80%] my-1 mx-auto lg:my-2 lg:h-[22px]"></div>
                            <div className="bg-gray-300 h-4 w-[80%] my-1 mx-auto lg:my-2 lg:h-[22px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryCardSkeleton