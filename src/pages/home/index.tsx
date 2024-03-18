import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layout";
import { FormProducts } from "../../components/form-products";

export const Home = () => { 
    const [list, setList] = useState<any[]>([])
    const listProductsGet = async() => { 
        const uri = process.env.REACT_APP_API_URI;
        const req = await fetch(`${uri}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await req.json()
        console.log(result);
        
        setList(result.products);
        }
    
    useEffect(() => {
        listProductsGet();
    }, []);
    useEffect(() => { 
        console.log("Llego datos",list);
        
    },[list])
    
    return (<MainLayout>
        <div className=" px-96 py-10"><button className="btn" onClick={() => {
            const d:any = document?.getElementById('my_modal_1')
            d.showModal()
        }}>Crear producto</button></div>
        <div className=" px-96 py-10">
            <table className="table table-zebra">
                <thead className="bg-gray-300">
                    <th>Identificador unico</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </thead>
                <tbody>
                    {list.length > 0 && list.map((e: any) => { 
                        return (<tr key={e._id}>
                            <td>{e.productId}</td>
                            <td>{e.name}</td>
                            <td>{e.description}</td>
                            <td>{e.quantity}</td>
                            <td>{e.price}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <FormProducts isModified={false} callback={async(e:any) => {
                    const listAux:any[] = [...list];
                    if (e) listAux.push(e);
                    setList(listAux);
                    
                 }} />
            </div>
        </dialog>
       
    </MainLayout>)
}