import Link from "next/link";
import { FormComment } from "./formComment";

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

            {/* Single Article */}
            <article className="mt-2">
                <h1 className="text-xl font-bold">{articles.title}</h1>
                <p>{articles.content}</p>
            </article>

            {/* Comment Section */}
            <section className="mt-5">
                <h2>Comments :</h2>
                <FormComment />
            </section>
        </div>
        
    )
    
}