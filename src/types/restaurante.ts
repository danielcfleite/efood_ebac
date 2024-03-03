import { Prato } from "./cardapio";

export type Restaurante = {
  avaliacao: number;
  cardapio: Prato[];
  descricao: string;
  id: number;
  tipo: string;
  titulo: string;
  capa: string;
  destacado: boolean;
};
