import Image from "next/image";
import Popup from "./components/Popup";
import NewsTicker from "./components/NewsTicker/NewsTicker";

export default function Home() {
  return (
    <div className="mt-[6rem] ">
      <NewsTicker />
      <h1>Hello World</h1>
      <Popup />
    </div>
  );
}
