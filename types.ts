
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: 'PAPELARIA' | 'MOCHILAS_ESTOJOS' | 'AGENDAS_CADERNOS';
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Category {
  PAPELARIA = 'PAPELARIA',
  MOCHILAS_ESTOJOS = 'MOCHILAS_ESTOJOS',
  AGENDAS_CADERNOS = 'AGENDAS_CADERNOS'
}
