export async function GET(req){
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('query');

    return Response.json({
        messagae: "User GET Response from static route",
        query: query || "no query provided"
    });
}


export async function POST() {
    return Response.json({
        message: "User POST Response from static route"
    });
}