import Image from 'next/image'
import Nav from '@/components/Nav'
import WaitlistSignup from '@/components/waitlist/WaitlistSignup'

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="header">Billy</h1>
        {/* <Image src="/silhouette.png" width={900} height={900} className="absolute bottom-0 w-[80%] bg-green-200"/> */}
      </section>
      <section className="w-full min-h-screen bg-black flex items-center justify-center">
        <WaitlistSignup />
      </section>
    </main>
  )
}
