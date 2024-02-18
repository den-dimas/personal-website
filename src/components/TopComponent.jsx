export default function TopComponent({
  title,
  closeFunction,
  clickFunction,
  onPointerDown,
}) {
  return (
    <div
      className="border-b-2 border-black w-full h-8 relative top-0 flex items-center justify-between z-10 cursor-grab active:cursor-grabbing max-[540px]:pointer-events-none"
      onPointerDown={onPointerDown}
      onClick={clickFunction}
    >
      <h1 className="ml-4 mt-0.5 font-medium">{title}</h1>

      <button
        onClick={closeFunction}
        className="bg-white pointer-events-auto font-medium text-black border-2 rounded-[4px] border-black text-xl h-5 mr-2 px-2 pb-0.5 flex justify-center items-center hover:bg-blue-1 ease-in-out duration-200"
      >
        x
      </button>
    </div>
  )
}
