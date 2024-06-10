import Image from "next/image";
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
    return (
    <>
    <div className="w-100 p-4 d-flex justify-content-center pb-4">
        <div className="card col login-wrapper">
            <div className="card-title"></div>
            <div className="card-body">
            
                <LoginForm />
            </div>
            
        </div>
        
    </div>
    
    </>
    );
  }
  