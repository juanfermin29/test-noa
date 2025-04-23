import { notFound } from 'next/navigation';
import { ProductLong } from '../interfaces/long-product.interface';
import { ToggleFavoriteButton } from './components/ToggleFavoriteButton';
import { CourseDescription } from './components/CourseDescription';
import { CourseTutors } from './components/CourseTutors';
import { CourseInforrmation } from './components/CourseInforrmation';

async function getProduct(id: number): Promise<ProductLong> {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_BASE_API}/api/products/${id}?populate[tutors][populate][image][fields][0]=url&populate=*&populate[categories][fields][0]=name`;
    const res = await fetch(url);

    if (!res.ok) notFound();

    const data = await res.json();
    return data.data;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const numericId = Number(id);

    if (isNaN(numericId)) notFound();

    const product = await getProduct(numericId);

    return (
        <div className="container mx-auto shadow rounded-b-lg rounded-tl-lg my-10 text-white relative">
            <ToggleFavoriteButton product={product} />
            <CourseInforrmation product={product} />
            <CourseDescription description={product.attributes.description} />
            <CourseTutors product={product} />
        </div>
    )
}

