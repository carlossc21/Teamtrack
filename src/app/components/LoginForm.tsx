"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";



export default function LoginForm(){
    const router = useRouter();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(false)

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>{
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) =>{
        event.preventDefault()
        const response = await axios.post('/api/auth', credentials)
        if(response.status === 200 && response.data.message === 'O'){
            setError(false)
            router.push('/')
        }else{
            setError(true)
        }
    }

    const alert = ()=>(
        <div className="alert alert-danger" role="alert">
            Invalid email or password
        </div>
    )

    return(
        <>
        {error ? alert() : <></>}
        <form onSubmit={handleSubmit}>
            <div data-mdb-input-init className="form-outline mb-4">
                <input name="email" type="email" id="email" className="form-control" onChange={handleChange} />
                <label className="form-label" htmlFor="email">Email address</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
                <input name="password" type="password" id="password" className="form-control" onChange={handleChange} />
                <label className="form-label" htmlFor="password">Password</label>
            </div>

            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                </div>
                </div>

                <div className="col">
                <a href="#">Forgot password?</a>
                </div>
            </div>

            <button  type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
            </div>
        </form>
        </>
    );
}