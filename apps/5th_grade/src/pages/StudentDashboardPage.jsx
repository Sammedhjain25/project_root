import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PageWithSidebar } from '../components/layouts/PageWithSidebar';
import { DashboardNavbar } from '../components/ui/dashboard-navbar';
import { Notifications } from '../components/ui/Notifications';
import { useTheme } from '../context/ThemeContext';
import {
  Filter,
  Trophy,
  Star,
  Crown,
  Volume2,
  User,
  Download,
  Upload
} from 'lucide-react';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Anim1 from '@/assets/lottie/BOOK WALKING.json';
import Anim2 from '@/assets/lottie/Funny brain.json';
import Anim3 from '@/assets/lottie/maths.json';
import Anim4 from '@/assets/lottie/Run cycle recreated in Lottie Creator.json';
import Anim5 from '@/assets/lottie/snail dance.json';
import { AssignmentSummaryCard } from '../components/ui/assignment-summary-card';



const StudentDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('In Progress');
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const fileInputRef = useRef(null);

  const handleSubmitClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the file upload here
      console.log('File selected:', file.name);
      // You can add your upload logic here
    }
  };

  // Lottie animations array - rotates across all cards
  const animations = [Anim1, Anim2, Anim3, Anim4, Anim5];


  // Assignments data
  const assignments = [
    {
      id: 1,
      title: "My Hero: A Biography of a Qatari Leader",
      description: "Write a biography of a Qatari leader, focusing on their achievements and impact on the country.",
      progress: 8,
      total: 10,
      status: "In Progress",
      illustration: "🌴",
      color: "from-green-400 to-green-600"
    },
    {
      id: 2,
      title: "Favorite Season in Qatar: A Personal Reflection",
      description: "Reflect on your favorite season in Qatar and explain why it holds special meaning for you.",
      progress: 3,
      total: 5,
      status: "In Progress",
      illustration: "☀️",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Understanding Qatar's Heritage",
      description: "Explore the rich cultural heritage of Qatar through research and personal observations.",
      progress: 1,
      total: 7,
      status: "New",
      illustration: "🏛️",
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      title: "The Life of Sheikh Jassim bin Mohammed Al Thani: Founder of...",
      description: "Research and write about the life and contributions of Sheikh Jassim.",
      progress: 0,
      total: 10,
      status: "New",
      illustration: "📜",
      color: "from-orange-400 to-orange-600"
    }
  ];

  // Recent Resources data
  const recentResources = [
    "Exploring Qatar's Seasons: T...",
    "Seasonal Changes in Qatar: A...",
    "Cultural Festivals and Traditio..."
  ];

  // Achievements data
  const achievements = [
    { id: 1, icon: Trophy, color: "bg-yellow-100 text-yellow-600" },
    { id: 2, icon: Star, color: "bg-blue-100 text-blue-600" },
    { id: 3, icon: Crown, color: "bg-purple-100 text-purple-600" },
    { id: 4, icon: Trophy, color: "bg-green-100 text-green-600" },
    { id: 5, icon: Star, color: "bg-pink-100 text-pink-600" },
    { id: 6, icon: Crown, color: "bg-orange-100 text-orange-600" },
  ];


  const tabs = ['New', 'Complete', 'In Progress', 'All'];
  const filteredAssignments = activeTab === 'All'
    ? assignments
    : assignments.filter(a => a.status === activeTab);

  return (
    <PageWithSidebar>
      <div className="flex flex-1 min-w-0 h-full p-2 sm:p-3 md:p-4 lg:p-6">
        <div className={`
          w-full h-full rounded-xl shadow-lg flex flex-col overflow-hidden relative transition-colors duration-200
          ${isDark ? 'bg-[#0F1115]' : 'bg-[#E5E7EB]'}
        `}>
          {/* Static Navbar at top */}
          <DashboardNavbar />
          {/* Scrollable content area */}
          <div className={`
            flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 relative scrollbar-hide transition-colors duration-200
            ${isDark ? 'bg-[#0F1115]' : 'bg-[#E5E7EB]'}
          `}>
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 md:gap-6 max-w-[1600px] mx-auto">


              {/* Left Column - Notifications, Word of the Day, Recent Resources */}
              <div className="md:col-span-4 lg:col-span-4 space-y-4 md:space-y-6">


                {/* Notifications Card */}
                <Notifications />


                {/* Recent Resources Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className={`
                    rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200
                    ${isDark ? 'bg-[#181B21]' : 'bg-white'}
                  `}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`
                      text-lg font-semibold
                      ${isDark ? 'text-[#FFFFFF]' : 'text-gray-800'}
                    `}>
                      Recent Resources
                    </h3>
                    <Link to="/elibrary" className={`
                      text-sm font-medium transition-colors
                      ${isDark ? 'text-[#06B6D4] hover:text-[#06B6D4]/80' : 'text-purple-600 hover:text-purple-700'}
                    `}>
                      See All
                    </Link>
                  </div>
                  <div className="space-y-2">
                    {recentResources.map((resource, idx) => (
                      <div
                        key={idx}
                        className={`
                          p-2 text-sm rounded-lg transition-colors cursor-pointer
                          ${isDark
                            ? 'text-[#9CA3AF] hover:text-[#FFFFFF] hover:bg-[#232730]'
                            : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                          }
                        `}
                      >
                        {resource}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Center Column - Assignments */}
              <div className="md:col-span-5 lg:col-span-5 space-y-4 md:space-y-6">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className={`
                    rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200
                    ${isDark ? 'bg-[#181B21]' : 'bg-white'}
                  `}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`
                      text-lg font-semibold
                      ${isDark ? 'text-[#FFFFFF]' : 'text-gray-800'}
                    `}>
                      Assignments
                    </h3>

                  </div>

                  {/* Tabs */}
                  <div className={`
                    flex gap-2 mb-4 pb-2
                    ${isDark ? 'border-b border-[#232730]' : 'border-b border-gray-100'}
                  `}>
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
                          px-4 py-2 text-sm font-medium rounded-lg transition-colors
                          ${activeTab === tab
                            ? isDark
                              ? 'text-white bg-[#06B6D4]'
                              : 'text-white'
                            : isDark
                              ? 'text-[#9CA3AF] hover:bg-[#232730]'
                              : 'text-gray-600 hover:bg-gray-100'
                          }
                        `}
                        style={activeTab === tab && !isDark ? { backgroundColor: '#CDA3F5' } : {}}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Assignment Cards - Scrollable Container */}
                  <div className="max-h-[400px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[490px] overflow-y-auto overflow-x-hidden pr-2 scroll-smooth scrollbar-thin">
                    <div className="space-y-4">
                      {filteredAssignments.map((assignment, index) => {
                        const progressPercentage = (assignment.progress / assignment.total) * 100;
                        // Rotate animations using modulo logic
                        const animToShow = animations[index % animations.length];
                        return (
                          <motion.div
                            key={assignment.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`
                              rounded-2xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer flex-shrink-0
                              ${isDark
                                ? 'bg-[#181B21] border border-[#232730]'
                                : 'bg-white border border-gray-200'
                              }
                            `}
                          >
                            <div className="flex gap-5">
                              {/* Lottie Animation - Rotates across all cards */}
                              <div className={`
                                w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden
                                ${isDark ? 'bg-[#232730]' : 'bg-[#E8FBEA]'}
                              `}>
                                <Lottie
                                  animationData={animToShow}
                                  loop={true}
                                  autoplay={true}
                                  style={{ width: '80px', height: '80px' }}
                                />
                              </div>

                              {/* Content - More vertical space */}
                              <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                                <div>
                                  <h4 className={`
                                    text-base font-bold mb-3 line-clamp-2 leading-tight
                                    ${isDark ? 'text-[#FFFFFF]' : 'text-gray-800'}
                                  `}>
                                    {assignment.title}
                                  </h4>
                                  <p className={`
                                    text-sm mb-4 line-clamp-3 leading-relaxed
                                    ${isDark ? 'text-[#9CA3AF]' : 'text-gray-600'}
                                  `}>
                                    {assignment.description}
                                  </p>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-end gap-2 mt-auto">
                                  <button
                                    className={`
                                      p-1.5 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium
                                      ${isDark
                                        ? 'hover:bg-[#232730] text-[#9CA3AF] hover:text-white'
                                        : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                                      }
                                    `}
                                    title="Download Resource"
                                  >
                                    <Download className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">Download</span>
                                  </button>

                                  <button
                                    onClick={handleSubmitClick}
                                    className={`
                                      px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium
                                      ${isDark
                                        ? 'bg-[#06B6D4] hover:bg-[#06B6D4]/90 text-white'
                                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                                      }
                                    `}
                                    title="Submit Assignment"
                                  >
                                    <Upload className="w-3.5 h-3.5" />
                                    <span>Submit</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Assignment Summary Card */}
              <div className="md:col-span-3 lg:col-span-3 space-y-4 md:space-y-6">


                {/* Assignment Summary Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <AssignmentSummaryCard />
                </motion.div>


              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        className="hidden"
      />
    </PageWithSidebar>
  );
};

export default StudentDashboardPage;

