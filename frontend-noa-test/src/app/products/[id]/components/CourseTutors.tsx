import React from 'react'
import { ProductLong } from '../../interfaces/long-product.interface'
import Image from 'next/image'

export const CourseTutors = ({ product }: { product: ProductLong }) => {
    return (
        <div className='text-slate-950 p-10'>
            <h5 className='text-5xl font-bold mb-10 text-black'>Conoce a los tutores</h5>
            {product.attributes.tutors.data.map((tutor) => (
                <div key={tutor.id} className='border-gray-100 mb-4 p-2 border rounded  flex flex-row gap-10 w-full'>
                    <div>
                        <Image src={tutor.attributes.image}
                            alt={tutor.attributes.name}
                            width={150}
                            height={150}
                            className=" rounded object-cover w-full h-full max-h-[150px] max-w-[150px]"
                        /></div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-3xl font-light'>{tutor.attributes.name}</span>
                        <span>Profesión:   <span className=' text-gray-500'>{tutor.attributes.profesion}</span> </span>

                        <p className='text-lg'>{tutor.attributes.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
