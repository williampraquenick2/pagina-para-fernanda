
import { Product } from './types';

export const WHATSAPP_NUMBER = '5511976032000';
export const WHATSAPP_BASE_URL = 'https://api.whatsapp.com/send?phone=5511976032000';
export const INSTAGRAM_URL = 'https://www.instagram.com/fefah.papelaria/';
export const HERO_IMAGE = 'https://i.imgur.com/cQzaQ7Q.png';

// Produto de Oferta Especial
export const SPECIAL_OFFER_PRODUCT: Product = {
  id: 'offer-999',
  name: 'Lápis de Cor Redondo 24 Cores (12 Lápis Bicolor), Faber-Castell',
  price: 27.90, // Novo preço promocional
  imageUrl: 'https://i.imgur.com/Go960vL.png', // Nova imagem
  category: 'PAPELARIA'
};

export const PRODUCTS: Product[] = [
  { id: '2', name: 'Caneta brush com glitter', price: 5.00, imageUrl: 'https://i.imgur.com/NFTKT5j.png', category: 'PAPELARIA' },
  { id: '8', name: 'Caneta apagavel 4 cores', price: 16.00, imageUrl: 'https://i.imgur.com/kOwewfb.png', category: 'PAPELARIA' },
  { id: '27', name: 'Marca texto 2 pontas', price: 4.00, imageUrl: 'https://i.imgur.com/NEpweDz.png', category: 'PAPELARIA' },
  { id: '38', name: 'Apontador com borracha', price: 9.00, imageUrl: 'https://i.imgur.com/Ob9DFLW.jpeg', category: 'PAPELARIA' },
  { id: '46', name: 'Caneta patinha', price: 8.00, imageUrl: 'https://i.imgur.com/HQ2HGru.jpeg', category: 'PAPELARIA' },
  { id: '301', name: 'Caneta Click Hello Kitty', price: 8.00, imageUrl: 'https://i.imgur.com/iU0zS3T.jpeg', category: 'PAPELARIA' },
  { id: '302', name: 'Apontador de Patinha', price: 10.00, imageUrl: 'https://i.imgur.com/2MNh5Zs.jpeg', category: 'PAPELARIA' },
  { id: '303', name: 'Corretivo em fita de patinha', price: 10.00, imageUrl: 'https://i.imgur.com/85fE8SJ.jpeg', category: 'PAPELARIA' },
  { id: '304', name: 'Caneta Apagável Hello Kitty', price: 10.00, imageUrl: 'https://i.imgur.com/QPsGjqs.jpeg', category: 'PAPELARIA' },
  { id: '305', name: 'Caixa Cenário 3D', price: 10.00, imageUrl: 'https://i.imgur.com/4hV2O6X.jpeg', category: 'PAPELARIA' },
  { id: '306', name: 'Mini Borracha Docinhos', price: 4.00, imageUrl: 'https://i.imgur.com/5c0viKl.jpeg', category: 'PAPELARIA' },
  { id: '307', name: 'Régua Dobravel 30CM', price: 8.00, imageUrl: 'https://i.imgur.com/z9Efw3J.jpeg', category: 'PAPELARIA' },
  { id: '308', name: 'Caneta Fine Line', price: 5.00, imageUrl: 'https://i.imgur.com/N0h4xZy.jpeg', category: 'PAPELARIA' },
  { id: '309', name: 'Lapiseira Turma da Kurome', price: 8.00, imageUrl: 'https://i.imgur.com/5nE5Xqr.jpeg', category: 'PAPELARIA' },
  { id: '310', name: 'KIT Capivara (Caderno Disco, Estojo e Caneta Clique)', price: 60.00, imageUrl: 'https://i.imgur.com/u0x22Nj.jpeg', category: 'PAPELARIA' },
  { id: '311', name: 'Lapiseira Fofa', price: 8.00, imageUrl: 'https://i.imgur.com/c2ASRSv.jpeg', category: 'PAPELARIA' },
  { id: '312', name: 'Caneta Apagável Capivara', price: 8.00, imageUrl: 'https://i.imgur.com/QwZjNuA.jpeg', category: 'PAPELARIA' },
  { id: '313', name: 'Caneta Neon', price: 5.00, imageUrl: 'https://i.imgur.com/PHY2LmA.jpeg', category: 'PAPELARIA' },
  { id: '314', name: 'Caneta Em Gel Fofa Barbie', price: 6.00, imageUrl: 'https://i.imgur.com/n8o1sac.jpeg', category: 'PAPELARIA' },
  { id: '315', name: 'POST IT com Regua', price: 12.00, imageUrl: 'https://i.imgur.com/rfJMAs4.jpeg', category: 'PAPELARIA' },
  { id: '316', name: 'Lapiseira Troca Ponta Corujinha', price: 8.00, imageUrl: 'https://i.imgur.com/PULgwCL.jpeg', category: 'PAPELARIA' },
  { id: '317', name: 'Mini Marca Texto Diversos Modelos', price: 5.00, imageUrl: 'https://i.imgur.com/gnC4TFw.jpeg', category: 'PAPELARIA' },
  { id: '318', name: 'Borrachas Picolé e Abacaxi', price: 8.00, imageUrl: 'https://i.imgur.com/KRcYFbo.jpeg', category: 'PAPELARIA' },
  { id: '319', name: 'Bloco de notas adesivo gatinho', price: 15.00, imageUrl: 'https://i.imgur.com/WcF63Qc.jpeg', category: 'PAPELARIA' },
  { id: '320', name: 'Borracha + Apagador Tigrinho', price: 10.00, imageUrl: 'https://i.imgur.com/pEisaY8.jpeg', category: 'PAPELARIA' },
  { id: '321', name: 'Marca texto G pastel', price: 7.00, imageUrl: 'https://i.imgur.com/DvjMIPt.jpeg', category: 'PAPELARIA' },
  { id: '322', name: 'Caneta Luxo strass coração', price: 10.00, imageUrl: 'https://i.imgur.com/u5cknGW.jpeg', category: 'PAPELARIA' },
  { id: '323', name: 'Caneta Luxo Patinha', price: 10.00, imageUrl: 'https://i.imgur.com/J9YA2ki.jpeg', category: 'PAPELARIA' },
  
  // Cadernos e Estojos
  { id: '401', name: 'Caderno de Disco A5 Coração', price: 40.00, imageUrl: 'https://i.imgur.com/xYDxRNz.jpeg', category: 'CADERNOS_ESTOJOS' },
  { id: '402', name: 'Caderneta Fofa folhas coloridas PET', price: 15.00, imageUrl: 'https://i.imgur.com/vlJYUZW.jpeg', category: 'CADERNOS_ESTOJOS' },
  { id: '403', name: 'Caderno de Disco Grande CAP', price: 60.00, imageUrl: 'https://i.imgur.com/AHAUlBS.jpeg', category: 'CADERNOS_ESTOJOS' },
  { id: '404', name: 'Caderno Inteligente A5 moda', price: 40.00, imageUrl: 'https://i.imgur.com/4VQeBu3.jpeg', category: 'CADERNOS_ESTOJOS' },
  { id: '405', name: 'Caderno de Disco Grande Coração', price: 60.00, imageUrl: 'https://i.imgur.com/0Z1KvJ3.jpeg', category: 'CADERNOS_ESTOJOS' },
  { id: '406', name: 'Caderninhos A5 Espiral', price: 15.00, imageUrl: 'https://i.imgur.com/LBtoCZQ.jpeg', category: 'CADERNOS_ESTOJOS' },
  { id: '407', name: 'Caderninho Anotações Meninas', price: 8.00, imageUrl: 'https://i.imgur.com/oKUOPYY.jpeg', category: 'CADERNOS_ESTOJOS' },
  { id: '408', name: 'Estojo Lona Diversos Temas', price: 18.00, imageUrl: 'https://i.imgur.com/RB3MBbk.jpeg', category: 'CADERNOS_ESTOJOS' },
  { id: '409', name: 'Estojo Luxo de Pelinhos', price: 30.00, imageUrl: 'https://i.imgur.com/RB3MBbk.jpeg', category: 'CADERNOS_ESTOJOS' },

  // Scoops e Box
  { id: '501', name: 'SCOOP P (10 a 12 Itens)', price: 69.90, imageUrl: 'https://i.imgur.com/eX3SJIL.jpeg', category: 'SCOOPS_BOX' },
  { id: '502', name: 'SCOOP M (20 a 22 Itens)', price: 119.90, imageUrl: 'https://i.imgur.com/eX3SJIL.jpeg', category: 'SCOOPS_BOX' },
  { id: '503', name: 'SCOOP G (30 a 31 Itens)', price: 179.90, imageUrl: 'https://i.imgur.com/eX3SJIL.jpeg', category: 'SCOOPS_BOX' },
  { id: '504', name: 'BOX ESSENCIAL PERSONALIZADO', price: 89.90, imageUrl: 'https://i.imgur.com/eX3SJIL.jpeg', category: 'SCOOPS_BOX' }
];
