// Footer with contact info, offices, and navigation

const footerStyles = {
  wrap: { background: 'var(--ink)', color: 'rgba(255,255,255,0.8)', padding: '100px 48px 40px', marginTop: 40 },
  inner: { maxWidth: 1400, margin: '0 auto' },
  h: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'var(--orange)', marginBottom: 20, fontWeight: 500,
  },
  link: { display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: 10, fontSize: 14,
    cursor: 'pointer', transition: 'color 0.15s ease' },
};

function Footer({ onNav }) {
  return (
    <footer id="contato" className="resp-section" style={footerStyles.wrap} data-screen-label="Footer">
      <div className="resp-inner" style={footerStyles.inner}>
        {/* Top — big CTA line */}
        <div className="resp-header" style={{
          paddingBottom: 60, marginBottom: 60,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'end',
        }}>
          <h3 className="resp-h2" style={{
            fontSize: 'clamp(32px, 3.6vw, 52px)', fontWeight: 800,
            lineHeight: 1, color: 'white', letterSpacing: '-0.03em',
          }}>
            Precisa agendar uma coleta?<br/>
            <span style={{ color: 'var(--orange)' }}>A gente atende rápido.</span>
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <a href="tel:5134434983" style={{
              fontFamily: 'Archivo', fontSize: 32, fontWeight: 700,
              color: 'white', letterSpacing: '-0.02em',
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <IconPhone size={22}/> 51 3443-4983
            </a>
            <a href="mailto:coleta@assouzatransportes.com.br" style={{
              fontSize: 15, color: 'rgba(255,255,255,0.7)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.14em' }}>E-MAIL</span>
              coleta@assouzatransportes.com.br
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="resp-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 48 }}>
          <div>
            <Logo height={56} variant="white"/>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: 'rgba(255,255,255,0.55)', marginTop: 22, maxWidth: 300 }}>
              Coleta, transporte e destinação final de óleo lubrificante usado e
              resíduos oleosos — com toda a documentação ambiental em dia.
            </p>
            <div style={{
              marginTop: 24, fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
              letterSpacing: '0.14em', color: 'rgba(255,255,255,0.4)',
            }}>
              CNPJ 13.374.901/0001-85<br/>
              A.S. SOUZA TRANSPORTES LTDA
            </div>
          </div>

          <div>
            <div style={footerStyles.h}>Escritório</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)' }}>
              Rua Carlos Chagas, 261<br/>
              Bairro Industrial<br/>
              Alvorada — RS<br/>
              CEP 94836-280
            </div>
          </div>

          <div>
            <div style={footerStyles.h}>Navegação</div>
            <a style={footerStyles.link} onClick={() => onNav('servicos')}
               onMouseEnter={e => e.target.style.color = 'white'}
               onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>Serviços</a>
            <a style={footerStyles.link} onClick={() => onNav('como')}
               onMouseEnter={e => e.target.style.color = 'white'}
               onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>Como funciona</a>
            <a style={footerStyles.link} onClick={() => onNav('sobre')}
               onMouseEnter={e => e.target.style.color = 'white'}
               onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>Sobre</a>
            <a style={footerStyles.link} onClick={() => onNav('compliance')}
               onMouseEnter={e => e.target.style.color = 'white'}
               onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>Licenças</a>
          </div>

          <div>
            <div style={footerStyles.h}>Atendimento</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)' }}>
              Seg a Sex · 08h–18h
            </div>
            <a onClick={() => window.dispatchEvent(new CustomEvent('openWhatsAppModal'))} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginTop: 16, padding: '10px 14px', borderRadius: 999,
              background: 'var(--orange)', color: 'white', cursor: 'pointer',
              fontSize: 13, fontWeight: 500,
            }}>
              <IconWhatsApp size={14}/> Abrir WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="resp-flex-col" style={{
          marginTop: 80, paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 12, color: 'rgba(255,255,255,0.4)', flexWrap: 'wrap', gap: 16,
        }}>
          <div>© 2009–2026 A.S. SOUZA Transportes · Logística Ambiental</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <span>Política de Privacidade</span>
            <span>LGPD</span>
            <span>Portal do Cliente</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
