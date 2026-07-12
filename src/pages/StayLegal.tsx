import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import AccordionSection from '../components/Security/AccordionSection';
import TipCard from '../components/Security/TipCard';
import WarningBanner from '../components/Security/WarningBanner';
import StepList from '../components/Security/StepList';
import ScenarioCard from '../components/Security/ScenarioCard';
import SecurityNav from '../components/Security/SecurityNav';
import GlitchText from '../components/UI/GlitchText';

const StayLegal = () => {
  return (
    <PageWrapper>
      <GlitchText as="h1" className="text-5xl md:text-6xl text-la-white mb-4">
        DON'T CATCH A CASE
      </GlitchText>
      <p className="font-body text-sm text-la-muted mb-6 max-w-2xl">
        This site teaches you real skills — scanning networks, finding exposed
        devices, understanding how attacks work. Here's the part almost nobody
        teaches until it's too late: the exact same curiosity that makes a great
        security pro can get you a federal charge if you point it at the wrong
        target. This page is where the line is. Learn it before you cross it by accident.
      </p>
      <SecurityNav />

      {/* SECTION A: THE LINE */}
      <AccordionSection title="THE ONE RULE THAT KEEPS YOU FREE" badge="critical" defaultOpen>
        <div className="space-y-4">
          <WarningBanner>
            <strong>Authorization is everything.</strong> The entire legal difference between a
            security researcher and a criminal is one question: <em>did you have permission to
            touch that system?</em> Same keyboard, same commands, same skills. Permission is the
            only thing that changes — and it's the thing that decides whether you get a job offer
            or a court date.
          </WarningBanner>

          <TipCard title="The Law in Plain English: the CFAA" badge="critical">
            <p className="mb-2">
              The <span className="text-la-white">Computer Fraud and Abuse Act (CFAA)</span> is
              the main US federal computer crime law. Strip away the legalese and it says: don't
              access a computer <span className="text-la-white">"without authorization"</span> or
              go <span className="text-la-white">"beyond"</span> the access you were given. Most
              states have their own versions too (like California's Penal Code 502).
            </p>
            <p className="mb-2">Two things people your age get wrong all the time:</p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-red">"It was open, so it's fair game."</span> No. Finding an unlocked door is not permission to walk in. An exposed camera or database being reachable doesn't make logging into it legal.</li>
              <li><span className="text-la-red">"I didn't break anything / I was just looking."</span> Access itself is the crime under the CFAA. You don't have to steal, delete, or damage anything. Looking around a system you weren't authorized to enter is already the violation.</li>
            </ul>
            <p>
              Penalties are real: fines, felony records, and prison. And a computer crime record
              doesn't just cost you — it locks you out of the exact security career this site is
              trying to open up for you. Background checks are brutal in this field.
            </p>
          </TipCard>

          <TipCard title="The Golden Test Before You Touch Anything">
            <p className="mb-2">
              Before you scan it, log into it, or poke at it, ask:{' '}
              <span className="text-la-white">"Do I own this, or do I have explicit permission
              in writing to test it?"</span>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="text-green-400">YES →</span> your own laptop, your own home network, a lab you built, a practice platform that invites you in, a company whose bug bounty rules say you can. Go wild. This is how you learn.</li>
              <li><span className="text-la-red">NO / NOT SURE →</span> stop. "Not sure" counts as no. There's an entire universe of legal targets (below) built exactly so you never have to gamble your future to practice.</li>
            </ul>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION B: SCENARIOS */}
      <AccordionSection title="THE SCENARIOS THAT GET KIDS CHARGED" badge="critical">
        <div className="space-y-4">
          <ScenarioCard
            title="THE SCHOOL WIFI 'PRANK'"
            platform="School network"
            badge="critical"
            setup={
              <p>
                You learned some networking. You realize the school WiFi is wide open, or you
                figure out the admin password, or you find a tool that can knock devices offline.
                Someone dares you. It's funny. It's just school.
              </p>
            }
            hook={
              <p>
                Changing grades, knocking the network offline during testing, getting into the
                staff system, or "just looking" at the student database — all of it is
                unauthorized access to a computer system. Schools report these to police now.
                Kids have been arrested, expelled, charged as adults, and left with records that
                followed them for years. The "prank" framing evaporates the second an adult is involved.
              </p>
            }
            tells={[
              'The plan only works if nobody with authority knows you\'re doing it. That secrecy is your own conscience telling you the answer.',
              '"It\'s just the school, who cares" — the law cares. School systems are explicitly protected computers.',
              'Someone daring you to do it. They get the laugh; you get the record.',
            ]}
            move={[
              'If you FOUND a real flaw (open network, exposed grades), that\'s genuinely valuable — report it, don\'t exploit it. Tell a teacher you trust or the IT department: "I noticed X looks exposed, thought someone should know."',
              'Ask that teacher if you can help set up a cybersecurity club or lab. Schools LOVE this, and it turns "the kid who hacked us" into "the kid who protects us."',
              'Do the exact same techniques on the legal platforms below, where finding flaws earns points and certs instead of charges.',
            ]}
            receipt={
              <p>
                Students across the country have caught criminal charges for changing their own
                grades or taking down school networks — cases that make the local news every
                exam season. The techniques were trivial. The consequences weren't.
              </p>
            }
          />

          <ScenarioCard
            title="THE EX'S / FRIEND'S ACCOUNT"
            platform="Snapchat, Instagram, iCloud"
            badge="critical"
            setup={
              <p>
                You know their password (they told you once, or you watched them type it). You
                want to check if they're talking to someone, or read the group chat, or see what
                they're saying about you. You still have their old iCloud login on your iPad.
              </p>
            }
            hook={
              <p>
                Logging into someone else's account — even with a password they once shared,
                even a "shared" account, even for five minutes — is unauthorized access. Reading
                their messages can also violate wiretapping and stalking laws. It feels like
                relationship drama; the law treats it like breaking into a computer. And it's a
                classic escalation pattern in controlling and abusive relationships.
              </p>
            }
            tells={[
              'You\'re telling yourself "they wouldn\'t mind" or "we used to share it." If you have to justify it, you already know.',
              'The urge spikes after a fight or a breakup. That\'s exactly when it does the most legal and personal damage.',
              'You\'d be furious if they did it to you.',
            ]}
            move={[
              'Log out of their accounts on all your devices. Remove saved passwords. Close the door yourself.',
              'If you\'re worried about what someone\'s saying, that\'s a conversation (or a block), not an investigation.',
              'If YOU\'RE the one worried an ex still has access to your accounts, run the post-breakup audit on our Your Feed Is Snitching page — that\'s the legal, healthy side of this exact problem.',
            ]}
          />

          <ScenarioCard
            title="THE SHODAN CAMERA"
            platform="The open internet"
            badge="important"
            setup={
              <p>
                You read our{' '}
                <Link to="/security/iot" className="text-la-red hover:text-la-gold underline underline-offset-2">
                  IoT guide
                </Link>{' '}
                and learned about Shodan — the search engine for internet-connected devices. You
                search around and find cameras with default logins, open databases, control
                panels. You could just... log in. It's right there.
              </p>
            }
            hook={
              <p>
                Searching Shodan is legal — it's just an index of what's publicly responding.{' '}
                <span className="text-la-white">Logging into a device that isn't yours is not</span>,
                even if the password is "admin" and the door is wide open. That exposed camera
                belongs to a family, a small business, a stranger. Accessing it is the crime,
                full stop — "it was open" is not a defense, it's a confession.
              </p>
            }
            tells={[
              'The device is reachable and the creds are default — so the ONLY thing standing between you and a charge is your own choice not to log in.',
              '"I\'ll just peek to see if it works." Peeking is accessing. Accessing is the violation.',
            ]}
            move={[
              'Look at Shodan results as a map, not a set of keys. Searching and reading banners = fine. Logging in = crime.',
              'Search YOUR OWN IP to find YOUR exposed devices and fix them (that\'s the intended use, and it\'s in our IoT guide).',
              'Found something genuinely dangerous, like an exposed system at a hospital or school? That\'s a responsible-disclosure moment (below) — report it, don\'t touch it.',
            ]}
          />

          <ScenarioCard
            title="THE BOOTER / STRESSER SERVICE"
            platform="Gaming, Discord"
            badge="critical"
            setup={
              <p>
                You're losing in a game, or beefing with someone online. Someone mentions a
                "booter" or "stresser" — a cheap website that will knock a target's internet
                offline for you. $10, no skills needed, "everyone does it."
              </p>
            }
            hook={
              <p>
                Booting someone offline is a <span className="text-la-white">DDoS attack</span>,
                and it's a federal crime — the same CFAA, plus the fact that those "stresser"
                sites are honeypots and their user lists get seized. Buying one $10 boot to win a
                Warzone match has landed teenagers with FBI visits and charges. The service takes
                your payment info; that's the trail straight back to you.
              </p>
            }
            tells={[
              'It\'s marketed as a "stress testing" tool but you\'re pointing it at someone else\'s connection. Testing your own = maybe fine; hitting others = crime.',
              'Paid for with your card, your PayPal, your crypto wallet — all traceable.',
              '"Everyone does it and nobody gets caught." The FBI has seized the biggest booter sites and worked down the customer lists. Plenty got caught.',
            ]}
            move={[
              'Never buy, use, or run a booter/stresser against anyone. Losing a game costs you nothing. A federal record costs you everything.',
              'That interest in "how do you take down a network" is legit — study DDoS defense on TryHackMe and in cloud security. Defenders are in demand; attackers get indicted.',
            ]}
          />
        </div>
      </AccordionSection>

      {/* SECTION C: RESPONSIBLE DISCLOSURE */}
      <AccordionSection title="YOU FOUND A REAL VULNERABILITY. NOW WHAT?" badge="important">
        <div className="space-y-4">
          <TipCard title="Responsible Disclosure: How the Pros Handle It" badge="important">
            <p className="mb-2">
              Say you genuinely stumble onto something — a website leaking user data, a login you
              could bypass. What you do next decides whether you're a researcher or a defendant.
              The professional path is called{' '}
              <span className="text-la-white">responsible (or coordinated) disclosure</span>:
            </p>
            <StepList steps={[
              'Stop at the proof. The moment you realize it\'s real, don\'t go further — don\'t download the data, don\'t log into other accounts, don\'t "see how deep it goes." Minimal proof only. Every extra step turns "found" into "exploited."',
              'Check for a security.txt file. Type the site + /.well-known/security.txt (e.g., example.com/.well-known/security.txt). Many organizations list exactly how and where to report. Their bug bounty program may also grant "safe harbor" — legal permission to test within stated rules.',
              'Report privately to the organization. Email their security contact. Describe what you found, how to reproduce it, and that you accessed the minimum needed to confirm it.',
              'Never go public first, never extort. "Pay me or I\'ll leak it" is not disclosure — that\'s extortion, a separate and serious crime. Give them reasonable time to fix it before telling anyone.',
              'Never ask for money unless there\'s an official bug bounty. Demanding a "reward" to stay quiet is the line between a researcher and a criminal.',
            ]} />
          </TipCard>

          <WarningBanner>
            Even responsible disclosure carries some risk if you had zero authorization to be
            there in the first place — companies have occasionally threatened well-meaning
            reporters. That's exactly why bug bounty programs with written "safe harbor" terms
            exist, and why you practice on platforms that <em>invite</em> you in. When in doubt,
            report what you found and don't touch it further — and talk to a trusted adult or
            mentor before you send anything.
          </WarningBanner>

          <TipCard title="We Practice What We Preach" badge="free">
            <p>
              This site has its own{' '}
              <a
                href="/.well-known/security.txt"
                className="text-la-red hover:text-la-gold underline underline-offset-2"
              >
                /.well-known/security.txt
              </a>
              . If you find a bug in LethallyAverage, that file tells you how to tell us. That's
              the whole idea in miniature: make it easy for good-faith finders to do the right thing.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION D: LEGAL PRACTICE GROUNDS */}
      <AccordionSection title="WHERE TO GO FULL HACKER — LEGALLY" badge="free">
        <div className="space-y-4">
          <TipCard title="Platforms That Beg You to Break In" badge="free">
            <p className="mb-2">
              These exist for one reason: to let you practice real offensive skills on systems
              that <span className="text-la-white">want</span> to be attacked. Every technique
              that would be a crime on someone else's network earns you points, ranks, and
              resume lines here.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="text-la-white">picoCTF</span> (picoctf.org) — free, built by Carnegie Mellon specifically for beginners and students. Start here. Genuinely fun, genuinely safe, genuinely respected.</li>
              <li><span className="text-la-white">TryHackMe</span> (tryhackme.com) — guided rooms that hold your hand from zero. Free tier is huge.</li>
              <li><span className="text-la-white">Hack The Box</span> (hackthebox.com) — more challenge, less hand-holding. The "Starting Point" track eases you in.</li>
              <li><span className="text-la-white">OverTheWire</span> (overthewire.org) — the "Bandit" wargame teaches Linux and the command line by playing. Old-school and excellent.</li>
              <li><span className="text-la-white">CTFtime</span> (ctftime.org) — the calendar of Capture-The-Flag competitions worldwide. Team up and compete for real.</li>
              <li><span className="text-la-white">Your own home lab</span> — old laptop + VirtualBox + intentionally-vulnerable VMs (like OWASP Juice Shop). Free, unlimited, 100% yours to wreck.</li>
            </ul>
          </TipCard>

          <TipCard title="Bug Bounties: Get PAID to Hack, With Permission" badge="important">
            <p className="mb-2">
              Once you have skills, real companies will pay you to find flaws in their systems —
              legally, under rules they publish. This is the dream version: offensive hacking
              with a paycheck and safe-harbor terms.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">HackerOne</span> (hackerone.com) and <span className="text-la-white">Bugcrowd</span> (bugcrowd.com) — the big platforms. Each program has a "scope" (exactly what you're allowed to test) and rules. Read them like a contract, because they are one.</li>
              <li>Stay in scope. Testing something a program didn't list — even on the same company — drops you right back into CFAA territory. The scope IS your authorization.</li>
            </ul>
            <p>
              This is the whole arc this site believes in: the same curiosity that could get you
              charged can instead get you certified, hired, and paid — the difference is
              permission and where you point it.{' '}
              <Link to="/career-paths" className="text-la-red hover:text-la-gold underline underline-offset-2">
                Career Paths
              </Link>{' '}
              shows you how to turn it into a job.
            </p>
          </TipCard>

          <WarningBanner>
            <strong>Why this page matters more for some of us.</strong> If you're a kid from a
            neighborhood that already gets watched harder, you don't get the "boys will be boys"
            benefit of the doubt when a computer crime gets investigated. The same curiosity that
            gets one kid a warning gets another kid charged. That's not fair — and until it
            changes, the move is to keep every bit of your practice on ground where the law is
            already on your side. Your talent is real. Protect it.
          </WarningBanner>
        </div>
      </AccordionSection>
    </PageWrapper>
  );
};

export default StayLegal;
