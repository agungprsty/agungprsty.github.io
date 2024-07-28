import { contact } from '../../portfolio';
import './Contact.css';

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <div className="section__contact">
        <h5>
          Telegram :{' '}
          <a href={`https://t.me/${contact.telegram}`} className="link">
            @a9ungprasetyo
          </a>
        </h5>
        <h5>
          Email :{' '}
          <a href={`mailto:${contact.email}`} className="link">
            agungprsty423@gmail.com
          </a>
        </h5>
      </div>
    </section>
  );
};

export default Contact;
