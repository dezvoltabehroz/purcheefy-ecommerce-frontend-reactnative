import images from 'assets/images';
import {Notification, Product} from 'utils/types';

export const notificationsData: Notification[] = [
  {
    id: '1',
    title: 'John Doe cart has been recovered',
    description: 'check your history for full details',
    time: 'Today at 9:42 AM',
    type: 'In-App',
    read: false,
  },
  {
    id: '2',
    title: 'John Doe cart payment failed to checkout',
    description: 'check your history for full details',
    time: 'Today at 9:42 AM',
    type: 'Cart',
    read: false,
  },
  {
    id: '3',
    title: 'John Doe cart payment failed to checkout',
    description: 'check your history for full details',
    time: 'Today at 9:42 AM',
    type: 'In-App',
    read: true,
  },
  {
    id: '4',
    title: 'John Doe cart payment failed to checkout',
    description: 'check your history for full details',
    time: 'Today at 9:42 AM',
    type: 'In-App',
    read: true,
  },
  {
    id: '5',
    title: 'John Doe cart payment failed to checkout',
    description: 'check your history for full details',
    time: 'Today at 9:42 AM',
    type: 'In-App',
    read: true,
  },
  {
    id: '6',
    title: 'John Doe cart payment failed to checkout',
    description: 'check your history for full details',
    time: 'Today at 9:42 AM',
    type: 'Cart',
    read: true,
  },
];

export const productsList: Product[] = [
  {
    id: '1',
    title: "Men's Fleece Pullover Hoodie",
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '$100.00',
    images: [
      images.product2,
      images.product3,
      images.product4,
      images.product5,
      images.product6,
      images.noteImage,
    ],
  },
  {
    id: '2',
    title: "Men's Fleece Pullover Hoodie",
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '$100.00',
    images: [images.product2, images.product2],
  },
  {
    id: '3',
    title: "Men's Fleece Pullover Hoodie",
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '$100.00',
    images: [images.product2, images.product2],
  },
  {
    id: '4',
    title: "Men's Fleece Pullover Hoodie",
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '$100.00',
    images: [images.product2, images.product2],
  },
  {
    id: '5',
    title: "Men's Fleece Pullover Hoodie",
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '$100.00',
    images: [images.product2, images.product2],
  },
  {
    id: '6',
    title: "Men's Fleece Pullover Hoodie",
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '$100.00',
    images: [images.product2, images.product2],
  },
];
