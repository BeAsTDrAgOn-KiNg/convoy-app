import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, CheckCircle } from 'lucide-react';

const HandoffLayout = ({ title, children, actions }) => (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-8 text-slate-100">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        {children}
        <div className="mt-10 flex space-x-4">
            {actions.map((a, i) => (
                <Link key={i} to={a.to} className="px-6 py-3 bg-slate-800 border border-slate-600 hover:bg-slate-700 rounded text-white transition">
                    {a.label}
                </Link>
            ))}
        </div>
    </div>
);

export const HandoffInitiation = () => (
    <HandoffLayout 
        title="Driver App Handoff Initiation"
        actions={[{ label: 'Generate QR Code', to: '/handoff/qr' }, { label: 'View Details', to: '/monitoring/details' }]}
    >
        <p className="max-w-md text-slate-400">Select a convoy to transfer data to the driver app.</p>
        <div className="mt-6 p-4 bg-slate-900 border border-cyan-500 rounded text-cyan-400">
            Selected: Logistics Run Alpha-Echo
        </div>
    </HandoffLayout>
);

export const QrDisplay = () => (
    <HandoffLayout 
        title="Driver App QR Code"
        actions={[{ label: 'Confirm Handoff', to: '/handoff/confirm' }, { label: 'Back', to: '/handoff' }]}
    >
        <div className="bg-white p-4 rounded-xl">
            <QrCode size={200} className="text-black"/>
        </div>
        <p className="mt-4 text-sm text-slate-500">Scan with Driver App</p>
    </HandoffLayout>
);

export const HandoffConfirm = () => (
    <HandoffLayout 
        title="Handoff Successful"
        actions={[{ label: 'Return to Monitoring', to: '/monitoring' }, { label: 'Another Handoff', to: '/handoff' }]}
    >
        <CheckCircle size={80} className="text-green-500 mb-4"/>
        <p className="text-slate-400">Data successfully pushed to driver application.</p>
    </HandoffLayout>
);