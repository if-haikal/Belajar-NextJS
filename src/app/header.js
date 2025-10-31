import Link from "next/link";
import { getSetting } from "./[queries]/getSetting";

export async function Header(){
    const setting = await getSetting();

    return (
        <header>

            <h1 className="text-3xl font-bold mt-2 mx-2">{setting.sitename}</h1>

            <nav className="mx-2 flex gap-4 border-b-2 pb-2 mb-4">
                <Link href="/">Home</Link>
                <Link href="/articles">Articles</Link>
                <Link href="/products">Product</Link>
            </nav>
        
        </header>
    )
}