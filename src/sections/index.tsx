import HeaderA from "./header/HeaderA";
import HeaderB from "./header/HeaderB";
import HeaderC from "./header/HeaderC";
import BlogA from "./blog/BlogA";
import BlogB from "./blog/BlogB";
import BlogC from "./blog/BlogC";
import FooterA from "./footer/FooterA";
import FooterB from "./footer/FooterB";
import FooterC from "./footer/FooterC";
import FooterD from "./footer/FooterD";
import HeroA from "./hero/HeroA";
import HeroB from "./hero/HeroB";
import HeroC from "./hero/HeroC";
import HeroD from "./hero/HeroD";
import HeroE from "./hero/HeroE";
import FeatureA from "./features/FeatureA";
import FeatureB from "./features/FeatureB";
import FeatureC from "./features/FeatureC";
import FeatureD from "./features/FeatureD";
import PricingA from "./pricing/PricingA";
import PricingB from "./pricing/PricingB";
import PricingC from "./pricing/PricingC";
import CTAA from "./cta/CTAA";
import CTAB from "./cta/CTAB";
import CTAC from "./cta/CTAC";
import CTAD from "./cta/CTAD";
import CTAE from "./cta/CTAE";
import CTAF from "./cta/CTAF";
import TestimonialA from "./testimonials/TestimonialA";
import TestimonialB from "./testimonials/TestimonialB";
import TestimonialC from "./testimonials/TestimonialC";
import TestimonialD from "./testimonials/TestimonialD";
import TestimonialE from "./testimonials/TestimonialE";
import NewsletterA from "./newsletter/NewsletterA";
import NewsletterB from "./newsletter/NewsletterB";
import NewsletterC from "./newsletter/NewsletterC";
import FormA from "./forms/FormsA";
// import EcommerceA from './ecommerce/EcommerceA';

export default function getSections() {
  return {
    header: {
      HeaderA: <HeaderA />,
      HeaderB: <HeaderB />,
      HeaderC: <HeaderC />,
    },
    blog: {
      BlogA: <BlogA />,
      BlogB: <BlogB />,
      BlogC: <BlogC />,
    },
    footer: {
      FooterA: <FooterA />,
      FooterB: <FooterB />,
      FooterC: <FooterC />,
      FooterD: <FooterD />,
    },
    hero: {
      HeroA: <HeroA />,
      HeroB: <HeroB />,
      HeroC: <HeroC />,
      HeroD: <HeroD />,
      HeroE: <HeroE />,
    },
    feature: {
      FeatureA: <FeatureA />,
      FeatureB: <FeatureB />,
      FeatureC: <FeatureC />,
      FeatureD: <FeatureD />,
    },
    pricing: {
      PricingA: <PricingA />,
      PricingB: <PricingB />,
      PricingC: <PricingC />,
    },
    CTA: {
      CTAA: <CTAA />,
      CTAB: <CTAB />,
      CTAC: <CTAC />,
      CTAD: <CTAD />,
      CTAE: <CTAE />,
      CTAF: <CTAF />,
    },
    testimonials: {
      TestimonialA: <TestimonialA />,
      TestimonialB: <TestimonialB />,
      TestimonialC: <TestimonialC />,
      TestimonialD: <TestimonialD />,
      TestimonialE: <TestimonialE />,
    },
    newsletter: {
      NewsletterA: <NewsletterA />,
      NewsletterB: <NewsletterB />,
      NewsletterC: <NewsletterC />,
    },
    // form: {
    //   FormA: <FormA />,
    //   FormB: <div>Form B</div>,
    // },
  };
}
