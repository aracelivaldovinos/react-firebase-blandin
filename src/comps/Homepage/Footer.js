import {BsInstagram, BsFillTelephoneFill} from 'react-icons/bs';
import {FaSnapchat, FaFacebook} from 'react-icons/fa';
import {GrGithub} from 'react-icons/gr';

const Footer = () => {
  return ( 
    <div className="footer">
      <footer className="bg-dark text-center text-white">
        <div className="container p-1 pb-0">
          <section className="mb-1">
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/blancasroyalpastries/?hl=en" role="button"
              ><BsInstagram/></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FaSnapchat/></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FaFacebook/></a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><BsFillTelephoneFill/></a>
          </section>
        </div>
        <div className="text-center p-1" style={{BackgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          © 2021 Copyright:
          <a className="text-white" href="https://github.com/aracelivaldovinos"> Araceli Valdovinos <GrGithub/></a>
        </div>
      </footer>
    </div>
   );
}
 
export default Footer;