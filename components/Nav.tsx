import SignUp from './SignUp'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="top-0 sticky z-40 w-full px-1 py-2 md:p-4 flex items-center justify-between bg-white drop-shadow-md uppercase">
      <Link href="/">
        <p className="w-fit text-purple-main font-black hover:scale-125 transition ease duration-70">
          billy
        </p>
      </Link>
      {/* <div className="w-[50%] md:w-fit flex justify-center items-center gap-4 text-xs">
                <Link href="/howitworks"><p className="hover:text-purple-main hover:scale-105 transition ease duration-70">how it works</p></Link>
                <Link href="/company"><p className="hover:text-purple-main hover:scale-105 transition ease duration-70">company</p></Link>
            </div> */}
      <SignUp />
    </div>
  )
}

export default Nav
