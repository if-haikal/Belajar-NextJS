import Link from "next/link";
import { FormComment } from "./formComment";
import { LikeButton } from "./likeButton";
import { Comments } from "./comments";
import { Suspense } from "react";
import { notFound } from "next/navigation";

// use dynamic metadata when fetch detail products/articles/posts
export async function generateMetadata( {params} ){
    const { slug } = await params;
    const articles = await getArticles(slug);

    if(!articles){
        return {
            title: 'Article Not Found',
            description: 'The requested article does not exist.'
        }
    }

    return {
        title: articles.title,
        description: articles.content.slice(0, 160)
    }
}

async function getArticles(slug) {
    const res = await fetch(`http://localhost:3001/article/?slug=${slug}`);
    const [ articles ] = await res.json();

    return articles;
}




export default async function ArticlesPage( {params} ) {
    const { slug } = await params;
    const articles = await getArticles(slug);

    if(!articles){
        notFound();
    }

    // console.log(articles);

    return (
        <div className="mx-2">
            <Link href="/articles" className="text-blue-500"> &larr; Back to Articles</Link>

            {/* Single Article */}
            <article className="mt-2">
                <h1 className="text-xl font-bold">{articles.title}</h1>
                <p>{articles.content}</p>

                <hr className="my-4"/>
                <LikeButton articleId={articles.id}/>
            </article>

            {/* Comment Section */}
            <section className="mt-5">
                <h2>Comments :</h2>

                <Suspense fallback={<p>Loading comments...</p>}>
                    <Comments />
                </Suspense>

                <FormComment />
            </section>
        </div>
        
    )
    
}