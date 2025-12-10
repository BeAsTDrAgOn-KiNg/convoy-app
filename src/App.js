import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Import Planning Pages
import { PlanningHub, CreateConvoy, DefineRoute, ScheduleTime, AllocateResources, ReviewPlan } from './pages/PlanningFlow';
import ConvoyTemplates from './pages/planning/ConvoyTemplates';

// Import Threat Pages
import { ThreatAssessment, ThreatDetail, RerouteProposal, RouteAdjustments } from './pages/ThreatFlow';
import ThreatAlerts from './pages/threats/ThreatAlerts';

// Import Driver Pages
import { HandoffInitiation, QrDisplay, HandoffConfirm } from './pages/DriverHandoff';

// Import Monitoring Pages
import ConvoyLiveMap from './pages/monitoring/LiveMap';
import ConvoyDetails from './pages/monitoring/ConvoyDetails';

// Import Data for Generic Pages
import { GENERIC_PAGES } from './data/workflowData';

// Generic Page Component
const GenericPage = ({ pageKey }) => {
  const data = GENERIC_PAGES[pageKey];
  if (!data) return <div className="p-10 text-white">Page Not Found</div>;

  return (
    <div className="p-10 max-w-4xl mx-auto text-slate-100">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-slate-400 text-lg mb-8">{data.description}</p>

      {data.stats && (
         <div className="grid grid-cols-3 gap-4 mb-8">
            {data.stats.map((s, i) => (
                <div key={i} className="bg-slate-800 p-4 rounded border border-slate-700">
                    <div className="text-sm text-slate-500">{s.label}</div>
                    <div className="text-2xl font-bold">{s.value}</div>
                </div>
            ))}
         </div>
      )}

      <div className="flex flex-col space-y-3">
        {data.actions.map((action, idx) => (
            <a key={idx} href={action.to} className="block w-full p-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded flex justify-between items-center transition">
                <span className="font-bold">{action.label}</span>
                <span className="text-slate-500">→</span>
            </a>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* --- PLANNING WORKFLOW --- */}
          <Route path="/planning" element={<PlanningHub />} />
          <Route path="/planning/create" element={<CreateConvoy />} />
          <Route path="/planning/create/route" element={<DefineRoute />} />
          <Route path="/planning/create/schedule" element={<ScheduleTime />} />
          <Route path="/planning/create/resources" element={<AllocateResources />} />
          <Route path="/planning/create/review" element={<ReviewPlan />} />
          <Route path="/planning/templates" element={<ConvoyTemplates />} />
          <Route path="/planning/existing" element={<div className="p-10 text-white">View Existing Convoys (List)</div>} />

          {/* --- THREAT WORKFLOW --- */}
          <Route path="/threats/assessment" element={<ThreatAssessment />} />
          <Route path="/threats/detail/:id" element={<ThreatDetail />} />
          <Route path="/threats/reroute" element={<RerouteProposal />} />
          <Route path="/threats/adjustments" element={<RouteAdjustments />} />
          <Route path="/threats/alerts" element={<ThreatAlerts />} />

          {/* --- MONITORING WORKFLOW --- */}
          <Route path="/monitoring" element={<div className="p-10 text-white">Monitoring Dashboard (Hub)</div>} />
          <Route path="/monitoring/live-map" element={<ConvoyLiveMap />} />
          <Route path="/monitoring/details" element={<ConvoyDetails />} />
          <Route path="/monitoring/history" element={<div className="p-10 text-white">Past Convoy History</div>} />

          {/* --- DRIVER APP FLOW --- */}
          <Route path="/handoff" element={<HandoffInitiation />} />
          <Route path="/handoff/qr" element={<QrDisplay />} />
          <Route path="/handoff/confirm" element={<HandoffConfirm />} />

          {/* --- USER MANAGEMENT --- */}
          <Route path="/users" element={<GenericPage pageKey="user-dashboard" />} />
          <Route path="/users/manage" element={<GenericPage pageKey="user-manage" />} />
          <Route path="/users/edit/:id" element={<GenericPage pageKey="user-edit" />} />
          <Route path="/users/roles" element={<GenericPage pageKey="user-roles" />} />
          <Route path="/users/permissions" element={<GenericPage pageKey="user-permissions" />} />
          <Route path="/users/activity" element={<GenericPage pageKey="user-activity" />} />

          {/* --- REPORTING FLOW --- */}
          <Route path="/reporting" element={<GenericPage pageKey="reporting-dashboard" />} />
          <Route path="/reporting/performance" element={<GenericPage pageKey="reporting-performance" />} />
          <Route path="/reporting/individual" element={<GenericPage pageKey="reporting-individual" />} />
          <Route path="/reporting/delays" element={<GenericPage pageKey="reporting-delays" />} />
          <Route path="/reporting/threat-stats" element={<GenericPage pageKey="reporting-threats" />} />

          {/* Default Redirect */}
          <Route path="/" element={<PlanningHub />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;