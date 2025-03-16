interface Product{
  name: string,
  description: string,
  liftingCapacity: string,
  specifications: string[],
  imageUrl:string 
}

export interface Category {
    id: number,
    name: string,
    description: string,
    imageUrl:string,
    products: Product[];
}