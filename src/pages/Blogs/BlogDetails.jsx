import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json';
import './BlogDetails.css'




function BlogDetails () {
    const {id} = useParams();

    const result = posts.find((post) => {
        if (id === post.id.toString()) {
            return post
        }
    })
    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <article>
                <h1>{result.title}</h1>
                    <h2>{result.subtitle}</h2>
                    <p>Geschreven door {result.author} op {result.created}</p>
                    <p>{result.readtime} minuten lezen</p>
                    <p>{result.content}</p>
                    <p>{result.comments} reacties - {result.shares} keer gedeeld</p>
                    <Link to='/blogs'>Terug naar de overzichtspagina</Link>

                </article>
            </div>
        </div>
    )


}

export default BlogDetails;