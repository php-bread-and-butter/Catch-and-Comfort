

export default async function ProductDetails({ params }: { params: { id: string } }) {
  // const product: Product = await getProductById(params.id);

  return (
    <div>
      <h1>product.name</h1>
      <p>product.description</p>
      <p>$product.price</p>
    </div>
  );
}