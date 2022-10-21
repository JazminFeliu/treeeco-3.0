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
import { FiSend } from "react-icons/fi";
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: "/", name: "Home" },
    { href: "/", name: "About" },
    { href: "/", name: "Gallery" },
    { href: "/", name: "Interview" },
    { href: "/", name: "Articles" },
    { href: "/", name: "Contact" },
  ],
};

export const socialData = [
  { href: "/", icon: <GrFacebookOption /> },
  { href: "/", icon: <IoLogoInstagram /> },
  { href: "/", icon: <IoLogoPinterest /> },
  { href: "/", icon: <IoLogoTwitter /> },
  { href: "/", icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: "TREEECO",
  subtitle: "Empresa ambiental con impacto social",
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
  btnText: "Ver todos",
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
  title: "Get in touch with me:",
  info: [
    {
      title: "LA office",
      subtitle:
        "In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "784 Norman Street, Los Angeles",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+49 93 30493943",
      },
      email: {
        icon: <FaEnvelope />,
        address: "contact@yourcompany.com",
      },
      link: "Get location",
    },
    {
      title: "NYC office",
      subtitle:
        "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "1630 Elm Drive, New York City",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+49 34 36573355",
      },
      email: {
        icon: <FaEnvelope />,
        address: "contact@yourcompany.com",
      },
      link: "Get location",
    },
  ],
  form: {
    name: "Write your name here",
    email: "Write your email address",
    message: "Write your messages here",
    btnText: "Send it",
  },
};

export const footerData = {
  about: {
    title: "About TREEECO TANDIL ARGENTINA",
    subtitle:
      "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "1630 Elm Drive, New York City",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+49 34 36573355",
    },
    email: {
      icon: <FaEnvelope />,
      address: "contact@yourcompany.com",
    },
  },
  links: {
    title: "Useful links",
    items: [
      { href: "/", name: "About me" },
      { href: "/", name: "My gallery" },
      { href: "/", name: "My services" },
      { href: "/", name: "Contact me" },
    ],
  },
  program: {
    title: "Working Time",
    items: [
      { name: "Mon - Tue / Appointment" },
      { name: "Wed - Fri / 10:00 - 9:00pm" },
      { name: "Sat / 10:00 - 6:00pm" },
      { name: "Sun / no work on this day" },
    ],
  },
  newsletter: {
    title: "Newsletter",
    subtitle:
      "Elit duis porttitor massa tellus nun in velit arcu posuere integer.",
    form: {
      placeholder: "Your email address",
      icon: <FiSend />,
    },
  },
};
