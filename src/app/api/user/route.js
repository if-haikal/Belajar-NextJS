export async function GET(){
 return Response.json({
        id: 1,
        name: "John Doe",
        email:"johndoe@gmail.com"
    });
}


export async function POST() {
    return Response.json({
        message: "This message sended by POST method"
    });
}