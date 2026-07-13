import emailjs from '@emailjs/browser';
import { ContactFormData, EmailResult } from '../types';

export async function sendContactEmail(data: ContactFormData): Promise<EmailResult> {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      return {
        success: false,
        message: 'Email service is not configured. Please contact me directly at yanipep2602@gmail.com.'
      };
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'Charles Louis C. David',
      },
      publicKey
    );

    if (response.status === 200) {
      return { 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      };
    }

    return {
      success: false,
      message: 'Failed to send message. Please try again or contact me directly at yanipep2602@gmail.com.'
    };
  } catch (error) {
    if (error instanceof Error) {
      // Network error
      if (error.message.toLowerCase().includes('network')) {
        return {
          success: false,
          message: 'Unable to send message. Please check your connection and try again.'
        };
      }

      // Rate limit error
      if (error.message.toLowerCase().includes('rate limit')) {
        return {
          success: false,
          message: 'Too many requests. Please wait a moment and try again.'
        };
      }
    }

    // Generic error
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact me directly at yanipep2602@gmail.com.'
    };
  }
}
