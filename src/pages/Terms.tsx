import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import GlitchText from '../components/UI/GlitchText';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
  transition: { duration: 0.4, ease: 'easeOut' as const },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div {...fadeUp} className="mb-10">
    <h2 className="font-display text-2xl text-la-red mb-3">{title}</h2>
    <div className="font-body text-sm text-la-muted leading-relaxed space-y-3 max-w-3xl">
      {children}
    </div>
  </motion.div>
);

const Terms = () => {
  return (
    <PageWrapper>
      <div className="mb-12">
        <GlitchText as="h1" className="text-5xl sm:text-6xl text-la-white mb-4">
          TERMS OF SERVICE
        </GlitchText>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-body text-la-muted text-sm"
        >
          The rules of the road. Still no legalese. Still keeping it real.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-accent text-xs text-la-gold mt-2 uppercase tracking-wider"
        >
          Last Updated: March 16, 2026
        </motion.p>
      </div>

      <Section title="WHAT THIS SITE IS">
        <p>
          <span className="text-la-white font-semibold">LethallyAverage.com</span> is
          a free educational resource focused on home security, cybersecurity basics,
          career guidance, and community empowerment. It was built by real people for
          real people — particularly youth and young adults in underserved communities.
        </p>
        <p>
          All content on this site is provided{' '}
          <span className="text-la-white">for free, forever</span>. There are no
          paywalls, no premium tiers, and no hidden costs.
        </p>
      </Section>

      <Section title="WHAT THIS SITE IS NOT">
        <motion.div
          className="p-4 rounded-lg border border-la-red/30 bg-la-red/5"
          whileHover={{ borderColor: 'rgba(232, 0, 29, 0.5)' }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-la-white">
            This site is <span className="font-bold text-la-red">NOT</span>{' '}
            professional security consulting, legal advice, financial advice, or a
            substitute for certified professional services.
          </p>
        </motion.div>
        <p>
          The information here is educational. While we do our best to keep everything
          accurate and up-to-date, we are not liable if something doesn't work for your
          specific situation. Security needs vary — always assess your own circumstances.
        </p>
      </Section>

      <Section title="USE AT YOUR OWN RISK">
        <p>
          By using this site, you agree that:
        </p>
        <ul className="space-y-2 mt-2">
          {[
            'The content is for educational purposes only',
            'You are responsible for how you apply what you learn',
            'We are not responsible for any damages, losses, or issues that may result from following our guides',
            'Security configurations should be tested in your own environment',
            'Career advice is based on general trends — your results may vary',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-la-red mt-0.5">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          We're sharing what we know from real experience. But we can't predict every
          situation, and we can't be held responsible for outcomes.
        </p>
      </Section>

      <Section title="SATURDAY SESSIONS">
        <p>
          If and when Saturday Sessions launch, participants agree that:
        </p>
        <ul className="space-y-2 mt-2">
          {[
            'Sessions are free and voluntary',
            'Content is educational, not professional certification',
            'We are not responsible for job placement outcomes',
            'Attendance does not create any contractual relationship',
            'We reserve the right to change schedules, topics, or locations',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-la-gold mt-0.5">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="INTELLECTUAL PROPERTY">
        <p>
          All original content on this site — text, design, code, and branding — is
          owned by LethallyAverage.
        </p>
        <p>You are welcome to:</p>
        <ul className="space-y-2 mt-2">
          {[
            'Share links to any page',
            'Reference our content in your own work (with credit)',
            'Use the checklists and guides for personal or community education',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-la-red mt-0.5">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">You may NOT:</p>
        <ul className="space-y-2 mt-2">
          {[
            'Copy our content and sell it as your own',
            'Scrape the site for commercial purposes',
            'Use our branding or name without permission',
            'Repackage our material into a paid course or product',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-la-gold mt-0.5">✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-la-white">
          We made this free so everyone can learn. Don't be the person who puts it
          behind a paywall.
        </p>
      </Section>

      <Section title="EXTERNAL LINKS">
        <p>
          This site links to third-party resources (freeCodeCamp, Year Up, Per Scholas,
          government sites, etc.). We do not control those sites and are not
          responsible for their content, privacy practices, or availability.
        </p>
        <p>
          We recommend these resources because we believe in them, not because we get
          paid. We have <span className="text-la-white">zero affiliate deals</span>.
        </p>
      </Section>

      <Section title="EMAIL COMMUNICATIONS">
        <p>
          If you join our waitlist, you agree to receive occasional emails about
          Saturday Sessions and free resources. You can unsubscribe at any time. See
          our{' '}
          <Link
            to="/privacy"
            className="text-la-red hover:text-la-gold transition-colors underline underline-offset-2"
          >
            Privacy Policy
          </Link>{' '}
          for full details on how we handle your email.
        </p>
      </Section>

      <Section title="AGE REQUIREMENT">
        <p>
          This site is designed for users aged{' '}
          <span className="text-la-white font-semibold">13 and older</span>. If you
          are under 13, please use this site with a parent or guardian.
        </p>
      </Section>

      <Section title="CHANGES TO THESE TERMS">
        <p>
          We may update these terms as the site grows. When we do, we'll update the
          date at the top of this page. Continued use of the site means you accept the
          updated terms.
        </p>
      </Section>

      <Section title="GOVERNING LAW">
        <p>
          These terms are governed by the laws of the State of Texas, United States.
          Any disputes will be resolved in accordance with Texas state law.
        </p>
      </Section>

      <motion.div
        {...fadeUp}
        className="mt-12 p-6 rounded-xl border border-la-gold/30 bg-la-gold/5"
      >
        <p className="font-body text-sm text-la-white leading-relaxed">
          <span className="font-display text-lg text-la-gold block mb-2">
            THE REAL TERMS
          </span>
          We're here to help. Don't steal our work. Don't blame us if things go
          sideways. And if you have a problem, talk to us like a human being —{' '}
          <a
            href="mailto:hello@lethallyaverage.com"
            className="text-la-red hover:text-la-gold transition-colors underline underline-offset-2"
          >
            hello@lethallyaverage.com
          </a>
          .
        </p>
      </motion.div>

      <div className="h-16" />
    </PageWrapper>
  );
};

export default Terms;
