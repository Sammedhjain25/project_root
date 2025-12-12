import ProfileHeader from '../components/attendance/ProfileHeader';
import AttendanceRate from '../components/attendance/AttendanceRate';
import VerticalMetric from '../components/attendance/VerticalMetric';
import TopStudentsTable from '../components/attendance/TopStudentsTable';
import { attendanceMetrics } from '../data/mockData';
import { CheckCircle, XCircle, Calendar } from 'lucide-react';
import { PageWithSidebar } from '../components/layouts/PageWithSidebar';
import { DashboardNavbar } from '../components/ui/dashboard-navbar';
import { useDarkMode } from '../contexts/DarkModeContext';

function StudentDetailsPage() {
  const { darkMode } = useDarkMode();

  return (
    <PageWithSidebar>
      <div className="flex flex-1 min-w-0 h-full p-2 sm:p-3 md:p-4 lg:p-6 @[media(min-width:1024px)_and_(max-width:1366px)]:p-4">
        <div
          className={`w-full h-full rounded-xl shadow-lg flex flex-col overflow-hidden relative ${!darkMode ? 'bg-slate-100' : ''}`}
          style={darkMode ? {
            backgroundImage: "url('/img/body-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          } : {}}
        >
          {/* Static Navbar at top */}
          <DashboardNavbar />
          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 md:p-6 relative scrollbar-hide font-poppins attendance-section @[media(min-width:1024px)_and_(max-width:1366px)]:p-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="max-w-[1280px] mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {/* Profile Header */}
              <ProfileHeader />

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-12 @[media(min-width:1024px)_and_(max-width:1366px)]:grid-cols-1 gap-4 sm:gap-6">
                {/* Left Column - Attendance Rate - Full width on mobile, 4 columns on xl */}
                <div className="xl:col-span-4 @[media(min-width:1024px)_and_(max-width:1366px)]:col-span-1 space-y-4 sm:space-y-6">
                  <AttendanceRate />
                </div>

                <div className="xl:col-span-8 @[media(min-width:1024px)_and_(max-width:1366px)]:col-span-1">
                  <div className="bg-card dark:!bg-[#141E5A] rounded-card shadow-card p-4 mb-4 sm:mb-6 overflow-hidden min-h-[300px] sm:min-h-[420px] soft-fade soft-fade-delay-2" style={{ boxShadow: "0 6px 20px rgba(15,23,42,0.06)" }}>
                    <h3 className="text-lg sm:text-[20px] font-poppins font-semibold text-[#0F172A] dark:text-white mb-4">Summary</h3>
                    <div className="flex flex-col xl:flex-row flex-wrap gap-4 sm:gap-6 justify-center items-center">
                      <VerticalMetric
                        value={attendanceMetrics.totalPresent}
                        label="Total Present"
                        icon={<CheckCircle className="w-4 h-4 text-white" />}
                        bgColor="bg-blue-50"
                        fillColor="bg-blue-400"
                        iconBgColor="bg-blue-400"
                        textColor="text-blue-900"
                        labelColor="text-blue-700"
                        className="soft-fade soft-fade-delay-1"
                      />
                      <VerticalMetric
                        value={attendanceMetrics.totalAbsent}
                        label="Total Absent"
                        icon={<XCircle className="w-4 h-4 text-white" />}
                        bgColor="bg-p-pink"
                        fillColor="bg-red"
                        iconBgColor="bg-red"
                        className="soft-fade soft-fade-delay-2"
                      />
                      <VerticalMetric
                        value={attendanceMetrics.totalLeaves}
                        label="Total Leaves"
                        icon={<Calendar className="w-4 h-4 text-white" />}
                        bgColor="bg-p-orange"
                        fillColor="bg-orange"
                        iconBgColor="bg-orange"
                        className="soft-fade soft-fade-delay-3"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Students Table */}
              <div className="mt-3">
                <TopStudentsTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWithSidebar>
  );
}

export default StudentDetailsPage;

