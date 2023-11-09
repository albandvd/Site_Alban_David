import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Alban David</h3>
        <span>Etudiant en BUT R&T - Université de Nice Côte d'Azur - Sophia Antipolis</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]"> &emsp; Bonjour, je m'appelle Alban David. Je suis actuellement étudiant en deuxième année du BUT Réseau et Télécom de l'Université Nice Côte d'Azur. J'ai la chance de pouvoir réaliser mes études en alternance, je travaille au sein de l'équipe technique de l'entreprise Nextsourcia au poste d'apprenti DevOps.
          <br/> &emsp; Mon objectif est d’intégrer, après mon BUT une école d’ingénieur qui me permettrait de me spécialiser dans les domaines qui me passionnentent de prétendre à des postes à l’international.      
      </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Date de naissance :
                </span>
                <span>20/08/2004</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Âge :
                </span>
                <span>18</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  E-mail :
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
                  Téléphone :
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
                  Nationalité :
                </span>
                <span>Française</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Étude :
                </span>
                <span>BUT Réseau et télécom</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Niveau d'étude :
                </span>
                <span>Bachelor</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Centres d'intérêt :
                </span>
                <span>Volley-Ball, Sport automobile</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/Profil.jpg" download>
          <span>Download CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
