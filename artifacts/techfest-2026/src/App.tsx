import { type CSSProperties, type PointerEvent, useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';

const official = 'https://techfest.org';

const competitions = [
  { title: 'The Wrecking Ball Challenge', type: 'Mechanical ingenuity', description: 'A collision of design thinking, force, and inventive engineering.' },
  { title: 'EV Infra & Green Mobility AI Challenge', type: 'AI · mobility', description: 'A challenge at the intersection of intelligent systems and greener movement.' },
  { title: 'AI for Technology Readiness', type: 'Artificial intelligence', description: 'Explore how AI can help move technology toward real-world readiness.' },
  { title: 'Namma Space', type: 'Space exploration', description: 'A competition inviting fresh perspectives on the space frontier.' },
  { title: 'The Urban Autonomous Mobility Challenge', type: 'Autonomous systems', description: 'Imagine the next chapter of autonomous movement through urban worlds.' },
  { title: 'Perceptron Hackathon', type: 'Hackathon', description: 'A focused build sprint for ideas shaped by computation and curiosity.' },
];

const pathways = [
  { name: 'BUILD', mark: '01', symbol: '↗', text: 'Make ideas tangible. Enter the workshop and competition worlds.', link: `${official}/workshops`, label: 'Explore workshops' },
  { name: 'THINK', mark: '02', symbol: '∴', text: 'Follow a question until it becomes a new way of seeing.', link: `${official}/competitions`, label: 'Enter competitions' },
  { name: 'DISCOVER', mark: '03', symbol: '⌖', text: 'Move through science, invention, and futures still taking shape.', link: `${official}/`, label: 'Discover Techfest' },
  { name: 'EXPERIENCE', mark: '04', symbol: '⟡', text: 'Feel engineering as spectacle in the Robowars arena.', link: `${official}/robowars`, label: 'See Robowars' },
];

const labQuestions = [
  { key: 'instinct', prompt: 'What pulls you in first?', answers: ['Making things', 'Solving puzzles', 'Unknown worlds'] },
  { key: 'scale', prompt: 'Pick your scale of impact.', answers: ['One precise mechanism', 'A system that learns', 'A whole new frontier'] },
  { key: 'energy', prompt: 'Your ideal kind of momentum?', answers: ['Hands-on and kinetic', 'Collaborative and curious', 'Big-picture and bold'] },
];

function HeroDiagram() {
  return <div className="orbital" aria-label="An abstract orbital instrument diagram">
    <span className="hero-annotation ann-a">IMAGINATION / 01</span>
    <span className="hero-annotation ann-b">FIELD OF POSSIBILITY</span>
    <span className="hero-annotation ann-c">BOMBAY · 2026</span>
    <svg viewBox="0 0 600 600" role="img" aria-label="Layered orbital lines meet at a luminous central point">
      <defs>
        <radialGradient id="coreGlow"><stop stopColor="#d7c38d" stopOpacity=".6"/><stop offset="1" stopColor="#8adce1" stopOpacity=".05"/></radialGradient>
      </defs>
      <circle className="orbit-line" cx="300" cy="300" r="225"/>
      <circle className="orbit-line" cx="300" cy="300" r="193" strokeDasharray="1 7"/>
      <ellipse className="orbit-line" cx="300" cy="300" rx="110" ry="225" transform="rotate(36 300 300)"/>
      <ellipse className="orbit-tech" cx="300" cy="300" rx="159" ry="234" transform="rotate(-44 300 300)"/>
      <ellipse className="orbit-line" cx="300" cy="300" rx="229" ry="122" transform="rotate(-28 300 300)"/>
      <circle className="orbit-tech" cx="300" cy="300" r="265"/>
      <path className="orbit-line" d="M300 26v112M300 462v112M26 300h110M464 300h110"/>
      <path className="orbit-line" d="M101 101l74 74M425 425l74 74M499 101l-74 74M175 425l-74 74"/>
      <circle className="orbit-core" cx="300" cy="300" r="93"/>
      <circle className="orbit-center" cx="300" cy="300" r="48"/>
      <path d="M281 300h38M300 281v38" stroke="#d9c38d" strokeWidth="1"/>
      <circle cx="300" cy="300" r="7" fill="#8be1e4"/>
      <circle cx="97" cy="257" r="4" fill="#8be1e4"/>
      <circle cx="457" cy="148" r="4" fill="#d9c38d"/>
      <circle cx="390" cy="495" r="3" fill="#8be1e4"/>
    </svg>
  </div>;
}

function RevealIllustration() {
  return <svg className="reveal-art" viewBox="0 0 760 470" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <g className="renaissance" fill="none" strokeWidth="1.2">
      <circle cx="380" cy="227" r="148"/><circle cx="380" cy="227" r="126" strokeDasharray="2 7"/>
      <path d="M380 69v316M222 227h316M268 115l224 224M492 115 268 339"/>
      <path d="M380 103c-44 46-64 85-64 124 0 38 20 76 64 124 44-48 64-86 64-124 0-39-20-78-64-124Z"/>
      <path d="M330 194c15-21 31-31 50-31 19 0 35 10 50 31M330 260c15 21 31 31 50 31 19 0 35-10 50-31"/>
      <path d="M269 174c34 2 53 18 61 48-8 30-27 46-61 48m222-96c-34 2-53 18-61 48 8 30 27 46 61 48"/>
      <path d="M356 205c8-9 16-14 24-14s16 5 24 14v44c-8 9-16 14-24 14s-16-5-24-14Z"/>
      <path d="M283 139l-12-12m196 12 12-12m-196 200-12 12m196-12 12 12"/>
      <path d="M380 33v24m0 340v24M186 227h24m340 0h24"/>
    </g>
    <g className="modern" fill="none" strokeWidth="1.25">
      <path d="M115 227h130l40-58h76l40 58h244M145 252h99l38 41h101l34-41h207"/>
      <rect x="278" y="142" width="205" height="170" rx="3"/>
      <path d="M302 163h62v47h-62zm94 0h68v18h-68zm0 29h68v18h-68zm-94 63h47v35h-47zm64 0h98v35h-98z"/>
      <circle cx="380" cy="227" r="12"/><path d="M380 215v-49m0 73v49m-12-61h-47m59 0h72"/>
      <path d="M175 137v23m0 134v36m405-190v25m0 123v31m-45-254h21M559 331h21"/>
      <path d="m241 109 34 34m210 174 34 34m0-242-34 34m-210 174-34 34"/>
      <circle cx="175" cy="227" r="5"/><circle cx="580" cy="227" r="5"/>
      <path d="M165 400h430M195 410h60m15 0h100m20 0h60m15 0h105"/>
    </g>
  </svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [now, setNow] = useState(Date.now());
  const [revealPosition, setRevealPosition] = useState({ x: 50, y: 50 });
  const [labAnswers, setLabAnswers] = useState<Record<string, string>>({});
  const [labResult, setLabResult] = useState<{
    title: string;
    realm: string;
    recommendation: string;
    href: string;
  } | null>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sessionStorage.getItem('aether-intro-seen')) setIntroVisible(true);
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    const introTimer = window.setTimeout(() => dismissIntro(), 1900);
    return () => { window.clearInterval(timer); window.clearTimeout(introTimer); };
  }, []);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 36);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '.section-head, .anniv-grid, .path-card, .dossier, .lab-form, .arena-visual, .quote-card, .transmission-question',
    );
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-in-view'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in-view');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

    targets.forEach((target, index) => {
      target.classList.add('reveal-on-scroll');
      target.style.transitionDelay = `${(index % 4) * 55}ms`;
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches || !cursorRef.current) return;
    const cursor = cursorRef.current;
    document.body.classList.add('aether-pointer');

    const handlePointerMove = (event: globalThis.PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      cursor.classList.add('is-visible');
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;

      const hovered = document.elementFromPoint(event.clientX, event.clientY);
      cursor.classList.toggle('is-active', Boolean(hovered?.closest('a, button, input, [role="button"]')));
      cursor.classList.toggle('is-lens', Boolean(hovered?.closest('.reveal-stage')));

      const orbital = document.querySelector<HTMLElement>('.orbital');
      if (orbital) {
        orbital.style.setProperty('--drift-x', `${(event.clientX / window.innerWidth - 0.5) * 12}px`);
        orbital.style.setProperty('--drift-y', `${(event.clientY / window.innerHeight - 0.5) * 10}px`);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.body.classList.remove('aether-pointer');
    };
  }, []);

  function dismissIntro() {
    sessionStorage.setItem('aether-intro-seen', '1');
    setIntroVisible(false);
  }

  const target = new Date('2026-12-16T00:00:00+05:30').getTime();
  const remaining = Math.max(0, target - now);
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  const eventStatus = remaining === 0 ? (now < target + 3 * 86400000 ? 'The gathering is in motion.' : 'The 2026 gathering has passed.') : 'The next convergence begins in';
  const allAnswered = labQuestions.every((question) => labAnswers[question.key]);

  function updateReveal(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setRevealPosition({
      x: Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100)),
      y: Math.max(0, Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100)),
    });
  }

  function recommend() {
    const answers = Object.values(labAnswers).join(' ');
    if (answers.includes('Unknown') || answers.includes('frontier')) {
      setLabResult({
        title: 'The Far-Sight Cartographer',
        realm: 'DISCOVER',
        recommendation: 'Follow your curiosity into Techfest’s wider programme.',
        href: `${official}/`,
      });
    } else if (answers.includes('puzzles') || answers.includes('learns')) {
      setLabResult({
        title: 'The Pattern Alchemist',
        realm: 'THINK',
        recommendation: 'Explore the official competition programme.',
        href: `${official}/competitions`,
      });
    } else {
      setLabResult({
        title: 'The Matterwright',
        realm: 'BUILD',
        recommendation: 'Find hands-on ideas in the official workshop programme.',
        href: `${official}/workshops`,
      });
    }
  }

  return <div className="site-shell">
    <div className="aether-cursor" ref={cursorRef} aria-hidden="true"/>
    {introVisible && <div className="intro-screen" aria-label="Aetherial Renaissance introduction">
      <div className="intro-content">
        <svg className="intro-constellation" viewBox="0 0 240 240" aria-hidden="true">
          <circle cx="120" cy="120" r="100"/>
          <circle cx="120" cy="120" r="72"/>
          <path d="M120 4v232M4 120h232M38 38l164 164M202 38 38 202"/>
          <path d="M120 21c-30 26-45 57-45 99s15 73 45 99c30-26 45-57 45-99s-15-73-45-99Z"/>
        </svg>
        <div className="intro-sigil" aria-hidden="true">A</div>
        <p>Every renaissance begins with an idea.</p>
        <button onClick={dismissIntro} data-testid="button-skip-intro">Skip introduction <span aria-hidden="true">↗</span></button>
      </div>
    </div>}

    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap nav-row">
        <a className="brand" href="#top" aria-label="Techfest 2026 home" data-testid="link-home">
          <span className="brand-seal" aria-hidden="true">T</span><span>TECHFEST <span style={{color:'#c3ab78'}}>’26</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
          {menuOpen ? <><X size={15}/> CLOSE</> : <><Menu size={15}/> MENU</>}
        </button>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#edition" onClick={() => setMenuOpen(false)}>THE EDITION</a>
          <a href="#pathways" onClick={() => setMenuOpen(false)}>EXPLORE</a>
          <a href="#competitions" onClick={() => setMenuOpen(false)}>COMPETITIONS</a>
          <a href="#aether-lab" onClick={() => setMenuOpen(false)}>AETHER LAB</a>
          <a href="#robowars" onClick={() => setMenuOpen(false)}>ROBOWARS</a>
          <a className="nav-cta" href={`${official}/`} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>OFFICIAL SITE <ArrowUpRight size={12}/></a>
        </nav>
      </div>
    </header>

    <main id="top">
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker reveal-on"><span/> TECHFEST IIT BOMBAY · 30TH EDITION</div>
            <h1 className="reveal-on">An<br/><em>Aetherial</em><br/>Renaissance</h1>
            <p className="hero-subtitle reveal-on">A meeting of the human imagination and the technologies we are only beginning to become.</p>
            <div className="hero-actions reveal-on">
              <a className="button-primary" href="#edition" data-testid="link-enter-the-world">Enter the world <ArrowDownRight size={15}/></a>
              <a className="button-quiet" href={`${official}/`} target="_blank" rel="noreferrer" data-testid="link-official-site">Techfest official <ArrowUpRight size={13}/></a>
            </div>
            <div className="hero-note"><b/> 16 — 18 DECEMBER 2026 <span style={{color:'#777'}}>·</span> IIT BOMBAY</div>
          </div>
          <div className="hero-art"><HeroDiagram/></div>
        </div>
        <div className="hero-coordinate">19°08′N · 72°54′E / FIELD NOTES</div>
      </section>

      <section className="countdown-band" aria-label="Countdown to Techfest 2026">
        <div className="wrap countdown-inner">
          <div className="count-intro">{eventStatus}<strong>16—18 December 2026</strong></div>
          <div className="count-unit"><strong>{String(days).padStart(3, '0')}</strong><span>DAYS</span></div>
          <div className="count-unit"><strong>{String(hours).padStart(2, '0')}</strong><span>HOURS</span></div>
          <div className="count-unit"><strong>{String(minutes).padStart(2, '0')}</strong><span>MINUTES</span></div>
          <div className="count-unit"><strong>{String(seconds).padStart(2, '0')}</strong><span>SECONDS</span></div>
        </div>
      </section>

      <section className="section section-light anniversary" id="edition">
        <div className="wrap">
          <div className="section-head">
            <div><div className="section-index">01 / THE EDITION</div><h2>Thirty marks.<br/><i>One open question.</i></h2></div>
            <p className="section-desc">Thirty abstract marks gather around a possibility. Not a timeline, not a claim of history—simply a signal to imagine what comes next.</p>
          </div>
          <div className="anniv-grid" aria-label="Thirty abstract anniversary nodes">
            {Array.from({length:30}, (_, index) => <div className="anniv-node" key={index} aria-label={`Anniversary mark ${index + 1}`}>{String(index + 1).padStart(2, '0')}</div>)}
          </div>
          <div className="anniv-caption"><span>AN OPEN FIELD OF THOUGHT</span><span>30 MARKS · NO CHRONOLOGY IMPLIED</span></div>
        </div>
      </section>

      <section className="section section-dark" id="pathways">
        <div className="wrap">
          <div className="section-head">
            <div><div className="section-index">02 / FOUR WAYS IN</div><h2>Choose your<br/><i>first principle.</i></h2></div>
            <p className="section-desc">A festival is not one kind of curiosity. Take the path that feels like yours; see where it leads.</p>
          </div>
          <div className="paths">
            {pathways.map((path) => <article className="path-card" key={path.name}>
              <div className="path-top"><span>FIELD {path.mark}</span><span className="path-icon" aria-hidden="true">{path.symbol}</span></div>
              <div><h3>{path.name}</h3><p>{path.text}</p><a className="path-link" href={path.link} target="_blank" rel="noreferrer" data-testid={`link-path-${path.name.toLowerCase()}`}>{path.label} <ArrowUpRight size={12}/></a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section reveal-section">
        <div className="wrap reveal-layout">
          <div className="reveal-copy">
            <div className="section-index">03 / AETHER REVEAL</div>
            <h2>Look closer.<br/><i>See what emerges.</i></h2>
            <p>Move through an illuminated study. Under the hand-drawn geometry, a second instrument comes into view: a small fiction about how imagination becomes engineering.</p>
            <div className="eyebrow">MOVE YOUR POINTER OR SLIDE THE FIELD</div>
          </div>
          <div>
            <div className="reveal-stage" ref={revealRef}
              onPointerMove={updateReveal}
              onPointerDown={updateReveal}
              style={{'--reveal-x': `${revealPosition.x}%`, '--reveal-y': `${revealPosition.y}%`, '--reveal-radius': '135px'} as CSSProperties}
              aria-label="Interactive reveal: move pointer to uncover the technology drawing">
              <span className="reveal-label">PLATE 03 · THE IDEA MADE VISIBLE</span>
              <RevealIllustration/>
              <div className="reveal-modern-mask" style={{position:'absolute',inset:0,clipPath:`circle(135px at ${revealPosition.x}% ${revealPosition.y}%)`,pointerEvents:'none'}}>
                <RevealIllustration/>
              </div>
              <div className="reveal-instructions"><span>ILLUMINATED LINE / 1490</span><span>ENGINEERING TRACE / 2026</span></div>
            </div>
            <label htmlFor="reveal-range" className="tiny-label" style={{display:'block',marginTop:13,color:'#8c9b9d',fontSize:9}}>KEYBOARD / TOUCH REVEAL POSITION</label>
            <input id="reveal-range" type="range" min="0" max="100" value={revealPosition.x} onChange={(event) => setRevealPosition((point) => ({...point,x:Number(event.target.value)}))} aria-label="Move reveal horizontally" style={{width:'100%',accentColor:'#83d9df',marginTop:7}}/>
          </div>
        </div>
      </section>

      <section className="section dossiers" id="competitions">
        <div className="wrap">
          <div className="section-head">
            <div><div className="section-index">04 / COMPETITION DOSSIERS</div><h2>Ideas under<br/><i>pressure.</i></h2></div>
            <p className="section-desc">A glimpse of named challenges from Techfest’s competition programme. Each dossier opens the official listing.</p>
          </div>
          <div className="dossier-list">
            {competitions.map((item, index) => <a className="dossier" href={`${official}/competitions`} target="_blank" rel="noreferrer" key={item.title} data-testid={`link-competition-${index + 1}`}>
              <span className="dossier-no">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><span className="dossier-type">{item.type}</span><span className="dossier-arrow"><ArrowUpRight size={15}/></span>
            </a>)}
          </div>
          <div className="dossiers-foot"><span>SUBJECT TO OFFICIAL PROGRAMME DETAILS</span><a href={`${official}/competitions`} target="_blank" rel="noreferrer">VIEW COMPETITIONS <ArrowRight size={12}/></a></div>
        </div>
      </section>

      <section className="section section-dark lab-section" id="aether-lab">
        <div className="wrap lab-grid">
          <div className="lab-intro">
            <div className="section-index">05 / THE AETHER LAB</div>
            <h2>Find your<br/><i>element.</i></h2>
            <p>Three small questions. One playful reading of your creative instinct. This little instrument stays right here in your browser.</p>
            <span className="eyebrow">NO SIGN-UP · NO WRONG ANSWERS</span>
          </div>
          <div className="lab-form">
            {labQuestions.map((question, index) => <fieldset className="question" key={question.key} style={{border:0,padding:0,marginInline:0}}>
              <legend className="tiny-label" style={{color:'#83d9df',fontSize:9,marginBottom:9}}>0{index + 1} / SIGNAL</legend>
              <label>{question.prompt}</label>
              <div className="choices">{question.answers.map((answer) => <label className="choice" key={answer}>
                <input type="radio" name={question.key} value={answer} checked={labAnswers[question.key] === answer} onChange={() => {setLabAnswers((previous) => ({...previous,[question.key]:answer}));setLabResult(null);}}/>
                <span>{answer}</span>
              </label>)}</div>
            </fieldset>)}
            <button className="button-primary" type="button" disabled={!allAnswered} onClick={recommend} style={{opacity:allAnswered?1:.48}} data-testid="button-reveal-realm">Reveal my realm <ArrowRight size={14}/></button>
            {labResult && <div className="lab-result" role="status" aria-live="polite"><span className="tiny-label">YOUR AETHERIAL ARCHETYPE · {labResult.realm}</span><h3>{labResult.title}</h3><p>{labResult.recommendation}</p><a className="path-link" href={labResult.href} target="_blank" rel="noreferrer">Follow the signal <ArrowUpRight size={12}/></a></div>}
          </div>
        </div>
      </section>

      <section className="section arena" id="robowars">
        <div className="wrap arena-grid">
          <div className="arena-copy">
            <div className="section-index">06 / THE ARENA</div>
            <h2>Force meets<br/><i>foresight.</i></h2>
            <p>In the Robowars arena, engineering leaves the page. A 2D study of momentum, machine, and the charged instant before impact.</p>
            <a className="button-quiet" href={`${official}/robowars`} target="_blank" rel="noreferrer" data-testid="link-robowars">Enter Robowars <ArrowUpRight size={13}/></a>
          </div>
          <div className="arena-visual" role="img" aria-label="Abstract diagram of two robots facing off in a technical arena">
            <div className="arena-caption"><span>ARENA STUDY / 02</span><span>FORCE VECTOR — LIVE</span></div>
            <div className="arena-ring"></div><div className="arena-ring"></div>
            <div className="bot bot-left"></div><div className="bot bot-right"></div>
            <div className="arena-sparks" aria-hidden="true"></div>
            <svg viewBox="0 0 600 390" style={{position:'absolute',inset:0,width:'100%',height:'100%',zIndex:1}} aria-hidden="true">
              <path d="M95 282h130m150 0h130" stroke="#bba66d" strokeDasharray="3 8" opacity=".7"/>
              <path d="M205 264l15 18-15 18m190-36-15 18 15 18" fill="none" stroke="#86dadd"/>
              <circle cx="300" cy="282" r="8" fill="none" stroke="#86dadd"/><path d="M300 270v24m-12-12h24" stroke="#86dadd"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="section transmission">
        <div className="wrap">
          <div className="section-head">
            <div><div className="section-index">07 / GENERATIONAL TRANSMISSIONS</div><h2>The question<br/><i>keeps changing.</i></h2></div>
            <p className="section-desc">An imagined exchange between generations of makers. Not quotations from real people—just the questions a future inherits.</p>
          </div>
          <div className="quote-stack">
            <article className="quote-card"><span className="generation">TRANSMISSION 01 / THE FIRST DRAWING</span><blockquote>“What if the world could be understood by drawing it?”</blockquote><small>A question for the page</small></article>
            <article className="quote-card"><span className="generation">TRANSMISSION 02 / THE FIRST MODEL</span><blockquote>“What if the drawing could move?”</blockquote><small>A question for the workshop</small></article>
            <article className="quote-card"><span className="generation">TRANSMISSION 03 / THE NEXT MAKER</span><blockquote>“What if it could learn what we have not yet imagined?”</blockquote><small>A question without an answer yet</small></article>
            <article className="quote-card"><span className="generation">TRANSMISSION 04 / HAND TO HAND</span><blockquote>“Take the question further than I could.”</blockquote><small>Passed forward, not finished</small></article>
          </div>
          <p className="transmission-question">WHAT WILL YOUR GENERATION IMAGINE?</p>
        </div>
      </section>

      <footer className="final-cta" id="gather">
        <div className="wrap">
          <div className="eyebrow" style={{justifyContent:'center'}}>16—18 DECEMBER 2026 · IIT BOMBAY</div>
          <h2>The next<br/>renaissance won’t<br/>be read about.<br/>It will be built by<br/><em>you.</em></h2>
          <p>Techfest, IIT Bombay. Asia’s largest science and technology festival. A gathering for the curious, the builders, and the not-yet-imagined.</p>
          <div className="final-actions">
            <a className="button-primary" href="#pathways" data-testid="link-final-explore">Explore Techfest <ArrowDownRight size={14}/></a>
            <a className="button-quiet" href={`${official}/`} target="_blank" rel="noreferrer" data-testid="link-final-official">Visit official website <ArrowUpRight size={14}/></a>
          </div>
          <div className="final-meta"><span>TECHFEST IIT BOMBAY · 30TH EDITION</span><span>AN AETHERIAL RENAISSANCE</span><span>16 — 18 DEC 2026</span></div>
        </div>
      </footer>
    </main>
  </div>;
}

export default App;
