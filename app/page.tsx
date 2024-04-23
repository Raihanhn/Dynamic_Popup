import Image from "next/image";
import Popup from "./components/Popup";
import NewsTicker from "./components/NewsTicker/NewsTicker";
import NewsTicker2 from "./components/NewsTicker2/NewsTicker2";

export default function Home() {
  return (
    <div className="mt-[6rem] ">
      <NewsTicker />
      <h1>Hello World</h1>
      <NewsTicker2 />
      <Popup />
    </div>
  );
}
