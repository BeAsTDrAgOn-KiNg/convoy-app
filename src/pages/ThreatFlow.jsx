import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Navigation, Check } from 'lucide-react';

const ThreatPage = ({ title, children, actions }) => (
  <div className="p-8 max-w-6xl mx-auto text-slate-100">
    <h1 className="text-3xl font-bold mb-6 text-red-400 flex items-center">
      <AlertTriangle className="mr-3"/> {title}
    </h1>
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 min-h-[400px]">
        {children}
    </div>
    <div className="mt-6 flex flex-wrap gap-4">
        {actions.map((action, idx) => (
            <Link key={idx} to={action.to} className={`px-6 py-3 rounded font-bold transition ${action.primary ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-200'}`}>
                {action.label}
            </Link>
        ))}
    </div>
  </div>
);

export const ThreatAssessment = () => (
  <ThreatPage 
    title="Threat Assessment & Reporting"
    actions={[
        { label: 'Analyze Threat Details', to: '/threats/detail/1', primary: true },
        { label: 'Go to Monitor Dashboard', to: '/monitoring' },
        { label: 'View All Alerts', to: '/threats/alerts' }
    ]}
  >
    <p className="text-slate-400">List of detected threats including severity, location, and affected convoys.</p>
    <div className="mt-4 w-full bg-slate-800 h-32 rounded border border-slate-600 flex items-center justify-center">Threat List Table</div>
  </ThreatPage>
);

export const ThreatDetail = () => (
  <ThreatPage 
    title="Threat Detail Analysis"
    actions={[
        { label: 'Propose Reroute', to: '/threats/reroute', primary: true },
        { label: 'Go to Live Map', to: '/monitoring/live-map' },
        { label: 'Back to Assessment', to: '/threats/assessment' }
    ]}
  >
     <div className="grid grid-cols-2 gap-8">
        <div>
            <h3 className="font-bold text-white mb-2">IED/Mine Detected</h3>
            <p className="text-sm text-slate-400">In-depth view of selected threat showing origin and potential impact.</p>
        </div>
        <div className="bg-red-900/20 p-4 border border-red-500/50 rounded">
            Impact: Critical <br/> Radius: 500m
        </div>
     </div>
  </ThreatPage>
);

export const RerouteProposal = () => (
  <ThreatPage 
    title="Rerouting Proposal"
    actions={[
        { label: 'Apply Reroute', to: '/threats/adjustments', primary: true },
        { label: 'View Live Map', to: '/monitoring/live-map' },
        { label: 'Back to Analysis', to: '/threats/detail/1' }
    ]}
  >
     <p className="mb-4">Alternative routes generated based on threat zones and safety ratings.</p>
     <div className="bg-slate-800 h-64 rounded flex items-center justify-center border border-slate-600">
        <Navigation className="mr-2"/> Map showing Route A (Blocked) vs Route B (Proposed)
     </div>
  </ThreatPage>
);

export const RouteAdjustments = () => (
  <ThreatPage 
    title="Route Deviation Adjustments"
    actions={[
        { label: 'View Threat Alerts', to: '/threats/alerts' },
        { label: 'View Convoy Details', to: '/monitoring/details' },
        { label: 'Back to Live Map', to: '/monitoring/live-map' }
    ]}
  >
     <div className="text-center py-10">
        <Check size={64} className="mx-auto text-green-500 mb-4"/>
        <h2 className="text-2xl font-bold text-white">Reroute Applied Successfully</h2>
        <p className="text-slate-400 mt-2">Convoy C-4581 has been updated with new waypoints.</p>
     </div>
  </ThreatPage>
);