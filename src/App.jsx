import { useEffect } from 'react'

const CONTACT_EMAIL = 'exertia.game@gmail.com'

// ── Scroll to hash on load and whenever hash changes ─────────────────────────
function useHashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 120)
      }
    }
    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])
}

function scrollTo(id) {
  window.location.hash = id
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// ── Components ────────────────────────────────────────────────────────────────
function QuoteBlock({ children }) {
  return <blockquote className="quote-block">{children}</blockquote>
}

function CardTitle({ children }) {
  return (
    <div className="card-title">
      <span className="dot" />
      {children}
    </div>
  )
}

// ── Privacy Section ───────────────────────────────────────────────────────────
function PrivacySection() {
  return (
    <section id="privacy" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-icon">PP</div>
          <div>
            <div className="section-title">Privacy Policy</div>
            <div className="section-subtitle">Last updated: April 2026</div>
          </div>
        </div>

        <div className="card">
          <CardTitle>Overview</CardTitle>
          <p>
            Exertia ("we", "our", or "us") is a fitness game that uses your device camera
            for real-time motion tracking. We are committed to being fully transparent about
            what data we collect, how we use it, and how we protect it.
          </p>
          <p style={{ marginTop: 12 }}>
            By using Exertia you agree to the practices described in this policy.
          </p>
        </div>

        <div className="card">
          <CardTitle>Camera &amp; Motion Data</CardTitle>
          <p>
            Exertia uses your device camera exclusively to detect body movement during gameplay.
          </p>
          <QuoteBlock>
            "The app accesses the camera solely for real-time motion tracking via MediaPipe.
            No video or imagery is recorded, stored, or transmitted to any servers.
            All processing occurs strictly on-device."
          </QuoteBlock>
          <QuoteBlock>
            "Our app uses the device camera for real-time motion detection via MediaPipe.
            All processing is done strictly on-device. No camera data, video, or biometric
            information is ever recorded, stored, or transmitted."
          </QuoteBlock>
          <p>
            The camera feed is used only while you are actively playing. It is never active
            in the background and is never accessed by any third party.
          </p>
        </div>

        <div className="card">
          <CardTitle>Authentication</CardTitle>
          <p>
            Exertia uses Google, Apple, and Supabase to manage user accounts. When you
            sign in we may receive your name and email address to create and identify
            your account.
          </p>
          <QuoteBlock>
            "We use Google and Apple (via Supabase) for user accounts. We only collect
            your name and email address to manage your profile."
          </QuoteBlock>
          <QuoteBlock>
            "When you sign in, we receive your email address and basic profile info to
            create your account."
          </QuoteBlock>
          <p style={{ marginTop: 14 }}>
            Learn more about how our providers handle your data:
          </p>
          <p style={{ marginTop: 8 }}>
            <a className="ext-link" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              Google Privacy Policy
            </a>
            {'  ·  '}
            <a className="ext-link" href="https://supabase.com/privacy" target="_blank" rel="noreferrer">
              Supabase Privacy Policy
            </a>
            {'  ·  '}
            <a className="ext-link" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">
              Apple Privacy Policy
            </a>
          </p>
        </div>

        <div className="card">
          <CardTitle>Data We Collect</CardTitle>
          <p>When you create an account and use Exertia, we collect:</p>
          <ul style={{ marginTop: 12, paddingLeft: 20, color: 'var(--muted)', lineHeight: 2 }}>
            <li><strong style={{ color: 'var(--text)' }}>Email address</strong> — for account login and communication</li>
            <li><strong style={{ color: 'var(--text)' }}>Display name</strong> — shown on your profile</li>
            <li><strong style={{ color: 'var(--text)' }}>Fitness session data</strong> — calories burned, distance, steps, duration, jump &amp; crouch counts</li>
            <li><strong style={{ color: 'var(--text)' }}>User ID</strong> — a unique identifier linked to your activity (listed under "Identifiers" in App Store privacy nutrition label)</li>
            <li><strong style={{ color: 'var(--text)' }}>Optional health metrics</strong> — current weight and target weight, entered by you during onboarding</li>
          </ul>
          <p style={{ marginTop: 14 }}>
            We do <strong style={{ color: '#fff' }}>not</strong> collect precise location,
            contacts, browsing history, financial information, or any biometric data.
          </p>
        </div>

        <div className="card">
          <CardTitle>Data Retention</CardTitle>
          <QuoteBlock>
            "User account data is stored until the user requests deletion via the
            in-app 'Delete Account' feature."
          </QuoteBlock>
          <p>
            When you delete your account, all personal data — including your profile,
            session history, and fitness records — is permanently removed from our systems.
            This action cannot be undone.
          </p>
        </div>

        <div className="card">
          <CardTitle>Account Deletion</CardTitle>
          <QuoteBlock>
            "Users can delete their account and all associated data at any time via
            the in-app settings."
          </QuoteBlock>
          <p>
            Open Exertia &rarr; Profile &rarr; Settings &rarr; <strong style={{ color: '#fff' }}>Delete Account</strong>.
            Your data will be permanently erased immediately.
          </p>
        </div>

        <div className="card">
          <CardTitle>Analytics &amp; Identifiers</CardTitle>
          <p>
            Exertia uses Supabase for data storage and basic analytics. The following
            identifier is linked to your account:
          </p>
          <ul style={{ marginTop: 12, paddingLeft: 20, color: 'var(--muted)', lineHeight: 2 }}>
            <li><strong style={{ color: 'var(--text)' }}>User ID</strong> — linked to your fitness session history</li>
          </ul>
          <p style={{ marginTop: 12 }}>
            This is declared under <em>Data Linked to You &rarr; Identifiers</em> in the App Store
            Privacy Nutrition Label.
          </p>
          <p style={{ marginTop: 10 }}>
            We do not use third-party advertising networks or sell your data to any party.
          </p>
        </div>

        <div className="card">
          <CardTitle>Children's Privacy</CardTitle>
          <p>
            Exertia is not directed at children under 13. We do not knowingly collect
            personal information from children. If you believe your child has provided us
            with personal data, please contact us and we will delete it promptly.
          </p>
        </div>

        <div className="card">
          <CardTitle>Changes to This Policy</CardTitle>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise
            the "Last updated" date at the top of this page. Continued use of the app after
            any changes constitutes your acceptance of the new policy.
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Contact Section ───────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section id="contact" className="section" style={{ paddingBottom: 80 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-icon">CU</div>
          <div>
            <div className="section-title">Contact Us</div>
            <div className="section-subtitle">We typically respond within 24 – 48 hours</div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <CardTitle>Get in Touch</CardTitle>
          <p>
            Have a question, found a bug, or want to give feedback? We would love to
            hear from you. Reach out via email and our team will get back to you as
            soon as possible.
          </p>
        </div>

        <div className="contact-grid">
          <a
            className="contact-card"
            href={`mailto:${CONTACT_EMAIL}?subject=Exertia%20Support`}
          >
            <div className="contact-icon contact-icon--text">@</div>
            <div className="contact-info">
              <strong>Email Support</strong>
              <span>{CONTACT_EMAIL}</span>
            </div>
          </a>
        </div>

        <div className="card" style={{ marginTop: 24 }}>
          <CardTitle>Reporting Issues</CardTitle>
          <p>
            When reporting a bug, please include your device model, iOS version, and a
            brief description of what happened. Screenshots or screen recordings are very
            helpful!
          </p>
          <p style={{ marginTop: 10 }}>
            For account deletion requests, data export requests, or any privacy-related
            enquiries, please use the subject line:{' '}
            <strong style={{ color: 'var(--neon)' }}>Privacy Request — Exertia</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  useHashScroll()

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <span className="nav-logo">EXERTIA</span>
          <div className="nav-links">
            <button className="nav-link" onClick={() => scrollTo('privacy')}>Privacy Policy</button>
            <button className="nav-link" onClick={() => scrollTo('contact')}>Contact Us</button>
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-badge">Legal &amp; Support</div>
        <h1>EXERTIA<br /><span>The Fitness Game</span></h1>
        <p>
          Transparency about your data and an open line to our team — because trust
          is part of the game.
        </p>
      </div>

      <PrivacySection />

      <div className="container">
        <div className="divider" />
      </div>

      <ContactSection />

      <footer className="footer">
        <div className="container">
          <div className="footer-logo">EXERTIA</div>
          <p>© {new Date().getFullYear()} Exertia. All rights reserved.</p>
          <div className="footer-links">
            <button className="footer-link" onClick={() => scrollTo('privacy')}>Privacy Policy</button>
            <button className="footer-link" onClick={() => scrollTo('contact')}>Contact Us</button>
            <a className="footer-link" href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: 'none' }}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
