import Image from "next/image";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main
      id="main"
      className="w-full h-[93vh] flex items-center justify-center bg-white"
    >
      <h1 id="hellothisisbilly" className="w-full text-center drop-shadow-lg text-[140px] lg:text-[400px]">
        Billy
      </h1>
    </main>
  );
}
