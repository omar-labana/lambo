import React from 'react'

const Header = () => {
    return (
        <header className="flex items-center justify-between py-5">
            <div className="dancing-font text-6xl">Lambo</div>
            <ul className="flex gap-5 text-white text-2xl">
                <li className="border-b-4 pb-1 px-1 border-yellow">Home</li>
                <li className="text-gray-600">Today's Dish</li>
            </ul>
        </header>
    )
}

export default Header
