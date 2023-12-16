import posts from '../../constants/data.json';
import {Link, useParams} from "react-router-dom";
import React from "react";
import BlogListHelper from "./BlogListHelper.jsx";


function Blogs() {

    const {id} = useParams();


    return (

        <div className='outer-container'>
            <div className='inner-container'>

                {posts.map((post) => {
                    return (
                <BlogListHelper
                key={post.id}
                title={post.title}
              
                author={post.author}

                comments={post.comments}
                shares={post.shares}
                /> )
                })}
            </div>
        </div>

    );
}

export default Blogs;
