import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select,
} from '@/components/ui/select'
import { redirect } from 'next/navigation'

export default async function Home() {
  if (process.env.NODE_ENV === 'production') {
    return redirect('/waitlist')
  }

  return (
    <main className="w-full min-h-screen flex flex-col">
      <section id="hero" className="w-full bg-slate-500 h-[400px]">
        <div className="max-w-screen-md w-full h-full mx-auto flex flex-col items-center justify-center gap-8">
          <h1 className="text-white text-4xl text-center">
            Matching you with ad spaces based on your target market
          </h1>
          <Link href="#">
            <Button>Advertise with us!</Button>
          </Link>
        </div>
      </section>

      <section className="bg-purple-secondary w-full p-8">
        <div className="grid grid-cols-2 gap-4 max-w-screen-md w-full mx-auto">
          <div className="bg-white text-black flex flex-col rounded-lg p-4 gap-6">
            <h3>Select your audience</h3>

            <div>
              <label htmlFor="">Label</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="">Label</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="">Label</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="">Label</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="">Label</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img
              className="rounded-lg overflow-hidden w-full"
              src="https://via.placeholder.com/200"
              alt="test"
            />
            <img
              className="rounded-lg overflow-hidden w-full"
              src="https://via.placeholder.com/200"
              alt="test"
            />
          </div>
        </div>

        <div className="text-white text-center my-8">
          <h2 className="text-4xl font-bold mb-3">
            Physical marketing with just a few clicks.
          </h2>
          <p>Maximize your reach.</p>
        </div>
      </section>
    </main>
  )
}
