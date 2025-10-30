'use client';
import { use } from "react";
import Link from "next/link";

export default function Navbar( {props} ) {
    const teksHeader = use(props)

    return (
        <header>
            <h1 className="text-3xl font-bold mt-2 mx-2">{teksHeader.sitename}</h1>
            
            <nav className="mx-2 space-x-4 border-b-2 mt-1 pb-2 mb-4">
                <Link href="/">Home</Link>
                <Link href="/articles">Articles</Link>
                <Link href="/products">Product</Link>
            </nav>
        </header>

    )
}