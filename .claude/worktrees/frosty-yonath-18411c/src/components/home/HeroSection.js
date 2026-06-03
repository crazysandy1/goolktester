'use client';
import Link from 'next/link';
import s from '@/app/home.module.css';

export default function HeroSection() {
  return (
    <section className={s.hero} id="hero">
      <div className={s.heroBg} />
      <div className={s.heroBgLine} />
      <div className={`${s.heroBlob} ${s.hb1}`} />
      <div className={`${s.heroBlob} ${s.hb2}`} />

      <div className={s.heroContent}>
        <div className={s.eyebrow}>
          <span className={s.eyebrowDot} />
          Healthcare Technology Partner
        </div>
        <h1 className={s.heroH1}>
          We build the digital backbone of <em>modern hospitals</em>
        </h1>
        <p className={s.heroSub}>
          Goolkai AI delivers end-to-end healthcare technology solutions — from AI-powered patient engagement and telemedicine platforms to clinical intelligence systems — built specifically for hospitals, clinic chains, and healthcare networks across India.
        </p>
        <div className={s.heroActions}>
          <Link href="/contact" className="btn-primary">Schedule a Consultation →</Link>
          <Link href="/solutions" className="btn-outline">Explore Solutions</Link>
        </div>
        <div className={s.heroProof}>
          <div className={s.proofItem}>
            <span className={s.proofNum}>Founder<span>-led</span></span>
            <span className={s.proofLabel}>Direct access, no account reps</span>
          </div>
          <div className={s.proofDivider} />
          <div className={s.proofItem}>
            <span className={s.proofNum}>HIPAA<span> · </span>DPDP</span>
            <span className={s.proofLabel}>Compliance-first by design</span>
          </div>
          <div className={s.proofDivider} />
          <div className={s.proofItem}>
            <span className={s.proofNum}>Discovery<span>-first</span></span>
            <span className={s.proofLabel}>We listen before we build</span>
          </div>
        </div>
      </div>

      <div className={s.heroVisual}>
        {/* Floating badges */}
        <div className={`${s.heroBadge} ${s.hbf1}`}>
          <div className={s.hbfLabel}>OPD utilisation</div>
          <div className={s.hbfVal}>+34%</div>
          <div className={`${s.hbfSub} ${s.hbfSubGreen}`}>↑ vs last quarter</div>
        </div>
        <div className={`${s.heroBadge} ${s.hbf2}`}>
          <div className={s.hbfLabel}>No-show rate</div>
          <div className={s.hbfVal}>−61%</div>
          <div className={`${s.hbfSub} ${s.hbfSubRose}`}>AI reminders active</div>
        </div>
        <div className={`${s.heroBadge} ${s.hbf3}`}>
          <div className={s.hbfLabel}>Go-live time</div>
          <div className={s.hbfVal}>90 days</div>
          <div className={`${s.hbfSub} ${s.hbfSubGreen}`}>Avg. deployment</div>
        </div>

        {/* Dashboard */}
        <div className={s.dashboardWrap}>
          <div className={s.dashboard}>
            <div className={s.dbTopbar}>
              <div className={s.dbDots}><span style={{background:'#ff5f56'}}/><span style={{background:'#ffbd2e'}}/><span style={{background:'#27c93f'}}/></div>
              <span className={s.dbTitle}>Goolkai Hospital Intelligence — City Care Hospital</span>
            </div>
            <div className={s.dbBody}>
              <div className={s.dbHeaderRow}>
                <div>
                  <div className={s.dbH}>Live Hospital Overview</div>
                  <div className={s.dbSub}>29 Apr 2025 · 10:41 AM</div>
                </div>
                <div className={s.dbTag}>● Live</div>
              </div>
              <div className={s.dbMetrics}>
                <div className={s.dbMetric}><div className={s.dbMetricVal}>284 <span>↑12</span></div><div className={s.dbMetricLabel}>Today&apos;s OPD</div></div>
                <div className={s.dbMetric}><div className={s.dbMetricVal}>97<span>%</span></div><div className={s.dbMetricLabel}>Bed occupancy</div></div>
                <div className={s.dbMetric}><div className={s.dbMetricVal}>4.8<span>★</span></div><div className={s.dbMetricLabel}>Patient CSAT</div></div>
              </div>
              <div className={s.dbChartRow}>
                <div className={s.dbChart}>
                  <div className={s.dbChartTitle}>Appointments this week</div>
                  <div className={s.barChart}>
                    <div className={s.bar} style={{height:'45%',background:'var(--rose-light)'}}/>
                    <div className={s.bar} style={{height:'62%',background:'var(--rose-light)'}}/>
                    <div className={s.bar} style={{height:'78%',background:'var(--rose)'}}/>
                    <div className={s.bar} style={{height:'55%',background:'var(--rose-light)'}}/>
                    <div className={s.bar} style={{height:'90%',background:'var(--rose)'}}/>
                    <div className={s.bar} style={{height:'40%',background:'var(--rose-light)'}}/>
                    <div className={s.bar} style={{height:'70%',background:'var(--rose)'}}/>
                  </div>
                </div>
                <div className={s.dbList}>
                  <div className={s.dbChartTitle}>Dept. load</div>
                  <div className={s.dbListItem}><div className={s.dbLiDot} style={{background:'var(--rose)'}}/><div className={s.dbLiText}>Cardiology</div><div className={s.dbLiVal}>94%</div></div>
                  <div className={s.dbListItem}><div className={s.dbLiDot} style={{background:'var(--sage)'}}/><div className={s.dbLiText}>OB-GYN</div><div className={s.dbLiVal}>87%</div></div>
                  <div className={s.dbListItem}><div className={s.dbLiDot} style={{background:'var(--gold)'}}/><div className={s.dbLiText}>Paediatrics</div><div className={s.dbLiVal}>72%</div></div>
                </div>
              </div>
              <div className={s.dbAiBar}>
                <div className={s.dbAiIcon}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 7.2L21 12l-7.2 1.8L12 21l-1.8-7.2L3 12l7.2-1.8z"/></svg></div>
                <div className={s.dbAiText}><strong>Goolkai AI:</strong> Cardiology OPD trending 18% above forecast. Recommend 2 additional slots tomorrow.</div>
              </div>
            </div>
          </div>

          {/* Phone overlay */}
          <div className={s.phoneOverlayWrap}>
            <div className={s.phoneOverlay}>
              <div className={s.phoneScreen}>
                <div className={s.phoStatus}><span>9:41</span><span>●●▌</span></div>
                <div className={s.phoCard}>
                  <div className={s.phoGreeting}>Good morning,</div>
                  <div className={s.phoName}>Dr. Priya 👋</div>
                  <div className={s.phoScoreRow}>
                    <svg width="34" height="34" viewBox="0 0 34 34"><circle cx="17" cy="17" r="13" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3"/><circle cx="17" cy="17" r="13" fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="72 28" strokeDashoffset="20" strokeLinecap="round"/><text x="17" y="21" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">12</text></svg>
                    <div><div className={s.phoScoreVal}>Today&apos;s patients</div><div className={s.phoScoreLabel}>3 teleconsults pending</div></div>
                  </div>
                </div>
                <div className={s.phoItems}>
                  <div className={s.phoItem}><div className={s.phoItemIcon}>📹</div><div className={s.phoItemLabel}>Next call · 10:30</div><div className={s.phoItemBadge}>Live</div></div>
                  <div className={s.phoItem}><div className={s.phoItemIcon}>💊</div><div className={s.phoItemLabel}>Rx pending</div><div className={s.phoItemBadgeGreen}>4</div></div>
                  <div className={s.phoItem}><div className={s.phoItemIcon}>📋</div><div className={s.phoItemLabel}>Lab results in</div><div className={s.phoItemBadgeGreen}>New</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
