import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import AccordionSection from '../components/Security/AccordionSection';
import TipCard from '../components/Security/TipCard';
import WarningBanner from '../components/Security/WarningBanner';
import ScenarioCard from '../components/Security/ScenarioCard';
import SecurityNav from '../components/Security/SecurityNav';
import GlitchText from '../components/UI/GlitchText';

const ScamPlaybook = () => {
  return (
    <PageWrapper>
      <GlitchText as="h1" className="text-5xl md:text-6xl text-la-white mb-4">
        THE SCAM PLAYBOOK
      </GlitchText>
      <p className="font-body text-sm text-la-muted mb-6 max-w-2xl">
        Every scam that will ever target you is already written down. Same plays,
        new uniforms. Once you know the playbook, you can see the play coming
        before the ball is even snapped. These are the exact scams hitting people
        your age right now.
      </p>
      <SecurityNav />

      {/* SECTION A: HOW EVERY SCAM WORKS */}
      <AccordionSection title="HOW EVERY SCAM WORKS" badge="critical" defaultOpen>
        <div className="space-y-4">
          <WarningBanner>
            Scammers don't hack computers. They hack <strong>feelings</strong>. Every scam
            runs on the same fuel: urgency, fear, greed, or trust. This is called{' '}
            <strong>social engineering</strong> — and it works on smart people every single day.
            Falling for it doesn't mean you're dumb. It means you're human.
          </WarningBanner>

          <TipCard title="The Four Buttons Scammers Push" badge="critical">
            <ul className="list-disc list-inside space-y-2 mb-2">
              <li>
                <span className="text-la-red">URGENCY</span> — "You have 24 hours." "Do it right
                now or lose everything." Real companies, real cops, and real family members
                almost never demand instant action. Scammers ALWAYS do, because the moment you
                slow down, the spell breaks.
              </li>
              <li>
                <span className="text-la-red">FEAR</span> — "You're in trouble." "Your account
                is compromised." "I have your photos." Fear shuts down the thinking part of your
                brain. That's the point.
              </li>
              <li>
                <span className="text-la-red">GREED</span> — "Free Nitro." "Flip $200 into
                $2,000." "You won." If money or free stuff appears out of nowhere, it's bait.
                Nobody is giving strangers money on the internet.
              </li>
              <li>
                <span className="text-la-red">TRUST</span> — the message comes from a hacked
                friend's account, a "recruiter," a "match," or someone pretending to be family.
                Scammers borrow trust because it opens doors that fear can't.
              </li>
            </ul>
            <p>
              <span className="text-la-white">The universal defense is one word: SLOW DOWN.</span>{' '}
              Every play in this book falls apart if you take 60 seconds and verify through a
              different channel.
            </p>
          </TipCard>

          <TipCard title="How to Read the Scenarios Below">
            <p>
              Each scenario is a real play scammers run, broken into four parts:{' '}
              <span className="text-la-gold">THE SETUP</span> (how it starts),{' '}
              <span className="text-la-red">THE HOOK</span> (what they want you to do),{' '}
              <span className="text-la-red">THE TELLS</span> (how to spot it), and{' '}
              <span className="text-green-400">THE MOVE</span> (exactly what to do instead).
              Read them like game film.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION B: GAMING & DISCORD */}
      <AccordionSection title="GAMING & DISCORD SCAMS" badge="critical">
        <div className="space-y-4">
          <ScenarioCard
            title="THE FREE NITRO LINK"
            platform="Discord"
            badge="critical"
            setup={
              <p>
                A DM lands — from a random, or worse, from a friend whose account already got
                taken: "yo free nitro, discord is doing a promo" with a link like{' '}
                <span className="text-la-white">discord-nitro-gift.xyz</span>. The page looks
                exactly like Discord and asks you to "log in to claim."
              </p>
            }
            hook={
              <p>
                You type your Discord password into their fake page. Now they own your account —
                and within minutes, every one of YOUR friends gets the same DM, from you.
                Some versions skip the login page and get you to run a "game beta" that steals
                your Discord token straight from your computer.
              </p>
            }
            tells={[
              'The URL is not discord.com. Every letter matters — "dlscord.com" and "discord-gifts.net" are not Discord.',
              'Discord gives Nitro through in-app gift embeds, not random login pages.',
              'A friend suddenly typing differently, pushing links, or DMing at 4am? That\'s not your friend anymore.',
              '"Try my game" + a .exe or .zip file from anyone you haven\'t met in real life.',
            ]}
            move={[
              'Never log in from a link someone sent you. Open the app or type discord.com yourself.',
              'If a friend sends something weird, hit them up on a DIFFERENT app: "did you send this?"',
              'Never run game files from strangers. Real betas go through Steam, Epic, or itch.io.',
              'Turn on 2FA in Discord (Settings → My Account). If your account gets taken, that\'s what gets it back.',
            ]}
            receipt={
              <p>
                Token-stealer malware disguised as game betas and cheat tools is one of the most
                common infections security researchers find on young people's PCs. Whole Discord
                servers get wiped out friend-by-friend this way — each stolen account is used to
                phish everyone on its friends list.
              </p>
            }
          />

          <ScenarioCard
            title="THE SKIN / ACCOUNT DEAL"
            platform="Steam, Fortnite, Roblox"
            badge="important"
            setup={
              <p>
                Someone offers a trade that's a little too good — rare skins, a stacked account,
                cheap V-Bucks or Robux. They want to "use a middleman" or move the deal to a
                trading site you've never heard of, or they ask you to pay with a gift card
                "for both of our protection."
              </p>
            }
            hook={
              <p>
                You send the money (or the skins) first. They vanish. Or the "middleman site" is
                theirs, and the login page steals your account. There's no refund department for
                gift cards and no support ticket that recovers a scammed trade.
              </p>
            }
            tells={[
              'Any deal that requires paying with gift cards. Gift cards are the official currency of scams.',
              '"Middleman" sites and "trusted trader" Discord servers you didn\'t find yourself.',
              'Pressure to finish the deal today, right now, before you "miss out."',
              'Prices way below market. Nobody sells a $300 account for $40 unless the account is stolen — or the sale is fake.',
            ]}
            move={[
              'Only trade through the game\'s own official system, with its trade holds and confirmations.',
              'Never buy accounts at all — it\'s against every game\'s rules, and stolen accounts get clawed back after you pay.',
              'Treat "pay with a gift card" as a fire alarm. Walk away every single time.',
              'If you got hit: change your password, enable 2FA, and report through the game\'s official support. Don\'t pay "recovery services" — that\'s round two of the same scam.',
            ]}
          />

          <ScenarioCard
            title='"IS THIS YOU IN THIS VIDEO?"'
            platform="Instagram, Snapchat, iMessage"
            badge="critical"
            setup={
              <p>
                A message from a friend's account: "omg is this you??" with a link. Or "someone
                is posting your pics in this group." The panic is the product — you HAVE to know
                what's in that link.
              </p>
            }
            hook={
              <p>
                The link opens a fake Instagram/Snapchat login page. You "log in" to see the
                video. There is no video. There never was. Now they have your password, and
                your account starts sending the same message to everyone you know.
              </p>
            }
            tells={[
              'The whole message is engineered so you click BEFORE you think. That urgency IS the tell.',
              'You get asked to log in to an app you were already logged into. Real links to Instagram open in the app — no password needed.',
              'The sender doesn\'t respond normally when you ask "wait, what video?"',
            ]}
            move={[
              'Don\'t click. Ask the friend on a different app if they actually sent it.',
              'If you already typed your password: change it NOW, from the real app, and kick out all other sessions (Settings → Security → Login Activity).',
              'Turn on 2FA so a stolen password isn\'t enough.',
              'Report the hacked friend\'s account so the platform can lock it before more people get hit.',
            ]}
          />
        </div>
      </AccordionSection>

      {/* SECTION C: MONEY SCAMS */}
      <AccordionSection title="MONEY SCAMS — THE ONES THAT RUIN LIVES" badge="critical">
        <div className="space-y-4">
          <WarningBanner>
            These next scams don't just take your money — some of them can put{' '}
            <strong>charges on YOUR record</strong>. When you move stolen money, the trail ends
            at you, not the scammer. Banks and prosecutors call you a "money mule," and "I didn't
            know" doesn't always save you.
          </WarningBanner>

          <ScenarioCard
            title="THE CASH FLIP / MONEY MULE"
            platform="Instagram, Cash App, in person"
            badge="critical"
            setup={
              <p>
                An account with designer fits and money spreads DMs you: "I flip cash. Send $200,
                get $2,000 back — I do it through [some app] glitch." Or the realer, more
                dangerous version: someone offers you quick money to "just receive a deposit and
                send most of it along — keep $500 for yourself."
              </p>
            }
            hook={
              <p>
                Version one: you send $200 and get blocked. Annoying, but survivable. Version
                two is the trap: the deposit hitting your account is <strong>stolen money</strong> —
                from a hacked account, a scammed grandma, a fake check. You forward it, the bank
                claws back the deposit, and now YOU owe the full amount — and your name is on
                every transaction. That's money laundering. People catch felonies for this.
              </p>
            }
            tells={[
              'Anyone who needs YOUR account to move THEIR money. People with real money have their own accounts.',
              '"Keep a cut for yourself" — that cut is the bait, and it makes you a participant, not a victim.',
              'A check from someone you barely know that you\'re supposed to deposit and partially send back.',
              '"It\'s a glitch/method/plug at the bank." There is no glitch. There was never a glitch.',
            ]}
            move={[
              'Never send money to receive money. That sentence alone defeats every flip scam ever invented.',
              'Never let anyone route money through your account, your Cash App, or your name. Not friends of friends. Not for a cut. Ever.',
              'If a check you deposited "clears" — that means nothing. Banks release funds BEFORE verifying; fake checks bounce 1-2 weeks later and the money comes out of YOUR pocket.',
              'If you already did it: stop all transfers, tell your bank immediately, and keep every message as evidence that you were recruited. Acting fast is the difference between victim and suspect.',
            ]}
            receipt={
              <p>
                Federal prosecutors and banks run continuous money-mule crackdowns, and young
                account holders recruited on Instagram and Snapchat are a huge share of the
                cases. Banks permanently close mule accounts and share the info — losing the
                ability to open a bank account at 19 follows you for years.
              </p>
            }
          />

          <ScenarioCard
            title="THE FAKE JOB OFFER"
            platform="Email, LinkedIn, Indeed, Telegram"
            badge="critical"
            setup={
              <p>
                You've been applying to jobs (maybe from our{' '}
                <Link to="/career-paths" className="text-la-red hover:text-la-gold underline underline-offset-2">
                  Career Paths
                </Link>{' '}
                page — good). Then a "recruiter" reaches out. The interview happens entirely over
                text or Telegram. You're "hired" fast — no real interview, great pay, fully remote.
              </p>
            }
            hook={
              <p>
                Then comes the money part. They send a check to "buy your home office equipment"
                and tell you to purchase from "their approved vendor" (them) — the check bounces
                after you've sent real money. Or they need your ID, SSN, and bank info "for
                payroll" on day one — that's identity theft with extra steps. Or "training fees"
                you have to pay upfront.
              </p>
            }
            tells={[
              'Interview conducted entirely in a chat app. Real companies use video calls or phones, and their emails match their real domain.',
              'Hired within a day, salary way above market for entry level, zero questions about your actual skills.',
              'ANY money moving toward you before you\'ve done work — especially checks you must partially send back.',
              'Asked for SSN and bank details before you\'ve signed anything or verified the company exists.',
            ]}
            move={[
              'Look the company up independently — real website, real LinkedIn employees, real phone number. Call and ask if the recruiter exists.',
              'Never pay to get a job. Not for equipment, training, background checks, or "processing." Employment pays YOU.',
              'Give SSN and bank info only after verifying the company, on real onboarding paperwork — never in a chat.',
              'Report fake postings to the job board and to reportfraud.ftc.gov so the next applicant doesn\'t get got.',
            ]}
            receipt={
              <p>
                Fake-recruiter losses hit hundreds of millions per year in FTC reports, and
                entry-level and first-job seekers are the primary targets — exactly the people
                grinding on job boards for the first time with no HR experience to compare against.
              </p>
            }
          />

          <ScenarioCard
            title="THE VERIFICATION CODE ASK"
            platform="Text, Facebook Marketplace, any app"
            badge="critical"
            setup={
              <p>
                Someone buying your old PS5 on Marketplace says: "Just to make sure you're not a
                bot, I'm sending you a code — read it back to me." Your phone buzzes with a
                6-digit code from Google, Zelle, or your bank.
              </p>
            }
            hook={
              <p>
                That code is YOUR 2FA code. They're on the login screen of YOUR account right
                now — they triggered the code by trying to log in as you. Read it back, and
                you've personally let them in. This one move bypasses everything: strong
                password, 2FA, all of it.
              </p>
            }
            tells={[
              'ANYONE asking you to read them a code that was texted to you. There is no legitimate version of this. None.',
              'The code text literally says "Do not share this code with anyone." They\'re betting you won\'t read it.',
              'A "buyer" who cares more about codes and links than about the thing they\'re buying.',
            ]}
            move={[
              'Verification codes are like your toothbrush: only you use them. Never read one to anyone — not "buyers," not "bank employees," not "support."',
              'If you already shared one: log into that account immediately, change the password, and check recovery settings for changes.',
              'Real bank employees never call and ask for codes. If "your bank" calls, hang up and call the number on your card.',
            ]}
          />

          <ScenarioCard
            title="THE STRANGER WITH A CRYPTO PLAY"
            platform='"Wrong number" texts, dating apps, Instagram'
            badge="important"
            setup={
              <p>
                A "wrong number" text turns into a friendly conversation that goes on for weeks.
                Or a match on a dating app who's charming, successful... and can't ever video
                call. Eventually they mention they trade crypto and casually show you their
                "gains." They'll even help you start small.
              </p>
            }
            hook={
              <p>
                You "invest" through their special app or site. The dashboard shows you winning —
                you can even withdraw a little at first (that's them feeding the hook). Then you
                put in real money, and when you try to cash out there are "taxes" and "fees" to
                pay first. The dashboard was always fake. The money was gone the moment you sent it.
              </p>
            }
            tells={[
              'A stranger who invests weeks in befriending you and only then mentions money. Patience is the weapon — investigators literally call this "pig butchering": fatten first, then take everything.',
              'Trading happens on a website or app you\'ve never heard of, not Coinbase or a real exchange.',
              'Small withdrawals work; big ones suddenly require paying fees upfront.',
              'They can never video call, and their life story has no verifiable details.',
            ]}
            move={[
              'Never invest through a link or app a stranger gave you. Period.',
              'Reverse image search their photos — most are stolen.',
              'If money is stuck behind a "fee," stop. Every dollar sent to release funds is another dollar gone. That\'s the scam\'s final stage.',
              'Report at ic3.gov. No shame — this scam takes billions per year from smart people of every age.',
            ]}
          />
        </div>
      </AccordionSection>

      {/* SECTION D: PUBLIC WIFI & VPN */}
      <AccordionSection title="PUBLIC WIFI & THE VPN REALITY CHECK" badge="important">
        <div className="space-y-4">
          <TipCard title="Public WiFi in 2026: The Real Risks" badge="important">
            <p className="mb-2">
              You've heard "never use public WiFi, hackers see everything!" — mostly from VPN
              ads. Here's the honest version: almost every site now uses HTTPS (the padlock),
              which encrypts what you send. Someone on the coffee shop WiFi can't read your
              passwords through HTTPS.
            </p>
            <p className="mb-2">What they CAN do:</p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">See which sites you visit</span> (domain names leak even when content doesn't).</li>
              <li><span className="text-la-white">Set up a fake hotspot</span> named "FREE_AIRPORT_WIFI" and control everything you connect through.</li>
              <li><span className="text-la-white">Shoulder-surf</span> — watching you type your PIN is still the most effective "hack" in any public place.</li>
            </ul>
            <p>
              Sensible rules: don't do banking on WiFi you don't trust (use your phone's data —
              cellular is harder to intercept), never install anything a WiFi login page tells
              you to install, and turn off auto-join for open networks.
            </p>
          </TipCard>

          <TipCard title="What a VPN Actually Does (and Doesn't)" badge="important">
            <p className="mb-2">
              Every influencer sells VPNs like invisibility cloaks. Reality check:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-green-400">A VPN DOES:</span> hide your traffic from the WiFi owner and your ISP, hide your IP address from websites, and get around region blocks.</li>
              <li><span className="text-la-red">A VPN does NOT:</span> make you anonymous (you're still logged into Google and Instagram — they know exactly who you are), stop phishing, stop malware, stop viruses, or protect a weak password. If you get tricked into typing your password into a fake site, the VPN happily encrypts your password on its way to the scammer.</li>
            </ul>
            <p className="mb-2">
              <span className="text-la-white">Worth it?</span> On sketchy shared networks (dorms,
              hotels, that apartment-building WiFi from our{' '}
              <Link to="/security/multifamily" className="text-la-red hover:text-la-gold underline underline-offset-2">
                Multi-Family guide
              </Link>
              ) — yes. For sitting at home on your own locked-down network — mostly no.
            </p>
            <p>
              <span className="text-la-white">Which one:</span> Proton VPN has a real free tier
              with no data cap; Mullvad is 5€/month and doesn't even want your name. Avoid
              random free VPNs from the app store — many of them log and sell exactly the data
              you're trying to protect. A free VPN with no known business model IS the business model.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION E: UNIVERSAL DEFENSES */}
      <AccordionSection title="THE UNIVERSAL DEFENSES" badge="critical">
        <div className="space-y-4">
          <TipCard title="Six Rules That Beat Every Scam in This Playbook" badge="critical">
            <ul className="list-disc list-inside space-y-2">
              <li><span className="text-la-white">Slow down.</span> Urgency is the scam. Anything real will still be real in an hour.</li>
              <li><span className="text-la-white">Verify on a second channel.</span> Friend DMs you a link? Text them. "Bank" calls you? Hang up, call the number on your card. Always leave the channel the message came in on.</li>
              <li><span className="text-la-white">Never send money to receive money.</span> No flips, no fees, no "taxes" to unlock winnings.</li>
              <li><span className="text-la-white">Codes are for your eyes only.</span> Nobody legitimate will ever ask you to read one back.</li>
              <li><span className="text-la-white">Gift cards are not payment.</span> Anyone demanding them is a scammer, 100% of the time, no exceptions in recorded history.</li>
              <li><span className="text-la-white">Talk about it.</span> Scammers count on shame keeping you silent. Telling someone early is how damage gets contained — and how the next person gets warned.</li>
            </ul>
          </TipCard>

          <WarningBanner>
            <strong>If you got scammed:</strong> you're not stupid, you're outnumbered — this is
            organized crime running plays on millions of people a day. Move fast instead of
            beating yourself up: our{' '}
            <Link to="/security/when-it-happens" className="text-la-gold hover:text-la-red underline underline-offset-2">
              When It Hits the Fan
            </Link>{' '}
            page has the exact recovery steps for stolen accounts, stolen money, and stolen identities.
          </WarningBanner>
        </div>
      </AccordionSection>
    </PageWrapper>
  );
};

export default ScamPlaybook;
