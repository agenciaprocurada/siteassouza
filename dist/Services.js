// Services tabs — coleta, transporte, destinação. Interactive tab switcher.

const svcStyles = {
  section: {
    background: 'var(--ink)',
    color: 'white',
    padding: '140px 0'
  },
  inner: {
    maxWidth: 1400,
    margin: '0 auto',
    padding: '0 48px'
  },
  header: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 60,
    marginBottom: 64,
    alignItems: 'end'
  },
  h2: {
    fontSize: 'clamp(40px, 5vw, 72px)',
    fontWeight: 800,
    lineHeight: 0.95,
    letterSpacing: '-0.03em',
    color: 'white'
  },
  tabs: {
    display: 'flex',
    gap: 4,
    marginBottom: 48,
    flexWrap: 'wrap'
  }
};
const SERVICES = [{
  id: 'coleta',
  tab: 'Coleta',
  title: 'Coleta programada ou emergencial',
  lead: 'Atendemos indústria, postos, oficinas e frotas com rotas fixas ou sob demanda.',
  bullets: ['Agendamento online, telefone ou WhatsApp', 'Equipe treinada em NR-20 e NR-33', 'Veículos com kit de contenção e EPIs completos', 'Atendimento emergencial em até 4 horas'],
  kpis: [{
    v: '4h',
    l: 'SLA emergência'
  }, {
    v: '98%',
    l: 'Pontualidade 2025'
  }, {
    v: '7 dias',
    l: 'Flexibilidade de janela'
  }],
  img: 'COLETA · bomba de sucção + tambores 200L'
}, {
  id: 'transporte',
  tab: 'Transporte',
  title: 'Frota licenciada e rastreada',
  lead: 'Caminhões-tanque e carrocerias adaptadas, com monitoramento GPS em tempo real.',
  bullets: ['Licença ANTT para produtos perigosos (Classe 9)', 'Manifesto de Transporte de Resíduos (MTR) eletrônico', 'Motoristas com curso MOPP atualizado', 'Rastreamento disponível via portal do cliente'],
  kpis: [{
    v: '12',
    l: 'Veículos ativos'
  }, {
    v: 'RS+SC',
    l: 'Cobertura'
  }, {
    v: '24/7',
    l: 'Monitoramento'
  }],
  img: 'TRANSPORTE · caminhão-tanque em estrada'
}, {
  id: 'destinacao',
  tab: 'Destinação',
  title: 'Rerrefino autorizado pela ANP',
  lead: 'Óleo coletado é entregue a refinarias licenciadas que produzem novo lubrificante básico.',
  bullets: ['Certificado de Destinação Final (CDF) em até 10 dias', 'Cadeia de custódia documentada do coletor ao rerrefinador', 'Relatório ambiental anual para o cliente', 'Parceiros com LO de órgão ambiental vigente'],
  kpis: [{
    v: '100%',
    l: 'Rastreabilidade'
  }, {
    v: '≤10d',
    l: 'Emissão CDF'
  }, {
    v: 'ISO',
    l: '14001 parceiros'
  }],
  img: 'DESTINAÇÃO · refinaria / processo rerrefino'
}];
function Services() {
  const [active, setActive] = React.useState('coleta');
  const svc = SERVICES.find(s => s.id === active);
  return /*#__PURE__*/React.createElement("section", {
    id: "servicos",
    className: "resp-section",
    style: svcStyles.section,
    "data-screen-label": "Services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resp-inner",
    style: svcStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    className: "resp-header",
    style: svcStyles.header
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--orange)"
  }, "Nosso processo"), /*#__PURE__*/React.createElement("h2", {
    className: "resp-h2",
    style: {
      ...svcStyles.h2,
      marginTop: 18
    }
  }, "Do tambor vazio", /*#__PURE__*/React.createElement("br", null), "ao ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, "\xF3leo novo"), ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.7)',
      maxWidth: 460
    }
  }, "Opera\xE7\xE3o vertical: coletamos, transportamos e acompanhamos a destina\xE7\xE3o final. Um \xFAnico ponto de contato, toda a documenta\xE7\xE3o ambiental cumprida.")), /*#__PURE__*/React.createElement("div", {
    className: "resp-tabs",
    style: svcStyles.tabs
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => setActive(s.id),
    style: {
      padding: '14px 24px',
      borderRadius: 999,
      background: active === s.id ? 'var(--orange)' : 'transparent',
      color: active === s.id ? 'white' : 'rgba(255,255,255,0.7)',
      border: active === s.id ? '1px solid var(--orange)' : '1px solid rgba(255,255,255,0.15)',
      fontWeight: 500,
      fontSize: 14,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: 'Inter, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 11,
      marginRight: 8,
      opacity: 0.7
    }
  }, "0", SERVICES.indexOf(s) + 1), s.tab))), /*#__PURE__*/React.createElement("div", {
    className: "resp-grid resp-flex-col",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 60,
      alignItems: 'start'
    },
    key: active
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'fadein 0.4s ease'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 40,
      fontWeight: 700,
      color: 'white',
      lineHeight: 1.05,
      marginBottom: 18,
      letterSpacing: '-0.02em'
    }
  }, svc.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.65)',
      marginBottom: 32
    }
  }, svc.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginBottom: 40
    }
  }, svc.bullets.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      padding: '14px 0',
      borderTop: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'rgba(242,107,26,0.15)',
      color: 'var(--orange)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(IconCheck, {
    size: 12
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,0.88)',
      lineHeight: 1.5
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 14
    }
  }, svc.kpis.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 32,
      fontWeight: 700,
      color: 'var(--orange)',
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, k.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)',
      marginTop: 8
    }
  }, k.l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      animation: 'fadein 0.4s ease'
    }
  }, svc.id === 'destinacao' ? /*#__PURE__*/React.createElement("img", {
    src: "./assets/pavilhao-armazenamento.webp",
    alt: svc.tab,
    style: {
      width: '100%',
      height: 520,
      objectFit: 'cover',
      borderRadius: 24,
      display: 'block',
      boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
      border: '1px solid rgba(255,255,255,0.05)'
    }
  }) : svc.id === 'coleta' ? /*#__PURE__*/React.createElement("img", {
    src: "./assets/coleta.webp",
    alt: svc.tab,
    style: {
      width: '100%',
      height: 520,
      objectFit: 'cover',
      borderRadius: 24,
      display: 'block',
      boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
      border: '1px solid rgba(255,255,255,0.05)'
    }
  }) : /*#__PURE__*/React.createElement(Placeholder, {
    label: svc.img,
    h: 520,
    tone: "orange",
    caption: `${svc.tab.toUpperCase()} · FOTO REAL`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -30,
      left: -30,
      background: 'white',
      color: 'var(--ink)',
      padding: '18px 22px',
      borderRadius: 14,
      boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
      maxWidth: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--orange-deep)',
      marginBottom: 6
    }
  }, "Documenta\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.4
    }
  }, "MTR, CDF e relat\xF3rio ambiental entregues em PDF no portal do cliente."))))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes fadein {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `));
}
Object.assign(window, {
  Services
});