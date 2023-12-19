import React from 'react';
import { useForm } from 'react-hook-form';
import './NewBlog.css';

function NewBlog() {
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const {errors} = formState;

    // vragen daniel:
    // 1. Hoe log ik ingevoerde data met readtime, shares etc.
    // 2. Footer op blog pagina niet correct

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
                        <input type="text" id="title" {...register('title',
                            {required: {
                                value: true,
                                message: 'title is verplicht',
                                } }
                        )} />
                        <p>{errors.title?.message}</p>

                        <label htmlFor="subtitle">Subtitle</label>
                        <input type="text" id="subtitle" {...register('subtitle',
                            {required: {value: true,
                                    message: 'subtitle is verplicht'}
                            })} />
                        <p>{errors.subtitle?.message}</p>

                        <label htmlFor="name">Voor- en achternaam</label>
                        <input type="text" id="name" {...register('name',{
                            required: {
                                value: true,
                                message:'name is verplicht'}
                        })} />
                        <p>{errors.name?.message}</p>

                        <label htmlFor="blogpost">Blogpost</label>
                        <textarea
                            name="blogpost"
                            id="blogpost"
                            cols="30"
                            rows="10"
                            {...register('blogpost',{
                                required: {
                                    value: true,
                                    message: 'blogpost is verplicht'},
                            minLength: {
                                    value: 200,
                                message: 'Dit veld moet minstens 200 karakters hebben'
                            },
                                maxLength: {
                                    value: 3000,
                                    message: 'De post mag maximaal 3000 karakters hebben'
                                }
                            })}
                        ></textarea>
                        <p>{errors.blogpost?.message}</p>
                    </fieldset>
                    <button type="submit">Toevoegen</button>
                </form>
            </div>
        </div>
    );
}

export default NewBlog;
