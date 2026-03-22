import React, { useMemo, useRef, useEffect, useState } from 'react';
import { parseSections, type Section } from '../../data/documentMap';

interface DocumentViewerProps {
  title: string;
  content: string;
  color: string;
  onClose: () => void;
}

export function DocumentViewer({ title, content, color, onClose }: DocumentViewerProps) {
  const sections = useMemo(() => parseSections(content), [content]);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(`section-${sectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sectionEls = container.querySelectorAll('[data-section-id]');
      let current = '';
      for (const el of sectionEls) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          current = el.getAttribute('data-section-id') || '';
        }
      }
      if (current) setActiveSection(current);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex" onClick={onClose}>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden
      />
      <div
        className="relative flex w-full h-full m-4 md:m-8 bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Pane */}
        <nav
          className="w-72 min-w-[280px] border-r border-gray-200 flex flex-col bg-gray-50"
        >
          <div className="p-4 border-b border-gray-200">
            <div
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color }}
            >
              Sections
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeSection === section.id
                    ? 'bg-white shadow-sm font-semibold text-gray-900'
                    : 'text-gray-600 hover:bg-white/70 hover:text-gray-900'
                }`}
                style={{
                  paddingLeft: `${12 + section.level * 16}px`,
                  ...(activeSection === section.id ? { borderLeft: `3px solid ${color}` } : {}),
                }}
              >
                <span className="line-clamp-2">{section.title}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Document Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <div
            className="flex items-center justify-between px-8 py-4 border-b border-gray-200"
            style={{ backgroundColor: `${color}10` }}
          >
            <div>
              <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-900"
              title="Close (Esc)"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div ref={contentRef} className="flex-1 overflow-y-auto px-8 py-6">
            <div className="max-w-3xl mx-auto">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={`section-${section.id}`}
                  data-section-id={section.id}
                  className="mb-8"
                >
                  <h3
                    className={`font-bold text-gray-900 mb-3 ${
                      section.level === 0
                        ? 'text-lg border-b-2 pb-2'
                        : section.level === 1
                        ? 'text-base'
                        : 'text-sm'
                    }`}
                    style={
                      section.level === 0
                        ? { borderBottomColor: color }
                        : undefined
                    }
                  >
                    {section.title}
                  </h3>
                  <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
