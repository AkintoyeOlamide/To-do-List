import { clearForm, defaultProject } from '../src/index';

it('should pass if the properties are correct', () => {
  const action = clearForm();
  expect(action).toStrictEqual(undefined);
});

it('should return the default project', () => {
  const action = defaultProject();
  expect(action).toEqual(undefined);
});

it('should pass if the properties are correct', () => {
  const action = clearForm();
  expect(action).toBeFalsy(undefined);
});

it('should return the default project', () => {
  const action = defaultProject();
  expect(action).toBeFalsy(undefined);
});