export default function Button({
  text,
  onClick,
  classname = 'romantic-btn'
}) {
  return (
    <button
      onClick={onClick}
      className={`
        
        px-5 py-3
        text-white
        rounded-2xl
        transition-all
        duration-300
        ${classname}
      `}
    >
      {text}
    </button>
  )
}
