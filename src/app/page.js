import Image from "next/image";

export const metadata = {
    title: 'Home',
    description: 'View of a Home Page'
}

export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-bold text-black mx-2">
        Welcome Stranger! 👋
      </h1>
    </div>
  );
}
