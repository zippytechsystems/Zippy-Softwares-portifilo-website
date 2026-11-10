import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  Filter, 
  ShieldCheck
} from 'lucide-react';
import { MetaTags } from '../components/common/MetaTags';
import { CTASection } from '../components/common/CTASection';
import { ProjectModal } from '../components/modals/ProjectModal';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../types';

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Websites',
    'Web Applications',
    'Business Software',
    'Mobile Applications',
    'AI Automation'
  ];

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
      const matchesQuery = 
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative overflow-hidden py-12 md:py-16">
      <MetaTags
        title="Our Portfolio & Projects | Client Systems, Case Studies & Enterprise Demos"
        description="Explore enterprise software projects built by Zippy Enterprises Private Limited across web applications, business software, mobile applications, and AI automation."
        canonicalPath="/portfolio"
      />

      {/* Hero Section */}
      <section className="relative pb-12 md:pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold badge-cyan mb-6">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proven Engineering Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Our Portfolio &{' '}
            <span className="text-gradient-cyan block sm:inline">
              Engineered Solutions
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A transparent showcase of our production client platforms, robust business management systems, and enterprise concept prototypes. Every solution reflects rigorous engineering and measurable business results.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-xs text-slate-400 bg-[#0E1B38] px-4 py-2 rounded-full border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Actual completed client work and clearly labelled enterprise prototypes. Zero fictional claims.</span>
          </div>
        </div>
      </section>

      {/* Filters & Search Toolbar */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-6 rounded-2xl bg-[#0E1B38]/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-bold' 
                        : 'bg-[#070D1E] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by tech, keyword or industry..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#070D1E] border border-slate-800 text-slate-200 text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-[#0E1B38]/40 rounded-3xl border border-slate-800">
              <Filter className="w-10 h-10 text-slate-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white">No projects found matching your query</h3>
              <p className="text-slate-400 text-sm mt-1">Try resetting your filters or search terms.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="rounded-3xl bg-[#0E1B38]/70 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 group"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${project.badgeColor || 'badge-cyan'}`}>
                        {project.projectType}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs text-cyan-400/90 font-medium mt-0.5 mb-2">
                      {project.clientOrContext}
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Deliverables snippet */}
                    <div className="space-y-1.5 border-t border-slate-800/80 pt-3">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Key Deliverables:
                      </div>
                      {project.deliverables.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-[#070D1E] text-slate-300 border border-slate-800 font-mono">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[11px] px-1.5 py-0.5 text-slate-500 font-mono">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Trigger */}
                  <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 focus:outline-none"
                    >
                      <span>View Case Study Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {project.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Have a Vision Similar to These Solutions?"
        subtitle="Talk directly to the software architect who oversaw these system designs. We can map your blueprint within 24 hours."
      />

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
