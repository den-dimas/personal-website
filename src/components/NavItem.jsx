export default function NavItem({ namaNav, index, onClick }) {
  return (
    <li
      className={
        "text-center font-semibold bg-orange-100 px-16 py-2 -mt-1 border-2 border-black hover:-translate-x-6 ease-in-out duration-200 rounded-md" +
        " " +
        (index ? "z-[10]" : "")
      }
    >
      <button
        className={"py-2 pl-1.5 pr-2 bg-white border-black border-2 rounded-md"}
        onClick={onClick}
      >
        {namaNav}
      </button>
    </li>
  )
}
