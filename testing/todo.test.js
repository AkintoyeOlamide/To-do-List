import createTodo from '../src/todo-controls';

it('should pass if the properties are correct', () => {
  const action = createTodo();
  expect(action.title).toStrictEqual('Tife');
});

it('should pass if the properties are correct', () => {
  const action = createTodo();
  expect(action.description).toStrictEqual('Tife-List');
});

it('should pass if the properties are correct', () => {
  const action = createTodo();
  expect(action.priority).toStrictEqual('low');
});

it('Creating New Todo', () => {
  const action = createTodo();
  const expectation = {
    title: 'Tife',
    description: 'Tife-List',
    dueDate: 2020 - 11 - 20,
    priority: 'low',
  };
  expect(action).toStrictEqual(expectation);
});