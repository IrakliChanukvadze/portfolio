import { SiGmail, SiMessenger, SiWhatsapp, SiLinkedin } from "react-icons/si";

const data = [
  {
    id: 1,
    icon: <SiGmail size={25} />,
    adress: "iraklichanuyvadze@gmail.com",
    send: "mailto: iraklichanuyvadze@gmail.com",
    type: "Email",
  },
  {
    id: 2,
    icon: <SiMessenger size={25} />,
    adress: "irakli.chanuyvadze.5",
    send: "https://www.messenger.com/t/100004005845283",
    type: "Messenger",
  },
  {
    id: 3,
    icon: <SiWhatsapp size={25} />,
    adress: "+995591051977",
    send: "https://web.whatsapp.com/",
    type: "WhatsApp",
  },
  {
    id: 4,
    icon: <SiLinkedin size={25} />,
    adress: "iraklichano",
    send: "https://www.linkedin.com/in/iraklichano/",
    type: "Linkedin",
  },
];

export default data;
