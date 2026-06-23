
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: 'PAPELARIA' | 'SCOOPS_BOX' | 'CADERNOS_ESTOJOS';
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Category {
  PAPELARIA = 'PAPELARIA',
  SCOOPS_BOX = 'SCOOPS_BOX',
  CADERNOS_ESTOJOS = 'CADERNOS_ESTOJOS'
}
