import navItems from "../../../lib/navData.json";

export const dynamicParams = false; // true | false,
export function generateStaticParams() {
  return navItems
    .map((product) =>
      product.features
        .map((feature) =>
          feature.guides
            .map((guide) => ({
              product: product.slug,
              feature: feature.slug,
              guide: guide.slug,
            }))
            .flat()
        )
        .flat()
    )
    .flat();
}

export default function Guide({ params }) {
  const activeProduct = navItems.find(
    (product) => product.slug === params.product
  );
  const activeFeature = activeProduct.features.find(
    (feature) => feature.slug === params.feature
  );
  const activeGuide = activeFeature.guides.find(
    (guide) => guide.slug === params.guide
  );
  return (
    <div>
      Product: {activeProduct?.title} ({activeProduct?.slug})
      <br />
      Feature: {activeFeature?.title} ({activeFeature?.slug})
      <br />
      Guide:{activeGuide?.title} ({activeGuide?.slug})
    </div>
  );
}
