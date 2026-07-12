import { Link, useLocation } from 'react-router-dom';

const securityPages = [
  { label: 'Home 101', to: '/security/home-basics' },
  { label: 'Multi-Family', to: '/security/multifamily' },
  { label: 'IoT', to: '/security/iot' },
  { label: 'Scam Playbook', to: '/security/scams' },
  { label: 'Your Feed', to: '/security/social-media' },
  { label: 'When It Happens', to: '/security/when-it-happens' },
  { label: 'Stay Legal', to: '/security/stay-legal' },
  { label: '2026 Threats', to: '/security/threats-2026' },
  { label: 'Checklist', to: '/security/checklist' },
];

const SecurityNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {securityPages.map((page) => {
        const active = pathname === page.to;
        return (
          <Link
            key={page.to}
            to={page.to}
            className={`px-3 py-1.5 rounded-full font-accent text-[10px] uppercase tracking-widest border transition-colors duration-200 ${
              active
                ? 'bg-la-red border-la-red text-white'
                : 'border-la-gray text-la-muted hover:text-la-white hover:border-la-red/50'
            }`}
          >
            {page.label}
          </Link>
        );
      })}
    </div>
  );
};

export default SecurityNav;
