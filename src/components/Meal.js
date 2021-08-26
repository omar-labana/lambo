import pizza from '../assets/pizza.png'

const Meal = () => {
    return (
        <div className="h-96 w-full bg-white flex">
            <img src='https:\/\/www.themealdb.com\/images\/media\/meals\/020z181619788503.jpg' className="w-1/3"></img>
            <div className="w-2/3 flex flex-col h-full justify-between p-10">
                <h2 className="text-5xl dancing-font font-bold">Discover</h2>
                <h3 className="text-5xl font-semibold ">Meal Name</h3>
                <p className="">
                    The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl.
                </p>


                <a className="text-right yellow text-xl font-bold">More Details &#8594;</a>
            </div>
        </div>
    )
}

export default Meal
