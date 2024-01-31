
import { RateStars } from './RateStars'
import './Addreview.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationSchema } from '../Formik-components/AddReviewForm'
import { loggedInUser } from '../data'


export const AddReview = (props) => {

    const submitForm = (values) => {    
        
        if(props.editForm) {
            const saved = props.userData.map(item => {
                return item.user === loggedInUser.name ? {
                    user: loggedInUser.name,
                    starRating: values.starRating,
                    writtenReview: values.writtenReview,
                    headline: values.headline
                } : item
            })
            props.setUserData(saved);
        } else {
            props.setUserData([{
                user: loggedInUser.name,
                starRating: values.starRating,
                writtenReview: values.writtenReview,
                headline: values.headline
            }, ...props.userData])
        }

        
        props.setAddReview(false)
        props.setEditForm(false)
    }




    const cancelFunction = () => {
        props.setAddReview(false)
        props.setEditForm(false)
    }




    return (
       <Formik
        initialValues={props.editUser}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={submitForm}
       >
            {(formik) => {

                // console.log(formik.values)

                return(
                    <div className="add-review-container">
                        <div className="add-review-center-box">
                            <div className="title">
                                {props.edit ? 'Edit your review' : 'Add a review'}
                            </div>
                            <div className="overall-rating">Overall Rating</div>
                            <RateStars formik={formik}/>
                            <ErrorMessage className='error' component='span' name='starRating'/>
                            
                            <Form>

                            <label className='headline-label'>Headline</label>
                            <Field className='headline' name='headline' type='text' placeholder='What’s most important to know?'/>
                            <ErrorMessage className='error' component='span' name='headline' />


                            <label className='written-review-label'>Written review</label>
                            <Field className='written-review' name='writtenReview' as='textarea' placeholder='What did you like or dislike? What did you use this product for?'/>
                            <ErrorMessage className='error' component='span' name='writtenReview'/>
                            
                            
                            <div className="cancel-add-container">
                                <button onClick={cancelFunction} type='button' className='cancel'>Cancel</button>

                                
                                <button type='submit' className='add'>
                                    {props.edit ? 'Save' : 'Add'}
                                </button>
                            </div>
                        
                            </Form>
                    </div>
                </div>
                )}
            }
       </Formik>
    )
}

