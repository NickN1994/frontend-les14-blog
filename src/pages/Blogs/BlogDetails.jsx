import {useParams} from "react-router-dom";
import posts from '../../constants/data.json';
import BlogListHelper from "./BlogListHelper.jsx";


function BlogDetails () {
    const {id} = useParams();

    return (
        <div className="inner-container">
            <BlogListHelper/>
        </div>
    )
}

export default BlogDetails;