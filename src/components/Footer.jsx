import WorldUniversity from '../assets/worlduniversity-logo.png';

import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className="bg-gray-700 rounded-tl-lg rounded-tr-lg">
            <div className="flex flex-col justify-center mx-3 p-4 sm:grid sm:grid-cols-3 sm:justify-self-center lg:p-6 lg:mx-6">
                <div className="justify-self-center my-auto mx-auto">
                    <div className="flex justify-center mx-auto">
                        <img src={WorldUniversity} alt="WorldUniversity Logo" className="w-auto h-[80px] lg:h-[150px] p-3"/>
                    </div>
                    <h1 className="text-white lg:text-xl text-sm text-center font-bold">WorldUniversity</h1>
                </div>
                <div className="m-2 justify-self-center lg:justify-self-end lg:mx-10 lg:p-3">
                    <h2 className="font-bold text-lg text-white my-4 lg:text-2xl">Explore</h2>
                    <ul className="text-left text-white text-sm lg:text-lg">
                        <Link to='/'>
                            <li className="cursor-pointer hover:text-blue-400">Home</li>
                        </Link>
                        <Link to='/search'>
                            <li className="cursor-pointer hover:text-blue-400">Search</li>                
                        </Link>
                        <Link to='/filter'>
                            <li className="cursor-pointer hover:text-blue-400">Filter</li>                    
                        </Link>
                        <Link to='/about'>
                            <li className="cursor-pointer hover:text-blue-400">About</li>                    
                        </Link>
                    </ul>
                </div>
                <div className="m-2 sm:justify-self-center lg:mx-10 lg:p-3">
                    <h2 className="font-bold text-lg text-white my-4 lg:text-2xl">External Links</h2>
                    <ul className="text-left text-white text-sm lg:text-lg">
                        <li className="cursor-pointer hover:text-blue-400">
                            <a href="https://github.com/HoseaCalvin" target="_blank">GitHub</a>
                        </li>
                        <li className="cursor-pointer  hover:text-blue-400">
                            <a href="https://github.com/HoseaCalvin/worlduniversity" target="_blank">Repository Link</a>
                        </li>
                        <li className="cursor-pointer  hover:text-blue-400">
                            <a href="https://restcountries.com/#rest-countries" target="_blank">Data Source</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="to-white p-2 mx-8"/>
            <div className="mx-auto p-4">
                <p className="text-center text-white text-sm md:text-lg">© WorldUniversity 2024 - {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer