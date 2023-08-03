import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const Card = () => {
    return (
        <>
            <div clasname="card">
                <img class="card-img-top" src="images/blog-1.jpg" alt="Card image cap"/>
                    <div classname="card-body">
                        <h5 className="card-title mt-4">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a>Go somewhere</a>
                    </div>
            </div>
        </>
    );
}

export default Card