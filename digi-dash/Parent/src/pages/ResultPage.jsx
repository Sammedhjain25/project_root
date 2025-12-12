import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PageWithSidebar } from '../components/layouts/PageWithSidebar';
import { DashboardNavbar } from '../components/ui/dashboard-navbar';
import { useDarkMode } from '../contexts/DarkModeContext';
import ResultProfileCard from '../components/results/ResultProfileCard';
import TopPerformersCard from '../components/results/TopPerformersCard';
import RoundedPieChart from '../components/results/RoundedPieChart';
import ActivityCard from '../components/results/ActivityCard';
import CoursePerformance from '../components/results/CoursePerformance';
import avatar from '../assets/images/avatar-simmmple.png';

function ResultPage() {
  const { darkMode } = useDarkMode();

  // Create Material-UI theme that syncs with dark mode
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#6366f1',
      },
      secondary: {
        main: '#8b5cf6',
      },
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageWithSidebar>
        <div className="flex flex-1 min-w-0 h-full p-2 sm:p-3 md:p-4 lg:p-2 xl:p-6">
          <div className="w-full h-full bg-slate-100 dark:bg-slate-900 rounded-xl shadow-lg flex flex-col overflow-hidden relative">
            {/* Static Navbar at top */}
            <DashboardNavbar />
            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-hide">
              <div className="w-full mx-auto px-4 py-6 space-y-6 xl:max-w-[1600px] xl:px-6 xl:py-6 xl:space-y-8" style={{ fontFamily: "Poppins, sans-serif" }}>
                {/* Top Section: Profile on left, Top Performers + Subject Marks on right */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full items-start justify-items-stretch">
                  {/* Column 1: Profile Information */}
                  <div className="w-full h-fit self-start min-w-0">
                    <ResultProfileCard
                      title="Profile Information"
                      avatar={avatar}
                      info={{
                        "Full Name": "Mark Johnson",
                        Mobile: "(44) 123 1234 123",
                        Email: "mark@simmmple.com",
                        Location: "United States",
                      }}
                    />
                  </div>

                  {/* Columns 2 & 3: Top Performers and Subject Marks, with GPA cards below */}
                  <div className="w-full xl:col-span-2 flex flex-col gap-6 h-fit self-start min-w-0">
                    {/* Top row: Top Performers and Subject Marks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 w-full items-start">
                      <div className="w-full min-w-0">
                        <TopPerformersCard />
                      </div>

                      <div className="w-full min-w-0">
                        <RoundedPieChart />
                      </div>
                    </div>

                    {/* Bottom row: 3 GPA Cards below Top Performers and Subject Marks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full mt-6 xl:mt-8">
                      <div className="w-full min-w-0 lg:max-w-none xl:max-w-[240px] lg:mx-0 xl:mx-auto">
                        <ActivityCard index={0} />
                      </div>
                      <div className="w-full min-w-0 lg:max-w-none xl:max-w-[240px] lg:mx-0 xl:mx-auto">
                        <ActivityCard index={1} />
                      </div>
                      <div className="w-full min-w-0 lg:max-w-none xl:max-w-[240px] lg:mx-0 xl:mx-auto md:col-span-2 lg:col-span-1 xl:col-span-1">
                        <ActivityCard index={2} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Performance Section */}
                <div className="w-full min-w-0">
                  <CoursePerformance />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWithSidebar>
    </ThemeProvider>
  );
}

export default ResultPage;

