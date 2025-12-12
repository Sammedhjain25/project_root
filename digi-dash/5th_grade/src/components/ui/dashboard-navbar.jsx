import React from 'react';
import { Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

export const DashboardNavbar = ({ onProfileClick }) => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <div className={`
      px-4 sm:px-6 py-4 flex flex-wrap md:flex-nowrap items-center justify-between border-b transition-colors duration-200 gap-4
      ${isDark
        ? 'bg-[#181B21] border-[#232730]'
        : 'bg-white border-gray-200'
      }
    `}>
      {/* Left side - Greeting */}
      <div className="order-1 md:min-w-0 flex-shrink">
        <h1 className={`
          text-xl sm:text-2xl font-bold transition-colors duration-200 truncate
          ${isDark
            ? 'text-[#FFFFFF]'
            : 'text-gray-900'
          }
        `}>
          Good Morning, Georgia
        </h1>
        <p className={`
          text-sm transition-colors duration-200 truncate
          ${isDark
            ? 'text-[#9CA3AF]'
            : 'text-gray-500'
          }
        `}>
          Have a nice day!
        </p>
      </div>

      {/* Search Bar */}
      <div className="order-3 sm:order-2 w-full sm:w-auto md:flex-grow lg:flex-grow-0 md:mx-4 lg:mx-0 relative">
        <Search className={`
          absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-200
          ${isDark
            ? 'text-[#9CA3AF]'
            : 'text-gray-400'
          }
        `} />
        <input
          type="text"
          placeholder="Search..."
          className={`
            pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent w-full sm:w-64 md:w-full lg:w-64 transition-colors duration-200
            ${isDark
              ? 'bg-[#232730] border-[#232730] text-[#FFFFFF] placeholder-[#6B7280] focus:ring-[#06B6D4]'
              : 'border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-purple-500'
            }
          `}
        />
      </div>

      {/* Right side - Icons */}
      <div className="order-2 sm:order-3 flex items-center gap-4 flex-shrink-0">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Profile Picture */}
        <button
          onClick={onProfileClick}
          className={`
            w-10 h-10 rounded-full overflow-hidden transition-all flex-shrink-0
            ${isDark
              ? 'hover:ring-2 hover:ring-[#06B6D4]'
              : 'hover:ring-2 hover:ring-purple-500'
            }
          `}
        >
          <img
            src="/img/icon1.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  );
};
