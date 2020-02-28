export const setPluralWords = (state) => {
  let toBeConjugation;
  let todoPlural;
  let todoNum;
  if (state.todos.length > 0) {
    todoNum = state.todos.length;
    if (state.todos.length === 1) {
      toBeConjugation  = 'is';
      todoPlural = 'todo';
    } else {
      toBeConjugation = 'are';
      todoPlural = 'todos';
    }
  } else {
    toBeConjugation = 'are';
    todoNum = 'no';
    todoPlural = 'todos';
  }
  return `There ${toBeConjugation} ${todoNum} ${todoPlural}.`;
}