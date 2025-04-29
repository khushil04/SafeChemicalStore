import React from 'react';
import { BeakerIcon, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-white mb-4">
              <BeakerIcon className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Vidhi Enterprises</span>
            </div>
            <p className="text-sm">
              Your trusted partner in industrial chemical supply with over 7 years of experience serving various industries.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-blue-400">Products</a></li>
              <li><a href="#safety" className="hover:text-blue-400">Safety Data</a></li>
              <li><a href="#bulk" className="hover:text-blue-400">Bulk Orders</a></li>
              <li><a href="#support" className="hover:text-blue-400">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +91 9876600009
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                VishalMehra@gmail.com
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                46,..,Kapruthala Road,Prem Nagar,Jalandhar,Punjab,144201
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2 text-sm">
              <li>ISO 9001:2015</li>
              <li>ISO 14001:2015</li>
              <li>OHSAS 18001</li>
              <li>REACH Compliant</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}