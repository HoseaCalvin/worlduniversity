import WorldUniversity from '../assets/worlduniversity-logo.png';

import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className="bg-gray-700 rounded-tl-lg rounded-tr-lg">
            <div className="grid grid-cols-3 mx-8">
                <div className="justify-self-center my-auto">
                    <img src={WorldUniversity} alt="WorldUniversity Logo" className="w-auto h-[150px] p-3"/>
                    <h1 className="text-white text-lg text-center font-bold">WorldUniversity</h1>
                </div>
                <div className="mx-10 my-6 p-4 justify-self-end">
                    <h2 className="font-bold text-2xl text-white my-4">Explore</h2>
                    <ul className="text-left text-white text-lg">
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
                <div className="mx-10 my-6 p-4">
                    <h2 className="font-bold text-2xl text-white my-4">External Links</h2>
                    <ul className="text-left text-white text-lg">
                        <li className="cursor-pointer hover:text-blue-400">
                            <a href="https://github.com/HoseaCalvin" target="_blank">GitHub</a>
                        </li>
                        <li className="cursor-pointer  hover:text-blue-400">
                            <a href="https://github.com/HoseaCalvin/worlduniversity" target="_blank">Repository Link</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="to-white p-2 mx-8"/>
            <div className="mx-auto p-4">
                <p className="text-center text-white text-lg">© WorldUniversity {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer