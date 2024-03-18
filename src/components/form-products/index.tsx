import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
export const FormProducts = ({ isModified, product, callback }: any) => {
    const [productId, setproductId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    useEffect(() => {

    }, [isModified, product]);
    const save = async () => {

        const userToken = localStorage.getItem("userToken");
        if (!isModified) { 
            const data = {
                productId,name,description,quantity,price
            }
            const uri = process.env.REACT_APP_API_URI;
            const req = await fetch(`${uri}/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${userToken}`
                },
                body: JSON.stringify(data)
            });
            if (req.status != 201) { 
                Swal.fire("No se pudo agregar el producto verifique los datos", "", "error");
                return;
            }
            if (callback) callback(data);
        }
    }
    return (<div className="w-full flex flex-col  justify-center items-center ">
        <div className="form-control w-full">
            <label htmlFor="">Identificador del producto</label>
            <input type="text" className="input border border-gray-300" onChange={(e: any) => setproductId(e.target.value)} value={productId} />
        </div>
        <div className="form-control w-full">
            <label htmlFor="">Nombre del producto</label>
            <input type="text" className="input border border-gray-300" onChange={(e: any) => setName(e.target.value)} value={name} />
        </div>
        <div className="form-control w-full">
            <label htmlFor="">Descripción del producto</label>
            <input type="text" className="input border border-gray-300" onChange={(e: any) => setDescription(e.target.value)} value={description} />
        </div>
        <div className="form-control w-full">
            <label htmlFor="">Cantidad del producto</label>
            <input type="number"  className="input border border-gray-300" onChange={(e: any) => setQuantity(parseInt(e.target.value))} value={quantity} />
        </div>
        <div className="form-control w-full">
            <label htmlFor="">Precio del producto</label>
            <input type="number" className="input border border-gray-300" onChange={(e: any) => setPrice(parseFloat(e.target.value))} value={price} />
        </div>
        <form method="dialog" className="flex gap-2 p-3">
            <button className="btn btn-primary" onClick={save}>Guardar</button>
            <button className="btn" onClick={() => {
                
             }}>Cancelar</button>
        </form>
    </div>
    )
}