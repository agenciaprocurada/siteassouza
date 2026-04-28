// Simple stroked icons — consistent 24x24 grid, 1.5px stroke
const ICON = props => ({
  width: props.size || 20,
  height: props.size || 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
});
const IconDroplet = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z"
}));
const IconTruck = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M3 7h11v10H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 10h4l3 3v4h-7"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7",
  cy: "18",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17",
  cy: "18",
  r: "2"
}));
const IconPhone = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
}));
const IconWhatsApp = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M4 20l1.5-4A8 8 0 1 1 8 18.5L4 20Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 9c.5 2 2 3.5 4 4l1.5-1.2 2 1a1 1 0 0 1 .4 1.2c-.4 1-1.3 1.5-2.4 1.3A8 8 0 0 1 7.7 8.5c-.2-1.1.3-2 1.3-2.4A1 1 0 0 1 10.2 6.5L11.2 8.5 10 10"
}));
const IconForm = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("rect", {
  x: "4",
  y: "3",
  width: "16",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 8h8M8 12h8M8 16h5"
}));
const IconCheck = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M4 12l5 5L20 6"
}));
const IconArrow = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 5l7 7-7 7"
}));
const IconLeaf = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M20 4c0 9-5 14-14 14 0-9 5-14 14-14Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 20c4-4 8-8 12-12"
}));
const IconShield = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 12l2 2 4-4"
}));
const IconRecycle = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M7 17l-2 2-2-2 3-5 3 3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 7l2-2 2 2-3 5-3-3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 3l3 3-3 3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 21l-3-3 3-3"
}));
const IconBarrel = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("rect", {
  x: "5",
  y: "4",
  width: "14",
  height: "16",
  rx: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 9h14M5 15h14M12 4v16"
}));
const IconMap = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M9 3l-6 2v16l6-2 6 2 6-2V3l-6 2-6-2ZM9 3v16M15 5v16"
}));
const IconMenu = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18M3 12h18M3 18h18"
}));
const IconX = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6L6 18"
}));
const IconSpark = p => /*#__PURE__*/React.createElement("svg", ICON(p), /*#__PURE__*/React.createElement("path", {
  d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"
}));
Object.assign(window, {
  IconDroplet,
  IconTruck,
  IconPhone,
  IconWhatsApp,
  IconForm,
  IconCheck,
  IconArrow,
  IconLeaf,
  IconShield,
  IconRecycle,
  IconBarrel,
  IconMap,
  IconMenu,
  IconX,
  IconSpark
});