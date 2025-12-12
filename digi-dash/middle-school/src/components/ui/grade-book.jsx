import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';

const GradeBook = () => {
    const grades = [
        { subject: 'Mathematics', max: 100, min: 35, obtained: 92, color: 'bg-green-500', width: '92%' },
        { subject: 'Science', max: 100, min: 35, obtained: 88, color: 'bg-green-500', width: '88%' },
        { subject: 'English', max: 100, min: 35, obtained: 75, color: 'bg-green-500', width: '75%' },
        { subject: 'History', max: 100, min: 35, obtained: 65, color: 'bg-blue-500', width: '65%' },
        { subject: 'Art', max: 50, min: 18, obtained: 48, color: 'bg-green-500', width: '96%' }, // 48/50 is 96%
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 w-full h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Grade Book</h2>
            </div>

            <div className="w-full">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-50">
                            <th className="pb-4 pl-2">Subject</th>
                            <th className="pb-4 text-center">Max Marks</th>
                            <th className="pb-4 text-center">Min Marks</th>
                            <th className="pb-4 text-center">Marks Obtained</th>
                            <th className="pb-4 text-right pr-2">Result</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {grades.map((grade, index) => (
                            <tr key={index} className="group hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 pl-2 font-semibold text-gray-900">{grade.subject}</td>
                                <td className="py-4 text-center text-gray-500">{grade.max}</td>
                                <td className="py-4 text-center text-gray-500">{grade.min}</td>
                                <td className="py-4 text-center font-bold text-gray-900">
                                    {grade.obtained}
                                </td>
                                <td className="py-4 text-right pr-2">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4" />
                                        Pass
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export { GradeBook };
