import { AddReviewStars } from '../icons/AddReviewStars'



export const RateStars = ({formik}) => {
    const starsArray = [];

    for(let i = 0; i < 5; i++) {
        if(starsArray.length < formik.values.starRating) {
            starsArray.push(<AddReviewStars key={i} color={'#FAD409'} stroke={'#FAD409'}/>)
        } else {
            starsArray.push(<AddReviewStars key={i} color={'none'} stroke={'#616161'}/>)
        }
    }


    const stars = starsArray.map((item, index) => {
        return (
            <div key={index}>
                <button 
                type='button'
                onClick={() => formik.setFieldValue('starRating', index + 1)}
                name='starRating'
                className='stars-button'>{item}</button>
            </div>
        )
    })

    return  <div className="stars-container">{stars}</div>
}