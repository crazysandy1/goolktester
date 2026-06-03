'use client';
import { useFadeUp } from '@/hooks/useFadeUp';

const SECTIONS = [
  { id:'overview', title:'1. Overview', content:'This Privacy Policy ("Policy") describes how Goolkai AI Technologies Pvt. Ltd. ("Goolkai AI", "we", "us", or "our") collects, uses, stores, shares, and protects information obtained from users of goolkai.com, our hospital management platform, patient engagement applications, telemedicine services, and all related digital properties (collectively, the "Services"). By accessing or using our Services, you consent to the practices described herein.' },
  { id:'scope', title:'2. Scope & Applicability', content:'This Policy applies to: (a) Hospital administrators, clinicians, and staff who use our B2B platform; (b) Patients who interact with our patient engagement apps or telemedicine services; (c) Visitors to goolkai.com; (d) Job applicants who submit information through our careers portal. This Policy is designed to comply with India\'s Digital Personal Data Protection Act, 2023 (DPDP Act), the Information Technology Act, 2000 and its rules, and internationally aligned with HIPAA (Health Insurance Portability and Accountability Act) principles for healthcare data handling.' },
  { id:'collection', title:'3. Information We Collect', content:'Personal Information: Name, email address, phone number, job title, organisation name when you fill out forms, request demos, or register for our services. Healthcare Data (B2B context): Patient health information (PHI) processed on behalf of our hospital clients — including demographics, clinical records, prescriptions, lab results, and billing data. This data is processed strictly as a data processor under contractual agreements with our hospital partners. Technical Data: IP address, browser type, device information, pages visited, session duration, referral source, and cookies/local storage tokens. Communications Data: Email correspondence, chat transcripts, and support tickets.' },
  { id:'usage', title:'4. How We Use Your Information', content:'We use collected information to: Provide, operate, and maintain our healthcare technology services; Process demo requests, partnership inquiries, and job applications; Improve platform performance, security, and user experience; Send service-related communications (not marketing, unless you opt in); Comply with legal obligations, including healthcare regulatory requirements; Generate anonymised, aggregated analytics for product improvement.' },
  { id:'legal-basis', title:'5. Legal Basis for Processing', content:'Under the DPDP Act 2023, we process personal data based on: Consent — when you submit forms or register for services; Contractual necessity — to fulfil our obligations under B2B service agreements with hospitals; Legitimate interest — for platform security, fraud prevention, and service improvement; Legal obligation — to comply with healthcare regulations, tax laws, and court orders.' },
  { id:'sharing', title:'6. Data Sharing & Disclosure', content:'We do not sell personal data. We may share information with: Hospital Partners — PHI is shared only with the contracting hospital that owns the patient relationship; Service Providers — cloud hosting (AWS/GCP, India region), payment processors, and analytics tools operating under strict data processing agreements; Legal Authorities — when required by law, court order, or regulatory mandate; Business Transfers — in connection with a merger, acquisition, or asset sale, with appropriate safeguards.' },
  { id:'security', title:'7. Data Security', content:'We implement industry-standard security measures: AES-256 encryption at rest and TLS 1.3 in transit; SOC 2 Type II-aligned operational controls; Role-based access control (RBAC) with multi-factor authentication; Regular penetration testing and vulnerability assessments; Data stored exclusively on ISO 27001-certified infrastructure within India; Audit logging for all access to sensitive data.' },
  { id:'retention', title:'8. Data Retention', content:'Personal data is retained only as long as necessary for the purposes described in this Policy. Contact form data: 2 years from last interaction. Job application data: 1 year from submission. Healthcare data (B2B): as specified in our data processing agreements with hospital partners, typically aligned with medical record retention requirements under Indian law. You may request deletion at any time (see Section 10).' },
  { id:'cookies', title:'9. Cookies & Tracking', content:'We use essential cookies for site functionality and optional analytics cookies (Google Analytics 4) for understanding user behaviour. You can manage cookie preferences through your browser settings. We do not use cookies for advertising or cross-site tracking.' },
  { id:'rights', title:'10. Your Rights', content:'Under the DPDP Act 2023 and applicable law, you have the right to: Access your personal data held by us; Correct inaccurate or incomplete data; Request deletion of your data (subject to legal retention requirements); Withdraw consent at any time; Lodge a complaint with the Data Protection Board of India. To exercise these rights, contact our Data Protection Officer at privacy@goolkai.com.' },
  { id:'children', title:'11. Children\'s Privacy', content:'Our Services are not directed at individuals under 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately at privacy@goolkai.com.' },
  { id:'international', title:'12. International Data Transfers', content:'All personal data is stored and processed within India. We do not transfer personal data outside India unless required for specific service delivery (e.g., global cloud CDN), and only with appropriate safeguards including standard contractual clauses.' },
  { id:'third-party', title:'13. Third-Party Links', content:'Our Services may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies independently.' },
  { id:'changes', title:'14. Changes to This Policy', content:'We may update this Policy periodically. Material changes will be communicated via email or a prominent notice on our website. The "Last updated" date at the top reflects the most recent revision.' },
  { id:'contact-dpo', title:'15. Contact Us', content:'Data Protection Officer: privacy@goolkai.com | General Inquiries: support@goolkai.com | Registered Office: Goolkai AI Technologies Pvt. Ltd., Bangalore, Karnataka, India. | CIN: U62013KA2021PTC151234' },
];

export default function PrivacyClient() {
  useFadeUp();
  return (
    <section style={{background:'var(--cream)',padding:'140px 5vw 90px'}}>
      <div style={{maxWidth:1100,margin:'0 auto',display:'grid',gridTemplateColumns:'240px 1fr',gap:'4rem',alignItems:'start'}}>
        {/* TOC sidebar */}
        <nav style={{position:'sticky',top:90,background:'#fff',borderRadius:18,padding:'1.5rem',border:'1px solid var(--border)',fontSize:'.82rem'}}>
          <div style={{fontFamily:'var(--font-heading)',fontWeight:700,color:'var(--text)',marginBottom:'1rem',fontSize:'.9rem'}}>Table of Contents</div>
          <div style={{display:'flex',flexDirection:'column',gap:'.5rem'}}>
            {SECTIONS.map(s=>(
              <a key={s.id} href={`#${s.id}`} style={{color:'var(--muted)',textDecoration:'none',fontWeight:500,transition:'color .2s',lineHeight:1.4}} onMouseEnter={e=>e.currentTarget.style.color='var(--rose)'} onMouseLeave={e=>e.currentTarget.style.color='var(--muted)'}>{s.title}</a>
            ))}
          </div>
        </nav>

        {/* Content */}
        <div>
          <span className="section-tag">Legal</span>
          <h1 style={{fontFamily:'var(--font-heading)',fontSize:'clamp(2rem,3.5vw,3rem)',fontWeight:800,lineHeight:1.12,letterSpacing:'-.025em',color:'var(--text)',marginBottom:'.5rem'}}>Privacy Policy</h1>
          <p style={{fontSize:'.88rem',color:'var(--muted)',marginBottom:'3rem'}}>Last updated: April 2025 · Effective: April 2025</p>
          <div style={{display:'flex',flexDirection:'column',gap:'2.5rem'}}>
            {SECTIONS.map(sec=>(
              <div key={sec.id} id={sec.id} className="fade-up">
                <h2 style={{fontFamily:'var(--font-heading)',fontSize:'1.2rem',fontWeight:700,color:'var(--text)',marginBottom:'.8rem'}}>{sec.title}</h2>
                <p style={{fontSize:'.92rem',color:'var(--muted)',lineHeight:1.78}}>{sec.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
