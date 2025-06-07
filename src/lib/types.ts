
export interface ScriptProps {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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
    form?: React.FunctionComponent<ScriptProps>,
    products: Product[];
}