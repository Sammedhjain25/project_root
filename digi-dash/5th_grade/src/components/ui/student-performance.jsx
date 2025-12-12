import React from 'react';
import { Badge } from './badge';
import { TrendingDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { CustomPieChart } from './custom-pie-chart';

export const StudentPerformance = () => {
    const { mode } = useTheme();
    const isDark = mode === 'dark';
    const isHomePage = window.location.pathname === '/';

    // Chart colors
    const chartColors = {
        math: '#60D5F2',
        science: '#A78BFA',
        english: '#F59E0B',
        social: '#10B981',
        hindi: '#EF4444',
    };

    const chartData = [
        { category: 'math', marks: 92 },
        { category: 'science', marks: 88 },
        { category: 'english', marks: 85 },
        { category: 'social', marks: 90 },
        { category: 'hindi', marks: 78 },
    ];

    // Sort the data by marks in ascending order (smallest to largest) - makes graph look better
    const sortedChartData = [...chartData].sort((a, b) => a.marks - b.marks);

    const chartConfig = {
        marks: {
            label: 'Marks',
        },
        math: {
            label: 'Math',
            color: '#60D5F2',
        },
        science: {
            label: 'Science',
            color: '#A78BFA',
        },
        english: {
            label: 'English',
            color: '#F59E0B',
        },
        social: {
            label: 'Social Studies',
            color: '#10B981',
        },
        hindi: {
            label: 'Hindi',
            color: '#EF4444',
        },
    };

    return (
        <div className={`
            w-full h-full rounded-2xl p-3 sm:p-4 md:p-3 lg:p-4 shadow-sm flex flex-col transition-colors duration-200 overflow-hidden
            ${isDark && isHomePage ? 'bg-[#181B21]' : 'bg-white'}
        `}>
            <div className="flex items-center justify-center pb-2">
                <h2 className={`
                    text-xl font-bold
                    ${isDark && isHomePage ? 'text-[#FFFFFF]' : 'text-gray-900'}
                `}>
                    Your Performance
                    <Badge
                        variant="outline"
                        className={`
                            border-none ml-2
                            ${isDark && isHomePage
                                ? 'text-[#06B6D4] bg-[#06B6D4]/10'
                                : 'text-red-500 bg-red-500/10'
                            }
                        `}
                    >
                        <TrendingDown className="h-4 w-4" />
                        <span>5.2%</span>
                    </Badge>
                </h2>
            </div>
            <div
                className="flex-1 flex items-center justify-center md:h-[200px] lg:h-auto"
                style={{
                    width: '100%',
                    maxWidth: window.innerWidth < 1024 ? '100%' : undefined,
                    height: window.innerWidth < 1024 ? 'clamp(170px, 28vw, 230px)' : 'auto',
                    minHeight: window.innerWidth < 1024 ? '170px' : undefined
                }}
            >
                <style>{`
                    /* Mobile pie chart fix only */
                    @media (max-width: 480px) {
                        .performance-chart-wrapper {
                            max-width: 220px;
                            max-height: 220px;
                            margin: 0 auto;
                        }

                        .performance-chart-wrapper svg {
                            max-width: 220px !important;
                            max-height: 220px !important;
                        }
                    }
                `}</style>
                <div className="performance-chart-wrapper w-full h-full md:w-[200px] md:h-[200px] lg:w-full lg:h-full flex items-center justify-center">
                    {/* Wrapper to ensure chart always has measurable size */}
                    <div className="relative w-full min-h-[200px] md:min-h-[260px]">
                        <CustomPieChart data={sortedChartData} colors={chartColors} />
                    </div>
                </div>
            </div>
        </div>
    );
};
