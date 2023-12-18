import './NewBlog.css'
import Formfield from "./Formfield.jsx";
import {useState} from "react";
import Formarea from "./Formarea.jsx";


function NewBlog () {

const [title, setTitle] = useState('');
const [subtitle, setSubtitle] = useState('');
const [name, setName] = useState('');
const [blogPost, setBlogPost] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="outer-container">
            <div className="inner-container">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <h2>Post Toevoegen</h2>
                        <Formfield
                            label={"Title"}
                            type={"text"}
                            id={"title"}
                            name={"title"}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Formfield
                            label={"Subtitle"}
                            type={"text"}
                            id={"subtitle"}
                            name={"subtitle"}
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                        />
                        <Formfield
                            label={"Voor- en achternaam"}
                            type={"text"}
                            id={"name"}
                            name={"name"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Formarea
                            label={"Blogpost"}
                            type={"textarea"}
                            id={"blogpost"}
                            name={"blogpost"}
                            rows={"15"}
                            cols={"40"}
                            value={blogPost}
                            onChange={(e) => setBlogPost(e.target.value)}
                        />
                    </fieldset>



                </form>
            </div>

        </div>
    )
}

export default NewBlog;