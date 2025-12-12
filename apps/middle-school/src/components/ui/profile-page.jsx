import React, { useState } from 'react';
import { Globe, Palette, Shield } from 'lucide-react';
import { DashboardNavbar } from '@/components/ui/dashboard-navbar';
import { useDarkMode } from '@/contexts/DarkModeContext';

export function ProfilePage() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [profileVisibility, setProfileVisibility] = useState(true);
    const [showGrades, setShowGrades] = useState(true);
    const [usageAnalytics, setUsageAnalytics] = useState(true);

    return (
        <div className="flex flex-1 min-w-0 h-full p-2 sm:p-3 md:p-4 lg:p-6">
            <div className="w-full h-full bg-slate-100 rounded-xl shadow-lg flex flex-col overflow-hidden">
                {/* Navbar at top */}
                <DashboardNavbar />

                {/* Scrollable content area */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Side - Profile Information Card with Blue Curved Background */}
                        <div className="lg:w-80 flex-shrink-0">
                            <div className="bg-white rounded-3xl shadow-md overflow-hidden">
                                {/* Blue Curved Background Section */}
                                <div className="relative bg-gradient-to-br from-blue-600 to-blue-500 pt-12 pb-20 px-8">
                                    {/* Curved bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-[3rem]"></div>

                                    {/* Profile Picture */}
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center overflow-hidden shadow-xl ring-4 ring-white/30">
                                            <img
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
                                                alt="Profile"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* White Content Section */}
                                <div className="px-8 pb-8 -mt-4">
                                    {/* Personal Information */}
                                    <div className="pt-4">
                                        <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Personal Information</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1 block">Name</label>
                                                <div className="text-sm font-medium text-slate-900 bg-slate-50 rounded-lg px-3 py-2.5 border border-slate-200">
                                                    Amira
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1 block">D.O.B</label>
                                                <div className="text-sm font-medium text-slate-900 bg-slate-50 rounded-lg px-3 py-2.5 border border-slate-200">
                                                    31/02/2004
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1 block">Ph No</label>
                                                <div className="text-sm font-medium text-slate-900 bg-slate-50 rounded-lg px-3 py-2.5 border border-slate-200">
                                                    1234567890
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1 block">Courses</label>
                                                <div className="text-sm font-medium text-slate-900 bg-slate-50 rounded-lg px-3 py-2.5 border border-slate-200">
                                                    B.Tech CSE
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Other Content */}
                        <div className="flex-1 space-y-6">
                            {/* Language & Region */}
                            <div className="bg-white rounded-2xl shadow-md p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                        <Globe className="w-5 h-5 text-slate-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-900">Language & Region</h3>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-700">Language</span>
                                    <span className="text-slate-500">English (US)</span>
                                </div>
                            </div>

                            {/* Appearance */}
                            <div className="bg-white rounded-2xl shadow-md p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                        <Palette className="w-5 h-5 text-slate-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-900">Appearance</h3>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-slate-900 font-medium">Dark Mode</div>
                                        <div className="text-sm text-slate-500">Toggle between light and dark theme</div>
                                    </div>
                                    <button
                                        onClick={toggleDarkMode}
                                        className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${darkMode ? 'bg-blue-600' : 'bg-slate-300'
                                            }`}
                                    >
                                        <div
                                            className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${darkMode ? 'transform translate-x-7' : ''
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Privacy */}
                            <div className="bg-white rounded-2xl shadow-md p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-slate-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">Privacy</h3>
                                        <p className="text-sm text-slate-500">Control your privacy settings</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Profile Visibility */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-slate-900 font-medium">Profile Visibility</div>
                                            <div className="text-sm text-slate-500">Make your profile visible to other students</div>
                                        </div>
                                        <button
                                            onClick={() => setProfileVisibility(!profileVisibility)}
                                            className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${profileVisibility ? 'bg-blue-600' : 'bg-slate-300'
                                                }`}
                                        >
                                            <div
                                                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${profileVisibility ? 'transform translate-x-7' : ''
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    {/* Show Grades */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-slate-900 font-medium">Show Grades</div>
                                            <div className="text-sm text-slate-500">Allow instructors to view your grades</div>
                                        </div>
                                        <button
                                            onClick={() => setShowGrades(!showGrades)}
                                            className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${showGrades ? 'bg-blue-600' : 'bg-slate-300'
                                                }`}
                                        >
                                            <div
                                                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${showGrades ? 'transform translate-x-7' : ''
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    {/* Usage Analytics */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-slate-900 font-medium">Usage Analytics</div>
                                            <div className="text-sm text-slate-500">Help improve the platform by sharing usage data</div>
                                        </div>
                                        <button
                                            onClick={() => setUsageAnalytics(!usageAnalytics)}
                                            className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${usageAnalytics ? 'bg-blue-600' : 'bg-slate-300'
                                                }`}
                                        >
                                            <div
                                                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${usageAnalytics ? 'transform translate-x-7' : ''
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
