// Simple stroked icons — consistent 24x24 grid, 1.5px stroke
const ICON = (props) => ({
  width: props.size || 20, height: props.size || 20,
  viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round',
});

const IconDroplet = (p) => (
  <svg {...ICON(p)}><path d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z"/></svg>
);
const IconTruck = (p) => (
  <svg {...ICON(p)}>
    <path d="M3 7h11v10H3z"/><path d="M14 10h4l3 3v4h-7"/>
    <circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>
  </svg>
);
const IconPhone = (p) => (
  <svg {...ICON(p)}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>
);
const IconWhatsApp = (p) => (
  <svg {...ICON(p)}><path d="M4 20l1.5-4A8 8 0 1 1 8 18.5L4 20Z"/><path d="M9 9c.5 2 2 3.5 4 4l1.5-1.2 2 1a1 1 0 0 1 .4 1.2c-.4 1-1.3 1.5-2.4 1.3A8 8 0 0 1 7.7 8.5c-.2-1.1.3-2 1.3-2.4A1 1 0 0 1 10.2 6.5L11.2 8.5 10 10"/></svg>
);
const IconForm = (p) => (
  <svg {...ICON(p)}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
);
const IconCheck = (p) => (
  <svg {...ICON(p)}><path d="M4 12l5 5L20 6"/></svg>
);
const IconArrow = (p) => (
  <svg {...ICON(p)}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
);
const IconLeaf = (p) => (
  <svg {...ICON(p)}><path d="M20 4c0 9-5 14-14 14 0-9 5-14 14-14Z"/><path d="M4 20c4-4 8-8 12-12"/></svg>
);
const IconShield = (p) => (
  <svg {...ICON(p)}><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3Z"/><path d="M9 12l2 2 4-4"/></svg>
);
const IconRecycle = (p) => (
  <svg {...ICON(p)}><path d="M7 17l-2 2-2-2 3-5 3 3"/><path d="M17 7l2-2 2 2-3 5-3-3"/><path d="M12 3l3 3-3 3"/><path d="M12 21l-3-3 3-3"/></svg>
);
const IconBarrel = (p) => (
  <svg {...ICON(p)}><rect x="5" y="4" width="14" height="16" rx="1"/><path d="M5 9h14M5 15h14M12 4v16"/></svg>
);
const IconMap = (p) => (
  <svg {...ICON(p)}><path d="M9 3l-6 2v16l6-2 6 2 6-2V3l-6 2-6-2ZM9 3v16M15 5v16"/></svg>
);
const IconMenu = (p) => (
  <svg {...ICON(p)}><path d="M3 6h18M3 12h18M3 18h18"/></svg>
);
const IconX = (p) => (
  <svg {...ICON(p)}><path d="M6 6l12 12M18 6L6 18"/></svg>
);
const IconSpark = (p) => (
  <svg {...ICON(p)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>
);

Object.assign(window, {
  IconDroplet, IconTruck, IconPhone, IconWhatsApp, IconForm, IconCheck,
  IconArrow, IconLeaf, IconShield, IconRecycle, IconBarrel, IconMap,
  IconMenu, IconX, IconSpark,
});
