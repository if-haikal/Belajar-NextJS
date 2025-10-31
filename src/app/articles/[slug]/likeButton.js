'use client';

import { createLike } from "@/app/actions";
import { useTransition } from "react";


export function LikeButton({articleId}){
    const [pending, startTransition] = useTransition();

    async function handleLike(){
        startTransition(async () => {
            await createLike(articleId);
        });
    }

    return(
        <button className="bg-teal-600 text-white py-1 px-2 rounded" onClick={handleLike}>
            {pending ? 'Wait...': 'Like'}
        </button>
    )
}