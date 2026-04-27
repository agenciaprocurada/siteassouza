// Tweaks panel — toggleable variations
function TweaksPanel({ tweaks, setTweaks, visible }) {
  if (!visible) return null;

  const set = (k, v) => setTweaks({ ...tweaks, [k]: v });

  return (
    <div className="tweaks-panel on">
      <h4>Tweaks</h4>

      <div className="tweaks-row">
        <label>Hero</label>
        <div style={{ display: 'flex', gap: 4 }}>
          <button className={`tweaks-btn ${tweaks.heroVariant === 'dark' ? 'active' : ''}`}
                  onClick={() => set('heroVariant', 'dark')}>Dark</button>
          <button className={`tweaks-btn ${tweaks.heroVariant === 'light' ? 'active' : ''}`}
                  onClick={() => set('heroVariant', 'light')}>Light</button>
        </div>
      </div>

      <div className="tweaks-row">
        <label>Accent</label>
        <div style={{ display: 'flex', gap: 4 }}>
          <button className={`tweaks-btn ${tweaks.accentMode === 'orange' ? 'active' : ''}`}
                  onClick={() => set('accentMode', 'orange')}>Orange</button>
          <button className={`tweaks-btn ${tweaks.accentMode === 'bold' ? 'active' : ''}`}
                  onClick={() => set('accentMode', 'bold')}>Bold</button>
        </div>
      </div>

      <div className="tweaks-row">
        <label>Stats strip</label>
        <div style={{ display: 'flex', gap: 4 }}>
          <button className={`tweaks-btn ${tweaks.showStats ? 'active' : ''}`}
                  onClick={() => set('showStats', true)}>On</button>
          <button className={`tweaks-btn ${!tweaks.showStats ? 'active' : ''}`}
                  onClick={() => set('showStats', false)}>Off</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TweaksPanel });
