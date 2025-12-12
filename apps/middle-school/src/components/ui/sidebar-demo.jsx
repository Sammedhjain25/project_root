import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { LayoutDashboard, UserCog, Settings, LogOut, BookOpen, Calendar, ClipboardCheck, FileText, Trophy } from "lucide-react";
import { PiBooksFill } from 'react-icons/pi';
import { motion } from "framer-motion";
import CalendarEventListDemo from "@/components/ui/calendar-event-list";
import { PromoBanner } from "@/components/ui/promo-banner";
import { StatsCardsSection } from "@/components/ui/stats-cards-section";
import { DashboardNavbar } from "@/components/ui/dashboard-navbar";
import { GradeBook } from "@/components/ui/grade-book";
import { UpcomingWebinarCard } from "@/components/ui/upcoming-webinar-card";
import { LearningActivity } from "@/components/ui/learning-activity";
import { AnnouncementsSection } from "@/components/ui/announcements-section";
import { ProfilePage } from "@/components/ui/profile-page";
import avatarImage from "@/assets/images/avatar-simmmple.png";

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <LayoutDashboard className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Courses",
      href: "/courses",
      icon: (
        <BookOpen className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Events",
      href: "/events",
      icon: (
        <Calendar className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Assignments",
      href: "/assignments",
      icon: (
        <FileText className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "E-Library",
      href: "/elibrary",
      icon: (
        <PiBooksFill className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Results",
      href: "/results",
      icon: (
        <Trophy className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Attendance",
      href: "/attendance",
      icon: (
        <ClipboardCheck className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <UserCog className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <LogOut className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  // Handle link clicks
  const handleLinkClick = (label) => {
    if (label === "Profile") {
      setCurrentPage("profile");
    } else if (label === "Dashboard") {
      setCurrentPage("dashboard");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-[#1D8CF8] overflow-hidden">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <div key={idx} onClick={() => handleLinkClick(link.label)}>
                  <SidebarLink link={link} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src={avatarImage}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex-1 min-w-0 h-full">
        {currentPage === "profile" ? <ProfilePage onBackToDashboard={() => setCurrentPage("dashboard")} /> : <Dashboard onProfileClick={() => setCurrentPage("profile")} />}
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-white whitespace-pre"
      >
        Edu Learn
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </a>
  );
};

// Single white card component
const Dashboard = ({ onProfileClick }) => {
  return (
    <div className="flex flex-1 min-w-0 h-full p-2 sm:p-3 md:p-4 lg:p-6">
      <div className="w-full h-full bg-slate-100 rounded-xl shadow-lg flex flex-col overflow-hidden relative">
        {/* Static Navbar at top */}
        <DashboardNavbar onProfileClick={onProfileClick} />
        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 md:p-6 relative scrollbar-hide w-full">
          {/* Mobile/Tablet Layout */}
          <div className="flex flex-col gap-4 xl:hidden w-full max-w-full">
            {/* Promo Banner */}
            <div className="w-full">
              <PromoBanner />
            </div>
            {/* Stats Cards Section */}
            <div className="w-full">
              <StatsCardsSection />
            </div>

            {/* Calendar + Announcements - Responsive Grid */}
            {/* Mobile: Stacked (1 column) | Tablet (md-lg): 2 columns 60/40 | Desktop: Hidden (uses absolute layout) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1.5fr_1fr] gap-4">
              {/* Calendar - 60% on tablet */}
              <div className="w-full max-w-none">
                <CalendarEventListDemo />
              </div>
              {/* Announcements - 40% on tablet */}
              <div className="w-full max-w-none">
                <AnnouncementsSection />
              </div>
            </div>

            {/* Grade Book */}
            <div className="w-full">
              <GradeBook />
            </div>
            {/* Upcoming Webinar */}
            <div className="w-full">
              <UpcomingWebinarCard
                title="Next Generation Frontend Architecture Using Layout Engine And React Native Web."
                date="17 Nov 23"
                duration="32 minutes"
                onJoinClick={() => console.log('Join webinar clicked')}
              />
            </div>
            {/* Learning Activity */}
            <div className="w-full pt-4">
              <LearningActivity />
            </div>
          </div>

          {/* Desktop Layout - Original Absolute Positioning */}
          <div className="hidden xl:block">
            {/* Promo Banner at top left */}
            <div className="absolute top-6 left-6 right-[360px]">
              <PromoBanner />
            </div>
            {/* Stats Cards below banner, to the left of calendar */}
            <div className="absolute top-[250px] left-6 right-[360px]">
              <StatsCardsSection />
            </div>
            {/* Learning Activity Graph and Upcoming Webinar in a flex row */}
            <div className="absolute top-[440px] left-6 right-[360px] flex gap-4 pb-6">
              <div className="flex-[1.2] min-w-0 overflow-hidden">
                <GradeBook />
              </div>
              <div className="flex-[0.8] min-w-0 overflow-hidden">
                <UpcomingWebinarCard
                  title="Next Generation Frontend Architecture Using Layout Engine And React Native Web."
                  date="17 Nov 23"
                  duration="32 minutes"
                  onJoinClick={() => console.log('Join webinar clicked')}
                />
              </div>
            </div>
            <div className="absolute left-6 top-[880px] right-[360px] pt-8">
              <LearningActivity />
            </div>
            {/* Calendar aligned to top right with padding from banner */}
            <div className="absolute top-6 right-6">
              <CalendarEventListDemo />
            </div>
            {/* Announcements section below calendar */}
            <div className="absolute top-[660px] right-6 w-[320px] md:w-[340px] lg:w-[320px]">
              <AnnouncementsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
