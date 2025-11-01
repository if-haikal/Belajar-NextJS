export async function GET({ params }){
    const {id} = await params;
    // const response = 

    return Response.json({
        message: "User GET response from dynamic route",
        user: {
            id,
            name: "John Doe",
            email: "johndoe@gmail.com"
        },
    });
}