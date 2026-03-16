import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import GlitchText from '../components/UI/GlitchText';
import Badge from '../components/UI/Badge';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
  transition: { duration: 0.4, ease: 'easeOut' as const },
};

interface ChecklistItemProps {
  text: string;
  detail?: string;
}

const ChecklistItem = ({ text, detail }: ChecklistItemProps) => {
  const [checked, setChecked] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className={`p-3 rounded-lg border transition-colors duration-200 ${checked ? 'border-la-gold/30 bg-la-gold/5' : 'border-la-gray bg-la-black'}`}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => setChecked(!checked)}
          className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center transition-colors ${checked ? 'bg-la-gold border-la-gold' : 'border-la-muted hover:border-la-red'}`}
        >
          {checked && <span className="text-la-black text-xs font-bold">✓</span>}
        </button>
        <div className="flex-1">
          <span className={`font-body text-xs ${checked ? 'text-la-muted line-through' : 'text-la-white'}`}>
            {text}
          </span>
          {detail && (
            <button
              onClick={() => setShowDetail(!showDetail)}
              className="ml-2 font-accent text-[10px] text-la-red hover:text-la-gold uppercase tracking-widest"
            >
              {showDetail ? '−' : 'HOW?'}
            </button>
          )}
          {showDetail && detail && (
            <p className="font-body text-[11px] text-la-muted mt-2 leading-relaxed pl-0 border-l-2 border-la-red/30 ml-0 pl-3">
              {detail}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const months = [
  {
    month: 'Month 1',
    title: 'HOME NETWORK SECURITY',
    subtitle: 'Lock down your digital front door',
    color: 'text-la-red',
    borderColor: 'border-la-red',
    prep: [
      {
        text: 'Know your router brand and model number (check the sticker on the bottom)',
        detail: 'Flip your router over. There\'s a sticker with the brand, model, and default login. Write it down or take a photo. You\'ll need this for every step that follows.',
      },
      {
        text: 'Find your router admin login page (try 192.168.1.1 or 192.168.0.1)',
        detail: 'Open any browser, type 192.168.1.1 in the address bar. If that doesn\'t work, try 192.168.0.1. On Windows, open Command Prompt and type "ipconfig" — look for Default Gateway.',
      },
      {
        text: 'Write down every device connected to your WiFi',
        detail: 'Log into your router admin page → look for "Connected Devices" or "Client List." Count them. If you see devices you don\'t recognize, that\'s a problem we\'ll solve in session.',
      },
      {
        text: 'Check if your WiFi password is longer than 15 characters',
        detail: 'If your WiFi password is "password123" or your apartment number, it\'s getting cracked in minutes. We\'ll set up proper passwords in session. For now, just check what yours is.',
      },
      {
        text: 'Find out if your router has a guest network option',
        detail: 'In your router settings, look for "Guest Network" or "Guest WiFi." Most routers made after 2018 have this. If yours does, we\'ll set it up. If not, we\'ll cover alternatives.',
      },
      {
        text: 'Check when your router firmware was last updated',
        detail: 'Router settings → Administration or System → Firmware Update. If it says something from 2022 or earlier, your router has known vulnerabilities. We\'ll fix this.',
      },
      {
        text: 'Download a WiFi analyzer app (free: WiFi Analyzer on Android, Airport Utility on iOS)',
        detail: 'These apps show you every WiFi network around you, their signal strength, and what channel they\'re on. We\'ll use this to optimize your network and spot suspicious networks.',
      },
    ],
    skills: [
      'Router admin login and security configuration',
      'Creating and managing a guest network',
      'Identifying unknown devices on your network',
      'Disabling WPS and UPnP (and understanding why)',
      'Setting up DNS over HTTPS (Cloudflare 1.1.1.1)',
      'Basic network segmentation for IoT devices',
    ],
  },
  {
    month: 'Month 2',
    title: 'AI TOOLS THAT GET YOU HIRED',
    subtitle: 'Make the machines work for you, not against you',
    color: 'text-la-gold',
    borderColor: 'border-la-gold',
    prep: [
      {
        text: 'Create a free ChatGPT account (openai.com)',
        detail: 'Go to chat.openai.com and sign up with your email. The free tier is enough for everything we\'ll cover. Don\'t pay for Plus yet.',
      },
      {
        text: 'Create a free Claude account (claude.ai)',
        detail: 'Claude is better than ChatGPT for writing resumes, cover letters, and long-form content. Sign up at claude.ai — free tier works.',
      },
      {
        text: 'Have your current resume ready (any format — even handwritten notes)',
        detail: 'Bring whatever you have. A Word doc, a PDF, notes on your phone, or even just a list of jobs you\'ve had. We\'ll rebuild it from scratch using AI.',
      },
      {
        text: 'Pick 3 job postings you\'re interested in (screenshot or save the URLs)',
        detail: 'Go to Indeed, LinkedIn, or any job board. Find 3 real jobs you want. Save them. We\'ll use AI to tailor your resume and write custom cover letters for each one.',
      },
      {
        text: 'Create a LinkedIn account if you don\'t have one',
        detail: 'LinkedIn is where 70% of referrals happen. If you don\'t have a profile, make one. Don\'t worry about making it perfect — we\'ll optimize it with AI in session.',
      },
      {
        text: 'Install Grammarly browser extension (free)',
        detail: 'Grammarly catches writing errors in real-time. Install the Chrome extension — it works on Gmail, LinkedIn, job applications, everywhere you type.',
      },
      {
        text: 'Know what field/industry you want to explore (even a rough idea)',
        detail: 'Tech support? Cybersecurity? Data? Trades? Marketing? You don\'t need a final answer. Just a direction so we can focus the AI tools on your actual goals.',
      },
    ],
    skills: [
      'Writing resumes with AI that pass ATS screening',
      'Custom cover letters in 5 minutes per application',
      'LinkedIn profile optimization with AI',
      'Using AI for interview prep and practice',
      'Portfolio project ideas generated by AI',
      'Prompt engineering basics — talking to AI like a pro',
      'AI tools for learning new skills faster',
    ],
  },
  {
    month: 'Month 3',
    title: 'BUILDING YOUR FIRST PROJECT',
    subtitle: 'From zero to deployed. Your name on the internet.',
    color: 'text-la-white',
    borderColor: 'border-la-white',
    prep: [
      {
        text: 'Create a free GitHub account (github.com)',
        detail: 'GitHub is where developers store code and where employers look at your work. Sign up, pick a professional username (not xXgamer420Xx). This is your public portfolio.',
      },
      {
        text: 'Install VS Code on your computer (free: code.visualstudio.com)',
        detail: 'Visual Studio Code is the code editor 90% of developers use. It\'s free. Download and install it. We\'ll configure it in session.',
      },
      {
        text: 'Install Node.js on your computer (nodejs.org — LTS version)',
        detail: 'Node.js lets you run JavaScript on your computer and build web apps. Go to nodejs.org, download the LTS (Long Term Support) version, install it. That\'s it.',
      },
      {
        text: 'Complete at least the first 20 lessons on freeCodeCamp (HTML/CSS)',
        detail: 'Go to freecodecamp.org → Responsive Web Design. Do the first 20 exercises. They take about 2 hours total. This gives you the bare minimum to follow along in session.',
      },
      {
        text: 'Think of a real problem you or someone you know has that a simple website could solve',
        detail: 'A neighborhood event calendar? A tool to track bills? A page for a family business? A resource list for your community? We\'re not building a todo app — we\'re building something real.',
      },
      {
        text: 'Have a phone or computer with a web browser and internet access during the session',
        detail: 'You\'ll be coding along live. Desktop/laptop preferred but a tablet works. We\'ll deploy your project to the real internet before you leave.',
      },
    ],
    skills: [
      'HTML, CSS, and basic JavaScript foundations',
      'Using VS Code like a professional',
      'Git and GitHub — version control basics',
      'Building a responsive website from scratch',
      'Deploying to the internet for free (Netlify/Vercel/Cloudflare Pages)',
      'Making it look professional with Tailwind CSS',
      'How to keep building after the session ends',
    ],
  },
  {
    month: 'Month 4',
    title: 'HOW TO GET A TECH JOB WITHOUT A DEGREE',
    subtitle: 'The playbook nobody hands out at career fairs',
    color: 'text-la-red',
    borderColor: 'border-la-red',
    prep: [
      {
        text: 'Read the Career Paths page on this site (lethallyaverage.com/career-paths)',
        detail: 'We built an entire page breaking down every alternative path — free programs, apprenticeships, certifications, timelines, and salaries. Read it before session so we can go deeper.',
      },
      {
        text: 'Take a free career assessment: mynextmove.org/explore/ip (from the US Dept of Labor)',
        detail: 'This 60-question quiz matches your interests to real careers with salary data. It\'s not perfect but it gives you a starting point. Takes about 10 minutes.',
      },
      {
        text: 'Research ONE free program from the Career Paths page and check eligibility',
        detail: 'Year Up, Per Scholas, NPower, LaunchCode — pick one. Go to their website. Check if you\'re eligible. See if they have upcoming cohorts. Come to session with questions.',
      },
      {
        text: 'Create or update your LinkedIn profile with a professional photo',
        detail: 'Doesn\'t need to be fancy. Clean background, good lighting, no sunglasses, no group photos. Your phone camera in front of a plain wall works. First impressions matter.',
      },
      {
        text: 'Write down your top 5 skills — technical AND soft skills',
        detail: 'Customer service counts. Speaking two languages counts. Managing a household counts. Problem solving counts. We\'ll translate these into resume language in session.',
      },
      {
        text: 'Find 3 people on LinkedIn who have the job you want and DON\'T have a degree',
        detail: 'Search for your target job title on LinkedIn. Filter by your city. Look at their profiles. See how they got there. These are your proof that the path exists. We\'ll talk about reaching out.',
      },
      {
        text: 'Know your monthly budget — what can you invest in yourself per month? ($0 is a valid answer)',
        detail: 'Some cert exams cost $100-300. Some programs are 100% free. Knowing your budget helps us build a realistic plan. If the answer is $0, everything on our Career Paths page is free.',
      },
    ],
    skills: [
      'Understanding the 2026 job market reality (what AI changed)',
      'Free certification paths: CompTIA, Google, ISC2',
      'Building a portfolio that replaces a degree',
      'Networking strategies that actually work (not just "connect with people")',
      'How to get referrals — 70% of placements come through them',
      'Applying to apprenticeships: Google, Microsoft, IBM',
      'Salary negotiation basics — don\'t leave money on the table',
      'The 18-month playbook: from zero to employed',
    ],
  },
];

const Community = () => {
  const [activeMonth, setActiveMonth] = useState(0);

  const currentMonth = months[activeMonth];

  return (
    <PageWrapper>
      {/* Header */}
      <div className="text-center mb-16">
        <GlitchText as="h1" className="text-5xl sm:text-6xl text-la-white mb-4">
          SATURDAY SESSIONS
        </GlitchText>
        <div className="flex justify-center mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-accent uppercase tracking-widest bg-la-gold text-la-black">
            Coming Soon
          </span>
        </div>
        <p className="font-body text-la-muted text-sm max-w-xl mx-auto">
          Free tech bootcamps in the Bronx. No degree required. No experience
          needed. Just show up and level up.
        </p>
      </div>

      {/* Info block */}
      <motion.div
        {...fadeUp}
        className="max-w-2xl mx-auto mb-16 p-6 bg-la-gray/30 rounded-xl border border-la-gray"
      >
        <div className="space-y-4">
          {[
            { label: 'WHAT', value: '2-hour free tech bootcamps' },
            { label: 'WHO', value: 'Anyone 13+, no experience needed' },
            { label: 'WHERE', value: 'The Bronx (location TBD)' },
            { label: 'WHEN', value: 'Saturdays (schedule TBD)' },
            { label: 'COST', value: '$0. Always.' },
          ].map((row) => (
            <div key={row.label} className="flex items-start gap-4">
              <span className="font-display text-la-red text-sm w-20 flex-shrink-0">
                {row.label}
              </span>
              <span className="font-body text-la-white text-sm">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Monthly Topic Tabs */}
      <motion.div {...fadeUp} className="mb-12">
        <h2 className="font-display text-2xl text-la-white text-center mb-8">
          MONTHLY PREP CHECKLISTS
        </h2>
        <p className="font-body text-xs text-la-muted text-center mb-6 max-w-xl mx-auto">
          Each month covers a different topic. Complete the prep checklist before
          your session so you can hit the ground running. No homework after — just
          before.
        </p>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {months.map((m, i) => (
            <button
              key={m.month}
              onClick={() => setActiveMonth(i)}
              className={`px-4 py-2 rounded-lg font-accent text-[10px] uppercase tracking-widest transition-all duration-200 ${
                activeMonth === i
                  ? 'bg-la-red text-white'
                  : 'bg-la-gray text-la-muted hover:text-la-white hover:bg-la-gray/80 border border-la-gray'
              }`}
            >
              {m.month}
            </button>
          ))}
        </div>

        {/* Active month content */}
        <motion.div
          key={activeMonth}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className={`border-l-4 ${currentMonth.borderColor} pl-6 mb-8`}>
            <p className="font-accent text-[10px] text-la-gold uppercase tracking-widest mb-1">
              {currentMonth.month}
            </p>
            <h3 className={`font-display text-2xl ${currentMonth.color} mb-1`}>
              {currentMonth.title}
            </h3>
            <p className="font-body text-xs text-la-muted">
              {currentMonth.subtitle}
            </p>
          </div>

          {/* Prep checklist */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h4 className="font-display text-lg text-la-white">PREP CHECKLIST</h4>
              <Badge variant="important" />
            </div>
            <p className="font-body text-xs text-la-muted mb-4">
              Complete these before your Saturday session. Each one takes 5-15 minutes.
            </p>
            <div className="space-y-2">
              {currentMonth.prep.map((item) => (
                <ChecklistItem key={item.text} text={item.text} detail={item.detail} />
              ))}
            </div>
          </div>

          {/* What you'll learn */}
          <div className="p-5 bg-la-gray rounded-xl border border-la-gray">
            <h4 className="font-display text-lg text-la-white mb-3">
              WHAT YOU'LL LEARN IN SESSION
            </h4>
            <ul className="space-y-2">
              {currentMonth.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-2">
                  <span className="text-la-red mt-1 text-xs">▸</span>
                  <span className="font-body text-xs text-la-muted">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Career Paths CTA */}
      <motion.div
        {...fadeUp}
        className="max-w-2xl mx-auto mb-12 p-6 bg-la-gray/30 rounded-xl border border-la-red/30 text-center"
      >
        <h3 className="font-display text-xl text-la-white mb-2">
          NEED THE FULL CAREER PLAYBOOK?
        </h3>
        <p className="font-body text-xs text-la-muted mb-4">
          Free programs, apprenticeships, certifications, and the 18-month plan
          to go from zero to employed — all on one page.
        </p>
        <Link
          to="/career-paths"
          className="inline-block px-6 py-3 bg-la-red text-white font-accent text-xs uppercase tracking-widest rounded-lg hover:bg-la-red/80 transition-colors duration-200"
        >
          VIEW CAREER PATHS →
        </Link>
      </motion.div>

      {/* Waitlist — coming soon placeholder */}
      <motion.div {...fadeUp} className="max-w-md mx-auto text-center mb-16">
        <h2 className="font-display text-2xl text-la-white mb-2">
          GET NOTIFIED
        </h2>
        <p className="font-body text-xs text-la-muted mb-6">
          Waitlist signup coming soon. Follow us for updates.
        </p>
        <div className="p-4 bg-la-gray/30 rounded-xl border border-la-gray">
          <p className="font-display text-lg text-la-gold mb-1">
            WAITLIST OPENING SOON
          </p>
          <p className="font-body text-xs text-la-muted">
            We're setting things up. Check back shortly.
          </p>
        </div>
      </motion.div>

      <div className="h-8" />
    </PageWrapper>
  );
};

export default Community;
