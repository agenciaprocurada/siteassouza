// About the company

const aboutStyles = {
  section: {
    padding: '140px 48px',
    maxWidth: 1400,
    margin: '0 auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr',
    gap: 80,
    alignItems: 'center'
  }
};
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "sobre",
    className: "resp-section",
    style: aboutStyles.section,
    "data-screen-label": "About"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resp-grid",
    style: aboutStyles.grid
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/fundo-topo-assouza.webp",
    alt: "Frota A.S. SOUZA",
    style: {
      width: '100%',
      height: 560,
      objectFit: 'cover',
      borderRadius: 24,
      display: 'block',
      boxShadow: '0 40px 100px rgba(0,0,0,0.1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "resp-static resp-w100",
    style: {
      position: 'absolute',
      left: -30,
      top: 40,
      background: 'var(--orange)',
      color: 'white',
      padding: '14px 22px',
      borderRadius: 4,
      fontFamily: 'Archivo',
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: '-0.01em',
      transform: 'rotate(-4deg)',
      boxShadow: '0 10px 30px rgba(242,107,26,0.4)'
    }
  }, "Log\xEDstica Ambiental"), /*#__PURE__*/React.createElement("div", {
    className: "resp-static resp-w100",
    style: {
      position: 'absolute',
      right: -24,
      bottom: -24,
      background: 'var(--paper)',
      padding: 28,
      borderRadius: 16,
      border: '1px solid rgba(11,26,46,0.06)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
      maxWidth: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 56,
      fontWeight: 800,
      color: 'var(--ink)',
      letterSpacing: '-0.03em',
      lineHeight: 1
    }
  }, "17", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      color: 'var(--muted)',
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "anos"), " coletando, transportando e destinando res\xEDduos oleosos no sul do Brasil."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Sobre a A.S. SOUZA"), /*#__PURE__*/React.createElement("h2", {
    className: "resp-h2",
    style: {
      fontSize: 'clamp(36px, 4.2vw, 60px)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      marginTop: 18,
      marginBottom: 24
    }
  }, "Uma empresa de", /*#__PURE__*/React.createElement("br", null), "log\xEDstica ambiental,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, "n\xE3o s\xF3 uma transportadora.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--muted)',
      marginBottom: 20
    }
  }, "A A.S. SOUZA Transportes nasceu em 2009 no Rio Grande do Sul com a miss\xE3o de dar destino correto ao \xF3leo lubrificante usado \u2014 um res\xEDduo perigoso que, descartado incorretamente, contamina 1.000 litros de \xE1gua para cada litro."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--muted)',
      marginBottom: 40
    }
  }, "Hoje operamos com frota pr\xF3pria licenciada, parceria direta com rerrefinadores autorizados pela ANP e equipe t\xE9cnica especializada em res\xEDduos perigosos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      paddingTop: 32,
      borderTop: '1px solid rgba(11,26,46,0.1)'
    }
  }, [{
    icon: IconLeaf,
    t: 'Economia circular',
    d: 'Cada litro rerrefinado substitui óleo mineral virgem.'
  }, {
    icon: IconShield,
    t: 'Compliance total',
    d: 'Documentação ambiental completa para auditoria.'
  }, {
    icon: IconMap,
    t: 'Cobertura regional',
    d: 'Rio Grande do Sul e Santa Catarina.'
  }, {
    icon: IconSpark,
    t: 'Atendimento humano',
    d: 'Gerente dedicado por cliente, sem call center.'
  }].map((v, i) => {
    const Ic = v.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 10,
        flexShrink: 0,
        background: 'var(--orange-soft)',
        color: 'var(--orange-deep)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      size: 18
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 4
      }
    }, v.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--muted)',
        lineHeight: 1.45
      }
    }, v.d)));
  })))));
}
Object.assign(window, {
  About
});