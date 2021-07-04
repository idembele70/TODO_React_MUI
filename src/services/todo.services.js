export function addToLocalStorage(data) {
  localStorage.setItem("TodoReactMUI", JSON.stringify(data))
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("TodoReactMUI"))
};

export function getOneTodo(data = [],id = 0){
  return data.find(
    (todo)=> todo.id === id)
}