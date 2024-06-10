import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest){

    const jwt = request.cookies.get('myTokenName');
    let userData = undefined
    if(jwt){
        try{
            const {payload} = await jwtVerify(jwt.value, Buffer.from('secret')) 
            userData = payload 
            
                
        }catch(e){
            console.log(e);
        }
    }

    if(!request.nextUrl.pathname.startsWith('/login') && !userData){
        const response = NextResponse.redirect(new URL('/login', request.url));
        console.log('No hbay datos del usuario, redirigir a login', userData);

        return response
    }

    if(request.nextUrl.pathname.startsWith('/login') && userData){
        const response = NextResponse.redirect(new URL('/', request.url));
        console.log('hola, redireccion a dashboard');
        
        return response
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/manage", "/users", "/employees", "/departments", "/login"]
}