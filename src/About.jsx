// About the company

const aboutStyles = {
  section: { padding: '140px 48px', maxWidth: 1400, margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'center' },
};

function About() {
  return (
    <section id="sobre" className="resp-section" style={aboutStyles.section} data-screen-label="About">
      <div className="resp-grid" style={aboutStyles.grid}>
        <div style={{ position: 'relative' }}>
          <Placeholder label="FROTA · caminhão A.S. SOUZA em operação" h={560} tone="ink"/>

          {/* Overlaid brand stripe */}
          <div className="resp-static resp-w100" style={{
            position: 'absolute', left: -30, top: 40,
            background: 'var(--orange)', color: 'white',
            padding: '14px 22px', borderRadius: 4,
            fontFamily: 'Archivo', fontWeight: 800, fontSize: 18,
            letterSpacing: '-0.01em', transform: 'rotate(-4deg)',
            boxShadow: '0 10px 30px rgba(242,107,26,0.4)',
          }}>
            Logística Ambiental
          </div>

          {/* Floating stat card */}
          <div className="resp-static resp-w100" style={{
            position: 'absolute', right: -24, bottom: -24,
            background: 'var(--paper)', padding: 28, borderRadius: 16,
            border: '1px solid rgba(11,26,46,0.06)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
            maxWidth: 260,
          }}>
            <div style={{
              fontFamily: 'Archivo', fontSize: 56, fontWeight: 800,
              color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1,
            }}>
              17<span style={{ color: 'var(--orange)' }}>.</span>
            </div>
            <div style={{ marginTop: 8, fontSize: 13, color: 'var(--muted)', lineHeight: 1.45 }}>
              <strong style={{ color: 'var(--ink)' }}>anos</strong> coletando, transportando e destinando resíduos oleosos no sul do Brasil.
            </div>
          </div>
        </div>

        <div>
          <Eyebrow>Sobre a A.S. SOUZA</Eyebrow>
          <h2 className="resp-h2" style={{
            fontSize: 'clamp(36px, 4.2vw, 60px)', fontWeight: 800,
            lineHeight: 1, letterSpacing: '-0.03em', marginTop: 18, marginBottom: 24,
          }}>
            Uma empresa de<br/>
            logística ambiental,<br/>
            <span style={{ color: 'var(--orange)' }}>não só uma transportadora.</span>
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--muted)', marginBottom: 20 }}>
            A A.S. SOUZA Transportes nasceu em 2009 no Rio Grande do Sul com a missão
            de dar destino correto ao óleo lubrificante usado — um resíduo perigoso
            que, descartado incorretamente, contamina 1.000 litros de água para cada litro.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--muted)', marginBottom: 40 }}>
            Hoje operamos com frota própria licenciada, parceria direta com rerrefinadores
            autorizados pela ANP e equipe técnica especializada em resíduos perigosos.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
            paddingTop: 32, borderTop: '1px solid rgba(11,26,46,0.1)',
          }}>
            {[
              { icon: IconLeaf, t: 'Economia circular', d: 'Cada litro rerrefinado substitui óleo mineral virgem.' },
              { icon: IconShield, t: 'Compliance total', d: 'Documentação ambiental completa para auditoria.' },
              { icon: IconMap, t: 'Cobertura regional', d: 'Rio Grande do Sul e Santa Catarina.' },
              { icon: IconSpark, t: 'Atendimento humano', d: 'Gerente dedicado por cliente, sem call center.' },
            ].map((v, i) => {
              const Ic = v.icon;
              return (
                <div key={i} style={{ display: 'flex', gap: 14 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: 'var(--orange-soft)', color: 'var(--orange-deep)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Ic size={18}/>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{v.t}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.45 }}>{v.d}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
