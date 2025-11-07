"use client"
import React, { useEffect, useState } from 'react';
import { X, Facebook, Twitter, Youtube, Linkedin, LucideAlignLeft } from 'lucide-react';
import Link from 'next/link';

function Side() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        // Close sidebar on Escape key
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    return (
        <section>
            {/* Button to open the sidebar */}
            <button 
                onClick={() => setIsOpen(true)}
                className="fixed top-4 left-4 z-30 p-2 transition-colors"
            >
                <LucideAlignLeft />
            </button>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
                onTouchStart={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Content inside the sidebar */}
                <div className="p-8 pt-16 h-full overflow-y-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-light text-gray-800 mb-6">Let’s get in touch and share ideas.</h2>
                        <div className="w-25 h-px bg-blue-400 mb-8"></div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            I enjoy working on challenging projects and learning from creative people.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Phone */}
                        <div>
                            <h3 className="text-gray-800 font-medium mb-2">Phone</h3>
                            <Link 
                                href="tel:+9620792504045" 
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                +9620792504045
                            </Link>
                        </div>

                        {/* Email */}
                        <div>
                            <h3 className="text-gray-800 font-medium mb-2">Email</h3>
                            <Link 
                                href="mailto:Mohammed.abdallah.dev@gmail.com" 
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                Mohammed.abdallah.dev@gmail.com
                            </Link>
                        </div>

                        {/* Website */}
                        <div>
                            <h3 className="text-gray-800 font-medium mb-2">https://www.mohammed-labs.site</h3>
                            <Link
                                href="https://www.mohammed-labs.site/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                               Website
                            </Link>
                        </div>

                        {/* Address */}
                        <div>
                            <h3 className="text-gray-800 font-medium mb-2">Address</h3>
                            <p className="text-gray-600">Jordan - Amman</p>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-gray-800 font-medium mb-4">Social Links</h3>
                            <div className="flex space-x-4">
                                <Link 
                                    href="#" 
                                     target="_blank"
                                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-all duration-200"
                                >
                                    <Facebook size={20} />
                                </Link>
                                <Link 
                                    href="#" 
                                     target="_blank"
                                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-all duration-200"
                                >
                                    <Twitter size={20} />
                                </Link>
                                <Link
                                    href="#" 
                                     target="_blank"
                                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-all duration-200"
                                >
                                    <Youtube size={20} />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/mohammed-abdallah-7b2704277/" 
                                     target="_blank"
                                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-all duration-200"
                                >
                                    <Linkedin size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Side;
