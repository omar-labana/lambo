import React from 'react'

const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <div className="dancing-font">Lambo</div>
            <ul className="flex gap-3">
                <li>Home</li>
                <li>Today's Dish</li>
            </ul>
        </header>
    )
}

export default Header
