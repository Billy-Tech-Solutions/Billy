import Link from "next/link";

const JoinOurWaitlist = () => {
    return (
        <Link href="/waitlistregistration">
            <button className="bg-gradient-to-r from-purple-main to-pink-main text-white py-2 px-8 rounded-md font-bold text-xl drop-shadow-xl">
            Join our waitlist!
            </button>
        </Link>
     );
}
 
export default JoinOurWaitlist;