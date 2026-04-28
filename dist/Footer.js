// Footer with contact info, offices, and navigation

const footerStyles = {
  wrap: {
    background: 'var(--ink)',
    color: 'rgba(255,255,255,0.8)',
    padding: '100px 48px 40px',
    marginTop: 40
  },
  inner: {
    maxWidth: 1400,
    margin: '0 auto'
  },
  h: {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--orange)',
    marginBottom: 20,
    fontWeight: 500
  },
  link: {
    display: 'block',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 10,
    fontSize: 14,
    cursor: 'pointer',
    transition: 'color 0.15s ease'
  }
};
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    id: "contato",
    className: "resp-section",
    style: footerStyles.wrap,
    "data-screen-label": "Footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resp-inner",
    style: footerStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    className: "resp-header",
    style: {
      paddingBottom: 60,
      marginBottom: 60,
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 60,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "resp-h2",
    style: {
      fontSize: 'clamp(32px, 3.6vw, 52px)',
      fontWeight: 800,
      lineHeight: 1,
      color: 'white',
      letterSpacing: '-0.03em'
    }
  }, "Precisa agendar uma coleta?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, "A gente atende r\xE1pido.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:5134434983",
    style: {
      fontFamily: 'Archivo',
      fontSize: 32,
      fontWeight: 700,
      color: 'white',
      letterSpacing: '-0.02em',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(IconPhone, {
    size: 22
  }), " 51 3443-4983"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:coleta@assouzatransportes.com.br",
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,0.7)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.14em'
    }
  }, "E-MAIL"), "coleta@assouzatransportes.com.br"))), /*#__PURE__*/React.createElement("div", {
    className: "resp-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    height: 56,
    variant: "white"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.55)',
      marginTop: 22,
      maxWidth: 300
    }
  }, "Coleta, transporte e destina\xE7\xE3o final de \xF3leo lubrificante usado e res\xEDduos oleosos \u2014 com toda a documenta\xE7\xE3o ambiental em dia."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.14em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, "CNPJ 08.874.903/0001-03", /*#__PURE__*/React.createElement("br", null), "A.S. SOUZA TRANSPORTES LTDA")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.h
  }, "Escrit\xF3rio"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Rua Carlos Chagas, 317", /*#__PURE__*/React.createElement("br", null), "Bairro Industrial", /*#__PURE__*/React.createElement("br", null), "Alvorada \u2014 RS", /*#__PURE__*/React.createElement("br", null), "CEP 94836-200")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.h
  }, "Navega\xE7\xE3o"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.link,
    onClick: () => onNav('servicos'),
    onMouseEnter: e => e.target.style.color = 'white',
    onMouseLeave: e => e.target.style.color = 'rgba(255,255,255,0.7)'
  }, "Servi\xE7os"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.link,
    onClick: () => onNav('como'),
    onMouseEnter: e => e.target.style.color = 'white',
    onMouseLeave: e => e.target.style.color = 'rgba(255,255,255,0.7)'
  }, "Como funciona"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.link,
    onClick: () => onNav('sobre'),
    onMouseEnter: e => e.target.style.color = 'white',
    onMouseLeave: e => e.target.style.color = 'rgba(255,255,255,0.7)'
  }, "Sobre"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.link,
    onClick: () => onNav('compliance'),
    onMouseEnter: e => e.target.style.color = 'white',
    onMouseLeave: e => e.target.style.color = 'rgba(255,255,255,0.7)'
  }, "Licen\xE7as")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.h
  }, "Atendimento"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Seg a Sex \xB7 08h\u201318h"), /*#__PURE__*/React.createElement("a", {
    onClick: () => window.dispatchEvent(new CustomEvent('openWhatsAppModal')),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 16,
      padding: '10px 14px',
      borderRadius: 999,
      background: 'var(--orange)',
      color: 'white',
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(IconWhatsApp, {
    size: 14
  }), " Abrir WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    className: "resp-flex-col",
    style: {
      marginTop: 80,
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 12,
      color: 'rgba(255,255,255,0.4)',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2009\u20132026 A.S. SOUZA Transportes \xB7 Log\xEDstica Ambiental"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", null, "Pol\xEDtica de Privacidade"), /*#__PURE__*/React.createElement("span", null, "LGPD"), /*#__PURE__*/React.createElement("span", null, "Portal do Cliente")))));
}
Object.assign(window, {
  Footer
});