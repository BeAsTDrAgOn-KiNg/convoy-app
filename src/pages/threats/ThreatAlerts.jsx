import React from 'react';
import { AlertTriangle, Clock, Eye } from 'lucide-react';

const AlertCard = ({ title, type, severity, location, radius, time, convoyId, status }) => {
    const severityColors = {
        Critical: 'border-red-500/50 bg-red-900/10 text-red-400',
        Medium: 'border-yellow-500/50 bg-yellow-900/10 text-yellow-400',
        Low: 'border-blue-500/50 bg-blue-900/10 text-blue-400'
    };

    return (
        <div className={`p-4 rounded-lg border ${severityColors[severity]} mb-4 relative overflow-hidden`}>
             <div className="flex items-start justify-between mb-2">
                 <div className="flex items-center space-x-3">
                    <AlertTriangle size={20} />
                    <div>
                        <div className="flex items-center space-x-3">
                            <h3 className="font-bold text-lg">{title}</h3>
                            <span className="text-xs uppercase px-2 py-0.5 rounded border border-current opacity-70">{type}</span>
                            <span className="text-xs uppercase px-2 py-0.5 rounded bg-slate-900">{severity}</span>
                        </div>
                        <p className="text-slate-400 text-sm mt-1">Confirmed detection 1.5 KM prior to Check Point 5A.</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-sm text-slate-400 flex items-center justify-end space-x-1">
                        <Clock size={14} /> <span>Detected {time}</span>
                    </div>
                    <button className="mt-2 text-xs border border-slate-600 px-3 py-1 rounded hover:bg-slate-700 text-white">View on Map</button>
                 </div>
             </div>

             <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-700/50 text-sm">
                 <div>
                    <span className="block text-slate-500 text-xs">Location</span>
                    <span className="font-mono text-slate-300">{location}</span>
                 </div>
                 <div>
                    <span className="block text-slate-500 text-xs">Zone Radius</span>
                    <span className="font-mono text-slate-300">{radius}</span>
                 </div>
                  <div>
                    <span className="block text-slate-500 text-xs">Affected Convoy</span>
                    <span className="font-mono text-cyan-400">{convoyId}</span>
                 </div>
                 <div className="flex justify-end items-center">
                    <button className="text-slate-300 hover:text-white flex items-center space-x-1 px-3 py-1 bg-slate-800 rounded">
                        <Eye size={16} /> <span>Acknowledge</span>
                    </button>
                 </div>
             </div>
        </div>
    );
};

const ThreatAlerts = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="mb-8">
                 <h1 className="text-2xl font-bold text-white">Threat Detection Alerts</h1>
                 <p className="text-slate-400">Real-time threat alerts detected along convoy routes.</p>
            </div>

            {/* Filter Bar */}
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex items-center space-x-4 mb-6">
                <div className="flex-1">
                    <label className="text-xs text-slate-500 block mb-1">Severity</label>
                    <select className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-slate-300 text-sm">
                        <option>All Severities</option>
                    </select>
                </div>
                 <div className="flex-1">
                    <label className="text-xs text-slate-500 block mb-1">Status</label>
                    <select className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-slate-300 text-sm">
                        <option>Active</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="text-xs text-slate-500 block mb-1">Sort By</label>
                    <select className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-slate-300 text-sm">
                        <option>Severity (High to Low)</option>
                    </select>
                </div>
            </div>

            {/* Alerts List */}
            <div className="space-y-4">
                <AlertCard 
                    title="IED/Mine"
                    type="Active"
                    severity="Critical"
                    location="34.0050, -118.0600"
                    radius="500m"
                    time="27h ago"
                    convoyId="C-4581"
                />
                 <AlertCard 
                    title="Civil Unrest"
                    type="Under Review"
                    severity="Medium"
                    location="34.0200, -118.1500"
                    radius="1200m"
                    time="28h ago"
                    convoyId="C-4583"
                />
                 <AlertCard 
                    title="Environmental Hazard"
                    type="Resolved"
                    severity="Low"
                    location="34.1300, -117.8500"
                    radius="800m"
                    time="29h ago"
                    convoyId="C-4582"
                />
            </div>
        </div>
    );
};

export default ThreatAlerts;