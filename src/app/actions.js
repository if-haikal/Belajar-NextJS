'use server';

export async function addComment(formData){
    console.log(formData.get("comment"));
}