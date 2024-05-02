import Popup from "./components/Popup";
import PopupModem from "./components/PopupModem";
import AnimatedBorder from "./components/AnimatedBorder";
import AnimatedBorder2 from "./components/AnimatedBorder2";
import Imghover from "./components/Imghover";

export default function Home() {
  return (
    <div className="mt-[10rem] ">
      <h1>Hello World</h1>
      <Popup />
      <AnimatedBorder />
      <AnimatedBorder2 />
      <Imghover />
      <PopupModem />
    </div>
  );
}
