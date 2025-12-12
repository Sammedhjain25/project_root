import React from 'react';
import { PageWithSidebar } from '../components/layouts/PageWithSidebar';
import { DashboardNavbar } from '../components/ui/dashboard-navbar';
import { MuiPerformanceBarChart } from '../components/charts/MuiPerformanceBarChart';
import { MuiSkillsPieChart } from '../components/charts/MuiSkillsPieChart';
import { MuiGradeProgressLineChart } from '../components/charts/MuiGradeProgressLineChart';

// Sample data - ready to be replaced with API data
const barData = [
    { subject: "Math", student: 88, classAvg: 78 },
    { subject: "Science", student: 95, classAvg: 80 },
    { subject: "English", student: 87, classAvg: 82 },
    { subject: "History", student: 97, classAvg: 78 },
    { subject: "CS", student: 89, classAvg: 72 }
];

const skillsData = [
    { name: "Mathematics", value: 18 },
    { name: "Science", value: 17 },
    { name: "English", value: 16 },
    { name: "History", value: 16 },
    { name: "Computer Science", value: 15 },
    { name: "Arts", value: 17 }
];

const gradeData = [
    { month: "Jan", score: 80 },
    { month: "Feb", score: 83 },
    { month: "Mar", score: 86 },
    { month: "Apr", score: 85 },
    { month: "May", score: 89 },
    { month: "Jun", score: 88 },
    { month: "Jul", score: 90 },
    { month: "Aug", score: 92 },
    { month: "Sep", score: 94 }
];

function PerformancePage() {
    return (
        <PageWithSidebar>
            <div className="flex flex-1 min-w-0 h-full p-2 sm:p-3 md:p-4 lg:p-6">
                <div className="w-full h-full bg-[#F5F7FB] dark:bg-[#040B2C] rounded-xl shadow-lg flex flex-col overflow-hidden relative">
                    {/* Static Navbar at top */}
                    <div className="bg-white dark:bg-gradient-to-r dark:from-[#10194E] dark:to-[#070F35]">
                        <DashboardNavbar />
                    </div>

                    {/* Scrollable content area */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-5 lg:p-6 relative scrollbar-hide font-poppins">
                        <div className="max-w-[1400px] mx-auto">
                            {/* Page Title */}
                            <div className="mb-4 sm:mb-5 lg:mb-6">
                                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#020617] dark:text-white">Performance Analysis</h1>
                                <p className="text-xs sm:text-sm text-[#64748B] dark:text-white/60 mt-1">Track your child's academic progress and skills development</p>
                            </div>

                            {/* Charts Grid */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                {/* Bar Chart */}
                                <MuiPerformanceBarChart data={barData} />

                                {/* Pie Chart */}
                                <MuiSkillsPieChart data={skillsData} />

                                {/* Line Chart (Full Width) */}
                                <div className="xl:col-span-2">
                                    <MuiGradeProgressLineChart data={gradeData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWithSidebar>
    );
}

export default PerformancePage;
