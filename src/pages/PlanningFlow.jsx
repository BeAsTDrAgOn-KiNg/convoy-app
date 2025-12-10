import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Map, Users } from 'lucide-react';

const PlanningPage = ({ title, description, children, backTo }) => (
  <div className="p-8 max-w-5xl mx-auto text-slate-100">
    <div className="mb-8 border-b border-slate-700 pb-4">
      <Link to={backTo} className="text-slate-400 hover:text-cyan-400 flex items-center mb-2"><ArrowLeft size={16} className="mr-2"/> Back</Link>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-slate-400 mt-2">{description}</p>
    </div>
    {children}
  </div>
);

export const PlanningHub = () => (
  <PlanningPage title="Convoy Planning Hub" description="Central hub for all planning activities." backTo="/">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link to="/planning/create" className="bg-cyan-900/20 border border-cyan-500/30 p-6 rounded-xl hover:bg-cyan-900/30 transition">
        <h3 className="text-xl font-bold text-cyan-400 mb-2">+ Create New Convoy</h3>
        <p className="text-sm text-slate-400">Initiate new convoy plans or mission setups.</p>
      </Link>
      <Link to="/planning/existing" className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-slate-500 transition">
        <h3 className="text-xl font-bold text-white mb-2">View Existing Convoys</h3>
        <p className="text-sm text-slate-400">Review active, pending, or completed convoys.</p>
      </Link>
      <Link to="/planning/templates" className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-slate-500 transition">
        <h3 className="text-xl font-bold text-white mb-2">Convoy Templates</h3>
        <p className="text-sm text-slate-400">Manage predefined configurations.</p>
      </Link>
    </div>
  </PlanningPage>
);

export const CreateConvoy = () => (
  <PlanningPage title="Create New Convoy" description="Initial setup for a new mission." backTo="/planning">
    <div className="space-y-4">
       <div className="bg-slate-800 p-6 rounded-lg">
          <h3 className="font-bold mb-4">Mission Parameters</h3>
          <input type="text" placeholder="Mission Name" className="w-full bg-slate-900 p-3 rounded border border-slate-700 mb-4 text-white"/>
          <Link to="/planning/create/route" className="block w-full text-center bg-cyan-600 py-3 rounded text-white font-bold hover:bg-cyan-500">
            Define Convoy Route
          </Link>
       </div>
    </div>
  </PlanningPage>
);

export const DefineRoute = () => (
  <PlanningPage title="Define Convoy Route" description="Graphically define the route and waypoints." backTo="/planning/create">
    <div className="bg-slate-900 h-64 rounded border border-slate-700 flex items-center justify-center mb-6">
      <Map size={48} className="text-slate-600"/> <span className="ml-2 text-slate-600">Map Interface Placeholder</span>
    </div>
    <Link to="/planning/create/schedule" className="inline-block bg-cyan-600 px-8 py-3 rounded text-white font-bold">
       Schedule Departure Time
    </Link>
  </PlanningPage>
);

export const ScheduleTime = () => (
  <PlanningPage title="Schedule Departure Time" description="Set specific departure/arrival times." backTo="/planning/create/route">
    <div className="bg-slate-800 p-6 rounded mb-6">
      <Calendar size={32} className="text-cyan-400 mb-4"/>
      <p>Time selection interface goes here.</p>
    </div>
    <Link to="/planning/create/resources" className="inline-block bg-cyan-600 px-8 py-3 rounded text-white font-bold">
       Allocate Resources
    </Link>
  </PlanningPage>
);

export const AllocateResources = () => (
  <PlanningPage title="Allocate Resources" description="Assign personnel, vehicles, and equipment." backTo="/planning/create/schedule">
    <div className="bg-slate-800 p-6 rounded mb-6">
      <Users size={32} className="text-cyan-400 mb-4"/>
      <p>Resource drag-and-drop interface goes here.</p>
    </div>
    <Link to="/planning/create/review" className="inline-block bg-cyan-600 px-8 py-3 rounded text-white font-bold">
       Review Detailed Plan
    </Link>
  </PlanningPage>
);

export const ReviewPlan = () => (
  <PlanningPage title="Review Detailed Plan" description="Final verification before confirmation." backTo="/planning/create/resources">
    <div className="bg-slate-800 p-6 rounded mb-6 border-l-4 border-green-500">
      <h3 className="font-bold text-lg text-white">Mission Summary</h3>
      <ul className="list-disc pl-5 mt-2 text-slate-400 space-y-1">
        <li>Route Defined: Yes</li>
        <li>Schedule: Dec 25, 0800 Hours</li>
        <li>Resources: 4 Trucks, 12 Personnel</li>
      </ul>
    </div>
    <div className="flex space-x-4">
      <Link to="/planning" className="bg-green-600 px-8 py-3 rounded text-white font-bold hover:bg-green-500">
        Confirm Plan
      </Link>
      <Link to="/planning/create/route" className="bg-slate-700 px-8 py-3 rounded text-white font-bold hover:bg-slate-600">
        Edit Route
      </Link>
    </div>
  </PlanningPage>
);