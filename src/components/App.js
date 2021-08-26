import Header from './Header'
// import Footer from './Footer'
// import Hero from './Hero'
import Meal from './Meal'
import { getMeals } from '../redux/slices/meals'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMeals())
  }, [dispatch])
  const meals = useSelector(state => state.meals)
  console.log(meals)
  return (
    <>
      <Header />
      {/* <Hero /> */}
      {/* <Footer /> */}
      <Meal />
    </>
  )
}

export default App
