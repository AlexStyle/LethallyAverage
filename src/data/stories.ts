import DoubleAgent1 from '../../assets/DoubleAgent1.png';
import DoubleAgent2 from '../../assets/DoubleAgent2.png';
import DoubleAgent3 from '../../assets/DoubleAgent3.png';
import DoubleAgent4 from '../../assets/DoubleAgent4.png';

/**
 * ============================================================================
 * LETHALLY AVERAGE — WEEKLY STORY STYLE (the template for every issue)
 * ----------------------------------------------------------------------------
 * Every story must tell a COMPLETE arc. If a beat is missing, the story isn't
 * done. Required beats, in order:
 *
 *   1. HOOK      -> the "what if" question that pulls you in.            (hook)
 *   2. PANELS    -> 4 illustrated beats that finish the arc:            (panels)
 *        Panel 1  the setup / the trusted normal
 *        Panel 2  the turn — HOW it happened (mechanism, real stakes, real $)
 *        Panel 3  the unravel — how it fell apart / who got caught
 *        Panel 4  the teaching moment (Shield explains the defense)
 *   3. EPILOGUE  -> "THE REAL ENDING": the true, sourced outcome, told
 *                   straight with no dramatization.                  (epilogue)
 *   4. CLOSING   -> the lesson, the detail, the quote.
 *                                        (lesson / lessonDetail / closingQuote)
 *   5. RELATED   -> link to the site page that teaches the defense. (relatedLink)
 *   6. SOURCES   -> real, clickable citations so readers can verify. (sources)
 *
 * KEEP IT REAL: when the case is public record, use real names and real
 * numbers, and ALWAYS cite. A story readers can't verify is just a rumor.
 * ============================================================================
 */

export interface DialogueLine {
  speaker: string;
  color: 'shield' | 'phantom' | 'byte' | 'student' | 'neutral';
  text: string;
}

export interface StoryPanel {
  image: string;
  altText: string;
  narration?: string;
  dialogue?: DialogueLine[];
  callout?: { label: string; text: string };
  mjPrompt?: string;
}

export interface StorySource {
  label: string;
  url: string;
}

export interface StoryEpilogue {
  headline: string;
  text: string;
  outcomes?: string[];
}

export interface StoryRelatedLink {
  label: string;
  to: string;
}

export interface Story {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  week: number;
  season: number;
  teaser: string;
  hook: string;
  threat: string;
  panels: StoryPanel[];
  epilogue?: StoryEpilogue;
  lesson: string;
  lessonDetail: string;
  closingQuote: string;
  relatedLink?: StoryRelatedLink;
  incidentSource: string;
  sources?: StorySource[];
  characters: string[];
  tags: string[];
}

export const stories: Story[] = [
  {
    slug: 'the-double-agent',
    title: 'The Double Agent',
    subtitle: 'Trust But Verify',
    date: '2026-03-22',
    week: 1,
    season: 1,
    teaser: 'A cybersecurity incident responder and a ransomware negotiator — the exact people you call when you get hit — were secretly running the attacks. The people paid to protect you were the ones breaking in.',
    hook: 'What happens when the people hired to protect you are the ones attacking you? When the incident responder IS the incident?',
    threat: 'Ransomware / Insider Threat',
    characters: ['Shield', 'Phantom', 'Byte'],
    panels: [
      {
        image: DoubleAgent1,
        altText: 'Ryan Goldberg presenting to executives, his shadow revealing a villain',
        narration: '"By day, Ryan Goldberg was an incident response manager at Sygnia — one of the firms companies call when the worst has already happened."',
        dialogue: [
          { speaker: 'Goldberg', color: 'neutral', text: '"If ransomware ever hits your network, my team is who you call. You’re in good hands."' },
          { speaker: 'CEO', color: 'neutral', text: '"That’s exactly why we pay you."' },
        ],
        callout: { label: 'THE MASK', text: 'His entire job ran on trust. Companies handed him the keys to their worst days — their networks, their secrets, their whole playbook for fighting back.' },
        mjPrompt: '/imagine Classic Marvel comic book style, dramatic irony panel, confident cybersecurity consultant in sharp suit presenting to corporate executives in sleek boardroom, pointing at screen showing green shield icon and text Your Network Is Secure, but his shadow cast on the wall behind him reveals a monstrous demonic silhouette with horns and claws and skull grin, executives oblivious to the shadow, bold ink outlines, split lighting half warm corporate half sinister dark red, halftone dot shading, dramatic medium shot --ar 1:1 --v 6 --style raw',
      },
      {
        image: DoubleAgent2,
        altText: 'Goldberg in disguise deploying ransomware from a darkened workstation',
        narration: '"Then Goldberg and two others went into business with the enemy — including a partner whose actual job was negotiating ransoms DOWN on behalf of victims."',
        dialogue: [
          { speaker: 'Goldberg/Phantom', color: 'phantom', text: '"They pay me to stop the attacks. They’ll pay again when I’m the one starting them."' },
        ],
        callout: { label: 'THE SCHEME', text: 'As ALPHV/BlackCat affiliates, the crew rented the gang’s ransomware and extortion platform in exchange for 20% of every ransom. Between April and December 2023 they hit five U.S. businesses — a medical company, a pharmaceutical lab, a doctor’s office, an engineering firm, and a drone manufacturer. Only the medical company paid: roughly $1.2 million in Bitcoin.' },
        mjPrompt: '/imagine Classic Marvel comic book style, dark noir panel, same consultant now in dark room illuminated only by computer screen showing ransomware deployment interface with BlackCat logo and Bitcoin wallet displaying 1.2M, his expression sinister and calculating, behind him a full shadowy villain figure merging with his shadow both becoming one entity, red and black digital corruption effects creeping across the desk, bold ink outlines, extreme contrast lighting face lit from screen only, halftone dot shading, tight close-up dramatic angle --ar 1:1 --v 6 --style raw',
      },
      {
        image: DoubleAgent3,
        altText: 'Shield confronting the unmasked insider as the money trail lights up',
        narration: '"The Bitcoin left a trail. It ran through the affiliate accounts and straight back to the man companies trusted to investigate breaches. The defender was the door."',
        dialogue: [
          { speaker: 'Shield', color: 'shield', text: '"We followed the money, Goldberg. Every ransom. The incident responder WAS the incident."' },
        ],
        callout: { label: 'THE CATCH', text: 'After an FBI interview in the summer, Goldberg ran — three months on the move across ten countries. He was arrested stepping off a plane in Mexico City and deported. His partner was picked up back home without a fight.' },
        mjPrompt: '/imagine Classic Marvel comic book style, dramatic confrontation panel, a figure appearing to zap another with energy, bold ink outlines, dynamic perspective, halftone dot shading, vivid blue hero lighting versus red villain lighting clash, maximum dramatic tension --ar 1:1 --v 6 --style raw',
      },
      {
        image: DoubleAgent4,
        altText: 'Shield teaching a group of teenagers the lesson of the case',
        dialogue: [
          { speaker: 'Student', color: 'student', text: '"So even the security people can’t be trusted?"' },
          { speaker: 'Shield', color: 'shield', text: '"Trust the SYSTEM, not the person. Nobody gets all the keys — background checks, separation of duties, independent audits. A bank teller can’t also run the vault. That’s not paranoia. That’s the whole job."' },
          { speaker: 'Byte', color: 'byte', text: '"$1.2 million, split three ways… traded for four years in prison and a career that’s gone. Worst deal I’ve ever run the math on."' },
        ],
        callout: { label: 'YOUR DEFENSE', text: '(1) Background checks for anyone with privileged access. (2) Separation of duties — no single person holds every key. (3) Independent audits of the security team itself. (4) Watch the watchers.' },
        mjPrompt: '/imagine Classic Marvel comic book style, warm teaching panel, cybersecurity hero in hoodie and glowing tactical vest speaking to diverse group of teenagers in urban setting, small floating teal holographic cube displaying trust verification framework, warm encouraging atmosphere, newspaper headline visible showing arrested consultant, bold ink outlines, halftone dot shading, warm golden lighting, slightly low angle heroic perspective --ar 1:1 --v 6 --style raw',
      },
    ],
    epilogue: {
      headline: 'THE REAL ENDING',
      text: 'This one isn’t a metaphor. Ryan Goldberg of Sygnia and Kevin Martin of DigitalMint were real, respected cybersecurity professionals, working with a third man, Angelo Martino. They were indicted in 2025, pleaded guilty that December, and in 2026 a federal judge handed down the sentences.',
      outcomes: [
        'Ryan Goldberg (Sygnia, incident response manager) — 4 years in federal prison.',
        'Kevin Martin (DigitalMint, ransomware negotiator) — 4 years in federal prison.',
        'Angelo Martino, the third conspirator — 70 months (nearly 6 years).',
        'Careers erased. Felony records. All for a cut of a single ransom.',
      ],
    },
    lesson: 'Trust but verify — even the people paid to protect you can become the threat. Real security is built on systems and checks, never on faith in a single person.',
    lessonDetail: 'Background checks, separation of duties, and independent audits exist for exactly this reason. The same person who responds to your incidents should never hold unchecked power to deploy changes — or quietly cover their own tracks — inside your environment.',
    closingQuote: 'The wolf doesn’t always come dressed as a wolf. Sometimes it wears a badge and knows exactly how your defenses work. Trust the system, not just the person wearing it.',
    relatedLink: {
      label: 'The line between hacker and criminal is thinner than you think — read Don’t Catch a Case',
      to: '/security/stay-legal',
    },
    incidentSource: 'United States v. Goldberg, Martin, and Martino — the ALPHV/BlackCat "double agent" ransomware case prosecuted by the U.S. Department of Justice (2025–2026).',
    sources: [
      { label: 'U.S. Dept. of Justice — sentencing announcement', url: 'https://www.justice.gov/opa/pr/two-americans-who-attacked-multiple-us-victims-using-alphv-blackcat-ransomware-sentenced' },
      { label: 'U.S. Dept. of Justice — guilty pleas', url: 'https://www.justice.gov/opa/pr/two-americans-plead-guilty-targeting-multiple-us-victims-using-alphv-blackcat-ransomware' },
      { label: 'CyberScoop — former incident responders sentenced to 4 years', url: 'https://cyberscoop.com/incident-responders-ryan-goldberg-kevin-martin-sentenced-ransomware/' },
    ],
    tags: ['CyberComic', 'TrustButVerify', 'InsiderThreat', 'LethallyAverage', 'BronxCyber'],
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getLatestStory(): Story | undefined {
  return stories[0];
}
