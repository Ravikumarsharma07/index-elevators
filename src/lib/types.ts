interface Product{
  name: String,
  description: String,
  liftingCapacity: String,
  specifications: String[],
  imageUrl:String 
}

export interface Category {
    id: number,
    name: string,
    description: String,
    imageUrl:String,
    products: Product[];
}