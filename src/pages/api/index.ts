import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    products: [
      {
        id: 1,
        category: 'hamburger',
        title: 'Smash da casa',
        price: 30.5,
        description: 'Esse é muito bom',
        image: '/images/hamburguer.png',
      },
      {
        id: 2,
        category: 'hamburger',
        title: 'Pão alemão',
        price: 31.5,
        description: 'Esse é 7 a 1 de sabor',
        image: '/images/hamburguer.png',
      },
      {
        id: 3,
        category: 'refrigerante',
        title: 'Guarana',
        price: 5.5,
        description: '2 litros',
        image: '/images/coca.png',
      },
      {
        id: 4,
        category: 'refrigerante',
        title: 'Coca-Cola',
        price: 6.5,
        description: '2 litros',
        image: '/images/coca.png',
      },
      {
        id: 5,
        category: 'sobremessa',
        title: 'açai',
        price: 16.5,
        description: '500 ml',
        image: '/images/sobremesa.png',
      },
      {
        id: 10,
        category: 'sobremessa',
        title: 'Sorvete',
        price: 26.5,
        description: '2 litros',
        image: '/images/sobremesa.png',
      },
      {
        id: 6,
        category: 'hamburger',
        title: 'Espetinho',
        price: 23,
        description: 'Com muita carne',
        image: '/images/hamburguer.png',
      },
      {
        id: 7,
        category: 'hamburger',
        title: 'Farofa',
        price: 10,
        description: 'Muita Farinha',
        image: '/images/hamburguer.png',
      },
      {
        id: 8,
        category: 'Cerveja',
        title: 'Skol',
        price: 23,
        description: '350 ml',
        image: '/images/cerveja.png',
      },
      {
        id: 9,
        category: 'Cerveja',
        title: 'Heineken',
        price: 23,
        description: '350 ml',
        image: '/images/cerveja.png',
      },
    ],
  });
}
