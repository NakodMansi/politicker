import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <div className="flex py-5 px-4 items-center justify-between bg-[#191919] text-[#FFF] md:px-8 lg:px-10 w-full">
            <ul className="flex justify-center items-center gap-3 md:gap-6">
                <Link href="/about">
                    <li className="md:text-[1.5rem] lg:text-[2.1rem]">about</li>
                </Link>

                <Link href="/contactUs">
                    <li className="md:text-[1.5rem] lg:text-[2.1rem]">contact</li>
                </Link>
            </ul>

            <p className="text-[2rem] md:text-[2.6rem] lg:text-[4.3rem] lg:leading-[3.7rem]">Politicker</p>

            <Link href="#">
                <button className="py-2 px-4 bg-[#941010] md:text-[1.5rem] lg:text-[2.1rem] lg:leading-[2rem]">send email</button>
            </Link>
        </div>
    )
}