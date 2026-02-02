
import React, { useState, useEffect } from 'react';
import { AppView, ResearchDocument } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UploadPage from './components/UploadPage';
import SummarizerPage from './components/SummarizerPage';
import InsightPage from './components/InsightPage';
import SearchPage from './components/SearchPage';
import ChatPage from './components/ChatPage';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);
  const [documents, setDocuments] = useState<ResearchDocument[]>([]);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('research_docs');
    if (saved) {
      try {
        setDocuments(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse local storage", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('research_docs', JSON.stringify(documents));
  }, [documents]);

  const addDocument = (doc: ResearchDocument) => {
    setDocuments(prev => [...prev, doc]);
    setCurrentView(AppView.DASHBOARD);
  };

  const deleteDocument = (id: string) => {
    setDocuments(prev => prev.filter(d => d.id !== id));
    if (selectedDocId === id) setSelectedDocId(null);
  };

  const updateDocument = (updatedDoc: ResearchDocument) => {
    setDocuments(prev => prev.map(d => d.id === updatedDoc.id ? updatedDoc : d));
  };

  const selectedDocument = documents.find(d => d.id === selectedDocId) || null;

  if (currentView === AppView.LANDING) {
    return <LandingPage onStart={() => setCurrentView(AppView.DASHBOARD)} />;
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar
        currentView={currentView}
        onNavigate={setCurrentView}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex justify-between items-center shadow-sm z-10 shrink-0">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-slate-500 hover:text-slate-800 p-1"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
            <h1 className="text-xl font-bold text-slate-800 truncate">
              {currentView.charAt(0) + currentView.slice(1).toLowerCase()}
            </h1>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <span className="hidden md:inline text-sm text-slate-500">{documents.length} Papers Tracked</span>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
              RA
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-8">
          {currentView === AppView.DASHBOARD && (
            <Dashboard
              documents={documents}
              onDelete={deleteDocument}
              onSelect={(id) => {
                setSelectedDocId(id);
                setCurrentView(AppView.SUMMARIZER);
              }}
              onUploadClick={() => setCurrentView(AppView.UPLOAD)}
            />
          )}

          {currentView === AppView.UPLOAD && (
            <UploadPage onUploadComplete={addDocument} />
          )}

          {currentView === AppView.SUMMARIZER && (
            <SummarizerPage
              documents={documents}
              selectedDocId={selectedDocId}
              onSelectDoc={setSelectedDocId}
              onUpdateDoc={updateDocument}
            />
          )}

          {currentView === AppView.INSIGHTS && (
            <InsightPage
              documents={documents}
              selectedDocId={selectedDocId}
              onSelectDoc={setSelectedDocId}
              onUpdateDoc={updateDocument}
            />
          )}

          {currentView === AppView.SEARCH && (
            <SearchPage documents={documents} />
          )}

          {currentView === AppView.CHAT && (
            <ChatPage
              documents={documents}
              selectedDocId={selectedDocId}
              onSelectDoc={setSelectedDocId}
              onUpdateDoc={updateDocument}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
