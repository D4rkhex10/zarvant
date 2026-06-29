const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="full-width-section" style={{ background: 'var(--bg-card)', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="gradient-text">About Zarvant</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
            Pioneering the future of intelligent web data collection.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="full-width-section" style={{ background: 'var(--bg-darker)' }}>
        <div className="container" style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Our Mission</h2>
          </div>
          <div style={{ flex: 2 }}>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.8', color: 'var(--text-heading)' }}>
              Zarvant's mission is to democratize access to the world's most critical data source: the public web. 
              We believe that transparent, ethical, and high-quality web intelligence empowers businesses to make 
              smarter decisions, foster innovation, and build better products. By navigating the complexities of 
              modern data extraction, we provide our partners with unparalleled clarity and actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="full-width-section" style={{ background: '#080c16', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Founded</h3>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', lineHeight: 1, marginBottom: '1rem' }}>2021</p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Established with a vision to redefine enterprise data aggregation.</p>
            </div>

            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Headquarters</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', lineHeight: 1.2, marginBottom: '1rem' }}>CHAPEL HILL, NC</p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Located at the heart of technological innovation.</p>
            </div>

            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Leadership</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', lineHeight: 1.2, marginBottom: '1rem' }}>Expert-led Team</p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Driven by industry veterans in data engineering, compliance, and cybersecurity.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
