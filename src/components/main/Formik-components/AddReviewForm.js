import { string, object, number } from 'Yup'

export const validationSchema = object({
    headline: string().min(4).trim().required('Please enter your headline'),
    writtenReview: string().min(15).trim().required('Please enter your written review'),
    starRating: number().required('Please select a star rating')
})

