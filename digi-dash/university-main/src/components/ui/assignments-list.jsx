import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { FileText, Clock, CheckCircle, AlertCircle, Loader, Calculator, FlaskConical, BookOpen, Languages, Code, TestTube, ArrowRight } from "lucide-react";

const assignments = [
    {
        id: 1,
        title: "Math Homework",
        subject: "Mathematics",
        dueDate: "25 Mar",
        status: "Submitted",
        icon: Calculator,
        color: "bg-blue-500"
    },
    {
        id: 2,
        title: "Science Project",
        subject: "Science",
        dueDate: "26 Mar",
        status: "Pending",
        icon: FlaskConical,
        color: "bg-orange-500"
    },
    {
        id: 3,
        title: "History Essay",
        subject: "History",
        dueDate: "20 Mar",
        status: "In Progress",
        icon: BookOpen,
        color: "bg-purple-500"
    },
    {
        id: 4,
        title: "English Grammar Worksheet",
        subject: "English",
        dueDate: "18 Mar",
        status: "Submitted",
        icon: Languages,
        color: "bg-green-500"
    },
    {
        id: 5,
        title: "Programming Lab",
        subject: "Computer Science",
        dueDate: "27 Mar",
        status: "Submitted",
        icon: Code,
        color: "bg-indigo-500"
    },
    {
        id: 6,
        title: "Chemistry Lab Notes",
        subject: "Chemistry",
        dueDate: "21 Mar",
        status: "Pending",
        icon: TestTube,
        color: "bg-red-500"
    },
];

const StatusBadge = ({ status }) => {
    const styles = {
        Submitted: "bg-green-100 text-green-600",
        Pending: "bg-orange-100 text-orange-600",
        "In Progress": "bg-slate-200 text-slate-800",
    };

    const icons = {
        Submitted: <CheckCircle className="w-3.5 h-3.5 mr-1.5" />,
        Pending: <AlertCircle className="w-3.5 h-3.5 mr-1.5" />,
        "In Progress": <Clock className="w-3.5 h-3.5 mr-1.5" />,
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-700"}`}>
            {icons[status]}
            {status}
        </span>
    );
};

export const AssignmentsList = () => {
    const { darkMode } = useDarkMode();

    return (
        <div
            className={`rounded-[20px] p-6 w-full h-full flex flex-col ${darkMode ? 'bg-[#111c44] text-white' : 'bg-white text-slate-900'} shadow-sm`}
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-bold">Assignments</h3>
                </div>
                <Link
                    to="/assignments"
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                >
                    View All
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="flex-1 overflow-x-auto scrollbar-hide">
                <table className="w-full min-w-[500px]">
                    <thead>
                        <tr className={`text-xs uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                            <th className="pb-4 text-left font-semibold pl-2">Assignment</th>
                            <th className="pb-4 text-left font-semibold">Subject</th>
                            <th className="pb-4 text-left font-semibold">Due Date</th>
                            <th className="pb-4 text-right font-semibold pr-2">Completion</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {assignments.slice(0, 4).map((assignment, index) => (
                            <tr key={index} className={`group ${index !== 3 ? 'border-b' : ''} ${darkMode ? 'border-gray-800' : 'border-gray-50'}`}>
                                <td className="py-4 pl-2">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500 text-white'}`}>
                                            <assignment.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-semibold">{assignment.title}</span>
                                    </div>
                                </td>
                                <td className={`py-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{assignment.subject}</td>
                                <td className={`py-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{assignment.dueDate}</td>
                                <td className="py-4 text-right pr-2">
                                    <StatusBadge status={assignment.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};
