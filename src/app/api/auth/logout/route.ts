import { NextResponse } from "next/server";
import cookies from 'js-cookie'
import { serialize } from "cookie";

export async function POST(req: Request){
    const serialized = serialize('myTokenName', '', {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
        maxAge: 0,
        path: '/'
    });
    return NextResponse.json({}, {
        headers: {
            'Set-Cookie': serialized
        },
        status: 200
    })

}