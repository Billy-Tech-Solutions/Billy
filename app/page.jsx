import Image from "next/image";
import Nav from "@/components/Nav";
import WaitlistSignup from "@/components/WaitlistSignup";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <section className="image_section w-full h-screen bg-no-repeat">
      </section>
      <section className="w-full min-h-screen bg-black flex items-center justify-center">
        <WaitlistSignup/>
      </section>
    </main>
  );
}
