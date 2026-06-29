const DataUsagePolicy = () => {
  return (
    <div className="animate-fade-in section container" style={{ maxWidth: '800px' }}>
      <h1 className="gradient-text" style={{ marginBottom: '2rem' }}>Data Usage & Compliance Policy</h1>
      <div className="glass" style={{ padding: '3rem', borderRadius: '1rem' }}>
        <p><strong>Last Updated: June 28, 2026</strong></p>

        <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: 'var(--text-main)' }}>
          Zarvant strictly adheres to all international data privacy laws and ethical data extraction standards. We are committed to transparency and compliance in all our web intelligence operations.
        </p>

        <h3 style={{ marginTop: '2rem' }}>1. Public Data Extraction</h3>
        <p>
          Zarvant only extracts data that is publicly available on the internet. We do not bypass authentication mechanisms (such as paywalls or login screens) to access private or restricted information.
        </p>

        <h3 style={{ marginTop: '2rem' }}>2. Personally Identifiable Information (PII)</h3>
        <p>
          We employ robust automated systems to identify and redact Personally Identifiable Information (PII) from our datasets unless the collection of such data is explicitly requested by a client who has demonstrated a lawful basis for its processing (e.g., GDPR Article 6).
        </p>

        <h3 style={{ marginTop: '2rem' }}>3. Respecting robots.txt and Rate Limits</h3>
        <p>
          Our web intelligence agents are configured to strictly adhere to the directives specified in the `robots.txt` files of target domains. Furthermore, we implement intelligent rate limiting to ensure our scraping activities do not degrade the performance of target infrastructure.
        </p>

        <h3 style={{ marginTop: '2rem' }}>4. Partner Compliance (e.g., Bright Data)</h3>
        <p>
          When utilizing third-party networks, proxy services, or infrastructure partners (such as Bright Data), Zarvant fully complies with their Acceptable Use Policies (AUP) and KYC procedures. Our operations are fully transparent and auditable.
        </p>

        <h3 style={{ marginTop: '2rem' }}>5. Security & Retention</h3>
        <p>
          Collected data is encrypted both in transit (TLS 1.3) and at rest (AES-256). Data is retained only for the duration necessary to fulfill our clients' operational requirements and is subsequently securely purged.
        </p>

        <h3 style={{ marginTop: '2rem' }}>6. Contact the DPO</h3>
        <p>
          If you are a webmaster, a data subject, or a compliance officer with inquiries regarding our data operations, please contact our Data Protection Officer at: <strong>compliance@zarvant.xyz</strong>.
        </p>
      </div>
    </div>
  );
};

export default DataUsagePolicy;
