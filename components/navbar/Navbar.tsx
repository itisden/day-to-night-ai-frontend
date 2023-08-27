import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar justify-between bg-base-100 fixed z-10">
      <Link href="/" className="btn btn-ghost normal-case text-xl ">
        Day To Night AI
      </Link>
      <Link href="/about" className="btn btn-ghost normal-case">
        About
      </Link>
    </div>
  );
}
