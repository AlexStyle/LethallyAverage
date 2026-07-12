import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import PageWrapper from '../components/Layout/PageWrapper';
import GlitchText from '../components/UI/GlitchText';
import SecurityNav from '../components/Security/SecurityNav';

const STORAGE_KEY = 'la-checklist';

type Category =
  | 'Accounts'
  | 'Phone'
  | 'Computer'
  | 'Network'
  | 'Home'
  | 'Money'
  | 'Privacy';

const CATEGORY_ORDER: Category[] = [
  'Accounts',
  'Phone',
  'Computer',
  'Network',
  'Home',
  'Money',
  'Privacy',
];

const CATEGORY_CLS: Record<Category, string> = {
  Accounts: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  Phone: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
  Computer: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  Network: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  Home: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
  Money: 'bg-green-500/15 text-green-300 border-green-500/30',
  Privacy: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
};

interface ChecklistItemData {
  id: string;
  label: string;
  howTo: string;
  category: Category;
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
        id: 't1-screen-lock',
        label: 'Phone screen lock active',
        category: 'Phone',
        howTo: 'Settings > Security > Screen Lock. Use a 6-digit PIN minimum, or biometrics (fingerprint/face). Set auto-lock to 30 seconds or 1 minute. A lost phone with no lock is a skeleton key to your entire life.',
      },
      {
        id: 't1-auto-updates',
        label: 'Auto-updates enabled on all devices',
        category: 'Phone',
        howTo: 'Phone: Settings > Software Update > Auto-update. Windows: Settings > Windows Update > turn on automatic updates. Mac: System Settings > General > Software Update > Automatic Updates. Do this on every device you own.',
      },
      {
        id: 't1-password-manager',
        label: 'Password manager installed',
        category: 'Accounts',
        howTo: 'Download Bitwarden (free) or Proton Pass (free). Install the browser extension and phone app. Start saving your passwords there instead of in your browser or a notebook. One master password to remember, every other password is unique and random. This is the keystone — everything below stacks on it.',
      },
      {
        id: 't1-2fa-email',
        label: '2FA on your email — strongest method available',
        category: 'Accounts',
        howTo: 'Your email resets every other password, so lock it first. Prefer a passkey if it\'s offered, then an authenticator app (Tier 2), and use SMS text codes only as a last resort — SIM-swaps defeat texts. Google: myaccount.google.com > Security > 2-Step Verification. When you turn it on, SAVE the recovery codes it shows you (next item).',
      },
      {
        id: 't1-2fa-bank',
        label: '2FA on your bank & money apps',
        category: 'Accounts',
        howTo: 'Turn on 2FA everywhere your money lives. Use an authenticator app if the bank supports it; if it only offers SMS, use that (some 2FA beats none) but treat your phone number as protected (SIM lock item below). Save the recovery codes. Hit every account: bank, Cash App, PayPal, Venmo, crypto.',
      },
      {
        id: 't1-recovery-codes',
        label: 'Save your 2FA recovery codes offline',
        category: 'Accounts',
        howTo: 'Every time you turn on 2FA, the service shows a set of one-time backup/recovery codes. Save them somewhere offline — printed in a drawer, or in your password manager\'s secure notes — separate from your password, and keep more than one copy. These are your "break glass" way back in if your phone is lost, stolen, or wiped. Lost codes lock more people out for good than hackers ever do.',
      },
      {
        id: 't1-hibp',
        label: 'Check yourself on Have I Been Pwned',
        category: 'Accounts',
        howTo: 'Go to haveibeenpwned.com, type your email, hit "pwned?" — you\'ll instantly see which breaches exposed you. Change the password anywhere you reused a breached one, email and bank first. Then hit "Notify Me" so you\'re alerted the next time you show up in a breach. Never type a password into any breach checker — the email is all it needs.',
      },
      {
        id: 't1-sim-pin',
        label: 'Lock down your phone number (SIM PIN + Number Lock)',
        category: 'Phone',
        howTo: 'Two different locks, both free, both in your carrier app. (1) SIM PIN — stops someone popping your physical SIM into another phone. (2) The real SIM-swap defense: account-level Number Lock / Port-Out Protection — AT&T "Wireless Account Lock", Verizon "Number Lock" + "SIM Protection", T-Mobile "SIM Protection" + "Port Out Protection". This blocks a scammer from transferring your number to their SIM — which is how numbers actually get stolen and used to drain accounts.',
      },
      {
        id: 't1-lockscreen-previews',
        label: 'Hide sensitive lock-screen notification previews',
        category: 'Phone',
        howTo: 'Stop 2FA codes, bank alerts, and DMs from showing on your locked screen. iPhone: Settings > Notifications > Show Previews > "When Unlocked" or "Never" (set banking/authenticator apps to Never individually). Android: Settings > Notifications > turn off "Sensitive notifications." 30 seconds — kills shoulder-surfing on a packed train or in a shared apartment.',
      },
      {
        id: 't1-stolen-device',
        label: 'Stolen Device Protection / Theft Lock enabled',
        category: 'Phone',
        howTo: 'iPhone: Settings > Face ID & Passcode > Stolen Device Protection > ON. Android: Settings > Google > All services > Theft protection > turn on Theft Detection Lock + Offline Device Lock. This stops a thief who watched you type your passcode from changing your Apple/Google password and locking you out. Free, and it counters the #1 modern phone-theft attack.',
      },
      {
        id: 't1-phone-backup',
        label: 'Phone cloud backup turned on',
        category: 'Phone',
        howTo: 'iPhone: Settings > [your name] > iCloud > iCloud Backup > ON. Android: Settings > Google > Backup > ON. A cracked screen or stolen phone destroys more people\'s photos and data than hackers ever will. Set it once, never think about it again.',
      },
      {
        id: 't1-router-password',
        label: 'Changed router default admin password',
        category: 'Network',
        howTo: 'Open your browser, go to 192.168.1.1 (or 192.168.0.1). Log in with the default credentials on the sticker on your router. Go to Administration > Password and change it to something strong — 20+ characters, random. (Renters on a landlord/building router: skip the router items and filter to Accounts + Phone.)',
      },
      {
        id: 't1-wifi-password',
        label: 'WiFi password is 15+ characters',
        category: 'Network',
        howTo: 'In your router admin panel, go to Wireless > Security. Set a WPA3 or WPA2 password that\'s at least 15 characters. Use a passphrase like "correct-horse-battery-staple" style — long and memorable beats short and complex.',
      },
      {
        id: 't1-guest-network',
        label: 'Guest network created for visitors/IoT',
        category: 'Network',
        howTo: 'In your router settings, look for "Guest Network" or "Guest WiFi." Enable it, give it a different name and password. Put all smart home devices, Ring cameras, and guest phones on this network — keeps them away from your main devices.',
      },
      {
        id: 't1-wps-disabled',
        label: 'WPS disabled on router',
        category: 'Network',
        howTo: 'In your router admin panel, find WPS (Wi-Fi Protected Setup) under Wireless settings. Turn it off. WPS has a known vulnerability that lets attackers brute-force your network in hours. The "easy connect" button is not worth the risk.',
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
        id: 't2-password-manager-setup',
        label: 'Migrate your passwords into the manager',
        category: 'Accounts',
        howTo: 'Create your account at bitwarden.com or proton.me/pass and install the browser extension. Import your saved browser passwords, then generate new random passwords for your important accounts as you log in. Once they\'re in the vault, delete them from your browser so there\'s one source of truth.',
      },
      {
        id: 't2-pw-health',
        label: "Run your password manager's health check",
        category: 'Accounts',
        howTo: 'Open your manager\'s built-in report — Bitwarden "Vault Health" or Proton Pass "Pass Monitor" — and fix everything flagged reused, weak, or breach-exposed, starting with email, bank, and main socials. Installing the manager was step one; this is the step that cleans up the pile of reused passwords already sitting in breach dumps.',
      },
      {
        id: 't2-authenticator-backup',
        label: 'Use an authenticator app you can back up (2FAS or Aegis)',
        category: 'Accounts',
        howTo: 'Install a free authenticator you control the backup for: 2FAS (iOS + Android) or Aegis (Android). Turn on its encrypted backup and store the backup password with your recovery codes. Unlike Google Authenticator\'s cloud sync — still not end-to-end encrypted in 2026, so Google can read your codes — an encrypted-backup app lets you restore to a new phone AND keeps the provider from ever seeing your seeds. This is how you move critical accounts off SMS.',
      },
      {
        id: 't2-security-checkup',
        label: "Run your account's built-in security checkup",
        category: 'Accounts',
        howTo: 'Google: myaccount.google.com/security-checkup — one guided pass shows recent logins, your devices, connected third-party apps, and recovery options; remove anything you don\'t recognize. Apple: Settings > [your name] > Sign-In & Security, and > Devices, to review the same. (Apple\'s separate "Safety Check" is a different tool — it cuts off someone you shared access with; use that if you\'re leaving a controlling relationship.) Do it now, then twice a year.',
      },
      {
        id: 't2-passkey-email',
        label: 'Passkey added to your main account',
        category: 'Accounts',
        howTo: 'Passkeys replace passwords with your face/fingerprint and CANNOT be phished — there\'s no password to steal or type into a fake site. Add one to your Google (myaccount.google.com > Security > Passkeys), Apple, or Microsoft account. Easier than a password AND stronger. This is the 2026 upgrade over password + text codes.',
      },
      {
        id: 't2-family-link',
        label: 'Turning 18? Take your accounts back',
        category: 'Accounts',
        howTo: 'At 18 you can end parental supervision yourself, no approval needed: Google Family Link app > Controls > Account Settings > About supervision > "Stop supervision"; Apple ages you out of Family Sharing; Microsoft Family lifts child limits. Then re-point every recovery email/phone and 2FA to YOUR own email and number, so a parent can no longer reset your accounts. (Check your birthdate on the account is correct — that\'s what unlocks this.)',
      },
      {
        id: 't2-emergency-contacts',
        label: 'Emergency access set for someone you trust',
        category: 'Accounts',
        howTo: 'Pick 1-2 people you trust completely. Share your password manager emergency access (Bitwarden has this built in) or write down critical recovery codes and store them in a sealed envelope. If something happens to you, someone needs to be able to reach your accounts.',
      },
      {
        id: 't2-ublock',
        label: 'Install uBlock Origin (Firefox or Brave)',
        category: 'Computer',
        howTo: 'Add uBlock Origin (free, open-source) to your desktop browser — it blocks ads, trackers, and the malvertising/fake-download domains behind a lot of "free game/stream/crack" scams. Use Firefox or Brave for the full version; on Chrome, Google\'s 2025 changes left only the weaker "uBlock Origin Lite," so switching browsers gets you real protection.',
      },
      {
        id: 't2-data-broker',
        label: 'Data broker opt-out started',
        category: 'Privacy',
        howTo: 'Search yourself on Spokeo, BeenVerified, WhitePages, and FastPeopleSearch; each has an opt-out page (usually tiny text at the bottom) — submit removals. Or start with a free Optery scan (optery.com), which rescans every few months and shows before/after proof, then decide if paid auto-removal is worth it. This pulls your home address and phone off the open internet.',
      },
      {
        id: 't2-credit-freeze',
        label: 'Credit frozen at all bureaus',
        category: 'Money',
        howTo: 'Free by law, ~15 minutes, doesn\'t affect your score or existing cards. Freeze at Equifax (equifax.com/personal/credit-report-services), Experian (experian.com/freeze), and TransUnion (transunion.com/credit-freeze). For full coverage also freeze the 4th bureau Innovis (innovis.com) and the telecom file NCTUE (nctue.com) that carriers check for new phone lines, and opt out of pre-screened offers at optoutprescreen.com. If you just turned 18 with a blank credit file, this is the highest-value move you can make.',
      },
      {
        id: 't2-router-firmware',
        label: 'Router firmware updated',
        category: 'Network',
        howTo: 'Log into your router admin panel. Look for "Firmware Update" or "System Update" — usually under Administration. Click check for updates. If your router is more than 5 years old and has no updates available, it\'s time for a new one.',
      },
      {
        id: 't2-upnp-disabled',
        label: 'UPnP disabled on router',
        category: 'Network',
        howTo: 'In your router admin panel, find UPnP (Universal Plug and Play) — usually under Advanced or NAT settings. Disable it. UPnP lets devices punch holes in your firewall automatically. That\'s convenient for malware too.',
      },
      {
        id: 't2-dns',
        label: 'DNS set to 1.1.1.1 or NextDNS',
        category: 'Network',
        howTo: 'In your router\'s WAN/Internet settings, change DNS servers to 1.1.1.1 and 1.0.0.1 (Cloudflare) or set up NextDNS.io for ad-blocking + privacy. This stops your ISP from logging every site you visit and selling that data.',
      },
      {
        id: 't2-iot-network',
        label: 'IoT devices on separate network',
        category: 'Home',
        howTo: 'Move all smart home devices (Alexa, Ring, smart bulbs, robot vacuums) to your guest network or a dedicated VLAN if your router supports it. This way, if a cheap smart plug gets hacked, it can\'t reach your laptop or phone.',
      },
      {
        id: 't2-tv-acr',
        label: 'Smart TV ACR disabled',
        category: 'Home',
        howTo: 'Samsung: Settings > Privacy > Viewing Information Services > OFF. LG: Settings > All Settings > General > Live Plus > OFF. Roku: Settings > Privacy > Smart TV Experience > OFF. ACR tracks everything you watch and sells it.',
      },
      {
        id: 't2-voice-assistant',
        label: 'Voice assistant history reviewed',
        category: 'Home',
        howTo: 'Alexa: alexa.amazon.com > Settings > Alexa Privacy > Review Voice History > Delete all. Google: myactivity.google.com > filter by Voice & Audio > Delete. Do this regularly. These devices store everything you say.',
      },
      {
        id: 't2-camera-firmware',
        label: 'Camera firmware updated',
        category: 'Home',
        howTo: 'Open your security camera\'s app (Ring, Wyze, Blink, etc.). Check for firmware updates in device settings. Outdated camera firmware is one of the most common ways people get their cameras accessed by strangers.',
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
        id: 't3-account-audit',
        label: 'Harden your recovery paths & kill zombie sessions',
        category: 'Accounts',
        howTo: 'Attackers skip your strong password and walk in through a weak recovery path. On your key accounts: remove SMS as a recovery method where you can, delete any old phone number you no longer control, and make sure your backup email is one you still own AND has its own 2FA. Then learn where "sign out of all devices" lives (Google: myaccount.google.com/device-activity) — 2026 info-stealer malware steals your live session, so changing your password alone doesn\'t kick a thief out. Redo this after any breakup or lost device.',
      },
      {
        id: 't3-app-permissions',
        label: 'Sweep app permissions & reset your ad ID',
        category: 'Privacy',
        howTo: 'Go through Settings for apps holding location, microphone, camera, or contacts access they don\'t need, and revoke them. Then cut ad tracking — iPhone: Settings > Privacy & Security > Tracking > turn off "Allow Apps to Request to Track"; Android: Settings > Privacy > Ads > "Delete advertising ID." Random apps with mic/location access are a real stalking and OSINT vector.',
      },
      {
        id: 't3-lockdown-mode',
        label: 'Being targeted? Turn on Lockdown / Advanced Protection',
        category: 'Phone',
        howTo: 'If someone is specifically after you — a stalker or abusive ex, doxxing, sextortion, or you\'re a public creator — flip on a free one-switch hardening mode. iPhone: Settings > Privacy & Security > Lockdown Mode. Android 16: Settings > Security & privacy > Advanced Protection. Google account: enroll in the Advanced Protection Program (now works with just a passkey — no hardware key to buy). Opt-in, for high-risk users only.',
      },
      {
        id: 't3-activation-lock',
        label: 'Buying used? Confirm Activation Lock is cleared',
        category: 'Phone',
        howTo: 'Before you pay for a secondhand phone or laptop, watch the seller sign out of iCloud / their Apple Account (or remove their Google account) AND factory reset, then confirm it boots to the clean setup screen with no prompt for a previous account. A factory reset alone does NOT clear Apple\'s Activation Lock or Android\'s Factory Reset Protection — a locked device is a paperweight. Do the same before you sell.',
      },
      {
        id: 't3-disk-encryption',
        label: 'Full disk encryption verified',
        category: 'Computer',
        howTo: 'Windows: Search "BitLocker" in Start menu — make sure it says "BitLocker on." Mac: System Settings > Privacy & Security > FileVault > make sure it\'s ON. This means if your laptop is stolen, they can\'t pull your hard drive and read your files.',
      },
      {
        id: 't3-computer-backup',
        label: 'Computer backup running (3-2-1)',
        category: 'Computer',
        howTo: 'Windows: plug in an external drive (~$50 for 1TB) > Settings > search "Backup" > File History > ON. Mac: same drive > System Settings > Time Machine > ON. Aim for 3 copies of anything that matters, on 2 kinds of storage, with 1 offsite (cloud). This is the ONLY defense that makes ransomware irrelevant — and once a year, actually test-restore one file.',
      },
      {
        id: 't3-phishing-briefing',
        label: 'Family members briefed on phishing',
        category: 'Home',
        howTo: 'Sit down with everyone in your household. Show them what phishing emails look like. Key rules: never click links in unexpected emails, always go to the website directly, no one legit asks for your password, if it feels urgent it\'s probably fake.',
      },
      {
        id: 't3-camera-audit',
        label: 'Security camera brands audited',
        category: 'Home',
        howTo: 'Check if your camera brand has had data breaches (Google "[brand] data breach"). Avoid cheap no-name cameras from Amazon. Stick with brands that offer local storage options and have a track record of patching vulnerabilities. Consider UniFi or local-only setups.',
      },
      {
        id: 't3-pihole',
        label: 'Pi-hole or NextDNS installed',
        category: 'Network',
        howTo: 'Easiest path: sign up at nextdns.io (free tier available), set your router DNS to their IPs. Blocks ads and trackers network-wide. Advanced: buy a Raspberry Pi ($35), install Pi-hole (pi-hole.net) for a self-hosted ad blocker on your entire network.',
      },
      {
        id: 't3-router-admin-lan',
        label: 'Router admin access restricted to LAN only',
        category: 'Network',
        howTo: 'In your router admin panel, look for "Remote Management" or "Remote Access" — usually under Administration. Disable it. There is almost never a reason to manage your router from outside your home. This is a wide open door for attackers.',
      },
      {
        id: 't3-firewall-iot',
        label: 'Firewall rules for IoT isolation',
        category: 'Network',
        howTo: 'If your router supports it (ASUS, pfSense, OpenWrt), create firewall rules that prevent your IoT/guest network from communicating with your main LAN. Block all traffic from guest subnet to main subnet. Allow only internet access for IoT devices.',
      },
      {
        id: 't3-unused-devices',
        label: 'Old/unused devices removed from network',
        category: 'Network',
        howTo: 'Log into your router and check the connected devices list (usually under "Clients" or "DHCP"). Look for devices you don\'t recognize or no longer use. Block or remove them. Old devices with old firmware are easy targets.',
      },
      {
        id: 't3-annual-review',
        label: 'Annual review calendar reminder set',
        category: 'Accounts',
        howTo: 'Set a recurring annual calendar event: "Security Review." In it, link to this checklist. Review your passwords, check for breaches at haveibeenpwned.com, update firmware, and re-audit connected devices. Security isn\'t a one-time thing.',
      },
    ],
  },
];

const ALL_ITEMS = tiers.flatMap((t) => t.items);
const CATEGORY_COUNTS: Record<Category, number> = CATEGORY_ORDER.reduce(
  (acc, c) => {
    acc[c] = ALL_ITEMS.filter((i) => i.category === c).length;
    return acc;
  },
  {} as Record<Category, number>
);

function CategoryTag({ category }: { category: Category }) {
  return (
    <span
      className={`ml-2 inline-block align-middle px-1.5 py-0.5 rounded text-[9px] font-accent uppercase tracking-wider border ${CATEGORY_CLS[category]}`}
    >
      {category}
    </span>
  );
}

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
        <div className="flex-1 min-w-0">
          <span
            className={`font-body text-sm transition-all duration-200 ${
              checked ? 'line-through text-la-muted' : 'text-la-white'
            }`}
          >
            {item.label}
          </span>
          <CategoryTag category={item.category} />
        </div>
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
  filter,
  open,
  onToggleOpen,
}: {
  tier: TierData;
  checkedItems: Set<string>;
  onToggle: (id: string) => void;
  filter: Category | 'All';
  open: boolean;
  onToggleOpen: () => void;
}) {
  const visibleItems =
    filter === 'All'
      ? tier.items
      : tier.items.filter((i) => i.category === filter);

  // When a category filter is active, hide tiers that have nothing in it.
  if (filter !== 'All' && visibleItems.length === 0) return null;

  // Progress always reflects the FULL tier, not the filtered view.
  const completedCount = tier.items.filter((item) =>
    checkedItems.has(item.id)
  ).length;
  const percentage = Math.round((completedCount / tier.items.length) * 100);

  // Collapsing only applies in the default (unfiltered) view.
  const bodyOpen = filter !== 'All' ? true : open;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <button
        onClick={onToggleOpen}
        className="w-full text-left mb-4"
        aria-expanded={bodyOpen}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <h3 className={`font-display text-2xl ${tier.accent}`}>
              {tier.name}
            </h3>
            {filter === 'All' && (
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-la-muted"
              >
                <ChevronDown size={18} />
              </motion.span>
            )}
          </div>
          <span className="font-accent text-xs text-la-muted">
            {completedCount}/{tier.items.length} — {percentage}%
          </span>
        </div>
        <p className="font-accent text-xs text-la-muted mb-3 uppercase tracking-wider">
          {tier.subtitle}
          {filter !== 'All' && (
            <span className="text-la-muted/60">
              {' '}
              · {visibleItems.length} in {filter}
            </span>
          )}
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
      </button>

      <AnimatePresence initial={false}>
        {bodyOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div
              className={`border ${tier.accentBorder} rounded-xl bg-la-gray/20 divide-y divide-la-gray/50`}
            >
              {visibleItems.map((item) => (
                <ChecklistItem
                  key={item.id}
                  item={item}
                  checked={checkedItems.has(item.id)}
                  onToggle={() => onToggle(item.id)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

  const [filter, setFilter] = useState<Category | 'All'>('All');
  const [openTiers, setOpenTiers] = useState<Set<string>>(
    () => new Set([tiers[0].name])
  );

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

  const toggleTierOpen = useCallback((name: string) => {
    setOpenTiers((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }, []);

  const handleReset = () => {
    if (
      window.confirm('Reset all progress? This clears every checkbox. You sure?')
    ) {
      setCheckedItems(new Set());
    }
  };

  const totalItems = ALL_ITEMS.length;
  const totalChecked = ALL_ITEMS.filter((i) => checkedItems.has(i.id)).length;
  const totalPercentage = Math.round((totalChecked / totalItems) * 100);

  const filterButtons: Array<{ key: Category | 'All'; label: string; count: number }> = [
    { key: 'All', label: 'All', count: totalItems },
    ...CATEGORY_ORDER.map((c) => ({ key: c, label: c, count: CATEGORY_COUNTS[c] })),
  ];

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

      <div className="mb-8">
        <GlitchText as="h1" className="text-5xl sm:text-6xl text-la-white mb-4">
          MASTER CHECKLIST
        </GlitchText>
        <p className="font-body text-la-muted text-sm max-w-2xl mb-3">
          {totalItems} things standing between you and getting owned — but you
          don't do them all at once. Knock out any 3 from Tier 1 today; progress
          saves automatically. Momentum beats perfection.
        </p>
        <p className="font-body text-la-muted/70 text-xs max-w-2xl mb-8">
          Filter by category to jump to what applies to you. No control over your
          router (renters, dorms, building WiFi)? Filter to{' '}
          <span className="text-blue-300">Accounts</span> +{' '}
          <span className="text-teal-300">Phone</span> — that's where your real
          crown jewels are anyway.
        </p>
        <SecurityNav />
      </div>

      {/* Overall progress */}
      <div className="mb-8 p-4 bg-la-gray/30 rounded-xl border border-la-gray">
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

      {/* Category filter */}
      <div className="mb-10 no-print">
        <p className="font-accent text-[10px] text-la-muted uppercase tracking-widest mb-3">
          Filter by category
        </p>
        <div className="flex flex-wrap gap-2">
          {filterButtons.map((btn) => {
            const active = filter === btn.key;
            return (
              <button
                key={btn.key}
                onClick={() => setFilter(btn.key)}
                className={`px-3 py-1.5 rounded-full font-accent text-[10px] uppercase tracking-widest border transition-colors duration-200 ${
                  active
                    ? 'bg-la-red border-la-red text-white'
                    : 'border-la-gray text-la-muted hover:text-la-white hover:border-la-red/50'
                }`}
              >
                {btn.label}
                <span className={active ? 'text-white/70' : 'text-la-muted/50'}>
                  {' '}
                  {btn.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {tiers.map((tier) => (
        <TierSection
          key={tier.name}
          tier={tier}
          checkedItems={checkedItems}
          onToggle={handleToggle}
          filter={filter}
          open={openTiers.has(tier.name)}
          onToggleOpen={() => toggleTierOpen(tier.name)}
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
