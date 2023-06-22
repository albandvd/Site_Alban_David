import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
const detailData = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/7.jpg",
    title: "Réseaux Projet1",
    text: [
      "Description projet 1 réseaux",
      "Suite du détail",
    ],
    client: "Alban",
    date: "Février 2023",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/8.jpg",
    title: "Reseaux Projet2",
    text: [
      "Description projet 2 réseaux",
      "Suite du détail",   
	],
    client: "Alvaro Morata",
    date: "October 22, 2022",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],
  },
];

const detail1Data = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/7.jpg",
    title: "Systeme Projet1",
    text: [
      "Description projet 1 réseaux",
      "Suite du détail",
    ],
    client: "Alban",
    date: "Février 2023",
    category: "Detail1",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/8.jpg",
    title: "Systeme Projet2",
    text: [
      "Description projet 2 systeme",
      "Suite du détail",
    ],
    client: "Alvaro Morata",
    date: "October 22, 2022",
    category: "Detail1",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],
  },
];

const detail2Data = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/7.jpg",
    title: "Programmation Projet1",
    text: [
      "Description projet 1 programmation",
      "Suite du détail",
    ],
    client: "Alban",
    date: "Février 2023",
    category: "Detail2",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/8.jpg",
    title: "Programmation Projet2",
    text: [
      "Description projet 2 programmation",
      "Suite du détail",
    ],
    client: "Alvaro Morata",
    date: "October 22, 2022",
    category: "Detail2",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],
  },
];

const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Mes Projets"}
              />
              <div className="portfolio_filter">
                <ul className="list-none">
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className="current text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      onClick={handleFilterKeyChange("*")}
                    >
                      All
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("detail")}
                    >
                      Reseaux   
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("detail1")}
                    >
                      System   
                    </a>
                  </li>
                   <li className="inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("detail2")}
                    >
                      Programmation   
                    </a>
                  </li>
               </ul>
              </div>
            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Reseaux 1"
                    data-category="Detail"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[0]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/7.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Reseaux 2"
                    data-category="Detail"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[1]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/8.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>

              <li className="detail1 mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Systeme 1"
                    data-category="Detail1"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detail1Data[0]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/7.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail1 mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Systeme 2"
                    data-category="Detail1"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[1]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/8.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>

              <li className="detail2 mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Programmation 1"
                    data-category="Detail2"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detail1Data[0]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/7.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail2 mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Programmation 2"
                    data-category="Detail2"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[1]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/8.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;