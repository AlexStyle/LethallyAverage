import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlitchText from '../components/UI/GlitchText';
import { getStoryBySlug } from '../data/stories';
import type { DialogueLine } from '../data/stories';

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function SpeakerSpan({ line }: { line: DialogueLine }) {
  const cls = 'comic-d-speaker ' + line.color;
  return <span className={cls}>{line.speaker}:</span>;
}

function MjPromptToggle({ prompt }: { prompt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-5 pb-3">
      <button className="comic-mj-toggle" onClick={() => setOpen(!open)}>
        /imagine prompt {open ? '\u2191' : '\u2193'}
      </button>
      {open && <div className="comic-mj-code">{prompt}</div>}
    </div>
  );
}

const WeeklyStoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = slug ? getStoryBySlug(slug) : undefined;

  if (!story) {
    return (
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center py-24">
          <GlitchText as="h1" className="text-5xl text-la-red mb-4">404 &mdash; STORY NOT FOUND</GlitchText>
          <p className="font-body text-sm text-la-muted mb-8">This transmission doesn't exist.</p>
          <Link to="/weekly-stories" className="font-body text-sm text-la-red uppercase tracking-widest">&larr; Back to Stories</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="comic-halftone pt-16">
      {/* Back nav */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-[900px] mx-auto px-6 pt-4"
      >
        <Link to="/weekly-stories" className="font-body text-xs text-la-muted hover:text-la-red uppercase tracking-widest transition-colors">
          &larr; All Stories
        </Link>
      </motion.div>

      {/* COMIC HERO HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="comic-hero"
      >
        <div className="comic-brand">Lethally<span>Average</span> Presents</div>
        <h1 className="comic-title">{story.title}</h1>
        <p className="comic-issue-info">
          Issue #{String(story.week).padStart(3, '0')} &middot; <strong>{formatDate(story.date)}</strong> &middot; {story.threat}
        </p>
      </motion.header>

      {/* HOOK */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="comic-hook"
      >
        <div className="comic-hook-box">{story.hook}</div>
      </motion.div>

      {/* PANELS */}
      <div className="comic-panels">
        {story.panels.map((panel, i) => (
          <motion.div
            key={i}
            className="comic-panel"
            initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -0.5 : 0.3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
          >
            {/* Image */}
            <div className="comic-panel-image">
              <img src={panel.image} alt={panel.altText} loading={i === 0 ? 'eager' : 'lazy'} />
            </div>

            {/* Narration box */}
            {panel.narration && (
              <div className="comic-narration">{panel.narration}</div>
            )}

            {/* Dialogue */}
            {panel.dialogue && panel.dialogue.length > 0 && (
              <div className="comic-dialogue">
                {panel.dialogue.map((line, j) => (
                  <div key={j} className="comic-d-line">
                    <SpeakerSpan line={line} /> {line.text}
                  </div>
                ))}
              </div>
            )}

            {/* Callout */}
            {panel.callout && (
              <div className="comic-callout">
                <strong>{panel.callout.label}: </strong>{panel.callout.text}
              </div>
            )}

            {/* MJ Prompt */}
            {panel.mjPrompt && <MjPromptToggle prompt={panel.mjPrompt} />}
          </motion.div>
        ))}
      </div>

      {/* EPILOGUE — THE REAL ENDING */}
      {story.epilogue && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="comic-epilogue"
        >
          <span className="comic-epilogue-tag">{story.epilogue.headline}</span>
          <p className="comic-epilogue-text">{story.epilogue.text}</p>
          {story.epilogue.outcomes && story.epilogue.outcomes.length > 0 && (
            <ul className="comic-epilogue-outcomes">
              {story.epilogue.outcomes.map((outcome, i) => (
                <li key={i}>{outcome}</li>
              ))}
            </ul>
          )}
        </motion.div>
      )}

      {/* CLOSING CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[760px] mx-auto mt-4 mb-8 px-6"
      >
        <div className="comic-closing-card">
          <div className="comic-closing-shield">What you should know</div>
          <p className="comic-closing-teach">{story.lesson}</p>
          <p className="comic-closing-detail">{story.lessonDetail}</p>
          <p className="comic-closing-quote">"{story.closingQuote}"</p>
          {story.relatedLink && (
            <Link to={story.relatedLink.to} className="comic-related">
              {story.relatedLink.label} &rarr;
            </Link>
          )}
          <div className="comic-hashtags">
            {story.tags.map((tag) => (
              <span key={tag} className="comic-htag">#{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Source */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[760px] mx-auto px-6 mb-8"
      >
        <div className="comic-sources">
          <p className="comic-sources-label">Based on a real case</p>
          <p className="comic-sources-summary">{story.incidentSource}</p>
          {story.sources && story.sources.length > 0 && (
            <ul className="comic-sources-list">
              {story.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-source-link"
                  >
                    {source.label} &rarr;
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>

      {/* Back to stories */}
      <div className="text-center pb-12">
        <Link
          to="/weekly-stories"
          className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white font-body text-sm uppercase tracking-widest hover:border-la-red hover:text-la-red transition-all"
        >
          &larr; All Stories
        </Link>
      </div>
    </div>
  );
};

export default WeeklyStoryDetail;
