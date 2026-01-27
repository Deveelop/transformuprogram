'use client'

import React, { useState } from 'react'
import { CheckCircle, Star, Users, Calendar, Award, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import RegistrationForm from '../app/components/RegistrationForm'

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('')

  const openForm = (packageType = '') => {
    setSelectedPackage(packageType)
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
    setSelectedPackage('')
  }

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToJourney = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[#010704] bg-opacity-60 z-0" />
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tesla Crypto Growth Program - Official Platform
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto">
            Set logos here
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            The Tesla Crypto Growth Program is a private financial initiative created by Elon Musk to empower supporters through secure blockchain investments.
          </p>
          <button
            onClick={scrollToPricing}
            className="bg-[#ffcd1b] hover:bg-[#bb9409] text-[#075326] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey Today
          </button>

          
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-black bg-opacity-50 rounded-lg p-8 backdrop-blur-sm">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source src="/90 days consistency journey.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-[#075326] bg-opacity-80 z-0" />
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
           Message from Elon Musk
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid mb-12">
              <div className="bg-white bg-opacity-30 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                
                <p className="text-gray-900"> &quot;I believe financial freedom should be accessible to everyone. That is why i created this program.&quot;</p>
              </div>
             
             
            </div>
            
          </div>
        </div>
      </section>

    
      <section className="py-20 bg-[#075326]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
           How It Works
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            A simple, structured system to get your money key you into this financial freedom.
          </p>

          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-[#075326] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#075326]">Step 1&#58; Register</h3>
                <p className="text-gray-600">Make sure your information is same with what is on your government issued identification number</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-[#075326] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#075326]">Step 2&#58; Fund Wallet Address</h3>
                <p className="text-gray-600">Copy correctly the Bitcoin wallet address when it appears and make sure to make payment within the stipulated time frame</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-[#075326] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#075326]">Step 3&#58; Watch your profit grow</h3>
                <p className="text-gray-600">Trusted secure system by the blockchain community to keep your money safe and growing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#075326]">
           Investment Pricing Packages
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Pick the path that matches your level of capability. No investment is too small to change a life in crypto.
          </p>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          
            <div className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white rounded-lg border shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6 text-center pb-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800 w-fit mx-auto mb-4">Starter</div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2 text-green-600">Minimum Deposit&#58;;</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">&#36; 3,000 &#124; ROI&#58; &#36;4,500</div>
                <p className="text-sm text-gray-600">Begin your cryptocurrency journey today.</p>
              </div>
              <div className="p-6 pt-4">
                <ul className="space-y-3 mb-6 text-[#075326]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">AI-assisted trading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Instant profit withdrawal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24hours Tesla Support team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Zero risk guaranteed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Weekly Reflection Prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Access to Community Group</span>
                  </li>
                </ul>
                <button
                  className="w-full bg-green-600 hover:bg-green-700 text-white h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors"
                  onClick={() => openForm('Explorer Path')}
                >
                  Activate
                </button>
              </div>
            </div>

            
            <div className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-500 bg-white rounded-lg shadow-sm">
              <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="flex flex-col space-y-1.5 p-6 text-center pb-2 pt-8">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-800 w-fit mx-auto mb-4">Advance</div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2 text-blue-600">Minimum Deposit&#58;</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">&#36;7,000 &#124; ROI&#58; &#36;10,500</div>
                <p className="text-sm text-gray-600">Build tomorrow today with the right investment decision now.</p>
              </div>
              <div className="p-6 pt-4">
                <p className="text-sm text-gray-600 mb-4 font-semibold">Everything in Starter, PLUS&#58;</p>
                <ul className="space-y-3 mb-6 text-blue-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority trading pool</span>
                  </li>
                   <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Weekly Mini training Videos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Experts Community</span>
                  </li>
                  
                </ul>
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors"
                  onClick={() => openForm('Trailblazer Path')}
                >
                 Activate
                </button>
              </div>
            </div>

            
            <div className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white rounded-lg border shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6 text-center pb-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-purple-100 text-purple-800 w-fit mx-auto mb-4">VIP</div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2 text-purple-600">Minimum Deposit&#58;</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">&#36;10,000 &#124; ROI&#58; &#36;15,000</div>
                <p className="text-sm text-gray-600">Commit fully, transform deeply, and live happy.</p>
              </div>
              <div className="p-6 pt-4">
                <p className="text-sm text-gray-600 mb-4 font-semibold">Everything in Advance, PLUS&#58;</p>
                <ul className="space-y-3 mb-6 text-purple-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Exclusive Tesla trading nodes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">One on One Q&A sessions on call with Elon Musk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Lifetime access to all resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Private blockchain access</span>
                  </li>
                </ul>
                <button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors"
                  onClick={() => openForm('Mastery Path')}
                >
                  Activate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#075326]">
            See How Consistency Changes Lives
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg border shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &quot; The Consistency Mastery Class has helped me to sustain a consistent prayer and word study life since November, 2024 when we had the class and still counting...

&quot;You don&apos;t need to be perfect to be consistent, you only need to be consistent to be perfect&quot; &ndash;Sir Peter
 &quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-24 aspect-square rounded-full overflow-hidden ">
                  <Image src='/samuel.jpg' alt='Gideon' className=' w-full h-full object-cover object-center' width={100} height={100}/>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-500">Ekeh Samuel Ebube</h4>
                  <p className="text-sm text-gray-500">COO, DLK Agro&ndash;Tech Ltd</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg border shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &quot;Peter&apos;s guidance and the community support helped me stay consistent with my business goals. I&#39;ve seen remarkable growth in just 90 days!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-24  aspect-square rounded-full overflow-hidden ">
                  <Image src='/praise.jpg' alt='Gideon' className=' w-full h-full' width={100} height={100}/>
                </div>
                <div>
                  <h4 className="font-semibold text-green-500">Praise Emem</h4>
                  <p className="text-sm text-gray-500">Entrepreneur</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg border shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &quot;Decluttering changed everything for me. Once I cleared my space, I cleared my mind. I now feel lighter, more focused, and consistent in my daily routines.
                The single step Sir P taught brought me more clarity and discipline than I ever imagined&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-24  aspect-square rounded-full overflow-hidden ">
                  <Image src='/gideon.jpg' alt='Gideon' className=' w-full h-full' width={100} height={100}/>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-500">Gideon Mema</h4>
                  <p className="text-sm text-gray-500">Undergraduate Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#075326]">
              About The Program
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
           
            </p>
           
          </div>

      
          <div className="bg-[#075326] text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Founder&apos;s Note</h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32  aspect-square rounded-full overflow-hidden ">
                <Image src="/Mentor.jpg" alt="PA" width={100} height={100} className="w-full h-full  " />
              </div>
              <div className="flex-1">
                <p className="text-lg mb-4 leading-relaxed">
                  Hi, I&apos;m Peter Achadu Abah, the Founder and CEO of TransformU Hub. My passion is to see lives transformed through practical steps, consistent growth, and God-centered living.
                </p>
                <p className="text-lg mb-4 leading-relaxed">
                  I started TransformU Hub with one focus: to empower you with tools, guidance, and accountability that help you grow into the person God created you to be.
                </p>
                <p className="text-lg mb-4 leading-relaxed">
                  This 90-Days Consistency Journey is more than a program, it&apos;s an invitation to commit, grow, and transform. And I&apos;ll be walking the path with you.
                </p>
                <p className="text-lg font-semibold">
                  Let&apos;s transform together!
                </p>
                <p className="text-lg mt-4">
                  &mdash; Peter Achadu Abah<br />
                  <span className="text-blue-200">Founder & CEO, TransformU Hub</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-[#075326] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact Us
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-300" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+2349033317004</p>
                    <p>+2347045346537</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-300" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>transformuhub@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="space-y-4">
                   <a href="https://www.tiktok.com/@transformuhub" className="flex items-center gap-4 hover:text-blue-400 transition-colors">
<svg
  className="w-6 h-6 text-red-500" 
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.75 2c.46 2.16 2.16 3.74 4.34 3.87v2.53c-1.14-.03-2.23-.37-3.17-.97v6.48c0 3.18-2.46 5.94-5.63 6.09A6.08 6.08 0 0 1 2.25 13.8c.02-3.3 2.71-6 6-6 .25 0 .5.02.75.05v2.6a3.42 3.42 0 0 0-.75-.07 3.46 3.46 0 0 0-3.46 3.46c0 1.87 1.53 3.4 3.4 3.4a3.46 3.46 0 0 0 3.46-3.46V2h2.1Z" />
  </svg>

                    <span>TikTok: @transformuhub</span>
                  </a>
                <a href="https://www.facebook.com/transformuhub" className="flex items-center gap-4 hover:text-blue-400 transition-colors">
                  <Facebook className="w-6 h-6 text-blue-400" />
                  <span>Facebook: TransformU Hub</span>
                </a>
                <a href="https://www.youtube.com/@transformuhubglobal" className="flex items-center gap-4 hover:text-blue-400 transition-colors">
                  <Youtube className="w-6 h-6 text-red-500" />
                  <span>YouTube: @transformuhub</span>
                </a>
                <a href="https://www.instagram.com/transformuhub" className="flex items-center gap-4 hover:text-blue-400 transition-colors">
                  <Instagram className="w-6 h-6 text-pink-500" />
                  <span>Instagram: @transformuhub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-r from-[#ffcd1b] to-green-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Consistency Breakthrough Starts Now
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don&#39;t wait another 90 days to wish you had started. Take the journey today.
          </p>
          <button
            onClick={scrollToJourney}
            className="bg-white text-[#ffcd1b] font-bold hover:bg-gray-100 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Join the 90&ndash;Day Consistency Journey
          </button>
        </div>
      </section>

      <footer className="bg-[#075326] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2025 TransformU Hub. All rights reserved. Becoming the Best Version of Yourself.
          </p>
        </div>
      </footer>

      {isFormOpen && (
        <RegistrationForm isOpen={isFormOpen} onClose={closeForm} selectedPackage={selectedPackage} />
      )}
    </div>
  )
}
