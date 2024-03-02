import { Product } from "./products";

export class Restaurant {
  id: number;
  name: string;
  description: string;
  rating: number;
  cousine: string;
  isHighlight: boolean;
  image: string;
  products: Product[];

  constructor(
    id: number,
    name: string,
    description: string,
    rating: number,
    cousine: string,
    isHighlight: boolean,
    image: string,
    products: Product[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.cousine = cousine;
    this.isHighlight = isHighlight;
    this.image = image;
    this.products = products;
  }
}
