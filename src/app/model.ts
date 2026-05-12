export interface ProductImages {
  thumbnail: string;
  main: string;
  gallery?: string[];
}
export interface ProductVariant {
  _id: string;
  label?: string;        // Small / Medium / Large
  quantityLabel: string; // 200ml / 300ml / 500ml
  price: number;
  originalPrice?: number; // if discount exists
}
export interface ProductAttributes{
    name:string;
    value:string;
}
export interface Product {
  _id: string;
  name: string;
  image: ProductImages;
  category: string;
  variants: ProductVariant[];
  isAvailable: boolean;
  isVeg: boolean;
  shortDescription:string;
  attributes:ProductAttributes[];

}

export interface CartItem{
    productId: string;
      productName: string;
      variantId: string;
      variantLabel?: string;
      quantityLabel: string;
      price:number;
      quantity:number;
      originalPrice?:number;
      url:ProductImages;
}