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

interface StoryCardProps {
  title: string;
  ageRange: string;
  domain: string;
  story: string;
  resolution: string;
  taskStatements: string[];
  vocabWords: { term: string; definition: string }[];
}

const StoryCard = ({ title, ageRange, domain, story, resolution, taskStatements, vocabWords }: StoryCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      {...fadeUp}
      className="p-6 bg-la-gray rounded-xl border border-la-gray hover:border-la-gold/50 transition-colors duration-200"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-display text-xl text-la-white">{title}</h3>
        <Badge type="free" />
      </div>
      <div className="flex gap-4 mb-3">
        <span className="font-accent text-[10px] text-la-gold uppercase tracking-widest">
          {ageRange}
        </span>
        <span className="font-accent text-[10px] text-la-muted uppercase tracking-widest">
          {domain}
        </span>
      </div>

      <div className="mb-4">
        <p className="font-accent text-[10px] text-la-red uppercase tracking-widest mb-2">THE STORY</p>
        <p className="font-body text-sm text-la-muted leading-relaxed">{story}</p>
      </div>

      <div className="mb-4 p-3 bg-la-black rounded-lg border-l-3 border-la-gold">
        <p className="font-accent text-[10px] text-la-gold uppercase tracking-widest mb-1">HOW AI SOLVED IT</p>
        <p className="font-body text-xs text-la-white leading-relaxed">{resolution}</p>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="font-accent text-xs text-la-red hover:text-la-gold transition-colors uppercase tracking-widest"
      >
        {expanded ? '— COLLAPSE' : '+ WHAT YOU LEARN'}
      </button>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 space-y-4"
        >
          <div>
            <p className="font-accent text-[10px] text-la-gold uppercase tracking-widest mb-2">
              TASK STATEMENTS — WHAT KIDS SHOULD UNDERSTAND
            </p>
            <ol className="space-y-2">
              {taskStatements.map((task, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-la-red flex items-center justify-center font-display text-xs text-white">
                    {i + 1}
                  </span>
                  <span className="font-body text-xs text-la-muted leading-relaxed">
                    {task}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="font-accent text-[10px] text-la-gold uppercase tracking-widest mb-2">
              VOCAB WORDS
            </p>
            <div className="space-y-2">
              {vocabWords.map((word) => (
                <div key={word.term} className="p-2 bg-la-black rounded border border-la-gray">
                  <span className="font-display text-sm text-la-red">{word.term}</span>
                  <span className="font-body text-xs text-la-muted ml-2">— {word.definition}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const StudyGuide = () => {
  return (
    <PageWrapper>
      <div className="mb-8">
        <GlitchText as="h1" className="text-5xl sm:text-6xl text-la-white mb-4">
          AI STUDY GUIDE
        </GlitchText>
        <p className="font-body text-sm text-la-muted max-w-2xl">
          The world is changing. AI agents are building apps, answering
          customer questions, writing code, and running entire workflows.
          This guide teaches kids (and curious adults) how it all works —
          through stories, not textbooks.
        </p>
      </div>

      <WarningBanner>
        <span className="font-display text-sm">FOR PARENTS & TEACHERS:</span>{' '}
        This guide is inspired by real AI architecture certification material.
        We translated enterprise-level concepts into stories kids can
        understand. Every story maps to actual skills that professionals
        use daily. Your kids aren't just learning vocab — they're learning
        how the future works.
      </WarningBanner>

      <div className="h-8" />

      {/* Stats */}
      <motion.div
        {...fadeUp}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {[
          { stat: '5', label: 'Domains of AI knowledge covered' },
          { stat: '80%', label: 'Of future jobs will involve AI tools' },
          { stat: '6', label: 'Stories with real-world AI scenarios' },
          { stat: '$0', label: 'Cost — always free to learn' },
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

      {/* HOW THIS GUIDE WORKS */}
      <AccordionSection
        title="HOW THIS GUIDE WORKS"
        badge="important"
        defaultOpen
      >
        <div className="space-y-4">
          <p className="font-body text-sm text-la-muted">
            Each story below is built around a real AI concept that professionals
            use to build smart systems. Here's how to use them:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
              <p className="font-display text-lg text-la-gold mb-1">1. READ THE STORY</p>
              <p className="font-body text-xs text-la-muted">
                Each story has a problem that a kid or family faces. Read it
                like a comic — the characters are relatable and the problems
                are real.
              </p>
            </div>
            <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
              <p className="font-display text-lg text-la-gold mb-1">2. SEE THE AI FIX</p>
              <p className="font-body text-xs text-la-muted">
                Every story shows how an AI agent solved the problem. Not
                magic — real patterns that real AI systems use. Kids learn
                the "how" behind the headlines.
              </p>
            </div>
            <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
              <p className="font-display text-lg text-la-gold mb-1">3. LEARN THE SKILLS</p>
              <p className="font-body text-xs text-la-muted">
                Click "What You Learn" on each story to see the task
                statements and vocab words. These map directly to what
                AI architects study for professional certifications.
              </p>
            </div>
          </div>
        </div>
      </AccordionSection>

      {/* DOMAIN 1: AGENTIC ARCHITECTURE */}
      <div className="my-12">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-3xl text-la-white mb-2">
            DOMAIN 1: HOW AI AGENTS THINK & WORK
          </h2>
          <p className="font-body text-sm text-la-muted mb-8">
            AI agents are like smart helpers that can make decisions on their own.
            They look at a problem, pick the right tool, do the work, check the
            result, and decide what to do next — just like you do when solving a
            puzzle, but faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StoryCard
            title="THE HOMEWORK HELPER THAT NEVER STOPS"
            ageRange="Ages 8-14"
            domain="Agentic Loops"
            story="Maya is stuck on a school project about oceans. She asks her AI homework helper for help. But instead of giving one answer and quitting, the AI keeps going — it searches for ocean facts, reads articles, finds pictures, organizes everything into sections, checks if it missed anything, and only stops when the project is complete. It's like having a study buddy who never says 'I'm tired.'"
            resolution="The AI uses something called an 'agentic loop.' It sends a question, gets a result, decides if more work is needed, and keeps going until the job is done. It knows to stop when the stop signal says 'end_turn' instead of 'use another tool.' This is exactly how professional AI systems handle customer support tickets — they keep investigating until the problem is fully resolved."
            taskStatements={[
              "Understand that AI agents work in loops — they ask, get an answer, decide if they need to do more, and repeat",
              "Know that AI agents use 'tools' like search, read, and write to get things done — they don't just guess",
              "Recognize that good AI agents know WHEN to stop — not too early (incomplete work) and not too late (wasting time)",
              "Learn that AI decisions are based on context, not random — each step builds on what it learned before",
            ]}
            vocabWords={[
              { term: 'Agentic Loop', definition: 'The cycle an AI repeats: think, act, observe, decide what\'s next' },
              { term: 'Tool Use', definition: 'When an AI calls a specific function (like search or calculate) instead of guessing' },
              { term: 'Stop Reason', definition: 'The signal that tells the AI loop whether to keep going or finish' },
              { term: 'Context', definition: 'All the information the AI has collected so far that helps it make better decisions' },
            ]}
          />

          <StoryCard
            title="THE BIRTHDAY PARTY PLANNER SQUAD"
            ageRange="Ages 8-14"
            domain="Multi-Agent Systems"
            story="Jordan wants to plan the perfect birthday party but there's so much to do: pick a theme, find a venue, plan the menu, create invitations, and make a playlist. One AI helper would be overwhelmed. So instead, a 'coordinator' AI breaks the job into pieces and sends each task to a specialist AI — one finds party venues, one designs invitations, one builds a playlist based on Jordan's favorite songs. The coordinator collects all the results and puts together the final plan."
            resolution="This is called a 'multi-agent system' with a coordinator pattern. The coordinator AI is like a team captain — it doesn't do all the work itself, it figures out WHO should do WHAT, sends them clear instructions, collects their work, and puts it all together. Each specialist agent only gets the tools it needs (the playlist agent can't accidentally book a venue). This is the same pattern used to build AI research systems that analyze thousands of documents."
            taskStatements={[
              "Understand that big problems get broken into smaller pieces and assigned to specialist AI agents",
              "Know that a 'coordinator' agent is the team captain — it delegates work and combines results",
              "Learn that each specialist only gets the tools it needs — this prevents mistakes",
              "Recognize that agents don't automatically share memories — the coordinator has to pass information between them",
            ]}
            vocabWords={[
              { term: 'Multi-Agent System', definition: 'Multiple AI agents working together, each with a specific job' },
              { term: 'Coordinator', definition: 'The lead AI that assigns tasks, collects results, and makes the final plan' },
              { term: 'Subagent', definition: 'A specialist AI that handles one specific part of a bigger job' },
              { term: 'Hub-and-Spoke', definition: 'A pattern where all communication goes through the center (coordinator), like spokes on a wheel' },
            ]}
          />
        </div>
      </div>

      {/* DOMAIN 2: TOOLS & INTEGRATION */}
      <div className="my-12">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-3xl text-la-white mb-2">
            DOMAIN 2: AI TOOLS & HOW THEY CONNECT
          </h2>
          <p className="font-body text-sm text-la-muted mb-8">
            AI agents don't know everything by themselves. They use tools —
            like search engines, calculators, databases, and APIs — to get real
            information and take real actions. The trick is giving them the
            RIGHT tools with CLEAR instructions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StoryCard
            title="THE LUNCHROOM MIX-UP"
            ageRange="Ages 8-14"
            domain="Tool Design"
            story="The school cafeteria has an AI system to help kids order lunch. But kids keep getting the wrong food! When Aiden says 'I want the chicken,' the AI can't tell if he means the chicken sandwich, the chicken nuggets, or the chicken salad. The problem? The AI's tools have confusing labels — 'get_food_item' and 'find_menu_item' do almost the same thing, and neither one explains what it actually does."
            resolution="The fix was simple but powerful: rename the tools and write better descriptions. 'get_food_item' became 'order_from_hot_bar' with a description explaining it handles cooked meals. 'find_menu_item' became 'search_cold_options' for salads and sandwiches. Now the AI picks the right tool every time because the descriptions are clear about WHAT each tool does and WHEN to use it. This is called 'tool design' — and professionals spend serious time getting it right."
            taskStatements={[
              "Understand that AI agents pick tools based on their descriptions — vague descriptions cause mistakes",
              "Know that tools should have clear names that explain what they do",
              "Learn that similar tools need descriptions that explain how they're DIFFERENT from each other",
              "Recognize that giving an AI too many tools makes it confused — fewer, well-described tools work better",
            ]}
            vocabWords={[
              { term: 'Tool Description', definition: 'The instructions that tell an AI what a tool does, when to use it, and what it needs' },
              { term: 'MCP (Model Context Protocol)', definition: 'A standard way for AI agents to connect to outside tools and data sources' },
              { term: 'API', definition: 'A way for one program to talk to another — like a waiter taking your order to the kitchen' },
              { term: 'Tool Selection', definition: 'When an AI reads tool descriptions and picks the best one for the job' },
            ]}
          />

          <StoryCard
            title="THE VENDING MACHINE THAT SAYS 'ERROR'"
            ageRange="Ages 8-14"
            domain="Error Handling"
            story="The school's smart vending machine keeps showing 'ERROR' whenever something goes wrong. Out of chips? ERROR. Card declined? ERROR. Machine needs restocking? ERROR. Nobody knows what the actual problem is, so kids just walk away frustrated. The AI running the machine treats every problem the same way — it doesn't tell anyone what KIND of error happened or what to do about it."
            resolution="The fix: teach the AI to give SPECIFIC error messages. 'That item is sold out — here are 3 similar snacks available now.' 'Your card was declined — try tapping again or use a different card.' 'This item is being restocked — it'll be available in 10 minutes.' Each error now includes what went wrong, whether it can be fixed by trying again, and what to do next. Professional AI systems do this too — they categorize errors as 'temporary' (try again), 'validation' (wrong input), or 'permission' (not allowed) so the system can recover intelligently."
            taskStatements={[
              "Understand that generic error messages ('ERROR') are useless — good errors explain what happened and what to do",
              "Know the difference between temporary errors (try again) and permanent errors (can't be fixed by retrying)",
              "Learn that AI systems should recover from small errors on their own instead of crashing",
              "Recognize that good error handling builds trust — people stop using systems that confuse them",
            ]}
            vocabWords={[
              { term: 'Error Handling', definition: 'How a system responds when something goes wrong — good handling fixes problems, bad handling hides them' },
              { term: 'Transient Error', definition: 'A temporary problem that might work if you try again (like a slow internet connection)' },
              { term: 'Validation Error', definition: 'An error caused by wrong input — like typing letters where numbers should go' },
              { term: 'Recovery', definition: 'When an AI fixes a problem on its own without needing human help' },
            ]}
          />
        </div>
      </div>

      {/* DOMAIN 3: CONFIGURATION & WORKFLOWS */}
      <div className="my-12">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-3xl text-la-white mb-2">
            DOMAIN 3: TEACHING AI YOUR RULES
          </h2>
          <p className="font-body text-sm text-la-muted mb-8">
            AI agents need instructions — just like a new kid at school needs to
            learn the rules. Configuration files tell AI agents how to behave, what
            standards to follow, and when to ask for help vs. just do the work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StoryCard
            title="THE SUBSTITUTE TEACHER PROBLEM"
            ageRange="Ages 10-16"
            domain="Configuration"
            story="Every time Ms. Rodriguez is absent, the substitute teacher does things differently — different homework rules, different late policies, different grading. The class is confused because the rules change depending on who's in charge. This is exactly what happens when an AI team doesn't have shared configuration files. Each developer's AI assistant follows different rules because the instructions live on their personal computer instead of being shared with the whole team."
            resolution="The school created a 'Class Handbook' that every substitute must follow — posted on the classroom wall (shared with everyone), not kept in Ms. Rodriguez's desk drawer (personal only). In AI terms, this is like putting instructions in a project-level configuration file that gets shared with every team member through version control, instead of hiding them in personal settings. Now every AI assistant on the team follows the same coding standards, testing rules, and review criteria."
            taskStatements={[
              "Understand the difference between personal settings (just for you) and shared settings (for the whole team)",
              "Know that shared configuration files keep everyone — humans AND AI agents — on the same page",
              "Learn that good configuration is organized by topic, not crammed into one giant file",
              "Recognize that when AI agents behave inconsistently, the problem is usually bad configuration, not bad AI",
            ]}
            vocabWords={[
              { term: 'Configuration File', definition: 'A file that tells an AI agent the rules to follow — like a playbook for a sports team' },
              { term: 'Version Control', definition: 'A system that tracks every change to shared files so the whole team stays in sync' },
              { term: 'Project-Level Config', definition: 'Settings shared with everyone on the project — stored in the project folder' },
              { term: 'User-Level Config', definition: 'Personal settings that only apply to you — stored on your computer' },
            ]}
          />

          <StoryCard
            title="THE LEMONADE STAND BLUEPRINT"
            ageRange="Ages 10-16"
            domain="Plan Mode vs. Direct Execution"
            story="Twins Kai and Zara both want to build lemonade stands. Kai just starts nailing boards together without a plan — halfway through, the counter is too short, the sign doesn't fit, and the cash box has no spot. Zara sketches a blueprint first — she measures everything, figures out where each piece goes, then builds. Kai spent more time fixing mistakes than building. Zara finished first with a better stand."
            resolution="In the AI world, this is the difference between 'plan mode' and 'direct execution.' Plan mode is Zara's approach — the AI explores the problem, understands the requirements, designs a solution, and gets approval before writing code. Direct execution is for simple, obvious tasks (like adding one ingredient to the lemonade recipe). Professionals use plan mode for anything complex because fixing mistakes after the fact costs way more time than planning upfront."
            taskStatements={[
              "Know when to plan first (big projects, multiple approaches) vs. just do it (simple, obvious tasks)",
              "Understand that exploring and understanding a problem BEFORE acting saves time in the long run",
              "Learn that AI agents can be told to investigate before building — this prevents costly mistakes",
              "Recognize that the best builders (human or AI) plan complex work and execute simple work",
            ]}
            vocabWords={[
              { term: 'Plan Mode', definition: 'When an AI explores and designs a solution before starting to build — used for complex tasks' },
              { term: 'Direct Execution', definition: 'When an AI just does the task immediately — used for simple, clear tasks' },
              { term: 'Blueprint', definition: 'A detailed plan that shows how something should be built before construction starts' },
              { term: 'Scope', definition: 'How big and complex a project is — small scope means simple, large scope means plan first' },
            ]}
          />
        </div>
      </div>

      {/* DOMAIN 4: PROMPT ENGINEERING */}
      <div className="my-12">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-3xl text-la-white mb-2">
            DOMAIN 4: TALKING TO AI THE RIGHT WAY
          </h2>
          <p className="font-body text-sm text-la-muted mb-8">
            The way you talk to an AI completely changes what you get back.
            Vague questions get vague answers. Specific instructions with
            examples get precise, useful results. This is called prompt
            engineering — and it's a real career skill.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StoryCard
            title="THE MAGIC WISH THAT WENT WRONG"
            ageRange="Ages 8-14"
            domain="Prompt Engineering"
            story="In a story, a kid finds a genie and wishes for 'a really cool pet.' The genie brings a full-grown tiger. Technically cool. Definitely not what the kid meant. The problem? The wish was too vague. AI works the same way. If you tell an AI 'make this better,' it doesn't know what 'better' means to you. Faster? Prettier? Shorter? AI needs specific instructions, not vibes."
            resolution="The kid learns to make specific wishes: 'I want a friendly dog that's good with kids, medium-sized, that doesn't shed much.' Now the genie (AI) knows exactly what success looks like. In AI terms, this is called 'prompt engineering' — writing clear instructions with specific criteria. Professionals go even further: they give examples of good and bad outputs so the AI can see the pattern. This technique (called 'few-shot prompting') is the single most effective way to get consistent results from AI."
            taskStatements={[
              "Understand that specific instructions get better results than vague ones — always",
              "Know that giving AI examples of what you want (few-shot prompting) is more effective than just describing it",
              "Learn that AI follows instructions literally — if your instructions are unclear, the output will be wrong",
              "Recognize that prompt engineering is a real skill that professionals practice and improve over time",
            ]}
            vocabWords={[
              { term: 'Prompt', definition: 'The instructions you give to an AI — the better the prompt, the better the result' },
              { term: 'Few-Shot Prompting', definition: 'Giving an AI 2-3 examples of what you want so it can follow the pattern' },
              { term: 'Criteria', definition: 'The specific standards an output must meet — like a rubric for a school project' },
              { term: 'False Positive', definition: 'When AI flags something as a problem that isn\'t actually a problem' },
            ]}
          />

          <StoryCard
            title="THE SCIENCE FAIR DATA DETECTIVE"
            ageRange="Ages 10-16"
            domain="Structured Output"
            story="Priya's science fair project tracks plant growth across 30 plants. She asks her AI helper to organize the data, but it comes back as a messy paragraph: 'Plant 1 grew 3 inches and Plant 2 grew 2.5 inches and...' She can't graph it, sort it, or analyze it. She needs the data in a structured format — like a spreadsheet with columns for plant number, height, sunlight hours, and water amount."
            resolution="Priya learns to tell the AI to output data in a 'structured format' using a schema — a template that defines exactly what fields to include and what type each value should be (number, text, true/false). Now the AI returns clean, organized data she can drop straight into a chart. Professional AI systems use JSON schemas and tool definitions to guarantee structured output — eliminating formatting errors completely. The AI can't return a messy paragraph when the schema requires specific fields."
            taskStatements={[
              "Understand that 'structured output' means data organized in a specific format — like a spreadsheet with defined columns",
              "Know that schemas (templates) tell AI exactly what format to return data in",
              "Learn that structured output eliminates formatting errors — the AI can't return the wrong shape of data",
              "Recognize that structured data can be used by other programs — messy text usually can't",
            ]}
            vocabWords={[
              { term: 'Structured Output', definition: 'Data organized in a defined format with specific fields — like a form with labeled boxes' },
              { term: 'Schema', definition: 'A template that defines what data should look like — what fields, what types, what\'s required' },
              { term: 'JSON', definition: 'A common format for structured data that computers can easily read and write' },
              { term: 'Validation', definition: 'Checking that data matches the expected format — like spell-check but for data structure' },
            ]}
          />
        </div>
      </div>

      {/* DOMAIN 5: CONTEXT & RELIABILITY */}
      <div className="my-12">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-3xl text-la-white mb-2">
            DOMAIN 5: AI MEMORY & TRUST
          </h2>
          <p className="font-body text-sm text-la-muted mb-8">
            AI agents have a limited memory (called a "context window").
            They can forget important details during long conversations,
            mix up facts, or lose track of where information came from.
            Managing this memory and building reliable systems is what
            separates good AI systems from broken ones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StoryCard
            title="THE GAME OF TELEPHONE"
            ageRange="Ages 8-14"
            domain="Context Management"
            story="Remember the game of Telephone? One person whispers a message, and by the time it reaches the last person, 'purple elephants eat pizza' becomes 'people dance in pianos.' AI has the same problem. When multiple AI agents pass information to each other, important details get lost or changed — especially numbers, dates, and names. An AI might summarize '47 orders returned on March 3rd' into 'many returns happened recently' — losing the exact facts."
            resolution="The fix is called 'context management.' Smart AI systems keep a separate 'fact sheet' with important numbers, dates, and names that NEVER gets summarized away. It's like writing the key facts on a sticky note and keeping it on your desk while you work. Professional systems also track WHERE each fact came from (called 'provenance') so you can always check the source. When AI agents pass information to each other, they use structured data with labels instead of paragraphs."
            taskStatements={[
              "Understand that AI has limited memory — long conversations can cause it to forget or change important details",
              "Know that important facts (numbers, dates, names) should be kept separate from general summaries",
              "Learn that tracking where information came from (provenance) prevents AI from making things up",
              "Recognize that when AI agents pass information to each other, structured data is better than paragraphs",
            ]}
            vocabWords={[
              { term: 'Context Window', definition: 'The amount of information an AI can hold in its memory at once — like the size of your desk' },
              { term: 'Summarization', definition: 'Condensing information — dangerous when it loses specific numbers or facts' },
              { term: 'Provenance', definition: 'Tracking where information came from — knowing your sources' },
              { term: 'Hallucination', definition: 'When AI makes up information that sounds real but isn\'t — a major problem to watch for' },
            ]}
          />

          <StoryCard
            title="THE HALL MONITOR WHO ASKS FOR HELP"
            ageRange="Ages 10-16"
            domain="Escalation & Reliability"
            story="Jaylen is the school hall monitor. He handles most situations himself — reminding kids to walk, directing lost visitors, answering questions about schedules. But when a kid is hurt, he doesn't try to be a doctor. He calls a teacher. When parents argue about pickup rules, he doesn't make policy decisions. He calls the principal. Jaylen knows what he CAN handle and what he SHOULDN'T try."
            resolution="AI agents need the same judgment. Good AI systems have 'escalation rules' — clear instructions about when to handle something autonomously and when to hand it off to a human. The key insight: AI shouldn't escalate based on how stressed a person sounds (sentiment), because simple problems can frustrate people and complex problems can be stated calmly. Instead, escalation should be based on whether the problem is actually within the AI's authority to solve. If a customer explicitly asks for a human, the AI should honor that immediately — not try to convince them otherwise."
            taskStatements={[
              "Understand that reliable AI knows the limits of what it should handle vs. what needs a human",
              "Know that escalation decisions should be based on the problem type, not how the person sounds",
              "Learn that when someone explicitly asks for a human, a good AI agent hands off immediately",
              "Recognize that AI confidence scores can be wrong — an AI can be very confident and still be incorrect",
            ]}
            vocabWords={[
              { term: 'Escalation', definition: 'When an AI recognizes it can\'t or shouldn\'t handle something and passes it to a human' },
              { term: 'Human-in-the-Loop', definition: 'A system where humans review and approve AI decisions on important matters' },
              { term: 'Confidence Score', definition: 'How sure an AI thinks it is — but being sure doesn\'t mean being right' },
              { term: 'Autonomous', definition: 'When AI handles something completely on its own without human help' },
            ]}
          />
        </div>
      </div>

      {/* PUTTING IT ALL TOGETHER */}
      <AccordionSection
        title="THE BIG PICTURE — WHAT AI ARCHITECTS DO"
        badge="important"
      >
        <div className="space-y-4">
          <p className="font-body text-sm text-la-muted">
            An AI Architect is someone who designs how AI systems work together
            to solve real problems. Think of them as the person who draws the
            blueprints for an AI-powered building. Here's what they think about
            every day:
          </p>

          <div className="space-y-3">
            <div className="p-4 bg-la-black rounded-lg border border-la-red/30">
              <p className="font-display text-base text-la-red mb-1">DOMAIN 1 — ARCHITECTURE</p>
              <p className="font-body text-xs text-la-muted">
                "How should we break this big problem into smaller pieces?
                Do we need one AI agent or a team of specialists? How do they
                communicate?"
              </p>
            </div>
            <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
              <p className="font-display text-base text-la-gold mb-1">DOMAIN 2 — TOOLS</p>
              <p className="font-body text-xs text-la-muted">
                "What tools does each AI agent need? How do we describe them
                clearly so the AI picks the right one? How do we handle
                errors?"
              </p>
            </div>
            <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
              <p className="font-display text-base text-la-gold mb-1">DOMAIN 3 — CONFIGURATION</p>
              <p className="font-body text-xs text-la-muted">
                "What rules should the AI follow? How do we share those rules
                with the whole team? When should the AI plan first vs. just
                do it?"
              </p>
            </div>
            <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
              <p className="font-display text-base text-la-gold mb-1">DOMAIN 4 — COMMUNICATION</p>
              <p className="font-body text-xs text-la-muted">
                "How do we write instructions the AI understands perfectly?
                How do we make sure the output is in the right format?
                How do we show examples?"
              </p>
            </div>
            <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
              <p className="font-display text-base text-la-gold mb-1">DOMAIN 5 — RELIABILITY</p>
              <p className="font-body text-xs text-la-muted">
                "How do we make sure the AI remembers important facts? When
                should it ask for human help? How do we trust that the output
                is accurate?"
              </p>
            </div>
          </div>
        </div>
      </AccordionSection>

      {/* ACTIVITIES FOR KIDS */}
      <AccordionSection
        title="TRY IT YOURSELF — ACTIVITIES"
        badge="free"
      >
        <div className="space-y-4">
          <p className="font-body text-sm text-la-muted">
            Learning AI isn't about memorizing definitions. It's about doing.
            Here are activities kids can try right now:
          </p>

          <div className="p-4 bg-la-black rounded-lg border border-la-red/30">
            <p className="font-display text-lg text-la-white mb-2">ACTIVITY 1: PROMPT BATTLE</p>
            <p className="font-body text-xs text-la-muted mb-2">
              Use any free AI chatbot. Ask it the same question two ways — one
              vague, one specific. Compare the results. Example:
            </p>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• Vague: "Tell me about dogs"</li>
              <li>• Specific: "Give me 5 dog breeds that are good with kids under 10, don't shed much, and weigh under 30 pounds. List them in a table with columns for breed, size, energy level, and shedding."</li>
              <li>• <span className="text-la-white">Notice how much better the specific prompt works!</span></li>
            </ul>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
            <p className="font-display text-lg text-la-white mb-2">ACTIVITY 2: DESIGN AN AI TEAM</p>
            <p className="font-body text-xs text-la-muted mb-2">
              Pick a big task (plan a family vacation, organize a school event).
              Design a team of AI agents on paper:
            </p>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• Who is the coordinator? What does the coordinator decide?</li>
              <li>• What specialist agents do you need? (Budget agent? Schedule agent? Weather agent?)</li>
              <li>• What tools does each agent need?</li>
              <li>• When should an agent ask a human for help?</li>
            </ul>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
            <p className="font-display text-lg text-la-white mb-2">ACTIVITY 3: ERROR MESSAGE MAKEOVER</p>
            <p className="font-body text-xs text-la-muted mb-2">
              Find 3 bad error messages in apps or websites you use (we all
              have seen "Something went wrong"). Rewrite each one to include:
            </p>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• What actually went wrong (in plain language)</li>
              <li>• Whether it can be fixed by trying again</li>
              <li>• What the user should do next</li>
              <li>• <span className="text-la-white">Bonus: explain if it's a temporary, validation, or permission error</span></li>
            </ul>
          </div>

          <div className="p-4 bg-la-black rounded-lg border border-la-gold/30">
            <p className="font-display text-lg text-la-white mb-2">ACTIVITY 4: THE TELEPHONE GAME FIX</p>
            <p className="font-body text-xs text-la-muted mb-2">
              Play Telephone with a twist. After the message gets garbled,
              try the "structured data" approach:
            </p>
            <ul className="font-body text-xs text-la-muted space-y-1">
              <li>• Round 1: Whisper a sentence normally (watch it get distorted)</li>
              <li>• Round 2: Write key facts on a card that travels with the message</li>
              <li>• Compare: which method preserved the information better?</li>
              <li>• <span className="text-la-white">This is exactly why AI systems use structured data over paragraphs</span></li>
            </ul>
          </div>
        </div>
      </AccordionSection>

      {/* GLOSSARY */}
      <AccordionSection
        title="FULL GLOSSARY — EVERY TERM IN ONE PLACE"
        badge="advanced"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { term: 'Agentic Loop', def: 'The cycle an AI repeats: think, act, observe, decide what\'s next' },
            { term: 'AI Agent', def: 'A program that can make decisions and take actions on its own to complete a task' },
            { term: 'API', def: 'Application Programming Interface — how programs talk to each other' },
            { term: 'Autonomous', def: 'When AI handles something completely on its own' },
            { term: 'Confidence Score', def: 'How sure an AI thinks it is — high confidence doesn\'t always mean correct' },
            { term: 'Configuration', def: 'Settings and rules that control how an AI behaves' },
            { term: 'Context Window', def: 'The amount of information an AI can hold in memory at once' },
            { term: 'Coordinator', def: 'The lead AI that assigns tasks and combines results from specialist agents' },
            { term: 'Direct Execution', def: 'When AI just does the task immediately — for simple, clear tasks' },
            { term: 'Error Handling', def: 'How a system responds when something goes wrong' },
            { term: 'Escalation', def: 'When AI passes a problem to a human because it can\'t or shouldn\'t handle it' },
            { term: 'False Positive', def: 'When AI flags something as a problem that isn\'t actually a problem' },
            { term: 'Few-Shot Prompting', def: 'Giving an AI 2-3 examples of what you want so it follows the pattern' },
            { term: 'Hallucination', def: 'When AI makes up information that sounds real but isn\'t' },
            { term: 'Hub-and-Spoke', def: 'A pattern where all communication goes through a central coordinator' },
            { term: 'Human-in-the-Loop', def: 'A system where humans review AI decisions on important matters' },
            { term: 'JSON', def: 'A common data format computers use to organize information' },
            { term: 'MCP', def: 'Model Context Protocol — a standard for connecting AI agents to tools' },
            { term: 'Multi-Agent System', def: 'Multiple AI agents working together, each with a specific role' },
            { term: 'Plan Mode', def: 'When AI explores and designs a solution before building — for complex tasks' },
            { term: 'Prompt', def: 'The instructions you give to an AI — better prompts get better results' },
            { term: 'Provenance', def: 'Tracking where information originally came from' },
            { term: 'Recovery', def: 'When AI fixes a problem on its own without human help' },
            { term: 'Schema', def: 'A template defining what data should look like — fields, types, requirements' },
            { term: 'Structured Output', def: 'Data organized in a defined format with specific labeled fields' },
            { term: 'Subagent', def: 'A specialist AI that handles one part of a bigger job' },
            { term: 'Summarization', def: 'Condensing information — risky when specific facts get lost' },
            { term: 'Tool Description', def: 'Instructions that tell an AI what a tool does and when to use it' },
            { term: 'Tool Selection', def: 'When AI reads descriptions and picks the best tool for the job' },
            { term: 'Tool Use', def: 'When AI calls a specific function instead of guessing an answer' },
            { term: 'Validation', def: 'Checking that data matches the expected format and rules' },
            { term: 'Version Control', def: 'A system tracking every change to files so teams stay in sync' },
          ].map((item) => (
            <div key={item.term} className="p-3 bg-la-black rounded-lg border border-la-gray">
              <span className="font-display text-sm text-la-red">{item.term}</span>
              <p className="font-body text-[11px] text-la-muted mt-1">{item.def}</p>
            </div>
          ))}
        </div>
      </AccordionSection>

      <div className="h-16" />
    </PageWrapper>
  );
};

export default StudyGuide;
