import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col background px-5 pb-5">
      <h1 className="bg-white rounded-lg mt-6 text-center font-bold text-4xl py-4 uppercase">
        Random Gifs
      </h1>
      <div className="flex flex-col w-11/12 items-center">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
