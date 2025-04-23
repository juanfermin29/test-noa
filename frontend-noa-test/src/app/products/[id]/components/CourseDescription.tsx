import React from 'react'
interface Props{
    description: string
}

export const CourseDescription = ({description}: Props) => {
    return (
        <div className='text-slate-950 p-10'>
            <h5 className='text-5xl font-bold mb-10 text-black'>Que aprenderás?</h5>
            <p className='text-justify text-lg'>{description}</p>
        </div>
    )
}
