import React from 'react';
import { ZoomIn, ZoomOut, AlertTriangle } from 'lucide-react';

const ConvoyLiveMap = () => {
  return (
    <div className="relative w-full h-full bg-slate-900">
      {/* Map Placeholder */}
      <div className="absolute inset-0 bg-slate-800 opacity-60 flex items-center justify-center">
         <span className="text-slate-600 font-bold">Map Visualization Layer</span>
        {/* Simulated Map Content */}
        <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
             {/* Convoy Marker */}
            <div className="flex flex-col items-center">
                <div className="bg-cyan-600 p-2 rounded-full shadow-[0_0_15px_rgba(8,145,178,0.5)] border-2 border-white animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="mt-2 bg-slate-900/80 text-cyan-400 text-xs px-2 py-1 rounded border border-cyan-900">C-4581</span>
            </div>
        </div>

        {/* Threat Zone */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-red-500/10 rounded-full border border-red-500/30 flex items-center justify-center">
             <AlertTriangle className="text-red-500 opacity-80" size={32} />
        </div>
      </div>

      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 p-6 z-10 pointer-events-none">
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-2xl font-bold text-white drop-shadow-md">Convoy Live Map</h1>
                <p className="text-slate-300 drop-shadow-md">Real-time tracking of all active convoys with threat detection.</p>
            </div>
            <div className="pointer-events-auto flex space-x-2">
                 <button className="bg-slate-800 p-2 rounded text-slate-300 hover:text-white border border-slate-700"><ZoomIn size={20}/></button>
                 <button className="bg-slate-800 p-2 rounded text-slate-300 hover:text-white border border-slate-700"><ZoomOut size={20}/></button>
            </div>
        </div>
      </div>

      {/* Right Details Panel Overlay */}
      <div className="absolute top-20 right-6 w-96 bg-slate-900/95 border border-slate-700 backdrop-blur-md rounded-lg shadow-2xl p-6 z-20">
        <div className="flex justify-between items-start mb-4">
            <div>
                <h2 className="text-xl font-bold text-white">C-4581</h2>
                <p className="text-slate-400 text-sm">Logistics Run Alpha-Echo</p>
            </div>
            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded border border-yellow-500/30">Warning</span>
        </div>

        <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-slate-700 pb-2">
                <span className="text-slate-400">Commander</span>
                <span className="text-white">Cpt. J. Miller</span>
            </div>
             <div className="flex justify-between border-b border-slate-700 pb-2">
                <span className="text-slate-400">Location</span>
                <span className="text-white">Bridge Crossing Omega</span>
            </div>
             <div className="flex justify-between border-b border-slate-700 pb-2">
                <span className="text-slate-400">Speed</span>
                <span className="text-white">45 km/h</span>
            </div>

            <div className="mt-4">
                <div className="flex justify-between text-xs mb-1 text-slate-400">
                    <span>Progress</span>
                    <span>65%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
            </div>

            <div className="flex space-x-2 mt-6">
                <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white rounded transition">Overview</button>
                <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white rounded transition relative">
                    Threats
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ConvoyLiveMap;