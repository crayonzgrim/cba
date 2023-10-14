"use client";

import Link from "next/link";
import React from "react";

const menus = [
  {
    title: "Home",
    name: "home",
  },
  {
    title: "About",
    name: "about",
  },
  {
    title: "Posts",
    name: "posts",
  },
  {
    name: "contact",
    title: "Contact",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center py-[50px] px-3">
      <Link href="/">
        <h1 className="text-2xl font-bold">crayonzgrim</h1>
      </Link>

      <nav className="flex gap-4">
        {menus.map((menu) => (
          <Link
            href={`/${menu.name === "home" ? "/" : menu.name}`}
            key={menu.name}
          >
            {menu.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
