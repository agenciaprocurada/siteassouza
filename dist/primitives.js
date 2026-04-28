// Shared primitives: Section, Eyebrow, Button, Placeholder image, etc.

const primStyles = {
  section: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '120px 48px'
  },
  sectionTight: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '80px 48px'
  }
};
function Eyebrow({
  children,
  color,
  dot
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: color || 'var(--orange-deep)',
      fontWeight: 500
    }
  }, dot !== false && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: color || 'var(--orange)'
    }
  }), children);
}
function Btn({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  type,
  style,
  as,
  href
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: size === 'lg' ? 15 : 14,
    padding: size === 'lg' ? '16px 26px' : '12px 20px',
    borderRadius: 999,
    cursor: 'pointer',
    border: '1px solid transparent',
    transition: 'transform 0.15s ease, background 0.2s ease, box-shadow 0.2s ease'
  };
  const variants = {
    primary: {
      background: 'var(--orange)',
      color: 'white',
      boxShadow: '0 6px 20px rgba(242,107,26,0.35)'
    },
    dark: {
      background: 'var(--ink)',
      color: 'white'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1px solid rgba(11,26,46,0.18)'
    },
    ghostWhite: {
      background: 'transparent',
      color: 'white',
      border: '1px solid rgba(255,255,255,0.25)'
    },
    white: {
      background: 'white',
      color: 'var(--ink)'
    }
  };
  const Comp = as || 'button';
  return /*#__PURE__*/React.createElement(Comp, {
    type: type,
    href: href,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, children, icon);
}
function Placeholder({
  label,
  h = 320,
  tone = 'ink',
  caption
}) {
  const tones = {
    ink: {
      bg: '#0B1A2E',
      stripe: 'rgba(255,255,255,0.05)',
      text: 'rgba(255,255,255,0.55)'
    },
    orange: {
      bg: '#F26B1A',
      stripe: 'rgba(255,255,255,0.12)',
      text: 'rgba(255,255,255,0.9)'
    },
    paper: {
      bg: '#EEE8DC',
      stripe: 'rgba(11,26,46,0.05)',
      text: 'rgba(11,26,46,0.55)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: h,
      background: t.bg,
      borderRadius: 14,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `repeating-linear-gradient(135deg, transparent 0 22px, ${t.stripe} 22px 24px)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: t.text,
      textAlign: 'center',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.6,
      marginBottom: 6
    }
  }, "\u27F6 placeholder"), label), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 14,
      left: 14,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: t.text,
      background: 'rgba(0,0,0,0.3)',
      padding: '4px 8px',
      borderRadius: 4
    }
  }, caption));
}

// Logo mark — imports actual logo PNG
function Logo({
  height = 42,
  variant = 'color'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-assouza.webp",
    alt: "A.S. SOUZA Log\xEDstica Ambiental",
    style: {
      height,
      width: 'auto',
      display: 'block',
      filter: variant === 'white' ? 'brightness(0) invert(1)' : 'none'
    }
  }));
}

// Animated orange underline accent
function Underline({
  w = 60,
  color = 'var(--orange)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: 3,
      background: color,
      borderRadius: 2
    }
  });
}
Object.assign(window, {
  Eyebrow,
  Btn,
  Placeholder,
  Logo,
  Underline,
  primStyles
});