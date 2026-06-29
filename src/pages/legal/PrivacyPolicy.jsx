const PrivacyPolicy = () => {
  return (
    <div className="animate-fade-in section container" style={{ maxWidth: '800px' }}>
      <h1 className="gradient-text" style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
      <div className="glass" style={{ padding: '3rem', borderRadius: '1rem' }}>
        <p><strong>Last Updated: June 28, 2026</strong></p>
        
        <h3 style={{ marginTop: '2rem' }}>1. Introduction</h3>
        <p>
          Welcome to Zarvant ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website (zarvant.xyz) and tell you about your privacy rights.
        </p>

        <h3 style={{ marginTop: '2rem' }}>2. Data We Collect</h3>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul style={{ paddingLeft: '2rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data:</strong> includes billing address, email address and telephone numbers.</li>
          <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
        </ul>

        <h3 style={{ marginTop: '2rem' }}>3. How We Use Your Data</h3>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul style={{ paddingLeft: '2rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal or regulatory obligation.</li>
        </ul>

        <h3 style={{ marginTop: '2rem' }}>4. Data Security</h3>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
        </p>

        <h3 style={{ marginTop: '2rem' }}>5. Contact Us</h3>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us at info@zarvant.xyz.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
