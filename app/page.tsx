import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <Image src="/slide1.jpg" alt="slide1" fill />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <Image src="/logo.svg" alt="logo" width={220} height={58} className="z-10 invert-100 mb-13"/>
      <div className="z-10 flex flex-col items-center justify-center gap-2 text-center">
      <div className="text-white text-xl font-semibold">Innovate. Illuminate. Inspire</div>
      <div className="text-white text-lg font-medium max-sm:text-sm">We’re switching on to a new experience soon!</div>
      </div>
      <div className="z-10 flex items-center justify-between gap-10">
        <Link href="https://www.instagram.com/microlightsgroup/" target="_blank"><AiFillInstagram size={54} className="text-white"/></Link>
        <Link href="https://www.linkedin.com/company/microlights/" target="_blank"><IoLogoLinkedin size={48} className="text-white"/></Link>
      </div>
    </div>
  );
}
