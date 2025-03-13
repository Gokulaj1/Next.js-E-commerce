// export async function fetchProductById(productId: string) {
//     try {
//       const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
//       const SHOPIFY_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN;
  
//       if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_ACCESS_TOKEN) {
//         throw new Error('Shopify API credentials are missing.');
//       }
  
//       const query = `
//         query ($id: ID!) {
//           product(id: $id) {
//             id
//             title
//             description
//             images(first: 1) {
//               edges {
//                 node {
//                   url
//                 }
//               }
//             }
//             variants(first: 1) {
//               edges {
//                 node {
//                   price {
//                     amount
//                     currencyCode
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `;
  
//       const variables = { id: `gid://shopify/Product/${productId}` };
  
//       const response = await fetch(`https://${SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCESS_TOKEN,
//         },
//         body: JSON.stringify({ query, variables }),
//       });
  
//       const jsonResponse = await response.json();
  
//       if (!jsonResponse.data || !jsonResponse.data.product) {
//         throw new Error('Product not found');
//       }
  
//       return jsonResponse.data.product;
//     } catch (error) {
//       console.error('Error fetching product:', error);
//       return null;
//     }
//   }
  