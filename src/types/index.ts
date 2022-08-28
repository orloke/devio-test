export interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  qtd: number;
  total: number;
}

export interface Additional {
  price: number;
  title: string;
}

export interface Market {
  additional: Additional[];
  product: Produto;
}
