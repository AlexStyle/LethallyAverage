import DoubleAgent1 from '../../assets/DoubleAgent1.png';
import DoubleAgent2 from '../../assets/DoubleAgent2.png';
import DoubleAgent3 from '../../assets/DoubleAgent3.png';
import DoubleAgent4 from '../../assets/DoubleAgent4.png';

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
  lesson: string;
  lessonDetail: string;
  closingQuote: string;
  incidentSource: string;
  characters: string[];
  panels: StoryPanel[];
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
    teaser: 'An incident response manager at a top cybersecurity firm was secretly a BlackCat ransomware affiliate. The people paid to protect you... were the ones breaking in.',
    hook: 'What happens when the people hired to protect you... are the ones attacking you? When the incident responder IS the incident?',
    threat: 'Ransomware / Insider Threat',
    lesson: 'Trust but verify \u2014 even cybersecurity professionals can be threat actors. No single person should hold all the keys.',
    lessonDetail: 'Background checks, separation of duties, and independent audits exist because real security is built on systems, not people. The same person who responds to your incidents should never have unchecked access to deploy changes in your environment.',
    closingQuote: 'The wolf doesn\u2019t always come dressed as a wolf. Sometimes it comes in a suit with a security badge. Real protection means trusting the system, not just the person.',
    incidentSource: 'Two cybersecurity professionals pleaded guilty to BlackCat (ALPHV) ransomware activity while employed at legitimate security firms.',
    characters: ['Shield', 'Phantom', 'Byte'],
    panels: [
      {
        image: DoubleAgent1,
        altText: 'Shield in the Security Operations Center reviewing threat alerts',
        narration: '"By day, he was Ryan Goldberg \u2014 incident response manager at one of the world\u2019s top cybersecurity firms. By night..."',
        dialogue: [
          { speaker: 'Goldberg', color: 'phantom', text: '"Your network is fully hardened. No threat actor is getting through this."' },
          { speaker: 'CEO', color: 'neutral', text: '"That\u2019s what we pay you for."' },
        ],
        mjPrompt: '/imagine Classic Marvel comic book style, dramatic irony panel, confident cybersecurity consultant in sharp suit presenting to corporate executives in sleek boardroom, pointing at screen showing green shield icon and text Your Network Is Secure, but his shadow cast on the wall behind him reveals a monstrous demonic silhouette with horns and claws and skull grin, executives oblivious to the shadow, bold ink outlines, split lighting half warm corporate half sinister dark red, halftone dot shading, dramatic medium shot --ar 1:1 --v 6 --style raw',
      },
      {
        image: DoubleAgent2,
        altText: 'Phantom in disguise transferring stolen data from a workstation',
        dialogue: [
          { speaker: 'Goldberg/Phantom', color: 'phantom', text: '"They pay me to find their vulnerabilities. Then they pay me again when I use them."' },
        ],
        callout: { label: 'THE SCHEME', text: 'As a BlackCat/ALPHV affiliate, he paid 20% of ransoms to the ransomware operators in exchange for the encryption tools and extortion platform. One victim paid .2 million in Bitcoin.' },
        mjPrompt: '/imagine Classic Marvel comic book style, dark noir panel, same consultant now in dark room illuminated only by computer screen showing ransomware deployment interface with BlackCat logo and Bitcoin wallet displaying 1.2M, his expression sinister and calculating, behind him a full shadowy villain figure merging with his shadow both becoming one entity, red and black digital corruption effects creeping across the desk, bold ink outlines, extreme contrast lighting face lit from screen only, halftone dot shading, tight close-up dramatic angle --ar 1:1 --v 6 --style raw',
      },
      {
        image: DoubleAgent3,
        altText: 'Byte the AI sidekick highlighting suspicious network activity',
        narration: '"Every fire he was called to put out... was one he\u2019d set himself."',
        dialogue: [
          { speaker: 'Shield', color: 'shield', text: '"Game over, Goldberg. We traced the BlackCat payments right back to your incident response reports. You were creating the fires and selling the extinguisher."' },
        ],
        callout: { label: 'THE CATCH', text: 'Both suspects pleaded guilty to conspiracy to commit extortion. They face up to 20 years in federal prison. Sentencing: March 2026.' },
        mjPrompt: '/imagine Classic Marvel comic book style, dramatic confrontation panel, a figure appearing to zap another with energy, bold ink outlines, dynamic perspective, halftone dot shading, vivid blue hero lighting versus red villain lighting clash, maximum dramatic tension --ar 1:1 --v 6 --style raw',
      },
      {
        image: DoubleAgent4,
        altText: 'Shield face to face with the unmasked insider threat',
        dialogue: [
          { speaker: 'Student', color: 'student', text: '"So even the security people can\u2019t be trusted?"' },
          { speaker: 'Shield', color: 'shield', text: '"Trust, but verify. No one person should have all the keys. That\u2019s why real security has layers \u2014 background checks, separation of duties, independent audits. The same reason a bank teller can\u2019t also be the vault manager."' },
          { speaker: 'Byte', color: 'byte', text: '"He made .2 million... and now faces 20 years. Bad trade."' },
        ],
        callout: { label: 'YOUR DEFENSE', text: '(1) Background checks for privileged access roles. (2) Separation of duties \u2014 no single person holds all keys. (3) Independent audits of security teams. (4) Monitor your monitors.' },
        mjPrompt: '/imagine Classic Marvel comic book style, warm teaching panel, cybersecurity hero in hoodie and glowing tactical vest speaking to diverse group of teenagers in urban setting, small floating teal holographic cube displaying trust verification framework, warm encouraging atmosphere, newspaper headline visible showing arrested consultant, bold ink outlines, halftone dot shading, warm golden lighting, slightly low angle heroic perspective --ar 1:1 --v 6 --style raw',
      },
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
