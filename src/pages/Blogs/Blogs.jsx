import posts from '../../constants/data.json';
import {Link, useParams} from "react-router-dom";
import React from "react";
import './Blogs.css'
import BlogListHelper from "./BlogListHelper.jsx";


function Blogs() {

    const {id} = useParams();


    return (

        <div className='outer-container'>
            <div className='inner-container'>

                {posts.map((post) => {
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

    );
}

export default Blogs;
