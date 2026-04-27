// Hero with integrated request form — right side is form card, left is oversized type.

const heroStyles = {
  wrap: {
    position: 'relative',
    overflow: 'clip',
  },
  inner: (isMobile) => ({
    maxWidth: 1400, margin: '0 auto',
    padding: isMobile ? '100px 20px 48px' : '120px 48px',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr',
    gap: isMobile ? 32 : 80,
    alignItems: 'center',
  }),
  kicker: {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    padding: '8px 14px', borderRadius: 999,
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.85)',
  },
  h1: (isMobile) => ({
    fontSize: isMobile ? '36px' : '55px',
    fontWeight: 800, lineHeight: 0.95,
    color: 'white', marginTop: 28,
    letterSpacing: '-0.035em',
  }),
  lead: {
    fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,0.72)',
    marginTop: 28, maxWidth: 520,
  },
  statsRow: {
    display: 'flex', gap: 40, marginTop: 48,
    paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.12)',
  },
  stat: { display: 'flex', flexDirection: 'column', gap: 6 },
  statNum: {
    fontFamily: 'Archivo', fontSize: 44, fontWeight: 700,
    color: 'white', letterSpacing: '-0.03em', lineHeight: 1,
  },
  statLabel: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
  },

  /* truck background */
  bgLayer: {
    position: 'absolute', inset: 0, zIndex: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  bgOverlay: {
    position: 'absolute', inset: 0, zIndex: 1,
    background: 'linear-gradient(135deg, rgba(11,26,46,0.88) 0%, rgba(19,40,68,0.80) 60%, rgba(11,26,46,0.88) 100%)',
  },
  bgStripes: {
    position: 'absolute', inset: 0, zIndex: 1,
    backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 40px, rgba(255,255,255,0.015) 40px 41px)',
  },
  bgOrangeBar: {
    position: 'absolute', right: -120, top: 80, width: 400, height: 60,
    background: 'var(--orange)', transform: 'skewY(-8deg)',
    boxShadow: '0 20px 60px rgba(242,107,26,0.4)',
    zIndex: 1,
  },
  bgOrangeBar2: {
    position: 'absolute', right: -120, top: 170, width: 320, height: 60,
    background: 'var(--orange-deep)', transform: 'skewY(-8deg)',
    zIndex: 1,
  },
};

function Hero({ onRequestCollect, isMobile }) {
  const [showMobileForm, setShowMobileForm] = React.useState(false);

  const handleCTA = () => {
    if (isMobile && !showMobileForm) {
      setShowMobileForm(true);
      setTimeout(() => {
        const form = document.getElementById('hero-form');
        if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    } else {
      onRequestCollect();
    }
  };

  React.useEffect(() => {
    const showForm = () => setShowMobileForm(true);
    window.addEventListener('openHeroForm', showForm);
    return () => window.removeEventListener('openHeroForm', showForm);
  }, []);

  return (
    <section id="top" style={heroStyles.wrap} data-screen-label="Hero">
      <div className="hero-bg-layer" style={heroStyles.bgLayer} />
      <div style={heroStyles.bgOverlay} />
      <div style={heroStyles.bgStripes} />
      {/* Subtle orange accent bars echoing logo */}
      <div style={{ position: 'absolute', left: -100, bottom: -40, width: 600, height: 100,
        background: 'var(--orange)', transform: 'skewY(-6deg)', opacity: 0.08, zIndex: 1 }}/>

      <div style={{ ...heroStyles.inner(isMobile), position: 'relative', zIndex: 2 }}>
        <div>
          <div style={heroStyles.kicker}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--orange)' }}/>
            Logística Ambiental · Desde 2009
          </div>

          <h1 style={heroStyles.h1(isMobile)}>
            Coleta e destinação<br/>
            de <span style={{ color: 'var(--orange)' }}>óleo lubrificante</span><br/>
            usado com{' '}
            <span style={{
              position: 'relative', display: 'inline-block',
            }}>
              rastreabilidade
              <svg style={{ position: 'absolute', bottom: -6, left: 0, width: '100%' }}
                   height="14" viewBox="0 0 400 14" preserveAspectRatio="none">
                <path d="M2 9 Q100 2 200 7 T398 6" stroke="var(--orange)" strokeWidth="4"
                      fill="none" strokeLinecap="round"/>
              </svg>
            </span>.
          </h1>

          <p style={heroStyles.lead}>
            Atendemos indústrias, postos e oficinas em todo o Rio Grande do Sul
            com frota licenciada, manifesto de transporte e destinação final
            a rerrefino autorizado pela ANP.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
            <Btn variant="primary" size="lg" onClick={handleCTA}
                 icon={<IconArrow size={16}/>}>
              Solicitar coleta agora
            </Btn>
          </div>

          <div style={heroStyles.statsRow}>
            <div style={heroStyles.stat}>
              <div style={heroStyles.statNum}>17<span style={{ color: 'var(--orange)' }}>+</span></div>
              <div style={heroStyles.statLabel}>Anos de operação</div>
            </div>
            <div style={heroStyles.stat}>
              <div style={heroStyles.statNum}>2.4<span style={{ fontSize: 22, color: 'rgba(255,255,255,0.5)' }}>M L</span></div>
              <div style={heroStyles.statLabel}>Coletados por ano</div>
            </div>
            <div style={heroStyles.stat}>
              <div style={heroStyles.statNum}>480<span style={{ color: 'var(--orange)' }}>+</span></div>
              <div style={heroStyles.statLabel}>Clientes ativos</div>
            </div>
          </div>
        </div>

        {(!isMobile || showMobileForm) && (
          <HeroForm onSubmit={onRequestCollect}/>
        )}
      </div>

      {/* scroll hint */}
      <div className="resp-hide" style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        zIndex: 3, fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.3)' }}/>
        Role para conhecer
      </div>
    </section>
  );
}

// ---------- Hero form ----------
const formStyles = {
  card: {
    background: 'white', borderRadius: 20, padding: 36,
    boxShadow: '0 40px 100px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)',
    position: 'relative',
  },
  stepDots: { display: 'flex', gap: 6, marginBottom: 24 },
  dot: (active, done) => ({
    flex: 1, height: 3, borderRadius: 2,
    background: done ? 'var(--orange)' : active ? 'var(--ink)' : 'rgba(11,26,46,0.12)',
    transition: 'background 0.2s ease',
  }),
  label: {
    display: 'block', fontFamily: 'JetBrains Mono, monospace',
    fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'var(--muted)', marginBottom: 8, marginTop: 16,
  },
  input: {
    width: '100%', padding: '14px 16px', fontSize: 15,
    fontFamily: 'Inter, sans-serif',
    border: '1px solid rgba(11,26,46,0.12)', borderRadius: 10,
    background: 'var(--paper)', color: 'var(--ink)',
    transition: 'border 0.15s ease, background 0.15s ease',
    outline: 'none',
  },
  chipRow: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  chip: (active) => ({
    padding: '10px 14px', borderRadius: 999, cursor: 'pointer',
    fontSize: 13, fontWeight: 500,
    background: active ? 'var(--ink)' : 'var(--paper)',
    color: active ? 'white' : 'var(--ink)',
    border: active ? '1px solid var(--ink)' : '1px solid rgba(11,26,46,0.12)',
    transition: 'all 0.15s ease',
  }),
};

function HeroForm({ onSubmit }) {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [data, setData] = React.useState({
    tipo: 'empresa', // 'empresa' | 'pessoa'
    nome: '', // Razão Social or Nome Completo
    documento: '', // CNPJ
    material: [], volume: '', cidade: '',
    endereco: '', telefone: '',
  });

  const materials = ['Óleo lubrificante usado', 'Filtros', 'Estopas contaminadas'];

  const citiesRS = [
    "Porto Alegre", "Caxias do Sul", "Canoas", "Pelotas", "Santa Maria",
    "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande",
    "Alvorada", "Passo Fundo", "Sapucaia do Sul", "Uruguaiana", "Santa Cruz do Sul",
    "Cachoeirinha", "Bagé", "Bento Gonçalves", "Erechim", "Guaíba", "Outra"
  ].sort();

  const maskPhone = (v) => {
    v = v.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length <= 10) {
      return v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").replace(/-$/, "");
    }
    return v.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  };

  const maskCNPJ = (v) => {
    v = v.replace(/\D/g, "");
    if (v.length > 14) v = v.slice(0, 14);
    return v.replace(/^(\d{2})(\d)/, "$1.$2")
            .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
            .replace(/\.(\d{3})(\d)/, ".$1/$2")
            .replace(/(\d{4})(\d)/, "$1-$2");
  };

  const handlePhoneChange = (e) => {
    const masked = maskPhone(e.target.value);
    setData({ ...data, telefone: masked });
  };

  const toggleMat = (m) => {
    setData(d => ({ ...d, material: d.material.includes(m)
      ? d.material.filter(x => x !== m) : [...d.material, m] }));
  };

  const canNext0 = (data.tipo === 'pessoa' ? data.nome.trim().length > 0 : data.documento.replace(/\D/g, "").length >= 1) && data.material.length > 0;
  
  React.useEffect(() => {
    console.log("Form Validation Check:", {
      tipo: data.tipo,
      id_filled: data.tipo === 'pessoa' ? !!data.nome.trim() : data.documento.replace(/\D/g, "").length >= 1,
      material_selected: data.material.length > 0,
      canNext: canNext0
    });
  }, [data, canNext0]);
  const canSubmit = data.telefone.replace(/\D/g, "").length >= 10 && data.cidade && data.endereco.trim();

  const handleFinalSubmit = async () => {
    if (!canSubmit) return;
    
    // Unmask phone
    const unmaskedPhone = data.telefone.replace(/\D/g, "");
    const submissionData = {
      ...data,
      telefone: unmaskedPhone,
      timestamp: new Date().toISOString()
    };

    try {
      await fetch('https://n8n-n8n.uzj3vo.easypanel.host/webhook/assouza-contato-whats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });
    } catch (e) {
      console.error("Webhook error:", e);
    }
    
    setSubmitted(true);
    if (onSubmit) onSubmit();
  };

  if (submitted) {
    return (
      <div style={formStyles.card}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: 'var(--orange)', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 18px',
        }}>
          <IconCheck size={28}/>
        </div>
        <h3 style={{ fontSize: 26, textAlign: 'center', marginBottom: 10 }}>
          Solicitação enviada
        </h3>
        <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 14, lineHeight: 1.55 }}>
          Entraremos em contato em até <strong style={{ color: 'var(--ink)' }}>2 horas úteis</strong>{' '}
          para agendar a coleta em <strong style={{ color: 'var(--ink)' }}>{data.cidade || 'sua cidade'}</strong>.
        </p>
        <button onClick={() => { setSubmitted(false); setStep(0); setData({ tipo:'empresa', nome:'', documento:'', material:[], volume:'', cidade:'', endereco:'', telefone:'' }); }}
          style={{ ...formStyles.input, marginTop: 24, background: 'transparent',
                   cursor: 'pointer', textAlign: 'center', fontWeight: 600, color: 'var(--ink)' }}>
          Nova solicitação
        </button>
      </div>
    );
  }

  return (
    <div style={formStyles.card} id="hero-form">
      {/* Tag label */}
      <div style={{
        position: 'absolute', top: -14, left: 28,
        background: 'var(--orange)', color: 'white',
        padding: '6px 12px', borderRadius: 6,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600,
      }}>
        Solicitação de Coleta online
      </div>

      <div style={formStyles.stepDots}>
        <div style={formStyles.dot(step === 0, step > 0)}/>
        <div style={formStyles.dot(step === 1, step > 1)}/>
      </div>

      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
        letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>
        Passo {step + 1} de 2
      </div>
      <h3 style={{ fontSize: 26, lineHeight: 1.1, marginBottom: 6 }}>
        {step === 0 ? 'O que você precisa coletar?' : 'Onde e como te encontramos?'}
      </h3>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>
        {step === 0 ? 'Preencha os detalhes — respondemos em 2h.' : 'Dados de contato para agendar.'}
      </p>

      {step === 0 && (
        <>
          <label style={formStyles.label}>Tipo de solicitante</label>
          <div style={formStyles.chipRow}>
            <button type="button" onClick={() => setData({ ...data, tipo: 'empresa' })}
              style={formStyles.chip(data.tipo === 'empresa')}>Empresa</button>
            <button type="button" onClick={() => setData({ ...data, tipo: 'pessoa' })}
              style={formStyles.chip(data.tipo === 'pessoa')}>Pessoa Física</button>
          </div>

          {data.tipo === 'pessoa' ? (
            <>
              <label style={formStyles.label}>Nome Completo</label>
              <input style={formStyles.input} placeholder="Seu nome completo"
                value={data.nome} onChange={e => setData({ ...data, nome: e.target.value })}
                onFocus={e => e.target.style.border = '1px solid var(--orange)'}
                onBlur={e => e.target.style.border = '1px solid rgba(11,26,46,0.12)'}/>
            </>
          ) : (
            <>
              <label style={formStyles.label}>CNPJ</label>
              <input style={formStyles.input} placeholder="00.000.000/0000-00"
                value={data.documento} onChange={e => setData({ ...data, documento: maskCNPJ(e.target.value) })}
                onFocus={e => e.target.style.border = '1px solid var(--orange)'}
                onBlur={e => e.target.style.border = '1px solid rgba(11,26,46,0.12)'}/>
            </>
          )}

          <label style={formStyles.label}>Material (selecione um ou mais)</label>
          <div style={formStyles.chipRow}>
            {materials.map(m => (
              <button key={m} type="button" onClick={() => toggleMat(m)}
                style={formStyles.chip(data.material.includes(m))}>
                {data.material.includes(m) && '✓ '}{m}
              </button>
            ))}
          </div>

          <label style={formStyles.label}>Volume estimado</label>
          <input style={formStyles.input} placeholder="Ex: 200L, 1 tambor, 2m³"
            value={data.volume} onChange={e => setData({ ...data, volume: e.target.value })}
            onFocus={e => e.target.style.border = '1px solid var(--orange)'}
            onBlur={e => e.target.style.border = '1px solid rgba(11,26,46,0.12)'}/>

          <button onClick={() => canNext0 && setStep(1)}
            disabled={!canNext0}
            style={{
              width: '100%', marginTop: 24, padding: '14px 20px',
              background: canNext0 ? 'var(--ink)' : 'rgba(11,26,46,0.2)',
              color: 'white', border: 'none', borderRadius: 10,
              fontWeight: 600, fontSize: 15, cursor: canNext0 ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transition: 'background 0.15s ease',
            }}>
            Continuar <IconArrow size={16}/>
          </button>
        </>
      )}

      {step === 1 && (
        <>
          <label style={formStyles.label}>Cidade</label>
          <select style={formStyles.input}
            value={data.cidade} onChange={e => setData({ ...data, cidade: e.target.value })}
            onFocus={e => e.target.style.border = '1px solid var(--orange)'}
            onBlur={e => e.target.style.border = '1px solid rgba(11,26,46,0.12)'}>
            <option value="">Selecione sua cidade</option>
            {citiesRS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <label style={formStyles.label}>Endereço</label>
          <input style={formStyles.input} placeholder="Rua, número, bairro..."
            value={data.endereco} onChange={e => setData({ ...data, endereco: e.target.value })}
            onFocus={e => e.target.style.border = '1px solid var(--orange)'}
            onBlur={e => e.target.style.border = '1px solid rgba(11,26,46,0.12)'}/>

          <label style={formStyles.label}>Telefone</label>
          <input style={formStyles.input} placeholder="(51) 90000-0000"
            value={data.telefone} onChange={handlePhoneChange}
            onFocus={e => e.target.style.border = '1px solid var(--orange)'}
            onBlur={e => e.target.style.border = '1px solid rgba(11,26,46,0.12)'}/>

          <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
            <button onClick={() => setStep(0)}
              style={{ padding: '14px 20px', background: 'transparent',
                       color: 'var(--ink)', border: '1px solid rgba(11,26,46,0.14)',
                       borderRadius: 10, cursor: 'pointer', fontWeight: 500 }}>
              Voltar
            </button>
            <button onClick={handleFinalSubmit}
              disabled={!canSubmit}
              style={{
                flex: 1, padding: '14px 20px',
                background: canSubmit ? 'var(--orange)' : 'rgba(242,107,26,0.3)',
                color: 'white', border: 'none', borderRadius: 10,
                fontWeight: 600, fontSize: 15, cursor: canSubmit ? 'pointer' : 'not-allowed',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                boxShadow: canSubmit ? '0 6px 20px rgba(242,107,26,0.35)' : 'none',
              }}>
              Enviar solicitação <IconArrow size={16}/>
            </button>
          </div>
        </>
      )}

      <div style={{
        marginTop: 22, paddingTop: 18, borderTop: '1px solid rgba(11,26,46,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 12, color: 'var(--muted)',
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <IconShield size={14}/> Dados protegidos (LGPD)
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.1em' }}>
          RESPOSTA EM 2H
        </span>
      </div>
    </div>
  );
}

Object.assign(window, { Hero, HeroForm });
