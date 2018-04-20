// let nextTodoId = 0
// export const addTodo = text => {
//   return {
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text
//   }
// }

// export const setVisibilityFilter = filter => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }

// export const toggleTodo = id => {
//   return {
//     type: 'TOGGLE_TODO',
//     id
//   }
// }

let textId = 0
export const testText = text => {
  return {
    type: 'ADD_TODO',
    id: textId++,
    text:'55555'
  }
}