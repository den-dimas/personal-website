import { useEffect, useRef, useState } from "react"
import { AnimatePresence } from "framer-motion"
import carryComp from "../assets/carryComp.svg"

import NavBar from "../components/NavBar"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"

export default function Home() {
  const [data, setOpened] = useState({
    about: {
      title: "ABOUT",
      top: "About Me",
      opened: false,
      element: <AboutMe />,
    },
    portfolio: {
      title: "PORTFOLIO",
      top: "My Portfolio",
      opened: false,
      element: <Portfolio />,
    },
    contact: {
      title: "CONTACT",
      top: "My Social Media",
      opened: false,
      element: <Contact />,
    },
  })
  const [active, setActive] = useState("")

  return (
    <div id="home-page" className="w-screen h-screen overflow-hidden">
      <NavBar state={data} setState={setOpened} setActive={setActive} />

      <AnimatePresence>
        {Object.keys(data).map(
          (k, i) =>
            data[k].opened && (
              <Layout
                key={i}
                opened={data[k]}
                active={active}
                content={data[k].element}
                closeFunction={() =>
                  setOpened({
                    ...data,
                    [k]: {
                      ...data[k],
                      opened: false,
                    },
                  })
                }
                clickFunction={() => setActive(k)}
              />
            )
        )}
      </AnimatePresence>

      {/* <img
        title="Carrying a Computer"
        alt="Carrying a Computer"
        src={carryComp}
        className="w-96 absolute bottom-0 -z-[1] -scale-x-100 md:w-[34rem]"
      /> */}
    </div>
  )
}
