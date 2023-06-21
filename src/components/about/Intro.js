import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/slider/alban2.jpg" alt="image" />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Alban David</h3>
        <span>Etudiant en BUT R&T - Université de Nice - Sophia Antipolis</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          Bonjour, je m'appelle Alban et Je suis le deuxième d’une fratrie de trois enfants. 
          Ma sœur, de 4 ans mon ainée, fait des études supérieures en programme PGE d’une grande école de commerce. 
          Elle a la chance, actuellement, d’effectuer sa 5è année d’études aux états unis. 
          Mon frère de 6 ans mon cadet est en 5è au collège à cannes. 
          Nous nous entendons tous les trois très bien et profitons toujours des moments que l’on passe ensemble pour faire du sport et de nombreuses activités.         
        </p>
        <p>
        Mon objectif est d’intégrer, après mon BUT une école d’ingénieur qui me permettrait de travailler plus tard dans les domaines qui me passionnent comme l’aéronautique ou l’informatique,
    et de prétendre à des postes à l’international. 
    Je suis attiré par les états unis ou j’ai eu la chance d’aller plusieurs fois mais aussi par l’Asie. 
    Singapour est un endroit que j’apprécie tout particulièrement. 
    J’ai eu la chance de beaucoup voyager avec ma famille. 
    Cela m’a ouvert l’esprit et m’a donné envie de découvrir toujours plus de nouvelles cultures et de pays.      
      </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Date de naissance:
                </span>
                <span>20/08/2004</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Age:
                </span>
                <span>18</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:alban.david06@gmail.com"
                  >
                    alban.david06@gmail.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Téléphone:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="tel:+33 6 95 66 32 32"
                  >
                    +33 6 95 66 32 32
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Nationalité:
                </span>
                <span>Francais</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Etude:
                </span>
                <span>BUT Réseau et télécom</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Niveau d'étude:
                </span>
                <span>Bachelor</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Centre d'interêt:
                </span>
                <span>Volley-Ball, Sport automobile</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/Profil.pdf" download>
          <span>Download CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
