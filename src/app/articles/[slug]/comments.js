export async function Comments() {
    await new Promise((r) => setTimeout(r, 5000));

    return <p>Comments loaded.</p>
}