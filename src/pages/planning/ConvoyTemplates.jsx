import React from 'react';
import { Search, Plus } from 'lucide-react';

const TemplateCard = ({ title, description, vehicles, personnel, imageClass }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group">
    <div className={`h-40 w-full bg-slate-700 ${imageClass} bg-cover bg-center`}></div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
         <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
      </div>
      <p className="text-slate-400 text-sm mb-6 h-12 overflow-hidden">{description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-900/50 p-3 rounded border border-slate-700">
            <div className="text-xs text-slate-500 mb-1">Vehicles</div>
            <div className="text-xl font-mono font-bold text-white">{vehicles}</div>
        </div>
        <div className="bg-slate-900/50 p-3 rounded border border-slate-700">
            <div className="text-xs text-slate-500 mb-1">Personnel</div>
            <div className="text-xl font-mono font-bold text-white">{personnel}</div>
        </div>
      </div>

      <div className="flex space-x-3">
        <button className="flex-1 py-2 text-sm border border-slate-600 text-slate-300 rounded hover:bg-slate-700">View</button>
        <button className="flex-1 py-2 text-sm bg-cyan-600 text-white rounded hover:bg-cyan-500 shadow-lg shadow-cyan-900/50">Deploy</button>
      </div>
    </div>
  </div>
);

const ConvoyTemplates = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-2xl font-bold text-white">Convoy Templates</h1>
            <p className="text-slate-400">Create and manage predefined convoy configurations for quick deployment.</p>
        </div>
        <button className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium transition">
            <Plus size={18} />
            <span>Create Template</span>
        </button>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-3 text-slate-500" size={20} />
        <input 
            type="text" 
            placeholder="Search templates by name or description..." 
            className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 pl-12 pr-4 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TemplateCard 
            title="Standard Logistics (8 Truck)"
            description="A balanced template for medium-distance supply runs with optimized security detachment."
            vehicles="8"
            personnel="16"
            imageClass="bg-slate-600"
        />
        <TemplateCard 
            title="Heavy Armor Deployment"
            description="Specialized template for securing and transporting Category 1 heavy armor units."
            vehicles="4"
            personnel="10"
            imageClass="bg-slate-600"
        />
         <TemplateCard 
            title="Quick Personnel Transfer"
            description="Minimalist template for rapid movement of personnel over secure, short distances."
            vehicles="5"
            personnel="25"
            imageClass="bg-slate-600"
        />
      </div>
    </div>
  );
};

export default ConvoyTemplates;