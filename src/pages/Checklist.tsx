import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';
import GlitchText from '../components/UI/GlitchText';

const STORAGE_KEY = 'la-checklist';

interface ChecklistItemData {
  id: string;
  label: string;
  howTo: string;
}

interface TierData {
  name: string;
  subtitle: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  items: ChecklistItemData[];
}

const tiers: TierData[] = [
  {
    name: 'TIER 1: SURVIVAL',
    subtitle: 'Do These Today',
    accent: 'text-la-red',
    accentBg: 'bg-la-red',
    accentBorder: 'border-la-red',
    items: [
      {
        id: 't1-router-password',
        label: 'Changed router default admin password',
        howTo: 'Open your browser, go to 192.168.1.1 (or 192.168.0.1). Log in with the default credentials on the sticker on your router. Go to Administration > Password and change it to something strong — 20+ characters, random.',
      },
      {
        id: 't1-wifi-password',
        label: 'WiFi password is 15+ characters',
        howTo: 'In your router admin panel, go to Wireless > Security. Set a WPA3 or WPA2 password that\'s at least 15 characters. Use a passphrase like "correct-horse-battery-staple" style — long and memorable beats short and complex.',
      },
      {
        id: 't1-guest-network',
        label: 'Guest network created for visitors/IoT',
        howTo: 'In your router settings, look for "Guest Network" or "Guest WiFi." Enable it, give it a different name and password. Put all smart home devices, Ring cameras, and guest phones on this network — keeps them away from your main devices.',
      },
      {
        id: 't1-wps-disabled',
        label: 'WPS disabled on router',
        howTo: 'In your router admin panel, find WPS (Wi-Fi Protected Setup) under Wireless settings. Turn it off. WPS has a known vulnerability that lets attackers brute-force your network in hours. The "easy connect" button is not worth the risk.',
      },
      {
        id: 't1-auto-updates',
        label: 'Auto-updates enabled on all devices',
        howTo: 'Phone: Settings > Software Update > Auto-update. Windows: Settings > Windows Update > turn on automatic updates. Mac: System Settings > General > Software Update > Automatic Updates. Do this on every device you own.',
      },
      {
        id: 't1-password-manager',
        label: 'Password manager installed',
        howTo: 'Download Bitwarden (free) or Proton Pass (free). Install the browser extension and phone app. Start saving your passwords there instead of in your browser or a notebook. One master password to remember, every other password is unique and random.',
      },
      {
        id: 't1-2fa-email',
        label: '2FA enabled on email account',
        howTo: 'Go to your email security settings (Google: myaccount.google.com > Security > 2-Step Verification). Use an authenticator app like Aegis (Android) or the built-in iOS authenticator — NOT SMS if you can avoid it. Your email is the skeleton key to everything.',
      },
      {
        id: 't1-2fa-bank',
        label: '2FA enabled on bank account',
        howTo: 'Log into your bank\'s website. Go to Security Settings. Enable two-factor authentication. Most banks support authenticator apps now. If they only offer SMS, use it — some 2FA is better than none. Check every financial account you have.',
      },
      {
        id: 't1-sim-pin',
        label: 'SIM PIN set with carrier',
        howTo: 'Call your carrier (T-Mobile, AT&T, Verizon) and ask to set a SIM PIN and account PIN. This prevents SIM swap attacks where someone walks into a store, pretends to be you, and takes your phone number. This is how people lose crypto and get hacked.',
      },
      {
        id: 't1-screen-lock',
        label: 'Phone screen lock active',
        howTo: 'Settings > Security > Screen Lock. Use a 6-digit PIN minimum, or biometrics (fingerprint/face). Set auto-lock to 30 seconds or 1 minute. A lost phone with no lock is a skeleton key to your entire life.',
      },
    ],
  },
  {
    name: 'TIER 2: SOLID',
    subtitle: 'Do These This Week',
    accent: 'text-la-gold',
    accentBg: 'bg-la-gold',
    accentBorder: 'border-la-gold',
    items: [
      {
        id: 't2-router-firmware',
        label: 'Router firmware updated',
        howTo: 'Log into your router admin panel. Look for "Firmware Update" or "System Update" — usually under Administration. Click check for updates. If your router is more than 5 years old and has no updates available, it\'s time for a new one.',
      },
      {
        id: 't2-upnp-disabled',
        label: 'UPnP disabled on router',
        howTo: 'In your router admin panel, find UPnP (Universal Plug and Play) — usually under Advanced or NAT settings. Disable it. UPnP lets devices punch holes in your firewall automatically. That\'s convenient for malware too.',
      },
      {
        id: 't2-dns',
        label: 'DNS set to 1.1.1.1 or NextDNS',
        howTo: 'In your router\'s WAN/Internet settings, change DNS servers to 1.1.1.1 and 1.0.0.1 (Cloudflare) or set up NextDNS.io for ad-blocking + privacy. This stops your ISP from logging every site you visit and selling that data.',
      },
      {
        id: 't2-iot-network',
        label: 'IoT devices on separate network',
        howTo: 'Move all smart home devices (Alexa, Ring, smart bulbs, robot vacuums) to your guest network or a dedicated VLAN if your router supports it. This way, if a cheap smart plug gets hacked, it can\'t reach your laptop or phone.',
      },
      {
        id: 't2-tv-acr',
        label: 'Smart TV ACR disabled',
        howTo: 'Samsung: Settings > Privacy > Viewing Information Services > OFF. LG: Settings > All Settings > General > Live Plus > OFF. Roku: Settings > Privacy > Smart TV Experience > OFF. ACR tracks everything you watch and sells it.',
      },
      {
        id: 't2-voice-assistant',
        label: 'Voice assistant history reviewed',
        howTo: 'Alexa: alexa.amazon.com > Settings > Alexa Privacy > Review Voice History > Delete all. Google: myactivity.google.com > filter by Voice & Audio > Delete. Do this regularly. These devices store everything you say.',
      },
      {
        id: 't2-camera-firmware',
        label: 'Camera firmware updated',
        howTo: 'Open your security camera\'s app (Ring, Wyze, Blink, etc.). Check for firmware updates in device settings. Outdated camera firmware is one of the most common ways people get their cameras accessed by strangers.',
      },
      {
        id: 't2-password-manager-setup',
        label: 'Bitwarden/Proton Pass set up',
        howTo: 'Create an account at bitwarden.com or proton.me/pass. Install the browser extension. Start migrating your saved passwords — browser extensions can auto-detect login forms. Generate new random passwords for your important accounts. Export your browser passwords and import them.',
      },
      {
        id: 't2-data-broker',
        label: 'Data broker opt-out started',
        howTo: 'Search yourself on Spokeo, BeenVerified, WhitePages, and FastPeopleSearch. Each site has an opt-out page (usually at the bottom in tiny text). Submit removal requests. This takes time but removes your home address and phone number from the open internet.',
      },
      {
        id: 't2-emergency-contacts',
        label: 'Emergency contacts know your security PIN',
        howTo: 'Pick 1-2 people you trust completely. Share your password manager emergency access (Bitwarden has this built in) or write down critical recovery codes and store them in a sealed envelope. If something happens to you, someone needs to be able to access your accounts.',
      },
    ],
  },
  {
    name: 'TIER 3: ADVANCED',
    subtitle: 'Do These This Month',
    accent: 'text-[#3B82F6]',
    accentBg: 'bg-[#3B82F6]',
    accentBorder: 'border-[#3B82F6]',
    items: [
      {
        id: 't3-disk-encryption',
        label: 'Full disk encryption verified',
        howTo: 'Windows: Search "BitLocker" in Start menu — make sure it says "BitLocker on." Mac: System Settings > Privacy & Security > FileVault > make sure it\'s ON. This means if your laptop is stolen, they can\'t pull your hard drive and read your files.',
      },
      {
        id: 't3-pihole',
        label: 'Pi-hole or NextDNS installed',
        howTo: 'Easiest path: sign up at nextdns.io (free tier available), set your router DNS to their IPs. Blocks ads and trackers network-wide. Advanced: buy a Raspberry Pi ($35), install Pi-hole (pi-hole.net) for a self-hosted ad blocker on your entire network.',
      },
      {
        id: 't3-router-admin-lan',
        label: 'Router admin access restricted to LAN only',
        howTo: 'In your router admin panel, look for "Remote Management" or "Remote Access" — usually under Administration. Disable it. There is almost never a reason to manage your router from outside your home. This is a wide open door for attackers.',
      },
      {
        id: 't3-firewall-iot',
        label: 'Firewall rules for IoT isolation',
        howTo: 'If your router supports it (ASUS, pfSense, OpenWrt), create firewall rules that prevent your IoT/guest network from communicating with your main LAN. Block all traffic from guest subnet to main subnet. Allow only internet access for IoT devices.',
      },
      {
        id: 't3-unused-devices',
        label: 'Old/unused devices removed from network',
        howTo: 'Log into your router and check the connected devices list (usually under "Clients" or "DHCP"). Look for devices you don\'t recognize or no longer use. Block or remove them. Old devices with old firmware are easy targets.',
      },
      {
        id: 't3-phishing-briefing',
        label: 'Family members briefed on phishing',
        howTo: 'Sit down with everyone in your household. Show them what phishing emails look like. Key rules: never click links in unexpected emails, always go to the website directly, no one legit asks for your password, if it feels urgent it\'s probably fake.',
      },
      {
        id: 't3-camera-audit',
        label: 'Security camera brands audited',
        howTo: 'Check if your camera brand has had data breaches (Google "[brand] data breach"). Avoid cheap no-name cameras from Amazon. Stick with brands that offer local storage options and have a track record of patching vulnerabilities. Consider UniFi or local-only setups.',
      },
      {
        id: 't3-printer-cloud',
        label: 'Printer cloud features disabled',
        howTo: 'Open your printer\'s settings (usually via its IP address in a browser). Disable HP Smart, Cloud Print, email-to-print, and any "connected services." Printers are full computers on your network — they don\'t need internet access to print.',
      },
      {
        id: 't3-annual-review',
        label: 'Annual review calendar reminder set',
        howTo: 'Set a recurring annual calendar event: "Security Review." In it, link to this checklist. Review your passwords, check for breaches at haveibeenpwned.com, update firmware, and re-audit connected devices. Security isn\'t a one-time thing.',
      },
      {
        id: 't3-shodan',
        label: 'Shodan.io search of your IP completed',
        howTo: 'Go to shodan.io. Search your public IP address (find it at whatismyip.com). Shodan shows what services are visible from the internet on your network. If you see open ports you don\'t recognize, something is exposed that shouldn\'t be. Fix it or call your ISP.',
      },
    ],
  },
];

function ChecklistItem({
  item,
  checked,
  onToggle,
}: {
  item: ChecklistItemData;
  checked: boolean;
  onToggle: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group">
      <div
        className={`flex items-start gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-la-gray/50 cursor-pointer ${
          checked ? 'opacity-60' : ''
        }`}
        onClick={onToggle}
      >
        <div className="pt-0.5 flex-shrink-0">
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
              checked
                ? 'bg-la-red border-la-red'
                : 'border-la-muted hover:border-la-white'
            }`}
          >
            {checked && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>
        <span
          className={`font-body text-sm flex-1 transition-all duration-200 ${
            checked ? 'line-through text-la-muted' : 'text-la-white'
          }`}
        >
          {item.label}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="text-la-muted hover:text-la-white text-xs font-accent uppercase tracking-wider px-2 py-1 rounded transition-colors duration-200 hover:bg-la-gray flex-shrink-0"
        >
          {expanded ? 'HIDE' : 'HOW?'}
        </button>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="ml-11 mr-4 mb-3 p-3 bg-la-gray/60 rounded-lg border border-la-gray">
              <p className="font-body text-xs text-la-muted leading-relaxed">
                {item.howTo}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TierSection({
  tier,
  checkedItems,
  onToggle,
}: {
  tier: TierData;
  checkedItems: Set<string>;
  onToggle: (id: string) => void;
}) {
  const completedCount = tier.items.filter((item) =>
    checkedItems.has(item.id)
  ).length;
  const percentage = Math.round((completedCount / tier.items.length) * 100);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-10"
    >
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className={`font-display text-2xl ${tier.accent}`}>
            {tier.name}
          </h3>
          <span className="font-accent text-xs text-la-muted">
            {completedCount}/{tier.items.length} — {percentage}%
          </span>
        </div>
        <p className="font-accent text-xs text-la-muted mb-3 uppercase tracking-wider">
          {tier.subtitle}
        </p>
        {/* Progress bar */}
        <div className="w-full h-2 bg-la-gray rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${tier.accentBg} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      <div className={`border ${tier.accentBorder} rounded-xl bg-la-gray/20 divide-y divide-la-gray/50`}>
        {tier.items.map((item) => (
          <ChecklistItem
            key={item.id}
            item={item}
            checked={checkedItems.has(item.id)}
            onToggle={() => onToggle(item.id)}
          />
        ))}
      </div>
    </motion.section>
  );
}

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(Array.from(checkedItems))
      );
    } catch {
      // silently fail if localStorage is unavailable
    }
  }, [checkedItems]);

  const handleToggle = useCallback((id: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const handleReset = () => {
    if (
      window.confirm(
        'Reset all progress? This clears every checkbox. You sure?'
      )
    ) {
      setCheckedItems(new Set());
    }
  };

  const totalItems = tiers.reduce((sum, t) => sum + t.items.length, 0);
  const totalChecked = tiers.reduce(
    (sum, t) => sum + t.items.filter((i) => checkedItems.has(i.id)).length,
    0
  );
  const totalPercentage = Math.round((totalChecked / totalItems) * 100);

  return (
    <PageWrapper>
      {/* Print-friendly styles */}
      <style>{`
        @media print {
          body { background: white !important; color: black !important; }
          .no-print { display: none !important; }
          * { color: black !important; border-color: #ccc !important; background: white !important; }
        }
      `}</style>

      <div className="mb-10">
        <GlitchText as="h1" className="text-5xl sm:text-6xl text-la-white mb-4">
          MASTER CHECKLIST
        </GlitchText>
        <p className="font-body text-la-muted text-sm max-w-2xl">
          30 things standing between you and getting owned. Check them off. Your
          progress saves automatically.
        </p>
      </div>

      {/* Overall progress */}
      <div className="mb-10 p-4 bg-la-gray/30 rounded-xl border border-la-gray">
        <div className="flex items-center justify-between mb-2">
          <span className="font-display text-lg text-la-white">
            OVERALL PROGRESS
          </span>
          <span className="font-accent text-sm text-la-gold">
            {totalChecked}/{totalItems} — {totalPercentage}%
          </span>
        </div>
        <div className="w-full h-3 bg-la-gray rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background:
                'linear-gradient(90deg, #E63946 0%, #F4A261 50%, #3B82F6 100%)',
            }}
            initial={{ width: 0 }}
            animate={{ width: `${totalPercentage}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
      </div>

      {tiers.map((tier) => (
        <TierSection
          key={tier.name}
          tier={tier}
          checkedItems={checkedItems}
          onToggle={handleToggle}
        />
      ))}

      {/* Reset button */}
      <div className="flex justify-center mt-8 no-print">
        <button
          onClick={handleReset}
          className="font-accent text-xs uppercase tracking-widest text-la-muted hover:text-la-red border border-la-gray hover:border-la-red px-6 py-3 rounded-lg transition-all duration-200"
        >
          RESET ALL PROGRESS
        </button>
      </div>
    </PageWrapper>
  );
};

export default Checklist;
