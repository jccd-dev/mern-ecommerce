import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "./Footer/Icons";
import Links from "./Footer/Links";

const Footer = () => {
  return (
    <div className="cont flex flex-col md:flex-row">
      <section className="left flex-[2] flex flex-col p-5">
        <h1 className="logo uppercase font-black text-2xl">JC-SHop</h1>
        <div className="desc my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo
          molestias expedita quod culpa aspernatur placeat totam! Fuga commodi
          asperiores magnam quos recusandae quia accusamu
        </div>
        <div className="socials flex">
          <Icons bg="bg-blue-500">
            <FontAwesomeIcon icon={faFacebook} />
          </Icons>
          <Icons bg="bg-rose-500">
            <FontAwesomeIcon icon={faInstagram} />
          </Icons>
          <Icons bg="bg-sky-500">
            <FontAwesomeIcon icon={faTwitter} />
          </Icons>
          <Icons bg="bg-red-500">
            <FontAwesomeIcon icon={faPinterest} />
          </Icons>
        </div>
      </section>
      <section className="center flex-1 p-5">
        <h3 className="title mb-7 font-semibold">Useful Links</h3>
        <ul className="m-0 p-0 list-none flex flex-wrap">
          <Links LinkName="Home" Link="#" />
          <Links LinkName="Cart" Link="#" />
          <Links LinkName="Man Fashion" Link="#" />
          <Links LinkName="Woman Fashion" Link="#" />
          <Links LinkName="Accessories" Link="#" />
          <Links LinkName="Track Order" Link="#" />
          <Links LinkName="Wishlist" Link="#" />
          <Links LinkName="Terms and privacy" Link="#" />
        </ul>
      </section>
      <section className="right flex-1 p-5">
        <h3 className="title mb-7 font-semibold">Contact</h3>
        <div className="mb-5 flex items-center">
          <FontAwesomeIcon icon={faLocationDot} />{" "}
          <p className="ml-2">Bato Camarines Sur, Philippines</p>
        </div>
        <div className="mb-5 flex items-center">
          <FontAwesomeIcon icon={faPhone} />{" "}
          <p className="ml-2">+63 9917706951</p>
        </div>
        <div className="mb-5 flex items-center">
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <p className="ml-2">jccd0724@gmail.com</p>
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="payment"
          className="w-1/2"
        />
      </section>
    </div>
  );
};

export default Footer;
