import { useEffect } from "react";
import "./downloads.css";
import NavHeader from "../components/navHeader";

export default function Downloads() {
  useEffect(() => {
    console.log("loaded");
  }, []);

  return (
    <>
      <NavHeader></NavHeader>

      <main id="wrapper_downloads">
        <h1>This is the download page</h1>
      </main>
    </>
  );
}
