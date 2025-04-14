import GetInTouch from '@/components/contact/GetInTouch';
import Socials from '@/components/contact/Socials';
import Hero from '@/components/shared/hero';
import img from '@/public/contact.jpg';

function Contact() {
  return (
    <section>
      <Hero
        title="We are only a message away, contact us now"
        description="Our doors are always open to you for collaborations and enquiries."
        imageSrc={img}
        showButtons={false}
      />
      <Socials />
      <GetInTouch />
    </section>
  );
}

export default Contact;
