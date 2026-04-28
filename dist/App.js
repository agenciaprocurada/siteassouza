// Main app — wires everything

function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('top');
  const [tweaks, setTweaks] = React.useState(window.__TWEAKS);
  const [tweaksOn, setTweaksOn] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // accent override
  React.useEffect(() => {
    const root = document.documentElement;
    if (tweaks.accentMode === 'bold') {
      root.style.setProperty('--orange', '#FF5A00');
      root.style.setProperty('--orange-deep', '#D14700');
    } else {
      root.style.setProperty('--orange', '#F26B1A');
      root.style.setProperty('--orange-deep', '#D9590E');
    }
  }, [tweaks.accentMode]);

  // Scroll behavior
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // active section detection
      const sections = ['servicos', 'como', 'sobre', 'compliance', 'contato'];
      const y = window.scrollY + 200;
      let current = 'top';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Tweaks edit mode
  React.useEffect(() => {
    const onMsg = e => {
      if (e.data?.type === '__activate_edit_mode') setTweaksOn(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const setTweaksPersist = t => {
    setTweaks(t);
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: t
    }, '*');
  };
  const goTo = id => {
    if (id === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    if (id === 'contato') {
      window.dispatchEvent(new CustomEvent('openHeroForm'));
      if (!isMobile) {
        setTimeout(() => {
          const form = document.getElementById('hero-form');
          if (form) form.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, 50);
      }
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    scrolled: scrolled,
    activeSection: activeSection,
    onNav: goTo
  }), /*#__PURE__*/React.createElement(Hero, {
    onRequestCollect: () => goTo('contato'),
    isMobile: isMobile
  }), tweaks.showStats && /*#__PURE__*/React.createElement(StatStrip, null), /*#__PURE__*/React.createElement(Steps, {
    variant: tweaks.stepsVariant
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Compliance, null), /*#__PURE__*/React.createElement(CTA, {
    onRequest: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }), /*#__PURE__*/React.createElement(Footer, {
    onNav: goTo
  }), /*#__PURE__*/React.createElement(TweaksPanel, {
    tweaks: tweaks,
    setTweaks: setTweaksPersist,
    visible: tweaksOn
  }));
}

// A thin metric strip between hero and "como funciona"
function StatStrip() {
  const items = [{
    t: 'Coletores autorizados ANP',
    v: 'Resolução 20/2009'
  }, {
    t: 'Cobertura regional',
    v: 'RS + SC'
  }, {
    t: 'Emissão de CDF',
    v: 'até 10 dias úteis'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: 'white',
      borderTop: '4px solid var(--orange)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "resp-grid-2 resp-inner",
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      padding: '28px 48px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 40
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)'
    }
  }, it.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 20,
      fontWeight: 700,
      color: 'white',
      letterSpacing: '-0.01em'
    }
  }, it.v)))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));