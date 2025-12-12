import React from "react";
import { MoreHorizontal } from "lucide-react";
import { useDarkMode } from "@/contexts/DarkModeContext";

export const AttendanceChartCard = () => {
    const { darkMode } = useDarkMode();

    return (
        <div
            className={`w-full h-full rounded-[20px] p-6 flex flex-col justify-between ${darkMode ? 'bg-[#111c44] text-white' : 'bg-white text-slate-900'} shadow-sm`}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Attendance</h3>

            </div>

            {/* Content */}
            <div className="flex items-center justify-between flex-1">
                {/* Left Side Stats */}
                <div className="flex flex-col gap-8">
                    <div>
                        <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Present</p>
                        <h4 className="text-2xl font-bold">145</h4>
                    </div>
                    <div>
                        <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Absent</p>
                        <h4 className="text-2xl font-bold">1,465</h4>
                    </div>
                </div>

                {/* Right Side Chart */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                    {/* SVG Gauge */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background Circle (optional, invisible in design but good for structure) */}
                        {/* <circle cx="50" cy="50" r="40" fill="none" stroke={darkMode ? "#1b254b" : "#f1f5f9"} strokeWidth="8" /> */}

                        {/* Progress Circle */}
                        {/* 
              Circumference = 2 * pi * 40 ≈ 251.2
              We want roughly 75% circle? The image shows a gap at the bottom left?
              Actually the image shows a blue arc starting from bottom-left (approx 7 o'clock) going clockwise to 3 o'clock?
              Let's approximate. It looks like a C shape but rotated.
              Let's try stroke-dasharray.
            */}
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="200 251"
                            className="transform origin-center rotate-[135deg]"
                        />
                    </svg>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <p className={`text-xs font-bold ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>Safety</p>
                        <p className="text-3xl font-bold leading-none my-0.5">9.8</p>
                        <p className={`text-xs font-bold ${darkMode ? 'text-gray-400' : 'text-gray-900'}`}>Total Score</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
