'use client';

import { addComment } from "@/app/actions";
import { useActionState } from "react";

export function FormComment(){
    const initialState = {
        error: "",
    };
    const [state, formAction, pending] = useActionState(addComment, initialState);

    return (
        <form action={formAction} className="flex flex-col w-72 gap-2 mt-2" name="comment" id="comment">
            {state?.error && (
                <div role="alert" className="p-2 bg-red-100 text-rose-600 border border-rose-600 rounded">
                    {state.error}
                </div>
            )}

            <textarea placeholder="Write your comment here..." className="w-full h-40 border rounded border-gray-600 pl-1" name="comment" required />

            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white w-full" disabled={pending}>Send</button>
        </form>
    )
}