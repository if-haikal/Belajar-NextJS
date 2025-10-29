import Link from "next/link"


async function getArticles() {
    const res = await fetch('http://localhost:3001/article');
    const articles = await res.json();

    return articles;
}

export default async function ArticlesPage() {
    const articles = await getArticles();

    // console.log(articles);

    return (
        <div>
            <h1>Articles Page</h1>
            
            {articles.map((article) => (
                <article key={article.id}>
                    <h2>
                        <Link href={`/articles/${article.slug}`}> {article.title} </Link>
                    </h2>
                </article>
            ))}
        </div>
    )
}