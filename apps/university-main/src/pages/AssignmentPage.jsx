import React, { useState, useRef } from 'react';
import { PageWithSidebar } from '../components/layouts/PageWithSidebar';
import { DashboardNavbar } from '../components/ui/dashboard-navbar';
import { useDarkMode } from '../contexts/DarkModeContext';
import { FileText, Clock, CheckCircle, AlertCircle, Upload } from 'lucide-react';

const AssignmentPage = () => {
  const { darkMode } = useDarkMode();
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState({});
  const [currentAssignmentId, setCurrentAssignmentId] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && currentAssignmentId) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const allowedExtensions = ['.pdf', '.doc', '.docx'];
      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

      if (allowedTypes.includes(file.type) || allowedExtensions.includes(fileExtension)) {
        setSelectedFiles(prev => ({
          ...prev,
          [currentAssignmentId]: file
        }));
        alert(`File "${file.name}" selected successfully! Click Submit again to upload.`);
      } else {
        alert('Please select only PDF or DOC/DOCX files.');
        event.target.value = '';
      }
    }
    setCurrentAssignmentId(null);
  };

  // Handle submit button click
  const handleSubmitClick = (assignmentId) => {
    setCurrentAssignmentId(assignmentId);
    setTimeout(() => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    }, 0);
  };

  const stats = [
    { label: 'Total Assignments', value: '12', icon: FileText, color: 'bg-blue-500' },
    { label: 'Pending', value: '5', icon: Clock, color: 'bg-blue-500' },
    { label: 'Submitted', value: '7', icon: CheckCircle, color: 'bg-blue-500' },
    { label: 'Overdue', value: '2', icon: AlertCircle, color: 'bg-blue-500' },
  ];

  const submitToday = [
    {
      id: 'submit-1',
      subject: 'Mathematics',
      title: 'Assignment',
      description: 'Complete chapters 5-7 exercises and solve all practice problems',
      dueDate: 'Tomorrow',
      bgColor: 'bg-red-50',
      textColor: 'text-red-900',
      badgeColor: 'bg-red-100 text-red-600',
    },
    {
      id: 'submit-2',
      subject: 'Science',
      title: 'Project',
      description: 'Create a solar system presentation with detailed planet information',
      dueDate: '3 days',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-900',
      badgeColor: 'bg-blue-100 text-blue-600',
    },
    {
      id: 'submit-3',
      subject: 'English',
      title: 'Essay',
      description: 'Write a 500-word essay on Shakespeare\'s influence on modern literature',
      dueDate: 'Today',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-900',
      badgeColor: 'bg-purple-100 text-purple-600',
    },
    {
      id: 'submit-4',
      subject: 'History',
      title: 'Research',
      description: 'Research and document the causes of World War II with references',
      dueDate: '2 days',
      bgColor: 'bg-green-50',
      textColor: 'text-green-900',
      badgeColor: 'bg-green-100 text-green-600',
    },
    {
      id: 'submit-5',
      subject: 'Chemistry',
      title: 'Lab Report',
      description: 'Complete lab report on chemical reactions and bonding experiments',
      dueDate: 'Tomorrow',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-900',
      badgeColor: 'bg-orange-100 text-orange-600',
    },
  ];

  const assignmentList = [
    { id: 'assign-1', number: 1, title: 'Assignment 1: Mathematics Algebra', status: 'Pending' },
    { id: 'assign-2', number: 2, title: 'Assignment 2: Physics Thermodynamics', status: 'Submitted' },
    { id: 'assign-3', number: 3, title: 'Assignment 3: Chemistry Organic', status: 'Pending' },
    { id: 'assign-4', number: 4, title: 'Assignment 4: English Literature', status: 'Submitted' },
    { id: 'assign-5', number: 5, title: 'Assignment 5: Computer Science', status: 'Pending' },
  ];

  return (
    <PageWithSidebar>
      <div className="flex flex-1 min-w-0 h-full p-2 sm:p-3 md:p-4 lg:p-6">
        <div
          className={`w-full h-full rounded-xl shadow-lg flex flex-col overflow-hidden relative ${!darkMode ? 'bg-slate-100' : ''}`}
          style={darkMode ? {
            backgroundImage: "url('/img/body-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          } : {}}
        >
          {/* Navbar */}
          <DashboardNavbar />

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 md:p-6 relative scrollbar-hide">
            <div className="max-w-[1400px] mx-auto">
              {/* Page Header */}
              <div className="mb-6 sm:mb-8">
                <h1 className={`text-2xl sm:text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Assignments</h1>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>Manage and track your academic tasks with style</p>
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />

              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`${darkMode ? 'bg-[#141E5A]' : 'bg-white'} rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>{stat.label}</p>
                        <p className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</p>
                      </div>
                      <div className={`${stat.color} p-2 sm:p-3 rounded-lg sm:rounded-xl`}>
                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
                {/* Assignment List Section - 60% (3/5) */}
                <div className={`lg:col-span-3 ${darkMode ? 'bg-[#141E5A]' : 'bg-white'} rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
                  <h2 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Assignment List</h2>

                  <div className="space-y-3">
                    {assignmentList.map((assignment) => (
                      <div
                        key={assignment.id}
                        className={`${darkMode ? 'bg-[#1a2557]' : 'bg-gray-50'} rounded-lg sm:rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:shadow-md transition-shadow gap-3 sm:gap-0`}
                      >
                        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${darkMode ? 'bg-blue-500/20' : 'bg-blue-100'} flex items-center justify-center flex-shrink-0`}>
                            <span className={`text-sm sm:text-base font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                              {assignment.number}
                            </span>
                          </div>
                          <span className={`text-sm sm:text-base font-medium ${darkMode ? 'text-white' : 'text-gray-900'} truncate`}>
                            {assignment.title}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
                          {assignment.status === 'Pending' ? (
                            <>
                              <span className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold ${darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                                <Clock className="w-3.5 h-3.5" />
                                Pending
                              </span>
                              <button
                                onClick={() => handleSubmitClick(assignment.id)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
                              >
                                Submit
                              </button>
                            </>
                          ) : (
                            <span className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold ${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                              <CheckCircle className="w-3.5 h-3.5" />
                              Submitted
                            </span>
                          )}
                          <button className={`p-1.5 sm:p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}>
                            <Upload className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Today Section - 40% (2/5) */}
                <div className={`lg:col-span-2 ${darkMode ? 'bg-[#141E5A]' : 'bg-white'} rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
                  <h2 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Submit Today</h2>

                  <div className="overflow-y-auto scrollbar-hide max-h-[400px] sm:max-h-[500px]">
                    <div className="space-y-4">
                      {submitToday.map((assignment) => (
                        <div
                          key={assignment.id}
                          className={`${assignment.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-5 relative`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <span className={`${assignment.badgeColor} px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold`}>
                                {assignment.subject}
                              </span>
                            </div>
                          </div>

                          <h3 className={`${assignment.textColor} font-bold text-base sm:text-lg mb-2`}>
                            {assignment.subject}
                          </h3>
                          <h4 className={`${assignment.textColor} font-semibold text-sm sm:text-base mb-3`}>
                            {assignment.title}
                          </h4>

                          <p className={`${assignment.textColor} text-xs sm:text-sm mb-4 opacity-80 line-clamp-2 sm:line-clamp-none`}>
                            {assignment.description}
                          </p>

                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                            <div className="flex items-center gap-2">
                              <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${assignment.textColor}`} />
                              <span className={`text-xs sm:text-sm font-medium ${assignment.textColor}`}>
                                Due: {assignment.dueDate}
                              </span>
                            </div>
                            <button
                              onClick={() => handleSubmitClick(assignment.id)}
                              className="bg-blue-500 hover:bg-blue-600 text-white px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
                            >
                              <Upload className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              Submit
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default AssignmentPage;
