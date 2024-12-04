import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
        <div className=" notFound ">
             <div  className="notFoundContent m-0 text-center  p-5">
            <h2 className="textTitle p-5 inter-700">404</h2>
            <p className="text p-3 inter-500">Сторінка не знайдена</p>
            <Link to="/" className="linc-secondary  link-body-emphasis  text-decoration-none icon-link-hover rounded btn btn-outline-warning bg bg-indigo ">Повернутися на головну</Link>
        </div>
        </div>
       
        </>
        
    );
};

export default NotFoundPage;