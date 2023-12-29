import posts from '../../constants/data.json';
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import './Blogs.css'
import BlogListHelper from "./BlogListHelper.jsx";
import axios from "axios";


function Blogs() {

    const {id} = useParams();
    const [getBlog, setGetblog] = useState();

    useEffect(() => {
        async function getBlogs() {
            try {
                const result = await axios.get('http://localhost:3000/posts', {
                    headers: {
                        Accept: 'application/json',
                    }
                });
                console.log("gelukt")
                console.log(result.data);
                setGetblog(result.data);
            } catch (e) {
                console.error(e + "Het is niet gelukt om de blog op te halen");
            }
        }

        getBlogs();
    }, []);


    return (
        <>
            {
                /*VRAAG
            1. Ik heb nu wel alle blogs zichtbaar op de pagina.
            Maar in de console worden de blogs wel telkens opnieuw geladen.
            ook als ik eerst naar een andere pagina ga en weer terug naar de blog pagina,
            dan wordt alles opnieuw geladen. Ik dacht dat met useEffect dit niet mogelijk was ?

            2. Als ik naar url blog/400 ga die niet bestaat dan wordt de 404 pagina niet weergegeven.
            bij andere url zoals /bloggggg dan wordt die wel weergegeven


            */}
            <div className='outer-container'>
                <div className='inner-container'>
                    {getBlog && getBlog.map((post) => {
                        return (
                            <div className='blogs'>
                                <BlogListHelper
                                    key={post.id}
                                    title={post.title}

                                    author={post.author}
                                    id={post.id}
                                    comments={post.comments}
                                    shares={post.shares}
                                /></div>)
                    })}
                </div>
            </div>
        </>
    );
}

export default Blogs;
