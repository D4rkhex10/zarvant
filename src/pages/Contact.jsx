import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="full-width-section" style={{ background: 'var(--bg-card)', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="gradient-text">Contact Us</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
            Get in touch with our team to discuss your web intelligence needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="full-width-section" style={{ background: '#080c16', color: 'white', paddingTop: 0 }}>
        <div className="container" style={{ display: 'flex', gap: '8rem', flexWrap: 'wrap', paddingTop: '8rem' }}>
          
          <div style={{ flex: 1, minWidth: '400px' }}>
            <h2 style={{ marginBottom: '3rem', fontSize: '3rem', color: 'white' }}>Send us a message</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '1rem', borderRadius: 0, border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white', fontSize: '1.1rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>Email</label>
                <input type="email" placeholder="john@company.com" style={{ width: '100%', padding: '1rem', borderRadius: 0, border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white', fontSize: '1.1rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>Message</label>
                <textarea rows="5" placeholder="How can we help?" style={{ width: '100%', padding: '1rem', borderRadius: 0, border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white', fontSize: '1.1rem', resize: 'vertical' }}></textarea>
              </div>
              <button type="button" className="btn" style={{ alignSelf: 'flex-start', background: 'white', color: 'black', padding: '1rem 3rem', fontSize: '1.1rem' }}>Send Message</button>
            </form>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4rem', paddingTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
              <div style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Mail size={32} />
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: 'white' }}>Email Support</h3>
                <p style={{ margin: '0', color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem' }}>info@zarvant.xyz</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
              <div style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Phone size={32} />
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: 'white' }}>Phone</h3>
                <p style={{ margin: '0', color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem' }}>708 289 8516</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
              <div style={{ color: 'rgba(255,255,255,0.5)' }}>
                <MapPin size={32} />
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: 'white' }}>Headquarters</h3>
                <p style={{ margin: '0', color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem' }}>CHAPEL HILL, NC</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
