import Link from "next/link"


async function getArticles() {
    const res = await fetch('http://localhost:3001/post');
    const articles = await res.json();

    return articles;
}

export default async function ArticlesPage() {
    const articles = await getArticles();

    console.log(articles);

    return (
        <div>
            <h1>Articles Page</h1>
            
            {articles.map((article) => (
                <article key={article.id}>

                    <Link key={article.id} href={`/articles/${article.slug}`}> {article.title} </Link>

                </article>
            ))}
        </div>
    )
}