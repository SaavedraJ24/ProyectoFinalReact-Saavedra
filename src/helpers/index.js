import { db, getCategories } from "../services";

import { collection, addDoc } from "firebase/firestore";

/**
 *
 * @param {*} collectionName nombre de la colección
 */

export async function createProductsFirestore(collectionName) {
  try {

    const response = await getCategories();

    const fetchedProducts = response.data;

    if (!Array.isArray(fetchedProducts)) {
      throw new Error("La respuesta de la API no es un array.");
    }

    
    const productsCollection = collection(db, collectionName);

    
    const addPromises = fetchedProducts.map((product) => {
      delete product.id;
      addDoc(productsCollection, {
        ...product,
        createdAt: new Date(),
      });
    });

    await Promise.all(addPromises);

    console.log(`${fetchedProducts.length} productos añadidos a Firestore.`);
  } catch (err) {
    console.error("Error al obtener o almacenar productos:", err);
  }
}