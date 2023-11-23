import Link from "next/link";

const JoinOurWaitlist = () => {
    return (
        <Link href="/waitlistregistration">
            <button className="bg-button-main text-white p-4 px-8 rounded-md font-bold text-xl drop-shadow-xl">
            Join our waitlist!
            </button>
        </Link>
     );
}
 
export default JoinOurWaitlist;