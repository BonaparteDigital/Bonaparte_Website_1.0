import React from "react";
import Layout from "../components/layout";
import { Seo } from "../components/seo";
import { Link } from "gatsby";

const NotFound = () => {
    return (
    <Layout> 
        <div className="bg-olive-light">
        <div className="container text-center items-center">
            <div className="py-40">
             <h1 className="md:text-5xl text-3xl mx-auto md:max-w-2xl max-w-md ">Arretez! The place you are looking for can't be found...</h1>
             <p> <Link to="/" className="underline underline-offset-1 text-2xl">Let's re-group!</Link></p>  
            </div>
        </div> 
        </div>

    </Layout>
    );
};

export default NotFound;

export const Head = () => (
    <Seo
    title="Bonaparte | Not Found"
    description=""/>
    )