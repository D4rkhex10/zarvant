import { Database, TrendingUp, Search, MapPin, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Database size={48} />,
      title: "Web Data Collection",
      description: "Extract structured data from the web at scale. Our intelligent scrapers navigate complex architectures to deliver accurate, clean data directly to your infrastructure.",
      bg: "var(--bg-card)",
      color: "var(--text-heading)",
      iconBg: "rgba(0,0,0,0.05)"
    },
    {
      icon: <BarChart3 size={48} />,
      title: "Market Intelligence",
      description: "Stay ahead of industry shifts with comprehensive market intelligence. We aggregate data from thousands of sources to give you a 360-degree view of your sector.",
      bg: "var(--bg-darker)",
      color: "var(--text-heading)",
      iconBg: "rgba(0,0,0,0.05)"
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Price Monitoring & Trend Analysis",
      description: "Track competitor pricing and market trends in real-time. Optimize your pricing strategy dynamically based on global market fluctuations.",
      bg: "#080c16",
      color: "white",
      iconBg: "rgba(255,255,255,0.1)"
    },
    {
      icon: <Search size={48} />,
      title: "Competitive Research",
      description: "Uncover competitor strategies, marketing campaigns, and product updates as they happen. Build an intelligence advantage over your rivals.",
      bg: "var(--bg-card)",
      color: "var(--text-heading)",
      iconBg: "rgba(0,0,0,0.05)"
    },
    {
      icon: <MapPin size={48} />,
      title: "Location-based Data Verification",
      description: "Verify local search rankings, ad placements, and localized pricing with our global network of geo-targeted proxy nodes.",
      bg: "var(--bg-darker)",
      color: "var(--text-heading)",
      iconBg: "rgba(0,0,0,0.05)"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="full-width-section" style={{ background: 'var(--bg-card)', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="gradient-text">Our Services</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
            Comprehensive web intelligence solutions designed for enterprise scale and absolute compliance.
          </p>
        </div>
      </section>

      {/* Services List */}
      {services.map((svc, idx) => (
        <section key={idx} className="full-width-section" style={{ background: svc.bg, color: svc.color }}>
          <div className="container" style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}>
            <div style={{ flex: 1 }}>
              <div className="eloqwnt-bullet" style={{ color: svc.color }}>0{idx + 1}</div>
              <h3 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: svc.color }}>{svc.title}</h3>
              <p style={{ fontSize: '1.5rem', maxWidth: '600px', color: svc.color === 'white' ? 'rgba(255,255,255,0.8)' : 'var(--text-main)' }}>
                {svc.description}
              </p>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '16rem', height: '16rem', background: svc.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: svc.color }}>
                {svc.icon}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
