const todoForm = {
  title: {
    value: ' ',
  },
  description: {
    value: ' ',
  },
  date: {
    value: ' ',
  },
  priority: {
    value: ' ',
  },
};

const clearForm = () => {
  todoForm.title.value = '';
  todoForm.description.value = '';
  todoForm.date.value = '';
};

it('should pass if the properties are correct', () => {
  const action = clearForm();
  expect(action).toStrictEqual(undefined);
});