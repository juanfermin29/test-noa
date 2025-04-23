import { Category } from "@/app/components/navbar/interfaces/category.interface";
import { ProductData, ShortProduct } from "./short-product.interface";
import { Tutor } from "./tutors.interface";

export interface ProductLong extends ShortProduct {
     attributes: ProductLongData;
}

export interface ProductLongData extends ProductData {
    description:string;
    multimedia:string;
    shortDescription:string;
    hours:number;
    categories: {data : Category[]}
    tutors: {data : Tutor[]}
}

