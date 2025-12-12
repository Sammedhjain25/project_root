import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CoursesDetailPage.css'
import { PageWithSidebar } from '../components/layouts/PageWithSidebar'
import { DashboardNavbar } from '../components/ui/dashboard-navbar'
import { useTheme } from '../context/ThemeContext'

// Course data - matches the data from courses-section.jsx
const coursesData = [
  {
    id: 1,
    title: "UI/UX Design Level Up with Prototyping",
    creationDate: "16 Jan 2025",
    sales: "$1,250",
    status: "Published",
    illustrationColor: "bg-gray-100",
    illustrationImage: "/img/sub1.png",
    description: "Welcome to the comprehensive UI/UX Design course! This intensive program is designed to take you from a beginner to a professional UI/UX designer. You'll learn to create modern, user-friendly interfaces using the latest design tools and best practices in the industry. Throughout this course, you'll master both design principles and prototyping techniques. You'll work with Figma, Adobe XD, and other industry-standard tools to create dynamic and interactive user interfaces. You'll also learn user research, wireframing, and usability testing to build robust design solutions."
  },
  {
    id: 2,
    title: "Graphic Design Masterclass using Adobe Illustration",
    creationDate: "14 Jan 2025",
    sales: "$1,000",
    status: "Unpublished",
    illustrationColor: "bg-gray-100",
    illustrationImage: "/img/sub2.png",
    description: "Welcome to the comprehensive Graphic Design Masterclass! This intensive program is designed to take you from a beginner to a professional graphic designer. You'll learn to create stunning visual designs using Adobe Illustrator and other industry-standard tools. Throughout this course, you'll master typography, color theory, composition, and vector graphics. You'll work with Adobe Illustrator to create logos, illustrations, and marketing materials. You'll also learn design principles, branding, and visual communication to build compelling design solutions."
  },
  {
    id: 3,
    title: "Science Fundamentals & Lab Experiments",
    creationDate: "13 Jan 2025",
    sales: "$950",
    status: "Published",
    illustrationColor: "bg-gray-100",
    illustrationImage: "/img/sub3.png",
    description: "Welcome to the comprehensive Science Fundamentals course! This intensive program is designed to take you from a beginner to a professional scientist. You'll learn fundamental scientific concepts and conduct hands-on lab experiments. Throughout this course, you'll master physics, chemistry, and biology principles. You'll work with laboratory equipment to conduct experiments and analyze results. You'll also learn scientific methodology, data analysis, and research techniques to build a strong foundation in science."
  },
  {
    id: 4,
    title: "Low Code Website Development Guide",
    creationDate: "12 Jan 2025",
    sales: "$500",
    status: "Unpublished",
    illustrationColor: "bg-gray-100",
    illustrationImage: "/img/sub4.png",
    description: "Welcome to the comprehensive Low Code Development course! This intensive program is designed to take you from a beginner to a professional low-code developer. You'll learn to build modern websites and applications using low-code platforms. Throughout this course, you'll master drag-and-drop interfaces, visual programming, and rapid prototyping. You'll work with platforms like Webflow, Bubble, and others to create dynamic web applications without extensive coding. You'll also learn database integration, API connections, and deployment strategies to build functional applications quickly."
  },
  {
    id: 5,
    title: "Brand Identity & Visual Expression",
    creationDate: "11 Jan 2025",
    sales: "$1,050",
    status: "Published",
    illustrationColor: "bg-gray-100",
    illustrationImage: "/img/sub5.png",
    description: "Welcome to the comprehensive Brand Identity course! This intensive program is designed to take you from a beginner to a professional brand designer. You'll learn to create compelling brand identities and visual expressions. Throughout this course, you'll master logo design, brand guidelines, typography, and color systems. You'll work with design tools to create cohesive brand experiences. You'll also learn brand strategy, market research, and visual storytelling to build memorable brand identities."
  },
  {
    id: 6,
    title: "Figma UI/UX Design Essential",
    creationDate: "10 Jan 2025",
    sales: "$2,250",
    status: "Published",
    illustrationColor: "bg-gray-100",
    illustrationImage: "/img/sub6.png",
    description: "Welcome to the comprehensive Figma UI/UX Design course! This intensive program is designed to take you from a beginner to a professional Figma designer. You'll learn to create modern, interactive designs using Figma's powerful features. Throughout this course, you'll master components, auto-layout, prototyping, and design systems. You'll work with Figma to create responsive designs, interactive prototypes, and collaborative design workflows. You'll also learn design principles, user experience best practices, and design handoff techniques to build professional design solutions."
  }
];

// Header Component
function Header() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState('')
  const [headerElementsVisible, setHeaderElementsVisible] = useState(false)
  const fullPlaceholder = 'Search here...'

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullPlaceholder.length) {
        setAnimatedPlaceholder(fullPlaceholder.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    setHeaderElementsVisible(true)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <header className="bg-transparent">
      <div className="px-4 md:px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div
            className={`flex items-center transition-transform duration-700 ease-out ${headerElementsVisible ? 'translate-y-0' : '-translate-y-8'
              }`}
            style={{ transitionDelay: '0ms' }}
          >
            <h1 className={`text-2xl font-semibold ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>Courses</h1>
          </div>

          <div className="w-full md:flex-1 max-w-md mx-0 md:mx-8 order-3 md:order-2">
            <div className="relative">
              <input
                type="text"
                placeholder={animatedPlaceholder}
                className={`w-full pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent ${isDark
                  ? 'bg-[#181B21] border border-[#232730] text-[#FFFFFF] placeholder:text-[#9CA3AF]'
                  : 'bg-[#F5F7FA] border border-gray-200'
                  }`}
                style={{ fontFamily: 'Poppins' }}
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end order-2 md:order-3">
            <div
              className={`flex items-center gap-2 cursor-pointer transition-transform duration-700 ease-out ${headerElementsVisible ? 'translate-y-0' : '-translate-y-8'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              <span className={`text-sm font-medium ${isDark ? 'text-[#9CA3AF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>Eng (US)</span>
              <svg className={`w-4 h-4 ${isDark ? 'text-[#9CA3AF]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div
              className={`relative cursor-pointer transition-transform duration-700 ease-out ${headerElementsVisible ? 'translate-y-0' : '-translate-y-8'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              <svg className={`w-5 h-5 ${isDark ? 'text-[#9CA3AF]' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#3B82F6] rounded-full"></span>
            </div>

            <div
              className={`relative cursor-pointer transition-transform duration-700 ease-out ${headerElementsVisible ? 'translate-y-0' : '-translate-y-8'
                }`}
              style={{ transitionDelay: '300ms' }}
            >
              <svg className={`w-5 h-5 ${isDark ? 'text-[#9CA3AF]' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#3B82F6] rounded-full"></span>
            </div>

            <div
              className={`cursor-pointer transition-transform duration-700 ease-out ${headerElementsVisible ? 'translate-y-0' : '-translate-y-8'
                }`}
              style={{ transitionDelay: '400ms' }}
            >
              <svg className={`w-5 h-5 ${isDark ? 'text-[#9CA3AF]' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <div
              className={`cursor-pointer transition-transform duration-700 ease-out ${headerElementsVisible ? 'translate-y-0' : '-translate-y-8'
                }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// MainContent Component
function MainContent({ course }) {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const [titleVisible, setTitleVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('about')
  const [tabContentVisible, setTabContentVisible] = useState(false)
  const [faqCardsVisible, setFaqCardsVisible] = useState([])
  const [guidelinesCardsVisible, setGuidelinesCardsVisible] = useState([])

  const animateFaqCards = () => {
    const ids = [1, 2, 3]
    ids.forEach((id, index) => {
      setTimeout(() => {
        setFaqCardsVisible(prev => [...prev, id])
      }, index * 200)
    })
  }

  const animateGuidelinesCards = () => {
    const ids = [1, 2, 3]
    ids.forEach((id, index) => {
      setTimeout(() => {
        setGuidelinesCardsVisible(prev => [...prev, id])
      }, index * 200)
    })
  }

  useEffect(() => {
    setTitleVisible(true)
    setTimeout(() => {
      setStatsVisible(true)
    }, 300)
    setTimeout(() => {
      setButtonsVisible(true)
    }, 400)
    setTimeout(() => {
      setTabContentVisible(true)
      if (activeTab === 'faq') {
        animateFaqCards()
      } else if (activeTab === 'guidelines') {
        animateGuidelinesCards()
      }
    }, 500)
  }, [])

  useEffect(() => {
    setTabContentVisible(false)
    setFaqCardsVisible([])
    setGuidelinesCardsVisible([])

    setTimeout(() => {
      setTabContentVisible(true)
      if (activeTab === 'faq') {
        animateFaqCards()
      } else if (activeTab === 'guidelines') {
        animateGuidelinesCards()
      }
    }, 100)
  }, [activeTab])

  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-col md:flex-row items-start justify-between mb-4 gap-4 md:gap-0">
          <div className="flex-1">
            <h2
              className={`text-3xl font-bold mb-3 transition-transform duration-700 ease-out ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'} ${titleVisible ? 'translate-y-0' : 'translate-y-8'
                }`}
              style={{ fontFamily: 'Poppins' }}
            >
              {course ? course.title : 'Full-Stack Web Developer'}
            </h2>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div
                className={`flex items-center gap-2 transition-opacity duration-700 ease-out ${statsVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{ transitionDelay: '0ms' }}
              >
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className={`text-lg font-semibold ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>5.0</span>
              </div>
              <span
                className={`text-sm transition-opacity duration-700 ease-out ${isDark ? 'text-[#9CA3AF]' : 'text-gray-600'} ${statsVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{ transitionDelay: '75ms', fontFamily: 'Poppins' }}
              >
                Review (1k)
              </span>
              <span
                className={`text-sm transition-opacity duration-700 ease-out ${isDark ? 'text-[#9CA3AF]' : 'text-gray-600'} ${statsVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{ transitionDelay: '150ms', fontFamily: 'Poppins' }}
              >
                10k Students
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg overflow-hidden relative video-player-hover" style={{ aspectRatio: '16/9' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            <img
              src={course?.illustrationImage || "/image.png"}
              alt={course?.title || "Video thumbnail"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform z-10">
                <svg className="w-12 h-12 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-lg min-h-[400px] ${isDark ? 'bg-[#181B21]' : 'bg-white'}`}>
        <div className={`border-b overflow-x-auto scrollbar-hide ${isDark ? 'border-[#232730]' : 'border-gray-200'}`}>
          <div className="flex gap-6 px-4 md:px-6 min-w-max">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'about'
                ? isDark
                  ? 'text-[#06B6D4] border-b-2 border-[#06B6D4]'
                  : 'text-[#3B82F6] border-b-2 border-[#3B82F6]'
                : isDark
                  ? 'text-[#9CA3AF] hover:text-[#FFFFFF]'
                  : 'text-gray-600 hover:text-[#1F2937]'
                }`}
              style={{ fontFamily: 'Poppins' }}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'faq'
                ? isDark
                  ? 'text-[#06B6D4] border-b-2 border-[#06B6D4]'
                  : 'text-[#3B82F6] border-b-2 border-[#3B82F6]'
                : isDark
                  ? 'text-[#9CA3AF] hover:text-[#FFFFFF]'
                  : 'text-gray-600 hover:text-[#1F2937]'
                }`}
              style={{ fontFamily: 'Poppins' }}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('guidelines')}
              className={`px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'guidelines'
                ? isDark
                  ? 'text-[#06B6D4] border-b-2 border-[#06B6D4]'
                  : 'text-[#3B82F6] border-b-2 border-[#3B82F6]'
                : isDark
                  ? 'text-[#9CA3AF] hover:text-[#FFFFFF]'
                  : 'text-gray-600 hover:text-[#1F2937]'
                }`}
              style={{ fontFamily: 'Poppins' }}
            >
              Course Guidelines
            </button>
          </div>
        </div>

        {activeTab === 'about' && (
          <div
            className={`transition-all duration-700 ease-out pb-6 ${tabContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            style={{ minHeight: '300px' }}
          >
            <h3 className={`text-xl font-semibold mb-4 px-4 md:px-6 pt-6 ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>About Course</h3>
            <div className="content-card px-4 md:px-6 py-6 mx-4 md:mx-6 mb-6">
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
              <div className={`space-y-4 leading-relaxed ${isDark ? 'text-[#9CA3AF]' : 'text-gray-600'}`} style={{ fontFamily: 'Poppins' }}>
                <p>
                  {course?.description || "Welcome to the comprehensive Full-Stack Web Developer course! This intensive program is designed to take you from a beginner to a professional full-stack developer. You'll learn to build modern, responsive web applications using the latest technologies and best practices in the industry."}
                </p>
                {course && (
                  <div className={`pt-4 border-t mt-4 ${isDark ? 'border-[#232730]' : 'border-gray-200'}`}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className={`text-sm font-medium ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>Creation Date</span>
                        <p className={`font-semibold ${isDark ? 'text-[#FFFFFF]' : 'text-gray-900'}`}>{course.creationDate}</p>
                      </div>
                      <div>
                        <span className={`text-sm font-medium ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>Sales</span>
                        <p className={`font-semibold ${isDark ? 'text-[#FFFFFF]' : 'text-gray-900'}`}>{course.sales}</p>
                      </div>
                      <div>
                        <span className={`text-sm font-medium ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>Status</span>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-1 ${course.status === "Published"
                            ? isDark
                              ? "bg-green-900/30 text-green-400"
                              : "bg-green-100 text-green-700"
                            : isDark
                              ? "bg-[#232730] text-[#9CA3AF]"
                              : "bg-gray-100 text-gray-600"
                            }`}
                        >
                          {course.status}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div
            className={`p-6 transition-all duration-700 ease-out ${tabContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
          >
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>FAQ</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((id, index) => (
                <div
                  key={id}
                  className={`content-card rounded-lg p-4 transition-all duration-700 ease-out ${isDark ? 'border border-[#232730] bg-[#181B21]' : 'border border-gray-200'
                    } ${faqCardsVisible.includes(id) ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                  <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>
                    {id === 1 ? 'How do I access course materials?' : id === 2 ? 'Is there a certificate?' : 'Can I download videos?'}
                  </h4>
                  <p className={`leading-relaxed ${isDark ? 'text-[#9CA3AF]' : 'text-gray-600'}`} style={{ fontFamily: 'Poppins' }}>
                    {id === 1
                      ? "You can access all course materials, including videos, PDFs, and practice files, directly from the course dashboard after enrollment."
                      : id === 2
                        ? "Yes, upon successfully completing all lessons and assignments, you will receive a verified certificate of completion."
                        : "Yes, you can download video lessons for offline viewing through our mobile app."
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'guidelines' && (
          <div
            className={`p-6 transition-all duration-700 ease-out ${tabContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
          >
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>Course Guidelines</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((id, index) => (
                <div
                  key={id}
                  className={`content-card rounded-lg p-4 transition-all duration-700 ease-out ${isDark ? 'border border-[#232730] bg-[#181B21]' : 'border border-gray-200'
                    } ${guidelinesCardsVisible.includes(id) ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                  <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>
                    {id === 1 ? 'Respectful Communication' : id === 2 ? 'No Plagiarism' : 'Active Participation'}
                  </h4>
                  <p className={`leading-relaxed ${isDark ? 'text-[#9CA3AF]' : 'text-gray-600'}`} style={{ fontFamily: 'Poppins' }}>
                    {id === 1
                      ? "Maintain a respectful and supportive tone in all discussions. Harassment or hate speech will not be tolerated."
                      : id === 2
                        ? "All submitted work must be your own. Plagiarism will result in immediate disqualification from the course."
                        : "Engage with the community and complete assignments on time to get the most out of this learning experience."
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Sidebar Component
function Sidebar() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const [expandedSections, setExpandedSections] = useState({
    videoCourses: false,
    assignment: false,
    notes: false,
  })
  const [animatedItems, setAnimatedItems] = useState([])
  const [animatedAssignmentItems, setAnimatedAssignmentItems] = useState([])
  const [animatedNotesItems, setAnimatedNotesItems] = useState([])
  const [progressCardVisible, setProgressCardVisible] = useState(false)
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const [videoCardVisible, setVideoCardVisible] = useState(false)
  const [assignmentCardVisible, setAssignmentCardVisible] = useState(false)
  const [notesCardVisible, setNotesCardVisible] = useState(false)

  const videoLessons = [
    { id: 1, title: 'Introduction', duration: '1:00', completed: true, locked: false },
    { id: 2, title: 'Getting Started', duration: '1:00', completed: false, locked: true },
    { id: 3, title: 'Tools', duration: '1:00', completed: false, locked: true },
    { id: 4, title: 'Install Tools', duration: '1:00', completed: false, locked: true },
    { id: 5, title: 'Plugins', duration: '1:00', completed: false, locked: true },
  ]

  const assignmentItems = [
    { id: 1, title: 'Assignment 1', duration: '2:30', completed: true, locked: false },
    { id: 2, title: 'Assignment 2', duration: '3:15', completed: false, locked: true },
    { id: 3, title: 'Assignment 3', duration: '2:45', completed: false, locked: true },
    { id: 4, title: 'Assignment 4', duration: '4:00', completed: false, locked: true },
    { id: 5, title: 'Assignment 5', duration: '3:30', completed: false, locked: true },
  ]

  const notesItems = [
    { id: 1, title: 'Notes 1: Basics', duration: '15:00', completed: true, locked: false },
    { id: 2, title: 'Notes 2: Advanced', duration: '20:00', completed: false, locked: true },
    { id: 3, title: 'Notes 3: Practice', duration: '18:00', completed: false, locked: true },
    { id: 4, title: 'Notes 4: Projects', duration: '25:00', completed: false, locked: true },
    { id: 5, title: 'Notes 5: Final', duration: '30:00', completed: false, locked: true },
  ]

  const animateItems = (items, setAnimatedState) => {
    setAnimatedState([])
    items.forEach((item, index) => {
      setTimeout(() => {
        setAnimatedState(prev => [...prev, item.id])
      }, index * 150)
    })
  }

  const toggleSection = (section) => {
    const wasExpanded = expandedSections[section]
    const willBeExpanded = !wasExpanded

    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))

    if (wasExpanded) {
      if (section === 'videoCourses') {
        setAnimatedItems([])
      } else if (section === 'assignment') {
        setAnimatedAssignmentItems([])
      } else if (section === 'notes') {
        setAnimatedNotesItems([])
      }
    }

    if (willBeExpanded) {
      setTimeout(() => {
        if (section === 'videoCourses') {
          animateItems(videoLessons, setAnimatedItems)
        } else if (section === 'assignment') {
          animateItems(assignmentItems, setAnimatedAssignmentItems)
        } else if (section === 'notes') {
          animateItems(notesItems, setAnimatedNotesItems)
        }
      }, 50)
    }
  }

  useEffect(() => {
    setProgressCardVisible(true)
    setTimeout(() => {
      setProgressBarWidth(9.09)
    }, 300)
    setTimeout(() => {
      setVideoCardVisible(true)
    }, 400)
    setTimeout(() => {
      setAssignmentCardVisible(true)
    }, 600)
    setTimeout(() => {
      setNotesCardVisible(true)
    }, 800)
  }, [])

  return (
    <div className="space-y-4">
      <div
        className={`rounded-lg p-5 shadow-sm transition-transform duration-700 ease-out ${isDark ? 'bg-[#181B21]' : 'bg-white'
          } ${progressCardVisible
            ? 'translate-y-0'
            : 'translate-y-8'
          }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-bold ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>Progress</h3>
          <button className={isDark ? 'text-[#9CA3AF] hover:text-[#FFFFFF]' : 'text-gray-400 hover:text-gray-600'}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
        <div className="mb-3">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
            <div
              className="bg-[#3B82F6] h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressBarWidth}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-sm font-medium ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>Full-Stack Web Developer</span>
            <span className={`text-sm ${isDark ? 'text-[#9CA3AF]' : 'text-gray-600'}`} style={{ fontFamily: 'Poppins' }}>10/110</span>
          </div>
        </div>
      </div>

      <div
        className={`rounded-lg shadow-sm transition-all duration-700 ease-out ${isDark ? 'bg-[#181B21]' : 'bg-white'
          } ${videoCardVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
      >
        <div className="flex items-center justify-between p-5">
          <h3 className={`text-lg font-bold ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>
            Video Courses <span className={`text-sm font-normal ${isDark ? 'text-[#9CA3AF]' : 'text-[#1F2937]'}`}>(1/110)</span>
          </h3>
          <button
            onClick={() => toggleSection('videoCourses')}
            className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center hover:opacity-90 transition"
          >
            <svg
              className={`w-4 h-4 text-white transition-transform ${expandedSections.videoCourses ? '' : 'rotate-180'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
        {expandedSections.videoCourses && (
          <div className="px-5 pb-5 space-y-2">
            {videoLessons.map((lesson, index) => (
              <div
                key={lesson.id}
                className={`flex items-center justify-between p-3 rounded-lg transition-all duration-500 ease-out ${lesson.completed
                  ? isDark ? 'bg-[#06B6D4]' : 'bg-[#3B82F6]'
                  : isDark ? 'bg-[#232730]' : 'bg-gray-100'
                  } ${animatedItems.includes(lesson.id)
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="flex items-center gap-3">
                  {lesson.completed ? (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-[#1F2937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                  <span
                    className={`text-sm font-medium ${lesson.completed
                      ? 'text-white'
                      : isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'
                      }`}
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {lesson.title}
                  </span>
                </div>
                <span
                  className={`text-xs ${lesson.completed
                    ? 'text-white'
                    : isDark ? 'text-[#9CA3AF]' : 'text-[#1F2937]'
                    }`}
                  style={{ fontFamily: 'Poppins' }}
                >
                  {lesson.duration}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className={`rounded-lg shadow-sm transition-all duration-700 ease-out ${isDark ? 'bg-[#181B21]' : 'bg-white'
          } ${assignmentCardVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
      >
        <div className="flex items-center justify-between p-5">
          <h3 className={`text-lg font-bold ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>
            Assignment <span className={`text-sm font-normal ${isDark ? 'text-[#9CA3AF]' : 'text-[#1F2937]'}`}>(1/25)</span>
          </h3>
          <button
            onClick={() => toggleSection('assignment')}
            className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center hover:opacity-90 transition"
          >
            <svg
              className={`w-4 h-4 text-white transition-transform ${expandedSections.assignment ? '' : 'rotate-180'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
        {expandedSections.assignment && (
          <div className="px-5 pb-5 space-y-2">
            {assignmentItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center justify-between p-3 rounded-lg transition-all duration-500 ease-out ${item.completed
                  ? isDark ? 'bg-[#06B6D4]' : 'bg-[#3B82F6]'
                  : isDark ? 'bg-[#232730]' : 'bg-gray-100'
                  } ${animatedAssignmentItems.includes(item.id)
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="flex items-center gap-3">
                  {item.completed ? (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-[#1F2937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                  <span
                    className={`text-sm font-medium ${item.completed ? 'text-white' : 'text-[#1F2937]'
                      }`}
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {item.title}
                  </span>
                </div>
                <span
                  className={`text-xs ${item.completed ? 'text-white' : 'text-[#1F2937]'
                    }`}
                  style={{ fontFamily: 'Poppins' }}
                >
                  {item.duration}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className={`rounded-lg shadow-sm transition-all duration-700 ease-out ${isDark ? 'bg-[#181B21]' : 'bg-white'
          } ${notesCardVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
      >
        <div className="flex items-center justify-between p-5">
          <h3 className={`text-lg font-bold ${isDark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`} style={{ fontFamily: 'Poppins' }}>
            Notes <span className={`text-sm font-normal ${isDark ? 'text-[#9CA3AF]' : 'text-[#1F2937]'}`}>(1/50)</span>
          </h3>
          <button
            onClick={() => toggleSection('notes')}
            className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center hover:opacity-90 transition"
          >
            <svg
              className={`w-4 h-4 text-white transition-transform ${expandedSections.notes ? '' : 'rotate-180'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
        {expandedSections.notes && (
          <div className="px-5 pb-5 space-y-2">
            {notesItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center justify-between p-3 rounded-lg transition-all duration-500 ease-out ${item.completed
                  ? isDark ? 'bg-[#06B6D4]' : 'bg-[#3B82F6]'
                  : isDark ? 'bg-[#232730]' : 'bg-gray-100'
                  } ${animatedNotesItems.includes(item.id)
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="flex items-center gap-3">
                  {item.completed ? (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-[#1F2937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                  <span
                    className={`text-sm font-medium ${item.completed ? 'text-white' : 'text-[#1F2937]'
                      }`}
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {item.title}
                  </span>
                </div>
                <span
                  className={`text-xs ${item.completed ? 'text-white' : 'text-[#1F2937]'
                    }`}
                  style={{ fontFamily: 'Poppins' }}
                >
                  {item.duration}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Main Page Component
function CoursesDetailPage() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const { courseId } = useParams();
  const course = coursesData.find(c => c.id === parseInt(courseId));

  return (
    <PageWithSidebar>
      <div className="flex flex-1 min-w-0 h-full p-2 sm:p-3 md:p-4 lg:p-6 overflow-hidden">
        <div className={`w-full h-full rounded-xl shadow-lg overflow-hidden flex flex-col transition-colors duration-200 ${isDark ? 'bg-[#0F1115]' : 'bg-gray-200'
          }`}>
          <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6">

              <div className="px-0 sm:px-3 md:px-6 py-3 sm:py-4 md:py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="lg:col-span-2">
                    <MainContent course={course} />
                  </div>
                  <div className="lg:col-span-1">
                    <Sidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWithSidebar>
  )
}

export default CoursesDetailPage
