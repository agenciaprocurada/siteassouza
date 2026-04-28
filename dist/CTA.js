// Big CTA before footer

const ctaStyles = {
  section: {
    padding: '0 48px',
    maxWidth: 1400,
    margin: '0 auto'
  },
  card: {
    background: 'var(--orange)',
    borderRadius: 28,
    padding: '90px 80px',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 40px, rgba(255,255,255,0.06) 40px 41px)'
  }
};
function CTA({
  onRequest
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "resp-inner",
    style: {
      ...ctaStyles.section,
      paddingTop: 80,
      paddingBottom: 80
    },
    "data-screen-label": "CTA"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resp-card",
    style: ctaStyles.card
  }, /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      right: -40,
      bottom: -40,
      opacity: 0.15
    },
    width: "320",
    height: "320",
    viewBox: "0 0 24 24",
    fill: "white"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.85)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'white'
    }
  }), "Atendimento imediato"), /*#__PURE__*/React.createElement("h2", {
    className: "resp-h2",
    style: {
      fontSize: 'clamp(40px, 5vw, 72px)',
      fontWeight: 800,
      lineHeight: 0.98,
      letterSpacing: '-0.03em',
      color: 'white',
      marginBottom: 28
    }
  }, "Seu \xF3leo usado precisa", /*#__PURE__*/React.createElement("br", null), "de destino correto?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)'
    }
  }, "A gente passa a\xED.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.88)',
      marginBottom: 40,
      maxWidth: 560
    }
  }, "Solicite a coleta \u2014 sem taxa, sem volume m\xEDnimo na primeira visita. Enviamos toda a documenta\xE7\xE3o ambiental em at\xE9 10 dias."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "dark",
    size: "lg",
    onClick: onRequest,
    icon: /*#__PURE__*/React.createElement(IconArrow, {
      size: 16
    })
  }, "Solicitar coleta agora"), /*#__PURE__*/React.createElement(Btn, {
    variant: "white",
    size: "lg",
    onClick: () => window.dispatchEvent(new CustomEvent('openWhatsAppModal')),
    icon: /*#__PURE__*/React.createElement(IconWhatsApp, {
      size: 16
    })
  }, "Falar no WhatsApp")))));
}
Object.assign(window, {
  CTA
});