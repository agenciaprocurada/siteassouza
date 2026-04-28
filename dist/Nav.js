const navStyles = {
  wrap: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease'
  },
  inner: {
    maxWidth: 1400,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 48px'
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: 36,
    fontSize: 14,
    fontWeight: 500
  },
  link: {
    cursor: 'pointer',
    transition: 'color 0.15s ease',
    position: 'relative',
    padding: '6px 0'
  },
  cta: {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  },
  phoneBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 12,
    padding: '8px 14px',
    borderRadius: 999,
    border: '1px solid rgba(11,26,46,0.12)'
  }
};
function Nav({
  scrolled,
  activeSection,
  onNav
}) {
  const links = [{
    id: 'servicos',
    label: 'Serviços'
  }, {
    id: 'como',
    label: 'Como Funciona'
  }, {
    id: 'sobre',
    label: 'Sobre'
  }, {
    id: 'compliance',
    label: 'Licenças'
  }, {
    id: 'contato',
    label: 'Contato'
  }];
  const bgStyle = scrolled ? {
    background: 'rgba(246,243,238,0.92)',
    backdropFilter: 'blur(14px) saturate(1.4)',
    WebkitBackdropFilter: 'blur(14px) saturate(1.4)',
    borderBottom: '1px solid rgba(11,26,46,0.06)'
  } : {
    background: 'transparent'
  };
  const textColor = scrolled ? 'var(--ink)' : 'white';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      ...navStyles.wrap,
      ...bgStyle
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "resp-nav",
    style: navStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => onNav('top')
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 44,
    variant: scrolled ? 'color' : 'color'
  })), /*#__PURE__*/React.createElement("div", {
    className: "resp-nav-links",
    style: {
      ...navStyles.links,
      color: textColor
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    style: {
      ...navStyles.link,
      color: textColor,
      opacity: activeSection === l.id ? 1 : 0.8
    },
    onClick: () => onNav(l.id),
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = activeSection === l.id ? 1 : 0.8
  }, l.label, activeSection === l.id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -2,
      height: 2,
      background: 'var(--orange)',
      borderRadius: 2
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "resp-hide",
    style: navStyles.cta
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:5134434983",
    style: {
      ...navStyles.phoneBadge,
      color: textColor,
      borderColor: scrolled ? 'rgba(11,26,46,0.12)' : 'rgba(255,255,255,0.2)'
    }
  }, /*#__PURE__*/React.createElement(IconPhone, {
    size: 14
  }), "51 3443-4983"), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: () => onNav('contato'),
    icon: /*#__PURE__*/React.createElement(IconArrow, {
      size: 14
    })
  }, "Solicitar Coleta"))));
}
Object.assign(window, {
  Nav
});