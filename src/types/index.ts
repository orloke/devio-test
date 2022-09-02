export interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  qtd: number;
  total: number;
  observation: string;
  category: string;
}

export interface Additional {
  price: number;
  title: string;
}

export interface Market {
  additional: Additional[];
  product: Produto;
  id: number;
}
export interface Finished {
  name: string;
  market: Market[];
  id: number;
}
