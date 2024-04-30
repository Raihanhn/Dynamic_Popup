import Image from "next/image";
import Popup from "./components/Popup";
import NewsTicker from "./components/NewsTicker/NewsTicker";
import NewsTicker2 from "./components/NewsTicker2/NewsTicker2";
import PopupModem from "./components/NewsTicker2/Modem/PopupModem";
import AnimatedBorder from "./components/AnimatedBorder/AnimatedBorder";
import AnimatedBorder2 from "./components/AnimatedBorder2/AnimatedBorder2";
import Imghover from "./components/ImgHover/Imghover";

export default function Home() {
  return (
    <div className="mt-[6rem] ">
      {/* <NewsTicker />
      <h1>Hello World</h1>
      <NewsTicker2 />
      <Popup /> */}
      hello
      <AnimatedBorder />
      <AnimatedBorder2 />
      <Imghover />
      {/* <PopupModem /> */}
    </div>
  );
}
