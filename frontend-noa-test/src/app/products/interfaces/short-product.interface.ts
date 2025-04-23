
export interface ShortProduct {
    id: number;
    attributes: ProductData;
}

export interface ProductData {
    name: string;
    price: number;
    createdAt: Date;
    frontImage: string;
}
