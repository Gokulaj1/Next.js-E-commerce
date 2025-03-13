// types/product.ts
export interface Product {
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
          price: {
            amount: string;
          };
        };
      }[];
    };
  }