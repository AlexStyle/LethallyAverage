import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import GlitchText from '../components/UI/GlitchText';
import { stories } from '../data/stories';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

const WeeklyStories = () => {
  return (
    <PageWrapper>
      <div className="mb-12">
        <GlitchText as="h1" className="text-5xl sm:text-6xl text-la-white mb-4">
          WEEKLY STORIES
        </GlitchText>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-body text-la-muted text-sm max-w-2xl"
        >
          Real cybersecurity incidents. Told as comics. Every Saturday morning.
          <br />
          Featuring Shield, Phantom, and Byte &mdash; your guides through the threat landscape.
        </motion.p>
      </div>

      {/* Season / Week header */}
      <motion.div {...fadeUp} className="mb-8">
        <span className="font-accent text-xs text-la-gold uppercase tracking-[0.3em]">
          Season 1 &mdash; {stories.length} {stories.length === 1 ? 'Issue' : 'Issues'}
        </span>
        <div className="w-full h-px bg-gradient-to-r from-la-red via-la-red/40 to-transparent mt-3" />
      </motion.div>

      {/* Story cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((story, i) => (
          <motion.div
            key={story.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
          >
            <Link
              to={`/weekly-stories/${story.slug}`}
              className="group block border border-la-gray hover:border-la-red/60 transition-all duration-300 bg-la-gray/30 hover:bg-la-gray/50"
            >
              {/* Thumbnail — first panel */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={story.panels[0].image}
                  alt={story.panels[0].altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-la-black via-transparent to-transparent" />
                {/* Week badge */}
                <div className="absolute top-3 left-3 bg-la-red px-3 py-1">
                  <span className="font-accent text-xs text-la-white uppercase tracking-wider">
                    Week {story.week}
                  </span>
                </div>
                {/* Threat type badge */}
                <div className="absolute top-3 right-3 bg-la-black/80 border border-la-muted/30 px-3 py-1">
                  <span className="font-body text-xs text-la-gold uppercase tracking-wider">
                    {story.threat}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-xs text-la-muted">{formatDate(story.date)}</span>
                  <span className="w-1 h-1 rounded-full bg-la-red" />
                  <span className="font-body text-xs text-la-muted">{story.panels.length} Panels</span>
                </div>

                <h3 className="font-display text-3xl text-la-white group-hover:text-la-red transition-colors mb-1">
                  {story.title}
                </h3>
                <p className="font-accent text-sm text-la-gold uppercase tracking-wider mb-4">
                  {story.subtitle}
                </p>

                <p className="font-body text-sm text-la-muted leading-relaxed line-clamp-3">
                  {story.teaser}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {story.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs text-la-muted/70 border border-la-muted/20 px-2 py-0.5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read CTA */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="font-body text-xs text-la-red uppercase tracking-widest group-hover:tracking-[0.25em] transition-all">
                    Read Story
                  </span>
                  <span className="text-la-red group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Empty state if no stories yet */}
      {stories.length === 0 && (
        <motion.div {...fadeUp} className="text-center py-24">
          <p className="font-display text-4xl text-la-muted/40 mb-4">INCOMING TRANSMISSION</p>
          <p className="font-body text-sm text-la-muted">First story drops soon. Stay sharp.</p>
        </motion.div>
      )}
    </PageWrapper>
  );
};

export default WeeklyStories;
