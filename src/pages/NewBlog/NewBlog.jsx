import React from 'react';
import { useForm } from 'react-hook-form';
import './NewBlog.css';

function NewBlog() {
    const form = useForm();
    const { register, handleSubmit } = form;

    const formValues = {
        title: '',
        subtitle: '',
        name: '',
        blogpost: '',
    };

    const onSubmit = (data) => {
        console.log('Blog is toegevoegd', data);


        console.log('Form Values:', formValues);
    };

    return (
        <div className="outer-container">
            <div className="inner-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <h2>Post Toevoegen</h2>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" {...register('title')} />

                        <label htmlFor="subtitle">Subtitle</label>
                        <input type="text" id="subtitle" {...register('subtitle')} />

                        <label htmlFor="name">Voor- en achternaam</label>
                        <input type="text" id="name" {...register('name')} />

                        <label htmlFor="blogpost">Blogpost</label>
                        <textarea
                            name="blogpost"
                            id="blogpost"
                            cols="30"
                            rows="10"
                            {...register('blogpost')}
                        ></textarea>
                    </fieldset>
                    <button type="submit">Toevoegen</button>
                </form>
            </div>
        </div>
    );
}

export default NewBlog;
