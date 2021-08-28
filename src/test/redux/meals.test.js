import reducer from '../../redux/slices/meals';

test('should return the initial state', () => {
  expect(reducer(undefined, { })).toEqual(
    {
      meals: [],
      status: null,
    },
  );
});
