"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { handleSubmit } from '@/server/actions/contact';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Link from 'next/link';

// Dummy Form Components mapped to existing ones, assuming we will refactor them next.
// We will wrap them in standard HTML forms if the existing custom components break, 
// but the prompt says to keep existing functionality. Let's use clean HTML/Tailwind for the form directly 
// while binding to the existing Server Action for maximum design control, or import the existing ones.
// I will rewrite the form UI directly here to ensure it looks premium, while using the Server Action.

import FormContainer from '../Form/FormContainer';
import FormInput from '../Form/FormInput';
import Submit from '../Form/Submit';
import Description from '../Form/TextArea';

export default function Contents() {
  return (
    <section className="w-full py-24 relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm font-medium text-blue-500 uppercase tracking-widest mb-3 oswald-font">
            Contact
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Let's Make Something Awesome
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Great things start with a simple hello. Whether you're thinking about a project, need a developer, or just want to bounce around some ideas, let's connect!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Info Col */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                    <Link href="tel:+9620792504045" className="text-lg font-semibold hover:text-blue-500 transition-colors">
                      +962 079 250 4045
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                    <Link href="mailto:Mohammed.abdallah.dev@gmail.com" className="text-lg font-semibold hover:text-blue-500 transition-colors break-all">
                      Mohammed.abdallah.dev<br/>@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
                    <p className="text-lg font-semibold text-foreground">
                      Amman, Jordan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form Col */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5"
          >
            <FormContainer action={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-1">
                  <FormInput name="name" type="text" start="*" required={true} />
                </div>
                <div className="space-y-1">
                  <FormInput name="email" type="email" start="*" required={true} />
                </div>
                <div className="space-y-1">
                  <FormInput name="address" type="text" />
                </div>
                <div className="space-y-1">
                  <FormInput name="phone" type="tel" />
                </div>
                <div className="md:col-span-2 space-y-1">
                  <FormInput name="subject" type="text" start="*" required={true} />
                </div>
              </div>
              
              <div className="mb-8 space-y-1">
                <Description iD="content" label="Message Details" start="*" />
              </div>
              
              <div className="flex justify-end">
                <Submit />
              </div>
            </FormContainer>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
