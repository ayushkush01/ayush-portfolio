import { GENERAL_INFO } from '@/lib/data';
import ContactForm from '@/app/_components/ContactForm';

const Footer = () => {
    return (
        <footer className="text-center pb-20 pt-32 relative overflow-hidden" id="contact">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent z-[-1]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container relative z-10">
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">Ready to start project?</p>

                <div className="mb-20">
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="group relative inline-block"
                    >
                        <h2 className="text-5xl sm:text-8xl md:text-9xl font-anton text-foreground group-hover:text-primary transition-colors duration-500">
                            LET&apos;S TALK
                        </h2>
                        <div className="h-2 w-0 group-hover:w-full bg-primary transition-all duration-500 ease-in-out"></div>
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start text-left max-w-5xl mx-auto">
                    <div>
                        <h3 className="text-2xl font-anton mb-6">Contact Info</h3>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>
                                <a href={`mailto:${GENERAL_INFO.email}`} className="hover:text-primary transition-colors">
                                    {GENERAL_INFO.email}
                                </a>
                            </p>
                            <p>Hyderabad, India</p>
                        </div>
                    </div>

                    <div className="w-full">
                        <h3 className="text-2xl font-anton mb-6">Send a Message</h3>
                        <ContactForm />
                    </div>
                </div>

                <div className="mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} Ayush Kushwaha. All rights reserved.
                    </p>
                    <p>
                        Designed & Built with <span className="text-primary">Passion</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
