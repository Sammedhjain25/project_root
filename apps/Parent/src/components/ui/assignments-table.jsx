import React from "react";
import { FileText, CheckCircle, Clock, AlertCircle, Calculator, Beaker, BookOpen, BookA, Code, TestTube } from "lucide-react";

// Subject icon mapping
const subjectIcons = {
    "Mathematics": Calculator,
    "Science": Beaker,
    "History": BookOpen,
    "English": BookA,
    "Computer Science": Code,
    "Chemistry": TestTube
};

const assignments = [
    {
        id: 1,
        name: "Math Homework",
        subject: "Mathematics",
        dueDate: "25 Mar",
        status: "Submitted",
        statusColor: "text-green-600",
        statusBg: "bg-green-100",
        icon: CheckCircle
    },
    {
        id: 2,
        name: "Science Project",
        subject: "Science",
        dueDate: "26 Mar",
        status: "Pending",
        statusColor: "text-orange-600",
        statusBg: "bg-orange-100",
        icon: AlertCircle
    },
    {
        id: 3,
        name: "History Essay",
        subject: "History",
        dueDate: "20 Mar",
        status: "In Progress",
        statusColor: "text-[#171E57]",
        statusBg: "bg-[#171E57]/10",
        icon: Clock
    },
    {
        id: 4,
        name: "English Grammar Worksheet",
        subject: "English",
        dueDate: "18 Mar",
        status: "Submitted",
        statusColor: "text-green-600",
        statusBg: "bg-green-100",
        icon: CheckCircle
    },
    {
        id: 5,
        name: "Programming Lab",
        subject: "Computer Science",
        dueDate: "27 Mar",
        status: "Submitted",
        statusColor: "text-green-600",
        statusBg: "bg-green-100",
        icon: CheckCircle
    },
    {
        id: 6,
        name: "Chemistry Lab Notes",
        subject: "Chemistry",
        dueDate: "21 Mar",
        status: "Pending",
        statusColor: "text-orange-600",
        statusBg: "bg-orange-100",
        icon: AlertCircle
    }
];

export const AssignmentsTable = () => {
    return (
        <div className="w-full bg-white dark:bg-[#0A1333] rounded-xl shadow-sm border border-gray-100 dark:border-white/10 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100 dark:border-white/10 flex-shrink-0">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-400 dark:text-blue-300" />
                    Assignments
                </h3>
            </div>

            {/* Scrollable Table */}
            {/* Scrollable Table */}
            <div className="max-h-none md:max-h-[420px] overflow-y-visible md:overflow-y-auto pr-1 scrollbar-hide">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="sticky top-0 bg-white dark:bg-[#0A1333] z-10">
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-2 sm:px-4 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">Assignment</th>
                                <th className="text-left py-3 px-2 sm:px-4 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase hidden sm:table-cell">Subject</th>
                                <th className="text-left py-3 px-2 sm:px-4 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">Due Date</th>
                                <th className="text-left py-3 px-2 sm:px-4 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase">
                                    <span className="hidden sm:inline">Completion</span>
                                    <span className="sm:hidden">Status</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignments.map((assignment) => {
                                const StatusIcon = assignment.icon;
                                const SubjectIcon = subjectIcons[assignment.subject] || FileText;
                                return (
                                    <tr key={assignment.id} className="border-b border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="py-3 sm:py-4 px-2 sm:px-4">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                                                    <SubjectIcon className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 sm:whitespace-nowrap">{assignment.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 sm:py-4 px-2 sm:px-4 hidden sm:table-cell">
                                            <span className="text-sm text-gray-700 dark:text-gray-300">{assignment.subject}</span>
                                        </td>
                                        <td className="py-3 sm:py-4 px-2 sm:px-4">
                                            <span className="text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap">{assignment.dueDate}</span>
                                        </td>
                                        <td className="py-3 sm:py-4 px-2 sm:px-4">
                                            <div className={`inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ${assignment.statusBg}`}>
                                                <StatusIcon className={`w-3.5 h-3.5 ${assignment.statusColor}`} />
                                                <span className={`text-[10px] sm:text-xs font-semibold ${assignment.statusColor}`}>
                                                    {assignment.status}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer stats */}
            <div className="flex items-center justify-between p-5 md:px-6 md:py-4 border-t border-gray-100 dark:border-white/10 flex-shrink-0">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-xs text-slate-600 dark:text-slate-300">Submitted: 3</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span className="text-xs text-slate-600 dark:text-slate-300">Pending: 2</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#171E57]"></div>
                        <span className="text-xs text-slate-600 dark:text-slate-300">In Progress: 1</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
