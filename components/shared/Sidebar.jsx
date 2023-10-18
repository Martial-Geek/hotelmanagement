"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@constants";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="flex flex-col w-full max-w-fit h-screen py-2 px-4 bg-slate-900">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <Link
            href={item.route}
            className={`${
              isActive
                ? `primary-gradient rounded-lg text-slate-300`
                : `text-white`
            } flex items-center justify-start gap-4 bg-transparent p-4`}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={`${isActive ? "brightness-125" : "invert"} `}
            />
            <p className={`${isActive ? "font-bold" : "font-light"}`}>
              {item.label}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

export default Sidebar;
