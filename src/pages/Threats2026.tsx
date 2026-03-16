import PageWrapper from '../components/Layout/PageWrapper';
import AccordionSection from '../components/Security/AccordionSection';
import TipCard from '../components/Security/TipCard';
import WarningBanner from '../components/Security/WarningBanner';
import StepList from '../components/Security/StepList';
import GlitchText from '../components/UI/GlitchText';

const Threats2026 = () => {
  return (
    <PageWrapper>
      <GlitchText as="h1" className="text-5xl md:text-6xl text-la-white mb-4">
        WHAT'S NEW & DANGEROUS IN 2026
      </GlitchText>
      <p className="font-body text-sm text-la-muted mb-10 max-w-2xl">
        The threats change every year. This page covers what's actively being
        used against regular people right now — not hypotheticals, not sci-fi.
        Real scams, real attacks, real defenses.
      </p>

      {/* 1. AI-POWERED PHISHING */}
      <AccordionSection title="AI-POWERED PHISHING" badge="critical" defaultOpen>
        <div className="space-y-4">
          <WarningBanner>
            Remember when you could spot a scam email by the bad spelling and "Dear Sir/Madam"?
            Those days are over. AI can now write perfect, personalized scam messages that look
            exactly like real ones. The game changed.
          </WarningBanner>

          <TipCard title="Voice Cloning: They Can Sound Like Your Mom" badge="critical">
            <p className="mb-2">
              AI voice cloning tools can copy someone's voice from just a few seconds of audio.
              A voicemail greeting, a TikTok video, an Instagram story — that's enough. Scammers
              are using cloned voices to call people pretending to be family members: "Mom, I'm in
              trouble, I need money right now."
            </p>
            <p className="mb-2">
              These calls sound real enough to fool parents and grandparents because the voice
              matches AND the scammer creates panic so you act before you think.
            </p>
            <p>
              <span className="text-la-white">The fix: create a family safe word.</span> Pick a
              random word or phrase that only your family knows — like "purple dinosaur" or whatever.
              If someone calls claiming to be family and asking for money or help, ask for the safe
              word. No safe word = hang up and call them back on their real number. Talk about this
              at dinner tonight. It sounds extra until you realize this scam has stolen millions.
            </p>
          </TipCard>

          <TipCard title="Deepfake Video Calls: Fake Faces on Real Screens" badge="critical">
            <p className="mb-2">
              In 2024, a worker in Hong Kong was tricked into sending $25 million after a video
              call where every single person on the screen was AI-generated. The "CFO" and
              "coworkers" were all deepfakes. This isn't a movie plot — it actually happened.
            </p>
            <p className="mb-2">
              In 2026, the tech is even better. Consumer tools can create real-time deepfake video
              that works on Zoom, Teams, and Google Meet. The quality isn't perfect, but on a
              compressed video call? Hard to tell.
            </p>
            <p>
              <span className="text-la-white">How to protect yourself:</span> If someone asks you
              to do anything unusual on a video call (send money, share passwords, approve access),
              stop and verify. Call them back on a number you already have. Ask them to do something
              unexpected — hold up a specific number of fingers, turn their head quickly (deepfakes
              sometimes glitch with sudden movements).
            </p>
          </TipCard>

          <TipCard title="AI-Written Scam Messages: No More Typos" badge="important">
            <p className="mb-2">
              Scammers used to send millions of sloppy emails hoping a few people would fall for
              them. Now AI lets them create messages that are:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Perfectly written — no grammar mistakes, no weird formatting</li>
              <li>Personalized to YOU — they pull info from your social media (your job, your school, your interests)</li>
              <li>Context-aware — "Following up on that post you shared about..." makes it feel real</li>
              <li>Available in any language — global scams that sound local</li>
              <li>Unique each time — so email filters can't catch patterns</li>
            </ul>
            <p>
              The defense is the same as always, just more important now:{' '}
              <span className="text-la-white">never click links in messages you didn't expect.</span>{' '}
              Go to websites directly. If someone says they're from your bank, open a new tab and
              log in yourself. Don't trust — verify.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* 2. QR CODE ATTACKS */}
      <AccordionSection title="QR CODE ATTACKS (QUISHING)" badge="critical">
        <div className="space-y-4">
          <TipCard title="QR Codes: Invisible Links You Can't Preview" badge="critical">
            <p className="mb-2">
              Since COVID, QR codes are everywhere — menus, payments, parking meters, event tickets.
              We've all been trained to just scan and go without thinking. Attackers know this.
            </p>
            <p className="mb-2">
              <span className="text-la-white">A QR code is just a link in disguise.</span> You
              can't see where it goes until you scan it. Attackers are placing fake QR code stickers
              over real ones in public places:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-red">Parking meters</span> — fake sticker over the real one. You think you're paying for parking but you're giving your card info to a scammer.</li>
              <li><span className="text-la-red">Restaurant tables</span> — fake QR code looks like the ordering system but steals your payment info.</li>
              <li><span className="text-la-red">Fake delivery notices</span> — "Scan to reschedule your package" — leads to malware or a phishing site.</li>
              <li><span className="text-la-red">EV chargers</span> — fake QR codes on charging stations redirect to payment scam sites.</li>
            </ul>
          </TipCard>

          <TipCard title="How to Stay Safe with QR Codes" badge="important">
            <p className="mb-2">
              You don't have to stop using QR codes — just be smart about it:
            </p>
            <StepList steps={[
              'Use your phone\'s built-in camera to scan — it shows you the URL before opening it. Don\'t download random QR scanner apps.',
              'Actually read the URL preview. "cityparkingpay.com" is legit. "city-parking-pay-secure.xyz" is not.',
              'Look for stickers on top of stickers. If a QR code looks like it was slapped on after the fact, skip it.',
              'For parking and payments, use the official app or website instead of scanning a random code.',
              'If you get mail with a QR code you didn\'t expect, don\'t scan it. Go to the company\'s website directly.',
            ]} />
            <p className="mt-3">
              When in doubt: type the URL manually. 10 extra seconds beats getting scammed.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* 3. SIM SWAP EPIDEMIC */}
      <AccordionSection title="SIM SWAP ATTACKS" badge="critical">
        <div className="space-y-4">
          <WarningBanner>
            Your phone number is like a master key to your digital life. If someone steals it, they
            can get into your email, your bank, your social media — everything that sends
            verification codes to your phone. And stealing a phone number is way easier than you think.
          </WarningBanner>

          <TipCard title="How SIM Swaps Work (In Plain English)" badge="critical">
            <p className="mb-2">
              Here's how it goes down: An attacker calls your phone carrier (T-Mobile, AT&T, Verizon,
              etc.) and pretends to be you. They say "I lost my phone, I need my number moved to a
              new SIM card." If the carrier employee falls for it, your phone suddenly shows "No
              Service" — because your number now belongs to the attacker's phone.
            </p>
            <p className="mb-2">
              Now they get all your texts, including those verification codes your bank and email
              send. They reset your email password via text → use your email to reset your bank
              password → drain your accounts. The whole thing can happen in under an hour.
            </p>
            <p>
              <span className="text-la-red">Red flag:</span> If your phone randomly shows "No
              Service" or "SOS Only" when you normally have signal, call your carrier from another
              phone IMMEDIATELY. Every minute counts.
            </p>
          </TipCard>

          <TipCard title="Lock Down Your Phone Number — Do This Today" badge="critical">
            <p className="mb-2">
              Every major carrier lets you add a PIN or lock that prevents anyone from moving your
              number without that PIN. Set this up right now:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-2">
              <li>
                <span className="text-la-white">T-Mobile:</span> Log into your account → enable "Account Takeover Protection." Set a strong account PIN (don't use the last 4 of your social). Call 611 and ask for a "Port Validation" passcode.
              </li>
              <li>
                <span className="text-la-white">AT&T:</span> Log into myAT&T → Profile → Sign-in info → enable "Extra Security." Set a passcode that's required for any account changes.
              </li>
              <li>
                <span className="text-la-white">Verizon:</span> Open the My Verizon app → Account → Security → turn on "Number Lock." This completely prevents your number from being moved until you turn it off.
              </li>
              <li>
                <span className="text-la-white">Metro/Cricket/Boost:</span> Call customer service and ask to add a PIN or port freeze to your account.
              </li>
            </ul>
          </TipCard>

          <TipCard title="Stop Using Text Messages for 2FA" badge="important">
            <p className="mb-2">
              Text-message verification codes are better than nothing, but they're the weakest form
              of 2FA because SIM swaps completely bypass them. Here's how to upgrade:
            </p>
            <StepList steps={[
              'Make a list of every account that sends you verification codes by text.',
              'Switch each one to an authenticator app instead. Good free options: Aegis (Android), 2FAS (both), Ente Auth (both). These generate codes on YOUR device — no text message needed.',
              'For your most important accounts (email, banking), consider a hardware key like YubiKey — it\'s a small USB device that physically proves it\'s you. Can\'t be phished, can\'t be SIM swapped.',
              'Remove your phone number as a backup/recovery option on critical accounts. If an attacker can reset your email via text, everything else falls.',
            ]} />
          </TipCard>
        </div>
      </AccordionSection>

      {/* 4. SMART HOME SUPPLY CHAIN ATTACKS */}
      <AccordionSection title="SKETCHY SMART DEVICES" badge="warning">
        <div className="space-y-4">
          <TipCard title="Some Devices Come Pre-Hacked" badge="warning">
            <p className="mb-2">
              <span className="text-la-white">Supply chain attacks</span> are when someone sneaks
              malicious code into a device before you even buy it — during manufacturing or shipping.
              You unbox a brand-new gadget and it's already compromised.
            </p>
            <p className="mb-2">
              This isn't theory. In 2023, researchers found cheap Android TV boxes sold on Amazon
              (brands like T95, MXQ Pro, AllWinner) that shipped with malware pre-installed. Millions
              of devices, straight from the factory, were secretly part of a{' '}
              <span className="text-la-white">botnet</span> (a network of hacked devices controlled
              by attackers).
            </p>
            <p>
              The lesson: that $15 smart plug from a brand you've never heard of might be cheap for
              a reason. Stick with established brands that have reputations to protect. TP-Link, Kasa,
              and similar known brands are worth the extra few dollars.
            </p>
          </TipCard>

          <TipCard title="Buying Used or Refurbished Smart Devices" badge="warning">
            <p className="mb-2">
              Buying secondhand smart devices (cameras, routers, smart speakers) comes with a risk:
              you don't know what the last owner did with it. It might still be linked to their
              account, might have modified software, or might have been returned because it was
              acting weird.
            </p>
            <StepList steps={[
              'ALWAYS factory reset any used or refurbished smart device before connecting it to your network.',
              'Update the firmware (software) to the latest version from the manufacturer\'s official website.',
              'Create a brand new account for the device — never use the previous owner\'s setup.',
              'If possible, watch the device\'s network activity for the first week to make sure it\'s not sending data somewhere sketchy.',
            ]} />
          </TipCard>

          <TipCard title="New Device? Reset → Update → Isolate" badge="important">
            <p className="mb-2">
              Every new smart device — whether it's brand new, refurbished, or a gift — should go
              through three steps before you trust it on your network:
            </p>
            <StepList steps={[
              'Factory reset it. This wipes any tampering that happened after manufacturing.',
              'Update the firmware immediately. Go to the manufacturer\'s website and get the latest version.',
              'Put it on your guest/IoT network — NOT your main network. This way, even if the device is compromised, it can\'t reach your personal devices.',
            ]} />
            <p className="mt-3">
              Make this muscle memory: <span className="text-la-gold">reset, update, isolate.</span>{' '}
              Three steps. Every device. Every time.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* 5. APARTMENT BUILDING SMART SYSTEMS */}
      <AccordionSection title="SMART BUILDING RISKS" badge="warning">
        <div className="space-y-4">
          <TipCard title="Your Building's Systems Might Not Be Secure" badge="warning">
            <p className="mb-2">
              Modern apartment buildings run on computer systems that control the HVAC (heating
              and cooling), lighting, elevators, door access, and fire alarms. These are called{' '}
              <span className="text-la-white">Building Automation Systems (BAS)</span>.
            </p>
            <p className="mb-2">
              Here's the problem: many of these systems were designed decades ago, before cybersecurity
              was a concern. They got connected to the internet later without adding proper security.
              A researcher once took over a hotel's entire heating/cooling system from the guest WiFi.
              The same thing can happen in apartment buildings.
            </p>
            <p>
              You can't fix your building's systems, but you should know they exist — and it's
              another reason to run your own router instead of trusting the building's network.
            </p>
          </TipCard>

          <TipCard title="What to Ask Your Building Manager" badge="important">
            <p className="mb-2">
              You don't need to be a tech expert to hold your building accountable. Send these
              questions in an email (so there's a written record):
            </p>
            <StepList steps={[
              '"Is the building automation system on a separate network from tenant internet?" If they say no or don\'t understand the question, that\'s a red flag.',
              '"When was building network equipment last updated?" Should be within the past 6 months.',
              '"Who can access security camera footage, and how long is it kept?"',
              '"Are tenants\' internet connections isolated from each other?"',
            ]} />
            <p className="mt-3">
              These are reasonable questions, not confrontational ones. And just asking them shows
              that someone is paying attention — which often motivates buildings to take action.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* 6. PRIVACY LAWS IN 2026 */}
      <AccordionSection title="YOUR PRIVACY RIGHTS IN 2026" badge="important">
        <div className="space-y-4">
          <TipCard title="Companies Have to Delete Your Data If You Ask" badge="important">
            <p className="mb-2">
              Multiple states now have privacy laws that give you the right to tell companies:
              "delete everything you have on me." They have to comply within 30-45 days. This
              applies to:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Data broker sites (Spokeo, WhitePages, BeenVerified)</li>
              <li>Social media platforms</li>
              <li>Shopping sites and loyalty programs</li>
              <li>Apps you signed up for but don't use anymore</li>
              <li>Your old building management company</li>
            </ul>
            <p>
              Look for the "Privacy" or "Do Not Sell My Info" link at the bottom of any website.
              It's usually there — companies are required to include it.
            </p>
          </TipCard>

          <TipCard title="NYC: Your Building Can't Spy on You" badge="important">
            <p className="mb-2">
              If you live in NYC, you have specific protections:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Buildings must tell you about ALL data collection before you sign a lease.</li>
              <li>Facial recognition in your building requires your explicit consent — you can say no.</li>
              <li>You can request to see what data your building has on you and ask them to delete it.</li>
              <li>If your building has a data breach, they must tell you within 72 hours.</li>
            </ul>
            <p>
              If your building hasn't told you about their data collection, they may be breaking
              the law. You can file a complaint with the NYC Office of Technology and Innovation.
            </p>
          </TipCard>

          <TipCard title="Biometric Privacy: Your Face and Fingerprints Have Legal Protection" badge="important">
            <p className="mb-2">
              Illinois has a law called <span className="text-la-white">BIPA</span> (Biometric
              Information Privacy Act) that's the strongest in the country. If a company scans
              your face, fingerprint, or voice without your written permission, you can sue them.
            </p>
            <p className="mb-2">
              This law has resulted in massive payouts — Facebook paid $650 million, TikTok paid
              $92 million. Similar laws are spreading to other states like Texas and Washington.
            </p>
            <p>
              Bottom line: companies need your permission to collect biometric data. If an app or
              building is scanning your face without asking, they might be breaking the law.
            </p>
          </TipCard>

          <TipCard title="Free Tools to Take Control of Your Data" badge="free">
            <p className="mb-2">
              You don't need to pay anyone to exercise your privacy rights. These tools are free:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="text-la-white">JustDeleteMe:</span> Links to delete your account on hundreds of services, ranked by difficulty.</li>
              <li><span className="text-la-white">Permission Slip (Consumer Reports):</span> Free app that sends data deletion requests to companies for you.</li>
              <li><span className="text-la-white">Have I Been Pwned:</span> Check if your email appeared in any data breaches. Sign up for alerts so you know when it happens.</li>
              <li><span className="text-la-white">SimpleLogin / DuckDuckGo Email:</span> Use email aliases going forward so you can cut off data collection at the source.</li>
            </ul>
          </TipCard>
        </div>
      </AccordionSection>

      {/* 7. THE AI DEVICE WAVE */}
      <AccordionSection title="AI DEVICES: THE NEW PRIVACY TRADEOFF" badge="advanced">
        <div className="space-y-4">
          <TipCard title="AI Wearables and Gadgets: Cool But Risky" badge="advanced">
            <p className="mb-2">
              2024-2026 brought a wave of AI-powered devices: the Rabbit R1, Humane AI Pin, Meta
              Ray-Ban smart glasses, and more. They promise to replace your phone with an AI
              assistant you wear or carry. The tech is cool. The privacy situation? Not so much.
            </p>
            <p className="mb-2">
              These devices are basically always-on cameras and microphones that send everything
              to company servers for AI processing. The Rabbit R1 routes every single interaction
              through Rabbit's servers. Meta's glasses can record video and send it to Meta.
            </p>
            <p>
              Before buying any AI gadget, ask yourself:{' '}
              <span className="text-la-white">Where does my data go? Can I use it offline? Can I
              delete my data? What happens if the company shuts down?</span> If you can't get clear
              answers, think twice.
            </p>
          </TipCard>

          <TipCard title="What AI Devices Actually Collect" badge="important">
            <p className="mb-2">
              Regular devices (your phone, laptop) collect data, but you have some control — you
              can turn off permissions, use private browsing, install blockers. AI devices are
              different because they NEED your data to work:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">Everything you say</span> — commands, questions, and background noise picked up by the mic</li>
              <li><span className="text-la-white">Everything you see</span> — photos and video of your surroundings (including people who didn't agree to be recorded)</li>
              <li><span className="text-la-white">Where you go</span> — location tracking, how long you stay places, your daily patterns</li>
              <li><span className="text-la-white">How you use it</span> — what you ask, when, how often. All of this trains their AI models.</li>
            </ul>
            <p>
              The deal is simple: these devices give you convenience in exchange for your data.
              Just make sure you understand that deal before you agree to it.
            </p>
          </TipCard>

          <TipCard title="How to Opt Out of AI Training" badge="important">
            <p className="mb-2">
              Many companies use your interactions to train their AI. Your conversations, photos,
              and habits become training data that improves their products (and profits them, not
              you). Here's how to opt out where you can:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">ChatGPT:</span> Settings → Data Controls → turn off "Improve the model for everyone"</li>
              <li><span className="text-la-white">Google:</span> Go to myactivity.google.com → turn off Web & App Activity</li>
              <li><span className="text-la-white">Meta/Instagram:</span> Settings → Privacy → check AI data settings. Meta is aggressive about using your posts for AI training.</li>
              <li><span className="text-la-white">Apple:</span> Settings → Privacy → Analytics → turn off "Share with Apple"</li>
            </ul>
            <p>
              Fair warning: companies add new data collection with every update, and sometimes your
              settings reset. Check these every few months. And remember:{' '}
              <span className="text-la-gold">if an AI product is free, your data is the payment.</span>{' '}
              That doesn't mean don't use them — just use them with your eyes open.
            </p>
          </TipCard>
        </div>
      </AccordionSection>
    </PageWrapper>
  );
};

export default Threats2026;
