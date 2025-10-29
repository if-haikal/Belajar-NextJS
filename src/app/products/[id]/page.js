export default async function ProductId( {params} ){
    const {id} = await params;
    console.log("Product ID:", id);

    
    return (
        <>
            <h1 className="text-3xl text-black">
                Home Page for Product {id}
            </h1>
        </>
    )
}