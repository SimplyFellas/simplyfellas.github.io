import { useState } from "react"

export default function Hambor() {

  let [navOpened, setNavOpened] = useState(false)
  return (
    // button to trigger the dropdown
    <button id="navButton"
      onClick={() => {setNavOpened(!navOpened); console.log(navOpened)}}
    >

    </button>
  )
}
