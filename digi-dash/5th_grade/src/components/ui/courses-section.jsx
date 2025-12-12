import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export const CoursesSection = () => {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  const courses = [
    {
      id: 1,
      title: "UI/UX Design Level Up with Prototyping",
      illustrationColor: "bg-gray-100",
      illustrationImage: "/img/sub1.png"
    },
    {
      id: 2,
      title: "Graphic Design Masterclass using Adobe Illustration",
      illustrationColor: "bg-gray-100",
      illustrationImage: "/img/sub2.png"
    },
    {
      id: 3,
      title: "Science Fundamentals & Lab Experiments",
      illustrationColor: "bg-gray-100",
      illustrationImage: "/img/sub3.png"
    },
    {
      id: 4,
      title: "Low Code Website Development Guide",
      illustrationColor: "bg-gray-100",
      illustrationImage: "/img/sub4.png"
    },
    {
      id: 5,
      title: "Brand Identity & Visual Expression",
      illustrationColor: "bg-gray-100",
      illustrationImage: "/img/sub5.png"
    },
    {
      id: 6,
      title: "Figma UI/UX Design Essential",
      illustrationColor: "bg-gray-100",
      illustrationImage: "/img/sub6.png"
    }
  ];

  return (
    <section className="w-full h-full flex flex-col">
      <div className="flex-1 w-full p-0">
        <div className="pt-4 pb-8 px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`
                rounded-[24px] shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col
                ${isDark
                  ? 'bg-[#181B21] border border-[#232730]'
                  : 'bg-white border border-gray-100'
                }
              `}
            >
              {/* Course Illustration */}
              <div className={`${course.illustrationColor} h-44 flex items-center justify-center overflow-hidden`}>
                {course.illustrationImage ? (
                  <img
                    src={course.illustrationImage}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl">{course.illustrationEmoji}</div>
                )}
              </div>

              {/* Course Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className={`text-base font-bold mb-4 line-clamp-2 leading-tight ${isDark ? 'text-[#FFFFFF]' : 'text-gray-900'
                  }`}>
                  {course.title}
                </h3>

                <div className="space-y-2 mt-auto">
                  {/* Resources */}
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-semibold ${isDark ? 'text-[#FFFFFF]' : 'text-gray-700'}`}>Resources</span>
                    <span className={isDark ? 'text-[#9CA3AF]' : 'text-gray-600'}>PDF + Practice Files</span>
                  </div>

                  {/* Access */}
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-semibold ${isDark ? 'text-[#FFFFFF]' : 'text-gray-700'}`}>Access</span>
                    <span className={isDark ? 'text-[#9CA3AF]' : 'text-gray-600'}>Lifetime Access</span>
                  </div>

                  {/* Support */}
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-semibold ${isDark ? 'text-[#FFFFFF]' : 'text-gray-700'}`}>Support</span>
                    <span className={isDark ? 'text-[#9CA3AF]' : 'text-gray-600'}>Mentor Help Included</span>
                  </div>

                  {/* View More Button */}
                  <div className="pt-4 mt-2">
                    <button
                      onClick={() => navigate(`/courses-detail/${course.id}`)}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
