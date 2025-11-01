'use server';
import { cookies } from 'next/headers'


export async function addComment(pervData, formData){
    // console.log(formData.get("comment"));
    const comment = formData.get("comment");
    (await cookies()).delete('token')

    if(!comment){
        return { error: 'Comment cannot be empty'};
    }
}

export async function createLike(articleId) {
    const cookieStore = await cookies()
    cookieStore.set({
        name: "token",
        value: "kimochi123",
        httpOnly: true,
        path: '/',
    })

    // Fake delay
    await new Promise(resolve => setTimeout(() => resolve(true), 1000));

    console.log("Like created for article ID:", articleId);
}