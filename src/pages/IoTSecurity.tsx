import PageWrapper from '../components/Layout/PageWrapper';
import AccordionSection from '../components/Security/AccordionSection';
import TipCard from '../components/Security/TipCard';
import WarningBanner from '../components/Security/WarningBanner';
import StepList from '../components/Security/StepList';
import GlitchText from '../components/UI/GlitchText';

const IoTSecurity = () => {
  return (
    <PageWrapper>
      <GlitchText as="h1" className="text-5xl md:text-6xl text-la-white mb-3">
        IOT SECURITY GUIDE
      </GlitchText>
      <p className="font-body text-lg text-la-muted mb-10">
        Most dangerous and least covered section for regular households.
      </p>

      {/* SECTION A: THE IOT THREAT MAP */}
      <AccordionSection title="THE IOT THREAT MAP (2026)" badge="critical" defaultOpen>
        <div className="space-y-4">
          <TipCard title="What Actually Counts as IoT?" badge="important">
            <p className="mb-2">
              IoT — Internet of Things — is any device that connects to the internet that isn't a traditional
              computer or phone. The list is longer than most people realize:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Smart TVs (yes, your TV is a computer now)</li>
              <li>Voice assistants (Alexa, Google Home, HomePod)</li>
              <li>Security cameras and baby monitors</li>
              <li>Smart bulbs, plugs, and outlets</li>
              <li>Robot vacuums (they map your house)</li>
              <li>Smart thermostats (Nest, Ecobee)</li>
              <li>Printers (especially WiFi ones)</li>
              <li>Gaming consoles (PlayStation, Xbox, Switch)</li>
              <li>Smart refrigerators, ovens, washing machines</li>
              <li>Fitness trackers and smartwatches</li>
              <li>Garage door openers (MyQ, Chamberlain)</li>
              <li>Smart smoke detectors and water sensors</li>
            </ul>
            <p>
              Count the devices in your house right now. Most families have 15-30 IoT devices and don't realize
              it. Every single one is a potential entry point for an attacker.
            </p>
          </TipCard>

          <TipCard title="The Mirai Botnet: A Story Everyone Should Know" badge="critical">
            <p className="mb-2">
              In 2016, a college student created a piece of malware called Mirai. It did something
              embarrassingly simple: it scanned the internet for IoT devices that still used default
              usernames and passwords (like admin/admin). It found hundreds of thousands of them —
              cameras, routers, DVRs — and took control.
            </p>
            <p className="mb-2">
              Then it used all those devices as a weapon. The Mirai botnet launched the largest DDoS attack
              in history at that time, taking down Twitter, Netflix, Reddit, and most of the US east coast
              internet. All because people didn't change their default passwords.
            </p>
            <p className="mb-2">
              Mirai's source code was released publicly. Variants are still active in 2026, and they're
              smarter now. They exploit known vulnerabilities in addition to default credentials. Your
              unpatched smart camera from 2021? It might already be part of a botnet.
            </p>
            <p>
              The lesson: default credentials are not a minor inconvenience. They're a weapon in bulk.
            </p>
          </TipCard>

          <TipCard title="Botnets: How to Check If Your Devices Are Compromised" badge="important">
            <p className="mb-2">
              Your IoT device could be part of a botnet right now, and you'd never know. It still works
              normally — it just also sends spam, mines crypto, or attacks other servers in the background.
              Signs to watch for:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Unusual internet slowdowns, especially uploads.</li>
              <li>Router logs showing connections to unknown IP addresses.</li>
              <li>Devices running hot or slower than normal.</li>
              <li>Unexplained spikes in bandwidth usage.</li>
            </ul>
            <p className="mb-2">
              Tools to check: log into your router and look at the traffic per device. If your smart bulb is
              sending megabytes of data, something is very wrong. Use Fing or GlassWire to monitor device
              network activity.
            </p>
            <p>
              If you suspect a device is compromised: factory reset it, update its firmware, change the password,
              and put it on an isolated network. If it's an old device that no longer gets firmware updates,
              throw it away. Seriously.
            </p>
          </TipCard>

          <TipCard title="Shodan: The Search Engine for IoT Devices" badge="warning">
            <p className="mb-2">
              Shodan.io is a search engine that indexes every internet-connected device it can find. Cameras,
              routers, industrial systems, smart home devices — if it has an IP address and responds to scans,
              Shodan knows about it.
            </p>
            <p className="mb-2">
              You can search Shodan for your own IP address to see what's visible from the outside. If your
              security camera's login page shows up on Shodan, anyone in the world can try to log into it.
              This is how people find open baby monitors and security cameras — it's not hacking, it's just
              searching.
            </p>
            <p>
              Go to shodan.io, create a free account, and search your home IP address (Google "what is my IP"
              to find it). If anything shows up, you have exposed devices that need to be secured or taken
              offline immediately.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION B: DEVICE-BY-DEVICE BREAKDOWN */}
      <AccordionSection title="DEVICE-BY-DEVICE BREAKDOWN" badge="important">
        <div className="space-y-4">
          <TipCard title="Smart TVs" badge="important">
            <p className="mb-2">
              <span className="text-la-white">The big problem: ACR (Automatic Content Recognition).</span>{' '}
              Your smart TV watches what you watch. It takes screenshots of your screen every few seconds and
              sends them back to the manufacturer to build an advertising profile on you. Every major brand
              does this — Samsung, LG, Vizio, Sony.
            </p>
            <p className="mb-3">
              <span className="text-la-white">How to disable ACR per brand:</span>
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li><span className="text-la-white">Samsung:</span> Settings → General → Privacy → disable "Viewing Information Services"</li>
              <li><span className="text-la-white">LG:</span> Settings → All Settings → General → System → Additional Settings → disable "Live Plus"</li>
              <li><span className="text-la-white">Vizio:</span> System → Reset & Admin → disable "Viewing Data"</li>
              <li><span className="text-la-white">Sony (Google TV):</span> Settings → Privacy → Usage & Diagnostics → disable "Samba Interactive TV"</li>
            </ul>
            <p className="mb-2">
              <span className="text-la-white">Cameras on TVs:</span> Some newer smart TVs have built-in cameras
              for video calls. If yours does, put a physical cover over it when not in use. Tape works.
            </p>
            <p className="mb-2">
              <span className="text-la-white">Update lifecycles:</span> Smart TV operating systems stop getting
              security updates after 2-3 years. After that, they're running vulnerable software permanently.
            </p>
            <p>
              <span className="text-la-white">Better approach:</span> Use a streaming device (Apple TV, Roku,
              Chromecast) instead of the TV's built-in smart features. Streaming devices get updates for longer,
              have better security practices, and you can replace a $30 stick instead of a $500 TV when support
              ends. Disconnect your smart TV from WiFi entirely and use it as a dumb display.
            </p>
          </TipCard>

          <TipCard title="Voice Assistants" badge="important">
            <p className="mb-2">
              <span className="text-la-white">The obvious issue: always-on microphones.</span> Alexa, Google
              Home, and Siri devices listen for their wake word 24/7. Amazon, Google, and Apple have all
              admitted that human reviewers listen to recordings. The "it only records after the wake word"
              line is technically true but misleading — false activations happen constantly.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">Voice history deletion:</span> Alexa: Settings → Alexa Privacy → Review Voice History → Delete all. Google: myactivity.google.com → filter by Voice & Audio → delete. Do this monthly.</li>
              <li><span className="text-la-white">Mute buttons:</span> Use them. When you're having sensitive conversations, hit the physical mute button. It electrically disconnects the microphone on most devices.</li>
              <li><span className="text-la-white">Guest mode:</span> Google devices have a guest mode that doesn't save interactions. Enable it if others use your devices.</li>
              <li><span className="text-la-white">Skill/app hijacking:</span> Third-party Alexa skills and Google actions can be designed to keep listening after you think the interaction ended. Stick to first-party skills from known brands. Disable skills you don't actively use.</li>
            </ul>
            <p>
              Hot take: voice assistants provide convenience at the cost of a permanently open microphone in
              your home. Decide if that trade-off is worth it for your household.
            </p>
          </TipCard>

          <TipCard title="Baby Monitors & Security Cameras" badge="critical">
            <WarningBanner>
              Baby monitor hacking is not theoretical. There are thousands of documented cases of strangers
              talking to children through hacked baby monitors. This is a real and ongoing problem.
            </WarningBanner>
            <p className="mb-2 mt-3">
              <span className="text-la-white">Brands to avoid:</span>
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li><span className="text-la-red">Wyze:</span> Multiple data breaches, exposed camera footage to wrong users, slow to disclose vulnerabilities. They're cheap for a reason.</li>
              <li><span className="text-la-red">Eufy:</span> Caught sending footage to the cloud despite advertising "local storage only." Lied about it until a security researcher proved it publicly.</li>
            </ul>
            <p className="mb-2">
              <span className="text-la-white">Recommended alternatives:</span>
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li><span className="text-green-400">Reolink:</span> Local storage via SD card or NVR. No cloud subscription required. Solid hardware, reasonable price.</li>
              <li><span className="text-green-400">Amcrest:</span> Similar to Reolink. Good local storage options, RTSP support for custom setups.</li>
              <li><span className="text-green-400">Frigate NVR:</span> Open-source NVR software you run on your own hardware. Pairs with any ONVIF camera. The gold standard for privacy-conscious setups. Requires a bit of technical skill.</li>
            </ul>
            <p className="mb-2">
              <span className="text-la-white">How to verify cameras aren't phoning home:</span> Use your router's
              traffic monitoring or Pi-hole to see where your camera sends data. If it's constantly connecting to
              servers in China, that's a problem. Block those connections and see if the camera still works
              locally — if it does, great. If it breaks, return it.
            </p>
          </TipCard>

          <TipCard title="Printers" badge="warning">
            <p className="mb-2">
              Nobody thinks about printer security, which is exactly why it's a problem. Here's what your
              printer knows about you:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Most printers store the last 1,000+ pages printed in internal memory. Tax returns, medical records, personal letters — all sitting in your printer's storage.</li>
              <li>WiFi printers broadcast their own network and are often accessible from outside your home.</li>
              <li>Cloud printing services (HP Smart, Epson Connect) route your documents through company servers.</li>
            </ul>
            <p className="mb-2">
              <span className="text-la-white">What to do:</span> Update your printer's firmware (yes, printers
              get firmware updates). Disable cloud printing if you don't need it. Disable WiFi Direct if
              possible. Set an admin password on the printer's web interface (type the printer's IP address
              into a browser).
            </p>
            <WarningBanner>
              <strong>HP ink DRM:</strong> HP has started bricking printers that use third-party ink cartridges
              via firmware updates. This isn't a security tip — it's a warning. HP pushes firmware updates
              that detect non-HP cartridges and refuse to print. If you use third-party ink, disable automatic
              firmware updates on HP printers. Better yet, don't buy HP.
            </WarningBanner>
          </TipCard>

          <TipCard title="Gaming Consoles" badge="important">
            <p className="mb-2">
              Gaming consoles are relatively secure compared to other IoT devices — Sony, Microsoft, and
              Nintendo actually invest in security. But they're not immune:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">PSN/Xbox breaches:</span> PlayStation Network was hacked in 2011 exposing 77 million accounts. Xbox Live has had credential stuffing attacks. Use a unique password and enable 2FA on your gaming accounts.</li>
              <li><span className="text-la-white">Parental controls:</span> Both PlayStation and Xbox have solid parental control systems. Set playtime limits, content restrictions, and spending limits. Don't let kids add payment methods to accounts.</li>
              <li><span className="text-la-white">NAT/port forwarding:</span> Gamers often open ports for better connectivity. Only open the specific ports your console needs (Google "[console name] port forwarding list"), never open a range, and never put your console in DMZ mode.</li>
              <li><span className="text-la-white">Don't use console browsers:</span> The built-in web browsers on consoles are terrible at security. They rarely get updated, don't support modern security features, and have limited extension support. Use your phone or computer for web browsing.</li>
            </ul>
          </TipCard>

          <TipCard title="Smart Bulbs & Outlets" badge="warning">
            <p className="mb-2">
              Smart bulbs and outlets seem harmless. They're just lights and plugs, right? But they connect to
              your WiFi, have firmware, and phone home to servers. They're full-blown network devices that
              happen to also control electricity.
            </p>
            <p className="mb-2">
              <span className="text-la-white">Tuya-based devices:</span> A massive percentage of "smart" bulbs
              and plugs (sold under dozens of brand names) are actually made by Tuya, a Chinese IoT platform.
              Brands like Gosund, Treatlife, Lumary, and many Amazon basics smart devices all run Tuya firmware.
              They all phone home to Tuya's servers.
            </p>
            <p className="mb-2">
              <span className="text-la-white">Local Tuya:</span> If you're using Home Assistant, you can flash
              Tuya devices with local-only firmware or use the LocalTuya integration to control them without
              cloud connectivity. This is the best of both worlds — cheap hardware, no cloud dependency.
            </p>
            <p className="mb-2">
              <span className="text-la-white">Matter protocol:</span> Matter is the new smart home standard
              backed by Apple, Google, Amazon, and Samsung. Matter devices communicate locally by default,
              without routing through a cloud server. When buying new smart home devices in 2026, prioritize
              Matter-compatible products. It's the most significant improvement in IoT security in years.
            </p>
            <p>
              <span className="text-la-white">Brand comparison:</span> For bulbs, Philips Hue (premium, Matter
              support) beats generic Tuya. For outlets, TP-Link Kasa and Meross have decent track records and
              Matter support. Avoid no-name brands from Amazon — if you can't find a company website or security
              contact, don't put it on your network.
            </p>
          </TipCard>
        </div>
      </AccordionSection>

      {/* SECTION C: DEFENSE PLAYBOOK */}
      <AccordionSection title="DEFENSE PLAYBOOK" badge="critical">
        <div className="space-y-4">
          <TipCard title="Golden Rule: IoT Gets Its Own WiFi Network" badge="critical">
            <WarningBanner>
              If you only do ONE thing from this entire guide, do this. Put all IoT devices on a separate WiFi
              network from your personal devices. This single step prevents 90% of IoT-related attacks from
              reaching your important stuff.
            </WarningBanner>
            <div className="mt-3">
              <StepList steps={[
                'Log into your router admin panel and enable the guest network (or create a second SSID if your router supports it).',
                'Name it something like "HomeIoT" — don\'t include your name or address.',
                'Set a strong password (different from your main network).',
                'Enable "client isolation" or "AP isolation" — this prevents IoT devices from talking to each other.',
                'Reconnect all smart home devices (bulbs, plugs, cameras, TVs, voice assistants) to the IoT network.',
                'Keep your computers, phones, and tablets on your main network only.',
                'If your router supports it, create a firewall rule blocking the IoT network from accessing the main network\'s IP range.',
              ]} />
            </div>
          </TipCard>

          <TipCard title="Pi-hole on a Raspberry Pi Zero" badge="advanced">
            <p className="mb-2">
              Pi-hole is a network-wide ad and tracker blocker that runs on a tiny Raspberry Pi computer.
              It acts as your network's DNS server and blocks known advertising, tracking, and malware domains
              before they even load. Every device on your network benefits — no per-device setup needed.
            </p>
            <p className="mb-2">
              A Raspberry Pi Zero W costs about $15. Pi-hole is free. Total investment under $30 for network-wide
              ad blocking and tracking protection. It also gives you a dashboard showing every DNS query on your
              network — so you can see exactly which devices are phoning home and where.
            </p>
            <p className="mb-2">
              This is how you catch IoT devices sending data to sketchy servers. When your smart bulb is making
              500 DNS requests a day to servers in Shenzhen, Pi-hole's dashboard will show you. Then you can
              block those domains.
            </p>
            <p>
              If Pi-hole seems too technical, use NextDNS instead. It does the same thing as a cloud service
              with a web dashboard. Free for up to 300K queries/month. Set it as your router's DNS and you're
              done.
            </p>
          </TipCard>

          <TipCard title="Router Firewall Rules" badge="advanced">
            <p className="mb-2">
              Your router has a built-in firewall, and most people never touch it. For IoT security, you want
              to set up rules that limit what your IoT devices can do:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><span className="text-la-white">Block LAN access:</span> Prevent IoT devices from communicating with your main network. They should only be able to reach the internet.</li>
              <li><span className="text-la-white">Block inter-device communication:</span> Your smart bulb doesn't need to talk to your smart TV. Block device-to-device traffic on the IoT network.</li>
              <li><span className="text-la-white">Rate limiting:</span> If a device suddenly starts sending massive amounts of data, something is wrong. Some routers let you set bandwidth limits per device.</li>
              <li><span className="text-la-white">DNS pinning:</span> Force all IoT devices to use your chosen DNS server (Pi-hole or NextDNS) so they can't bypass your filtering.</li>
            </ul>
            <p>
              Not all consumer routers support these features. If yours doesn't, consider flashing it with
              OpenWrt or DD-WRT firmware, or upgrading to a prosumer router like Ubiquiti or pfSense.
            </p>
          </TipCard>

          <TipCard title="Monthly IoT Audit Routine" badge="important">
            <p className="mb-2">
              Set a monthly calendar reminder to run through this checklist. It takes 15 minutes and catches
              problems before they become disasters:
            </p>
            <StepList steps={[
              'Check your router\'s connected devices list. Count them. If there are more devices than you expect, investigate. Remove anything you don\'t recognize.',
              'Check for firmware updates on all IoT devices. Open each device\'s app and look for available updates. Prioritize cameras and anything with a microphone.',
              'Review your Pi-hole or NextDNS logs. Look for devices making unusual numbers of requests or connecting to suspicious domains. Block anything sketchy.',
              'Test your network segmentation. From your phone on the main network, try to ping a device on the IoT network. If it works, your isolation isn\'t working and needs to be fixed.',
            ]} />
          </TipCard>

          <TipCard title="The Device Graveyard Problem" badge="warning">
            <p className="mb-2">
              What happens to IoT devices when the company goes out of service? Or when they stop releasing
              updates? That device becomes a permanently vulnerable node on your network. No patches, no
              fixes, no support.
            </p>
            <p className="mb-2">
              This has already happened: Insteon (smart home company) shut down overnight in 2022. Wink
              started charging monthly fees. Numerous Kickstarter IoT products launched and abandoned within
              a year. When the cloud server shuts down, your "smart" device either becomes a brick or becomes
              a zombie — still on your network but never getting security updates.
            </p>
            <p className="mb-2">
              <span className="text-la-white">Prevention:</span> Buy from established companies with a track
              record. Prefer devices that work locally without cloud dependency. Prefer Matter-compatible devices
              (the standard is designed to work without any single company's cloud).
            </p>
            <p>
              <span className="text-la-white">Cleanup:</span> Do an annual audit. Any device that hasn't received
              a firmware update in 12+ months should be disconnected from your network. If it's critical (like a
              thermostat), replace it. If it's not critical (like a smart picture frame from 2019), unplug it.
              Dead devices on your network are just attack surface with zero benefit.
            </p>
          </TipCard>
        </div>
      </AccordionSection>
    </PageWrapper>
  );
};

export default IoTSecurity;
