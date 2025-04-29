import React from 'react';
import { ShieldAlert, FileText, HardHat, Truck } from 'lucide-react';

export default function SafetySection() {
  return (
    <div className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Safety & Compliance</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We prioritize safety in every aspect of our operations. All products come with comprehensive safety documentation and handling guidelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-800 p-6 rounded-xl">
            <ShieldAlert className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safety Data Sheets</h3>
            <p className="text-slate-300">
              Detailed MSDS for all products with handling procedures and emergency protocols.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <FileText className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certifications</h3>
            <p className="text-slate-300">
              ISO certified products meeting international quality and safety standards.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <HardHat className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Handling Training</h3>
            <p className="text-slate-300">
              Access to handling guidelines and training materials for safe chemical usage.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <Truck className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe Transport</h3>
            <p className="text-slate-300">
              Compliant with all transportation regulations for hazardous materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}