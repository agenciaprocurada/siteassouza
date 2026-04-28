// Tweaks panel — toggleable variations
function TweaksPanel({
  tweaks,
  setTweaks,
  visible
}) {
  if (!visible) return null;
  const set = (k, v) => setTweaks({
    ...tweaks,
    [k]: v
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "tweaks-panel on"
  }, /*#__PURE__*/React.createElement("h4", null, "Tweaks"), /*#__PURE__*/React.createElement("div", {
    className: "tweaks-row"
  }, /*#__PURE__*/React.createElement("label", null, "Hero"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: `tweaks-btn ${tweaks.heroVariant === 'dark' ? 'active' : ''}`,
    onClick: () => set('heroVariant', 'dark')
  }, "Dark"), /*#__PURE__*/React.createElement("button", {
    className: `tweaks-btn ${tweaks.heroVariant === 'light' ? 'active' : ''}`,
    onClick: () => set('heroVariant', 'light')
  }, "Light"))), /*#__PURE__*/React.createElement("div", {
    className: "tweaks-row"
  }, /*#__PURE__*/React.createElement("label", null, "Accent"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: `tweaks-btn ${tweaks.accentMode === 'orange' ? 'active' : ''}`,
    onClick: () => set('accentMode', 'orange')
  }, "Orange"), /*#__PURE__*/React.createElement("button", {
    className: `tweaks-btn ${tweaks.accentMode === 'bold' ? 'active' : ''}`,
    onClick: () => set('accentMode', 'bold')
  }, "Bold"))), /*#__PURE__*/React.createElement("div", {
    className: "tweaks-row"
  }, /*#__PURE__*/React.createElement("label", null, "Stats strip"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: `tweaks-btn ${tweaks.showStats ? 'active' : ''}`,
    onClick: () => set('showStats', true)
  }, "On"), /*#__PURE__*/React.createElement("button", {
    className: `tweaks-btn ${!tweaks.showStats ? 'active' : ''}`,
    onClick: () => set('showStats', false)
  }, "Off"))));
}
Object.assign(window, {
  TweaksPanel
});