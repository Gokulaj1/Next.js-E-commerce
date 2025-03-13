# Next.js E-commerce with Shopify API Integration
#nextjs-shopify-ecommerce/
#├── app/
#│   ├── products/
#│   │   ├── page.tsx          # Product listing page
#│   │   ├── [id]/             # Dynamic route for product detail pages[not used. approached different method. code commented]
#│   │   │   └── page.tsx      # Individual product detail page[not used. approached different method. code commented]
#│   ├── layout.tsx            # Global layout
#│   └── page.tsx              # Home page
#├── components/
#│   ├── Cart.tsx              # Shopping cart component
#│   ├── SearchBar.tsx         # Search bar component
#│   └── AddToCartButton.tsx   # Add to cart button component
#│   └── productModal.tsx      # individual product details
#├── store/
#│   └── cartStore.ts          # Zustand store for cart state
#├── types/
#│   └── shopify.ts            # TypeScript types for Shopify API responses
#│   └── cart.ts               # TypeScript types for cart API responses
#│   └── product.ts            # TypeScript types for product API responses
#├── utils/
#│   ├── shopifyClient.ts      # Shopify Storefront API client
#│   ├── fetchProducts.ts      # Fetch products from Shopify
#│   ├── fetchProductById.ts   # Fetch a single product by ID[not used. approached different method. code commented]
#│   └── createCheckout.ts     # Create a checkout using Shopify API
#├── public/                   # Static assets
#├── tsconfig.json             # TypeScript configuration
#└── README.md                 # This file

#for  running project  "cd shopify-nextjs"
# "npm install"
# "npm run dev"

#dependencies used

#"dependencies": {
 #   "@shopify/shopify-api": "^11.10.0",
 #   "@shopify/storefront-api-client": "^1.0.5",
 #   "@tailwindcss/vite": "^4.0.13",
 #   "graphql-request": "^7.1.2",
 #   "lucide-react": "^0.479.0",
  #  "next": "15.2.2",
 #   "postcss": "^8.5.3",
 #   "react": "^19.0.0",
 #   "react-dom": "^19.0.0",
 #   "zustand": "^5.0.3"
 # },

 


