import logo from "./../assets/imgs/Logo-Qr.svg";
import { Form } from 'react-router-dom';
import  linkend from './../assets/imgs/linkedin-icon-2.svg'
const Footer = () => {
  return (
    <footer className="bg-ternary flex justify-between px-5 pb-4 pt-2 max-md:flex-col">
      <div className="w-1/4 max-md:w-full">
        <section>
          <img width={50} height={25} src={logo} alt="" />
          <p className="text-black/50 text-xs">
            DCódigo Qr es una página web que permite la creación de códigos qrs
            de sitios web, whatsapp entre otros. Es servicio gratuito para el
            publico en general.
          </p>
        </section>
      </div>
      <div className="w-1/2 inline-flex items-end justify-center text-center max-md:w-full max-md:mt-4 max-sm:text-sm">
          <span>&copy;2023 DCódigo Qr - Dorian Armijos | Todos los derechos reservados.</span>
      </div>
      <div className="w-1/4 max-md:w-full">
          <div className="flex justify-end mb-1">
            <img className="w-8 h-8 rounded-lg" src={linkend} alt="logo for icon likendin" />
          </div>
          <div>
              <Form className="text-end inline-flex justify-end items-end flex-col w-full gap-1" onSubmit={(e) => { e.preventDefault() }}>
                <input className="border-2 border-secondary px-4 py-1 rounded-3xl transition-all duration-1000 ease-in-out
                focus:border-2
                focus:w-full  
                focus:border-secondary focus:outline-none" placeholder="Escribe un mensaje..." type="text" />
                <button className="py-1 px-4 bg-primary text-white font-bold rounded-2xl">
                  Enviar
                  </button>
              </Form>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
