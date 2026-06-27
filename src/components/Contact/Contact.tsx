import { contact } from '@/portfolio';

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section flex flex-col items-center text-center" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <div className="flex flex-col gap-2">
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
