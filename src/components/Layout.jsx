import React from 'react';
import { Shield, Map, Calendar, AlertTriangle, Truck, Settings, Users, FileText, Smartphone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SidebarItem = ({ icon: Icon, label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors ${
        isActive 
          ? 'text-cyan-400 border-r-2 border-cyan-400 bg-slate-800/50' 
          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="p-5 flex items-center space-x-2 border-b border-slate-800">
          <Shield className="text-cyan-500" size={24} />
          <span className="text-lg font-bold tracking-wide">ConvoyCommand</span>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-6">

          {/* Planning Section */}
          <div>
            <div className="px-4 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Planning</div>
            <SidebarItem icon={Calendar} label="Planning Hub" to="/planning" />
            <SidebarItem icon={FileText} label="Templates" to="/planning/templates" />
            <SidebarItem icon={Truck} label="Create Convoy" to="/planning/create" />
          </div>

          {/* Monitoring Section */}
          <div>
            <div className="px-4 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Monitoring</div>
            <SidebarItem icon={Map} label="Live Map" to="/monitoring/live-map" />
            <SidebarItem icon={Truck} label="Convoy Details" to="/monitoring/details" />
          </div>

          {/* Threat Management Section */}
          <div>
            <div className="px-4 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Threat Management</div>
            <SidebarItem icon={AlertTriangle} label="Active Alerts" to="/threats/alerts" />
            <SidebarItem icon={Shield} label="Threat Assessment" to="/threats/assessment" />
          </div>

           {/* Driver App Section */}
           <div>
            <div className="px-4 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Driver App</div>
            <SidebarItem icon={Smartphone} label="Driver Handoff" to="/handoff" />
          </div>
        </div>

        <div className="p-4 border-t border-slate-800">
          <SidebarItem icon={Settings} label="Settings" to="/settings" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto bg-slate-950 relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;