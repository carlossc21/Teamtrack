import { NextResponse } from "next/server";
import jwt, { verify } from 'jsonwebtoken'
import { serialize } from "cookie";
import cookies from 'js-cookie'
import axios from "axios";
import { jwtVerify } from "jose";

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

export async function GET(req: Request) {
    const cookieHeader = req.headers.get('cookie');
    let userData;

    if (cookieHeader) {
        const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
            const [name, value] = cookie.split('=').map(c => c.trim());
            acc[name] = value;
            return acc;
        }, {} as { [key: string]: string });

        const token = cookies['myTokenName'];
        if (token) {
            try {
                userData = verify(token, Buffer.from('secret'));
                //Se devuelve los datos obtenidos del token
                return NextResponse.json({
                    message: 'Token is valid',
                    userData
                }, {
                    status: 200,
                });
            } catch (e) {
                return NextResponse.json({
                    message: 'Invalid token'
                }, {
                    status: 401,
                });
            }
        }
    }

    return NextResponse.json({
        message: 'No token found'
    }, {
        status: 401,
    });
}