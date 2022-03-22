import React,{useEffect} from 'react'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Pageerror() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="pageerror-wrap d-flex flex-row align-items-center full-w py-5">
             <Helmet>
             <title>404 Page Not Found</title>
            </Helmet>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block">404</span>
                        <div className="mb-4 lead">The page you are looking for was not found.</div>
                        <Link to="/" className="btn btn-site ripple-effbtn btn-40"><span>Back to Home</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
