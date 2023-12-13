import {useParams} from "react-router-dom";

function BlogDetails () {
    const {id} = useParams();

    return (
        <div>Het Blog id is {id}</div>
    )
}

export default BlogDetails;