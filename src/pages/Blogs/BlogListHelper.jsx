import {Link} from "react-router-dom";


function BlogListHelper (props) {
    return (

        <section>
            <h3>{props.title} ({props.readTime} minuten)</h3>
            <h4>{props.subtitle}</h4>
            <p>Geschreven door {props.author} op {props.created}</p>
            <p>{props.content}</p>
            <p>{props.comments} reacties - {props.shares} keer gedeeld</p>
            <Link to='/blogs'>Terug naar overzichtspagina</Link>
        </section>
    )
}
export default BlogListHelper;