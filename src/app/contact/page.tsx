import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Contact Me
        </h1>
        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Drop me a message.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
