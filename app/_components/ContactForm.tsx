'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        // Get EmailJS credentials from environment variables
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setSubmitStatus({
                type: 'error',
                message: 'Email service is not configured. Please contact me directly via email.',
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // Send email using EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: GENERAL_INFO.email,
                    reply_to: formData.email,
                },
                publicKey, // Public key as 4th parameter
            );

            setSubmitStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully.',
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or contact me directly via email.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto mt-8">
            <div className="space-y-6">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-muted-foreground"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background-active border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-muted-foreground"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background-active border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your.email@example.com"
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-muted-foreground"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-background-active border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Tell me about your project..."
                    />
                </div>

                {submitStatus.type && (
                    <div
                        className={`p-4 rounded-md ${
                            submitStatus.type === 'success'
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}
                    >
                        {submitStatus.message}
                    </div>
                )}

                <Button
                    as="button"
                    type="submit"
                    loading={isSubmitting}
                    variant="primary"
                    className="w-full"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;

