'use server';

export async function addComment(pervData, formData){
    // console.log(formData.get("comment"));
    const comment = formData.get("comment");

    if(!comment){
        return { error: 'Comment cannot be empty'};
    }
}

export async function createLike(articleId) {
    // Fake delay
    await new Promise(resolve => setTimeout(() => resolve(true), 1000));

    console.log("Like created for article ID:", articleId);
}