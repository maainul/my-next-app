"use client"; // Add this to make the component a client-side component

import Link from "next/link";

export default function Home() {

  return (
    <div>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/product">Product</Link>
    </div>
  );
}
