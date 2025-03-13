// 'use client';
// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import { fetchProductById } from '@/app/utils/fetchProductById';
// import { ShopifyProduct } from '@/app/types/shopify';
// import AddToCartButton from '@/app/componenets/AddToCartButton';
// import { Loader2 } from 'lucide-react';

// export default function ProductPage() {
//   const { id } = useParams(); // Get product ID from URL
//   const [product, setProduct] = useState<ShopifyProduct | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const loadProduct = async () => {
//       try {
//         setLoading(true);
//         if (!id) return;
//         const fetchedProduct = await fetchProductById(id as string);
//         setProduct(fetchedProduct); // ✅ Assigning a single product, not an array
//       } catch (error) {
//         console.error('Error fetching product:', error);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProduct();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Loader2 className="animate-spin text-blue-500 w-12 h-12" />
//       </div>
//     );
//   }

//   if (!product) {
//     return <p className="text-center text-red-500 text-lg mt-6">Product not found.</p>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <img
//           src={product.images?.edges?.[0]?.node.url || '/placeholder.jpg'}
//           alt={product.title}
//           className="w-full h-96 object-cover rounded-md"
//         />

//         {/* Product Details */}
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
//           <p className="text-gray-600 mt-4">{product.description}</p>
//           <p className="text-2xl font-bold text-blue-950 mt-4">
//             ${product.variants?.edges?.[0]?.node.price.amount ?? 'N/A'}
//           </p>

//           {/* Add to Cart Button */}
//           <div className="mt-6">
//             <AddToCartButton product={product} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
