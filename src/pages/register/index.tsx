import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const register = async () => {
        const uri = process.env.REACT_APP_API_URI;
        const req = await fetch(`${uri}/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, password, scope: ["products"]
            })
        })
        if (req.status === 401) {
            Swal.fire("Credenciales no valida", "", "error");
            return;
        }
        const result = await req.json();
        console.log(result);
        localStorage.setItem("userToken", result.token);
        navigate("/home");
    }
    return (<div className="w-full h-screen flex justify-center items-center bg-gray-500">
        <div className="card bg-base-300 rounded-md w-4/12">
            <div className="card-body py-8">
                <h1 className="text-center w-full text-[20px] font-semibold">Regristrate </h1>
                <div className=" divider"></div>
                <div className=" form-control">
                    <label htmlFor="">Nombre Usuario</label>
                    <input type="text" className="input" onChange={(e: any) => setUsername(e.target.value)} value={username} />

                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" className="input" onChange={(e: any) => setPassword(e.target.value)} value={password} />
                </div>
                <div className=" divider"></div>
                <div className="flex flex-col items-center gap-2 justify-center ">
                    <button className="btn btn-primary w-full" onClick={register}>Registrate</button>
                    <a href="/" className="btn btn-secondary w-full">Inicias sesión</a>
                </div>
            </div>

        </div>
    </div>)
}