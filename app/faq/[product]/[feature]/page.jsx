import faqItems from "../../../lib/faqData.json";

export const dynamicParams = false; // true | false,
export function generateStaticParams() {
  return faqItems.map((faq) => ({
    product: faq.productSlug,
    feature: faq.featureSlug,
  }));
}

export default function Feature({ params }) {
  return (
    <div>
      {params.product} - {params.feature}
    </div>
  );
}
