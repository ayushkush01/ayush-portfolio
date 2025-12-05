import { GENERAL_INFO } from '@/lib/data';
import ContactForm from '@/app/_components/ContactForm';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <ContactForm />

                <div className="mt-12">
                    <p className="leading-none text-muted-foreground">
                        Design & built by Ayush Kushwaha <br />
                         
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
