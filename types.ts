
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: 'PAPELARIA' | 'MOCHILAS_ESTOJOS';
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Category {
  PAPELARIA = 'PAPELARIA',
  MOCHILAS_ESTOJOS = 'MOCHILAS_ESTOJOS'
}
