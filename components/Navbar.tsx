
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <i className="fa-solid fa-check-double text-white text-xl"></i>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent hidden sm:block">
                TaskFlow
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Link 
              to="/" 
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                isActive('/') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/tarefas" 
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                isActive('/tarefas') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Lista
            </Link>
            <Link 
              to="/tarefas/nova" 
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                isActive('/tarefas/nova') 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <i className="fa-solid fa-plus mr-2"></i>
              Nova
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
