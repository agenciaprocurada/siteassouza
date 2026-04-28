// Compliance / licenças section

const compStyles = {
  section: {
    background: 'var(--paper-2)',
    padding: '120px 48px'
  },
  inner: {
    maxWidth: 1400,
    margin: '0 auto'
  }
};
const LICENSES = [{
  code: 'LO nº 4782/2023',
  name: 'Licença de Operação',
  org: 'FEPAM-RS',
  valid: 'Válida até 2027'
}, {
  code: 'ANTT 3.28.6',
  name: 'Transporte Rodoviário',
  org: 'ANTT',
  valid: 'Produtos perigosos'
}, {
  code: 'ANP 20/2009',
  name: 'Resolução ANP',
  org: 'Conformidade',
  valid: 'Coletor autorizado'
}, {
  code: 'MTR SINIR',
  name: 'Manifesto Eletrônico',
  org: 'SINIR/MMA',
  valid: 'Integração direta'
}, {
  code: 'ISO 14001',
  name: 'Gestão Ambiental',
  org: 'Parceiros certificados',
  valid: 'Rerrefino'
}, {
  code: 'NR-20 / NR-33',
  name: 'Segurança do trabalho',
  org: 'Equipe 100%',
  valid: 'Treinamento anual'
}];
function Compliance() {
  return /*#__PURE__*/React.createElement("section", {
    id: "compliance",
    className: "resp-section",
    style: compStyles.section,
    "data-screen-label": "Compliance"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resp-inner",
    style: compStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    className: "resp-header",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 60,
      marginBottom: 60,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Licen\xE7as e Compliance"), /*#__PURE__*/React.createElement("h2", {
    className: "resp-h2",
    style: {
      fontSize: 'clamp(36px, 4.2vw, 60px)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      marginTop: 18
    }
  }, "Documenta\xE7\xE3o completa.", /*#__PURE__*/React.createElement("br", null), "Auditoria sem surpresas.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--muted)',
      maxWidth: 460
    }
  }, "Operamos 100% dentro da legisla\xE7\xE3o ambiental. Todas as licen\xE7as ficam dispon\xEDveis no portal do cliente para download a qualquer momento.")), /*#__PURE__*/React.createElement("div", {
    className: "resp-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 14
    }
  }, LICENSES.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'white',
      padding: 28,
      borderRadius: 14,
      border: '1px solid rgba(11,26,46,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 4,
      height: '100%',
      background: 'var(--orange)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 11,
      letterSpacing: '0.12em',
      color: 'var(--orange-deep)',
      fontWeight: 500
    }
  }, l.code), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 16,
      borderTop: '1px solid rgba(11,26,46,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, l.org), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.1em'
    }
  }, l.valid)))))));
}
Object.assign(window, {
  Compliance
});