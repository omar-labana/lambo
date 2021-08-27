const categories = ['All', 'Chicken', 'Pasta', 'Seafood'];

const CategoryFilter = (props) => {
  const { target, handleFilter } = props;

  return (
    <div className="flex items-center justify-center gap-5 py-10">
      <h2 className="text-white text-3xl">Category Filter:</h2>
      <select name="target" value={target} onChange={handleFilter} className="p-5 text-3xl">
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
