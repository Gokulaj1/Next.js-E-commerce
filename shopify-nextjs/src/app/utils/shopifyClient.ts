
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  apiVersion: '2024-04', 
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN!,
});

export default client;