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
        <div className="absolute inset-0 bg-[#075326] bg-opacity-60 z-0" />
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Become Unstoppable in 90 Days
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto">
            Set Goals, Build Habits, Master Consistency, and Transform Your Life.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            A guided journey to help you finally stay consistent in your goals, fitness, prayer, business, or personal growth.
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
            Why Do Most People Fail at Consistency?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white bg-opacity-30 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl text-black font-semibold mb-2">Starting Strong</h3>
                <p className="text-gray-900">Starting strong but quitting halfway</p>
              </div>
              <div className="bg-white bg-opacity-30 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💭</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">Motivation Only</h3>
                <p className="text-gray-900">Depending only on motivation</p>
              </div>
              <div className="bg-white bg-opacity-30 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">No System</h3>
                <p className="text-gray-900">No accountability or system</p>
              </div>
            </div>
            <p className="text-xl italic">
              &quot;We know how it feels to want change but fall back into old habits.&quot;
            </p>
          </div>
        </div>
      </section>

    
      <section className="py-20 bg-[#075326]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            The 90&ndash;Days Consistency Journey
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            A simple, structured system to help you show up daily, overcome distractions, and finally build consistency in any area of life.
          </p>

          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-[#075326] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#075326]">Month 1&#58; Build</h3>
                <p className="text-gray-600">Establish your foundation and create sustainable habits</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-[#075326] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#075326]">Month 2&#58; Strengthen</h3>
                <p className="text-gray-600">Reinforce your habits and overcome challenges</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-[#075326] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#075326]">Month 3&#58; Transform</h3>
                <p className="text-gray-600">Experience lasting transformation and inspire others</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-opacity-70 z-0 bg-[#075326]" />
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">
            What You&#39;ll Get
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-green-400">Daily Habit Tracker</h3>
              <p className="text-black">Complete templates to track your progress</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Weekly Reflection</h3>
              <p className="text-black">Accountability system to keep you on track</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Coaching & Community</h3>
              <p className="text-black">Expert guidance and supportive community</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Certificate</h3>
              <p className="text-black">Completion certificate to celebrate your achievement</p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#075326]">
            Pricing Packages
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Pick the path that matches your level of commitment.
          </p>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          
            <div className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white rounded-lg border shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6 text-center pb-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800 w-fit mx-auto mb-4">Explorer Path</div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2 text-green-600">The Explorer</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">&#8358; 3,000</div>
                <p className="text-sm text-gray-600">Begin your consistency journey today.</p>
              </div>
              <div className="p-6 pt-4">
                <ul className="space-y-3 mb-6 text-[#075326]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Unlocking consistency code training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">90&ndash;Day Consistency Journey framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Daily Check&ndash;in system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Digital Habit Tracker &#x28;printable &#43; mobile&#x29;</span>
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
                  Become An Explorer
                </button>
              </div>
            </div>

            
            <div className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-500 bg-white rounded-lg shadow-sm">
              <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="flex flex-col space-y-1.5 p-6 text-center pb-2 pt-8">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-800 w-fit mx-auto mb-4">Trailblazer Path</div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2 text-blue-600">The Trailblazer</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">&#8358;7,000</div>
                <p className="text-sm text-gray-600">Build momentum with accountability and guidance.</p>
              </div>
              <div className="p-6 pt-4">
                <p className="text-sm text-gray-600 mb-4 font-semibold">Everything in the explorer path, PLUS&#58;</p>
                <ul className="space-y-3 mb-6 text-blue-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Consistency Workbook &#x28;daily &#47; weekly templates&#x29;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Monthly live group coaching calls with Peter Achadu Abah</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Accountability Partner System</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Digital Certificate of completion &#x28;Printable&#x29;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Peter Achadu Abah&#39;s Premium ebook &quot;DO LITTLE&quot;</span>
                  </li>
                </ul>
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors"
                  onClick={() => openForm('Trailblazer Path')}
                >
                  Become A Trailblazer
                </button>
              </div>
            </div>

            
            <div className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white rounded-lg border shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6 text-center pb-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-purple-100 text-purple-800 w-fit mx-auto mb-4">Mastery Path</div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2 text-purple-600">The Master</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">&#8358;10,000</div>
                <p className="text-sm text-gray-600">Commit fully, transform deeply, and inspire others.</p>
              </div>
              <div className="p-6 pt-4">
                <p className="text-sm text-gray-600 mb-4 font-semibold">Everything in the trailblazer path, PLUS&#58;</p>
                <ul className="space-y-3 mb-6 text-purple-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Weekly Mini training Videos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">One on One Q&A sessions on call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Lifetime access to all resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Personalized mentorship</span>
                  </li>
                </ul>
                <button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors"
                  onClick={() => openForm('Mastery Path')}
                >
                  Become A Master
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
                &quot; The Consistency Mastery Class shifted my mindset about consistency. I realized it&rsquo;s not about perfection but about showing up, taking one step at a time, and repeating it until it becomes a part of you. Since then, I&rsquo;ve built discipline, sustained a consistent lifestyle, and transformed how I approach my goals.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-24  aspect-square rounded-full overflow-hidden ">
                  <Image src='/praise.jpg' alt='Gideon' className=' w-full h-full' width={100} height={100}/>
                </div>
                <div>
                  <h4 className="font-semibold text-green-500">Praise Emem</h4>
                  <p className="text-sm text-gray-500">Social Media Manager &#47; Content Strategist</p>
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
              About TransformU Hub
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              TransformU Hub is a personal development platform dedicated to helping people become the best version of themselves through Kingdom&ndash;aligned growth.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We believe that real transformation begins when you take consistent steps in the right direction. That&#39;s why we create simple, practical, and impactful programs that help you build habits, stay disciplined, and unlock your God-given potential.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From courses and coaching to mentorship and community, everything we do is designed to guide you on your journey of spiritual, personal, and professional growth.
            </p>
            <p className="text-xl font-semibold text-[#075326] mb-8">
              Our mission is clear&#58; To raise men and women who live with purpose, master their potential, and advance God&apos;s Kingdom by first transforming themselves.
            </p>
            <p className="text-lg text-[#075326] font-semibold">
              TransformU Hub &mdash; Becoming the Best Version of Yourself.
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
