import NavItem from "./NavItem"

export default function NavBar({ state, setState, setActive }) {
  const navs = Object.keys(state)

  return (
    <nav className="w-screen h-screen flex justify-center items-center">
      <ul className="text-lg flex flex-col-reverse items-end justify-center rotate-90 origin-[50% 50%]">
        {navs.map((label, i) => (
          <NavItem
            key={i}
            namaNav={state[label].title}
            index={i}
            onClick={() => {
              setState({
                ...state,
                [label]: {
                  ...state[label],
                  opened: !state[label].opened,
                },
              })

              setActive(label)
            }}
          />
        ))}
      </ul>
    </nav>
  )
}
