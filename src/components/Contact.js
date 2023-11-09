import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import ContactForm from "./contact/ContactForm";
import Map from "./contact/Map";
const Contact = () => {
  return (
    <SectionContainer name={"contact"}>
      <div className="container">
        <div className="tokyo_tm_contact w-full float-left clear-both h-auto py-[100px] px-[0px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName={"Contact"} title={"Contactez moi ..."} />
            </div>
            //<span>Pour toutes informations supplémentaires ou propositions, n'hésitez pas à me contacter. Je suis à votre disposition pour répondre à vos questions et fournir les détails nécessaires. </span>
          </div>
          <Map />
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
