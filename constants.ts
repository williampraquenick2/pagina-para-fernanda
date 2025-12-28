
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
  // Papelaria
  { id: '1', name: 'Caneta click borboleta em gel preta', price: 8.00, imageUrl: 'https://i.imgur.com/vfyGdbS.png', category: 'PAPELARIA' },
  { id: '2', name: 'Caneta brush com glitter', price: 5.00, imageUrl: 'https://i.imgur.com/NFTKT5j.png', category: 'PAPELARIA' },
  { id: '3', name: 'Caneta click cachorrinho', price: 8.00, imageUrl: 'https://i.imgur.com/JixTMfx.png', category: 'PAPELARIA' },
  { id: '4', name: 'Caneta luxo Stitch duas cores', price: 12.00, imageUrl: 'https://i.imgur.com/ONkUfLM.png', category: 'PAPELARIA' },
  { id: '5', name: 'Caneta 10 cores Hello Kitty', price: 19.90, imageUrl: 'https://i.imgur.com/yuo5KQK.png', category: 'PAPELARIA' },
  { id: '6', name: 'Caneta Candy cor preta', price: 8.00, imageUrl: 'https://i.imgur.com/rmYzhLE.png', category: 'PAPELARIA' },
  { id: '7', name: 'Caneta labubu escrita Azul', price: 16.00, imageUrl: 'https://i.imgur.com/EWC5Vk1.png', category: 'PAPELARIA' },
  { id: '8', name: 'Caneta apagavel 4 cores', price: 16.00, imageUrl: 'https://i.imgur.com/kOwewfb.png', category: 'PAPELARIA' },
  { id: '9', name: 'Caneta 10 cores Stitch com carimbo', price: 19.90, imageUrl: 'https://i.imgur.com/PyTYIC2.png', category: 'PAPELARIA' },
  { id: '10', name: 'Caneta coelhinho escrita azul', price: 8.00, imageUrl: 'https://i.imgur.com/qBTPWyl.png', category: 'PAPELARIA' },
  { id: '11', name: 'Caneta apagável Stitch', price: 10.00, imageUrl: 'https://i.imgur.com/CKxoA93.png', category: 'PAPELARIA' },
  { id: '12', name: 'Caneta apagável panda', price: 10.00, imageUrl: 'https://i.imgur.com/UCXKodQ.png', category: 'PAPELARIA' },
  { id: '13', name: 'Caneta apagável Stitch tampa decorada', price: 12.00, imageUrl: 'https://i.imgur.com/usCg2r0.png', category: 'PAPELARIA' },
  { id: '14', name: 'Caneta apagavel Stitch linguinha', price: 12.00, imageUrl: 'https://i.imgur.com/ouTywwQ.png', category: 'PAPELARIA' },
  { id: '15', name: 'Caneta apagável meninos', price: 10.00, imageUrl: 'https://i.imgur.com/Oa5fvD8.png', category: 'PAPELARIA' },
  { id: '16', name: 'Caneta luxo pedrinhas', price: 19.90, imageUrl: 'https://i.imgur.com/916vLRg.png', category: 'PAPELARIA' },
  { id: '17', name: 'Caneta luxo cristal', price: 16.00, imageUrl: 'https://i.imgur.com/zCC82gr.png', category: 'PAPELARIA' },
  { id: '18', name: 'Lapis infinito Princesas', price: 10.00, imageUrl: 'https://i.imgur.com/i4DoAzn.png', category: 'PAPELARIA' },
  { id: '19', name: 'Lapis infinito Sonic', price: 10.00, imageUrl: 'https://i.imgur.com/3bnjDp0.png', category: 'PAPELARIA' },
  { id: '20', name: 'Lapiseira Candy 0.7', price: 10.00, imageUrl: 'https://i.imgur.com/BmXqTV3.png', category: 'PAPELARIA' },
  { id: '21', name: 'Marca texto 2 pontas Glitter', price: 5.00, imageUrl: 'https://i.imgur.com/5bYGyrT.png', category: 'PAPELARIA' },
  { id: '22', name: 'Corretivo ursinho', price: 9.90, imageUrl: 'https://i.imgur.com/x1seBqm.png', category: 'PAPELARIA' },
  { id: '23', name: 'Caneta apagavel animais', price: 10.00, imageUrl: 'https://i.imgur.com/J5Ij43X.png', category: 'PAPELARIA' },
  { id: '24', name: 'Lapis infinito Harry Potter', price: 10.00, imageUrl: 'https://i.imgur.com/CkQ0xwn.png', category: 'PAPELARIA' },
  { id: '25', name: 'Lapis infinito Snoop', price: 10.00, imageUrl: 'https://i.imgur.com/ApY4Vup.png', category: 'PAPELARIA' },
  { id: '26', name: 'Corretivo liquido Hello Kitty', price: 12.00, imageUrl: 'https://i.imgur.com/ao4J4KP.png', category: 'PAPELARIA' },
  { id: '27', name: 'Marca texto 2 pontas', price: 4.00, imageUrl: 'https://i.imgur.com/NEpweDz.png', category: 'PAPELARIA' },
  { id: '28', name: 'Corretivo com refil', price: 19.90, imageUrl: 'https://i.imgur.com/6PV8w1V.png', category: 'PAPELARIA' },

  // Mochilas e Estojos
  { id: '101', name: 'Mochila de Costas Mario Luxo', price: 210.00, imageUrl: 'https://i.imgur.com/Nrx38ax.jpeg', category: 'MOCHILAS_ESTOJOS' },
  { id: '102', name: 'Lancheira Térmica Mario P Luxo', price: 135.00, imageUrl: 'https://i.imgur.com/spf791u.jpeg', category: 'MOCHILAS_ESTOJOS' },
  { id: '103', name: 'Lancheira Térmica Mario G Luxo', price: 135.00, imageUrl: 'https://i.imgur.com/HWC4C7u.jpeg', category: 'MOCHILAS_ESTOJOS' },
  { id: '104', name: 'Lancheira Patrulha Canina Sky e Everest Luxo', price: 135.00, imageUrl: 'https://i.imgur.com/AYv7JOE.jpeg', category: 'MOCHILAS_ESTOJOS' },
  { id: '105', name: 'Mochila Patrulha Canina Chase e Marshall Luxo', price: 269.00, imageUrl: 'https://i.imgur.com/Q4OpNNX.jpeg', category: 'MOCHILAS_ESTOJOS' },
  { id: '106', name: 'Estojo Duplo Patrulha Canina Chase e Marshall Luxo', price: 69.00, imageUrl: 'https://i.imgur.com/nRkUspv.jpeg', category: 'MOCHILAS_ESTOJOS' },
  { id: '107', name: 'Lancheira Térmica Sonic Luxo', price: 165.00, imageUrl: 'https://i.imgur.com/MjGIW58.jpeg', category: 'MOCHILAS_ESTOJOS' },
  { id: '108', name: 'Mochila + Lancheira + Estojo Labubu', price: 195.00, imageUrl: 'https://i.imgur.com/PUSlsLi.png', category: 'MOCHILAS_ESTOJOS' },
  { id: '109', name: 'Mochila + Estojo Barbie', price: 165.00, imageUrl: 'https://i.imgur.com/3BnP8cu.png', category: 'MOCHILAS_ESTOJOS' },
  { id: '110', name: 'Mochila + Estojo + Lancheira Batman', price: 165.00, imageUrl: 'https://i.imgur.com/7l74uPc.png', category: 'MOCHILAS_ESTOJOS' },
  { id: '111', name: 'Mochila + Estojo + Lancheira PJ Masks', price: 165.00, imageUrl: 'https://i.imgur.com/MyCGNXp.png', category: 'MOCHILAS_ESTOJOS' },
  { id: '112', name: 'Mochila + Estojo + Lancheira Stitch', price: 195.00, imageUrl: 'https://i.imgur.com/M8TJ8Jx.png', category: 'MOCHILAS_ESTOJOS' },
  { id: '113', name: 'Mochila Stitch e Angel', price: 165.00, imageUrl: 'https://i.imgur.com/l0cZ173.png', category: 'MOCHILAS_ESTOJOS' },
  { id: '114', name: 'Mochila + Estojo + Lancheira Mickey', price: 195.00, imageUrl: 'https://i.imgur.com/qa5i3uF.png', category: 'MOCHILAS_ESTOJOS' },
  { id: '115', name: 'Mochila + Estojo + Lancheira Divertidamente', price: 195.00, imageUrl: 'https://i.imgur.com/kzTE5To.png', category: 'MOCHILAS_ESTOJOS' },
  { id: '116', name: 'Mochila + Estojo + Lancheira Divertidamente', price: 195.00, imageUrl: 'https://i.imgur.com/pJZCPfu.png', category: 'MOCHILAS_ESTOJOS' },
  { id: '117', name: 'Mochila + Estojo Pincesa Sofia', price: 165.00, imageUrl: 'https://i.imgur.com/1HNopf8.png', category: 'MOCHILAS_ESTOJOS' },
  { id: '118', name: 'Mochila + Estojo + Lancheira Unicornio', price: 195.00, imageUrl: 'https://i.imgur.com/k9dkPqq.png', category: 'MOCHILAS_ESTOJOS' },

  // Agendas e Cadernos
  { id: '201', name: 'Agenda Snoopy 2026', price: 39.90, imageUrl: 'https://i.imgur.com/Xb9Pijr.png', category: 'AGENDAS_CADERNOS' },
  { id: '202', name: 'Agenda Harry Potter 2026', price: 39.90, imageUrl: 'https://i.imgur.com/RoEky02.png', category: 'AGENDAS_CADERNOS' },
  { id: '203', name: 'Agenda Stitch 2026', price: 39.90, imageUrl: 'https://i.imgur.com/kMwa8G5.png', category: 'AGENDAS_CADERNOS' },
  { id: '204', name: 'Agenda Minnie 2026', price: 39.90, imageUrl: 'https://i.imgur.com/iYqmTja.png', category: 'AGENDAS_CADERNOS' },
  { id: '205', name: 'Caderno Pixar 1 matéria', price: 39.90, imageUrl: 'https://i.imgur.com/Wxj3zuI.png', category: 'AGENDAS_CADERNOS' },
  { id: '206', name: 'Caderno PSG 1 matéria', price: 39.90, imageUrl: 'https://i.imgur.com/2hYUuZ4.png', category: 'AGENDAS_CADERNOS' },
  { id: '207', name: 'Caderno Corinthians 10 Matérias', price: 43.90, imageUrl: 'https://i.imgur.com/kS2GT5O.png', category: 'AGENDAS_CADERNOS' },
  { id: '208', name: 'Caderno Princesas 10 Matérias', price: 49.90, imageUrl: 'https://i.imgur.com/zBM0sZK.png', category: 'AGENDAS_CADERNOS' },
  { id: '209', name: 'Caderno Marie 1 Matéria', price: 39.90, imageUrl: 'https://i.imgur.com/2zdUnBj.png', category: 'AGENDAS_CADERNOS' },
];
