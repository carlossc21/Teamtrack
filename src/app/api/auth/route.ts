import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { serialize } from "cookie";
import cookies from 'js-cookie'
import axios from "axios";

export async function POST(req: Request){
    const {email, password} = await req.json();
    const request = await axios.get('http://localhost:3001/user')
    const users: User[] = request.data

    let validUser = undefined
    users.forEach((user)=>{
        if(user.email === email && user.password === password) validUser = user
    })
    

    // Verify email and password
    if(validUser){
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24 * 30),
            user: validUser,
        }, Buffer.from('secret'));

        //Serialize the token
        const serialized = serialize('myTokenName', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 1000 + 60 * 60 * 24 * 30,
            path: '/'
        });

        
        return NextResponse.json({
            token: token,
            serialized: serialized,
            message: 'Ok'
        }, {
            status: 200,
            headers:{
                'Set-Cookie': serialized
            }
        });
    }

    return NextResponse.json({
        message: 'Invalid email or user'
    }, {
        status: 200,
    });
    
}

export async function GET(req: Request){
    const jwt = cookies.get('myTokenName');
    console.log(jwt);
    
}