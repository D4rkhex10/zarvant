import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LineChart, Globe2, CheckCircle2 } from 'lucide-react';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Home = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);

  const whyZarvant = [
    { title: "Accuracy first", text: "We prioritize data quality over volume. Every dataset we deliver is validated and structured for immediate use." },
    { title: "Compliance built in", text: "All our collection methods are limited to publicly accessible data and designed with legal and ethical standards in mind." },
    { title: "Global reach", text: "We operate across 150+ countries, enabling geo-targeted intelligence at any scale." },
    { title: "Fast turnaround", text: "From request to delivery, our infrastructure is built for speed without sacrificing reliability." }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="home-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Parallax Background Image */}
        <motion.div 
          style={{ 
            position: 'absolute', top: '-20%', left: 0, right: 0, bottom: '-20%', 
            y: yParallax, 
            zIndex: -2 
          }}
        >
          <img src="/hero_blackout.jpg" alt="Data Cluster" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
        
        {/* Overlay to ensure text readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: -1 }}></div>

        <motion.div className="hero-content container" variants={staggerContainer} initial="hidden" animate="visible" style={{ zIndex: 10 }}>
          <motion.h1 variants={fadeUp} className="hero-title" style={{ color: 'white' }}>
            Intelligence <br/> ahead of the market.
          </motion.h1>
          <motion.p variants={fadeUp} className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.85)', margin: '0 auto 3rem' }}>
            We work with ambitious B2B tech companies to extract, process, and deliver real-time web intelligence at institutional scale.
          </motion.p>
          <motion.div variants={fadeUp} className="hero-buttons">
            <Link to="/services" className="btn btn-primary" style={{ background: 'white', color: 'black' }}>Explore Services</Link>
            <Link to="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Book a Demo</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="marquee-item">FRACTALIZED</div>
          <div className="marquee-item">VERTEX AI</div>
          <div className="marquee-item">DocInPoc</div>
          <div className="marquee-item">GetTalky</div>
          <div className="marquee-item">AlphaLedger</div>
          <div className="marquee-item">H-FACTOR</div>
          {/* Duplicate for infinite effect */}
          <div className="marquee-item">FRACTALIZED</div>
          <div className="marquee-item">VERTEX AI</div>
          <div className="marquee-item">DocInPoc</div>
          <div className="marquee-item">GetTalky</div>
          <div className="marquee-item">AlphaLedger</div>
          <div className="marquee-item">H-FACTOR</div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="full-width-section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4rem' }}>
            <div style={{ flex: '1 1 500px' }}>
              <div className="eloqwnt-bullet">The Perception Gap</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: 0 }}>Most of our clients experience the same gap - between what they are and how they're perceived.</h2>
            </div>
            <div style={{ display: 'flex', gap: '4rem' }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--text-heading)', lineHeight: 1 }}>$1Bln</div>
                <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>Value Generated</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--text-heading)', lineHeight: 1 }}>99.9%</div>
                <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>Uptime</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Zarvant Section */}
      <section className="full-width-section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="eloqwnt-bullet">The Zarvant Advantage</div>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '4rem', maxWidth: '800px' }}>Why enterprises choose Zarvant</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              {whyZarvant.map((item, index) => (
                <div key={index} style={{ borderTop: '2px solid var(--text-heading)', paddingTop: '2rem' }}>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <CheckCircle2 size={24} />
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section 1 */}
      <section className="full-width-section" style={{ background: 'var(--bg-darker)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="eloqwnt-bullet">Market Research</div>
            <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', marginTop: '1rem', maxWidth: '800px' }}>Market Research & Competitive Analysis</h3>
            <p style={{ fontSize: '1.5rem', maxWidth: '800px' }}>Gain unparalleled insights into market trends and outmaneuver competitors with our robust data collection tools.</p>
          </motion.div>
        </div>
      </section>
      
      {/* Pillars Section 2 */}
      <section className="full-width-section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="eloqwnt-bullet">Location Data</div>
            <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', marginTop: '1rem', maxWidth: '800px' }}>Geo-targeted Data</h3>
            <p style={{ fontSize: '1.5rem', maxWidth: '800px' }}>Acquire hyper-localized web intelligence seamlessly.</p>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section 3 */}
      <section className="full-width-section" style={{ background: '#080c16', color: 'white' }}>
        <div className="container" style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
          <motion.div style={{ flex: 1 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="eloqwnt-bullet" style={{ color: 'white' }}>Business Intelligence</div>
            <h3 style={{ fontSize: '4rem', marginBottom: '1.5rem', color: 'white' }}>Intelligence at a glance.</h3>
            <p style={{ fontSize: '1.5rem', maxWidth: '600px', margin: 0, color: 'rgba(255,255,255,0.8)' }}>Transform raw web data into actionable intelligence with our intuitive and comprehensive reporting dashboards.</p>
          </motion.div>
          <motion.div style={{ flex: 1 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <img src="/abstract_graphic.jpg" alt="Data Structure" style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid rgba(255,255,255,0.1)' }} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2>Ready to close the gap?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Join leading enterprises that trust Zarvant for their web intelligence needs.
          </p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
