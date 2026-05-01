import React, { JSX } from 'react';
import Head from '@docusaurus/Head';

export default function LegalNotice(): JSX.Element {
  return (
    <>
      <Head>
        <title>Legal Notice · Michael Fiebelkorn</title>
        <meta name="robots" content="noindex" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <body className="legal-page" />
      </Head>

      
      <style>{`
        body.legal-page .navbar,
        body.legal-page .navbar-sidebar,
        body.legal-page .footer {
          display: none !important;
        }
        body.legal-page .main-wrapper {
          padding-top: 0 !important;
          margin-top: 0 !important;
          background: #0f172a;
        }
      `}</style>

      <main style={{
        fontFamily: "'Quicksand', sans-serif",
        background: '#0f172a',
        minHeight: '100vh',
        color: '#ffffff',
        padding: '72px 2rem',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          {/* Back link */}
          <a
            href="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 500,
              marginBottom: '48px',
            }}
          >
            ← Back to Portfolio
          </a>

          <h1 style={{
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: '120%',
            marginBottom: '48px',
            color: '#ffffff',
          }}>
            Privacy Policy
          </h1>

          {/* ── 1 ─────────────────────────────── */}
          <Section title="1. Data protection at a glance">
            <SubTitle>General Information</SubTitle>
            <P>The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified. You can find detailed information on the subject of data protection in our data protection declaration listed under this text.</P>

            <SubTitle>Data collection on this website</SubTitle>
            <SubTitle2>Who is responsible for data collection on this website?</SubTitle2>
            <P>The data processing on this website is carried out by the website operator. You can find his contact details in the section 'Information on the responsible party' in this data protection declaration.</P>

            <SubTitle2>How do we collect your data?</SubTitle2>
            <P>On the one hand, your data is collected when you communicate it to us. This may, for example, be data that you enter in a contact form.</P>
            <P>Other data is collected automatically or with your consent when you visit the website by our IT systems. This is primarily technical data (e.g. Internet browser, operating system or time of page access). This data is collected automatically as soon as you enter this website.</P>

            <SubTitle2>What do we use your data for?</SubTitle2>
            <P>Some of the data is collected to ensure that the website is provided without errors. Other data can be used to analyze your user behavior.</P>

            <SubTitle2>What rights do you have regarding your data?</SubTitle2>
            <P>You have the right to obtain information about the origin, recipient and purpose of your stored personal data free of charge at any time. You also have the right to request that this data be corrected or deleted. If you have given your consent to data processing, you can revoke this consent at any time for the future. You also have the right to request that the processing of your personal data be restricted under certain circumstances. You also have the right to lodge a complaint with the responsible supervisory authority.</P>
            <P>You can contact us at any time with any questions about this or other issues relating to data protection.</P>
          </Section>

          {/* ── 2 ─────────────────────────────── */}
          <Section title="2. Hosting">
            <P>We host the content of our website with the following provider: <strong>HOSTINGER operations, UAB</strong></P>

            <SubTitle>External Hosting</SubTitle>
            <P>This website is hosted externally. The personal data collected on this website is stored on the servers of the host(s). This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses and other data generated via a website.</P>
            <P>External hosting is carried out for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 Para. 1 lit. b GDPR) and in the interest of a secure, fast and efficient provision of our online offer by a professional provider (Art. 6 Para. 1 lit. f GDPR). If a corresponding consent has been requested, the processing is carried out exclusively on the basis of Art. 6 Para. 1 lit. a GDPR and Section 25 Para. 1 TDDDG. The consent can be revoked at any time.</P>
            <P>Our host(s) will only process your data to the extent necessary to fulfill their service obligations and will follow our instructions with regard to this data.</P>
            <P>
              <strong>HOSTINGER operations, UAB</strong><br />
              Švitrigailos str. 34, Vilnius 03230 Lithuania<br />
              Phone: +37064503378<br />
              Email: domains@hostinger.com
            </P>
          </Section>

          {/* ── 3 ─────────────────────────────── */}
          <Section title="3. General information and mandatory information">
            <SubTitle>Data Protection</SubTitle>
            <P>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this data protection declaration.</P>
            <P>We would like to point out that data transmission over the Internet (e.g. when communicating by email) may have security gaps. Complete protection of data against access by third parties is not possible.</P>

            <SubTitle>Note on the responsible body</SubTitle>
            <P>
              <strong>Michael Fiebelkorn</strong><br />
              Ratzelstrasse 10a<br />
              04207 Leipzig<br /><br />
              Phone: +4915781751482<br />
              Email: kontakt@michael-fiebelkorn.de
            </P>
            <P>The responsible body is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, e-mail addresses, etc.).</P>

            <SubTitle>Storage Period</SubTitle>
            <P>Unless a more specific storage period has been specified in this data protection declaration, your personal data will remain with us until the purpose for data processing no longer applies. If you make a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g. retention periods under tax or commercial law); in the latter case, deletion will take place once these reasons no longer apply.</P>

            <SubTitle>General information on the legal basis for data processing on this website</SubTitle>
            <P>If you have consented to data processing, we will process your personal data on the basis of Art. 6 Para. 1 lit. a GDPR or Art. 9 Para. 2 lit. a GDPR if special categories of data are processed in accordance with Art. 9 Para. 1 GDPR. If your data is required to fulfill the contract or to carry out pre-contractual measures, we will process your data on the basis of Art. 6 Para. 1 lit. b GDPR. Furthermore, we process your data if it is required to fulfill a legal obligation on the basis of Art. 6 Para. 1 lit. c GDPR. Data processing may also be carried out on the basis of our legitimate interest in accordance with Art. 6 (1) (f) GDPR.</P>

            <SubTitle>Recipients of personal data</SubTitle>
            <P>As part of our business activities, we work with various external bodies. In some cases, this also requires the transmission of personal data to these external bodies. We only pass on personal data to external bodies if this is necessary to fulfill a contract, if we are legally obliged to do so (e.g. passing on data to tax authorities), if we have a legitimate interest in the transfer in accordance with Art. 6 (1) (f) GDPR or if another legal basis allows the data to be passed on.</P>

            <SubTitle>Revocation of your consent to data processing</SubTitle>
            <P>Many data processing operations are only possible with your express consent. You can revoke your consent at any time. The legality of the data processing carried out up to the time of revocation remains unaffected by the revocation.</P>

            <SubTitle>Right to object to data collection in special cases and to direct advertising (Art. 21 GDPR)</SubTitle>
            <P style={{ textTransform: 'uppercase', fontSize: '14px', lineHeight: '160%', color: '#94a3b8' }}>
              If the data processing is carried out on the basis of Art. 6 Paragraph 1 lit. e or f GDPR, you have the right to object to the processing of your personal data at any time for reasons arising from your particular situation; this also applies to profiling based on these provisions. If you object, we will no longer process your personal data unless we can prove compelling legitimate grounds for the processing which override your interests, rights and freedoms or the processing is for the purpose of asserting, exercising or defending legal claims (objection according to Art. 21 Para. 1 GDPR).
            </P>
            <P style={{ textTransform: 'uppercase', fontSize: '14px', lineHeight: '160%', color: '#94a3b8' }}>
              If your personal data is processed for the purpose of direct marketing, you have the right to object at any time to the processing of personal data concerning you for the purpose of such advertising; this also applies to profiling in so far as it is related to such direct marketing. If you object, your personal data will subsequently no longer be used for the purpose of direct marketing (objection according to Art. 21 Para. 2 GDPR).
            </P>

            <SubTitle>Right to lodge a complaint with the competent supervisory authority</SubTitle>
            <P>In the event of violations of the GDPR, those affected have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, place of work or place of the alleged violation.</P>

            <SubTitle>Right to data portability</SubTitle>
            <P>You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format.</P>

            <SubTitle>Information, Correction and Deletion</SubTitle>
            <P>Within the framework of the applicable legal provisions, you have the right at any time to obtain free information about your stored personal data, its origin and recipient and the purpose of data processing and, if applicable, a right to correction or deletion of this data.</P>

            <SubTitle>Right to restriction of processing</SubTitle>
            <P>You have the right to request that the processing of your personal data be restricted. The right to restrict processing exists in the following cases:</P>
            <ul style={{ color: '#94a3b8', paddingLeft: '1.5rem', lineHeight: '180%', marginBottom: '1rem' }}>
              <li>If you dispute the accuracy of your personal data stored by us, we usually need time to check this.</li>
              <li>If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.</li>
              <li>If we no longer need your personal data, but you require it to exercise, defend or assert legal claims.</li>
              <li>If you have lodged an objection in accordance with Art. 21 Para. 1 GDPR, a balance must be struck between your interests and ours.</li>
            </ul>

            <SubTitle>SSL or TLS Encryption</SubTitle>
            <P>For security reasons and to protect the transmission of confidential content, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from 'http://' to 'https://' and by the lock symbol in your browser line.</P>

            <SubTitle>Objection to advertising emails</SubTitle>
            <P>The use of contact data published as part of the imprint obligation to send unsolicited advertising and information materials is hereby prohibited. The operators of the pages expressly reserve the right to take legal action in the event of unsolicited advertising information being sent, for example through spam emails.</P>
          </Section>

          {/* ── 4 ─────────────────────────────── */}
          <Section title="4. Data collection on this website">
            <SubTitle>Inquiry by email, telephone or fax</SubTitle>
            <P>If you contact us by email, telephone or fax, your request, including all personal data resulting from it (name, request), will be stored and processed by us for the purpose of processing your request. We will not pass on this data without your consent.</P>
            <P>This data is processed on the basis of Art. 6 (1) (b) GDPR, provided that your request is related to the fulfillment of a contract or is necessary to carry out pre-contractual measures. The data you send to us via contact requests will remain with us until you request deletion, revoke your consent to storage or the purpose for storing the data no longer applies.</P>
          </Section>

          {/* ── 5 ─────────────────────────────── */}
          <Section title="5. Newsletter">
            <SubTitle>Newsletter Data</SubTitle>
            <P>If you would like to receive the newsletter offered on the website, we require an email address from you as well as information that allows us to verify that you are the owner of the email address provided and that you agree to receive the newsletter.</P>
            <P>The data entered in the newsletter registration form is processed exclusively on the basis of your consent (Art. 6 Para. 1 lit. a GDPR). You can revoke your consent at any time, for example via the 'unsubscribe' link in the newsletter.</P>
          </Section>

          {/* ── 6 ─────────────────────────────── */}
          <Section title="6. Plugins and Tools">
            <SubTitle>Google Fonts (local hosting)</SubTitle>
            <P>This site uses so-called Google Fonts, which are provided by Google, for the uniform display of fonts. The Google Fonts are installed locally. There is no connection to Google servers.</P>
            <P>For more information about Google Fonts, see{' '}
              <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noreferrer" style={{ color: '#60a5fa' }}>
                https://developers.google.com/fonts/faq
              </a>{' '}
              and in Google's privacy policy:{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" style={{ color: '#60a5fa' }}>
                https://policies.google.com/privacy
              </a>.
            </P>
          </Section>

          
          <p style={{ color: '#475569', fontSize: '14px', marginTop: '64px', borderTop: '1px solid #1e293b', paddingTop: '24px' }}>
            Source: <a href="https://www.e-recht24.de" target="_blank" rel="noreferrer" style={{ color: '#475569' }}>https://www.e-recht24.de</a>
            {' · '}
            <a href="/portfolio" style={{ color: '#475569' }}>← Back to Portfolio</a>
          </p>

        </div>
      </main>
    </>
  );
}


function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{
        fontFamily: "'Quicksand', sans-serif",
        fontWeight: 700,
        fontSize: '1.5rem',
        color: '#ffffff',
        marginBottom: '20px',
        paddingBottom: '10px',
        borderBottom: '1px solid #1e293b',
      }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 600,
      fontSize: '1.05rem',
      color: '#e2e8f0',
      marginBottom: '8px',
      marginTop: '20px',
    }}>
      {children}
    </h3>
  );
}

function SubTitle2({ children }: { children: React.ReactNode }) {
  return (
    <h4 style={{
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 600,
      fontSize: '0.95rem',
      color: '#cbd5e1',
      marginBottom: '6px',
      marginTop: '16px',
    }}>
      {children}
    </h4>
  );
}

function P({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '175%',
      color: '#94a3b8',
      marginBottom: '12px',
      ...style,
    }}>
      {children}
    </p>
  );
}