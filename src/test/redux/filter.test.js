import reducer from '../../redux/slices/filter';

test('should return the initial state', () => {
  expect(reducer(undefined, { })).toEqual(
    {
      filter: 'All',
    },
  );
});
