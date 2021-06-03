const todoList = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});
const todoForm = {
  title: {
    value: 'Tife',
  },
  description: {
    value: 'Tife-List',
  },
  date: {
    value: 2020 - 11 - 20,
  },
  priority: {
    value: 'low',
  },
};
const createTodo = () => {
  const title = todoForm.title.value;
  const description = todoForm.description.value;
  const dueDate = todoForm.date.value;
  const priority = todoForm.priority.value;
  return todoList(title, description, dueDate, priority);
};

it('should pass if the properties are correct', () => {
  const action = createTodo();
  expect(action.title).toStrictEqual('Tife');
});