'use strict';
const { Item } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; 
}

options.tableName = 'Items';
options.validate = true;

const demoItems = [
  {
    name: 'Pelmeni',
    description: 'Russian style ravioli filled with beef, pork and lamb',
    onMenu: true,
    price: 4,
    units: 100,
    measure: 'grams',
    quantityOnHand: 20,
    costPerUnit: 2.50,
    imageFilename: 'pelmeni.jpg',
  },
  {
    name: 'Golubtsi',
    description: 'Cabbage stuffed with meat filling and with tomato sauce',
    onMenu: true,
    price: 2,
    units: 1,
    measure: 'each',
    quantityOnHand: 50,
    costPerUnit: 1.25,
    imageFilename: 'golubtsi.jpg',
  },
  {
    name: 'Beef Tongue',
    description: 'Stewed beef tongue about 1.5 kilograms each',
    onMenu: true,
    price: 20,
    units: 1,
    measure: 'whole',
    quantityOnHand: 8,
    costPerUnit: 2.50,
    imageFilename: 'beef-tongue.jpg',
  },
  {
    name: 'Black Bread',
    description: 'Very dense and dark with caraway seeds',
    onMenu: true,
    price: 8,
    units: 1,
    measure: 'loaf',
    quantityOnHand: 20,
    costPerUnit: 3.75,
    imageFilename: 'Russian-black-bread.jpg',
  },
  {
    name: 'Fresh Patagonian Berries',
    description: 'Patagonian grown mixed berries - seasonal',
    onMenu: true,
    price: 8,
    units: 500,
    measure: 'grams',
    quantityOnHand: 20,
    costPerUnit: 4.5,
    imageFilename: 'mixed-berries.jpeg',
  },
  {
    name: 'Smoked Mackerel',
    description: 'Hardwood cold-smoked Mackerel caught fresh - about 1 kilogram each',
    onMenu: true,
    price: 14,
    units: 1,
    measure: 'whole fish',
    quantityOnHand: 20,
    costPerUnit: 8,
    imageFilename: 'smoked-mackerel.webp',
  },
  {
    name: 'Lavash Flatbread',
    description: 'Handmade and fresh',
    onMenu: true,
    price: 3,
    units: 4,
    measure: 'each',
    quantityOnHand: 20,
    costPerUnit: 1.25,
    imageFilename: 'lavash.jpg',
  },
  {
    name: 'Kefir',
    description: 'Homemade kefir - plain',
    onMenu: true,
    price: 4,
    units: 500,
    measure: 'milliliters',
    quantityOnHand: 12,
    costPerUnit: 2,
    imageFilename: 'kefir.jpg',
  },
  {
    name: 'Tvorog',
    description: 'Homemade soft farm cheese - great for filling crepes',
    onMenu: true,
    price: 4,
    units: 200,
    measure: 'grams',
    quantityOnHand: 50,
    costPerUnit: 2,
    imageFilename: 'farmer-cheese.jpg',
  },
  {
    name: 'Crepes - Plain',
    description: 'Homemade crepes without filling',
    onMenu: true,
    price: 5,
    units: 6,
    measure: 'each',
    quantityOnHand: 25,
    costPerUnit: 2.25,
    imageFilename: 'crepes.jpg',
  },
  {
    name: 'Crepes with Meat Filling',
    description: 'Homemade crepes with seasoned ground beef filling',
    onMenu: true,
    price: 9,
    units: 6,
    measure: 'each',
    quantityOnHand: 15,
    costPerUnit: 4.75,
    imageFilename: 'meat-crepes.jpg',
  },
  {
    name: 'Beef Milanesa',
    description: 'Argentine traditional thin tenderized beef cutlets breaded and fried - about 400 grams each',
    onMenu: true,
    price: 2,
    units: 1,
    measure: 'each',
    quantityOnHand: 40,
    costPerUnit: 1,
    imageFilename: 'milanesa.jpg',
  },
  {
    name: 'Fresh Patagonia Honey',
    description: 'Direct from Patagonian beekeeper',
    onMenu: true,
    price: 4,
    units: 100,
    measure: 'milliliters',
    quantityOnHand: 40,
    costPerUnit: 3,
    imageFilename: 'patagonia-honey.jpg',
  },
  {
    name: 'Fermented Cabbage',
    description: 'Similar to Saurkraut',
    onMenu: true,
    price: 2,
    units: 200,
    measure: 'grams',
    quantityOnHand: 40,
    costPerUnit: 1.25,
    imageFilename: 'fermented-cabbage.jpg',
  },
  {
    name: 'Smoked Ham',
    description: 'Applewood smoked ham - about 1 kilogram each',
    onMenu: true,
    price: 20,
    units: 1,
    measure: 'kilogram',
    quantityOnHand: 10,
    costPerUnit: 8,
    imageFilename: 'smoked-porkloin.jpg',
  },
  {
    name: 'Peroshki - baked',
    description: 'Baked yeast roll with seasoned ground beef filling',
    onMenu: true,
    price: 2,
    units: 1,
    measure: 'each',
    quantityOnHand: 40,
    costPerUnit: 1.25,
    imageFilename: 'baked-peroshki.jpeg',
  },
  {
    name: 'Hardwood Smoked Farm Bacon',
    description: 'Sourced from local farm and smoked with hardwood',
    onMenu: true,
    price: 9,
    units: 500,
    measure: 'grams',
    quantityOnHand: 40,
    costPerUnit: 5.5,
    imageFilename: 'bacon.jpg',
  },
  {
    name: 'Beef Borscht (beet soup)',
    description: 'Traditional beetrood soup with beef and vegetables',
    onMenu: true,
    price: 6,
    units: 500,
    measure: 'milliliters',
    quantityOnHand: 20,
    costPerUnit: 2.50,
    imageFilename: 'beef-borscht.jpg',
  },
  {
    name: 'Peroshki - fried',
    description: 'Fried yeast-risen dough with seasoned ground beef filling',
    onMenu: true,
    price: 2,
    units: 1,
    measure: 'each',
    quantityOnHand: 20,
    costPerUnit: 1,
    imageFilename: 'fried-meat-peroshki.jpeg',
  },
  {
    name: 'Moskovskaya Smoked Salami',
    description: 'Dry cured and smoked salami - whole',
    onMenu: true,
    price: 20,
    units: 1,
    measure: 'each',
    quantityOnHand: 20,
    costPerUnit: 1,
    imageFilename: 'moskovskaya-salami.webp',
  },
  {
    name: 'Salad Olivier',
    description: 'Traditional potato salad with peas, carrots, pickles, and mayonnaise',
    onMenu: true,
    price: 5,
    units: 500,
    measure: 'grams',
    quantityOnHand: 20,
    costPerUnit: 3,
    imageFilename: 'salad-olivier.jpg',
  },
];


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Item.bulkCreate(demoItems, options);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
    }, {});
  },
};
