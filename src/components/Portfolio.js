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
    title: "Mise en place d'un réseau d'entreprise",
    text: [
      "La SAE 21 est un projet réalisé au cours de ma première année à l’IUT R&T de Sophia Antipolis. ",
      "L’objectif de cette SAE était de créer un réseau d’entreprise sur l’outils paquet tracer. Pour cela nous avons dû apprendre à mettre en place de nombreux éléments utilisé aujourd’hui pour configurer le réseau d’une entreprise.",
    ],
    client: "Alban",
    date: "Février 2023",
    category: "Réseau",
    share: [
      {
        id: 1,
        iconName: "icon-behance-squared",
        link: "https://drive.google.com/file/d/1EWLznuGHhMy5Abs5iZW5HSllNhQl9z-7/view?usp=drive_link",
      },
      {
        id: 2,
        iconName: "icon-behance-squared",
        link: "https://drive.google.com/file/d/1agnJQAoEePDrnFh3EXS2PBpeafVimrbO/view?usp=drive_link",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://drive.google.com/file/d/1ijVSAos7KxswF_ZFmCFs3ZkJsJW2E6R5/view?usp=drive_link",
      },
    ],
    bigImage: "assets/img/portfolio/2.jpg",
    images: ["", ""],
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/8.jpg",
    title: "Etude du réseau domestique",
    text: [
      "La SAE 12 est un projet réalisé au cours de ma première année à l’IUT R&T de Sophia Antipolis.",
      "Ce dernier avait pour but de nous faire tester notre réseau domestique et de voir l’impact de notre utilisation d’internet sur l’environnement. ",   
	],
    client: "Alban",
    date: "Decembre 2022",
    category: "Réseau",
    share: [
      {
        id: 1,
        iconName: "icon-behance-squared",
        link: "https://drive.google.com/file/d/1RKsGkSsGV25gzoCv1kLTW8aWazP575Xv/view?usp=drive_link",
      },
      {
        id: 2,
        iconName: "icon-behance-squared",
        link: "https://drive.google.com/file/d/1zc6kdliCaf52W4RWLraP5IxqyLdjIRpv/view?usp=drive_link",
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
    title: "Étude des LoRa",
    text: [
      "La SAE 22 est un projet réalisé au cours de ma première année à l’IUT R&T de Sophia Antipolis.",
      "Cette dernière avait pour but de nous faire comprendre le fonctionnement de la norme lora et du fonctionnement d’un appareil de télécommunication. Nous avions deux rapports à rendre un premier sur un tp ou nous devions faire des tests sur des appareils de communications et étudier le Spreading Factor et un second ou nous deviens faire des tests sur oscilloscope. ",
    ],
    client: "Alban",
    date: "Juin 2023",
    category: "Télécom",
    share: [
      {
        id: 1,
        iconName: "icon-behance-squared",
        link: "https://drive.google.com/drive/folders/1dZchHV-RoYqE8ITnGLybT-2hvWzBlhPN",
      },
      {
        id: 2,
        iconName: "icon-behance-squared",
        link: "https://drive.google.com/file/d/1mdN0svHh5HPAfPp-lfhnD-IVi_XbeYJ2/view?usp=drive_link",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://drive.google.com/file/d/1gIrKgNJmZMCdQgTj1Ohhnq-MMQcL_oHL/view?usp=drive_link",
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
    title: "Projet Thales",
    text: [
      "Les SAE 23/24 sont de projets réalisés en partenariat avec l’entreprise Thales Alenia Space, au cours de ma première année à l’IUT R&T de Sophia Antipolis. ",
      "Ce projet avait pour but de nous faire travailler sur de nombreuses compétences acquis durant notre première année comme la création d’un script python, la mise en place d’une base de données et la création d’un site web pour afficher les données. Durant ce projet nous devions créer un programme permettant de décoder des trames binaires et les afficher sur un site web. ",
    ],
    client: "Alban",
    date: "2022 - 2023",
    category: "Programmation",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/Exarven15/SAE15",
      },
      {
        id: 2,
        iconName: "icon-behance-squared",
        link: "https://drive.google.com/file/d/1LY_Py9C__5URUjF_PInu4MvKTfZhEZBq/view?usp=drive_link",
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
      "Ce projet a été réalisé pendant ma première année à l’IUT R&T de Sophia Antipolis",
      "Le Wordle est un jeu qui consiste à trouver un mot du dictionnaire en 5 tentatives à la manière jeu « Mastermind ». J’ai développé ce jeu en python pour tester mes compétences. ",
    ],
    client: "Alban",
    date: "March, 2023",
    category: "Programmation",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/albandvd/Wordle",
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
                    data-title="Mise en place d'un réseau d'entreprise"
                    data-category="Réseau"
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
                        data-img-url="assets/img/portfolio/sae21.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Étude du réseau domestique"
                    data-category="Réseau"
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
                        data-img-url="assets/img/portfolio/res_domestique.png"
                      />
                    </a>
                  </div>
                </div>
              </li>

              <li className="detail1 mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Étude des LoRa"
                    data-category="Télécom"
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
                        data-img-url="assets/img/portfolio/lora.jpg"
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
                        setPortfolioDetailsModal(detail1Data[1]);
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
                    data-title="Projet Thales"
                    data-category="Programmation"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detail2Data[0]);
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
                        data-img-url="assets/img/portfolio/thales.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail2 mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Wordle"
                    data-category="Programmation"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detail2Data[1]);
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
                        data-img-url="assets/img/portfolio/wordle.png"
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
