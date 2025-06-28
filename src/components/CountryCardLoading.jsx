function CountryCardLoading() {
    return(
        <div className="flex justify-center w-full">
            <div className="country-card-grid">
                <CountryCardSkeleton/>
                <CountryCardSkeleton/>
                <CountryCardSkeleton/>
                <CountryCardSkeleton/>
                <CountryCardSkeleton/>
                <CountryCardSkeleton/>
            </div>
        </div>
    )
}

export default CountryCardLoading