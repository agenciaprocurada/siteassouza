// Compliance / licenças section

const compStyles = {
  section: { background: 'var(--paper-2)', padding: '120px 48px' },
  inner: { maxWidth: 1400, margin: '0 auto' },
};

const LICENSES = [
  { code: 'LO nº 4782/2023', name: 'Licença de Operação', org: 'FEPAM-RS', valid: 'Válida até 2027' },
  { code: 'ANTT 3.28.6', name: 'Transporte Rodoviário', org: 'ANTT', valid: 'Produtos perigosos' },
  { code: 'ANP 20/2009', name: 'Resolução ANP', org: 'Conformidade', valid: 'Coletor autorizado' },
  { code: 'MTR SINIR', name: 'Manifesto Eletrônico', org: 'SINIR/MMA', valid: 'Integração direta' },
  { code: 'ISO 14001', name: 'Gestão Ambiental', org: 'Parceiros certificados', valid: 'Rerrefino' },
  { code: 'NR-20 / NR-33', name: 'Segurança do trabalho', org: 'Equipe 100%', valid: 'Treinamento anual' },
];

function Compliance() {
  return (
    <section id="compliance" className="resp-section" style={compStyles.section} data-screen-label="Compliance">
      <div className="resp-inner" style={compStyles.inner}>
        <div className="resp-header" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 60, alignItems: 'end' }}>
          <div>
            <Eyebrow>Licenças e Compliance</Eyebrow>
            <h2 className="resp-h2" style={{
              fontSize: 'clamp(36px, 4.2vw, 60px)', fontWeight: 800,
              lineHeight: 1, letterSpacing: '-0.03em', marginTop: 18,
            }}>
              Documentação completa.<br/>
              Auditoria sem surpresas.
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--muted)', maxWidth: 460 }}>
            Operamos 100% dentro da legislação ambiental. Todas as licenças ficam
            disponíveis no portal do cliente para download a qualquer momento.
          </p>
        </div>

        <div className="resp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {LICENSES.map((l, i) => (
            <div key={i} style={{
              background: 'white', padding: 28, borderRadius: 14,
              border: '1px solid rgba(11,26,46,0.06)',
              display: 'flex', flexDirection: 'column', gap: 12,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
                background: 'var(--orange)',
              }}/>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                letterSpacing: '0.12em', color: 'var(--orange-deep)', fontWeight: 500,
              }}>{l.code}</div>
              <div style={{ fontFamily: 'Archivo', fontSize: 20, fontWeight: 700, color: 'var(--ink)' }}>
                {l.name}
              </div>
              <div style={{
                marginTop: 'auto', paddingTop: 16,
                borderTop: '1px solid rgba(11,26,46,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontSize: 12, color: 'var(--muted)',
              }}>
                <span>{l.org}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.1em' }}>
                  {l.valid}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Compliance });
