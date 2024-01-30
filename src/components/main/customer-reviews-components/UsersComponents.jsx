import { loggedInUser } from '../data'
import { ReviewsStar } from '../icons/reviewsStar'

export const UsersComponent = (props) => {
    
    
    const users = props.userData.map((item, index) => {


        const allStars = []
    

        for(let i = 0; i < 5; i ++) {
            if(allStars.length < props.userData[index].starRating) {
                allStars.push(<ReviewsStar key={i} color={'#FAD409'} border={'#FAD409'}/>)
            } else {
                allStars.push(<ReviewsStar key={i} color={'none'} border={'#616161'}/>)
            }

        }

        const starsMap = allStars.map(item => item)    
        const deleteFunction = (buttonIndex) => {
            const deleteFilter = props.userData.filter((_, index) => {
                if(buttonIndex !== index) {
                    return true
                }
            })
            props.setUserData(deleteFilter)
        }
        
        
        
        const edit = (tag) => {
            props.setAddReview(true)
            props.setEditForm(true)
            
            
            props.setEditUser({...props.editUser, 
                headline: props.userData[tag].headline,
                writtenReview: props.userData[tag].writtenReview,
                starRating: props.userData[tag].starRating
            })
        }

        return (
            <div className='users-commentars' key={index}>
                <div className='user-image'>
                    <img src="/src/assets/user-placeholder.png" alt="" />
                </div>
                <div className='user-rating'>
                    <div className='name-editing-container'>
                        <p className='user-name'>{item.user}</p>

                        {props.userData[index].user === loggedInUser.name &&
                            
                            <div className='editing-button-container'>
                                <button onClick={() => deleteFunction(index)} className='delete'>Delete</button>
                                <button className='edit' onClick={() => edit(index)}>Edit</button>
                            </div>
                            
                        }
                        
                    </div>
                    
                    <div className='stars'>{starsMap}</div>
                    <p className='advice'>{item.headline}</p>
                    <p className='user-description'>{item.writtenReview}</p>
                </div>
            </div>
        )
    })


    return (
        <>
            {users}
        </>
    )
}