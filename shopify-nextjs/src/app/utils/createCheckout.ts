
import client from './shopifyClient';
import { CartItem } from '../types/cart';
import { CheckoutResponse } from '../types/shopify';

export async function createCheckout(cartItems: CartItem[]): Promise<string> {
  
  const lineItems = cartItems.map((item) => ({
    variantId: item.id, 
    quantity: item.quantity,
  }));

  
  const mutation = `
    mutation {
      checkoutCreate(input: {
        lineItems: ${JSON.stringify(lineItems)}
      }) {
        checkout {
          id
          webUrl
        }
        userErrors {
          message
          field
        }
      }
    }
  `;

  try {
    
    const response = await client.request<CheckoutResponse>(mutation);

    console.log('Checkout API Response:', response); 

    
    if (Array.isArray(response.errors) && response.errors.length > 0) {
      const errorMessages = response.errors.map((err: { message: string }) => err.message).join(', ');
      throw new Error(errorMessages);
    }
    

   
    if (response.data?.checkoutCreate?.userErrors?.length) {
      const userErrorMessages = response.data.checkoutCreate.userErrors
        .map((err: { message: any; }) => err.message)
        .join(', ');
      throw new Error(userErrorMessages);
    }

   
    if (!response.data?.checkoutCreate?.checkout?.webUrl) {
      throw new Error('Failed to create checkout');
    }

   
    return response.data.checkoutCreate.checkout.webUrl;
  } catch (error) {
    console.error('Error creating checkout:', error);
    throw error;
  }
}