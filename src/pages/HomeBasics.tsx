import PageWrapper from '../components/Layout/PageWrapper';
import AccordionSection from '../components/Security/AccordionSection';
import TipCard from '../components/Security/TipCard';
import WarningBanner from '../components/Security/WarningBanner';
import StepList from '../components/Security/StepList';
import GlitchText from '../components/UI/GlitchText';

const HomeBasics = () => {
  return (
    <PageWrapper>
      <GlitchText as="h1" className="text-5xl md:text-6xl text-la-white mb-4">
        HOME SECURITY 101
      </GlitchText>
      <p className="font-body text-sm text-la-muted mb-10 max-w-2xl">
        After this, you'll know how to lock down your home network, protect your
        devices, and spot scams before they get anywhere near you. No tech degree
        needed — just follow the steps.
      </p>

      {/* SECTION A: ROUTER */}
      <AccordionSection title="YOUR ROUTER IS THE FRONT DOOR" badge="critical" defaultOpen>
        <WarningBanner>
          Think of your router like the front door to your entire digital house. Every device —
          your phone, your laptop, your PlayStation, your smart TV — connects through it.
          If someone gets control of your router, they can see everything on your network.
        </WarningBanner>

        <div className="space-y-4 mt-4">
          <TipCard title="Default Passwords = Unlocked Front Door" badge="critical">
            <p className="mb-2">
              Most routers come with a username and password like <span className="text-la-white">admin/admin</span> or{' '}
              <span className="text-la-white">admin/password</span>. These defaults are published online for
              every router model. Anyone can Google them.
            </p>
            <p className="mb-2">
              That means if you never changed yours, someone on your WiFi (or even nearby) can log into
              your router and control your whole network. It's like leaving your house key under the
              mat — except the mat location is posted on the internet.
            </p>
            <p>
              <span className="text-la-white">What to do:</span> Change both the admin username AND
              password. Important — this is different from your WiFi password. Your WiFi password gets
              you on the network. The admin password controls the router itself.
            </p>
          </TipCard>

          <TipCard title="How to Access Your Router Settings">
            <p className="mb-3">
              Your router has a settings page you've probably never seen. It's where you control
              everything — passwords, security settings, who's connected. Here's how to get there:
            </p>
            <StepList steps={[
              'Connect to your WiFi on any device (phone, laptop, whatever).',
              'Open a browser and type 192.168.1.1 in the address bar. If that doesn\'t work, try 192.168.0.1 — one of these works for most routers.',
              'If neither works, on Windows open Command Prompt and type "ipconfig" — look for "Default Gateway." On Mac, open Terminal and type "ip route." That number is your router\'s address.',
              'Log in with the username and password on the sticker on the bottom of your router. If you never changed them, that\'s exactly what we\'re fixing.',
              'Once you\'re in, change the admin password first thing. Make it long and unique — this is the key to your digital house.',
            ]} />
          </TipCard>

          <TipCard title="WiFi Encryption: WPA3 vs WPA2" badge="important">
            <p className="mb-2">
              <span className="text-la-white">Encryption</span> is what scrambles your WiFi traffic
              so people nearby can't just read it like an open book. There are different levels:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">WPA3</span> — the newest and strongest. Use this if your router supports it.</li>
              <li><span className="text-la-white">WPA2-AES</span> — still solid. If your router doesn't have WPA3, use this.</li>
              <li><span className="text-la-red">WPA or WEP</span> — ancient and breakable. If your router only supports these, it's time for a new router. Seriously.</li>
            </ul>
            <p>
              Check this in your router settings under "Wireless Security" or "WiFi Settings." It
              takes 30 seconds to verify.
            </p>
          </TipCard>

          <TipCard title="Set Up a Guest Network">
            <p className="mb-2">
              Think of your WiFi like your house. Your main network is your bedroom — only
              people you trust get access. A guest network is like the living room — visitors
              can hang out but they can't go through your stuff.
            </p>
            <p className="mb-2">
              Your main WiFi should be for YOUR devices only (phone, laptop, gaming console).
              Everything else — friends visiting, smart home gadgets, that cousin who's always
              asking for the WiFi password — goes on the guest network.
            </p>
            <p>
              Most routers made after 2018 have a guest network option built in. Turn it on, give
              it a different password, and enable <span className="text-la-white">"client isolation"</span>{' '}
              (this stops devices on the guest network from seeing each other or your main devices).
            </p>
          </TipCard>

          <TipCard title="Router Updates: Yes, Your Router Needs Updates Too" badge="important">
            <p className="mb-2">
              Just like your phone gets updates to fix bugs and security holes, your router needs
              them too. The difference? Most routers don't update automatically — you have to do
              it yourself. And almost nobody does.
            </p>
            <StepList steps={[
              'Log into your router settings (you just learned how above).',
              'Look for "Firmware Update," "System Update," or "Administration."',
              'Hit "Check for Updates" and install whatever\'s available.',
              'Set a reminder on your phone to do this every 3 months. It takes 2 minutes.',
            ]} />
          </TipCard>

          <TipCard title="DNS: Control What Your Network Can See" badge="important">
            <p className="mb-2">
              <span className="text-la-white">DNS</span> (Domain Name System) is like the phone book
              of the internet. When you type "youtube.com," DNS translates that into the actual
              server address your device connects to. By default, your internet provider (ISP)
              handles this — and they can see every site you visit.
            </p>
            <p className="mb-2">
              You can switch to a privacy-focused DNS instead. In your router settings, look for
              DNS or Internet/WAN settings and change it to:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">Cloudflare:</span> 1.1.1.1 — fast, private, and doesn't log your browsing</li>
              <li><span className="text-la-white">NextDNS:</span> free account lets you block ads, trackers, and sketchy sites at the network level. Highly recommended for families.</li>
            </ul>
            <p>
              Bonus: NextDNS also works as parental controls if you have younger siblings or kids
              in the house. You can block entire categories of sites without installing anything
              on each device.
            </p>
          </TipCard>

          <WarningBanner>
            <strong>Disable WPS right now.</strong> WPS (Wi-Fi Protected Setup) is that button on
            your router that lets devices connect easily. Problem is, it uses an 8-digit PIN that
            can be cracked in hours. It's basically a back door. Find it in your router settings
            and turn it OFF.
          </WarningBanner>

          <TipCard title="Disable UPnP" badge="critical">
            <p className="mb-2">
              <span className="text-la-white">UPnP</span> (Universal Plug and Play) lets devices on
              your network automatically open doors to the internet — called "ports." It's like
              giving every app in your house the ability to unlock your front door without asking
              you first.
            </p>
            <p className="mb-2">
              Malware loves UPnP because it can punch holes in your network's defenses without you
              ever knowing. Turn it off in your router settings.
            </p>
            <p>
              If something stops working (like online gaming), you can set up{' '}
              <span className="text-la-white">manual port forwarding</span> for just that device.
              It takes 2 minutes and is way safer because you control exactly what's open.
            </p>
          </TipCard>

          <TipCard title="See Everything on Your Network">
            <p className="mb-2">
              You should know every single device connected to your WiFi. If there's something
              you don't recognize, that's a red flag.
            </p>
            <StepList steps={[
              'Log into your router and find "Connected Devices" or "Client List."',
              'Go through every device. Most will show a name like "iPhone" or "DESKTOP-ABC123."',
              'If you see something you don\'t recognize, don\'t panic — it might be a smart plug, a printer, or a streaming stick you forgot about.',
              'If something is truly unknown, block it in your router settings and change your WiFi password just to be safe.',
              'Pro tip: download the Fing app (free) on your phone. It scans your network and shows you everything connected in a way that\'s easier to read than most router pages.',
            ]} />
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION B: DEVICES */}
      <AccordionSection title="YOUR DEVICES" badge="important">
        <div className="space-y-4">
          <TipCard title="Auto-Updates: Keep Them On, Always" badge="important">
            <p className="mb-2">
              Every device you own — phone, laptop, tablet, console — should have automatic
              updates turned on. Updates aren't just about new features or emojis. They fix
              security holes that hackers are actively trying to exploit.
            </p>
            <p>
              Here's a real example: the WannaCry ransomware attack in 2017 locked people out of
              their own computers and demanded payment to get their files back. It exploited a
              Windows bug that Microsoft had already fixed in an update. Everyone who had auto-updates
              on? Fine. Everyone who kept hitting "remind me later"? Encrypted. Don't be that person.
            </p>
          </TipCard>

          <TipCard title="Phone Lock Screen: Make It Stronger" badge="critical">
            <p className="mb-2">
              A 4-digit PIN has only 10,000 possible combinations. Sounds like a lot, but
              specialized tools can crack it fast. Even a 6-digit PIN isn't as strong as you think
              in 2026 — someone watching you type it on the bus is all it takes.
            </p>
            <p>
              Your phone has your entire life on it — messages, banking apps, photos, social media,
              email. Use a longer passphrase or alphanumeric password. It's a little less convenient
              but your phone is worth protecting.
            </p>
          </TipCard>

          <TipCard title="Face ID & Fingerprint: The Tradeoffs">
            <p className="mb-2">
              <span className="text-green-400">The good:</span> Biometrics (Face ID, fingerprint)
              are convenient and hard for someone to steal by watching you. Modern phone biometrics
              are genuinely solid security.
            </p>
            <p className="mb-2">
              <span className="text-la-red">The tricky part:</span> In the US, courts have ruled
              that authorities can make you unlock your phone with your face or fingerprint, but
              they can't force you to give up a password (that's protected by the 5th Amendment).
            </p>
            <p>
              Good to know: on iPhone, press the side button 5 times quickly to temporarily disable
              Face ID and require the passcode. It's a good thing to know, just in case.
            </p>
          </TipCard>

          <TipCard title="Disk Encryption: Protect Your Files If Your Device Gets Stolen" badge="important">
            <p className="mb-2">
              If someone steals your laptop, can they read your files? Without encryption — yes,
              easily. They can pull out the hard drive and plug it into another computer like a USB
              stick. Encryption scrambles everything so it's unreadable without your password.
            </p>
            <p className="mb-2">
              <span className="text-la-white">Windows:</span> Settings → Privacy & Security →
              Device Encryption. Turn it on. (Pro users: use BitLocker.)
            </p>
            <p className="mb-2">
              <span className="text-la-white">Mac:</span> System Preferences → Security & Privacy
              → FileVault. Probably already on, but check.
            </p>
            <p>
              Both are built-in and free. No extra software needed. Your computer won't slow down.
              There's no reason not to have this on.
            </p>
          </TipCard>

          <TipCard title="Browser Extensions: Less Is More">
            <p className="mb-2">
              Your browser is how you interact with the internet, and by default it's sharing
              more about you than you think. Two extensions fix most of that:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">uBlock Origin:</span> Blocks ads and trackers. It's free, open source, and the best at what it does. Make sure it's "uBlock Origin" specifically — there are copycats.</li>
              <li><span className="text-la-white">Privacy Badger:</span> Made by the Electronic Frontier Foundation. It automatically learns which trackers are following you around the internet and blocks them.</li>
            </ul>
            <p>
              Don't go overboard installing tons of extensions — each one can see what you're
              browsing. Two or three good ones beat a dozen sketchy ones.
            </p>
          </TipCard>

          <TipCard title="Password Managers: Your Brain Is Not a Password Manager" badge="free">
            <p className="mb-2">
              If you're using the same password on multiple sites, you're one data breach away from
              losing everything. When a site gets hacked (and they do, constantly), attackers try
              that stolen password on every other site — your email, your bank, your Instagram.
              This is called <span className="text-la-white">credential stuffing</span>.
            </p>
            <p className="mb-2">
              A password manager creates and remembers a unique, strong password for every account.
              You only need to remember one master password. That's it.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">Bitwarden:</span> Free, open source, works on every device and browser. The best choice for most people.</li>
              <li><span className="text-la-white">Proton Pass:</span> Also free, made by the team behind ProtonMail. Great if you already use Proton products.</li>
            </ul>
            <p>
              Pick one. Set it up today. Import your saved browser passwords into it, then delete
              them from your browser.
            </p>
          </TipCard>

          <TipCard title="Two-Factor Authentication (2FA): Your Second Lock" badge="critical">
            <p className="mb-2">
              <span className="text-la-white">2FA</span> is like adding a deadbolt to your
              account. Even if someone steals your password, they still can't get in without the
              second factor — usually a code from an app on your phone.
            </p>
            <p className="mb-2">
              Set it up in this order (most important first):
            </p>
            <StepList steps={[
              'Email (Gmail, Outlook, ProtonMail) — if someone owns your email, they can reset every other password you have.',
              'Bank and financial apps — protect your money.',
              'Social media (Instagram, TikTok, Snapchat, Discord) — these get targeted for identity theft.',
              'Shopping (Amazon, etc.) — they have your payment info saved.',
              'Everything else that offers it — turn it on.',
            ]} />
            <p className="mt-3">
              Use an authenticator app like <span className="text-la-white">Aegis</span> (Android) or{' '}
              <span className="text-la-white">2FAS</span> (iOS/Android) instead of text message codes
              when possible. Text-based 2FA is better than nothing, but it's vulnerable to SIM swap
              attacks (more on that below).
            </p>
          </TipCard>

          <TipCard title="SIM Swap Attacks: Protect Your Phone Number" badge="critical">
            <p className="mb-2">
              A <span className="text-la-white">SIM swap</span> is when someone calls your phone
              carrier, pretends to be you, and transfers your phone number to their device. Now
              they get all your calls and texts — including any 2FA codes sent by text message.
            </p>
            <p className="mb-2">
              This is how people lose access to their bank accounts, crypto, and social media.
              It happens more than you think. Protect yourself:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="text-la-white">T-Mobile:</span> Set an account PIN + turn on "Account Takeover Protection" in your account settings</li>
              <li><span className="text-la-white">AT&T:</span> Set up an "Extra Security" passcode</li>
              <li><span className="text-la-white">Verizon:</span> Enable Number Lock and set an account PIN</li>
              <li><span className="text-la-white">Metro/Cricket/Boost:</span> Call customer service and ask to add a PIN or port freeze</li>
            </ul>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION C: EMAIL & PHISHING */}
      <AccordionSection title="EMAIL & PHISHING" badge="critical">
        <div className="space-y-4">
          <WarningBanner>
            Phishing is the #1 way people actually get hacked. Not fancy movie-style hacking — just
            a convincing message that tricks you into clicking a link or typing your password into a
            fake site. It works on everyone if you're not paying attention.
          </WarningBanner>

          <TipCard title="How to Spot a Phishing Email or DM" badge="critical">
            <p className="mb-2">
              Phishing doesn't just come through email anymore — it shows up in DMs, texts, and even
              Discord messages. Here's what to look for:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-red">Urgency</span> — "Your account will be closed in 24 hours!" No real company does this.</li>
              <li><span className="text-la-red">Generic greetings</span> — "Dear Customer" instead of your actual name.</li>
              <li><span className="text-la-red">Suspicious links</span> — hover over any link before clicking. Does the URL actually match the company? "paypal.com" vs "paypa1-secure.xyz" are not the same.</li>
              <li><span className="text-la-red">Random attachments</span> — especially .exe, .zip, or .docm files from people you don't know.</li>
              <li><span className="text-la-red">"Free" offers and prizes</span> — "You won a $500 gift card!" No, you didn't.</li>
            </ul>
            <p>
              When in doubt, <span className="text-la-white">don't click the link</span>. Open a new
              browser tab and go to the website yourself. If there's a real problem with your account,
              you'll see it when you log in the normal way.
            </p>
          </TipCard>

          <TipCard title="The 'From' Address Is Lying to You" badge="important">
            <p className="mb-2">
              Here's something most people don't know: the "From" field in an email is super easy
              to fake. Anyone can send an email that looks like it's from support@yourbank.com or
              noreply@instagram.com. Email was designed in the 1970s before anyone thought about
              security.
            </p>
            <p>
              The takeaway: <span className="text-la-white">never trust an email just because of who
              it appears to be from.</span> If it asks you to click a link or provide info, verify
              through a different channel — go to the website directly or call the company.
            </p>
          </TipCard>

          <TipCard title="What Actually Happens When You Click a Bad Link">
            <p className="mb-2">
              <span className="text-la-white">Scenario 1: Fake login page.</span> You land on a
              site that looks exactly like Instagram or your bank. You type in your username and
              password. The attacker now has your login — and they'll try it within seconds.
            </p>
            <p className="mb-2">
              <span className="text-la-white">Scenario 2: Malware download.</span> The link
              downloads something to your device. On a computer, it might look like a PDF but it's
              actually a program that spies on you. On a phone, it might try to install a sketchy app.
            </p>
            <p className="mb-2">
              <span className="text-la-white">Scenario 3: Browser exploit.</span> The page itself
              attacks your browser. This is rare but happens if your browser isn't updated. (Another
              reason auto-updates matter.)
            </p>
            <p>
              <span className="text-la-gold">If you think you clicked something bad:</span> disconnect
              from WiFi, run a malware scan, change your passwords from a different device, and
              turn on 2FA everywhere you can.
            </p>
          </TipCard>

          <TipCard title="Throwaway Email Addresses: Keep Your Real One Clean" badge="free">
            <p className="mb-2">
              Stop giving your real email to every website and app. Use aliases instead — they
              forward to your real inbox but can be turned off anytime:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">SimpleLogin:</span> Free, open source. Create email aliases that forward to your real inbox. If one starts getting spam, just delete that alias.</li>
              <li><span className="text-la-white">DuckDuckGo Email:</span> Get a @duck.com address that strips trackers before forwarding to you.</li>
            </ul>
            <p>
              This way, when a company gets hacked and your email leaks, only the alias is exposed.
              Your real email stays clean. It's one of the simplest moves with the biggest payoff.
            </p>
          </TipCard>

          <TipCard title="Your Info Is Already For Sale (Here's How to Fix It)" badge="important">
            <p className="mb-2">
              Google your name right now. There's a good chance your address, phone number, and
              family members' names are listed on sites like Spokeo, WhitePages, and BeenVerified.
              These are called <span className="text-la-white">data brokers</span> — they collect
              and sell your personal info to anyone who pays.
            </p>
            <p>
              You can opt out from each site manually (they're required to let you). Start with
              the top 5-10 results when you Google yourself. It's tedious but free. For the full
              list of 100+ brokers, services like DeleteMe automate it — but they cost money.
              Start with the free manual approach.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION D: PHYSICAL SECURITY */}
      <AccordionSection title="PHYSICAL SECURITY" badge="important">
        <div className="space-y-4">
          <TipCard title="Your Front Door Is Weaker Than You Think" badge="important">
            <p className="mb-2">
              Most break-ins happen through the front door, and most front doors can be kicked
              in with one solid hit. The deadbolt goes into a thin wooden frame that cracks like
              nothing. The fix is cheap and doesn't require a landlord:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>A door reinforcement plate (Door Armor, StrikeMaster II) — about $50-80, installs in 20 minutes with a screwdriver.</li>
              <li>Replace the short screws in your strike plate with 3-inch screws that reach the wall stud.</li>
              <li>A security bar (like Master Lock or Mace) for when you're home — slides under the doorknob.</li>
            </ul>
            <p>
              These turn a one-kick door into a 10+ kick door. Most burglars give up after 2-3
              attempts. This costs less than a Ring camera and works better.
            </p>
          </TipCard>

          <TipCard title="Security Cameras: Not All Are on Your Side" badge="critical">
            <p className="mb-2">
              Not all security cameras protect you — some are a security risk themselves.
            </p>
            <WarningBanner>
              <strong>Avoid Hikvision and Dahua cameras.</strong> Both are subsidized by the Chinese
              government and have been banned for US government use. They've had serious security
              flaws, and there are real concerns about who can access the footage. They're cheap
              for a reason.
            </WarningBanner>
            <p className="mb-2 mt-2">
              <span className="text-la-white">Better options:</span> Reolink (stores footage
              locally, no subscription), Amcrest (similar), or Frigate NVR if you want to go full
              DIY. The key: your camera footage should stay on YOUR devices, not someone else's
              cloud server.
            </p>
          </TipCard>

          <TipCard title="Smart Locks: Convenient but Not Always Safer" badge="warning">
            <p className="mb-2">
              Smart locks add technology to your door, but technology means new ways things can
              go wrong — Bluetooth hacks, dead batteries locking you out, or cloud outages making
              your lock unreachable.
            </p>
            <p className="mb-2">
              If you use one: always keep a physical key backup, pick a lock that works over
              Bluetooth only (no cloud), change the default code immediately, and turn off
              "auto-unlock" (the feature that unlocks when your phone is nearby — someone can
              just follow you to your door).
            </p>
            <p>
              Honest truth: a good deadbolt with a reinforced strike plate is still more secure
              than most smart locks on the market.
            </p>
          </TipCard>

          <TipCard title="Peephole Cameras: The Sleeper Pick for Apartments">
            <p className="mb-2">
              Video doorbells like Ring are popular but come with baggage — monthly subscriptions,
              police data-sharing partnerships, and they basically announce "this place has stuff
              worth protecting."
            </p>
            <p className="mb-2">
              <span className="text-la-white">Peephole cameras</span> are the move for apartments.
              They replace your existing peephole, run on batteries, save to a local SD card, and
              look like a normal peephole from the outside. Nobody knows it's there. Brands like
              Ezviz and LaView make solid ones for under $100.
            </p>
            <p>
              If you're renting and can't drill holes or run wires, this is your best option.
            </p>
          </TipCard>

          <TipCard title="Package Theft: Practical Fixes">
            <p className="mb-2">
              If you're in an apartment or a house where deliveries sit out front, package theft
              is a real thing. Here's the playbook:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Use Amazon Locker, UPS Access Point, or FedEx Hold at Location for anything valuable.</li>
              <li>A package lockbox gives delivery drivers a secure drop spot (Yale, Bench Sentry).</li>
              <li>Coordinate with a neighbor or family member for high-value deliveries.</li>
              <li>Require a signature on anything over $100.</li>
              <li>If you have a camera, point it at your delivery area. Even a visible fake camera helps.</li>
            </ul>
          </TipCard>
        </div>
      </AccordionSection>
    </PageWrapper>
  );
};

export default HomeBasics;
