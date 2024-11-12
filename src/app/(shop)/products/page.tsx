"use client";
import Breadcrumb from "@/ui/products/breadcrumb";
import DrawerToggler from "@/ui/products/drawer-toggler";
import ProductFilter from "@/ui/products/filter";
import ProductCard from "@/ui/products/product-card";
import Sidebar from "@/ui/products/sidebar";
import React from "react";

const Products = () => {
	return (
		<>
			<Breadcrumb />
			<div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
				<DrawerToggler />
				<Sidebar />
				<div className="col-span-3">
					<ProductFilter />
					<div className="grid md:grid-cols-3 grid-cols-2 gap-6">
						<ProductCard title="Guyer Chair" price={45.0} id={"1"} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Products;
