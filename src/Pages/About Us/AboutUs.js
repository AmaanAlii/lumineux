import React from "react";
import "./AboutUs.css";

import BreadCrumbs from "../../Components/Bread Crumbs/BreadCrumbs";
import FaqCard from "../../Components/FAQ Card/FaqCard";
import EnquiryCard from "../../Components/Enquiry Card/EnquiryCard";

import AboutUsBannerImg from "../../Assets/About Us/AboutUsBannerImg.jpeg";
import AboutUsIntroImg from "../../Assets/About Us/AboutUsIntroImg.jpeg";
import AboutUsGetInTouchImg from "../../Assets/About Us/AboutUsGetInTouchImg.jpeg";

function AboutUs() {
  const aboutUsBannerStyle = {
    backgroundImage: `url("${AboutUsBannerImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "background-size 0.5s ease-in-out",
  };

  const aboutUsFaqData = [
    {
      question:
        "Why is it considered necessary to register Agreement for Sale?",
      answer:
        "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.",
    },
    {
      question:
        "Why is it considered necessary to register Agreement for Sale?",
      answer:
        "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.",
    },
    {
      question:
        "Why is it considered necessary to register Agreement for Sale?",
      answer:
        "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name. ",
    },
    {
      question:
        "Why is it considered necessary to register Agreement for Sale?",
      answer:
        "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.",
    },
    {
      question:
        "Why is it considered necessary to register Agreement for Sale?",
      answer:
        "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.",
    },
  ];

  const renderedFaqCards = aboutUsFaqData.map((item, index) => (
    <FaqCard key={index} faqQuestion={item.question} faqAnswer={item.answer} />
  ));

  return (
    <div className="about-us-section">
      <div className="about-us-banner" style={aboutUsBannerStyle}>
        <h1> More About Us</h1>
        <BreadCrumbs />
      </div>
      <div className="about-us-main-section">
        <div className="about-us-intro">
          <div className="about-us-intro-head">
            <h2>More About Us</h2>
            <span>
              Utilizing her exceptional experience and knowledge of the luxury
              waterfront markets, Simone serves an extensive and elite worldwide
              client base.
            </span>
          </div>
          <div className="about-us-intro-main-content">
            <div className="about-us-image-left">
              <img src={AboutUsIntroImg} alt="About Us" />
            </div>
            <div className="about-us-intro-content-right">
              <p>
                Our real estate agency specializes in assisting clients with
                buying, selling, and renting properties. We employ licensed real
                estate agents who are experienced and knowledgeable about the
                real estate market in the area. Additionally, in order to ensure
                our clients achieve the best possible outcome for their
                property-related transactions, we provide them with the support
                and assistance they need to navigate the real estate process.
                This includes helping them with assessing the value of
                properties, understanding the local market and determining
              </p>

              <p>
                Our real estate agency specializes in assisting clients with
                buying, selling, and renting properties. We employ licensed real
                estate agents who are experienced and knowledgeable about the
                real estate market in the area. Additionally, in order to ensure
                our clients achieve the best possible outcome for their
                property-related transactions, we provide them with the support
                and assistance they need to navigate the real estate process.
                This includes helping them with assessing the value of
                properties, understanding the local market and determining
              </p>

              <p>
                Our real estate agency specializes in assisting clients with
                buying, selling, and renting properties. We employ licensed real
                estate agents who are experienced and knowledgeable about the
                real estate market in the area. Additionally, in order to ensure
                our clients achieve the best possible outcome for their
                property-related transactions, we provide them with the support
                and assistance they need to navigate the real estate process.
                This includes helping them with assessing the value of
                properties, understanding the local market and determining
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-our-vision-section">
          <div className="about-us-our-vision-top">
            <div className="about-us-our-vision-card">
              <h2>Our Mission</h2>
              <p>
                With over $2 Billion in sales, Our agency is the industry’s top
                luxury producer with over 27 years of experience in marketing
                Seattles’s most prestigious waterfront properties.
              </p>
            </div>
            <div className="about-us-our-vision-card">
              <h2>Our Vision</h2>
              <p>
                Due to our unparalleled results, expertise and dedication, we
                rank amongst the Top 6 agencies in Seattle and our area. She is
                also and is an elite member to Corcoran’s Presidents Council.
              </p>
            </div>
          </div>
          <div className="about-us-our-vision-bottom">
            <div className="about-us-our-vision-card">
              <h2>Our Vision</h2>
              <p>
                Due to our unparalleled results, expertise and dedication, we
                rank amongst the Top 6 agencies in Seattle and our area. She is
                also and is an elite member to Corcoran’s Presidents Council.
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-faq-section">
          <div className="about-us-faq-heading-section">
            <h2>Frequently Asked Questions</h2>
            <span>
              You can use this guide to familiarize yourself with rules, laws
              and other important information relating to your property.
            </span>
          </div>
          <div className="about-us-faq-cards-section">
            <FaqCard
              faqQuestion="Why is it considered necessary to register Agreement for Sale?"
              faqAnswer="The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name."
            />
            {renderedFaqCards}
          </div>
        </div>
        <div className="about-us-our-team-section">
          <div className="about-us-our-team-heading">
            <h2>Our Team Stats</h2>
            <span>
              Despite well over $1 billion in combined sales, however, the team
              strives to maintain an air of humility and discretion
            </span>
          </div>
          <div className="about-us-our-team-cards-section">
            <div className="about-us-our-team-cards">
              <h3>$50k</h3>
              <span>Current Listing Volume</span>
            </div>
            <div className="about-us-our-team-cards">
              <h3>$10k</h3>
              <span>Total Sold 2020 - 2022</span>
            </div>
            <div className="about-us-our-team-cards">
              <h3>$50k</h3>
              <span>Lifetime Sales Volume</span>
            </div>
          </div>
        </div>
        <div className="about-us-get-in-touch-section">
          <div className="about-us-get-in-touch-image-left">
            <img src={AboutUsGetInTouchImg} alt="Get In Touch" />
          </div>
          <div className="about-us-get-in-touch-content-right">
            <h2>Get in touch to plan your next transaction</h2>
            <span>
              Our experts and developers would love to contribute their
              expertise and insights and help you today.
            </span>
            <EnquiryCard />
            <div className="about-us-get-in-touch-contact-section">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                >
                  <path
                    d="M18.9099 14.1751L14.8786 12.3685C14.6959 12.2902 14.4966 12.2588 14.2987 12.2769C14.1008 12.2951 13.9106 12.3624 13.7453 12.4726C13.7285 12.4834 13.7125 12.4954 13.6975 12.5085L11.5905 14.3006C11.5686 14.3125 11.5443 14.3191 11.5194 14.32C11.4945 14.3209 11.4698 14.316 11.4471 14.3057C10.0928 13.652 8.68985 12.2576 8.0336 10.922C8.02267 10.8997 8.01699 10.8752 8.01699 10.8503C8.01699 10.8255 8.02267 10.801 8.0336 10.7787L9.83167 8.64521C9.84457 8.62942 9.85654 8.6129 9.86751 8.59571C9.97622 8.42974 10.0419 8.2393 10.0586 8.04159C10.0753 7.84388 10.0424 7.64513 9.96309 7.46328L8.16929 3.43874C8.06742 3.20117 7.89124 3.00305 7.66721 2.8741C7.44317 2.74516 7.18336 2.69235 6.92677 2.72361C5.81159 2.87022 4.78795 3.41787 4.04714 4.26422C3.30633 5.11057 2.89904 6.1977 2.90138 7.32247C2.90138 14.0044 8.3374 19.4405 15.0194 19.4405C16.1441 19.4426 17.2311 19.0353 18.0774 18.2945C18.9237 17.5537 19.4714 16.5302 19.6182 15.4151C19.6494 15.1597 19.5973 14.901 19.4697 14.6776C19.3421 14.4542 19.1458 14.278 18.9099 14.1751ZM15.0194 18.4164C8.90234 18.4164 3.92543 13.4395 3.92543 7.32247C3.92258 6.44685 4.23863 5.60013 4.81452 4.94053C5.39042 4.28093 6.18676 3.85356 7.05477 3.73828H7.0744C7.10879 3.73892 7.14218 3.74994 7.1702 3.76989C7.19822 3.78984 7.21956 3.81779 7.23142 3.85007L9.03205 7.87034C9.04232 7.89269 9.04764 7.917 9.04764 7.9416C9.04764 7.9662 9.04232 7.9905 9.03205 8.01286L7.23057 10.1514C7.21713 10.1667 7.20486 10.183 7.19387 10.2001C7.08115 10.3722 7.01477 10.5704 7.00116 10.7757C6.98756 10.981 7.02719 11.1863 7.11622 11.3718C7.87316 12.9215 9.43485 14.4712 11.0017 15.2282C11.1882 15.3167 11.3945 15.3554 11.6005 15.3404C11.8064 15.3255 12.005 15.2574 12.1768 15.1428C12.193 15.1317 12.2092 15.1198 12.2245 15.107L14.3307 13.3149C14.3515 13.3037 14.3745 13.2972 14.398 13.2957C14.4216 13.2942 14.4452 13.2979 14.4672 13.3064L18.4994 15.113C18.5324 15.127 18.5601 15.151 18.5786 15.1817C18.5971 15.2123 18.6056 15.248 18.6027 15.2836C18.488 16.1521 18.0611 16.949 17.4016 17.5255C16.7421 18.1021 15.8953 18.4188 15.0194 18.4164Z"
                    fill="#EFEFEF"
                  />
                </svg>
                Phone:(305) 555-4446
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                >
                  <path
                    d="M4.58335 5.04688H16.4169C17.1411 5.04688 17.8357 5.33458 18.3479 5.84671C18.86 6.35884 19.1477 7.05343 19.1477 7.77769V15.9701C19.1477 16.6944 18.86 17.389 18.3479 17.9011C17.8357 18.4132 17.1411 18.7009 16.4169 18.7009H4.58335C3.8591 18.7009 3.1645 18.4132 2.65238 17.9011C2.14025 17.389 1.85254 16.6944 1.85254 15.9701V7.77769C1.85254 7.05343 2.14025 6.35884 2.65238 5.84671C3.1645 5.33458 3.8591 5.04688 4.58335 5.04688ZM4.58335 5.95715C4.12822 5.95715 3.7277 6.11189 3.41821 6.38497L10.5001 10.9636L17.582 6.38497C17.2725 6.11189 16.872 5.95715 16.4169 5.95715H4.58335ZM10.5001 12.0651L2.88115 7.12229C2.80832 7.32255 2.76281 7.55012 2.76281 7.77769V15.9701C2.76281 16.453 2.95462 16.916 3.29603 17.2574C3.63745 17.5989 4.10051 17.7907 4.58335 17.7907H16.4169C16.8997 17.7907 17.3628 17.5989 17.7042 17.2574C18.0456 16.916 18.2374 16.453 18.2374 15.9701V7.77769C18.2374 7.55012 18.1919 7.32255 18.1191 7.12229L10.5001 12.0651Z"
                    fill="#EFEFEF"
                  />
                </svg>
                Email:office@wpresidence.net
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
