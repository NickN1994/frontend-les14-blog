import './NewBlog.css'

function Formfield (props) {

    return (
        <section>
            <label>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </section>
    )
}

export default Formfield;