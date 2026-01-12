import { motion, spring, stagger } from "motion/react";
import NavHeader from "./components/navHeader";

function App() {
  return (
    <>
      <NavHeader />
      <motion.main>{/* Add your components here */}</motion.main>;
    </>
  );
}

export default App;
