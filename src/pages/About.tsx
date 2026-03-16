import { motion } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';
import GlitchText from '../components/UI/GlitchText';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const staggerIn = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const pulseGlow = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

const Divider = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="w-full h-px bg-gradient-to-r from-transparent via-la-red to-transparent my-16 origin-left"
  />
);

const About = () => {
  return (
    <PageWrapper>
      <div className="mb-12">
        <GlitchText as="h1" className="text-5xl sm:text-6xl text-la-white mb-4">
          THE STORY
        </GlitchText>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-body text-la-muted text-sm"
        >
          Why this exists. Who it's for. No fluff.
        </motion.p>
      </div>

      {/* ORIGIN */}
      <motion.div {...staggerIn}>
        <h2 className="font-display text-3xl text-la-red mb-2">ORIGIN</h2>
        <p className="font-accent text-sm text-la-gold mb-6 uppercase tracking-wider">
          Bronx Born. Philly Trained. Texas Fortified.
        </p>
        <div className="font-body text-sm text-la-muted leading-relaxed space-y-4 max-w-3xl">
          <p>
            I grew up in <span className="text-la-white font-semibold">the Bronx</span>,
            90's kid. Before the digital boom era, we learned from being{' '}
            <motion.span
              className="text-la-white font-bold"
              whileHover={{ color: '#E8001D', transition: { duration: 0.2 } }}
            >
              HANDS ON
            </motion.span>{' '}
            — back when we threw hands, made up and became{' '}
            <motion.span
              className="text-la-white font-bold"
              whileHover={{ color: '#F5C518', transition: { duration: 0.2 } }}
            >
              BROTHERS
            </motion.span>
            . Life was rough but we learned to make due with what we had.
          </p>
          <p>
            We also weren't oblivious to crime — and that's a byproduct of life.
            What we can do is{' '}
            <span className="text-la-white">show up and make a difference</span>{' '}
            with the tools we have available, and that's where this idea was born.
          </p>
        </div>
      </motion.div>

      {/* LA Mission Callout */}
      <motion.div
        {...pulseGlow}
        className="my-10 p-6 rounded-xl border border-la-red/30 bg-gradient-to-br from-la-gray/50 to-la-black relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-la-red" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-la-red/5 rounded-full blur-2xl" />
        <p className="font-body text-sm text-la-muted leading-relaxed max-w-3xl relative z-10">
          <span className="font-display text-lg text-la-white block mb-2">
            LETHALLY AVERAGE
          </span>
          is aimed at the kids who were told they couldn't do it because of their
          skin{' '}
          <motion.span
            className="text-la-red font-bold"
            whileHover={{ textShadow: '0 0 8px rgba(232, 0, 29, 0.6)', transition: { duration: 0.2 } }}
          >
            COLOR
          </motion.span>
          , told they weren't going to make it because of their{' '}
          <motion.span
            className="text-la-red font-bold"
            whileHover={{ textShadow: '0 0 8px rgba(232, 0, 29, 0.6)', transition: { duration: 0.2 } }}
          >
            PAST
          </motion.span>{' '}
          or where they were{' '}
          <motion.span
            className="text-la-red font-bold"
            whileHover={{ textShadow: '0 0 8px rgba(232, 0, 29, 0.6)', transition: { duration: 0.2 } }}
          >
            FROM
          </motion.span>
          . The lessons learned here are a combination of my journey and experience
          on this earth and I hope you enjoy the ride.
        </p>
      </motion.div>

      <Divider />

      {/* WHY FREE */}
      <motion.div {...fadeUp}>
        <h2 className="font-display text-3xl text-la-red mb-2">WHY FREE?!</h2>
        <p className="font-accent text-sm text-la-gold mb-6 uppercase tracking-wider">
          Because the paywall is the problem. We share what we can so we all grow!
        </p>
        <div className="font-body text-sm text-la-muted leading-relaxed space-y-4 max-w-3xl">
          <p>
            Every security course costs money. Every certification is a gate.
            Every YouTube video is for{' '}
            <span className="text-la-white">engagement farming</span>. The
            information exists! — it's buried under business models. If we're all
            content creators with "courses", eventually creativity peaks and no
            one can afford to be taught because the information is{' '}
            <span className="text-la-white">gatekept and sold back to us</span>.
          </p>
          <motion.p
            className="text-la-white text-base font-body leading-relaxed p-4 border-l-2 border-la-gold bg-la-gold/5 rounded-r-lg"
            whileHover={{ borderColor: '#E8001D', transition: { duration: 0.3 } }}
          >
            This site exists because knowledge should be accessible with purpose.
            Not freemium. Not "free with a catch."{' '}
            <span className="font-bold text-la-gold">Free, NO BULL %^^.</span>
          </motion.p>
        </div>
      </motion.div>

      <Divider />

      {/* SATURDAY BOOTCAMPS */}
      <motion.div {...fadeUp}>
        <h2 className="font-display text-3xl text-la-red mb-2">
          SATURDAY BOOTCAMPS
        </h2>
        <p className="font-accent text-sm text-la-gold mb-6 uppercase tracking-wider">
          Coming Soon
        </p>
        <div className="font-body text-sm text-la-muted leading-relaxed space-y-4 max-w-3xl">
          <p>
            <span className="text-la-white">Real skills. Real people. No cost.</span>{' '}
            2-hour sessions in the Bronx. No prerequisites. No degrees needed.
            Just show up and learn something that matters.
          </p>
        </div>
      </motion.div>

      <Divider />

      {/* THE PASSION, THE HEAT, THE FIRE */}
      <motion.div {...staggerIn}>
        <motion.h2
          className="font-display text-3xl mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-la-red">THE PASSION</span>
          <span className="text-la-muted">, </span>
          <span className="text-la-gold">THE HEAT</span>
          <span className="text-la-muted">, </span>
          <motion.span
            className="text-la-red"
            animate={{
              textShadow: [
                '0 0 4px rgba(232, 0, 29, 0.3)',
                '0 0 12px rgba(232, 0, 29, 0.6)',
                '0 0 4px rgba(232, 0, 29, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            THE FIRE.
          </motion.span>
        </motion.h2>
        <div className="font-body text-sm text-la-muted leading-relaxed space-y-4 max-w-3xl">
          <p>
            Before all this, there was a{' '}
            <motion.span
              className="text-la-gold font-bold"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              style={{ display: 'inline-block' }}
            >
              BBQ FEVER
            </motion.span>
            . When I got to Texas it's like a spirit took over me and I felt the
            need to smoke every meat under the sun and it eventually lead to a
            creation named after my father.{' '}
            <span className="text-la-white font-semibold">BrisketBowls</span>{' '}
            started with food, community, and honoring the people who raised us.
          </p>
          <p>
            <span className="text-la-white">That spirit hasn't changed</span>{' '}
            and it's what grounded me in Tech.{' '}
            <motion.span
              className="text-la-gold italic"
              whileHover={{ color: '#F0F0F0', transition: { duration: 0.2 } }}
            >
              You don't have to follow the yellow brick road to get to your goals.
            </motion.span>
          </p>
        </div>
      </motion.div>

      <Divider />

      {/* CONTACT */}
      <motion.div {...fadeUp}>
        <h2 className="font-display text-3xl text-la-red mb-2">CONTACT</h2>
        <div className="font-body text-sm text-la-muted leading-relaxed space-y-4 max-w-3xl">
          <p>
            Want to bring a Saturday session to your school, org, or community?{' '}
            <span className="text-la-white">Get in touch.</span>
          </p>
          <motion.a
            href="mailto:hello@lethallyaverage.com"
            className="inline-block font-accent text-sm text-la-red hover:text-la-gold transition-colors duration-200 underline underline-offset-4"
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
          >
            hello@lethallyaverage.com →
          </motion.a>
        </div>
      </motion.div>

      <div className="h-16" />
    </PageWrapper>
  );
};

export default About;
