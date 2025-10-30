import { addComment } from "@/app/actions";
import Link from "next/link";

async function getArticles(slug) {
    const res = await fetch(`http://localhost:3001/article/?slug=${slug}`);
    const [ articles ] = await res.json();

    return articles;
}

export default async function ArticlesPage( {params} ) {
    const { slug } = await params;
    const articles = await getArticles(slug);

    // console.log(articles);

    return (
        <div className="mx-2">
            <Link href="/articles" className="text-blue-500"> &larr; Back to Articles</Link>

            <article className="mt-2">
                <h1 className="text-xl font-bold">{articles.title}</h1>
                <p>{articles.content}</p>
            </article>

            <section className="mt-5">
                <h2>Comments :</h2>

                <form action={addComment} className="flex flex-col w-72 gap-2 mt-2" name="comment" id="comment">
                    <textarea placeholder="Write your comment here..." className="w-full h-40 border rounded border-gray-600 pl-1" name="comment" />
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white w-full">Send</button>
                </form>

            </section>
        </div>
        
    )
    
}