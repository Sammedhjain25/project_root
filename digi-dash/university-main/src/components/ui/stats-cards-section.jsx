import React from "react";
import { Calendar, FileText, Trophy, ClipboardList } from "lucide-react";
import { useDarkMode } from "@/contexts/DarkModeContext";

export const StatsCardsSection = () => {
  const { darkMode } = useDarkMode();

  const stats = [
    {
      label: "Attendance Rate",
      value: "95%",
      icon: Calendar,
      iconBg: "bg-indigo-900",
      iconColor: "text-white",
    },
    {
      label: "Assignments Completed",
      value: "24",
      icon: FileText,
      iconBg: "bg-indigo-900",
      iconColor: "text-white",
    },
    {
      label: "Average Grade",
      value: "A-",
      icon: Trophy,
      iconBg: "bg-indigo-900",
      iconColor: "text-white",
    },
    {
      label: "Pending Tasks",
      value: "5",
      icon: ClipboardList,
      iconBg: "bg-indigo-900",
      iconColor: "text-white",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-[20px] p-6 flex items-center justify-between shadow-sm ${darkMode ? 'bg-[#111c44] text-white' : 'bg-white text-slate-900'}`}
          >
            <div>
              <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {stat.label}
              </p>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.iconBg}`}>
              <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};










