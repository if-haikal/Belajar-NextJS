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
        <article>
            <h1>{articles.title}</h1>
            <p>{articles.content}</p>
        </article>
    )
    
}