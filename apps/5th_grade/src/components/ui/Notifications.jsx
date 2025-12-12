import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Notifications = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const isStudentDashboard = window.location.pathname === '/assignment';
  const isHomePage = window.location.pathname === '/';
  const isDarkThemePage = isStudentDashboard || isHomePage;

  // All notifications data
  const allNotifications = [
    {
      id: 1,
      title: "Favorite Season in Qatar: A Personal Reflection",
      message: "You have new activity assigned!",
      time: "2h ago",
      read: false,
    },
    {
      id: 2,
      title: "My Hero: A Biography of a Qatari Leader",
      message: "Check out the teacher's feedback!",
      time: "5h ago",
      read: false,
    },
    {
      id: 3,
      title: "Assignment Submitted",
      message: "Your Math assignment has been successfully submitted.",
      time: "1 day ago",
      read: true,
    },
    {
      id: 4,
      title: "Upcoming Test",
      message: "English test scheduled for tomorrow at 10:00 AM.",
      time: "1 day ago",
      read: true,
    },
    {
      id: 5,
      title: "Achievement Unlocked",
      message: "You've completed 10 reading activities! Keep it up!",
      time: "2 days ago",
      read: true,
    },
    {
      id: 6,
      title: "New Event Added",
      message: "Annual Sports Day scheduled for next Friday.",
      time: "3 days ago",
      read: true,
    },
    {
      id: 7,
      title: "Assignment Due Soon",
      message: "History assignment due in 2 days.",
      time: "4 days ago",
      read: true,
    },
    {
      id: 8,
      title: "Great Performance",
      message: "You scored 95% in your recent Math test!",
      time: "5 days ago",
      read: true,
    },
    {
      id: 9,
      title: "Library Book Reminder",
      message: "Your library book 'The Adventures of Tom Sawyer' is due in 3 days.",
      time: "6 days ago",
      read: true,
    },
  ];

  // Show only latest 2-3 notifications in preview
  const previewNotifications = allNotifications.slice(0, 2);

  return (
    <div className="w-full">
      {/* Preview Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`
          rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200
          ${isDark && isDarkThemePage ? 'bg-[#181B21]' : 'bg-white'}
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className={`
            text-lg font-semibold
            ${isDark && isDarkThemePage ? 'text-[#FFFFFF]' : 'text-gray-800'}
          `}>
            Notifications
          </h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
              text-sm font-medium transition-colors
              ${isDark && isDarkThemePage 
                ? 'text-[#06B6D4] hover:text-[#06B6D4]/80' 
                : 'text-[#CDA3F5] hover:text-[#b88de6]'
              }
            `}
          >
            See All
          </button>
        </div>
        <div className="space-y-4">
          {previewNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`
                p-3 rounded-xl transition-colors cursor-pointer
                ${isDark && isDarkThemePage
                  ? 'bg-[#232730] hover:bg-[#2D3342]'
                  : 'bg-gray-50 hover:bg-gray-100'
                }
              `}
            >
              <div className="flex items-start gap-2">
                {!notification.read && (
                  <div className={`
                    w-2 h-2 rounded-full mt-1.5 flex-shrink-0
                    ${isDark && isDarkThemePage ? 'bg-[#06B6D4]' : 'bg-[#CDA3F5]'}
                  `}></div>
                )}
                <div className="flex-1 min-w-0">
                  <h4 className={`
                    text-sm font-semibold mb-1 line-clamp-1
                    ${isDark && isDarkThemePage ? 'text-[#FFFFFF]' : 'text-gray-800'}
                  `}>
                    {notification.title}
                  </h4>
                  <p className={`
                    text-xs mb-1
                    ${isDark && isDarkThemePage ? 'text-[#9CA3AF]' : 'text-gray-600'}
                  `}>
                    {notification.message}
                  </p>
                  <div className={`
                    flex items-center gap-1 text-xs
                    ${isDark && isDarkThemePage ? 'text-[#6B7280]' : 'text-gray-400'}
                  `}>
                    <Clock className="w-3 h-3" />
                    <span>{notification.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Expanded Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`
              rounded-2xl shadow-lg overflow-hidden
              ${isDark && isDarkThemePage 
                ? 'bg-[#181B21] border border-[#232730]' 
                : 'bg-white border border-gray-200'
              }
            `}
          >
            {/* Expanded Header */}
            <div 
              className="px-6 py-4 flex items-center justify-between"
              style={isDark && isDarkThemePage 
                ? { background: 'linear-gradient(135deg, #155E75 0%, #0E7490 100%)' }
                : { background: 'linear-gradient(to right, #CDA3F5, #b88de6)' }
              }
            >
              <h3 className="text-lg font-bold text-white">All Notifications</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Close notifications"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Scrollable Notifications List */}
            <div className="max-h-[500px] overflow-y-auto">
              <div className={`
                divide-y
                ${isDark && isDarkThemePage ? 'divide-[#232730]' : 'divide-gray-100'}
              `}>
                {allNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`
                      p-5 transition-colors cursor-pointer
                      ${isDark && isDarkThemePage 
                        ? 'hover:bg-[#232730]' 
                        : 'hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className="flex items-start gap-3">
                      {!notification.read && (
                        <div className={`
                          w-2 h-2 rounded-full mt-2 flex-shrink-0
                          ${isDark && isDarkThemePage ? 'bg-[#06B6D4]' : 'bg-[#CDA3F5]'}
                        `}></div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className={`
                          text-sm font-semibold mb-1
                          ${!notification.read ? 'font-bold' : ''}
                          ${isDark && isDarkThemePage ? 'text-[#FFFFFF]' : 'text-gray-800'}
                        `}>
                          {notification.title}
                        </h4>
                        <p className={`
                          text-xs mb-2 line-clamp-2
                          ${isDark && isDarkThemePage ? 'text-[#9CA3AF]' : 'text-gray-600'}
                        `}>
                          {notification.message}
                        </p>
                        <div className={`
                          flex items-center gap-1 text-xs
                          ${isDark && isDarkThemePage ? 'text-[#6B7280]' : 'text-gray-400'}
                        `}>
                          <Clock className="w-3 h-3" />
                          <span>{notification.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className={`
              px-6 py-4 border-t
              ${isDark && isDarkThemePage 
                ? 'bg-[#181B21] border-[#232730]' 
                : 'bg-gray-50 border-gray-200'
              }
            `}>
              <button
                onClick={() => setIsExpanded(false)}
                className={`
                  w-full py-2.5 text-white rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg
                  ${isDark && isDarkThemePage
                    ? 'bg-[#06B6D4] hover:bg-[#06B6D4]/90'
                    : 'bg-gradient-to-r from-[#CDA3F5] to-[#b88de6] hover:from-[#b88de6] hover:to-[#a376d7]'
                  }
                `}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
