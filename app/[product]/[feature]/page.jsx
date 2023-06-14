import navData from "../../lib/navData.json";

export const dynamicParams = false; // true | false,
export async function generateStaticParams() {
  return navData
    .map((product) =>
      product.features.map((feature) => ({
        product: product.slug,
        feature: feature.slug,
      }))
    )
    .flat();
}

export default function Feature({ params }) {
  const activeProduct = navData.find(
    (product) => product.slug === params.product
  );
  const activeFeature = activeProduct?.features.find(
    (feature) => feature.slug === params.feature
  );
  return (
    <div>
      Product: {activeProduct?.title} ({activeProduct?.slug})
      <br />
      Feature: {activeFeature?.title} ({activeFeature?.slug})
    </div>
  );
}
