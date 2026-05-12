import { Product } from "./model";

export const  products:Product[] = [
    {
      _id: 'americano',
      name: 'Americano',
      image: {
        thumbnail: '/images/americano.avif',
        main: '/images/americano.avif',
        gallery: ['/images/americano.avif']
      },
      category: 'Coffee',
      variants: [
        {
          _id: 'americano-regular',
          quantityLabel: '250 ml',
          price: 149
        }
      ],
      isAvailable: true,
      isVeg: true,
      shortDescription: 'Smooth and bold black coffee made with espresso and hot water.',
      attributes: [
        { name: 'Strength', value: 'Medium' },
        { name: 'Temperature', value: 'Hot' }
      ]
    },
    {
      _id: 'latte',
      name: 'Caffè Latte',
      image: {
        thumbnail: '/images/latte.avif',
        main: '/images/latte.avif',
        gallery: ['/images/latte.avif']
      },
      category: 'Coffee',
      variants: [
        {
          _id: 'latte-small',
          label: 'Small',
          quantityLabel: '200 ml',
          price: 159,
          originalPrice: 179
        },
        {
          _id: 'latte-medium',
          label: 'Medium',
          quantityLabel: '300 ml',
          price: 199
        },
        {
          _id: 'latte-large',
          label: 'Large',
          quantityLabel: '450 ml',
          price: 239,
          originalPrice: 269
        }
      ],
      isAvailable: true,
      isVeg: true,
      shortDescription: 'Creamy espresso-based coffee with steamed milk and soft foam.',
      attributes: [
        { name: 'Milk', value: 'Yes' },
        { name: 'Taste', value: 'Creamy' }
      ]
    },
    {
      _id: 'espresso',
      name: 'Espresso',
      image: {
        thumbnail: '/images/espresso.avif',
        main: '/images/espresso.avif',
        gallery: ['/images/espresso.avif']
      },
      category: 'Coffee',
      variants: [
        {
          _id: 'espresso-single',
          label: 'Single Shot',
          quantityLabel: '30 ml',
          price: 119
        },
        {
          _id: 'espresso-double',
          label: 'Double Shot',
          quantityLabel: '60 ml',
          price: 169
        }
      ],
      isAvailable: true,
      isVeg: true,
      shortDescription: 'A concentrated coffee shot with bold aroma and strong flavor.',
      attributes: [
        { name: 'Strength', value: 'Strong' },
        { name: 'Caffeine', value: 'High' }
      ]
    },
    {
      _id: 'tea',
      name: 'Classic Tea',
      image: {
        thumbnail: '/images/tea.avif',
        main: '/images/tea.avif',
        gallery: ['/images/tea.avif']
      },
      category: 'Tea',
      variants: [
        {
          _id: 'tea-regular',
          quantityLabel: '180 ml',
          price: 79
        }
      ],
      isAvailable: true,
      isVeg: true,
      shortDescription: 'A refreshing classic tea, simple and perfect for daily sipping.',
      attributes: [
        { name: 'Type', value: 'Hot' },
        { name: 'Flavor', value: 'Classic' }
      ]
    },
    {
      _id: 'egg-puff',
      name: 'Egg Puff',
      image: {
        thumbnail: '/images/egg-puff.avif',
        main: '/images/egg puff.avif',
        gallery: ['/images/egg puff.avif']
      },
      category: 'Snacks',
      variants: [
        {
          _id: 'egg-puff-standard',
          quantityLabel: '1 piece',
          price: 69
        }
      ],
      isAvailable: true,
      isVeg: false,
      shortDescription: 'Flaky puff pastry with savory masala and egg filling.',
      attributes: [
        { name: 'Type', value: 'Savory' },
        { name: 'Serving', value: 'Single' }
      ]
    },
    {
      _id: 'cappuccino',
      name: 'Cappuccino',
      image: {
        thumbnail: '/images/cappucino.avif',
        main: '/images/cappucino.avif',
        gallery: ['/images/cappucino.avif']
      },
      category: 'Coffee',
      variants: [
        {
          _id: 'cappuccino-regular',
          quantityLabel: '220 ml',
          price: 169,
          originalPrice: 189
        }
      ],
      isAvailable: true,
      isVeg: true,
      shortDescription: 'Rich espresso drink with steamed milk and velvety foam.',
      attributes: [
        { name: 'Foam', value: 'High' },
        { name: 'Taste', value: 'Balanced' }
      ]
    }
  ];