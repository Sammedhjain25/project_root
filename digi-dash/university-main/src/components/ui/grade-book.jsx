import React from "react";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { FileText, CheckCircle } from "lucide-react";

const grades = [
    { subject: "Mathematics", max: 100, min: 35, obtained: 92, result: "Pass", color: "bg-green-500" },
    { subject: "Science", max: 100, min: 35, obtained: 88, result: "Pass", color: "bg-green-500" },
    { subject: "English", max: 100, min: 35, obtained: 75, result: "Pass", color: "bg-green-500" },
    { subject: "History", max: 100, min: 35, obtained: 65, result: "Pass", color: "bg-blue-500" },
    { subject: "Art", max: 50, min: 18, obtained: 48, result: "Pass", color: "bg-green-500" },
];

export const GradeBook = () => {
    const { darkMode } = useDarkMode();

    return (
        <div
            className={`rounded-[20px] p-6 w-full h-full flex flex-col ${darkMode ? 'bg-[#111c44] text-white' : 'bg-white text-slate-900'} shadow-sm`}
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold">Grade Book</h3>
            </div>

            <div className="overflow-x-auto scrollbar-hide flex-1">
                <table className="w-full min-w-[600px]">
                    <thead>
                        <tr className={`text-xs uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                            <th className="pb-4 text-left font-semibold">Subject</th>
                            <th className="pb-4 text-center font-semibold">Max Marks</th>
                            <th className="pb-4 text-center font-semibold">Min Marks</th>
                            <th className="pb-4 text-left font-semibold pl-4">Marks Obtained</th>
                            <th className="pb-4 text-right font-semibold">Result</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {grades.map((grade, index) => (
                            <tr key={index} className={`group ${index !== grades.length - 1 ? 'border-b' : ''} ${darkMode ? 'border-gray-800' : 'border-gray-50'}`}>
                                <td className="py-4 font-semibold">{grade.subject}</td>
                                <td className={`py-4 text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{grade.max}</td>
                                <td className={`py-4 text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{grade.min}</td>
                                <td className="py-4 pl-4">
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold w-6">{grade.obtained}</span>
                                        <div className={`flex-1 h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full overflow-hidden max-w-[120px]`}>
                                            <div
                                                className={`h-full rounded-full ${grade.color}`}
                                                style={{ width: `${(grade.obtained / grade.max) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 text-right">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${grade.result === 'Pass'
                                        ? 'bg-green-100 text-green-600'
                                        : 'bg-red-100 text-red-600'
                                        }`}>
                                        {grade.result === 'Pass' && (
                                            <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                                        )}
                                        {grade.result}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
