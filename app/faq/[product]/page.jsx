import faqItems from "../../lib/faqData.json";

export const dynamicParams = false; // true | false,
export function generateStaticParams() {
  return faqItems.map((faq) => ({
    product: faq.productSlug,
  }));
}

export default function Product({ params }) {
  const activeProduct = faqItems.find(
    (faq) => faq.productSlug === params.product
  );
  return <div>{activeProduct?.slug}</div>;
}
