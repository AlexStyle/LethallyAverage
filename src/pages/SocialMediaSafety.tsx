import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import AccordionSection from '../components/Security/AccordionSection';
import TipCard from '../components/Security/TipCard';
import WarningBanner from '../components/Security/WarningBanner';
import StepList from '../components/Security/StepList';
import ScenarioCard from '../components/Security/ScenarioCard';
import SecurityNav from '../components/Security/SecurityNav';
import GlitchText from '../components/UI/GlitchText';

const SocialMediaSafety = () => {
  return (
    <PageWrapper>
      <GlitchText as="h1" className="text-5xl md:text-6xl text-la-white mb-4">
        YOUR FEED IS SNITCHING
      </GlitchText>
      <p className="font-body text-sm text-la-muted mb-6 max-w-2xl">
        Your router isn't your biggest leak. Your posts are. Everything you share
        builds a file on you that anyone — a scammer, a stalker, a random with a
        grudge — can read for free. This page shows you what your feed reveals,
        and how to shut it down without going offline.
      </p>
      <SecurityNav />

      {/* SECTION A: WHAT YOUR POSTS GIVE AWAY */}
      <AccordionSection title="WHAT YOUR POSTS GIVE AWAY" badge="critical" defaultOpen>
        <div className="space-y-4">
          <TipCard title="OSINT: The Skill That Works Both Ways" badge="important">
            <p className="mb-2">
              <span className="text-la-white">OSINT</span> — Open Source Intelligence — means
              building a profile on someone using only public information. It's a real
              cybersecurity job skill (investigators and red teamers do it daily). It's also
              exactly what someone targeting you does first.
            </p>
            <p className="mb-2">From a normal, harmless-looking feed, a stranger can usually pull:</p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Your school (uniform, mascot, background of pics, tagged locations)</li>
              <li>Your neighborhood (street signs, storefronts, the view from your window)</li>
              <li>Your daily schedule (gym check-ins, "every Friday we're at...")</li>
              <li>Your family members' names and faces (birthday posts, tags)</li>
              <li>When your house is empty (vacation posts, concert stories — in real time)</li>
              <li>Answers to your security questions (pet's name, mom's maiden name via tagged family, first car)</li>
            </ul>
            <p>
              None of those posts felt like leaks when you posted them. That's the point —
              OSINT is about adding up crumbs.
            </p>
          </TipCard>

          <TipCard title="Run an OSINT Investigation on Yourself" badge="free">
            <p className="mb-3">
              This is the single best exercise on this entire site — and it's a legit resume
              skill. Pretend you're a stranger who just got your name (or your gamertag) and
              wants to find you:
            </p>
            <StepList steps={[
              'Open a private/incognito window (so results aren\'t personalized) and search your full name in quotes. Then your name + your city. Then your name + your school.',
              'Search your usernames — the exact gamertag or handle you use everywhere. If you reuse one handle across Instagram, Discord, Reddit, and Xbox, all of those lives connect into one profile. Try it on namechk.com to see everywhere it exists.',
              'Do a reverse image search (images.google.com or tineye.com) on your profile pictures. Does your "anonymous" account share a pic with your real one? Connected.',
              'Open your own Instagram/TikTok as a logged-out stranger. What can they see? Scroll like an investigator: what school, what block, what routine shows up?',
              'Check your tagged photos — other people\'s posts about you are part of YOUR file, and you don\'t control their privacy settings.',
              'Write down everything you found. That\'s your leak list. The rest of this page is how you clean it up.',
            ]} />
          </TipCard>

          <TipCard title="Location: Stop Broadcasting Where You Sleep" badge="critical">
            <ul className="list-disc list-inside space-y-2 mb-2">
              <li>
                <span className="text-la-white">Snap Map:</span> if you've never touched the
                settings, your exact location may update every time you open Snapchat. Settings →
                See My Location → <span className="text-la-white">Ghost Mode</span>, or trim the
                list to people you'd trust with your address — because that's literally what it is.
              </li>
              <li>
                <span className="text-la-white">Instagram/TikTok location tags:</span> tag the
                city, not the spot — and never your home, school, or job. Better: post the
                location AFTER you've left.
              </li>
              <li>
                <span className="text-la-white">Post later, not live:</span> real-time stories
                tell everyone where you are RIGHT NOW — and where you're not (home). Concert
                pics hit just as hard the next morning.
              </li>
              <li>
                <span className="text-la-white">Photo backgrounds:</span> before posting, scan
                the frame like a detective would — street signs, building numbers, school
                logos, your address on a package in the background. It happens constantly.
              </li>
            </ul>
            <p>
              Vacation posts deserve their own warning: "10 days in DR 🇩🇴" is also an
              announcement that your place is empty for 10 days. Post the recap when you're back —
              this is where online oversharing becomes a{' '}
              <Link to="/security/home-basics" className="text-la-red hover:text-la-gold underline underline-offset-2">
                physical security
              </Link>{' '}
              problem.
            </p>
          </TipCard>

          <TipCard title="Lock It Down, App by App" badge="important">
            <ul className="list-disc list-inside space-y-2">
              <li><span className="text-la-white">Instagram:</span> Private account (Settings → Account Privacy). Hide your follower list from strangers by staying private — your friend group is a map of your life. Settings → Tags & Mentions → manually approve tags. Turn off Activity Status.</li>
              <li><span className="text-la-white">TikTok:</span> Private account; turn off "Suggest your account to others"; limit DMs to friends; turn off "Activity status." If you're under 18, TikTok already restricts some of this — don't lie about your age to unlock it, those limits are the good kind.</li>
              <li><span className="text-la-white">Snapchat:</span> Ghost Mode (above); Contact Me → Friends only; See My Story → Friends only (or Custom); turn off "Show me in Quick Add."</li>
              <li><span className="text-la-white">Discord:</span> Server privacy defaults → off for DMs from server members you don't know; don't use your real name as your display name in public servers; assume anything typed in a public server is public forever.</li>
              <li><span className="text-la-white">Everything:</span> different usernames for gaming vs. real-life socials. Your gamertag should not lead to your face. This one habit defeats most doxxing attempts before they start.</li>
            </ul>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION B: SEXTORTION */}
      <AccordionSection title="SEXTORTION — THE ONE NOBODY TALKS ABOUT" badge="critical">
        <div className="space-y-4">
          <WarningBanner>
            This is the hardest section on this site and the most important. The FBI has called
            financial sextortion of teens an epidemic — thousands of cases a year, overwhelmingly
            targeting boys 14-17, and it has led to suicides. If this is happening to you or a
            friend: <strong>it is survivable, it is not your fault, and there is a way out that
            isn't paying and isn't panicking.</strong>
          </WarningBanner>

          <ScenarioCard
            title="THE MATCH THAT WASN'T REAL"
            platform="Instagram, Snapchat, dating apps"
            badge="critical"
            setup={
              <p>
                An attractive stranger follows you and starts a conversation. They're flirty,
                they move fast, and pretty quickly they send a photo and ask for one back. It
                feels real because they found you through mutuals and their profile looks lived-in.
                It's not a person — it's usually organized crews running hundreds of these chats
                at once with stolen photos and scripts.
              </p>
            }
            hook={
              <p>
                The second you send anything, the mask drops: "I have your photo and your
                follower list. Pay $500 or I send it to everyone you know — your mom, your
                school, everybody." They show you a screenshot of your followers to prove it.
                Paying doesn't end it. Paying proves you'll pay, and the demands keep coming.
              </p>
            }
            tells={[
              'Moves from "hey" to flirting to photo requests within hours. Real people don\'t speedrun trust.',
              'Camera "doesn\'t work" for video calls, but they always have photos ready.',
              'Their profile is new-ish, or the photos have zero casual/messy ones — all curated.',
              'They ask about your age and followers early. That\'s target research, not interest.',
            ]}
            move={[
              'DO NOT PAY. Not once, not a "smaller amount," not "just this time." Payment guarantees the threats continue. Blackmail runs on hope — cut it off.',
              'Do not delete the chat — screenshot everything (their profile, the threats, payment demands). It\'s evidence.',
              'Block, then report the account to the platform.',
              'Use Take It Down (takeitdown.ncmec.org) — a free tool from the National Center for Missing & Exploited Children. It hash-blocks intimate images of minors from being posted on Instagram, TikTok, Snapchat, and more, and works even if you\'re panicking at 2am. It never asks you to upload the image itself.',
              'Tell an adult you trust. Yes, it\'s embarrassing for five minutes. The alternative — carrying this alone — is how kids get hurt. Any adult worth telling will care about YOU, not the photo.',
              'Report to the FBI at ic3.gov or tips.fbi.gov. They run takedowns of these crews constantly.',
            ]}
            receipt={
              <p>
                In most of these cases the image is never actually sent to anyone — sending it
                earns the scammer nothing; the THREAT is the entire business. And even if it
                were: your life survives an embarrassing photo. Families bury kids over this
                because the kids believed it was unsurvivable. It isn't. Not paying + telling
                someone is the play, every time.
              </p>
            }
          />

          <TipCard title="Before It Ever Happens: The House Rules" badge="important">
            <ul className="list-disc list-inside space-y-1">
              <li>Assume any photo you send can end up anywhere. The person you trust today may not be the person you know next year — and accounts get hacked.</li>
              <li>Anyone who pressures you for photos is showing you exactly who they are. "If you cared you would" is a script, not a feeling.</li>
              <li>If a friend confides in you that this is happening to them: no jokes, no lectures. Help them with the steps above. You might literally be saving a life.</li>
            </ul>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION C: BULLYING & PILE-ONS */}
      <AccordionSection title="CYBERBULLYING & PILE-ONS" badge="important">
        <div className="space-y-4">
          <ScenarioCard
            title="THE GROUP CHAT TURNS ON YOU"
            platform="Group chats, finstas, anonymous apps"
            badge="important"
            setup={
              <p>
                It starts small — a screenshot of something you said, cropped just right, dropped
                into a group chat you're not in. A burner account posts it. People who barely
                know you pile on because pile-ons are entertainment. Maybe there's an anonymous
                Q&A app (NGL, Tellonym) involved, where anybody can say anything with no name attached.
              </p>
            }
            hook={
              <p>
                The goal of a pile-on is to get a reaction — screenshots of you losing it become
                round two of the content. Every angry reply you post is fuel. The mob isn't
                arguing with you; it's performing for each other.
              </p>
            }
            tells={[
              'Cropped screenshots. A crop is an edit — context removed on purpose.',
              'Burner/anonymous accounts doing the loudest posting. Anonymity is where courage goes to fake itself.',
              'People "just asking questions" to keep it going. That\'s engagement farming on your pain.',
            ]}
            move={[
              'Don\'t feed it. No public clapbacks, no paragraph responses, no "addressing it" on your story. Silence starves a pile-on faster than any comeback.',
              'Document BEFORE you block: screenshot the posts, usernames, dates. If it escalates, you\'ll want receipts — schools and police can\'t act on "it got deleted."',
              'Block and report on every platform. Reporting isn\'t snitching; it\'s using the tool built for exactly this.',
              'Tell someone — parent, counselor, coach, any adult with standing. Schools have real obligations on harassment (many states require them to act, even for off-campus online bullying that disrupts school).',
              'Know when it crosses into crime: direct threats of violence, posting your address (see doxxing below), demands for money, or sexual images. That\'s no longer "drama" — that\'s police territory, and your receipts matter.',
            ]}
            receipt={
              <p>
                Every state has some form of cyberbullying or harassment law, and most schools
                are required to have a response policy. The kids who get help are the ones with
                documentation and an adult in the loop — not the ones who fought it out in the comments.
              </p>
            }
          />

          <TipCard title="If You're Watching It Happen to Someone Else">
            <p className="mb-2">
              Bystanders decide how long a pile-on lasts. You don't have to white-knight in the
              comments — that often makes it worse. What actually helps:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>DM the person privately: "this is messed up, I'm not part of it, you good?" That one message punches a hole in the isolation — which is the thing that does the real damage.</li>
              <li>Report the posts yourself. Reports from multiple accounts move faster.</li>
              <li>Don't share, don't react, don't lurk-refresh. Numbers are oxygen.</li>
              <li>If threats or self-harm signals show up, tell an adult immediately — that's above everyone's pay grade, including yours.</li>
            </ul>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION D: DOXXING & SWATTING */}
      <AccordionSection title="DOXXING & SWATTING" badge="critical">
        <div className="space-y-4">
          <ScenarioCard
            title="FROM GAMERTAG TO FRONT DOOR"
            platform="Gaming lobbies, Twitter/X, Discord"
            badge="critical"
            setup={
              <p>
                You beef with someone in a lobby or a comment section. They decide to make it
                personal. Your gamertag matches your Instagram handle. Your Instagram has your
                city and your face. A $2 data-broker search on your name + city returns your
                address, your parents' names, and your phone number. Twenty minutes, start to finish.
              </p>
            }
            hook={
              <p>
                They post it all — "dropping his info" — and now strangers have your address.
                The nightmare version is <span className="text-la-white">swatting</span>: someone
                calls 911 claiming there's a hostage situation at your address, and armed police
                show up at your door expecting one. People have died from swatting calls. Over
                video game arguments.
              </p>
            }
            tells={[
              'Someone in an argument suddenly hints they know your real name or city. That\'s the windup.',
              '"Nice house" + a street name, or a photo of your own block sent to you.',
              'A rush of new followers/friend requests right after beef — that\'s recon.',
            ]}
            move={[
              'Prevention is 90% of this fight: unique gamertags that don\'t link to your real socials, city-only-never-block location habits, and data broker opt-outs (Spokeo, Whitepages, FastPeopleSearch — our Checklist has the steps) so the $2 search comes back empty.',
              'If doxxed: screenshot everything, report the posts (doxxing violates every major platform\'s rules and they do remove it), and lock your accounts down to private.',
              'Tell your parents THAT DAY — not because you\'re in trouble, but because the whole household is now involved and they need to not be blindsided.',
              'If you stream, game competitively, or the beef involved swatting threats: call your local police non-emergency line and ask to put a "swatting concern" note on your address. Many departments do this now, and it changes how they respond to a call about your house.',
            ]}
            receipt={
              <p>
                A serial swatter was sentenced to 20 years in federal prison after a 2017
                swatting call in Wichita got an innocent man killed over a $1.50 Call of Duty
                bet. This is the single dumbest way anyone has ever gotten hurt over a video
                game — don't be on either side of it.
              </p>
            }
          />
        </div>
      </AccordionSection>

      {/* SECTION E: TRACKERS, STALKERWARE & THE EX FACTOR */}
      <AccordionSection title="TRACKERS, STALKERWARE & THE EX FACTOR" badge="important">
        <div className="space-y-4">
          <TipCard title="AirTags & Tile: When Finding Becomes Following" badge="important">
            <p className="mb-2">
              Item trackers are $25 and the size of a coin, and they've been used to follow
              people home from gyms, parties, and parking lots — slipped into a bag, a hoodie
              pocket, a car bumper.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">iPhone:</span> alerts you automatically ("AirTag Found Moving With You"). Never ignore it. Tap the alert → Play Sound → find it. You can tap it with your phone (NFC) to see its serial number — police can trace the owner from that.</li>
              <li><span className="text-la-white">Android:</span> has automatic unknown-tracker alerts too. You can also run a manual sweep: Settings → Safety & emergency → Unknown tracker alerts → Scan.</li>
            </ul>
            <p>
              If you find one that isn't yours: don't destroy it immediately — it's evidence.
              Get somewhere safe (not straight home), then involve police, especially if you
              have any idea who planted it.
            </p>
          </TipCard>

          <TipCard title="Stalkerware: The App You Didn't Install" badge="critical">
            <p className="mb-2">
              Stalkerware is spyware sold as "family monitoring" — it forwards texts, location,
              photos, and calls to whoever installed it. It shows up disproportionately in
              relationships: a jealous partner "borrows" your phone for ten minutes, and now
              they read everything. Signs worth checking:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Someone knows things they shouldn't — conversations, locations, plans.</li>
              <li>Battery draining fast, phone running hot while idle.</li>
              <li>On iPhone: Settings → check for unknown "Device Management" profiles. On Android: Settings → Apps → look for apps you don't recognize with Accessibility or Device Admin permissions.</li>
              <li>Your accounts show logins from devices you don't own (Google: myaccount.google.com → Security → Your devices).</li>
            </ul>
            <p>
              The reliable fix is a factory reset plus changing every password from a different,
              clean device. And if the person who did it is someone you're with —
              that's not a tech problem. Surveillance is control, and control is abuse.
              The National Domestic Violence Hotline (thehotline.org, 800-799-7233) deals with
              exactly this, at every age.
            </p>
          </TipCard>

          <TipCard title="The Post-Breakup Digital Audit" badge="free">
            <p className="mb-3">
              Nobody talks about this until an ex is reading their messages. The day a
              relationship ends — any relationship, at any age — run this list. It takes 20 minutes:
            </p>
            <StepList steps={[
              'Change the passwords they knew — and be honest with yourself about which ones they knew. Phone PIN counts. Especially the phone PIN.',
              'Check location sharing: Find My (iPhone: Settings → your name → Find My → Share My Location), Google Maps sharing, Snap Map, Life360. Remove them everywhere.',
              'Kick out logged-in sessions: Netflix, Spotify, Instagram, Google — every service has a "sign out other devices" button. Use it. Shared streaming logins are how exes keep a window open.',
              'Check account recovery settings: is their phone number or email still a recovery option on YOUR accounts? That\'s a master key. Remove it.',
              'Smart home: if they had access to your Ring, Nest, Alexa, or smart locks (or you had a shared home), remove their account access and change codes. Smart-home stalking by exes is a real, documented pattern.',
              'Check for trackers and stalkerware (cards above) if the breakup was ugly or they\'re acting like they know too much.',
            ]} />
          </TipCard>
        </div>
      </AccordionSection>
    </PageWrapper>
  );
};

export default SocialMediaSafety;
