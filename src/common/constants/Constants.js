import {Icons} from 'react-native-paper';

const Icon = ({icon}) => <Icon source={icon} size={24} />;

export const settingsOptions = [
  {
    id: 1,
    name: 'Your Account',
    icon: <Icon icon="account" />,
  },
  {
    id: 2,
    name: 'Address Book',
    icon: <Icon icon="book-open-page-variant-outline" />,
  },
  {
    id: 3,
    name: 'Manage Payment Methods',
    icon: <Icon icon="credit-card-outline" />,
  },
  {
    id: 4,
    name: 'Send Feedback',
  },
  {
    id: 5,
    name: 'Your Account',
  },
];

// export const featured = {
//   id: 1,
//   title: 'Hot and Spicy',
//   description: 'soft and tender fried chicken',
//   restaurants: [
//     {
//       id: 1,
//       name: 'Papa Johns',
//       image: require('../assets/images/pizza.png'),
//       description: 'Hot and spicy pizzas',
//       lng: -85.5324269,
//       lat: 38.2145602,
//       address: '434 second street',
//       stars: 4,
//       reviews: '4.4k',
//       category: 'Fast Food',
//       dishes: [
//         {
//           id: 1,
//           name: 'pizza',
//           description: 'cheezy garlic pizza',
//           price: 10,
//           image: require('../assets/images/pizzaDish.png'),
//         },
//         {
//           id: 2,
//           name: 'pizza',
//           description: 'cheezy garlic pizza',
//           price: 10,
//           image: require('../assets/images/pizzaDish.png'),
//         },
//         {
//           id: 3,
//           name: 'pizza',
//           description: 'cheezy garlic pizza',
//           price: 10,
//           image: require('../assets/images/pizzaDish.png'),
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: 'Papa Johns',
//       image: require('../assets/images/pizza.png'),
//       description: 'Hot and spicy pizzas',
//       lng: -85.5324269,
//       lat: 38.2145602,
//       address: '434 second street',
//       stars: 4,
//       reviews: '4.4k',
//       category: 'Fast Food',
//       dishes: [
//         {
//           id: 1,
//           name: 'pizza',
//           description: 'cheezy garlic pizza',
//           price: 10,
//           image: require('../assets/images/pizzaDish.png'),
//         },
//         {
//           id: 2,
//           name: 'pizza',
//           description: 'cheezy garlic pizza',
//           price: 10,
//           image: require('../assets/images/pizzaDish.png'),
//         },
//         {
//           id: 3,
//           name: 'pizza',
//           description: 'cheezy garlic pizza',
//           price: 10,
//           image: require('../assets/images/pizzaDish.png'),
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: 'Papa Johns',
//       image: require('../assets/images/pizza.png'),
//       description: 'Hot and spicy pizzas',
//       lng: -85.5324269,
//       lat: 38.2145602,
//       address: '434 second street',
//       stars: 4,
//       reviews: '4.4k',
//       category: 'Fast Food',
//       dishes: [
//         {
//           id: 1,
//           name: 'pizza',
//           description: 'cheezy garlic pizza',
//           price: 10,
//           image: require('../assets/images/pizzaDish.png'),
//         },
//         {
//           id: 2,
//           name: 'pizza',
//           description: 'cheezy garlic pizza',
//           price: 10,
//           image: require('../assets/images/pizzaDish.png'),
//         },
//         {
//           id: 3,
//           name: 'pizza',
//           description: 'cheezy garlic pizza',
//           price: 10,
//           image: require('../assets/images/pizzaDish.png'),
//         },
//       ],
//     },
//   ],
// };
