import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import RootLayout from "@/components/RootLayout";

export const metadata = {
  title: 'Apex | contact us'
    
   
};


const ContactPage = () => {
  return (
    <>
    <RootLayout>
      <PageIntro eyebrow="Contact us" className='font-poppins' title="Let’s work together">
        <p>I can not wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
      </RootLayout>
    </>
  );
};

export default ContactPage;
