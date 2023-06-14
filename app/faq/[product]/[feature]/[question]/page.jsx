import faqItems from "../../../../lib/faqData.json";

export const dynamicParams = false; // true | false,
export function generateStaticParams() {
  return faqItems.map((faq) => ({
    product: faq.productSlug,
    feature: faq.featureSlug,
    question: faq.slug,
  }));
}

export default function Feature({ params }) {
  const activeQuestion = faqItems.find((faq) => faq.slug === params.question);
  return (
    <div>
      {params.product} - {params.feature} - {activeQuestion?.question}
    </div>
  );
}
