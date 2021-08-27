import { Link } from 'react-router-dom';

const Meal = (props) => {
  const { meal } = props;
  const {
    strMeal, strMealThumb, type, idMeal,
  } = meal;
  return (
    <div className="h-96 w-full bg-white flex">
      <img src={strMealThumb} alt={strMeal} className="w-1/3 object-cover" />
      <div className="w-2/3 flex flex-col h-full justify-between p-10">
        <h2 className="text-5xl dancing-font font-bold">{type}</h2>
        <h3 className="text-5xl font-semibold ">{strMeal}</h3>

        <Link
          to={{
            pathname: `/meal/${idMeal}`,
            state: { id: idMeal },
          }}
          className="text-right yellow text-xl font-bold"
        >
          More Details &#8594;
        </Link>
      </div>
    </div>
  );
};

export default Meal;
