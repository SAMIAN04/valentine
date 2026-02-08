export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}   // <-- this is crucial
      className="px-4 py-2 bg-pink-500 text-white rounded-3xl hover:bg-pink-600 transition"
    >
      {text}
    </button>
  )
}
