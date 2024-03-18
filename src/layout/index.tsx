import React from "react";
export const MainLayout = ({ children }: any) => { 
    return (<><div className="navbar bg-base-300 px-60">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Products lists</a>
        </div>
        <div className="flex-none ">
 
        </div>
    </div><div className="">
            { children}
        </div></>)
}