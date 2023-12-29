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
