import HeaderA from "./header/HeaderA";
import HeaderB from "./header/HeaderB";
import HeaderC from "./header/HeaderC";
import BlogA from "./blog/BlogA";
import BlogB from "./blog/BlogB";
import BlogC from "./blog/BlogC";
import FooterA from "./footers/FooterA";
import FooterB from "./footers/FooterB";

export default function getPlaceholders() {
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
      FooterC: <div>Footer C</div>,
      FooterD: <div>Footer C</div>,
    },
    hero: {
      HeroA: <div>Hero A</div>,
      HeroB: <div>Hero B</div>,
      HeroC: <div>Hero C</div>,
      HeroD: <div>Hero D</div>,
      HeroE: <div>Hero E</div>,
    },
    feature: {
      FeatureA: <div>Feature A</div>,
      FeatureB: <div>Feature B</div>,
      FeatureC: <div>Feature C</div>,
      FeatureD: <div>Feature D</div>,
    },
    pricing: {
      PricingA: <div>Pricing A</div>,
      PricingB: <div>Pricing B</div>,
      PricingC: <div>Pricing C</div>,
    },
    CTA: {
      CTAA: <div>CTA A</div>,
      CTAB: <div>CTA B</div>,
      CTAC: <div>CTA C</div>,
      CTAD: <div>CTA D</div>,
      CTAE: <div>CTA E</div>,
      CTAF: <div>CTA F</div>,
    },
    testimonials: {
      TestimonialA: <div>Testimonial A</div>,
      TestimonialB: <div>Testimonial B</div>,
      TestimonialC: <div>Testimonial C</div>,
      TestimonialD: <div>Testimonial D</div>,
      TestimonialE: <div>Testimonial E</div>,
    },
    newsletter: {
      NewsletterA: <div>Newsletter A</div>,
      NewsletterB: <div>Newsletter B</div>,
      NewsletterC: <div>Newsletter C</div>,
    },
    form: {
      FormA: <div>Form A</div>,
      FormB: <div>Form B</div>,
    },
  };
}
