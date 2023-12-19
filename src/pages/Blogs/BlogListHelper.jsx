import {Link} from "react-router-dom";


function BlogListHelper (props) {

    return (

        <section>
            <h3><Link to={`/blogs/${props.id}`}>{props.title} ({props.author})</Link></h3>
            <p>{props.comments} reacties - {props.shares} keer gedeeld</p>
            <Link to='/blogs'>Terug naar overzichtspagina</Link>
        </section>
    )
}
export default BlogListHelper;