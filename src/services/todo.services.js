export function addToLocalStorage(data) {
  localStorage.setItem("TodoReactMUI", JSON.stringify(data))
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("TodoReactMUI"))
};

