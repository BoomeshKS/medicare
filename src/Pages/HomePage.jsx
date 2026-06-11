import {
  HiMicrophone,
  HiVideoCamera,
  HiPhone,
  HiArrowRight,
} from "react-icons/hi";
import { 
  HiOutlineDeviceMobile, 
  HiOutlineChatAlt2, 
  HiOutlineTemplate, 
  HiOutlineClipboardList, 
  HiOutlineGlobe 
} from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";
import img from "../assets/hero-img.png";
import { useState } from "react";
import { motion } from "framer-motion";


export default function MedicareLandingPage() {

  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "About", "Services", "Blog"];

  const consultants = [
    {
      name: 'Miles',
      role: 'Medicine Specialist',
      desc: 'Offer program for post preventative care, nutrition, exercise.',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=150&h=150&q=80',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.017 12.017 0 01-4.506-4.506c-.155-.44.011-.927.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      )
    },
    {
      name: 'Nguyen',
      role: 'Gynecologist',
      desc: 'Offer program for post preventative care, nutrition, exercise.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=256&h=256&q=80',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Flores',
      role: 'Senior Orthopedics',
      desc: 'Offer program for post preventative care, nutrition, exercise.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&h=150&q=80',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    }
  ];


  const SVGIcons = {
    invert: (
      <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14v12c3.31 0 6-2.69 6-6s-2.69-6-6-6z" />
      </svg>
    ),
    hues: (
      <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 22h20L12 2zm0 4.14L18.73 18H5.27L12 6.14z" />
      </svg>
    ),
    arrow: (
      <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    ),
    sparkle: (
      <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.2L22 10l-5.6 4.8L18 22l-6-4.8L6 22l1.6-7.2L2 10l7.6-.8L12 2z" />
      </svg>
    )
  };

  const row1 = [
    { type: 'text', name: 'invert', svg: SVGIcons.invert },
    { type: 'icon', svg: SVGIcons.arrow },
    { type: 'text', name: 'hues', svg: SVGIcons.hues },
    { type: 'icon', svg: SVGIcons.sparkle },
    { type: 'text', name: 'hues', svg: SVGIcons.hues },
  ];

  const row2 = [
    { type: 'text', name: 'invert', svg: SVGIcons.invert },
    { type: 'icon', svg: SVGIcons.arrow },
    { type: 'text', name: 'invert', svg: SVGIcons.invert },
    { type: 'icon', svg: SVGIcons.arrow },
    { type: 'text', name: 'invert', svg: SVGIcons.invert },
    { type: 'icon', svg: SVGIcons.arrow },
  ];

  const checklistItems = [
    'Personalized Health Assessments',
    'Patient Education',
    'Integration with Pharmacy Services',
    'Virtual Health Assistant',
    'Emergency Contact Feature',
    'Health Tracking',
  ];


  const footerLinks = [
    {
      title: 'Company',
      links: ['Press Relations', 'Fellowships', 'Corporate Health', 'Clinical Lab Sourcing', 'Team Management', 'Insights and Sourcing'],
    },
    {
      title: 'Features',
      links: ['Primary Care', 'Telehealth', 'Dermatology', 'Additional Health Services', 'Appointments', 'Billing'],
    },
    {
      title: 'Solutions',
      links: ['Care Centers', 'Health Bridge', 'Siri & Jim', 'General Medical', 'Health Collaborations'],
    },
    {
      title: 'For Consultants',
      links: ['Become a partner', 'Partner community', 'Consultant Dashboard', 'Doctor Advisors', 'Consultant Blog', 'Resources'],
    },
  ];


  // Motion Framework Variants for Animations


  const smoothTransition = { duration: 2, ease: [0.16, 1, 0.3, 1] };

  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: smoothTransition }
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: smoothTransition }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (idx) => ({
      opacity: 1,
      y: 0,
      transition: {
        ...smoothTransition,
        delay: idx * 0.12, 
      }
    })
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: smoothTransition }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 15 },
    visible: (customIndex) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        ...smoothTransition,
        delay: customIndex * 0.05
      }
    })
  };

  const premiumTransition = { duration: 0.85, ease: [0.16, 1, 0.3, 1] };

  const cardVariants1 = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: premiumTransition 
    }
  };

  const containerVariants1 = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: smoothTransition }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 1.2 } }
  };

  const boldText = "Patients can consult with healthcare providers from the comfort of their homes,";
  const regularText = "eliminating travel time and costs.Reduced waiting times";

  const leftSideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: smoothTransition }
  };

  const rightSideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: smoothTransition }
  };

  const bannerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: smoothTransition }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { ...smoothTransition, delay: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: smoothTransition }
  };


  return (
    <div className="min-h-screen w-full bg-[#f8f8f8]">
  

      {/* nav & hero section */}
      <section className="w-full min-h-screen bg-white">

        <nav className="h-[90px] md:h-[100px] w-full flex items-center justify-between px-6 sm:px-8 lg:px-12 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] sticky top-0 z-50">

          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 z-50">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0">
              <span
                className="relative text-white font-black text-2xl sm:text-3xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                M
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Medicare
            </h1>
          </div>

          {/* Desktop Menu Links */}
          <ul className="hidden lg:flex gap-10 xl:gap-14 text-gray-700 font-semibold">
            {menuItems.map((item) => (
              <li
                key={item}
                className="relative cursor-pointer transition-all duration-300 hover:text-purple-500
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                after:bg-purple-500 after:transition-all after:duration-300
                hover:after:w-full text-base"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Right Account Actions (Desktop/Tablet) */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center gap-4 sm:gap-6">
              <button className="text-black font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer hover:scale-105 text-xs sm:text-sm">
                Register
              </button>

              <button
                className="bg-black text-white font-bold px-5 py-2 sm:px-6 sm:py-2.5 rounded-full flex items-center gap-2 sm:gap-3 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(168,85,247,0.35)] hover:-translate-y-1 group cursor-pointer"
              >
                <span className="tracking-wide text-xs sm:text-sm">Contact Us</span>

                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center transition-all duration-500 group-hover:rotate-45 flex-shrink-0"
                >
                  <HiArrowRight className="text-black text-xs sm:text-sm" />
                </div>
              </button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-900 focus:outline-none z-50"
              aria-label="Toggle Menu"
            >
              <div className="w-6 flex flex-col gap-1.5 justify-center items-end">
                <span className={`h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                <span className={`h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
                <span className={`h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
              </div>
            </button>
          </div>

        </nav>

        {/* Mobile Responsive Menu */}
        <div 
          className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div 
          className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-40 shadow-2xl lg:hidden transition-transform duration-300 ease-out transform pt-28 px-8 flex flex-col justify-between pb-10 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-6 text-gray-800 text-lg font-bold">
            {menuItems.map((item) => (
              <li 
                key={item}
                onClick={() => setIsOpen(false)}
                className="border-b border-gray-50 pb-2 cursor-pointer hover:text-purple-500 transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:hidden">
            <button className="w-full text-center py-3 text-black font-bold tracking-wider uppercase text-sm border border-gray-200 rounded-full">
              Register
            </button>
            <button className="w-full bg-black text-white font-bold py-3.5 rounded-full flex items-center justify-center gap-3 text-sm">
              <span>Contact Us</span>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <HiArrowRight className="text-black text-xs" />
              </div>
            </button>
          </div>
        </div>
        

        {/* Hero Section */}

        <div className="flex flex-col lg:flex-row gap-6 px-6 pt-6 pb-6 min-h-[calc(100vh-100px)]">

          <motion.div 
            initial="initial"
            animate="animate"
            variants={containerVariants}
            className="relative w-full lg:w-[60%] rounded-[40px] bg-gradient-to-br from-[#fff0f1] via-[#f8d6e3] to-[#e8a4eb] overflow-hidden min-h-[500px] lg:min-h-0"
          >
            <div className="h-full flex flex-col items-center justify-center text-center px-6 lg:px-10 py-20 lg:py-0">

              <motion.div 
                variants={fadeInUp}
                className="absolute top-6 max-w-[90%] border border-gray-300/60 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-gray-700 text-xs lg:text-sm font-medium tracking-wide"
              >
                Trusted Healthcare Solutions For Better Treatment, Faster Recovery & Complete Wellness Care
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-[60px] lg:leading-[72px] font-bold text-[#111827] max-w-[800px] mt-16 lg:mt-8"
              >
                Get Premium<br />Medical Care<br />For Your Best<br />Health
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-gray-600 max-w-[520px] mt-8 text-base lg:text-lg leading-8"
              >
                Exclusive and reliable medical services designed to help
                you maintain a healthy lifestyle with trusted professionals.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <button
                  className="mt-10 bg-gradient-to-r from-[#d8b8ff] via-[#7b2ff7] via-[8%] to-[#7b2ff7] text-white px-6 py-2 rounded-full flex items-center gap-4 shadow-xl transition-all duration-500 hover:scale-102 hover:shadow-[0_15px_35px_rgba(123,47,247,0.45)] cursor-pointer"
                  style={{ backgroundSize: "200% 100%" }}
                >
                  Make Appointment
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <HiArrowRight className="text-[#7b2ff7]" />
                  </div>
                </button>
              </motion.div>
            </div>

            {/* Bottom Left Users Avatar Entry */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...smoothTransition, delay: 0.5 }}
              className="absolute bottom-8 left-5 hidden sm:flex items-center"
            >
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" alt="" className="w-12 h-12 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=2" alt="" className="w-12 h-12 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=3" alt="" className="w-12 h-12 rounded-full border-2 border-white" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-lg text-gray-900">4000+ Customers</h3>
                <p className="text-gray-500 text-xs">Trusted By People Worldwide</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ==================== RIGHT BLOCK ==================== */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeInScale}
            className="relative w-full lg:w-[40%] rounded-[40px] bg-gradient-to-r from-[#dcd7f0] to-[#d9e7f8] overflow-hidden min-h-[500px] lg:min-h-0"
          >
            {/* Doctor Image Base Layer */}
            <img
              src={img}
              alt="doctor"
              className="w-full h-full object-cover"
            />

            {/* Floating Interactive Widget Group Container */}
            <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex flex-col gap-3 z-20">
              
              {/* Top Floating Mini Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20, x: 40 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="ml-20 w-[180px] bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ede9fe] flex items-center justify-center">
                    <HiMicrophone className="text-purple-500 text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">MediCare</h4>
                    <p className="text-xs text-gray-400">Connected</p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Floating Incoming Call Notification Panel */}
              <motion.div 
                initial={{ opacity: 0, y: 30, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
                className="w-[260px] bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/100?img=12" alt="" className="w-10 h-10 rounded-full" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Calling</h4>
                      <p className="text-xs text-gray-400">Connecting...</p>
                    </div>
                  </div>
                  <BsCheckLg className="text-gray-400 text-lg" />
                </div>
              </motion.div>
            </div>

            {/* Action Controls Overlay Dock (Microphone, Hang up, Camera) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-5 z-20"
            >
              <button className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
                <HiMicrophone className="text-xl text-gray-800" />
              </button>
              <button className="w-16 h-16 rounded-full bg-red-500 text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
                <HiPhone className="text-2xl" />
              </button>
              <button className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
                <HiVideoCamera className="text-xl text-gray-800" />
              </button>
            </motion.div>

          </motion.div>
        </div>

      </section>


      {/* Features Section */}
      <section className="w-full bg-white py-20 px-6 sm:px-10 lg:px-16 border-t border-gray-100 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="max-w-7xl mx-auto"
        >
          
          <div className="text-center mb-16">
            <motion.span 
              variants={headingVariants}
              className="text-xs font-bold text-purple-600 tracking-widest uppercase block mb-3"
            >
              Features
            </motion.span>
            <motion.h2 
              variants={headingVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight max-w-2xl mx-auto leading-tight"
            >
              Discover Our Benefits & Features
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 max-w-7xl mx-auto px-4">
      
            {/* Card 1: Mobile Health Apps */}
            <motion.div 
              custom={0}
              variants={cardVariants}
              className="bg-[#F8F9FC] rounded-[24px] pt-10 px-8 lg:px-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col justify-between h-[520px] overflow-hidden border border-gray-100/50"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center text-white mb-6 shadow-sm">
                  <HiOutlineDeviceMobile className="w-5 h-5" />
                </div>
                <h3 className="text-xl lg:text-[23px] font-bold text-[#111827] tracking-tight mb-3 leading-snug">
                  Mobile Health Apps: Tools for patients to track symptoms, medications
                </h3>
                <p className="text-[#6B7280] text-[13.5px] leading-relaxed max-w-md font-medium opacity-85">
                  Tools for patients to track symptoms, medications, and appointments, promoting self-management and engagement.
                </p>
              </div>

              {/* Real-sized Mobile Phone Mockup */}
              <div className="mt-6 flex justify-center w-full relative">
                <div className="w-[280px] bg-white rounded-t-[36px] border-t-[8px] border-x-[8px] border-[#111827] h-60 pt-3 px-5 relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex flex-col">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#111827] rounded-b-xl z-20"></div>
                  
                  <div className="flex justify-between items-center text-[10px] font-bold text-gray-800 px-1 mt-1 mb-4 z-10">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-end gap-[1px] h-2">
                        <div className="w-[2px] h-[3px] bg-gray-800 rounded-2xs"></div>
                        <div className="w-[2px] h-[5px] bg-gray-800 rounded-2xs"></div>
                        <div className="w-[2px] h-[7px] bg-gray-800 rounded-2xs"></div>
                        <div className="w-[2px] h-[9px] bg-gray-300 rounded-2xs"></div>
                      </div>
                      <div className="w-4 h-2.5 border border-gray-800 rounded-[3px] p-[1px] flex items-center">
                        <div className="w-full h-full bg-gray-800 rounded-[1px]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4 px-1">
                    <div>
                      <h4 className="text-[15px] font-black text-gray-900 tracking-tight">Hi, Madhu</h4>
                      <p className="text-[10px] text-gray-400 font-medium">Welcome Back 👋</p>
                    </div>
                    <button className="text-gray-700 hover:text-black">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex gap-3 items-stretch relative">
                    <div className="bg-[#7C3AED] rounded-2xl p-3.5 text-white w-full shadow-lg relative overflow-hidden flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-semibold opacity-75 mb-1.5">Appointment</p>
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-3.5 h-3.5 opacity-90" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                          <span className="text-xs font-bold tracking-tight">7 October 2026</span>
                        </div>
                      </div>
                      <div className="bg-white/15 backdrop-blur-sm rounded-xl py-2 px-3 text-[10px] flex justify-between items-center font-medium border border-white/10">
                        <span>09:00 AM - 10:15 AM</span>
                        <div className="w-4 h-4 bg-white text-[#7C3AED] rounded-full flex items-center justify-center shadow-xs">
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-6 bg-[#10B981] rounded-l-2xl shrink-0 shadow-md"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Secure Messaging Systems */}
            <motion.div 
              custom={1}
              variants={cardVariants}
              className="bg-[#F8F9FC] rounded-[24px] pt-10 px-8 lg:px-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col justify-between h-[520px] overflow-hidden border border-gray-100/50"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center text-white mb-6 shadow-sm">
                  <HiOutlineChatAlt2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl lg:text-[23px] font-bold text-[#111827] tracking-tight mb-3 leading-snug">
                  Secure Messaging Systems: HIPAA-compliant platforms
                </h3>
                <p className="text-[#6B7280] text-[13.5px] leading-relaxed max-w-md font-medium opacity-85">
                  HIPAA-compliant platforms that allow patients and providers to communicate securely.
                </p>
              </div>

              {/* Messaging Interface Mockup */}
              <div className="mt-6 w-full relative h-60 flex justify-end">
                <div className="absolute right-[-40px] bottom-0 w-[240px] bg-white rounded-t-2xl border-t border-l border-gray-200/60 h-44 p-4 opacity-40 pointer-events-none hidden sm:block">
                  <div className="bg-[#1B80E4] w-2/3 h-6 rounded-xl ml-auto mb-2"></div>
                  <div className="bg-gray-100 w-3/4 h-6 rounded-xl mb-2"></div>
                </div>

                <div className="w-full max-w-[340px] sm:mr-10 bg-white rounded-t-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-t border-x border-gray-100 p-4 font-sans flex flex-col gap-4 relative z-10">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-gray-50">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=64&q=80" alt="Dr. Thomas" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-[11.5px] font-bold text-gray-800 leading-none">Dr. Thomas</h5>
                      <span className="text-[9px] text-green-500 font-semibold">Active</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end w-full">
                    <div className="bg-[#1B80E4] text-white text-[11px] font-medium py-2 px-3.5 rounded-2xl rounded-tr-none max-w-[85%] shadow-xs">
                      Hi, Dr. Thomas 👋
                    </div>
                    <span className="text-[8px] text-gray-400 mt-1 mr-1">09:41</span>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <div className="bg-[#F3F4F6] text-gray-800 text-[11px] font-medium py-2 px-3.5 rounded-2xl rounded-tl-none max-w-[85%]">
                      Hi Juan, how can I help you?
                    </div>
                    <span className="text-[8px] text-gray-400 mt-1 ml-1">09:42</span>
                  </div>

                  <div className="flex flex-col items-end w-full">
                    <div className="bg-[#1B80E4] text-white text-[11px] font-medium py-2 px-3.5 rounded-2xl rounded-tr-none max-w-[85%] shadow-xs leading-normal">
                      Thank you, My reason for this visit is that I'm not so good. Feeling dynamic chills...
                    </div>
                    <span className="text-[8px] text-gray-400 mt-1 mr-1">09:43</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          <motion.div 
            custom={2}
            variants={cardVariants}
            className="bg-[#F8F9FC] rounded-[24px] p-8 lg:p-12 border border-gray-100/50 shadow-[0_10px_40px_rgba(0,0,0,0.08)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8 max-w-[1500px] mx-auto"
          >
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-full bg-[#6366F1] flex items-center justify-center text-white mb-6 shadow-xs">
                <HiOutlineTemplate className="w-5 h-5" />
              </div>
              <h3 className="text-2xl lg:text-[26px] font-bold text-[#111827] tracking-tight mb-3.5 leading-tight">
                Personal Health Dashboard & Appointment Booking System
              </h3>
              <p className="text-[#6B7280] text-[13.5px] leading-relaxed font-medium opacity-85 max-w-sm">
                Track vital signs, medications, and health metrics in one place. Easily schedule, reschedule, or cancel appointments.
              </p>
            </div>
              
            <div className="lg:col-span-7 flex flex-col sm:flex-row gap-5 items-stretch w-full">
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.02)] border border-gray-100/70 relative min-h-[270px] flex flex-col justify-between">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[13px] font-bold text-gray-800 tracking-tight">Important Status</span>
                  <button className="text-[11px] text-gray-400 font-semibold px-3 py-1 border border-gray-200/80 rounded-xl flex items-center gap-1 hover:bg-gray-50">
                    Weekly
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <div className="relative w-full h-44 mt-4 flex flex-col justify-between select-none">
                  <div className="absolute inset-0 flex flex-col justify-between text-[10px] font-bold text-gray-300/70 pointer-events-none pb-5">
                    <div className="w-full flex items-center gap-3.5"><span className="w-4 text-right">40</span><div className="flex-1 border-b border-dashed border-gray-100/70"></div></div>
                    <div className="w-full flex items-center gap-3.5"><span className="w-4 text-right">30</span><div className="flex-1 border-b border-dashed border-gray-100/70"></div></div>
                    <div className="w-full flex items-center gap-3.5"><span className="w-4 text-right">20</span><div className="flex-1 border-b border-dashed border-gray-100/70"></div></div>
                    <div className="w-full flex items-center gap-3.5"><span className="w-4 text-right">10</span><div className="flex-1 border-b border-dashed border-gray-100/70"></div></div>
                    <div className="w-full flex items-center gap-3.5"><span className="w-4 text-right">0</span><div className="flex-1 border-b border-gray-100/70"></div></div>
                  </div>

                  <div className="absolute inset-x-0 bottom-5 top-1 left-8 right-2 z-10">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M 0 88 C 30 87, 70 80, 100 40" fill="none" stroke="#E5E7EB" strokeWidth="3" strokeDasharray="5,4" strokeLinecap="round" />
                      <path d="M 0 80 C 25 78, 55 60, 100 15" fill="none" stroke="#6366F1" strokeWidth="3.5" strokeDasharray="6,4" strokeLinecap="round" />
                      <line x1="56" y1="56" x2="56" y2="100" stroke="#6366F1" strokeWidth="2" strokeDasharray="3,3" opacity="0.8" />
                      <ellipse cx="56" cy="56" rx="4.5" ry="2.5" fill="#6366F1" />
                    </svg>

                    <div className="absolute top-[28%] left-[44%] -translate-x-1/2 -translate-y-1/2 bg-[#6366F1] text-[10px] font-bold text-white px-3.5 py-1.5 rounded-xl shadow-md whitespace-nowrap flex flex-col items-center z-20">
                      Glucose Level
                      <div className="w-1.5 h-1.5 bg-[#6366F1] rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2"></div>
                    </div>
                  </div>

                  <div className="w-full flex justify-between text-[10px] font-bold text-gray-400/70 pl-8 pr-2 mt-auto z-10">
                    <span>2008</span><span>2012</span><span>2016</span><span>2020</span><span>2024</span>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-44 bg-white rounded-2xl p-5 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.02)] border border-gray-100/70 flex flex-col justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gray-100 overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" alt="Allen" className="w-full h-full object-cover" />
                  </div>
                  <div className="leading-none">
                    <h4 className="text-[12px] font-bold text-gray-800">Allen</h4>
                    <p className="text-[9.5px] text-gray-400 font-semibold mt-0.5">Developer</p>
                  </div>
                </div>

                <div className="my-4">
                  <p className="text-[12px] font-bold text-gray-900 tracking-tight leading-tight">#Medical checkup</p>
                  <p className="text-[9.5px] text-gray-400 font-medium mt-1">Track</p>
                  <p className="text-[9.5px] text-gray-400 font-medium">Status</p>
                </div>

                <div className="flex gap-[3px] items-center h-8 justify-between w-full px-0.5 pt-1">
                  <div className="w-[2px] bg-gray-100 h-2 rounded-full"></div>
                  <div className="w-[2px] bg-[#6366F1] h-4 rounded-full"></div>
                  <div className="w-[2px] bg-gray-100 h-1 rounded-full"></div>
                  <div className="w-[2px] bg-gray-200 h-3 rounded-full"></div>
                  <div className="w-[2px] bg-[#6366F1] h-5 rounded-full"></div>
                  <div className="w-[2px] bg-gray-100 h-2 rounded-full"></div>
                  <div className="w-[2px] bg-gray-300 h-4 rounded-full"></div>
                  <div className="w-[2px] bg-[#6366F1] h-6 rounded-full"></div>
                  <div className="w-[2px] bg-gray-200 h-3 rounded-full"></div>
                  <div className="w-[2px] bg-gray-100 h-1 rounded-full"></div>
                  <div className="w-[2px] bg-[#6366F1] h-4 rounded-full"></div>
                  <div className="w-[2px] bg-gray-200 h-2 rounded-full"></div>
                  <div className="w-[2px] bg-gray-100 h-0.5 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        
            <motion.div 
              custom={3}
              variants={cardVariants}
              className="bg-[#F8F9FC] rounded-[24px] pt-10 px-8 flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.08)] justify-between h-[300px] overflow-hidden border border-gray-100/50"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#6366F1] flex items-center justify-center text-white mb-5 shadow-xs">
                  <HiOutlineClipboardList className="w-5 h-5" />
                </div>
                <h4 className="text-[17px] font-bold text-[#111827] tracking-tight mb-2 leading-snug">
                  Online Prescription Services: Facilitate easy ordering
                </h4>
              </div>

              <div className="relative h-28 w-full flex justify-center mt-auto">
                <div className="absolute bottom-[-10px] left-[15%] w-32 h-28 bg-[#F3F4F6] rounded-t-xl border border-gray-200/70 -rotate-[12deg] origin-bottom-left z-0">
                  <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-10 h-5 bg-[#3B82F6] rounded-t-md flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full border-2 border-white/40"></div>
                  </div>
                </div>

                <div className="absolute bottom-[-5px] right-[15%] w-[136px] h-32 bg-white rounded-t-xl border border-gray-100 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] z-10">
                  <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-11 h-5.5 bg-[#3B82F6] rounded-t-md flex items-center justify-center shadow-xs">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-white/50"></div>
                  </div>
                  <div className="mt-8 px-4 space-y-2">
                    <div className="h-1.5 w-full bg-gray-100 rounded-sm"></div>
                    <div className="h-1.5 w-5/6 bg-gray-100 rounded-sm"></div>
                    <div className="h-1.5 w-2/3 bg-gray-50 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              custom={4}
              variants={cardVariants}
              className="bg-[#F8F9FC] rounded-[24px] pt-10 px-8 flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.08)] justify-between h-[300px] overflow-hidden border border-gray-100/50"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#6366F1] flex items-center justify-center text-white mb-5 shadow-xs">
                  <HiOutlineGlobe className="w-5 h-5" />
                </div>
                <h4 className="text-[17px] font-bold text-[#111827] tracking-tight mb-2 leading-snug">
                  Online global service we provide from any country
                </h4>
              </div>

              <div className="w-full flex flex-col items-center mt-auto pb-4 relative">
                <div className="w-full max-w-[190px] bg-white border border-gray-100/80 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.06)] rounded-2xl p-3 flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-gray-100 relative">
                      <svg className="w-full h-full scale-110 object-cover" viewBox="0 0 741 390">
                        <rect width="741" height="390" fill="#b22234"/>
                        <path d="M0,0H741V30H0V60H741V90H0V120H741V150H0V180H741V210H0V240H741V270H0V300H741V330H0V360H741V390" stroke="#fff" strokeWidth="30"/>
                        <rect width="296" height="210" fill="#3c3b6e"/>
                      </svg>
                    </div>
                    <span className="text-[13px] font-bold text-gray-800 tracking-tight">USA</span>
                  </div>
                  <svg className="w-3.5 h-3.5 text-gray-400 font-bold" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                <div className="w-full max-w-[175px] bg-white/70 border border-gray-100/50 rounded-b-xl p-2.5 flex items-center gap-3 mt-[-4px] opacity-50 z-0">
                  <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 flex flex-col justify-between">
                    <div className="h-1/3 bg-black"></div>
                    <div className="h-1/3 bg-red-600"></div>
                    <div className="h-1/3 bg-yellow-400"></div>
                  </div>
                  <span className="text-[11px] font-bold text-gray-700">Germany</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              custom={5}
              variants={cardVariants}
              className="bg-[#F5D6FF] rounded-[24px] p-8 flex flex-col justify-between h-[300px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-radial from-transparent via-white/5 to-purple-600/5 pointer-events-none" />
              <div className="mt-4">
                <h4 className="text-[21px] font-extrabold text-[#111827] tracking-tight leading-snug max-w-[180px]">
                  Explore our more amazing services
                </h4>
              </div>
              
              <div>
                <button className="w-fit bg-gradient-to-r from-[#6366F1] to-[#7C3AED] hover:from-[#4F46E5] hover:to-[#6D28D9] text-white rounded-full py-2.5 pl-5 pr-2.5 text-[13px] font-bold flex items-center gap-4 transition-all shadow-[0_10px_20px_-6px_rgba(99,102,241,0.35)] cursor-pointer">
                  <span className="tracking-tight">Explore more</span>
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-xs transition-transform group-hover:rotate-45">
                    <svg className="w-3.5 h-3.5 text-[#6366F1]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </button>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </section>

      {/* Companies we work with section */}
      <section className="w-full bg-white py-32 px-6 flex flex-col items-center justify-center font-sans overflow-hidden">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-7xl flex flex-col items-center justify-center"
        >
          
          <motion.div variants={headerVariants} className="max-w-4xl text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-6">
              Trusted by 100+ Global top company <br /> connect with us
            </h2>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
              Brands can participate in health awareness campaigns, better aligning their values.
            </p>
          </motion.div>

          <div className="w-full flex flex-col gap-5 items-center justify-center">
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5">
              {row1.map((brand, idx) => (
                <motion.div
                  key={`row1-${idx}`}
                  custom={idx} // Used to calculate stagger delay
                  variants={pillVariants}
                  className={`flex items-center justify-center bg-gray-50/80 border border-gray-200/60 rounded-2xl transition-all duration-300 hover:bg-gray-100/90 hover:scale-[1.02] ${
                    brand.type === 'text' 
                      ? 'w-44 h-16 sm:w-48 sm:h-18 md:w-56 md:h-20 px-6' 
                      : 'w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {brand.svg}
                    {brand.type === 'text' && (
                      <span className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800 tracking-tight lowercase">
                        {brand.name}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5">
              {row2.map((brand, idx) => (
                <motion.div
                  key={`row2-${idx}`}
                  custom={row1.length + idx} 
                  variants={pillVariants}
                  className={`flex items-center justify-center bg-gray-50/80 border border-gray-200/60 rounded-2xl transition-all duration-300 hover:bg-gray-100/90 hover:scale-[1.02] ${
                    brand.type === 'text' 
                      ? 'w-44 h-16 sm:w-48 sm:h-18 md:w-56 md:h-20 px-6' 
                      : 'w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {brand.svg}
                    {brand.type === 'text' && (
                      <span className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800 tracking-tight lowercase">
                        {brand.name}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </section>

      {/* Collaboration Section */}
      <section className="w-full bg-white pt-8 pb-32 px-6 flex flex-col items-center justify-center font-sans overflow-hidden">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={containerVariants}
          className="w-full max-w-7xl flex flex-col items-center justify-center"
        >
          
          <motion.div variants={headerVariants} className="max-w-4xl text-center mb-28">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Collaborate with our best <br /> consultant by online
            </h2>
          </motion.div>

          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20 items-center justify-center px-4">
            {consultants.map((consultant, index) => (
              <motion.div 
                key={index}
                variants={cardVariants1}
                className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white border border-gray-200/70 rounded-[2.5rem] rounded-tr-[4.5rem] pt-20 pb-12 px-10 flex flex-col justify-between min-h-[440px] hover:shadow-xl hover:shadow-gray-100 transition-all duration-300"
              >
                
                <div className="absolute -top-12 left-8 z-10">
                  <div className="w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden shadow-sm">
                    <img 
                      src={consultant.image} 
                      alt={consultant.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -top-[1px] -right-[1px] w-28 h-28 bg-white rounded-bl-[2.5rem] flex items-start justify-end pl-4 pb-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-gray-100/60 shadow-sm mr-2 mt-2">
                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM14 10a2 2 0 11-4 0 2 2 0 014 0zM22 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex-grow">
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">
                    {consultant.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-semibold tracking-wide mb-6 uppercase">
                    {consultant.role}
                  </p>
                  <p className="text-gray-500 text-lg font-normal leading-relaxed max-w-[280px]">
                    {consultant.desc}
                  </p>
                </div>

                <div className="mt-10">
                  <button className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200/80 hover:opacity-95 transition-all hover:scale-105">
                    {consultant.icon}
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Make a schedule section */}
      <section className="w-full bg-white pb-36 px-6 flex flex-col items-center justify-center font-sans overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants1}
          className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center"
        >
        <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-gray-400 leading-[1.3] max-w-8xl mb-20">
          <span className="text-gray-900 font-bold">
            {boldText.split(" ").map((word, idx) => (
              <motion.span
                key={`b-${idx}`}
                variants={wordVariants}
                className="inline-block mr-[0.28em]"
              >
                {word}
              </motion.span>
            ))}
          </span>

          {regularText.split(" ").map((word, idx) => (
            <motion.span
              key={`r-${idx}`}
              variants={wordVariants}
              className="inline-block mr-[0.28em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

          <motion.button 
            variants={buttonVariants}
            className="group relative flex items-center justify-between pl-12 pr-4 py-4 bg-gradient-to-r from-purple-400 via-indigo-500 to-indigo-600 rounded-full shadow-2xl shadow-indigo-100/90 transition-all duration-300 hover:scale-[1.03] hover:opacity-95 min-w-[280px] sm:min-w-[320px] h-20"
          >
            <span className="text-white font-bold text-lg sm:text-xl tracking-wide mr-8">
              Make a schedule
            </span>
            
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm group-hover:translate-x-1 transition-transform">
              <svg 
                className="w-6 h-6 sm:w-7 sm:h-7" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </motion.button>

        </motion.div>
      </section>

      {/* map and additional content section */}
      <section className="w-full bg-white pb-16 px-6 sm:px-12 md:px-16 flex flex-col items-center justify-center font-sans overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-stretch justify-center"
        >
          
          <motion.div 
            variants={leftSideVariants}
            className="relative bg-[#f6f5f0] border border-gray-100 rounded-[2.5rem] min-h-[480px] lg:min-h-[540px] overflow-hidden shadow-inner flex items-center justify-center"
          >
            <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
              <div className="absolute top-0 bottom-0 left-[30%] w-[2px] bg-yellow-400/70 rotate-12" />
              <div className="absolute top-0 bottom-0 left-[65%] w-[4px] bg-yellow-500/50 -rotate-45" />
              <div className="absolute left-0 right-0 top-[40%] h-[2px] bg-gray-300" />
              <div className="absolute left-0 right-0 top-[75%] h-[3px] bg-gray-300 -rotate-6" />
              <div className="absolute left-[15%] right-0 top-0 bottom-0 border-l-[40px] border-gray-200/40 -rotate-12" />
            </div>

            <div className="absolute top-16 right-24 w-12 h-12 rounded-full border-2 border-white bg-white overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&h=120&q=80" alt="Doctor" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-36 left-12 w-12 h-12 rounded-full border-2 border-white bg-white overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&h=120&q=80" alt="Doctor" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-10 left-[45%] w-14 h-14 rounded-full border-2 border-blue-500 bg-white overflow-hidden p-0.5 shadow-lg">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120&h=120&q=80" alt="Doctor" className="w-full h-full object-cover rounded-full" />
            </div>

            <div className="relative z-10 w-full max-w-[320px] bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/80 border border-gray-100">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-50 border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&h=120&q=80" alt="Dr. Alvado" className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 text-base leading-tight">Dr. Alvado</h4>
                  <p className="text-gray-400 text-xs font-medium">Psychiatrist</p>
                  <div className="flex items-center gap-1 mt-1 text-amber-500">
                    <span className="text-xs">★</span>
                    <span className="text-xs font-bold text-gray-700">4.7</span>
                  </div>
                </div>
                <button className="text-gray-300 hover:text-gray-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 10a2 2 0 11-4 0 2 2 0 014 0zM12 18a2 2 0 11-4 0 2 2 0 014 0zM12 2c0 1.1.9 2 2 2a2 2 0 11-2-2z"/></svg>
                </button>
              </div>

              <div className="space-y-2 border-t border-b border-gray-50 py-3 mb-4">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                  <span className="text-gray-400 text-sm">👤</span> Biaya Konsultasi
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm">🕒</span> Alur Rekomendasi
                  </div>
                  <span className="font-bold text-gray-900 text-xs bg-gray-50 px-2 py-0.5 rounded">IDR 80K</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex-grow bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs py-3 rounded-xl transition-colors shadow-md shadow-indigo-100">
                  Mulai Konsultasi
                </button>
                <button className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={rightSideVariants}
            className="bg-gradient-to-br from-gray-100 via-gray-50 to-white border border-gray-200/70 rounded-[2.5rem] p-10 sm:p-14 shadow-xl"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 to-indigo-500 shadow-md shadow-indigo-100 mb-6" />

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Additional Medical Features
            </h3>

            <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-xl font-normal">
              Offer programs focused on preventative care, nutrition, exercise, and mental health, compliance monitoring and progress reports.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-12">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm font-medium tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <button className="group flex items-center gap-4 bg-gradient-to-r from-purple-500 to-indigo-600 px-5 cursor-pointer py-3.5 rounded-full shadow-lg shadow-indigo-100/80 transition-all duration-300 hover:scale-[1.02] hover:opacity-95 text-white font-semibold text-sm">
                Read More
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </button>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Make a schedule section */}
      <section className="w-full bg-white py-24 px-6 sm:px-12 md:px-16 flex flex-col items-center justify-center font-sans overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={bannerVariants}
          className="relative w-full max-w-7xl min-h-[520px] rounded-[3rem] flex flex-col items-center justify-center text-center p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >      
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
            
            <motion.h2 
              variants={textVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.25] mb-12 max-w-5xl drop-shadow-sm"
            >
              Bring your customer services the next level of excellence.
            </motion.h2>

            <motion.button 
              variants={buttonVariants}
              className="group relative flex items-center justify-between pl-8 pr-2 py-2 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-[1.04] hover:shadow-xl min-w-[240px] sm:min-w-[260px] h-14 sm:h-16"
            >
              <span className="text-indigo-600 font-bold text-sm sm:text-base tracking-wide mr-6">
                Make a schedule
              </span>
              
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-sm group-hover:translate-x-0.5 transition-transform">
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.button>

          </div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#111214] text-gray-400 pt-24 pb-12 px-6 sm:px-12 md:px-16 font-sans overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="w-full max-w-7xl mx-auto flex flex-col"
        >
          
          <motion.div variants={itemVariants} className="w-full flex flex-col md:flex-row items-start md:items-center justify-between pb-16 border-b border-gray-800/60 gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Let's Connect with us
            </h2>
            
            <div className="flex items-center gap-4 flex-wrap">
              <button className="flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-indigo-600 rounded-full text-white font-semibold text-sm shadow-lg shadow-indigo-900/30 transition-all hover:scale-[1.02] hover:opacity-95">
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              
              <button className="flex items-center gap-3 px-8 py-3.5 bg-transparent border border-gray-700 hover:border-gray-500 rounded-full text-white font-semibold text-sm transition-colors">
                Contact Us
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </motion.div>

          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 py-20">
            
            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col justify-between gap-10">
              <div>
                <div className="flex items-center gap-3 text-white mb-8">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-sm text-white">
                    M
                  </div>
                  <span className="font-bold text-2xl tracking-tight">Medicare</span>
                </div>

                <p className="text-gray-200 text-sm font-semibold mb-4 tracking-wide">
                  Subscribe our newsletter for update
                </p>
                
                <div className="relative flex items-center w-full max-w-sm h-14 bg-[#1a1b1e] border border-gray-800 rounded-full p-1.5 focus-within:border-gray-700 transition-colors">
                  <input 
                    type="email" 
                    placeholder="Enter your email address..." 
                    className="w-full bg-transparent pl-4 pr-32 text-sm text-gray-300 placeholder-gray-600 focus:outline-none"
                  />
                  <button className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-gradient-to-r from-purple-400 to-indigo-500 hover:opacity-95 rounded-full text-white font-medium text-xs flex items-center gap-2 transition-all">
                    Book a Demo
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <a href="#apple" className="bg-[#1a1b1e] border border-gray-800 hover:border-gray-700 transition-colors px-4 py-2 rounded-xl flex items-center gap-2.5">
                  <span className="text-xl text-white"></span>
                  <div className="text-left leading-none">
                    <span className="text-[9px] text-gray-500 block uppercase font-bold tracking-wider">Download on the</span>
                    <span className="text-xs text-white font-bold tracking-tight">App Store</span>
                  </div>
                </a>
                <a href="#google" className="bg-[#1a1b1e] border border-gray-800 hover:border-gray-700 transition-colors px-4 py-2 rounded-xl flex items-center gap-2.5">
                  <span className="text-lg text-emerald-500">▶</span>
                  <div className="text-left leading-none">
                    <span className="text-[9px] text-gray-500 block uppercase font-bold tracking-wider">GET IT ON</span>
                    <span className="text-xs text-white font-bold tracking-tight">Google Play</span>
                  </div>
                </a>
              </div>
            </motion.div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 md:pl-12">
              {footerLinks.map((section, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex flex-col gap-5">
                  <h4 className="text-white text-sm font-bold tracking-wider uppercase">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col gap-3.5">
                    {section.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a href={`#${link}`} className="text-sm font-medium text-gray-500 hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

          </div>

          <motion.div variants={itemVariants} className="w-full pt-8 border-t border-gray-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs font-medium text-gray-600 tracking-wide text-center sm:text-left">
              Medicare UI 2026. All Rights Reserved. Accessibility Terms & Conditions Privacy Policy
            </p>

            <div className="flex items-center gap-3">
              {['f', 't', 'i', 'in'].map((platform, pIdx) => (
                <a 
                  key={pIdx} 
                  href={`#${platform}`} 
                  className="w-8 h-8 rounded-md bg-[#1a1b1e] border border-gray-800 hover:border-gray-700 text-gray-500 hover:text-white transition-all text-xs font-bold flex items-center justify-center lowercase"
                >
                  {platform}
                </a>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </footer>


    </div>
  );
}