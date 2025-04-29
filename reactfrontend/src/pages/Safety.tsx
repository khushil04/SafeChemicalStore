import React from 'react';
import { FileText, AlertTriangle, HardHat, Download } from 'lucide-react';

const safetyDocs = [
  {
    id: 1,
    name: 'Sulfuric Acid Safety Data Sheet',
    type: 'MSDS',
    lastUpdated: '2024-02-15',
  },
  {
    id: 2,
    name: 'Hydrochloric Acid Safety Data Sheet',
    type: 'MSDS',
    lastUpdated: '2024-02-15',
  },
  {
    id: 3,
    name: 'Chemical Handling Guidelines',
    type: 'Guide',
    lastUpdated: '2024-01-20',
  },
  {
    id: 4,
    name: 'Emergency Response Procedures',
    type: 'Protocol',
    lastUpdated: '2024-01-15',
  },
];

export default function Safety() {
  return (
    <div className="bg-slate-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Safety Information</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access comprehensive safety documentation, handling guidelines, and emergency procedures for all our chemical products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Hazard Information</h2>
            <p className="text-gray-600">
              Detailed information about chemical hazards, safety precautions, and protective measures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <HardHat className="h-12 w-12 text-yellow-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Handling Guidelines</h2>
            <p className="text-gray-600">
              Proper procedures for handling, storing, and disposing of chemical products safely.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <FileText className="h-12 w-12 text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Documentation</h2>
            <p className="text-gray-600">
              Access to Material Safety Data Sheets (MSDS) and safety certificates.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Safety Documentation</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Document Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Updated
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {safetyDocs.map((doc) => (
                    <tr key={doc.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {doc.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {doc.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {doc.lastUpdated}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-blue-600 hover:text-blue-900 flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}