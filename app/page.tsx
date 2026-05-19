import React from 'react'
import { useAppContext } from "@/context/AppContext";
import { Navbar } from '@/components/Navbar'
import HeaderSlider from '@/components/HeaderSlider'
import { fetchProducts } from '@/lib/actions/product.action'
import HomeProducts from '@/components/HomeProducts';
const allProducts = await fetchProducts();

console.log(allProducts);
export default function page() {
  return (
    <div>
      <Navbar />
      <HeaderSlider />

      <HomeProducts products = {allProducts}/>
    </div>
  )
}

