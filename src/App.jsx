import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Logos3 } from '@/components/blocks/logos3';
import { ShuffleCards } from '@/components/blocks/shuffle-cards';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, PenTool, Layout, MonitorPlay, Zap, BarChart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
              <span className="text-white font-black text-lg">N</span>
            </div>
            NovaForge<span className="text-indigo-400">Creative</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          </div>
          <Button variant="outline" className="hidden md:inline-flex border-slate-700 bg-transparent text-slate-300 hover:bg-white hover:text-black transition-all rounded-full px-6">
            Get a Free Strategy Call
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 overflow-hidden border-b border-white/5">
        <BackgroundBeams className="opacity-50" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Based in Austin, Texas • Remote friendly
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            We Forge Digital Breakthroughs That Turn Brands Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Icons</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Full-service creative agency specializing in bold branding, high-impact digital campaigns, web experiences, and performance marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-slate-200 rounded-full px-8 h-14 text-base font-semibold group transition-all">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 rounded-full px-8 h-14 text-base font-semibold backdrop-blur-md">
              View Our Work
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border-t border-white/5 pt-12 w-full max-w-3xl">
            <div>
              <div className="text-3xl font-bold text-white mb-2">2018</div>
              <div className="text-sm text-slate-500 font-medium">Trusted since</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">40+</div>
              <div className="text-sm text-slate-500 font-medium">Launched campaigns</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-2">300%+</div>
              <div className="text-sm text-slate-500 font-medium">Average ROI for clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Logos */}
      <div className="border-b border-white/5 bg-slate-950/80">
        <Logos3 heading="We proudly partner with industry-leading platforms" />
      </div>

      {/* About Us */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Who We Are</h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              NovaForge Creative is a boutique agency of strategists, designers, developers, and growth hackers obsessed with creating work that doesn't just look good—it performs.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              We help ambitious companies in tech, e-commerce, consumer goods, and SaaS break through the noise with strategy-first creativity and data-driven execution.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-indigo-400 mb-2 font-bold text-sm uppercase tracking-wider">Team</div>
                <div className="text-white text-lg">18+ Full-time creatives & strategists</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-indigo-400 mb-2 font-bold text-sm uppercase tracking-wider">Values</div>
                <div className="text-white text-lg">Boldness • Precision • Results</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="Team collaborating" className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-slate-900/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Services We Offer</h2>
            <p className="text-slate-400 text-lg">Comprehensive digital solutions designed to scale your brand and dominate your market.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: PenTool, title: "Brand Strategy & Identity", desc: "Naming, positioning, visual systems, and comprehensive brand guidelines." },
              { icon: Code, title: "Web & App Design", desc: "Custom websites, Webflow & Framer builds, Shopify/Headless e-commerce." },
              { icon: Layout, title: "Digital Advertising", desc: "Meta Ads, Google Ads, TikTok, LinkedIn, programmatic, creative testing." },
              { icon: MonitorPlay, title: "Content & Social Media", desc: "Strategy, content production, community management, influencer partnerships." },
              { icon: BarChart, title: "Performance Creative", desc: "Conversion-focused ad creatives, A/B testing, and Conversion Rate Optimization." },
              { icon: Zap, title: "Motion & Video", desc: "Explainer videos, social reels, brand films, and stunning 3D animation." },
            ].map((service, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] hover:shadow-indigo-500/20">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Selected Work</h2>
            <p className="text-slate-400 text-lg">Explore how we've helped disruptive brands achieve exponential growth through strategic creative execution.</p>
          </div>
          <Button variant="outline" className="rounded-full px-6 whitespace-nowrap">View All Case Studies</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              client: "TechNova AI",
              type: "SaaS AI Platform",
              role: "Rebrand + Redesign + Launch",
              result: "4.2× increase in demo signups, 180% MoM growth in qualified leads",
              color: "from-blue-500 to-indigo-600",
              img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
            },
            {
              client: "VibeThread Apparel",
              type: "Sustainable Streetwear",
              role: "Identity + Shopify + Ad Scaling",
              result: "From $80K to $1.4M monthly revenue in 14 months",
              color: "from-orange-500 to-pink-600",
              img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800"
            },
            {
              client: "Pulse Fitness",
              type: "Fitness Tech Wearable",
              role: "Product Launch Video + Performance Creative",
              result: "2.8M impressions, 47% CTR above industry average",
              color: "from-emerald-400 to-cyan-500",
              img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
            },
            {
              client: "EcoBloom Home",
              type: "Sustainable Home Goods DTC",
              role: "Full sequence rebuild: Brand, Site, Emails, UX",
              result: "320% ROAS, reduced CAC by 58%",
              color: "from-amber-400 to-orange-500",
              img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800"
            }
          ].map((project, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer">
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/60 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src={project.img} alt={project.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className={`absolute inset-0 opacity-40 bg-gradient-to-t ${project.color} z-10 mix-blend-color`}></div>
                <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/70 mb-2">{project.type}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.client}</h3>
                  <p className="text-slate-300 text-sm mb-4">{project.role}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                    <BarChart className="w-4 h-4 text-green-400" />
                    {project.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-white/5">
        <ShuffleCards />
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-slate-950 flex flex-col items-center justify-center border-y border-indigo-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-purple-500/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white">Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">legendary?</span></h2>
          <p className="text-xl text-slate-400 mb-10">Book a free 30-minute discovery call. No pressure, just real talk about your goals and how we can achieve them together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-500 text-white hover:bg-indigo-600 rounded-full px-8 h-14 text-base font-bold shadow-lg shadow-indigo-500/20 transition-all">
              Schedule a Free Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 bg-slate-950 hover:bg-slate-800 rounded-full px-8 h-14 text-base font-semibold">
              See Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-black text-lg">N</span>
                </div>
                NovaForge
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                Strategy before pixels. No cookie-cutter templates. 100% custom work focused on metrics that actually matter.
              </p>
              <div className="text-slate-300">
                <div className="mb-2">Austin, Texas</div>
                <div className="mb-2 hover:text-white cursor-pointer transition-colors">hello@novaforge.co</div>
                <div className="hover:text-white cursor-pointer transition-colors">(512) 555-0199</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Work</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Social</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div>© 2026 NovaForge Creative. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
