
export interface ShortProduct {
    id: number;
    attributes: ProductData;
}

export interface ProductData {
    name: string;
    price: number;
    createdAt: Date;
    frontImage: FrontImage;
}

export interface FrontImage {
    data: Data;
}

export interface Data {
    id: number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    url: string;
    alternativeText: null;
}

