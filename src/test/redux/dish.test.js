import reducer from '../../redux/slices/dish';

test('should return the initial state', () => {
  expect(reducer(undefined, { })).toEqual(
    {
      dish: { },
    },
  );
});
