export default function TodoModel({ message = "", done = false, id = 0, editable = false }) {
  return { message, done, id, editable };
}
