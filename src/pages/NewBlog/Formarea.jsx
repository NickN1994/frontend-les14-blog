import './NewBlog.css'

function Formarea (props) {

    return (
        <section>
            <label>{props.label}</label>
            <textarea
                type={props.type}
                id={props.id}
                name={props.name}
                rows={props.rows}
                cols={props.cols}
                value={props.value}
                onChange={props.onChange}
            />
        </section>
    )
}

export default Formarea;