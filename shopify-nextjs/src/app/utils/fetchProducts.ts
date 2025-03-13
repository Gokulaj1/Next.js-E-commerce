import client from './shopifyClient';
import { ShopifyResponse, ShopifyProduct } from '../types/shopify';

export async function fetchProducts(searchTerm: string = ''): Promise<ShopifyProduct[]> {
  const query = `
    query GetProducts($query: String) {
      products(first: 10, query: $query) {
        edges {
          node {
            id
            title
            description
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await client.request<ShopifyResponse>(query, {
      variables: { query: searchTerm ? `title:*${searchTerm}*` : null },
    });

    return response.data?.products?.edges.map((edge: { node: any; }) => edge.node) || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
