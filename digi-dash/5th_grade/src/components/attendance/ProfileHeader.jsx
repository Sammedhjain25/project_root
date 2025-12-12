import { studentData, attendanceMetrics } from '../../data/mockData';
import StatChip from './StatChip';
import { BookOpen, CheckCircle, XCircle, CalendarX } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <div className="bg-p-blue rounded-card p-4 sm:p-6 mb-6 min-h-[300px] lg:min-h-[200px] xl:min-h-[300px] soft-fade" style={{ boxShadow: "none" }}>
      <h2 className="text-lg sm:text-[20px] font-poppins font-semibold text-text-primary" style={{ marginBottom: '50px' }}>
        Student Details
      </h2>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-8 text-center sm:text-left">
        {/* Avatar */}
        <div className="relative soft-fade soft-fade-delay-1">
          <div className="w-[72px] h-[72px] rounded-full bg-p-blue dark:bg-[#232730] flex items-center justify-center overflow-hidden ring-2 ring-white dark:ring-[#232730] shadow-card">
            <img
              src={studentData.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(studentData.name)}&background=1678FF&color=fff&size=72`}
              alt={studentData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Student Info */}
        <div className="flex-1 soft-fade soft-fade-delay-1 w-full">
          <h1 className="text-lg sm:text-[20px] font-poppins font-bold text-text-primary mb-4">
            {studentData.name}
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-sm font-poppins">
            <div className="flex items-center gap-2">
              <span className="text-text-muted font-poppins">ID:</span>
              <span className="text-text-primary font-medium font-poppins">{studentData.id}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-muted"></div>
            <div className="flex items-center gap-2">
              <span className="text-text-muted font-poppins">Number:</span>
              <span className="text-text-primary font-medium font-poppins">{studentData.number}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-muted"></div>
            <div className="flex items-center gap-2">
              <span className="text-text-muted font-poppins">Email:</span>
              <span className="text-text-primary font-medium font-poppins">{studentData.email}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-muted"></div>
            <div className="flex items-center gap-2">
              <span className="text-text-muted font-poppins">Address:</span>
              <span className="text-text-primary font-medium font-poppins">{studentData.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stat Chips */}
      <div className="grid grid-cols-1 md:!grid md:!grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:!gap-3 lg:gap-3 xl:gap-6">
        <StatChip
          icon={<BookOpen className="w-3 h-3" />}
          value={attendanceMetrics.totalClasses}
          label="Total Classes"
          percentage={100}
          className="soft-fade soft-fade-delay-1"
        />
        <StatChip
          icon={<CheckCircle className="w-3 h-3" />}
          value={attendanceMetrics.totalPresent}
          label="Attended"
          totalClasses={attendanceMetrics.totalClasses}
          className="soft-fade soft-fade-delay-2"
        />
        <StatChip
          icon={<XCircle className="w-3 h-3" />}
          value={attendanceMetrics.totalAbsent}
          label="Absent"
          totalClasses={attendanceMetrics.totalClasses}
          className="soft-fade soft-fade-delay-3"
        />
        <StatChip
          icon={<CalendarX className="w-3 h-3" />}
          value={attendanceMetrics.totalLeaves}
          label="Leaves"
          totalClasses={attendanceMetrics.totalClasses}
          className="soft-fade soft-fade-delay-4"
        />
      </div>
    </div>
  );
}
