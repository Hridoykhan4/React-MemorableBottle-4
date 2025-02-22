import "./App.css";
import Bottles from "./components/Bottles/Bottles";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <div className="py-7">
        <Header></Header>
      </div>
      <div className="w-11/12 mx-auto">
        <Bottles></Bottles>
      </div>
      <Toaster></Toaster>
    </>
  );
}

export default App;
