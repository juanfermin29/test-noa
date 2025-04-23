import { User, Clock, DollarSign } from 'lucide-react'
import React from 'react'
import { PreviewVideo } from './PreviewVideoBox'
import { ProductLong } from '../../interfaces/long-product.interface'


export const CourseInforrmation = ({ product }: { product: ProductLong }) => {
  return (
    <div className='grid bg-slate-800 rounded-tl-lg grid-cols-2  py-10'>
    <div className='px-10 rounded'>
        <PreviewVideo url={product.attributes.multimedia} />
    </div>
    <div className='flex flex-col'>
        <h4 className='text-4xl font-bold mb-3'>{product.attributes.name}</h4>
        <h5 className='text-xl text-gray-200 pr-5 text-start'>{product.attributes.shortDescription}</h5>
        <div className='flex flex-1'></div>
        <div className='flex flex-col gap-y-4'>
            <span className='flex flex-row'>
                <User className='mr-2' />
                Tutores: {product.attributes.tutors.data.map(x => x.attributes.name).join(',')}
            </span>

            <span className='flex flex-row'>
                <Clock className='mr-2' />
                Duración: {product.attributes.hours} horas
            </span>
            <span className='flex flex-row'>
                <DollarSign className='mr-2' />
                Precio: {product.attributes.price} $
            </span>
        </div>
    </div>
</div>
  )
}
