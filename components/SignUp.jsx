import Link from "next/link";

const SignUp = () => {
  return (
    <Link href="/signup">
      <button className="p-1 md:px-4 md:py-2 bg-button-main text-white rounded-md font-bold text-xs drop-shadow-lg">
        Sign Up
      </button>
    </Link>
  );
};

export default SignUp;
