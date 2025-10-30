import Link from "next/link";
import { getSetting } from "./queries/getSetting";
import Navbar from "./nav";
import { Suspense } from "react";

export function Header(){
    const setting = getSetting();

    return (
        <header>

            {/* <h1 className="text-3xl font-bold mt-2 mx-2">{setting.sitename}</h1> */}
            
            <Suspense fallback={<div className="mx-2 text-red-400">Loading...</div>}>
                <Navbar props={setting} />
            </Suspense>
            
        
        </header>
    )
}