import React from 'react';
import { Activity, Pill, FileText, Calendar, Shield, Bot, MessageSquare, Mic, Sparkles, BookOpen, ExternalLink, CheckCircle2 } from 'lucide-react';

export const ProjectMockup = ({ projectId, type = "card" }) => {
  const isModal = type === "modal";

  if (projectId === "carebridge" || projectId === "health-carer") {
    return (
      <div className={`w-full bg-[#0b1120] border border-indigo-500/20 rounded-xl overflow-hidden shadow-2xl relative select-none ${isModal ? 'h-[320px] md:h-[400px]' : 'h-52'}`}>
        {/* Header Bar */}
        <div className="bg-[#0f172a] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 min-w-0">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <a 
              href="https://carebridge-website-xi.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-medium text-sky-300 hover:text-white transition-colors truncate font-mono ml-2 flex items-center space-x-1"
            >
              <span>carebridge-website-xi.vercel.app</span>
              <ExternalLink className="w-3 h-3 text-sky-400" />
            </a>
          </div>
          <div className="flex items-center space-x-2 text-xs text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 shrink-0">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>Live Application</span>
          </div>
        </div>

        {/* Dashboard Canvas */}
        <div className="p-4 grid grid-cols-12 gap-3 text-xs">
          {/* Sidebar Mini */}
          <div className="col-span-3 bg-[#0f172a]/60 border border-slate-800/80 rounded-lg p-2.5 space-y-2 hidden sm:block">
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold px-1">CareBridge Menu</div>
            <div className="flex items-center space-x-2 bg-indigo-600/20 text-indigo-300 p-1.5 rounded border border-indigo-500/30 font-medium">
              <Pill className="w-3.5 h-3.5 text-sky-400" />
              <span>Medicines</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400 p-1.5 hover:bg-slate-800/40 rounded">
              <FileText className="w-3.5 h-3.5" />
              <span>Reports</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400 p-1.5 hover:bg-slate-800/40 rounded">
              <Calendar className="w-3.5 h-3.5" />
              <span>Doctors</span>
            </div>
          </div>

          {/* Main Area */}
          <div className="col-span-12 sm:col-span-9 space-y-3">
            {/* Top Stat Row */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-900/80 border border-slate-800 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400">Caregiver Sync</div>
                <div className="text-xs font-bold text-emerald-400 mt-0.5">Active</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400">Next Dose</div>
                <div className="text-xs font-bold text-sky-400 mt-0.5">08:00 PM</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400">Reports</div>
                <div className="text-xs font-bold text-indigo-400 mt-0.5">Uploaded</div>
              </div>
            </div>

            {/* Schedule List */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-2.5 space-y-2">
              <div className="flex justify-between items-center text-[11px] font-semibold text-slate-300 border-b border-slate-800/80 pb-1">
                <span>CareBridge Live Prescription Log</span>
                <span className="text-indigo-400">3 Doses Today</span>
              </div>
              <div className="flex items-center justify-between bg-slate-950/60 p-2 rounded border border-emerald-500/20">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-200 font-medium">Metformin - 500mg</span>
                </div>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded">Completed</span>
              </div>
              <div className="flex items-center justify-between bg-slate-950/60 p-2 rounded border border-indigo-500/20">
                <div className="flex items-center space-x-2">
                  <Pill className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                  <span className="text-slate-200 font-medium">Atorvastatin - 10mg</span>
                </div>
                <span className="text-[10px] bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded">Due 08:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500"></div>
      </div>
    );
  }

  if (projectId === "sdiet-assist") {
    return (
      <div className={`w-full bg-[#0d1322] border border-sky-500/20 rounded-xl overflow-hidden shadow-2xl relative select-none ${isModal ? 'h-[320px]' : 'h-52'}`}>
        <div className="bg-[#11192e] px-4 py-2 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold text-slate-200">SDIET Assistant Chatbot</span>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Online</span>
        </div>
        <div className="p-3 space-y-2.5 text-xs">
          <div className="flex justify-end">
            <div className="bg-indigo-600/30 text-indigo-100 border border-indigo-500/30 p-2 rounded-2xl rounded-tr-none max-w-[80%] text-[11px]">
              When is the CSE 6th Semester Exam schedule starting?
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <div className="bg-slate-900/90 text-slate-200 border border-slate-800 p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-[11px] space-y-1">
              <p>The 6th Sem examination commences on May 24th, 2026 as per JC Bose University notice.</p>
              <div className="bg-slate-950 p-1.5 rounded border border-slate-800 text-[10px] text-sky-300 font-mono">
                📄 Document Reference: Notice_CSE_2026_04.pdf
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "speech-recognition") {
    return (
      <div className={`w-full bg-[#0a0f1d] border border-purple-500/20 rounded-xl overflow-hidden shadow-2xl relative select-none ${isModal ? 'h-[320px]' : 'h-52'}`}>
        <div className="bg-[#0f172a] px-4 py-2 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mic className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-200">Speech-To-Text Audio Engine</span>
          </div>
          <span className="text-[10px] text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded">Python Engine</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="bg-slate-950 p-3 rounded-lg border border-purple-500/20 flex items-center justify-center space-x-1.5 h-16">
            <div className="w-1.5 h-8 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-1.5 h-12 bg-sky-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-6 bg-indigo-500 rounded-full animate-bounce"></div>
            <div className="w-1.5 h-10 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-14 bg-sky-500 rounded-full animate-bounce"></div>
            <div className="w-1.5 h-7 bg-indigo-400 rounded-full animate-pulse"></div>
          </div>
          <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-300 font-mono">
            <span className="text-slate-500">[00:04.20] Transcript:</span> "Converting spoken acoustic signals into clean text format using NLP modeling."
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "text-summarizer") {
    return (
      <div className={`w-full bg-[#0a121e] border border-indigo-500/20 rounded-xl overflow-hidden shadow-2xl relative select-none ${isModal ? 'h-[320px]' : 'h-52'}`}>
        <div className="bg-[#0f172a] px-4 py-2 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-semibold text-slate-200">AI Text Summarizer Dashboard</span>
          </div>
          <span className="text-[10px] text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">70% Compression</span>
        </div>
        <div className="p-3 grid grid-cols-2 gap-2 text-[10px]">
          <div className="bg-slate-950 p-2.5 rounded border border-slate-800 space-y-1">
            <div className="font-semibold text-slate-400">Original Document</div>
            <p className="text-slate-500 line-clamp-4 leading-relaxed">
              Artificial Intelligence and Machine Learning models have revolutionized document analysis...
            </p>
          </div>
          <div className="bg-slate-900/90 p-2.5 rounded border border-indigo-500/30 space-y-1">
            <div className="font-semibold text-indigo-300 flex items-center justify-between">
              <span>AI Concise Summary</span>
              <Sparkles className="w-3 h-3 text-indigo-400" />
            </div>
            <p className="text-slate-200 line-clamp-4 leading-relaxed font-medium">
              • NLP models condense long documents efficiently.<br/>
              • Key semantic facts preserved.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full bg-[#0b1426] border border-blue-500/20 rounded-xl overflow-hidden shadow-2xl relative select-none ${isModal ? 'h-[320px]' : 'h-52'}`}>
      <div className="bg-[#0f1b33] px-4 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-semibold text-slate-200">Student AI Study Suite</span>
        </div>
        <span className="text-[10px] text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded">Interactive Tutor</span>
      </div>
      <div className="p-3 space-y-2 text-xs">
        <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="font-semibold text-slate-200">Data Structures & DBMS Notes</div>
            <div className="text-[10px] text-slate-400">Generated 5 Quiz Cards</div>
          </div>
          <button className="bg-indigo-600 text-white text-[10px] px-2.5 py-1 rounded font-medium">Start Quiz</button>
        </div>
      </div>
    </div>
  );
};
