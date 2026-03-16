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

const Privacy = () => {
  return (
    <PageWrapper>
      <div className="mb-12">
        <GlitchText as="h1" className="text-5xl sm:text-6xl text-la-white mb-4">
          PRIVACY POLICY
        </GlitchText>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-body text-la-muted text-sm"
        >
          Plain English. No legalese. Here's what we do (and don't do) with your info.
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

      <Section title="THE SHORT VERSION">
        <p className="text-la-white text-base">
          We don't track you. We don't sell your data. We don't use cookies for
          advertising. If you give us your email, we only use it to notify you about
          Saturday Sessions. That's it.
        </p>
      </Section>

      <Section title="WHAT WE COLLECT">
        <p>
          <span className="text-la-white font-semibold">Email address</span> — Only if
          you voluntarily enter it in the waitlist form on our{' '}
          <Link to="/community" className="text-la-red hover:text-la-gold transition-colors underline underline-offset-2">
            Community page
          </Link>
          . We use this solely to let you know when Saturday Sessions launch.
        </p>
        <p>
          <span className="text-la-white font-semibold">Checklist progress</span> — The
          security checklist saves your progress in your browser's local storage. This
          data never leaves your device. We can't see it. Nobody can.
        </p>
        <p>That's the complete list. We don't collect anything else.</p>
      </Section>

      <Section title="WHAT WE DON'T COLLECT">
        <ul className="space-y-2">
          {[
            'No names, phone numbers, or physical addresses',
            'No payment information (everything is free, remember?)',
            'No browsing history or behavior tracking',
            'No location data',
            'No demographic data',
            'No data from minors beyond an email address voluntarily provided',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-la-gold mt-0.5">✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="COOKIES">
        <p>
          This site uses <span className="text-la-white">zero tracking cookies</span>.
          No Google Analytics. No Facebook Pixel. No ad networks. No retargeting.
        </p>
        <p>
          Your browser may store basic technical data (like local storage for the
          checklist), but we do not set any cookies for tracking, advertising, or
          analytics purposes.
        </p>
      </Section>

      <Section title="THIRD-PARTY SERVICES">
        <p>
          This site is hosted on{' '}
          <span className="text-la-white">GitHub Pages</span>. GitHub may collect
          basic server logs (IP address, browser type) as part of serving the site.
          This is standard for any website on the internet. You can read{' '}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
            className="text-la-red hover:text-la-gold transition-colors underline underline-offset-2"
          >
            GitHub's privacy policy here
          </a>
          .
        </p>
        <p>
          If you submit your email through our waitlist form, it may be processed
          through a third-party form service. We will only use services that do not
          sell or share your data.
        </p>
      </Section>

      <Section title="HOW WE USE YOUR EMAIL">
        <p>If you join the waitlist, we will:</p>
        <ul className="space-y-2 mt-2">
          {[
            'Send you a notification when Saturday Sessions are launching',
            'Occasionally share free resources or schedule updates',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-la-red mt-0.5">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">We will NOT:</p>
        <ul className="space-y-2 mt-2">
          {[
            'Sell your email to anyone. Ever.',
            'Share it with third parties for marketing',
            'Send you spam, promotional offers, or "partner deals"',
            'Email you more than once a month unless something important is happening',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-la-gold mt-0.5">✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="UNSUBSCRIBE">
        <p>
          Every email we send will include an{' '}
          <span className="text-la-white font-semibold">unsubscribe link</span>. One
          click and you're off the list. No guilt trips. No "are you sure?" popups. No
          hoops.
        </p>
      </Section>

      <Section title="CHILDREN'S PRIVACY">
        <p>
          This site is designed for people aged 13 and up. We do not knowingly collect
          personal information from anyone under 13. If you're a parent and believe
          your child under 13 has submitted their email, contact us and we'll remove it
          immediately.
        </p>
      </Section>

      <Section title="YOUR RIGHTS">
        <p>You can:</p>
        <ul className="space-y-2 mt-2">
          {[
            'Request to see what data we have on you (spoiler: just your email, if you gave it to us)',
            'Request we delete your email from our list',
            'Unsubscribe at any time from any email we send',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-la-red mt-0.5">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          For any of these, email us at{' '}
          <a
            href="mailto:hello@lethallyaverage.com"
            className="text-la-red hover:text-la-gold transition-colors underline underline-offset-2"
          >
            hello@lethallyaverage.com
          </a>
          .
        </p>
      </Section>

      <Section title="CHANGES TO THIS POLICY">
        <p>
          If we ever change how we handle your data, we'll update this page with a new
          date at the top. We're not in the business of surprises.
        </p>
      </Section>

      <motion.div
        {...fadeUp}
        className="mt-12 p-6 rounded-xl border border-la-gold/30 bg-la-gold/5"
      >
        <p className="font-body text-sm text-la-white leading-relaxed">
          <span className="font-display text-lg text-la-gold block mb-2">
            BOTTOM LINE
          </span>
          We built this site to help people, not to harvest data. Your trust matters
          more than any metric. If you have questions, concerns, or just want to say
          what's up —{' '}
          <a
            href="mailto:hello@lethallyaverage.com"
            className="text-la-red hover:text-la-gold transition-colors underline underline-offset-2"
          >
            hit us up
          </a>
          .
        </p>
      </motion.div>

      <div className="h-16" />
    </PageWrapper>
  );
};

export default Privacy;
