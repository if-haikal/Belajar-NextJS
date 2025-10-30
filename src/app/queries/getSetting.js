export async function getSetting() {
    
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve(true);
        }, 3000)
    );

    const res = await fetch("http://localhost:3001/setting");
    const data = await res.json();

    return data;
}