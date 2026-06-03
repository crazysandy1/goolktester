'use client';
import { useFadeUp } from '@/hooks/useFadeUp';
import s from '@/app/privacy/privacy.module.css';

const SECTIONS = [
  { id: 'overview', title: '1. Overview', content: 'This Privacy Policy ("Policy") describes how Goolk AI Technologies Pvt. Ltd. ("Goolk AI", "we", "us", or "our") collects, uses, stores, shares, and protects information obtained from users of goolkai.com, our hospital management platform, patient engagement applications, telemedicine services, and all related digital properties (collectively, the "Services"). By accessing or using our Services, you consent to the practices described herein.' },
  { id: 'scope', title: '2. Scope & Applicability', content: 'This Policy applies to: (a) Hospital administrators, clinicians, and staff who use our B2B platform; (b) Patients who interact with our patient engagement apps or telemedicine services; (c) Visitors to goolkai.com; (d) Job applicants who submit information through our careers portal. This Policy is designed to comply with India\'s Digital Personal Data Protection Act, 2023 (DPDP Act), the Information Technology Act, 2000 and its rules, and internationally aligned with HIPAA principles for healthcare data handling.' },
  { id: 'collection', title: '3. Information We Collect', content: 'Personal Information: Name, email address, phone number, job title, organisation name when you fill out forms, request demos, or register for our services. Healthcare Data (B2B context): Patient health information (PHI) processed on behalf of our hospital clients — including demographics, clinical records, prescriptions, lab results, and billing data. This data is processed strictly as a data processor under contractual agreements with our hospital partners. Technical Data: IP address, browser type, device information, pages visited, session duration, referral source, and cookies/local storage tokens.' },
  { id: 'usage', title: '4. How We Use Your Information', content: 'We use collected information to: Provide, operate, and maintain our healthcare technology services; Process demo requests, partnership inquiries, and job applications; Improve platform performance, security, and user experience; Send service-related communications (not marketing, unless you opt in); Comply with legal obligations, including healthcare regulatory requirements; Generate anonymised, aggregated analytics for product improvement.' },
  { id: 'legal-basis', title: '5. Legal Basis for Processing', content: 'Under the DPDP Act 2023, we process personal data based on: Consent — when you submit forms or register for services; Contractual necessity — to fulfil our obligations under B2B service agreements with hospitals; Legitimate interest — for platform security, fraud prevention, and service improvement; Legal obligation — to comply with healthcare regulations, tax laws, and court orders.' },
  { id: 'sharing', title: '6. Data Sharing & Disclosure', content: 'We do not sell personal data. We may share information with: Hospital Partners — PHI is shared only with the contracting hospital that owns the patient relationship; Service Providers — cloud hosting (AWS/GCP, India region), payment processors, and analytics tools operating under strict data processing agreements; Legal Authorities — when required by law, court order, or regulatory mandate; Business Transfers — in connection with a merger, acquisition, or asset sale, with appropriate safeguards.' },
  { id: 'security', title: '7. Data Security', content: 'We implement industry-standard security measures: AES-256 encryption at rest and TLS 1.3 in transit; SOC 2 Type II-aligned operational controls; Role-based access control (RBAC) with multi-factor authentication; Regular penetration testing and vulnerability assessments; Data stored exclusively on ISO 27001-certified infrastructure within India; Audit logging for all access to sensitive data.' },
  { id: 'retention', title: '8. Data Retention', content: 'Personal data is retained only as long as necessary for the purposes described in this Policy. Contact form data: 2 years from last interaction. Job application data: 1 year from submission. Healthcare data (B2B): as specified in our data processing agreements with hospital partners, typically aligned with medical record retention requirements under Indian law. You may request deletion at any time (see Section 10).' },
  { id: 'cookies', title: '9. Cookies & Tracking', content: 'We use essential cookies for site functionality and optional analytics cookies (Google Analytics 4) for understanding user behaviour. You can manage cookie preferences through your browser settings. We do not use cookies for advertising or cross-site tracking.' },
  { id: 'rights', title: '10. Your Rights', content: 'Under the DPDP Act 2023 and applicable law, you have the right to: Access your personal data held by us; Correct inaccurate or incomplete data; Request deletion of your data (subject to legal retention requirements); Withdraw consent at any time; Lodge a complaint with the Data Protection Board of India. To exercise these rights, contact our Data Protection Officer at goolk.ai.startup@gmail.com.' },
  { id: 'children', title: '11. Children\'s Privacy', content: 'Our Services are not directed at individuals under 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately at goolk.ai.startup@gmail.com.' },
  { id: 'international', title: '12. International Data Transfers', content: 'All personal data is stored and processed within India. We do not transfer personal data outside India unless required for specific service delivery (e.g., global cloud CDN), and only with appropriate safeguards including standard contractual clauses.' },
  { id: 'changes', title: '13. Changes to This Policy', content: 'We may update this Policy periodically. Material changes will be communicated via email or a prominent notice on our website. The "Last updated" date at the top reflects the most recent revision.' },
  { id: 'contact-dpo', title: '14. Contact Us', content: 'Data Protection Officer: goolk.ai.startup@gmail.com | General Inquiries: goolk.ai.startup@gmail.com | Registered Office: Goolk AI Technologies Pvt. Ltd., Bangalore, Karnataka, India.' },
];

export default function PrivacyClient() {
  useFadeUp();
  return (
    <>
      {/* Header */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className="section-tag">Legal</span>
          <h1 className={s.heroH1}>
            Privacy Policy
          </h1>
          <p className={s.heroMeta}>Last updated: April 2025 · Effective: April 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className={s.layoutSection}>
        <div className={s.grid}>
          {/* TOC Sidebar */}
          <div className={s.sidebar}>
            <div className={s.sidebarTitle}>Table of Contents</div>
            <div className={s.sidebarLinks}>
              {SECTIONS.map(sec => (
                <a key={sec.id} href={`#${sec.id}`} className={s.sidebarLink}>
                  {sec.title}
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className={s.contentList}>
            {SECTIONS.map(sec => (
              <div key={sec.id} id={sec.id} className={`${s.contentCard} fade-up`}>
                <h2 className={s.cardTitle}>{sec.title}</h2>
                <p className={s.cardText}>{sec.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
