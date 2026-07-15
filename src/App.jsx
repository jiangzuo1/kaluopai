import { useEffect, useMemo, useState } from 'react'
import atlas from './assets/organimo/atlas.png'
import canadaIcon from './assets/organimo/canada-icon.png'
import glutenIcon from './assets/organimo/gluten-icon.png'
import gmoIcon from './assets/organimo/gmo-icon.png'
import mark from './assets/organimo/mark-05a45128.png'
import preservativeIcon from './assets/organimo/preservatives-icon.png'
import socialImage from './assets/organimo/organimo-social-image.jpg'
import usaIcon from './assets/organimo/usa-icon.png'
import veganIcon from './assets/organimo/vegan-icon.png'

const benefits = [
  {
    title: 'Energy Levels',
    points: [
      'Rich in vitamins and minerals like iron that increase energy levels.',
      'Anti-Inflammatory properties reduce risk of fatigue.',
    ],
  },
  {
    title: 'Immune Support',
    points: [
      'Anti-aging, anti-bacterial, anti-inflammatory and anti-viral.',
      'Boosts immunity by cleansing blood, removing toxins and lowering inflammation in the body.',
    ],
  },
  {
    title: 'Cognitive Function',
    points: [
      'High magnesium and potassium levels work together to impact brain health.',
      'Increases cognitive function, focus, memory and boosts mood.',
    ],
  },
  {
    title: 'Skin Health',
    points: [
      'Anti-aging, collagen production, reduces acne, hydrates skin and decreases excessive sebum oil in the skin.',
      'Helps with severe skin conditions like eczema and psoriasis.',
    ],
  },
  {
    title: 'Sexual health',
    points: [
      'Men: Improves libido, boosts sex drive, helps erectile dysfunction, increases quantity and quality of sperm.',
      'Women: Improves libido, boosts sex drive, increases fertility, helps manage and better hormonal and menstrual problems.',
    ],
  },
  {
    title: 'Respiratory Health',
    points: [
      'Removes mucus from the body, improves breathing and boosts overall lung function.',
      'Natural decongestants and demulcent herbs, protect and soothe the bronchial system, inflamed tissues and lung tubes.',
    ],
  },
  {
    title: 'Heart Health',
    points: [
      'High in omega-3 fatty acids, fiber and potassium.',
      'Helps lower risk of heart disease, diabetes, blood clots, high cholesterol, and high blood pressure.',
    ],
  },
  {
    title: 'Digestive Health',
    points: ['Natural prebiotic supplement.', 'Improves gut health, digestion, weight loss and promotes a healthy colon.'],
  },
]

const footerLinksLeft = [
  ['Contact', 'mailto:support@organimo.com'],
  ['Wholesale', 'https://organimo.com/wholesale/'],
  ['Returns policy', 'https://organimo.com/returns-policy/'],
]

const footerLinksRight = [
  ['News', 'https://organimo.com/news/'],
  ['Disclaimer', 'https://organimo.com/disclaimer/'],
  ['Privacy policy', 'https://organimo.com/privacy-policy/'],
  ['Terms of service', 'https://organimo.com/terms-of-service/'],
]

const seals = [
  ['vegan', veganIcon],
  ['harvested in canada', canadaIcon],
  ['non gmo', gmoIcon],
  ['gluten free', glutenIcon],
  ['no preservatives', preservativeIcon],
  ['made in usa', usaIcon],
]

function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 900)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section className={hidden ? 'loader is-hidden' : 'loader'} aria-hidden={hidden}>
      <div className="loader-logo">
        <img src={mark} alt="" />
        <span>ORGANIMO</span>
      </div>
      <div className="loader-sprite">
        <img src={atlas} alt="Loading animation" />
      </div>
      <div className="loader-progress">
        <span />
        <b>100</b>
        <span />
      </div>
      <p>
        <span>Click</span> anywhere to enable audio
      </p>
    </section>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currencyOpen, setCurrencyOpen] = useState(false)

  return (
    <>
      <header className="header">
        <a className="pill-button" href="https://organimo.com/seamoss/">
          <span>Shop</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="https://organimo.com/affirm/">Affirm</a>
          <a href="https://organimo.com/news/">News</a>
        </nav>
        <a className="logo" href="https://organimo.com" aria-label="Back to homepage">
          <img src={mark} alt="" />
          <span>ORGANIMO</span>
        </a>
        <div className="header-right">
          <a className="login" href="#login">
            Login
          </a>
          <div className="currency">
            <button className="currency-toggle" onClick={() => setCurrencyOpen((value) => !value)}>
              USD
            </button>
            {currencyOpen && (
              <div className="currency-list">
                {['USD $', 'CAD $', 'GBP £', 'EUR €', 'AUD $'].map((item) => (
                  <button key={item}>{item}</button>
                ))}
              </div>
            )}
          </div>
          <a className="cart" href="https://organimo.com/cart/" aria-label="Cart">
            0
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <aside className={menuOpen ? 'mobile-menu is-open' : 'mobile-menu'}>
        {[
          ['Home', '/'],
          ['Shop Organimo®', 'https://organimo.com/seamoss/'],
          ['Login / Sign up', 'https://organimo.com/my-account/'],
          ['Affirm', 'https://organimo.com/affirm/'],
          ['News', 'https://organimo.com/news/'],
        ].map(([item, href]) => (
          <a href={href} key={item} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
        <div className="menu-credits">
          <span>Organimo®</span>
          <span>©2026</span>
        </div>
      </aside>
    </>
  )
}

function Hero() {
  return (
    <section className="hero-organimo" id="top">
      <div className="hero-bg" style={{ backgroundImage: `url(${socialImage})` }} />
      <div className="hero-noise" />
      <Header />
      <button className="audio-pill">
        <span>Click</span> anywhere to enable audio
      </button>
      <div className="hero-copy">
        <p className="from-to">
          From body
          <br />
          to mind
        </p>
        <h1>
          <span>Li</span>
          <em>m</em>
          <span>itless</span>
          <br />
          begins here.
        </h1>
        <p className="journey">Journey into the wonderful world of Organimo®</p>
      </div>
      <a className="scroll-cue" href="#shop" aria-label="scroll to begin">
        <span>scroll to begin</span>
        <b />
      </a>
    </section>
  )
}

function ProductSection() {
  return (
    <section className="product-section" id="shop">
      <div className="product-bg" aria-hidden="true">
        <img src={atlas} alt="" />
      </div>
      <div className="product-copy">
        <p className="kicker">Sea moss &amp; bladderwrack</p>
        <h2>
          The only natural multivitamin you will <em>ever need.</em>
        </h2>
        <a className="gold-button" href="#cart">
          Shop now
        </a>
      </div>
    </section>
  )
}

function Goodness() {
  return (
    <section className="goodness">
      <p className="kicker">superfood goodness</p>
      <h2>Organimo® contains a blend of two nutrient rich superfoods.</h2>
      <div className="goodness-grid">
        <article>
          <span>100% ethical &amp; renewable</span>
          <p>All naturally sourced marine ingredients from Canada.</p>
        </article>
        <article>
          <span>Highest quality ingredients</span>
          <p>
            We value sourcing our plants from the highest-grade regions that are clean and 100% natural.
            Our algae plants grow naturally on marine beds and rocks.
          </p>
        </article>
      </div>
    </section>
  )
}

function BenefitAccordion() {
  const [open, setOpen] = useState(0)

  return (
    <section className="benefits-section" id="affirm">
      <div className="benefit-intro">
        <h2>
          The real
          <br />
          <em>limitless pill.</em>
        </h2>
        <p className="kicker">discover the benefits</p>
        <p>Taking Organimo® has a number of health benefits, continue on the journey to find out more.</p>
      </div>
      <div className="benefit-list">
        {benefits.map((benefit, index) => (
          <article className={open === index ? 'benefit is-open' : 'benefit'} key={benefit.title}>
            <button onClick={() => setOpen(open === index ? -1 : index)}>
              <span>{benefit.title}</span>
              <b>{open === index ? '−' : '+'}</b>
            </button>
            <div className="benefit-content">
              {benefit.points.map((point, pointIndex) => (
                <p key={point}>
                  <span>{String(pointIndex + 1).padStart(2, '0')}</span>
                  {point}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Seals() {
  const repeated = useMemo(() => [...seals, ...seals], [])
  return (
    <section className="seals">
      <p className="kicker">the miracle of the sea</p>
      <h2>100% wildcrafted and raw herbs.</h2>
      <div className="seal-track">
        {repeated.map(([label, icon], index) => (
          <div className="seal" key={`${label}-${index}`}>
            <img src={icon} alt="" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Closing() {
  return (
    <section className="closing" id="news">
      <div className="cloud-layer" />
      <h2>
        A better <em>you</em>
        <br />
        starts here
      </h2>
      <p>The ocean’s best kept secret. Feel supercharged with our herbal blend of marine ingredients.</p>
      <a className="gold-button" href="#shop">
        Shop now
      </a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer-organimo">
      <div className="footer-brand">
        <img src={mark} alt="" />
        <span>ORGANIMO® ©2026</span>
      </div>
      <nav aria-label="Footer primary links">
        {footerLinksLeft.map(([label, href]) => (
          <a href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>
      <nav aria-label="Footer legal links">
        {footerLinksRight.map(([label, href]) => (
          <a href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>
      <div className="social-links" aria-label="Social links">
        <a href="https://facebook.com/SeaMossbyOrganimo">f</a>
        <a href="https://instagram.com/organimo">ig</a>
        <a href="https://www.tiktok.com/@organimo">tk</a>
      </div>
      <p>
        *These statements have not been evaluated by the Food and Drug Administration. This product is not
        intended to diagnose, treat, cure or prevent any disease.
      </p>
    </footer>
  )
}

function App() {
  return (
    <main>
      <Loader />
      <Hero />
      <ProductSection />
      <Goodness />
      <BenefitAccordion />
      <Seals />
      <Closing />
      <Footer />
    </main>
  )
}

export default App
