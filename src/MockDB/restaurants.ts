import { Restaurant } from "../Models/restaurant";
import hiokiSushiImage from "../assets/hioki_sushi.png";
import LaDolceVitaImage from "../assets/la_dolce_vita_trattoria.png";
import marguerita from "../assets/pizza_marguerita.png";
import sushi from "../assets/sushi.jfif";

export const RestaurantsDB: Restaurant[] = [
  {
    id: 1,
    name: "Hioki Sushi",
    rating: 4.9,
    cousine: "Japonesa",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    isHighlight: true,
    image: `${hiokiSushiImage}`,
    products: [
      {
        description:
          "Desfrute de uma experiência gastronômica única com nosso combo de sushi de 20 peças, uma celebração da culinária japonesa em sua forma mais requintada. Cada peça é cuidadosamente preparada pelos nossos talentosos chefs, combinando frescura, sabor e arte em cada mordida.",
        id: 1,
        price: 20,
        serves: [2, 4],
        title: "Sushi",
        image: `${sushi}`,
      },
    ],
  },
  {
    id: 2,
    name: "La Dolce Vita Trattoria",
    rating: 4.6,
    cousine: "Italiana",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    isHighlight: false,
    image: `${LaDolceVitaImage}`,
    products: [
      {
        description:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        id: 1,
        price: 20,
        serves: [2, 4],
        title: "Pizza Marguerita",
        image: `${marguerita}`,
      },
    ],
  },
];
