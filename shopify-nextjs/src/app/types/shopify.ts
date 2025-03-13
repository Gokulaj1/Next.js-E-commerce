
export interface ShopifyProduct {
    id: string;
    title: string;
    description: string;
    images: {
      edges: {
        node: {
          url: string;
        };
      }[];
    };
    variants: {
      edges: {
        node: {
          id: string;
          price: {
            amount: string;
          };
        };
      }[];
    };
  }
  
  export interface ShopifyResponse {
    products: any;
    data?: {
      products: {
        edges: {
          node: ShopifyProduct;
        }[];
      };
    };
    errors?: Array<{ message: string }>; // Explicitly define errors as an array
  }

  // types/shopify.ts
export interface CheckoutResponse {
  checkoutCreate: any;
  data?: {
    checkoutCreate: {
      checkout?: {
        id: string;
        webUrl: string;
      };
      userErrors?: Array<{
        message: string;
        field?: string[];
      }>;
    };
  };
  errors?: Array<{
    message: string;
  }>;
}
  