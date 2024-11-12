import React from "react";

const Category = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const slug = (await params).slug;
	return <div>My Category: {slug}</div>;
};

export default Category;
