export async function GET(req){
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('query');

    return Response.json({
        messagae: "User GET Response from static route",
        query: query || "no query provided"
    });
}


export async function POST(req) {
    const body = await req.json();

    // const formData = await req.formData();
    // const name = formData.get('name');
    // const email = formData.get('email');

    console.log(body);

    return Response.json({
        user : {
            name: body.name,
            email: body.email,
            username: body.username
        }
    });
}