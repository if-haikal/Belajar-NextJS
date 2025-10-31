export async function getSetting() {
    const res = await fetch("http://localhost:3001/setting");
    const data = await res.json();

    return data;
}