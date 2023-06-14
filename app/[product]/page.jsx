import navData from "../lib/navData.json";

export const dynamicParams = false; // true | false,
export async function generateStaticParams() {
  return navData.map((product) => ({
    product: product.slug,
  }));
}

export default function Product({ params }) {
  const activeProduct = navData.find(
    (product) => product.slug === params.product
  );
  return (
    <div>
      Product: {activeProduct?.title} ({activeProduct?.slug})
    </div>
  );
}
