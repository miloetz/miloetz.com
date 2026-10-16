export const caseStudies = [
  {
    slug: 'trident',
    title: 'Project Trident',
    role: 'Technical Software Engineer, Urban Strategy',
    period: 'April 2026 – present',
    summary: 'A project management, scheduling and billing platform for construction, engineering and architecture firms. I joined in April 2026 and have worked on most of the product since, on the web app and the iOS/Android app.',
    hero: '/assets/trident/trident-landing.png',
    links: { live: 'https://projecttrident.us/home' },
    stats: [
      { value: '193', label: 'commits across web & mobile' },
      { value: '0 → 69', label: 'test files' },
      { value: '128 → 274', label: 'page templates' },
      { value: '~3×', label: 'codebase growth in 7 months' }
    ],
    sections: [
      {
        heading: 'The starting point.',
        body: [
          'When I started, Trident was a working project and billing app built on Bootstrap 4. The core was there, but navigation was a single top bar with one dropdown, the product had no visual identity, mobile support was one breakpoint and a timesheet page, and there were no automated tests.'
        ]
      },
      {
        heading: 'What I built.',
        items: [
          { title: 'Calendar & scheduling', when: 'Aug – Oct', text: 'Rebuilt the calendar, then a scheduling home with per-day task resourcing and bulk add, event locations, multi-select with bulk actions, printable views, and email invites with reminders and nudges.' },
          { title: 'Mobile app', when: 'May – Sep', text: 'Rebuilt nearly the whole Expo / React Native app: a new shell with bottom tabs, time, expense and time-off screens, an approvals hub, CRM, a dispatch board, and a Home built around today, up next and waiting on you.' },
          { title: 'Project Matrix', when: 'Aug – Sep', text: 'Redesigned the filter console and map dispatch workflow: multi-day events, attendees, the event modal, home-office routing and a rewritten board with clustered project pins.' },
          { title: 'Navigation', when: 'Aug', text: 'A slim, pinnable icon rail that opens into grouped sections, a favorites tab, one shared breadcrumb and page shell, plus a dark theme and theme picker.' },
          { title: 'Timesheet scratchpad', when: 'Oct', text: 'A side panel on every page that turns rough notes into timesheet entries, with AI suggestions and note condensing.' },
          { title: 'Dashboard v2', when: 'Oct', text: 'A "what needs you now" dashboard with tabs, side nav, project overview and team, and a What\'s New panel; plus a refreshed standard-user dashboard.' },
          { title: 'CRM & prospects', when: 'Sep – Oct', text: 'A prospects console with Apollo import, stages, owners, history and follow-ups, then relationship tracking, referrals and better search.' },
          { title: 'Timesheets & projects', when: 'Jul – Sep', text: 'Rebuilt time entry with project search, copy-last-week and keyboard shortcuts; unified timesheet lists; a tasks admin page, task templates and a Project Team tab.' },
          { title: 'Business card scanner', when: 'Jun', text: 'A mobile feature that reads business cards with an LLM and turns them into contacts.' }
        ]
      },
      {
        heading: 'Before & after.',
        compare: [
          { area: 'Navigation', before: 'Top navbar with one hover dropdown', after: 'Top bar with logo and search, plus a collapsible side rail; light, dark and Trident Blue themes' },
          { area: 'Dashboard', before: 'Bootstrap layout with charts and sidebar cards', after: 'Dashboard v2: an action list with filters, tabs and reference figures' },
          { area: 'Project list', before: 'Data table with filter dropdowns and an Apply button', after: 'Project cards with live search, instant filter chips, status pills and compact views' },
          { area: 'Mobile', before: 'One breakpoint, responsive rules in 18 templates', after: 'A native app, a slide-in nav drawer and phone layouts across 58 templates' },
          { area: 'Quality', before: 'No test suite', after: '69 test files' },
          { area: 'Brand', before: 'A generic trident icon beside bold sans type in black and blue', after: 'A new emblem and wordmark I designed' }
        ]
      },
      {
        heading: 'A new identity.',
        body: [
          'The original logo was a generic trident icon beside bold sans type, the kind of mark a hundred products could share. I designed a new one in Photoshop: a framed trident emblem that breaks out of its own border, and a custom serif wordmark with soft, flared terminals. Each piece works alone or together, so the emblem can carry an app icon or favicon while the full lockup heads the landing page, where it is live now.'
        ],
        figures: [
          { src: '/assets/trident/trident-lockup.png', caption: 'Full lockup', wide: true },
          { src: '/assets/trident/trident-emblem.png', caption: 'Emblem' },
          { src: '/assets/trident/trident-wordmark.png', caption: 'Wordmark' },
          { src: '/assets/trident/trident-old-logo.png', caption: 'Before: the original logo', muted: true }
        ]
      }
    ],
    stack: ['Python', 'JavaScript', 'TypeScript', 'React Native', 'Expo', 'Celery', 'Redis', 'LLM APIs', 'Photoshop']
  },
  {
    slug: 'rhomedog',
    title: 'rhomeDOG',
    role: 'Founder · design & engineering',
    period: 'May 2026 – present',
    summary: 'A Dallas events and culture platform for markets, pop-ups and nights out. "Cool people doing cool sh*t." I started it, designed the brand, and built the whole platform myself: events with RSVPs and waitlists, member accounts, a vendor marketplace, a journal and the admin tools to run it.',
    tagline: 'Good dog. No bad days.',
    hero: '/assets/pictures/rhomedog-landing.png',
    links: { live: 'https://www.rhomedog.com/' },
    stats: [
      { value: 'Solo', label: 'design, code and brand' },
      { value: '~36k', label: 'lines of code in 5 months' },
      { value: '167', label: 'TypeScript files' },
      { value: 'Dallas', label: 'pre-launch' }
    ],
    sections: [
      {
        heading: 'The idea.',
        body: [
          'Dallas has a lot going on, but it is scattered. rhomeDOG pulls the markets, pop-ups and nights out into one place and puts the people behind them up front. The pitch is simple: get outside, meet your people.'
        ]
      },
      {
        heading: 'From splash page to platform.',
        body: [
          'The first site, in May, was a single page: the wordmark, the leaping-dog emblem on cream, and "good dog. & no bad days." By September it had become a full platform. The emblem and cream palette carried over, but the page now opens on Dallas street footage under a heavy "GOODDOG. NOBADDAYS." headline, with a live status bar showing real Dallas weather, a ticking local clock and a visit counter.'
        ],
        layout: 'pair',
        figures: [
          { src: '/assets/pictures/rhgomedog.png', caption: 'v1: the splash page', muted: true },
          { src: '/assets/pictures/rhomedog-landing.png', caption: 'v2: the platform' }
        ]
      },
      {
        heading: 'What I built.',
        items: [
          { title: 'Events & RSVPs', when: 'Events', text: 'Event pages with capacity-limited RSVPs and party sizes. When an event fills, people join a waitlist; when a spot frees up, the next person gets an offer they have an hour to claim before it rolls down the line.' },
          { title: 'Member accounts', when: 'Community', text: 'Passwordless sign-in with magic links and one-time codes. Every member gets a numbered tag, a handle, an avatar and a profile, plus a timeline of the events ahead of and behind them.' },
          { title: 'Friends & messages', when: 'Community', text: 'Friend requests with email notifications, direct messages, and people search that only finds members who opt in: "this isn\'t a directory."' },
          { title: 'Vendor marketplace', when: 'Shop', text: 'Makers apply to sell, then onboard through Stripe Connect and submit pieces for review. Pieces go live on their own or in timed drops. The whole shop sits behind one admin switch, so it can be turned on or off without a deploy.' },
          { title: 'Journal', when: 'Editorial', text: 'Profiles of the people making Dallas interesting, with a draft → review → published workflow and author bylines.' },
          { title: 'Admin & staff', when: 'Operations', text: 'An admin panel for events, vendors, the shop, the journal, contacts and hero videos, with owner, manager and editor roles and an audit log that records every change.' },
          { title: 'Notifications', when: 'Messaging', text: 'Branded email through Resend and SMS through Twilio, routed through one place so each member\'s per-category email and text preferences are always respected.' },
          { title: 'Search', when: 'Discovery', text: 'One search box across events, vendors, articles, products and people.' }
        ]
      },
      {
        heading: 'Built to run safely.',
        body: [
          'Because the site handles real people\'s money, messages and contact details, I built the guardrails in from the start: a separate staging environment with a send guard so test emails never reach real members, rate limiting and Cloudflare Turnstile on public forms, a refusal to use live Stripe keys anywhere but production, account deletion, and a privacy policy and terms written to match what checkout will have to deliver.'
        ]
      },
      {
        heading: 'Brand.',
        body: [
          'I designed the identity in Photoshop: the rhomeDOG wordmark, the leaping-dog emblem and the "GOODDOG.NOBADDAYS." voice. The pack language runs through the product too. Members are "dogs," their profiles live at /dogs, and every account carries a numbered tag.'
        ]
      }
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Stripe Connect', 'Resend', 'Twilio', 'Tailwind', 'Vercel', 'Photoshop']
  }
];

export const getCaseStudyBySlug = (slug) =>
  caseStudies.find(c => c.slug === slug);
