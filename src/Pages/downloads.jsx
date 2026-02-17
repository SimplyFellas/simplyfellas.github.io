import { useEffect } from "react";
import "../App.css";
import NavHeader from "../components/navHeader.jsx";

function Downloads() {
  useEffect(() => {
    window.scrollTo({top:0, left: 0, behavior:"smooth"})
  },[])

  return (
    <>
      <NavHeader></NavHeader>

      <main id="wrapper_downloads">
        <h1 className="pri-c-1">This is the download page</h1>
      </main>
    </>
  );
}

export default Downloads
