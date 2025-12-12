import React, { useState, useEffect } from "react";
import { CheckCircle2, XCircle, FileText } from "lucide-react";

export const GradeProgressChart = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
        return () => observer.disconnect();
    }, []);

    const grades = [
        { subject: "Mathematics", max: 100, min: 35, obtained: 92, result: "Pass" },
        { subject: "Science", max: 100, min: 35, obtained: 88, result: "Pass" },
        { subject: "English", max: 100, min: 35, obtained: 75, result: "Pass" },
        { subject: "History", max: 100, min: 35, obtained: 65, result: "Pass" },
        { subject: "Art", max: 50, min: 18, obtained: 48, result: "Pass" },
    ];



    const getStatusColor = (score, max) => {
        const p = (score / max) * 100;
        if (p >= 75) return "bg-green-500";
        if (p >= 60) return "bg-blue-500";
        if (p >= 35) return "bg-yellow-500";
        return "bg-red-500";
    };

    return (
        <div className={`w-full rounded-2xl border shadow-sm overflow-hidden flex flex-col ${isDark
            ? 'bg-gradient-to-b from-[#0B1646] to-[#060C2C] border-white/10 shadow-[0_6px_20px_rgba(5,15,40,.7)]'
            : 'bg-white border-gray-200'
            }`}>
            {/* Header */}
            <div className={`p-4 md:p-6 border-b ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                        <FileText className="w-5 h-5" />
                    </div>
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Grade Book
                    </h3>
                </div>
            </div>

            {/* Table Header - Desktop Only */}
            <div className={`hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-xs font-bold uppercase tracking-wider ${isDark ? 'bg-white/5 text-gray-400' : 'bg-gray-50 text-gray-500'
                }`}>
                <div className="col-span-3">Subject</div>
                <div className="col-span-2 text-center">Max Marks</div>
                <div className="col-span-2 text-center">Min Marks</div>
                <div className="col-span-3">Marks Obtained</div>
                <div className="col-span-2 text-right">Result</div>
            </div>

            {/* Grade Rows */}
            <div className="flex-1 overflow-y-auto">
                {grades.map((grade, index) => (
                    <div key={index} className={`
                        group p-4 md:px-6 md:py-4 border-b last:border-0 transition-colors
                        ${isDark ? 'border-white/5 hover:bg-white/5' : 'border-gray-100 hover:bg-gray-50/50'}
                        ${index % 2 === 0 ? (isDark ? 'bg-transparent' : 'bg-white') : (isDark ? 'bg-white/[0.02]' : 'bg-gray-50/30')}
                    `}>
                        {/* Desktop Layout */}
                        <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                            <div className={`col-span-3 font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                                {grade.subject}
                            </div>
                            <div className={`col-span-2 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {grade.max}
                            </div>
                            <div className={`col-span-2 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {grade.min}
                            </div>
                            <div className="col-span-3">
                                <div className="flex items-center gap-3">
                                    <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {grade.obtained}
                                    </span>
                                    <div className={`flex-1 h-2 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}>
                                        <div
                                            className={`h-full rounded-full ${getStatusColor(grade.obtained, grade.max)}`}
                                            style={{ width: `${(grade.obtained / grade.max) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 flex justify-end">
                                <span className={`
                                    inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold
                                    ${grade.result === 'Pass'
                                        ? (isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700')
                                        : (isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700')
                                    }
                                `}>
                                    {grade.result === 'Pass' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                                    {grade.result}
                                </span>
                            </div>
                        </div>

                        {/* Mobile Layout */}
                        <div className="md:hidden flex flex-col gap-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {grade.subject}
                                    </h4>
                                    <div className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Max: {grade.max} • Min: {grade.min}
                                    </div>
                                </div>
                                <span className={`
                                    inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
                                    ${grade.result === 'Pass'
                                        ? (isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700')
                                        : (isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700')
                                    }
                                `}>
                                    {grade.result}
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex justify-between text-sm">
                                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Marks Obtained</span>
                                    <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {grade.obtained} <span className="text-xs font-normal text-gray-500">/ {grade.max}</span>
                                    </span>
                                </div>
                                <div className={`w-full h-2.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                                    <div
                                        className={`h-full rounded-full transition-all duration-500 ${getStatusColor(grade.obtained, grade.max)}`}
                                        style={{ width: `${(grade.obtained / grade.max) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};
