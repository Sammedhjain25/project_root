import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    addMonths,
    subMonths,
    getDate,
} from "date-fns";

export const MonthlyAttendanceCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Mock attendance data generator
    const getStatus = (date) => {
        const day = getDate(date);
        const month = date.getMonth();
        const currentMonth = currentDate.getMonth();

        // Only show status for current month for this demo
        if (month !== currentMonth) return null;

        // Mock logic: 
        // - Weekends (Sat/Sun) are usually holidays (null)
        // - Randomly assign Present (blue) or Absent (red)
        const dayOfWeek = date.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) return null; // Weekend

        // Hardcoded pattern for demo consistency
        if ([2, 5, 12, 15, 18, 22, 25].includes(day)) return 'present';
        if ([8, 17, 28].includes(day)) return 'absent';

        // Default to present for other weekdays in past
        if (date < new Date() && day < 20) return 'present';

        return null;
    };

    const isCurrentMonth = isSameMonth(currentDate, new Date());

    const nextMonth = () => {
        if (!isCurrentMonth) {
            setCurrentDate(addMonths(currentDate, 1));
        }
    };

    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday start
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const calendarDays = eachDayOfInterval({
        start: startDate,
        end: endDate,
    });

    // Calculate number of weeks to distribute height evenly
    const weeks = Math.ceil(calendarDays.length / 7);

    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
        <div className="w-full h-[420px] bg-white dark:bg-[#0A1333] rounded-xl shadow-sm border border-gray-100 dark:border-white/10 p-6 flex flex-col overflow-hidden font-poppins">
            {/* Header */}
            <div className="mb-3 shrink-0">
                <h2 className="text-lg font-bold text-[#171E57] dark:text-white">
                    Monthly Attendance Overview
                </h2>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1 font-medium">
                    (+100% this month)
                </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mb-3 shrink-0 px-2">
                <button
                    onClick={prevMonth}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    aria-label="Previous month"
                >
                    <ChevronLeft className="w-4 h-4" strokeWidth={3} />
                </button>

                <h3 className="text-base font-bold text-[#0F172A] dark:text-white">
                    {format(currentDate, "MMMM yyyy")}
                </h3>

                <button
                    onClick={nextMonth}
                    disabled={isCurrentMonth}
                    className={`p-1 rounded-full transition-colors ${isCurrentMonth
                        ? "text-gray-200 dark:text-gray-700 cursor-not-allowed"
                        : "text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
                        }`}
                    aria-label="Next month"
                >
                    <ChevronRight className="w-4 h-4" strokeWidth={3} />
                </button>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-7 gap-2 mb-2 shrink-0 px-2">
                {daysOfWeek.map((day) => (
                    <div
                        key={day}
                        className="text-center text-xs font-bold text-gray-400 dark:text-gray-500"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div
                className="grid grid-cols-7 gap-2 flex-1 px-2"
                style={{ gridTemplateRows: `repeat(${weeks}, minmax(0, 1fr))` }}
            >
                {calendarDays.map((day, idx) => {
                    const isDayInCurrentMonth = isSameMonth(day, monthStart);
                    const status = getStatus(day);

                    let bgClass = "bg-[#F8F9FC] dark:bg-white/5"; // Light gray for normal days
                    let textClass = "text-[#64748B] dark:text-gray-400"; // Slate-500 for normal text

                    if (!isDayInCurrentMonth) {
                        bgClass = "bg-transparent"; // Inactive/other month
                        textClass = "text-gray-300 dark:text-gray-700";
                    } else if (status === 'present') {
                        bgClass = "bg-[#3B82F6]"; // Blue
                        textClass = "text-white font-bold";
                    } else if (status === 'absent') {
                        bgClass = "bg-red-500"; // Red
                        textClass = "text-white font-bold";
                    } else {
                        // Current month, no status (future or weekend)
                        textClass = "text-[#0F172A] dark:text-white font-bold";
                    }

                    return (
                        <div
                            key={day.toISOString()}
                            className={`
                                ${bgClass} ${textClass}
                                rounded-lg flex items-center justify-center text-xs
                                transition-colors relative h-full w-full
                            `}
                        >
                            {format(day, "d")}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
