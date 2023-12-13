import posts from '../../constants/data.json';
import {Link, useParams} from "react-router-dom";
import React from "react";
import BlogListHelper from "./BlogListHelper.jsx";
import {post} from "axios";

function Blogs() {
    console.log(posts);
    const {id} = useParams();


    return (

        <div className='outer-container'>
            <div className='inner-container'>

                {posts.map((post) => {
                <BlogListHelper
                id={post.id}
                title={post.title}
                subtitle={post.subtitle}
                content={post.content}
                created={post.created}
                author={post.author}
                readTime={post.readTime}
                comments={post.comments}
                shares={post.shares}
                />
                })}
            </div>
        </div>

    );
}

export default Blogs;
