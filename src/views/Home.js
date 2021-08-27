import Hero from '../components/Hero'
import Meal from '../components/Meal'

import { getMeals } from '../redux/slices/meals'
import { updateFilter } from '../redux/slices/filter'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import CategoryFilter from '../components/CategoryFilter';

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMeals())
    }, [dispatch])
    const meals = useSelector(state => state.meals.meals)
    const target = useSelector((state) => state.filter.filter);
    const handleFilter = (e) => {
        const data = e.target.value;
        dispatch(updateFilter(data));
    };
    const show = meals.filter((meal) => meal.type === target || target === 'All');

    const renderMeals = (meals => meals.map(meal => <Meal meal={meal} key={meal.idMeal} />))
    return (
        <>
            <Hero />
            <CategoryFilter target={target} handleFilter={handleFilter} />
            <div className="flex flex-col gap-10 mx-20">
                {renderMeals(show)}
            </div>
        </>
    )
}

export default Home