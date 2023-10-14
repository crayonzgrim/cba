import Image from "next/image";
import profile from "../../../public/images/profile.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center flex justify-center items-center gap-6">
      <Image
        className="rounded-full"
        src={profile}
        alt={"profile"}
        width={130}
        priority
      />
      <div className="">
        <h2 className="text-2xl font-bold mt-2">Hi, I'm crayonzgrim</h2>
        <h3 className="text-xl font-semibold">Full-stack engineer</h3>
        <Link href="/contact">
          <button className="bg-yellow-500 font-bold rounded-xl py-2 px-4 mt-5">
            Contact me
          </button>
        </Link>
      </div>
    </section>
  );
}
