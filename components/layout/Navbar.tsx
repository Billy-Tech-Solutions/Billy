import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 border-b bg-white z-40">
      <div className="w-full flex justify-between px-4 py-3">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Button variant="ghost">BILLY</Button>
          </Link>
        </div>

        <div className="flex gap-3">
          <Button variant="outline">Sign-in</Button>
          <Button>Sign-up</Button>
        </div>
      </div>
    </nav>
  )
}
