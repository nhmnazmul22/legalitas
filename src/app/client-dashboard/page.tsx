"use client";

import Dashboard from "@/components/client/Dashborad";
import Document from "@/components/client/Document";
import Invoice from "@/components/client/Invoice";
import Profile from "@/components/client/Profile";
import ProgressComponent from "@/components/client/Progress";
import Proposal from "@/components/client/Proposal";
import Review from "@/components/main/layanan/Review";
import { Button } from "@/components/ui/button";
import {
  ClipboardList,
  FileText,
  FolderOpen,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Receipt,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "proposal", label: "Proposal", icon: FileText },
    { id: "invoice", label: "Invoice", icon: Receipt },
    { id: "progress", label: "Progress Pekerjaan", icon: ClipboardList },
    { id: "reviews", label: "Daftar Review", icon: MessageSquare },
    { id: "documents", label: "Brankas Legalitas", icon: FolderOpen },
    { id: "profile", label: "Profile", icon: User },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "proposal":
        return <Proposal />;
      case "invoice":
        return <Invoice />;
      case "progress":
        return <ProgressComponent />;
      case "reviews":
        return <Review />;
      case "documents":
        return <Document />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-600 to-purple-600 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold">L</span>
            </div>
            <div>
              <h2 className="font-bold text-white">Legalitas.org</h2>
              <p className="text-xs text-blue-100">Client Dashboard</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="mt-6 px-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? "bg-white/20 text-white font-medium"
                    : "text-blue-100 hover:bg-white/10"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/20">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-100 hover:bg-white/10 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white shadow-sm border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="font-semibold">
              {menuItems.find((item) => item.id === activeTab)?.label ||
                "Dashboard"}
            </h1>
            <div className="w-10"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">{renderContent()}</div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
