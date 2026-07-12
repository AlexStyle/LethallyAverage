import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import AccordionSection from '../components/Security/AccordionSection';
import TipCard from '../components/Security/TipCard';
import WarningBanner from '../components/Security/WarningBanner';
import StepList from '../components/Security/StepList';
import ScenarioCard from '../components/Security/ScenarioCard';
import SecurityNav from '../components/Security/SecurityNav';
import GlitchText from '../components/UI/GlitchText';

const WhenItHappens = () => {
  return (
    <PageWrapper>
      <GlitchText as="h1" className="text-5xl md:text-6xl text-la-white mb-4">
        WHEN IT HITS THE FAN
      </GlitchText>
      <p className="font-body text-sm text-la-muted mb-6 max-w-2xl">
        Every other page teaches prevention. This one is for the day prevention
        fails — because eventually, for everyone, it does. Companies call this
        "incident response." We call it knowing exactly what to do in the first
        hour, because the first hour decides how bad it gets.
      </p>
      <SecurityNav />

      {/* SECTION A: HACKED ACCOUNT */}
      <AccordionSection title="YOUR ACCOUNT GOT HACKED" badge="critical" defaultOpen>
        <div className="space-y-4">
          <WarningBanner>
            Order matters. Attackers who take one account immediately go for your{' '}
            <strong>email</strong>, because email resets every other password you own. Whatever
            got hacked first — Instagram, Xbox, whatever — you secure your{' '}
            <strong>email first</strong>, then work outward.
          </WarningBanner>

          <TipCard title="The First-Hour Playbook" badge="critical">
            <StepList steps={[
              'Get on a clean device. If you suspect your computer has malware, use your phone (or a family member\'s device) for recovery — otherwise you\'re typing new passwords into the same keylogger.',
              'Secure your EMAIL first: change the password, then check Settings for forwarding rules and filters you didn\'t create. Attackers add a rule that silently forwards "password reset" emails to themselves — it\'s how they get back in AFTER you change the password. Gmail: Settings → Forwarding / Filters. Outlook: Settings → Mail → Rules.',
              'Kick out every logged-in session. Google: myaccount.google.com → Security → Your devices → sign out. Instagram: Settings → Accounts Center → Password and security → Where you\'re logged in. Every big service has this button.',
              'Now change the password on the account that actually got hacked, and turn on 2FA (an authenticator app, or better, a passkey).',
              'Check the damage: sent messages you didn\'t send (warn those people — they\'re being phished in your name), changed recovery emails/phone numbers, connected apps you don\'t recognize (revoke them), purchases.',
              'Change the same password ANYWHERE else you used it. This is the moment you learn why password reuse is the real villain — one breach, many doors.',
            ]} />
          </TipCard>

          <TipCard title="Locked Out Completely? Recovery Paths" badge="important">
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">Google:</span> g.co/recover — works best from a device and location you've used before. Answer what you can; partial answers still count.</li>
              <li><span className="text-la-white">Instagram:</span> instagram.com/hacked — handles password changes, email swaps, and identity verification (they'll ask for a video selfie if your face is in your photos).</li>
              <li><span className="text-la-white">Microsoft/Xbox:</span> account.live.com/acsr — the recovery form. Fill it from a device you've logged in on before.</li>
              <li><span className="text-la-white">Snapchat, TikTok, Discord:</span> all have "my account was hacked" support flows — search "[platform] hacked account" and use ONLY the official domain. Sketchy "account recovery services" on Instagram and TikTok are scammers charging you to do nothing (or to steal the account twice).</li>
            </ul>
            <p>
              Speed matters more than perfection. A hacked account that's reported within hours
              is usually recoverable. One that sat for weeks while the attacker changed every
              recovery option is much harder.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION B: STOLEN PHONE */}
      <AccordionSection title="YOUR PHONE GOT SNATCHED" badge="critical">
        <div className="space-y-4">
          <ScenarioCard
            title="THE SHOULDER-SURF SNATCH"
            platform="Trains, bars, streets — everywhere"
            badge="critical"
            setup={
              <p>
                This is the attack that made police departments start issuing warnings: a thief
                (or a friendly stranger at a party) <span className="text-la-white">watches you
                type your passcode first</span>. Then the phone gets snatched — out of your hand
                on the train, off the table, from your pocket.
              </p>
            }
            hook={
              <p>
                With your passcode + your phone, they don't just have a device — on a default
                setup they can change your Apple ID or Google password <em>using the passcode
                alone</em>, lock YOU out of your own account, turn off Find My, read your 2FA
                codes, and open banking apps. People have lost their entire digital life and
                five figures in savings in under an hour. The phone was never the target. The
                passcode was.
              </p>
            }
            tells={[
              'Someone hovering close while you unlock — on transit, in lines, at parties.',
              '"Can I borrow your phone to make a call real quick?" then walking off — or handing it back after 30 seconds you didn\'t watch.',
              'In group settings: someone watching hands, not faces.',
            ]}
            move={[
              'Turn on the built-in defense TODAY. iPhone: Settings → Face ID & Passcode → Stolen Device Protection → ON (it forces Face ID + a one-hour delay for account changes away from home). Android: Settings → Google → All services → Theft protection → turn on Theft Detection Lock and Offline Device Lock.',
              'Use Face ID / fingerprint in public so there\'s no passcode to watch. Your face can\'t be shoulder-surfed.',
              'Make the passcode alphanumeric (Settings → Change Passcode → Passcode Options), not 6 digits. Harder to catch over your shoulder in one glance.',
              'Don\'t keep your banking app and your 2FA codes protected by nothing but the same passcode that unlocks the phone — set app-level locks (most banking apps + Aegis/2FAS support their own PIN or biometric).',
            ]}
            receipt={
              <p>
                The Wall Street Journal's 2023 investigation into passcode thefts in NYC and
                Minneapolis documented victims losing bank balances, Apple accounts, and years
                of photos in minutes — and it's exactly why Apple built Stolen Device Protection
                in the first place. The setting exists because this happens constantly. Turn it on.
              </p>
            }
          />

          <TipCard title="Phone's Gone. First 30 Minutes:" badge="critical">
            <StepList steps={[
              'From any browser: icloud.com/find (iPhone) or android.com/find (Android). Mark it Lost/Secure it — this locks the phone and kills Apple Pay/Google Pay on it.',
              'Call your carrier and suspend the line. This stops texted 2FA codes from landing on the stolen phone — which is the thief\'s next move.',
              'Change your Apple ID / Google password from another device — before the thief does.',
              'Then your banking apps and email password, in that order.',
              'If it\'s clearly stolen (not lost), file a police report — you\'ll want the report number for insurance and for your carrier\'s records.',
              'Once you\'re SURE it\'s not coming back: remote wipe it from the same Find My page. Wipe last, not first — a wiped phone can\'t be tracked.',
            ]} />
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION C: IDENTITY THEFT & CREDIT FREEZES */}
      <AccordionSection title="IDENTITY THEFT & THE CREDIT FREEZE" badge="critical">
        <div className="space-y-4">
          <TipCard title="The Freeze: The Best Free Security Move Nobody Tells You About" badge="free">
            <p className="mb-2">
              Your Social Security number has been in enough corporate breaches that you should
              assume criminals already have it. What stops them from opening a credit card or a
              phone plan in your name isn't secrecy — it's a{' '}
              <span className="text-la-white">credit freeze</span>: a lock on your credit file
              that makes it impossible to open new credit as you, until you unfreeze it.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>It's <span className="text-la-white">free by federal law</span>. Anyone charging you is a scam.</li>
              <li>It takes ~15 minutes total, online, at all three bureaus: <span className="text-la-white">Equifax</span> (equifax.com/personal/credit-report-services), <span className="text-la-white">Experian</span> (experian.com/freeze), <span className="text-la-white">TransUnion</span> (transunion.com/credit-freeze). You need all three — a thief only needs one unfrozen bureau.</li>
              <li>It does NOT affect your credit score, your existing cards, or your ability to use credit you already have.</li>
              <li>Need a loan or new card later? Unfreeze online in minutes (save the PINs/logins in your password manager), then refreeze.</li>
            </ul>
            <p>
              <span className="text-la-white">If you just turned 18:</span> freeze your credit
              this week. You have a blank credit file and probably won't need a loan for years —
              which makes you the perfect victim, because nobody's watching. Freeze it before
              anyone else uses it. Parents:{' '}
              <span className="text-la-white">you can freeze your kids' credit too</span> — child
              identity theft usually isn't discovered until the kid applies for their first
              loan at 18 and finds out their credit was destroyed at age 9.
            </p>
          </TipCard>

          <TipCard title="Signs Someone Is Already Using Your Identity" badge="important">
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Collection calls or letters for debts you never opened.</li>
              <li>Mail about credit cards, loans, or unemployment claims you didn't apply for.</li>
              <li>Denied for a first card/apartment because of "your history" — when you don't have one.</li>
              <li>IRS letters about income from a job you never had.</li>
            </ul>
            <p className="mb-2">If any of that happens:</p>
            <StepList steps={[
              'Go to identitytheft.gov (the FTC\'s official site). It builds your personal recovery plan and generates the affidavit letters for you — free.',
              'Freeze all three bureaus immediately if you haven\'t.',
              'Pull your free credit reports at annualcreditreport.com (the only official free site) and dispute every account that isn\'t yours.',
              'File a police report if accounts were opened — some creditors require it to clear the debt.',
            ]} />
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION D: BACKUPS */}
      <AccordionSection title="BACKUPS — THE ACTUAL CHEAT CODE" badge="important">
        <div className="space-y-4">
          <WarningBanner>
            Real talk: you are far more likely to lose your data to a{' '}
            <strong>cracked screen, a stolen phone, or a dead hard drive</strong> than to a hacker.
            And against ransomware — the attack where your files get encrypted and held hostage —
            a backup is the ONLY defense that makes the ransom irrelevant. There is no page on
            this site with a better effort-to-payoff ratio than this one.
          </WarningBanner>

          <TipCard title="3-2-1 in Plain English" badge="important">
            <p className="mb-2">
              The pros use a rule called <span className="text-la-white">3-2-1</span>:{' '}
              <span className="text-la-white">3</span> copies of anything that matters,{' '}
              on <span className="text-la-white">2</span> different kinds of storage,{' '}
              with <span className="text-la-white">1</span> copy somewhere else (not your house).
              A copy on your laptop + a copy on an external drive + a copy in the cloud = done.
              Fire, theft, ransomware, spilled soda — no single disaster can take all three.
            </p>
            <p>
              For most people the honest version is even simpler: turn on phone cloud backup +
              keep one external drive for the computer. That alone puts you ahead of 90% of adults.
            </p>
          </TipCard>

          <TipCard title="Set It Up Once, Never Think About It Again" badge="free">
            <ul className="list-disc list-inside space-y-2">
              <li><span className="text-la-white">iPhone:</span> Settings → your name → iCloud → iCloud Backup → ON. Free tier is 5GB, which is tight — the 50GB tier is $0.99/month, less than one bacon-egg-and-cheese, for every photo you've ever taken being unloseable.</li>
              <li><span className="text-la-white">Android:</span> Settings → Google → Backup → ON. Google gives 15GB free; photos back up through Google Photos.</li>
              <li><span className="text-la-white">Windows:</span> plug in an external drive (a 1TB drive is ~$50) → Settings → search "Backup" → File History → ON. It backs up automatically whenever the drive is connected.</li>
              <li><span className="text-la-white">Mac:</span> same drive → System Settings → Time Machine → ON. Done.</li>
              <li><span className="text-la-white">Once a year:</span> actually try restoring one file. A backup you've never tested is a hope, not a backup — this is the part even IT departments skip, and it burns them.</li>
            </ul>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION E: WHO TO TELL */}
      <AccordionSection title="WHO TO TELL — THE REPORTING MAP" badge="important">
        <div className="space-y-4">
          <TipCard title="Where Reports Actually Go" badge="free">
            <ul className="list-disc list-inside space-y-2">
              <li><span className="text-la-white">Money stolen online / scams / hacking:</span> ic3.gov — the FBI's Internet Crime Complaint Center. This is where cases get built; your report might be the one that connects a pattern.</li>
              <li><span className="text-la-white">Scams & fraud (general):</span> reportfraud.ftc.gov. Feeds the FTC database that investigators and journalists use.</li>
              <li><span className="text-la-white">Identity theft:</span> identitytheft.gov — recovery plan + official affidavits.</li>
              <li><span className="text-la-white">Sextortion / intimate images of anyone under 18:</span> takeitdown.ncmec.org to block images, CyberTipline.org or tips.fbi.gov to report. Full walkthrough on our <Link to="/security/social-media" className="text-la-red hover:text-la-gold underline underline-offset-2">Your Feed Is Snitching</Link> page.</li>
              <li><span className="text-la-white">Fraud on your bank/Cash App/Zelle:</span> the bank itself, immediately — many fraud protections have reporting deadlines measured in days.</li>
              <li><span className="text-la-white">Local police:</span> stolen devices, doxxing with threats, swatting risk, stalking. Ask for the report number every time — it's the receipt that makes insurance and follow-ups real.</li>
            </ul>
          </TipCard>

          <TipCard title="The No-Shame Rule" badge="important">
            <p>
              Every hour someone waits to report or ask for help, the damage compounds — money
              moves offshore, accounts change hands, images spread. The single biggest predictor
              of a good outcome isn't how smart the victim is. It's how FAST they told someone.
              Scammers know this, which is exactly why every scam script includes a reason to
              keep it secret ("don't tell anyone, they'll freeze the deal"). Secrecy is their
              armor. Take it away.
            </p>
          </TipCard>
        </div>
      </AccordionSection>
    </PageWrapper>
  );
};

export default WhenItHappens;
