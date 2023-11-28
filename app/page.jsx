import Image from "next/image";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main
      id="main"
      className="w-full h-[85vh] flex items-center justify-center"
    >
      <video autoPlay muted loop id="background-video">
        <source src="billboard-video.mp4" type="video/mp4" />
      </video>

      <div className="w-full h-full flex justify-center items-center bg-black/80">
        <h1 className="text-center text-[40px] lg:text-[150px] font-black drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-br from-purple-main/90 to-pink-main/90">
          Hello, this is Billy!
        </h1>
      </div>
    </main>
  );
}
