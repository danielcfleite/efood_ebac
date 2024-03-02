export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  serves: number[];
  image: string;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    serves: number[],
    image: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.serves = serves;
    this.image = image;
  }
}
