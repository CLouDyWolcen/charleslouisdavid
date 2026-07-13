import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SocialLink } from '../types';
import { contactFormSchema, ContactFormSchema } from '../utils/validation';
import { sendContactEmail } from '../utils/email';

interface ContactProps {
  email: string;
  socialLinks: SocialLink[];
}

const Contact = ({ email, socialLinks }: ContactProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    const result = await sendContactEmail(data);

    if (result.success) {
      setSubmitMessage({ type: 'success', text: result.message });
      reset();
    } else {
      setSubmitMessage({ type: 'error', text: result.message });
    }

    setIsSubmitting(false);
  };

  const getIconForPlatform = (platform: string) => {
    const iconMap: Record<string, JSX.Element> = {
      github: <FaGithub className="w-5 h-5" />,
      linkedin: <FaLinkedin className="w-5 h-5" />,
      google: <FaEnvelope className="w-5 h-5" />,
    };
    return iconMap[platform.toLowerCase()] || <FaEnvelope className="w-5 h-5" />;
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-dark-900">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 section-reveal">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 blur-xl opacity-30"></span>
                <span className="relative text-gradient">Get In Touch</span>
              </span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
          </div>
          <p className="mt-6 text-dark-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8 section-reveal">
            <div>
              <h3 className="text-2xl font-display font-semibold text-dark-100 mb-6">
                Let's Connect
              </h3>
              <p className="text-dark-300 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or connect with me on social media.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 bg-dark-800/50 backdrop-blur-sm rounded-xl border border-primary-500/20 hover:border-primary-500/40 transition-colors group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg flex items-center justify-center border border-primary-500/30 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-dark-400 text-sm mb-1">Email</div>
                <a
                  href={`mailto:${email}`}
                  className="text-dark-100 hover:text-primary-400 transition-colors font-mono text-sm break-all"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-display font-semibold text-dark-100 mb-4">
                Find me on
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-dark-800/50 backdrop-blur-sm rounded-lg border border-primary-500/20 hover:border-primary-500/40 hover:bg-dark-800 transition-all group"
                  >
                    <span className="text-primary-400 group-hover:scale-110 transition-transform">
                      {getIconForPlatform(link.icon)}
                    </span>
                    <span className="text-dark-200 group-hover:text-primary-400 transition-colors">
                      {link.platform}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="section-reveal">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-primary-500/20 space-y-6"
              >
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-dark-200 font-medium mb-2">
                    Name <span className="text-primary-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 bg-dark-900/50 border border-primary-500/20 rounded-lg text-dark-100 placeholder-dark-500 focus:border-primary-500/60 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-dark-200 font-medium mb-2">
                    Email <span className="text-primary-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 bg-dark-900/50 border border-primary-500/20 rounded-lg text-dark-100 placeholder-dark-500 focus:border-primary-500/60 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-dark-200 font-medium mb-2">
                    Message <span className="text-primary-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message')}
                    className="w-full px-4 py-3 bg-dark-900/50 border border-primary-500/20 rounded-lg text-dark-100 placeholder-dark-500 focus:border-primary-500/60 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none resize-none"
                    placeholder="Tell me about your project or just say hi!"
                  />
                  {errors.message && (
                    <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>

                {/* Submit message */}
                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg border ${
                      submitMessage.type === 'success'
                        ? 'bg-green-500/10 border-green-500/30 text-green-400'
                        : 'bg-red-500/10 border-red-500/30 text-red-400'
                    } animate-slide-up`}
                  >
                    <div className="flex items-start gap-3">
                      {submitMessage.type === 'success' ? (
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      <p className="text-sm">{submitMessage.text}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
