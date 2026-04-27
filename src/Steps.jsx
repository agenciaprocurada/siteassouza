// "Como funciona" — 3 vias: formulário, telefone, whatsapp. Interactive selection.

const stepsStyles = {
  section: { padding: '140px 48px 100px', maxWidth: 1400, margin: '0 auto' },
  header: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 72, alignItems: 'end' },
  h2: { fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em' },
  sub: { fontSize: 17, lineHeight: 1.55, color: 'var(--muted)', maxWidth: 460 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 },
};

const STEPS = [
  {
    n: '01',
    icon: IconForm,
    title: 'Pelo formulário',
    desc: 'Preencha o pedido online com detalhes do material e volume. Agendamos em até 2h úteis e enviamos confirmação por e-mail.',
    sla: 'Resposta: 2h úteis',
    cta: 'Abrir formulário',
    highlight: 'Recomendado para a primeira coleta',
  },
  {
    n: '02',
    icon: IconPhone,
    title: 'Por telefone',
    desc: 'Ligue e fale com nossa central. Atendemos de segunda a sexta, das 8h às 18h, e sábados até meio-dia.',
    sla: '51 3443-4983',
    cta: 'Ligar agora',
    highlight: 'Para clientes recorrentes',
  },
  {
    n: '03',
    icon: IconWhatsApp,
    title: 'Por WhatsApp',
    desc: 'Envie uma mensagem com a localização e volume aproximado. Resposta rápida, sem formulários, com confirmação de agendamento.',
    sla: 'Resposta: ~15min',
    cta: 'Abrir conversa',
    highlight: 'Mais rápido para pequenos volumes',
  },
];

function Steps({ variant = 'cards' }) {
  const [hover, setHover] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const handleStepClick = (index) => {
    if (index === 0) {
      window.dispatchEvent(new CustomEvent('openHeroForm'));
      setTimeout(() => {
        const form = document.getElementById('hero-form');
        if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    } else if (index === 1) {
      window.location.href = 'tel:5134434983';
    } else if (index === 2) {
      setShowModal(true);
    }
  };

  React.useEffect(() => {
    const openModal = () => setShowModal(true);
    window.addEventListener('openWhatsAppModal', openModal);
    return () => window.removeEventListener('openWhatsAppModal', openModal);
  }, []);

  return (
    <section id="como" className="resp-section" style={stepsStyles.section} data-screen-label="Steps">
      <div className="resp-header" style={stepsStyles.header}>
        <div>
          <Eyebrow>Como solicitar sua coleta</Eyebrow>
          <h2 className="resp-h2" style={{ ...stepsStyles.h2, marginTop: 18 }}>
            Três caminhos.<br />
            <span style={{ color: 'var(--orange)' }}>Um mesmo padrão</span> de atendimento.
          </h2>
        </div>
        <p style={stepsStyles.sub}>
          Escolha o meio mais conveniente. Todas as solicitações geram protocolo,
          manifesto de transporte e certificado de destinação final — conforme
          exigência da Resolução ANP 20/2009.
        </p>
      </div>

      <div className="resp-grid" style={stepsStyles.grid}>
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const isHover = hover === i;
          return (
            <div key={i}
              onClick={() => handleStepClick(i)}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{
                position: 'relative',
                background: isHover ? 'var(--ink)' : 'white',
                color: isHover ? 'white' : 'var(--ink)',
                borderRadius: 20, padding: 36,
                border: '1px solid rgba(11,26,46,0.08)',
                transition: 'all 0.3s ease',
                transform: isHover ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: isHover ? '0 30px 60px rgba(11,26,46,0.25)' : '0 0 0 0 transparent',
                cursor: 'pointer',
                overflow: 'hidden',
              }}>

              {/* number watermark */}
              <div style={{
                position: 'absolute', top: 20, right: 28,
                fontFamily: 'Archivo', fontSize: 68, fontWeight: 800,
                color: isHover ? 'rgba(255,255,255,0.08)' : 'rgba(11,26,46,0.05)',
                letterSpacing: '-0.04em', lineHeight: 1, transition: 'color 0.3s ease',
              }}>{s.n}</div>

              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: isHover ? 'var(--orange)' : 'var(--paper)',
                color: isHover ? 'white' : 'var(--ink)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 28, transition: 'all 0.3s ease',
              }}>
                <Icon size={24} />
              </div>

              <h3 style={{ fontSize: 24, fontWeight: 700, color: 'inherit', marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{
                fontSize: 14, lineHeight: 1.6,
                color: isHover ? 'rgba(255,255,255,0.7)' : 'var(--muted)',
                marginBottom: 24, transition: 'color 0.3s ease',
              }}>
                {s.desc}
              </p>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500,
                color: isHover ? 'var(--orange)' : 'var(--ink)',
                marginBottom: 20,
              }}>
                <span style={{ width: 18, height: 1, background: 'currentColor' }} />
                {s.sla}
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingTop: 20, borderTop: `1px solid ${isHover ? 'rgba(255,255,255,0.12)' : 'rgba(11,26,46,0.08)'}`,
                transition: 'border 0.3s ease',
              }}>
                <span style={{
                  fontSize: 13, fontWeight: 500,
                  color: isHover ? 'white' : 'var(--ink)'
                }}>
                  {s.cta}
                </span>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: isHover ? 'var(--orange)' : 'transparent',
                  border: isHover ? 'none' : '1px solid rgba(11,26,46,0.14)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: isHover ? 'white' : 'var(--ink)',
                  transition: 'all 0.3s ease',
                  transform: isHover ? 'translateX(0)' : 'translateX(0)',
                }}>
                  <IconArrow size={14} />
                </div>
              </div>

              {s.highlight && (
                <div style={{
                  position: 'absolute', top: 20, left: 20,
                  padding: '4px 10px', borderRadius: 999, fontSize: 10,
                  fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.12em',
                  textTransform: 'uppercase', fontWeight: 500,
                  background: isHover ? 'rgba(242,107,26,0.2)' : 'var(--orange-soft)',
                  color: isHover ? 'var(--orange)' : 'var(--orange-deep)',
                  border: `1px solid ${isHover ? 'rgba(242,107,26,0.3)' : 'rgba(242,107,26,0.2)'}`,
                  display: i === 0 ? 'block' : 'none',
                }}>
                  Recomendado
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* WhatsApp Modal */}
      {showModal && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100,
          background: 'rgba(11,26,46,0.8)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 20,
        }} onClick={() => setShowModal(false)}>
          <div style={{
            background: 'var(--paper)', width: '100%', maxWidth: 400,
            borderRadius: 24, padding: 32, position: 'relative',
          }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} style={{
              position: 'absolute', top: 16, right: 16, background: 'transparent',
              border: 'none', fontSize: 24, color: 'var(--muted)', cursor: 'pointer',
            }}>&times;</button>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, color: 'var(--ink)' }}>Atendimento WhatsApp</h3>
            <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 24 }}>
              Preencha seus dados básicos para iniciarmos o atendimento com a equipe.
            </p>
            <form onSubmit={e => {
              e.preventDefault();
              const fd = new FormData(e.target);
              const nome = fd.get('nome');
              const telefone = fd.get('telefone');

              fetch('https://n8n-n8n.uzj3vo.easypanel.host/webhook/assouza-contato-whats-conversa', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, telefone })
              })
                .then(() => {
                  alert('Solicitação enviada com sucesso! Em breve nossa equipe entrará em contato.');
                  setShowModal(false);
                })
                .catch(err => {
                  console.error(err);
                  alert('Ocorreu um erro ao enviar. Por favor, tente novamente.');
                });
            }}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 8, color: 'var(--ink)' }}>Nome</label>
                <input name="nome" required style={{
                  width: '100%', padding: '12px 16px', borderRadius: 8,
                  border: '1px solid rgba(11,26,46,0.1)', background: 'white', color: 'var(--ink)',
                }} placeholder="Seu nome completo" />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 8, color: 'var(--ink)' }}>Telefone / WhatsApp</label>
                <input name="telefone" required type="tel" style={{
                  width: '100%', padding: '12px 16px', borderRadius: 8,
                  border: '1px solid rgba(11,26,46,0.1)', background: 'white', color: 'var(--ink)',
                }} placeholder="(51) 99999-9999" />
              </div>
              <Btn variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }} type="submit" icon={<IconWhatsApp size={16} />}>
                Iniciar Conversa
              </Btn>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

Object.assign(window, { Steps });
