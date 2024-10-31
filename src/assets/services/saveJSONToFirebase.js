import { db } from '../firebase/config.js';
import { collection, setDoc, doc } from 'firebase/firestore';
import products from '../products.json' assert { type: 'json' };

async function saveJSONToFirebase(products) {
  const itemsCollection = collection(db, 'items');
  for (const product of products) {
    try {
      const productItems = doc(itemsCollection, product.id.toString());
      await setDoc(productItems, {
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        stock: product.stock,
        category: product.category.toLowerCase()
      });
    } catch (error) {       
    }
  }
}

saveJSONToFirebase(products);
