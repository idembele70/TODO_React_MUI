export default function TodoModel({ message = "", done = false, id  = 0 }) {
  return { message, done, id };
}
