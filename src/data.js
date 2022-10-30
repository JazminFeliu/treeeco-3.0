// import images
import Logo from "../src/img/header/LOGO2.jpg";
import GalleryImg1 from "../src/img/gallery/1a.png";
import GalleryImg2 from "../src/img/gallery/2a.png";
import GalleryImg3 from "../src/img/gallery/3a.png";
import GalleryImg4 from "../src/img/gallery/4a.png";
import GalleryImg5 from "../src/img/gallery/5a.png";
import GalleryImg6 from "../src/img/gallery/6a.png";
import GalleryImg7 from "../src/img/gallery/7a.png";
import GalleryImg8 from "../src/img/gallery/8a.png";
import QuoteImg from "../src/img/testimonial/quote.svg";
// import icons
import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import PriceIcn from "../src/img/pricing/icons/price.svg";
import { FiSend } from "react-icons/fi";
import {
  FaPlay,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";
import QuestionMarkIcn from "../src/img/faq/icons/question-mark.svg";

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: "/", name: "Home" },
    { href: "#about", name: "Nosotros" },
    { href: "#gallery", name: "Productos" },
    { href: "#faq", name: "Servicios" },
    { href: "#skills", name: "Comunidad" },
    { href: "#contact", name: "Contacto" },
  ],
  btnIcon: <IoMdArrowForward />,
};

export const socialData = [
  {
    href: "https://www.instagram.com/treeeco.siar/",
    icon: <IoLogoInstagram />,
  },
  {
    href: "https://www.facebook.com/treeecoargentina/",
    icon: <GrFacebookOption />,
  },
  {
    href: "https://www.linkedin.com/company/treeeco/",
    icon: <IoLogoLinkedin />,
  },
  { href: "https://twitter.com/TreeecoA", icon: <IoLogoTwitter /> },

  {
    href: "https://www.youtube.com/channel/UC2BpxJym40BkKdh5J33bAeQ",
    icon: <IoLogoYoutube />,
  },
];

export const heroData = {
  title: "TREEECO",
  subtitle: "Empresa ambiental con impacto social",
  btnText: "leer mas",
  btnIcon: <IoMdArrowForward />,
};

export const loginData = {
  title: "TREEECO",
  subtitle: "Proximamente seccion registro/login para integrantes de treeeco",
  btnText: "leer mas",
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: "Nuestra Historia:",
  subtitle1:
    "Somos una empresa de Tandil, que genera transformación de la materia orgánica con la finalidad de contribuir a la sustentabilidad de la producción tanto local como regional. Re-combinamos técnicas y saberes para desarrollar el máximo beneficio e impactos positivos a la microbiología de los suelos.",
  subtitle2:
    "Nuestros productos, están siendo monitoreados por INTA subestación Balcarce, apuntando a la mejora continua y en pos de obtener un producto, naturalmente apto para los agricultores, horticultores de baja, media y alta intensidad productiva.",
  btnText: "Conocer mas",
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: "Los Productos:",
  btnText: "Ver Ofertas",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "Conoces nuestros servicios?",
  accordions: [
    {
      question: "Servicios Ambientales tradicionales",
      answer:
        "Evaluaciones y Estudios de Impacto Ambiental, Diagnósticos Socio-Ambientales, actividades de sanitización, abonado, plantaciones, podas y limpiezas son algunos de los servicios que ofrecemos.",
    },
    {
      question: "S.I.A.R.",
      answer:
        "La Innovación Recombinante plantea un Sistema donde se analiza una actividad – por ej., la de un tambo- una o dos oportunidades, como generar un bio-fertilizante y tratar las excretas bovinas - y se buscan soluciones ambientales que puedan integrarse de manera escalonada y escalable a esta actividad, -la instalación de un biodigestor - sumando así un servicio de mejora continua.",
    },
    {
      question: "Núcleos comunales productivos",
      answer:
        "En la forma de Consorcios de productos y servicios regionales, generamos redes de logistica y puntos de abastecimiento intercomunitario de hortalizas, abonos, y muchos productos mas.",
    },
    {
      question: "Economía circular",
      answer:
        "Buscamos ofrecer herramientas que permitan la transición de una economía de desarrollo lineal a una Economia Circular y con CosmoConvivencia.",
    },
    {
      question: "Corredor Ecocultural",
      answer:
        "Jornadas de Ecocine y debate son parte de las Acciones sociales para una sociedad sustentable que promovemos y armamos.",
    },
    {
      question: "Ventas comunitarias",
      answer:
        "Armamos combos de productos propios y otros productos para favorecer la venta comunitaria de categorias asociativas. Por ejemplo, si tenés una huerta y hacés dulces, el combo dulce + abono orgánico se ofrece en ferias y por el apartado de ofertas en instagram",
    },
  ],
};

export const interviewData = {
  title:
    "“Los productos, servicios y acciones sociales buscan crear un impacto ambiental positivo que perdure en el tiempo.”",
  btnText: "Mirar ahora",
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "El árbol de casa no levantaba con nada, hasta que le puse tierra de Asgard, abono de Treeeco y en un par de semanas se puso excelente, mortal quedó.",
    name: "Santiago Feliú",
    occupation: "Enfermero aeroevacuador, Chascomús",
  },
  {
    quoteImg: QuoteImg,
    message: "Verificada eficiencia!!! Impecable este producto",
    name: "@juani_marderwald",
    occupation: "Instagram, Tandil ",
  },
  {
    quoteImg: QuoteImg,
    message: "Hola! alcanzas a ver los brotes del limonero? Estoy chocha",
    name: "Rosa ",
    occupation: "Vecina de Barrio La Movediza, Tandil",
  },
];

export const contactData = {
  title: "Contacto",
  info: [
    {
      title: "Central Factory",
      subtitle: "Fábrica de procesos y preparado de productos ambientales",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "Pje. Sansouci 2500, Tandil",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+54 249 425 0711",
      },
      email: {
        icon: <FaEnvelope />,
        address: "treeecoargentina@gmail.com",
      },
      link: "Get location",
    },
    {
      title: "Distribución y Stock",
      subtitle:
        "De L a V de 9 a 13Hs / 16 a 20 hs y Sábados de 9 a 12 hs, nos encontras en circuito centro",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "Perimetro Av. Balbín/Av. Buzón - Av. Avellaneda - Av. Rivadavia/Av. Perón - Av. del Valle, Tandil ",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+54 249 420 8028",
      },
      email: {
        icon: <FaInstagram />,
        address: "@treeeco.siar",
      },
      link: "Get location",
    },
  ],
  form: {
    name: "Nombre",
    email: "e-mail",
    message: "Escriba su mensaje",
    btnText: "Enviar",
  },
};

export const pricing = {
  icon: PriceIcn,
  title: "Ofertas",
  plans: [
    {
      name: "GUACAMASHI",
      price: "489",
      list: [
        { name: "A. Orgánico tipo bokashi, minerales y excreta pura gallina y cerdo" },
        { name: "Bolsa x 3 kg" },
        { name: "Con NPK analizado por INTA Balcarce " },
        { name: "Libre de patógenos " },
      ],
      delay: 0.6,
    },
    {
      name: "GUMBA",
      price: "80",
      list: [
        { name: "A. orgánico vivo ácido a base de cerdo, gallina y caballo" },
        { name: "Cantidad de pedido mínimo 50 kg" },
        { name: "Consultar stock y cargo de flete" },
        { name: "Precio mayorista x kg" },
      ],
      delay: 0.8,
    },
    {
      name: "ASGARD",
      price: "1996",
      list: [
        { name: "A. orgánico vivo alcalio a base de vaca, caballo," },
        { name: "gallina y humus de lombriz" },
        { name: "Bolsa x 15 kg" },
        { name: "consultar cantidad sin costo de envio" },
        
      ],
      delay: 1,
    },
  ],
};

export const footerData = {
  about: {
    title: "About TREEECO -  Tandil, ARGENTINA",
    subtitle:
      "Empresa ambiental con impacto social. Asesoramiento y producción de abono orgánico",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "Pje. Sansouci 2500, Tandil",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+54 249 425 0711 / +54 249 420 8028 ",
    },
    email: {
      icon: <FaEnvelope />,
      address: "treeecoargentina@gmail.com",
    },
  },
  links: {
    title: "Links útiles",
    items: [
      { href: "#about", name: "Nosotros" },
      { href: "#gallery", name: "Los productos" },
      { href: "#faq", name: "Servicios" },
      { href: "#contact", name: "Contacto" },
    ],
  },
  program: {
    title: "Horarios",
    items: [
      { name: "L a V mañanas / 9:00 - 13:00pm" },
      { name: "L a V tardes / 16:00 a 20:00pm" },
      { name: "Sábado / 9:00 - 12:00" },
      { name: "Domingos / no trabajamos" },
    ],
  },
  newsletter: {
    title: "Noticias",
    subtitle:
      "Dejanos tu mail si queres recibir noticias, ofertas y actividades en la comunidad",
    form: {
      placeholder: "tu dirección de email",
      icon: <FiSend />,
    },
  },
  login: {
    title: "Área Personal",
    items: [
      { href: "/", name: "Log In" },
      { href: "/", name: "Sign Up" },
    ],
    btnIcon: <FaPlay />,
  },
};
