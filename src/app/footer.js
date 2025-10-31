import { getSetting } from "./[queries]/getSetting";

export async function Footer() {
    const setting = await getSetting();

    return (
        <footer className="mt-4 mx-2 border-t-2 pt-2">
            <p>&copy; 2024 {setting.sitename}. All rights reserved.</p>
        </footer>
    )
}