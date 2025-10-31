'use server';

export async function addComment(pervData, formData){
    // console.log(formData.get("comment"));
    const comment = formData.get("comment");

    if(!comment){
        return { error: 'Comment cannot be empty'};
    }
}