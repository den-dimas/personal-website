import { useEffect, useRef, useState } from "react"
import TopComponent from "./TopComponent"

import { motion, useDragControls } from "framer-motion"

export default function Layout({
  opened,
  active,
  content,
  closeFunction,
  clickFunction,
}) {
  const ref = useRef(null)
  const [constraints, setConstraints] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  })
  const dragControls = useDragControls()

  useEffect(() => {
    setConstraints({
      top: 0,
      bottom: window.screen.height - ref.current.clientHeight / 2,
      left: -ref.current.clientWidth / 1.2,
      right: window.screen.width - ref.current.clientWidth / 2,
    })
  }, [ref])

  function startDrag(event) {
    dragControls.start(event)
  }

  return (
    <motion.div
      id={opened.title.toLowerCase()}
      ref={ref}
      className={
        "bg-white rounded-lg border-2 border-black absolute top-0 max-w-4xl origin-top max-[540px]:w-screen max-[540px]:h-screen max-[540px]:overflow-hidden flex flex-col max-[540px]:rounded-none" +
        " " +
        (active == opened.title.toLowerCase() ? "z-20" : "z-10")
      }
      onClick={clickFunction}
      initial={{
        scale: 0,
        x: window.screen.width > 540 ? 50 : 0,
        y: window.screen.width > 540 ? 50 : 0,
      }}
      animate={{ scale: 1 }}
      exit={{ height: 0, opacity: 0, overflow: "hidden" }}
      drag
      dragControls={dragControls}
      dragMomentum={false}
      dragConstraints={constraints}
      dragListener={false}
    >
      <TopComponent
        title={opened.top}
        closeFunction={closeFunction}
        clickFunction={clickFunction}
        onPointerDown={startDrag}
      />

      <div className="py-4 px-4 overflow-scroll">{content}</div>
    </motion.div>
  )
}
