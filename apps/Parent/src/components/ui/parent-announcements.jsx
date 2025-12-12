import React from "react";
import { Bell, Calendar, Clock } from "lucide-react";

const announcements = [
    {
        id: 1,
        title: "Parent–Teacher Conference Scheduled",
        date: "25 Mar",
        time: "2:00 PM",
        accentColor: "bg-[#171E57]"
    },
    {
        id: 2,
        title: "New Assignment Posted",
        date: "24 Mar",
        time: "10:30 AM",
        accentColor: "bg-[#171E57]"
    },
    {
        id: 3,
        title: "School Holiday Notice",
        date: "23 Mar",
        time: "9:00 AM",
        accentColor: "bg-[#171E57]"
    },
    {
        id: 4,
        title: "Report Cards Available",
        date: "22 Mar",
        time: "3:15 PM",
        accentColor: "bg-[#171E57]"
    },
    {
        id: 5,
        title: "Exam Schedule Released",
        date: "21 Mar",
        time: "11:00 AM",
        accentColor: "bg-[#171E57]"
    },
    {
        id: 6,
        title: "Sports Day Event",
        date: "20 Mar",
        time: "8:00 AM",
        accentColor: "bg-[#171E57]"
    }
];

export const ParentAnnouncements = () => {
    return (
        <div className="w-full h-[500px] bg-white dark:bg-[#0A1333] rounded-xl shadow-sm border border-gray-100 dark:border-white/10 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100 dark:border-white/10 flex-shrink-0">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                    <Bell className="w-5 h-5 text-blue-400 dark:text-blue-300" />
                    Announcements
                </h3>
            </div>

            {/* Scrollable Announcements List */}
            <div className="flex-1 overflow-y-auto scrollbar-hide p-5 md:p-6">
                <div className="flex flex-col gap-3">
                    {announcements.map((announcement) => (
                        <div
                            key={announcement.id}
                            className="relative rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-sm transition-shadow overflow-hidden"
                        >
                            {/* Accent Bar */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 ${announcement.accentColor}`} />

                            {/* Content */}
                            <div className="p-4 pl-5">
                                {/* Title */}
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-2">
                                    {announcement.title}
                                </h4>

                                {/* Date and Time */}
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                                        <Calendar className="w-3.5 h-3.5 text-blue-400 dark:text-blue-300" />
                                        <span>{announcement.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                                        <Clock className="w-3.5 h-3.5 text-blue-400 dark:text-blue-300" />
                                        <span>{announcement.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
