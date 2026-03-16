import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';
import GlitchText from '../components/UI/GlitchText';
import Badge from '../components/UI/Badge';
import AccordionSection from '../components/Security/AccordionSection';
import WarningBanner from '../components/Security/WarningBanner';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
  transition: { duration: 0.4, ease: 'easeOut' as const },
};

interface PathCardProps {
  title: string;
  timeline: string;
  salary: string;
  description: string;
  steps: string[];
  certs: string[];
  free: boolean;
}

const PathCard = ({ title, timeline, salary, description, steps, certs, free }: PathCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      {...fadeUp}
      className="p-6 bg-la-gray rounded-xl border border-la-gray hover:border-la-red/50 transition-colors duration-200"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-display text-xl text-la-white">{title}</h3>
        {free && <Badge variant="free" />}
      </div>
      <div className="flex gap-4 mb-3">
        <span className="font-accent text-[10px] text-la-gold uppercase tracking-widest">
          {timeline}
        </span>
        <span className="font-accent text-[10px] text-la-muted uppercase tracking-widest">
          {salary}
        </span>
      </div>
      <p className="font-body text-sm text-la-muted leading-relaxed mb-4">{description}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="font-accent text-xs text-la-red hover:text-la-gold transition-colors uppercase tracking-widest"
      >
        {expanded ? '— COLLAPSE' : '+ THE ROADMAP'}
      </button>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 space-y-4"
        >
          <div>
            <p className="font-accent text-[10px] text-la-gold uppercase tracking-widest mb-2">
              STEPS
            </p>
            <ol className="space-y-2">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-la-red flex items-center justify-center font-display text-xs text-white">
                    {i + 1}
                  </span>
                  <span className="font-body text-xs text-la-muted leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="font-accent text-[10px] text-la-gold uppercase tracking-widest mb-2">
              KEY CERTS / CREDENTIALS
            </p>
            <div className="flex flex-wrap gap-2">
              {certs.map((cert) => (
                <span
                  key={cert}
                  className="px-2 py-1 bg-la-black rounded font-body text-[10px] text-la-white border border-la-gray"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const CareerPaths = () => {
  return (
    <PageWrapper>
      <div className="mb-8">
        <GlitchText as="h1" className="text-5xl sm:text-6xl text-la-white mb-4">
          CAREER PATHS
        </GlitchText>
        <p className="font-body text-sm text-la-muted max-w-2xl">
          No degree? No problem. These are real paths that real people are using
          right now to break into tech, skilled trades, and beyond. No fairy tales.
          No "just learn to code" nonsense. The actual playbook.
        </p>
      </div>

      {/* Reality Check */}
      <WarningBanner>
        <span className="font-display text-sm">THE 2026 REALITY CHECK:</span>{' '}
        165,000+ tech workers laid off so far this year. Amazon cut 16K. Block cut
        50% of their people. Entry-level is brutal. AI is eating junior roles.
        But the paths still exist — they just require strategy, not just effort.
        This page is that strategy.
      </WarningBanner>

      <div className="h-8" />

      {/* Stats */}
      <motion.div
        {...fadeUp}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {[
          { stat: '70%', label: 'Employers now use skills-based hiring' },
          { stat: '45%', label: 'Dropped degree requirements in 2024' },
          { stat: '70%', label: 'Of placements come through referrals' },
          { stat: '$0', label: 'Cost of every resource listed here' },
        ].map((item) => (
          <div
            key={item.label}
            className="p-4 bg-la-gray rounded-xl border border-la-gray text-center"
          >
            <p className="font-display text-2xl text-la-red">{item.stat}</p>
            <p className="font-body text-[10px] text-la-muted mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* FREE PROGRAMS — THE FAST TRACK */}
      <AccordionSection
        title="FREE PROGRAMS THAT ACTUALLY PLACE PEOPLE"
        badge={<Badge variant="critical" />}
        defaultOpen
      >
        <div className="space-y-4">
          <p className="font-body text-sm text-la-muted">
            These are not bootcamps that take your money and ghost you. These are
            funded programs with real placement rates. They exist because
            corporations and foundations pay for them. Your only job is to show up.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-la-black rounded-lg border border-la-red/30">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-display text-lg text-la-white">YEAR UP UNITED</h4>
                <Badge variant="free" />
              </div>
              <ul className="font-body text-xs text-la-muted space-y-1">
                <li>• Ages 18-29, tuition-free, 20+ US cities</li>
                <li>• <span className="text-la-white">$53,000 average starting salary</span></li>
                <li>• 72% employed within 4 months of completing</li>
                <li>• Internships at JPMorgan, Microsoft, Salesforce</li>
                <li>• They pay YOU a stipend while you learn</li>
              </ul>
              <a href="https://www.yearup.org" target="_blank" rel="noopener noreferrer" className="font-accent text-[10px] text-la-red hover:text-la-gold mt-2 inline-block uppercase tracking-widest">yearup.org →</a>
            </div>

            <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-display text-lg text-la-white">PER SCHOLAS</h4>
                <Badge variant="free" />
              </div>
              <ul className="font-body text-xs text-la-muted space-y-1">
                <li>• Tuition-free, 30+ cities + remote options</li>
                <li>• 30,000+ graduates and counting</li>
                <li>• Tracks: AWS, Cybersecurity, IT Support, Software Engineering, Salesforce Admin</li>
                <li>• Alumni placed at Amazon, Wells Fargo, Bank of America</li>
                <li>• <span className="text-la-white">No degree or experience required</span></li>
              </ul>
              <a href="https://perscholas.org" target="_blank" rel="noopener noreferrer" className="font-accent text-[10px] text-la-red hover:text-la-gold mt-2 inline-block uppercase tracking-widest">perscholas.org →</a>
            </div>

            <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-display text-lg text-la-white">NPOWER</h4>
                <Badge variant="free" />
              </div>
              <ul className="font-body text-xs text-la-muted space-y-1">
                <li>• Completely free, 10 states across the US</li>
                <li>• 70% young adults, 30% veterans</li>
                <li>• <span className="text-la-white">80% graduation-to-employment rate</span></li>
                <li>• 300%+ average salary increase after completing</li>
                <li>• Programs: IT Support, Cybersecurity, Cloud, App Development</li>
              </ul>
              <a href="https://www.npower.org" target="_blank" rel="noopener noreferrer" className="font-accent text-[10px] text-la-red hover:text-la-gold mt-2 inline-block uppercase tracking-widest">npower.org →</a>
            </div>

            <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-display text-lg text-la-white">LAUNCHCODE</h4>
                <Badge variant="free" />
              </div>
              <ul className="font-body text-xs text-la-muted space-y-1">
                <li>• Free tech training + paid apprenticeships</li>
                <li>• Nonprofit — they make money when companies hire you</li>
                <li>• Web development, data analysis tracks</li>
                <li>• No degree, no experience, no cost</li>
              </ul>
              <a href="https://www.launchcode.org" target="_blank" rel="noopener noreferrer" className="font-accent text-[10px] text-la-red hover:text-la-gold mt-2 inline-block uppercase tracking-widest">launchcode.org →</a>
            </div>

            <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-display text-lg text-la-white">CODE PLATOON</h4>
                <Badge variant="free" />
              </div>
              <ul className="font-body text-xs text-la-muted space-y-1">
                <li>• Free for veterans and military spouses</li>
                <li>• 4.97 out of 5 star rating</li>
                <li>• Full-stack development bootcamp</li>
                <li>• Job placement support included</li>
              </ul>
              <a href="https://www.codeplatoon.org" target="_blank" rel="noopener noreferrer" className="font-accent text-[10px] text-la-red hover:text-la-gold mt-2 inline-block uppercase tracking-widest">codeplatoon.org →</a>
            </div>
          </div>
        </div>
      </AccordionSection>

      {/* CORPORATE APPRENTICESHIPS */}
      <AccordionSection
        title="CORPORATE APPRENTICESHIPS — GET PAID TO LEARN"
        badge={<Badge variant="important" />}
      >
        <div className="space-y-4">
          <p className="font-body text-sm text-la-muted">
            These companies will train you, pay you, and hire you — without a
            degree. They exist because these companies realized degrees don't
            predict performance. Your portfolio and hunger do.
          </p>

          <div className="p-4 bg-la-black rounded-lg border border-la-gray">
            <h4 className="font-display text-lg text-la-white mb-2">GOOGLE APPRENTICESHIPS</h4>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• 18-month structured program, paid</li>
              <li>• Tracks: Product Management, UX, Data Management</li>
              <li>• Applications open September, start March</li>
              <li>• Nationwide — not just Silicon Valley</li>
            </ul>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gray">
            <h4 className="font-display text-lg text-la-white mb-2">MICROSOFT LEAP</h4>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• 16-week immersive program, running since 2015</li>
              <li>• Work on real products: Azure, Xbox, Bing, Office365</li>
              <li>• Built specifically for non-traditional backgrounds</li>
              <li>• Success story: former casino dealer → Microsoft engineer</li>
            </ul>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gray">
            <h4 className="font-display text-lg text-la-white mb-2">IBM APPRENTICESHIPS</h4>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• Actively hiring right now</li>
              <li>• Roles: Hardware Design, Electronics, Software Engineering</li>
              <li>• <span className="text-la-white">Pay: $45K-$90K</span> depending on role/location</li>
              <li>• Only need 1-2 months of basic programming knowledge</li>
            </ul>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gray">
            <h4 className="font-display text-lg text-la-white mb-2">ACCENTURE APPRENTICESHIPS</h4>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• Company-sponsored with coaching and mentorship</li>
              <li>• On-the-job training from day one</li>
              <li>• Multiple tracks across tech and consulting</li>
            </ul>
          </div>
        </div>
      </AccordionSection>

      {/* CAREER PATH CARDS */}
      <div className="my-12">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-3xl text-la-white mb-2">THE PATHS</h2>
          <p className="font-body text-sm text-la-muted mb-8">
            Six real career paths. Each one starts at $0 investment. Click any
            path to see the full roadmap.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PathCard
            title="IT SUPPORT → SYSADMIN"
            timeline="6-18 months to entry"
            salary="$40K-$75K entry"
            description="The most reliable entry point into tech. Start at a help desk, learn how systems actually work, move up. Every company needs IT support — it's recession-resistant and AI can't fix a broken printer."
            free
            steps={[
              "Start CompTIA A+ study — Professor Messer on YouTube is free and covers everything",
              "Set up a home lab: old laptop + VirtualBox + Windows Server trial = free practice",
              "Get the Google IT Support Certificate ($49/mo on Coursera, free through most public libraries)",
              "Apply to every help desk / IT support job within commuting distance — experience beats certs",
              "While working: study for CompTIA Network+ then Security+",
              "After 1-2 years: move to sysadmin, cloud support, or specialize in cybersecurity",
            ]}
            certs={['CompTIA A+', 'Google IT Support', 'CompTIA Network+', 'CompTIA Security+']}
          />

          <PathCard
            title="CYBERSECURITY"
            timeline="1-2 years (after IT foundation)"
            salary="$65K-$120K"
            description="The industry that can't hire fast enough. But here's what nobody tells you: entry-level cyber IS mid-level IT. You need a foundation first. Skip to cyber without IT experience and you'll be the person with certs who can't troubleshoot a network."
            free
            steps={[
              "Get IT experience first — 1-2 years help desk minimum (no shortcuts here)",
              "While working IT: do TryHackMe and Hack The Box rooms every week (free tiers)",
              "Get ISC2 Certified in Cybersecurity (CC) — it's completely free",
              "Study for and pass CompTIA Security+",
              "Build a home security lab: install a firewall (pfSense, free), run Wireshark, practice",
              "Learn Python for automation — doesn't need to be advanced, just functional",
              "Apply to SOC Analyst roles (Security Operations Center) — this is the entry point",
              "Specialize: Blue Team (defensive), Red Team (offensive), GRC (compliance), or Cloud Security",
            ]}
            certs={['ISC2 CC (free)', 'CompTIA Security+', 'CySA+', 'Blue Team Level 1', 'eJPT', 'OSCP']}
          />

          <PathCard
            title="CLOUD COMPUTING"
            timeline="6-12 months to entry cert"
            salary="$55K-$110K"
            description="Every company is moving to the cloud. AWS, Azure, and Google Cloud need people to build and manage that infrastructure. The certs are affordable, the demand is real, and remote work is common."
            free
            steps={[
              "Create a free AWS account — you get 12 months of free tier services",
              "Watch free AWS training on aws.amazon.com/training (no cost, official)",
              "Study for AWS Cloud Practitioner (the entry cert, $100 exam)",
              "Build projects: deploy a website, set up a database, create a simple API — all on free tier",
              "Get AWS Solutions Architect Associate next ($150 exam)",
              "Apply to cloud support / junior cloud engineer roles",
              "Consider: Per Scholas has a free AWS track that covers all of this",
            ]}
            certs={['AWS Cloud Practitioner', 'AWS Solutions Architect', 'Azure Fundamentals', 'CompTIA Cloud+']}
          />

          <PathCard
            title="SOFTWARE DEVELOPMENT"
            timeline="6-18 months self-study"
            salary="$50K-$100K entry"
            description="The hardest path to break into right now — AI is eating junior dev roles and the market is flooded with bootcamp grads. But if you build real projects that solve real problems, you stand out. Skip the tutorials-only trap."
            free
            steps={[
              "Start The Odin Project (free, full-stack, community-supported) or freeCodeCamp",
              "Pick ONE stack and go deep: JavaScript/React or Python. Don't bounce between languages",
              "Build 3-4 real projects — not todo apps. Solve a real problem you or someone you know has",
              "Put everything on GitHub. Commit daily. Green squares matter to hiring managers",
              "Take Harvard CS50 (free on edX) to fill in computer science fundamentals",
              "Apply to LaunchCode for a free paid apprenticeship",
              "Target startups and small companies first — they care about skills, not degrees",
              "Network: go to local meetups, contribute to open source, connect on LinkedIn",
            ]}
            certs={['freeCodeCamp Certs (free)', 'CS50 Certificate', 'Google Career Certificates']}
          />

          <PathCard
            title="SKILLED TRADES (NOT TECH)"
            timeline="4-year apprenticeship typical"
            salary="$55K-$105K"
            description="Real talk: not everyone needs to be in tech. Skilled trades pay well, can't be outsourced, can't be done by AI, and have a massive labor shortage. An elevator technician makes $105K median. HVAC techs clear $90K. No student debt."
            free
            steps={[
              "Research trades that interest you: Electrician, HVAC, Plumbing, Elevator Tech, Welding",
              "Check Apprenticeship.gov for registered apprenticeship programs in your area",
              "Apply to your local union — IBEW (electrical), UA (plumbing/pipefitting), Sheet Metal Workers",
              "You earn while you learn: apprentice pay starts around $18-25/hr and goes up each year",
              "Complete the apprenticeship (typically 4-5 years) and become a journeyman",
              "Master electricians and plumbers can start their own businesses and set their own rates",
            ]}
            certs={['EPA 608 (HVAC)', 'OSHA 10/30', 'State Journeyman License', 'Master License']}
          />

          <PathCard
            title="DATA / AI ADJACENT"
            timeline="6-12 months to entry"
            salary="$50K-$85K entry"
            description="AI isn't just replacing jobs — it's creating new ones. Prompt engineering, AI solutions architecture, and data analytics are growing 35-110%. You don't need a PhD. You need to understand data and how to work WITH AI tools."
            free
            steps={[
              "Take the Google Data Analytics Certificate (free through most public libraries)",
              "Learn SQL — it's in every data job posting and it's not hard. SQLBolt.com is free",
              "Learn Python basics — focus on pandas, numpy, and data visualization",
              "Learn to use AI tools professionally: ChatGPT, Claude, Copilot — understand prompting deeply",
              "Build data projects: analyze a public dataset, create dashboards, automate a report",
              "Get CompTIA Data+ certification to validate your knowledge",
              "Target roles: Data Analyst, Business Intelligence Analyst, AI Operations",
            ]}
            certs={['Google Data Analytics', 'CompTIA Data+', 'IBM Data Science (Coursera)', 'Tableau Desktop Specialist']}
          />
        </div>
      </div>

      {/* FREE LEARNING RESOURCES */}
      <AccordionSection
        title="FREE LEARNING RESOURCES — START TODAY"
        badge={<Badge variant="free" />}
      >
        <div className="space-y-4">
          <div className="p-4 bg-la-black rounded-lg border border-la-gray">
            <h4 className="font-display text-lg text-la-white mb-1">FREECODECAMP</h4>
            <p className="font-body text-xs text-la-muted">
              3,000+ hours of curriculum. Completely free. Always. Covers web development,
              JavaScript, Python, data science, and machine learning. 12,400+ tutorials.
              This is the gold standard for self-taught developers.
            </p>
            <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer" className="font-accent text-[10px] text-la-red hover:text-la-gold mt-2 inline-block uppercase tracking-widest">freecodecamp.org →</a>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gray">
            <h4 className="font-display text-lg text-la-white mb-1">THE ODIN PROJECT</h4>
            <p className="font-body text-xs text-la-muted">
              Full-stack curriculum: HTML/CSS, JavaScript, React, Node.js, Ruby on Rails.
              Community-supported. Project-based learning. Proven track record of
              getting people hired. 100% free.
            </p>
            <a href="https://www.theodinproject.com" target="_blank" rel="noopener noreferrer" className="font-accent text-[10px] text-la-red hover:text-la-gold mt-2 inline-block uppercase tracking-widest">theodinproject.com →</a>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gray">
            <h4 className="font-display text-lg text-la-white mb-1">HARVARD CS50</h4>
            <p className="font-body text-xs text-la-muted">
              The best intro to computer science course in the world. Free on edX.
              Taught by David Malan. Covers C, Python, SQL, web development, and
              computer science fundamentals. If you watch one course, make it this one.
            </p>
            <a href="https://cs50.harvard.edu" target="_blank" rel="noopener noreferrer" className="font-accent text-[10px] text-la-red hover:text-la-gold mt-2 inline-block uppercase tracking-widest">cs50.harvard.edu →</a>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gray">
            <h4 className="font-display text-lg text-la-white mb-1">PROFESSOR MESSER</h4>
            <p className="font-body text-xs text-la-muted">
              Free video training for CompTIA A+, Network+, and Security+ on YouTube.
              This is how most people study for IT certs without paying for courses.
              No catch, no upsell, just teaching.
            </p>
            <a href="https://www.professormesser.com" target="_blank" rel="noopener noreferrer" className="font-accent text-[10px] text-la-red hover:text-la-gold mt-2 inline-block uppercase tracking-widest">professormesser.com →</a>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gray">
            <h4 className="font-display text-lg text-la-white mb-1">TRYHACKME</h4>
            <p className="font-body text-xs text-la-muted">
              Hands-on cybersecurity training. Free tier gives you access to beginner
              rooms and learning paths. Practice hacking in a safe environment.
              Build real skills that employers test for in interviews.
            </p>
            <a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" className="font-accent text-[10px] text-la-red hover:text-la-gold mt-2 inline-block uppercase tracking-widest">tryhackme.com →</a>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gray">
            <h4 className="font-display text-lg text-la-white mb-1">GOOGLE CAREER CERTIFICATES</h4>
            <p className="font-body text-xs text-la-muted">
              $49/month on Coursera — but FREE through most public libraries. Programs in
              IT Support, Cybersecurity, Data Analytics, Project Management, UX Design.
              150+ employers in the hiring consortium including Deloitte, Verizon, and Google.
              Up to 15 college credits transferable.
            </p>
            <a href="https://grow.google/certificates" target="_blank" rel="noopener noreferrer" className="font-accent text-[10px] text-la-red hover:text-la-gold mt-2 inline-block uppercase tracking-widest">grow.google/certificates →</a>
          </div>
        </div>
      </AccordionSection>

      {/* WHAT AI CHANGED */}
      <AccordionSection
        title="WHAT AI CHANGED — AND WHAT IT DIDN'T"
        badge={<Badge variant="warning" />}
      >
        <div className="space-y-4">
          <p className="font-body text-sm text-la-muted">
            Let's be honest about what's happening. AI is reshaping the job market.
            Some roles are disappearing. New ones are emerging. Here's the actual breakdown
            so you can position yourself on the right side.
          </p>

          <div className="p-4 bg-la-black rounded-lg border border-la-red/30">
            <h4 className="font-display text-base text-la-red mb-2">ROLES GETTING AUTOMATED</h4>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• Entry-level software development (basic CRUD apps, boilerplate code)</li>
              <li>• Customer service representatives</li>
              <li>• Data entry clerks</li>
              <li>• Basic content writing (templates, product descriptions)</li>
              <li>• Basic QA testing</li>
              <li>• Junior-level support desk (chatbots replacing tier 1)</li>
            </ul>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
            <h4 className="font-display text-base text-la-gold mb-2">ROLES GROWING BECAUSE OF AI</h4>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• AI Solutions Architects — <span className="text-la-white">growing 110%</span></li>
              <li>• Prompt Engineers — the people who know how to talk to AI effectively</li>
              <li>• AI Product Managers — bridging business and AI capabilities</li>
              <li>• AI Agent Developers — building autonomous AI systems</li>
              <li>• Cybersecurity — AI creates new attack vectors, humans fix them</li>
              <li>• Skilled trades — AI can't fix your plumbing or wire your house</li>
            </ul>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gray">
            <h4 className="font-display text-base text-la-white mb-2">THE SURVIVAL FORMULA</h4>
            <p className="font-body text-xs text-la-muted">
              The roles that survive require one or more of these:{' '}
              <span className="text-la-white">complex judgment</span>,{' '}
              <span className="text-la-white">genuine human connection</span>,{' '}
              <span className="text-la-white">hands-on physical work</span>, or{' '}
              <span className="text-la-white">deep specialized expertise</span>.
              If your job is mostly repetitive and digital, learn to use AI as a
              tool — or get replaced by someone who does.
            </p>
          </div>
        </div>
      </AccordionSection>

      {/* BOOTCAMP WARNING */}
      <AccordionSection
        title="PAID BOOTCAMPS — THE TRUTH IN 2026"
        badge={<Badge variant="warning" />}
      >
        <div className="space-y-4">
          <WarningBanner>
            Reddit is overwhelmingly negative on paid coding bootcamps right now.
            One grad reported a cohort of 45-50 people where only 3 got jobs.
            6-12+ months of job searching post-graduation is common. Before you
            spend $14K on a bootcamp, exhaust every free option on this page first.
          </WarningBanner>

          <p className="font-body text-sm text-la-muted">
            We're not saying all bootcamps are scams. We're saying the free paths
            above produce the same results without the debt. If you still want
            a structured program, the free ones (Year Up, Per Scholas, NPower)
            have better placement rates than most paid bootcamps anyway.
          </p>

          <p className="font-body text-sm text-la-muted">
            <span className="text-la-white">The exception:</span> If your employer
            is paying for it, or if you got a full scholarship, go for it. But
            don't go into debt for a bootcamp in this market. The ROI math doesn't
            add up in 2026.
          </p>
        </div>
      </AccordionSection>

      {/* The playbook */}
      <div className="my-12">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-3xl text-la-white mb-2">
            THE 18-MONTH PLAYBOOK
          </h2>
          <p className="font-body text-sm text-la-muted mb-8">
            If you're starting from zero — no degree, no certs, no connections —
            this is the timeline. It's not easy. But it works.
          </p>
        </motion.div>

        <div className="space-y-4">
          <motion.div {...fadeUp} className="p-5 bg-la-gray rounded-xl border-l-4 border-la-red">
            <p className="font-display text-lg text-la-red mb-1">MONTHS 1-3: FOUNDATION</p>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• Pick your path from the cards above</li>
              <li>• Start the relevant free resource (Professor Messer, freeCodeCamp, etc.)</li>
              <li>• Study 1-2 hours per day minimum — consistency beats intensity</li>
              <li>• Apply to Year Up, Per Scholas, or NPower (do this NOW, waitlists are real)</li>
              <li>• Set up LinkedIn. Make it professional. Connect with 5 people per week in your target field</li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="p-5 bg-la-gray rounded-xl border-l-4 border-la-gold">
            <p className="font-display text-lg text-la-gold mb-1">MONTHS 3-6: FIRST CREDENTIAL</p>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• Pass your first certification exam (A+, Google IT Support, AWS Cloud Practitioner)</li>
              <li>• Build your first 1-2 projects and put them on GitHub</li>
              <li>• Start applying to entry-level roles — even if you don't feel "ready"</li>
              <li>• Attend local tech meetups or virtual events — say yes to everything</li>
              <li>• Ask for informational interviews on LinkedIn — most people say yes</li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="p-5 bg-la-gray rounded-xl border-l-4 border-la-white">
            <p className="font-display text-lg text-la-white mb-1">MONTHS 6-12: GET IN THE DOOR</p>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• Land your first role — help desk, junior dev, SOC analyst, whatever gets you in</li>
              <li>• It won't be your dream job. That's fine. You're building experience and credibility</li>
              <li>• Keep studying: get your second cert while working</li>
              <li>• Document everything you learn — this becomes your personal knowledge base</li>
              <li>• Say yes to every project at work, even the boring ones</li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="p-5 bg-la-gray rounded-xl border-l-4 border-la-gold">
            <p className="font-display text-lg text-la-gold mb-1">MONTHS 12-18: LEVEL UP</p>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• Apply for Google/Microsoft/IBM apprenticeships with real experience on your resume</li>
              <li>• Specialize: pick one area and go deep (cloud, security, data, development)</li>
              <li>• Negotiate a raise or start interviewing for the next step up</li>
              <li>• You now have: certs + experience + projects + network. That's more than most CS grads</li>
              <li>• Pay it forward: mentor someone who's where you were 18 months ago</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="h-16" />
    </PageWrapper>
  );
};

export default CareerPaths;
