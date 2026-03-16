import PageWrapper from '../components/Layout/PageWrapper';
import AccordionSection from '../components/Security/AccordionSection';
import TipCard from '../components/Security/TipCard';
import WarningBanner from '../components/Security/WarningBanner';
import StepList from '../components/Security/StepList';
import GlitchText from '../components/UI/GlitchText';

const MultiFamily = () => {
  return (
    <PageWrapper>
      <GlitchText as="h1" className="text-5xl md:text-6xl text-la-white mb-3">
        MULTI-FAMILY HOME GUIDE
      </GlitchText>
      <p className="font-body text-lg text-la-muted mb-10">
        Nobody covers this for regular people.
      </p>

      {/* SECTION A: SHARED INFRASTRUCTURE RISKS */}
      <AccordionSection title="SHARED INFRASTRUCTURE RISKS" badge="critical" defaultOpen>
        <WarningBanner>
          Living in a multi-family building means you're sharing infrastructure with strangers. Your security
          is only as strong as the weakest link in the building — and that link is usually the person in unit 3B
          who still uses "password123."
        </WarningBanner>

        <div className="space-y-4 mt-4">
          <TipCard title="Shared WiFi: A Disaster Waiting to Happen" badge="critical">
            <p className="mb-2">
              Some buildings offer "free WiFi" as a perk. Sounds great until you realize every tenant is on the
              same network. That means your neighbor's infected laptop can see your devices. Their kid
              downloading sketchy game mods? That malware can spread to your machine.
            </p>
            <p className="mb-2">
              Shared WiFi in an apartment building is basically a public WiFi network that you live on. You
              wouldn't do your banking at a Starbucks WiFi. Don't do it on shared building WiFi either.
            </p>
            <p>
              The fix: get your own internet connection and run your own router. If the building only offers one
              ISP connection, read the "Your Apartment Network" section below for workarounds.
            </p>
          </TipCard>

          <TipCard title="Can Your Neighbors See Your Traffic?" badge="critical">
            <p className="mb-2">
              <span className="text-la-red">Yes.</span> If you're on the same network, anyone with basic tools
              (Wireshark is free and takes 5 minutes to learn) can see your unencrypted traffic. They can see
              which websites you visit, and on poorly configured networks, they might be able to intercept data.
            </p>
            <p className="mb-2">
              HTTPS helps — most websites use it now, so your actual data (passwords, messages) is encrypted.
              But the domain names you visit are still visible. Your neighbor can see that you visited
              "onlyfans.com" even if they can't see what you did there.
            </p>
            <p>
              Solution: use a VPN on shared networks (Mullvad or ProtonVPN are solid choices) or, better yet,
              get your own isolated connection.
            </p>
          </TipCard>

          <TipCard title="VLANs in Plain English" badge="important">
            <p className="mb-2">
              VLAN stands for Virtual Local Area Network. Think of it like invisible walls inside a network.
              Even though everyone is plugged into the same physical router/switch, VLANs separate tenants so
              they can't see each other. It's like having separate networks without separate hardware.
            </p>
            <p className="mb-2">
              The problem: most building managers don't set these up. They plug everyone into the same switch
              and call it a day. If you're on building-provided internet, ask management: "Are tenant
              connections isolated with VLANs or client isolation?" If they don't know what you're talking
              about, you have your answer.
            </p>
            <p>
              If you're tech-savvy, you can set up your own VLAN on your personal router, even behind the
              building's network. This is the apartment network equivalent of putting a lock on your bedroom
              door.
            </p>
          </TipCard>

          <TipCard title="If You Manage the Router: Isolate Tenants" badge="important">
            <p className="mb-2">
              If you're a landlord or building manager reading this — listen up. You have a legal and ethical
              responsibility to isolate tenant traffic. Here's the minimum:
            </p>
            <StepList steps={[
              'Enable client/AP isolation on your access points. This prevents devices from seeing each other.',
              'Set up VLANs — one per unit if possible, or at minimum separate residential from common areas.',
              'Use a business-grade router (Ubiquiti, Mikrotik, pfSense). Consumer routers can\'t handle multi-tenant setups.',
              'Change all default passwords on networking equipment. Document them securely.',
              'Don\'t give tenants admin access to shared networking equipment.',
            ]} />
          </TipCard>

          <TipCard title="Shared Cameras: Who Owns the Footage?" badge="warning">
            <p className="mb-2">
              Building security cameras are a legal gray area. In most states, cameras in common areas (lobby,
              hallways, parking) are legal. But the question nobody asks: who has access to the footage?
            </p>
            <p className="mb-2">
              If the building uses cloud-based cameras (Ring, Nest), that footage lives on a server somewhere.
              Building management, the camera company, and potentially law enforcement can access it — sometimes
              without a warrant (Ring's police partnership, for example).
            </p>
            <p>
              Ask your building management: Where is camera footage stored? Who can access it? How long is it
              retained? If they can't answer these questions, that's a red flag.
            </p>
          </TipCard>

          <TipCard title="Intercom Default Passwords" badge="critical">
            <p className="mb-2">
              Building intercoms — especially smart/IP-based ones like ButterflyMX, Latch, or DoorKing — ship
              with default admin credentials. If your building management never changed them, anyone who Googles
              the model number can get admin access. That means they can buzz themselves in, view logs of who
              comes and goes, and potentially unlock doors remotely.
            </p>
            <p>
              If your building has a smart intercom system, ask management to confirm they've changed default
              credentials and enabled firmware updates. If you're the manager: do it today.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION B: YOUR APARTMENT NETWORK */}
      <AccordionSection title="YOUR APARTMENT NETWORK" badge="important">
        <div className="space-y-4">
          <TipCard title="Run Your Own Router (Double NAT Explained)" badge="important">
            <p className="mb-2">
              Even if your building provides internet, you should run your own router behind it. Plug your
              personal router's WAN port into the building's ethernet jack or WiFi bridge. This creates what's
              called "double NAT" — your devices are behind two layers of network address translation.
            </p>
            <p className="mb-2">
              <span className="text-la-white">Is double NAT bad?</span> For gaming and some video calls, it can
              cause issues (strict NAT type). For security? It's actually a bonus. Your devices are invisible to
              the building network. Nobody on the shared network can see or reach your stuff.
            </p>
            <p>
              If double NAT causes problems with specific apps, most routers have a "DMZ" or "port forwarding"
              option to fix individual issues without compromising your overall security.
            </p>
          </TipCard>

          <TipCard title="The Travel Router Hack" badge="free">
            <p className="mb-2">
              Here's a trick that's worth its weight in gold: buy a travel router. The TP-Link TL-WR902AC is
              about $30 and fits in your pocket. It can connect to the building's WiFi as a client and create
              your own private network behind it.
            </p>
            <p className="mb-2">
              Your devices connect to the travel router, the travel router connects to building WiFi. You get
              isolation, your own DHCP, and the building network only sees one device — the travel router.
            </p>
            <StepList steps={[
              'Buy a TP-Link TL-WR902AC or GL.iNet Beryl (if you want something fancier with VPN support).',
              'Set it to "WISP" or "Repeater" mode — this connects to existing WiFi and creates a new network.',
              'Give your new network a unique name and strong password.',
              'Connect all your personal devices to your travel router\'s network only.',
              'Bonus: Flash it with OpenWrt for even more control (advanced users only).',
            ]} />
          </TipCard>

          <TipCard title="Is Your ISP Router Actually the Building's Router?">
            <p className="mb-2">
              In some buildings, the "ISP-provided" router in your unit is actually managed by the building or
              a bulk internet provider. This means your landlord or building management might have admin access
              to your router. They can see connected devices, change settings, or even monitor traffic.
            </p>
            <p className="mb-2">
              How to check: look at the router. Does it have your ISP's branding? Did you set it up yourself
              with your own ISP account? If it was already there when you moved in, or if "WiFi included"
              was in your lease, it's probably managed by the building.
            </p>
            <p>
              If it's building-managed: run your own router behind it (see above). Don't trust a router you
              didn't set up yourself.
            </p>
          </TipCard>

          <TipCard title="Ethernet vs WiFi in Apartments">
            <p className="mb-2">
              WiFi signals don't stop at your walls. Your neighbor can see your network name, and with the right
              tools, can attempt to crack your WiFi password. Ethernet doesn't have this problem — it's a
              physical cable that stays in your unit.
            </p>
            <p className="mb-2">
              For your most sensitive devices (work laptop, desktop), use ethernet whenever possible. It's
              faster, more reliable, and doesn't broadcast a signal for everyone to see. Run a cable from your
              router to your desk. It's 2026 — a 25ft Cat6 cable is like $8.
            </p>
            <p>
              For everything else (phones, tablets), WiFi is fine as long as you're using WPA3 or WPA2-AES with
              a strong password on your personal router.
            </p>
          </TipCard>

          <TipCard title="Powerline Adapters: Hidden Data Leakage" badge="warning">
            <p className="mb-2">
              Powerline adapters send network data through your electrical wiring. Convenient for getting internet
              to a room without running cables. But here's the problem most people don't know about:
            </p>
            <WarningBanner>
              In many apartment buildings, electrical circuits are shared between units. This means your powerline
              adapter's signal can leak into your neighbor's unit — and theirs can leak into yours. Powerline
              adapters do have encryption, but it's often weak or disabled by default.
            </WarningBanner>
            <p className="mt-2">
              If you must use powerline adapters in an apartment: enable the encryption feature (usually a
              pairing button on the device), use a unique network encryption key, and test from the hallway to
              see if your signal leaks. Better yet, just run an ethernet cable or use a MoCA adapter (uses
              coax cable, doesn't leak between units).
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION C: LANDLORD & LEGAL AWARENESS */}
      <AccordionSection title="LANDLORD & LEGAL AWARENESS" badge="important">
        <div className="space-y-4">
          <TipCard title="What Landlords CAN Monitor" badge="important">
            <p className="mb-2">
              Let's be real about what's legally permissible in most jurisdictions:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Security cameras in common areas (lobbies, hallways, parking lots, entrances).</li>
              <li>Entry/exit logs from key fob or smart lock systems — they know when you come and go.</li>
              <li>Network traffic metadata if they provide the internet (which websites you visit, not the content).</li>
              <li>Smart building system data — thermostat usage, water usage, electricity patterns.</li>
              <li>Package delivery logs if using a smart locker system.</li>
            </ul>
            <p>
              None of this requires your consent in most states if it's in common areas or part of building
              systems you agreed to use.
            </p>
          </TipCard>

          <TipCard title="What Landlords CANNOT Monitor" badge="critical">
            <p className="mb-2">
              These are hard lines that cross into illegal surveillance:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Cameras or audio recording inside your unit — this is illegal everywhere in the US.</li>
              <li>Deep packet inspection of your internet traffic (reading your emails, messages).</li>
              <li>Accessing your personal devices or accounts.</li>
              <li>GPS tracking your movements outside the building.</li>
              <li>Sharing your personal data with third parties without consent (varies by state).</li>
            </ul>
            <WarningBanner>
              If you suspect your landlord is monitoring inside your unit, document everything and contact a
              tenant rights organization or attorney. This is a serious violation in every jurisdiction.
            </WarningBanner>
          </TipCard>

          <TipCard title="NYC Tenant Data Privacy 2026" badge="important">
            <p className="mb-2">
              New York City has been leading the charge on tenant data privacy. Key provisions that affect
              multi-family buildings:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Smart building systems must disclose what data they collect and how it's used.</li>
              <li>Tenants have the right to opt out of non-essential data collection.</li>
              <li>Facial recognition in residential buildings is heavily restricted.</li>
              <li>Building management must provide a data privacy notice before lease signing.</li>
              <li>Tenants can request deletion of collected data when they move out.</li>
            </ul>
            <p>
              Even if you don't live in NYC, these laws are setting the standard. Other cities are following.
              Know your local laws and push back if your building is overreaching.
            </p>
          </TipCard>

          <TipCard title="Smart Building Systems Access" badge="warning">
            <p className="mb-2">
              Modern "smart buildings" have apps for everything — unlocking doors, controlling thermostats,
              reserving amenities, receiving packages. Each of these systems collects data about you.
            </p>
            <p className="mb-2">
              Before you download that building app, ask: What permissions does it need? Does it require location
              access? Camera? Contacts? A legitimate building app needs Bluetooth (for locks) and notifications.
              It does NOT need your contacts, camera, or constant location tracking.
            </p>
            <p>
              Use a separate email address for building apps (use one of those disposable email aliases from
              SimpleLogin). Don't reuse passwords. And read the privacy policy — some building management
              companies sell anonymized tenant data to advertisers.
            </p>
          </TipCard>

          <TipCard title="BAS/HVAC/Elevator Attack Surface" badge="advanced">
            <p className="mb-2">
              Building Automation Systems (BAS) control HVAC, lighting, elevators, and access control. These
              systems were designed for functionality, not security. Many run on decades-old protocols
              (BACnet, Modbus) with zero authentication.
            </p>
            <p className="mb-2">
              Why should you care? Because these systems are often on the same network as everything else.
              A compromised BAS can be used as a pivot point to access other systems — including the network
              your apartment is on. There have been real cases of attackers getting into corporate networks
              through HVAC systems (Target breach, 2013).
            </p>
            <p>
              You can't fix this yourself, but you can ask building management: Is the BAS on a separate
              network from tenant internet? When was the last security audit? These questions alone signal
              that someone is paying attention, which often prompts action.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION D: MULTIPLE FAMILIES, MULTIPLE DEVICES */}
      <AccordionSection title="MULTIPLE FAMILIES, MULTIPLE DEVICES" badge="advanced">
        <div className="space-y-4">
          <TipCard title="More People = More Attack Surface" badge="important">
            <p className="mb-2">
              Every person in your household is an entry point. Your security is only as strong as the least
              tech-savvy person connected to your network. A family of four with two kids means four people
              who might click a phishing link, download something sketchy, or connect an infected device to
              your WiFi.
            </p>
            <p>
              This isn't about blaming anyone — it's about designing your network to contain damage. If your
              kid's gaming PC gets infected, it shouldn't be able to reach your work laptop. Network
              segmentation isn't just for corporations. It's for families too.
            </p>
          </TipCard>

          <TipCard title="Parental Controls That Actually Work" badge="important">
            <p className="mb-2">
              Forget the garbage "parental controls" built into most routers. They're either too restrictive
              or too easy to bypass. Here are the real options:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">Circle:</span> Hardware device that sits on your network. Controls screen time, filters content, works across all devices. Best for non-technical parents.</li>
              <li><span className="text-la-white">OpenDNS (FamilyShield):</span> Free DNS-based filtering. Set your DNS to 208.67.222.123 and it blocks adult content network-wide. Simple but effective.</li>
              <li><span className="text-la-white">NextDNS:</span> The power user choice. Free for up to 300K queries/month. Custom block lists, per-device policies, detailed logs. Set it up on your router and it covers everything.</li>
            </ul>
            <p>
              The key insight: do filtering at the network level (DNS), not on individual devices. Kids are
              smarter than you think — they'll find the app-level controls and disable them. DNS filtering
              is invisible and much harder to bypass.
            </p>
          </TipCard>

          <TipCard title="Guest Network Protocol">
            <p className="mb-2">
              Every household needs a guest network. Not because you don't trust your friends, but because you
              don't trust their devices. Your buddy's phone might have malware and he'd never know it.
            </p>
            <StepList steps={[
              'Enable the guest network on your router (most routers have this built in).',
              'Use a different password than your main network. Change it every few months.',
              'Enable client isolation — this prevents guest devices from seeing each other or your main devices.',
              'Give the guest password to visitors, repair workers, babysitters, and anyone who isn\'t a permanent household member.',
              'Put all IoT devices (smart bulbs, plugs, speakers) on the guest network too. They don\'t need access to your computers.',
            ]} />
          </TipCard>

          <TipCard title="IoT on a Separate VLAN/SSID" badge="critical">
            <WarningBanner>
              This is the single most important thing in this entire section. Your smart home devices should
              NEVER be on the same network as your computers and phones.
            </WarningBanner>
            <p className="mb-2 mt-3">
              Smart bulbs, plugs, cameras, robot vacuums, smart TVs — all of these are running stripped-down
              operating systems with terrible security. They rarely get updates, they often phone home to
              servers in China, and when they get compromised, they become a bridge to everything else on
              your network.
            </p>
            <p className="mb-2">
              The simplest approach: put all IoT devices on your guest network. Better approach: create a
              dedicated IoT SSID (if your router supports multiple SSIDs) with its own VLAN, firewall rules
              that prevent IoT devices from reaching your main network, and limited internet access.
            </p>
            <p>
              If your router supports it, block IoT devices from communicating with each other too. Your smart
              bulb has no business talking to your security camera.
            </p>
          </TipCard>

          <TipCard title="Having the Security Conversation Without Drama">
            <p className="mb-2">
              The hardest part of home security isn't the tech — it's getting everyone in your household on
              board. Nobody wants to be lectured about passwords at dinner. Here's what actually works:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Don't be preachy. Frame it as "protecting the family" not "you're doing it wrong."</li>
              <li>Set up password managers for everyone. Make it easier to be secure than to be insecure.</li>
              <li>Share real examples. "Remember when Aunt Sarah got her Facebook hacked? Here's how we prevent that."</li>
              <li>Handle the technical stuff yourself. Set up the guest network, configure DNS filtering, enable auto-updates. Don't ask — just do it.</li>
              <li>One rule everyone can follow: "If something looks weird, ask before clicking." That's it. One rule.</li>
            </ul>
            <p>
              Security should be invisible to the people you live with. Do the work behind the scenes so they
              don't have to think about it. The best security is the kind nobody notices.
            </p>
          </TipCard>
        </div>
      </AccordionSection>
    </PageWrapper>
  );
};

export default MultiFamily;
