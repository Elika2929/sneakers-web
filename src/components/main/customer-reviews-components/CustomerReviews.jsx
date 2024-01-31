
import './CustomerReviews.css'
import { UsersComponent } from './UsersComponents'
import { loggedInUser } from '../data'

export const CustomerReview = (props) => {


    const writeReviewFunction = () => {
        props.setAddReview(true)
        props.setEditUser({
            headline: '',
            writtenReview: '',
            starRating: null
        })
    }

    const usersNames = props.userData.map(item => item.user)





    return (
        <>
                <div className="customerReview-container">
                    <div className='title-message'>
                        <div className='title-and-button'>
                    <h1 className='title'>Customer reviews</h1>
                        {usersNames.includes(loggedInUser.name) || 
                            <button  
                            onClick={writeReviewFunction}
                            className='write-review-button'>
                                <span>Write a review</span>
                            </button>
                        }
                     </div>
                    <UsersComponent 
                       userData={props.userData} 
                       setUserData={props.setUserData} 
                       setAddReview={props.setAddReview}
                       setEditUser={props.setEditUser}
                       editUser={props.editUser}
                       setEditForm={props.setEditForm}
                    />
                    </div>
                </div>
        </>)
}   
