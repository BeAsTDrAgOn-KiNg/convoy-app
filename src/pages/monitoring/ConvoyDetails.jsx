import React from 'react';
import { ArrowLeft, Flag, Navigation, Clock, CloudRain, AlertTriangle } from 'lucide-react';

const ConvoyDetails = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                    <button className="text-slate-400 hover:text-white"><ArrowLeft size={24} /></button>
                    <div>
                        <div className="flex items-center space-x-3">
                            <h1 className="text-2xl font-bold text-white">Logistics Run Alpha-Echo</h1>
                            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded border border-green-500/30">Active</span>
                        </div>
                        <p className="text-slate-400 text-sm flex items-center space-x-2 mt-1">
                            <span>Commander: J. Miller</span>
                            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                            <span>Logistics Resupply Convoy</span>
                        </p>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <button className="px-4 py-2 border border-slate-600 text-slate-300 rounded hover:bg-slate-800">Back to Map</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Driver App</button>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-slate-700 mb-6">
                <button className="px-6 py-3 text-cyan-400 border-b-2 border-cyan-400 font-medium bg-slate-800/50">Overview</button>
                <button className="px-6 py-3 text-slate-400 hover:text-white font-medium">Manifest</button>
                <button className="px-6 py-3 text-slate-400 hover:text-white font-medium flex items-center space-x-2">
                    <span>Threats</span>
                    <span className="bg-red-500 text-white text-[10px] px-1.5 rounded-full">1</span>
                </button>
                 <button className="px-6 py-3 text-slate-400 hover:text-white font-medium">Route</button>
            </div>

            {/* Route Info Card */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Navigation size={20} className="mr-2 text-cyan-400"/> Route Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div>
                             <label className="text-xs text-slate-500">Origin</label>
                             <div className="text-white font-medium flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Base Alpha (Logistics Hub)</div>
                        </div>
                         <div>
                             <label className="text-xs text-slate-500">Total Distance</label>
                             <div className="text-2xl text-white font-bold">85.5 km</div>
                        </div>
                    </div>
                     <div className="space-y-4">
                        <div>
                             <label className="text-xs text-slate-500">Destination</label>
                             <div className="text-white font-medium flex items-center"><Flag size={14} className="mr-2 text-yellow-500"/> Forward Operating Base Echo</div>
                        </div>
                         <div>
                             <label className="text-xs text-slate-500">Est. Travel Time</label>
                             <div className="text-2xl text-white font-bold">2.5h</div>
                        </div>
                    </div>
                </div>
            </div>

             {/* Schedule & Delays */}
             <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
                 <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Clock size={20} className="mr-2 text-cyan-400"/> Schedule & Status
                </h3>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <div className="text-slate-500 text-xs">Planned Departure</div>
                        <div className="text-white">Dec 7, 06:00 AM</div>
                    </div>
                     <div>
                        <div className="text-slate-500 text-xs">Estimated Arrival (with delays)</div>
                        <div className="text-orange-400 font-bold">Dec 7, 08:45 AM</div>
                        <div className="text-orange-500/70 text-xs">+15 minutes delay anticipated</div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="bg-slate-900/50 p-3 rounded border border-orange-500/20 flex items-start space-x-3">
                        <AlertTriangle className="text-orange-500 mt-1" size={16} />
                        <div>
                            <h4 className="text-sm font-bold text-orange-400">Traffic</h4>
                            <p className="text-xs text-slate-400">Heavy morning commercial traffic near Waypoint 1.</p>
                            <span className="text-xs text-orange-500">Impact: +10 min</span>
                        </div>
                    </div>
                     <div className="bg-slate-900/50 p-3 rounded border border-yellow-500/20 flex items-start space-x-3">
                        <CloudRain className="text-yellow-500 mt-1" size={16} />
                        <div>
                            <h4 className="text-sm font-bold text-yellow-400">Weather</h4>
                            <p className="text-xs text-slate-400">Fog advisory predicted for bridge crossing route.</p>
                            <span className="text-xs text-yellow-500">Impact: +5 min</span>
                        </div>
                    </div>
                </div>
             </div>

             {/* Progress Bar */}
             <div className="mt-8">
                 <div className="flex justify-between text-sm text-slate-400 mb-2">
                     <span>Mission Progress</span>
                     <span>65%</span>
                 </div>
                 <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                     <div className="bg-cyan-600 h-full w-[65%]"></div>
                 </div>
             </div>
        </div>
    );
};

export default ConvoyDetails;