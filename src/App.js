import './App.css';
import { useState } from 'react';

const BUSINESS = {
  name: 'Maylyn Salon Barber & Spa',
  tagline: '',
  type: 'Beauty products & services',
  address:
    'Stall 11, Centillon Building, Brgy 2 Bantayan St, San Jose, Antique',
  phone: '09350776518',
  email: 'galidolynwal@gmail.com',
  facebook: 'Maylyn salon barber and spa',
  hours: 'Monday–Sunday • 8:00 AM – 8:00 PM',
  currency: '₱',
  payment: 'GCash, Cash',
  gcash: '09350776518 — Maylyn Pepito',
};

const SERVICES = [
  { name: 'Manicure', price: 150, image: 'services/manicure.jpg' },
  { name: 'Pedicure', price: 200, image: 'services/pedicure.jpg' },
  { name: 'Foot Spa', price: 300, image: 'services/foot-spa.jpg' },

  { name: 'Haircut', price: 200, image: 'services/haircut.jpg' },


  { name: 'Massage (Whole Body)', price: 300, image: 'services/massage-whole-body.jpg' },

  { name: 'L’Oréal', price: 2500, image: 'services/loreal.jpg' },
  { name: 'Matrix', price: 2000, image: 'services/matrix.jpg' },
  { name: 'Semon', price: 1500, image: 'services/semon.jpg' },
  { name: 'Brazilian', price: 1500, image: 'services/brazilian.jpg' },
  { name: 'Hair Color', price: 500, image: 'services/hair-color.jpg' },
];

const PRODUCTS = [
  {
    name: 'Semon Oxidizing Emulsion Cream 9% (100ml)',
    price: 110,
    image: 'products/semon-oxidizing-emulsion-cream-9.jpg',
  },
  {
    name: "L'Oréal Xtenso Smoothing Cream",
    price: 2500,
    image: 'products/loreal-xtenso-smoothing-cream.jpg',
  },
  {
    name: "L'Oréal Xtenso Neutralizing Lotion",
    price: 2500,
    image: 'products/loreal-xtenso-neutralizing-lotion.jpg',
  },
  { name: 'Cello Wax', price: 500, image: 'products/cello-wax.jpg' },
  {
    name: 'Keratin Brazilian Blow Straight',
    price: 1500,
    image: 'products/keratin-brazilian-blow-straight.jpg',
  },
  {
    name: 'Bleaching Powder (Sunbright Series)',
    price: 290,
    image: 'products/bleaching-powder-sunbright-series.jpg',
  },
  { name: 'Hair Serum', price: 300, image: 'products/hair-serum.jpg' },
];

const REVIEWS = [
  { name: 'Raily', quote: 'Great service and friendly staff. Highly recommended!' },
  { name: 'Renz', quote: 'Clean, relaxing, and very professional.' },
  { name: 'Edna', quote: 'Loved the results! Will definitely come back.' },
];

function formatPrice(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return `${BUSINESS.currency}${value}`;
  return `${BUSINESS.currency}${numeric.toLocaleString('en-PH')}`;
}

function LogoMark() {
  return (
    <div className="LogoMark" aria-label="Maylyn logo">
      <div className="LogoMark-top">MAYLYN</div>
      <div className="LogoMark-bottom">
        <span className="LogoMark-script">Salon Barber &amp; Spa</span>
        <span className="LogoMark-tools" aria-hidden="true">
          ✂︎ ⎯ 🪒
        </span>
      </div>
    </div>
  );
}

function Chip({ children }) {
  return <span className="Chip">{children}</span>;
}

function Card({ title, subtitle, children, actions }) {
  return (
    <section className="Card">
      <header className="Card-head">
        <div className="Card-titleRow">
          <h3 className="Card-title">{title}</h3>
          {subtitle ? <div className="Card-subtitle">{subtitle}</div> : null}
        </div>
      </header>
      <div className="Card-body">{children}</div>
      {actions ? <div className="Card-actions">{actions}</div> : null}
    </section>
  );
}

function Section({ eyebrow, title, children, actions }) {
  return (
    <section className="Section">
      <header className="Section-head">
        {eyebrow ? <div className="Section-eyebrow">{eyebrow}</div> : null}
        <h2 className="Section-title">{title}</h2>
      </header>
      <div className="Section-body">{children}</div>
      {actions ? <div className="Section-actions">{actions}</div> : null}
    </section>
  );
}

function PrimaryButton({ children, onClick, type = 'button' }) {
  return (
    <button className="Button Button--primary" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

function GhostButton({ children, onClick, type = 'button' }) {
  return (
    <button className="Button Button--ghost" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

function Input({ label, id, ...props }) {
  return (
    <label className="Field" htmlFor={id}>
      <span className="Field-label">{label}</span>
      <input className="Field-input" id={id} {...props} />
    </label>
  );
}

function TextArea({ label, id, ...props }) {
  return (
    <label className="Field" htmlFor={id}>
      <span className="Field-label">{label}</span>
      <textarea className="Field-input Field-textarea" id={id} {...props} />
    </label>
  );
}

function Select({ label, id, children, ...props }) {
  return (
    <label className="Field" htmlFor={id}>
      <span className="Field-label">{label}</span>
      <select className="Field-input" id={id} {...props}>
        {children}
      </select>
    </label>
  );
}

function App() {
  const [page, setPage] = useState('home');
  const [bookingService, setBookingService] = useState('');
  const fullBleedServiceImages = [
    'services/loreal.jpg',
    'services/matrix.jpg',
    'services/manicure.jpg',
    'services/pedicure.jpg',
    'services/foot-spa.jpg',
    'services/haircut.jpg',
    'services/hair-color.jpg',
    'services/semon.jpg',
    'services/brazilian.jpg',
  ];

  const featuredServices = SERVICES.slice(0, 6);

  const goTo = (nextPage, opts = {}) => {
    setPage(nextPage);
    if (typeof opts.service === 'string') setBookingService(opts.service);
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const NavLink = ({ id, children }) => (
    <button
      type="button"
      className={`Nav-link ${page === id ? 'is-active' : ''}`}
      onClick={() => goTo(id)}
    >
      {children}
    </button>
  );

  return (
    <div className="AppShell">
      <header className="TopBar">
        <div className="Container TopBar-inner">
          <button
            type="button"
            className="Brand"
            onClick={() => goTo('home')}
            aria-label={`${BUSINESS.name} — Home`}
          >
            <LogoMark />
          </button>

          <nav className="Nav" aria-label="Primary">
            <NavLink id="home">Home</NavLink>
            <NavLink id="services">Services</NavLink>
            <NavLink id="products">Products</NavLink>
            <NavLink id="team">Team</NavLink>
            <NavLink id="contact">Contact</NavLink>
          </nav>

          <div className="TopBar-cta">
            <PrimaryButton onClick={() => goTo('contact')}>Book Now</PrimaryButton>
          </div>
        </div>
      </header>

      <main className="Main">
        {page === 'home' ? (
          <>
            <section
              className="Hero"
              style={{
                '--home-hero-bg': `url(${process.env.PUBLIC_URL}/images/home-bg.png)`,
              }}
            >
              <div className="Container Hero-inner">
                <div className="Hero-copy">
                  <h1 className="Hero-title BrushStrokeTitle">
                    Your trusted salon, barber and spa
                  </h1>
                  <div className="Hero-actions">
                    <PrimaryButton onClick={() => goTo('contact')}>
                      Book now / Visit us now
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </section>

            <div className="Container">
              <Section eyebrow="About" title="Maylyn Salon Barber & Spa">
                <div className="Grid2">
                  <div className="Prose">
                    <p>
                      Maylyn Salon was established in 2016 to provide high-quality salon
                      services to the people of San Jose, Antique and nearby municipalities.
                      It’s a one-stop shop for hair, make-up, nails, and massage services —
                      all in a clean, welcoming, and friendly environment.
                    </p>
                  </div>

                  <div className="WhyBox">
                    <div className="WhyBox-title">Why choose us</div>
                    <ul className="WhyBox-list">
                      <li>Friendly</li>
                      <li>Flexible</li>
                      <li>Creativity</li>
                      <li>Passion</li>
                      <li>Responsibility</li>
                    </ul>
                  </div>
                </div>
              </Section>

              <Section
                eyebrow="Popular"
                title="Featured services"
                actions={<GhostButton onClick={() => goTo('services')}>See all</GhostButton>}
              >
                <div className="Cards">
                  {featuredServices.map((service) => (
                    <Card
                      key={service.name}
                      title={service.name}
                      subtitle={formatPrice(service.price)}
                      actions={
                        <PrimaryButton
                          onClick={() => goTo('contact', { service: service.name })}
                        >
                          Book this
                        </PrimaryButton>
                      }
                    >
                      {service.image ? (
                        <img
                          className={`ServiceImage ${
                            fullBleedServiceImages.includes(service.image)
                              ? 'ServiceImage--full'
                              : ''
                          }`}
                          src={`${process.env.PUBLIC_URL}/images/${service.image}`}
                          alt={service.name}
                          loading="lazy"
                        />
                      ) : null}
                      <div className="Muted">
                        Message us to confirm schedule and availability.
                      </div>
                    </Card>
                  ))}
                </div>
              </Section>

              <Section eyebrow="Reviews" title="What clients say">
                <div className="Cards Cards--3">
                  {REVIEWS.map((r) => (
                    <Card key={r.name} title={r.name}>
                      <p className="Quote">“{r.quote}”</p>
                    </Card>
                  ))}
                </div>
              </Section>
            </div>
          </>
        ) : null}

        {page === 'services' ? (
          <div className="Container Page">
            <Section eyebrow="Services" title="Choose your service">
              <div className="Cards">
                {SERVICES.map((service) => (
                  <Card
                    key={service.name}
                    title={service.name}
                    subtitle={formatPrice(service.price)}
                    actions={
                      <PrimaryButton
                        onClick={() => goTo('contact', { service: service.name })}
                      >
                        Book now
                      </PrimaryButton>
                    }
                  >
                    {service.image ? (
                      <img
                        className={`ServiceImage ${
                          fullBleedServiceImages.includes(service.image)
                            ? 'ServiceImage--full'
                            : ''
                        }`}
                        src={`${process.env.PUBLIC_URL}/images/${service.image}`}
                        alt={service.name}
                        loading="lazy"
                      />
                    ) : null}
                    <div className="Muted">Walk-ins welcome. Booking recommended.</div>
                  </Card>
                ))}
              </div>
            </Section>
          </div>
        ) : null}

        {page === 'products' ? (
          <div className="Container Page">
            <Section eyebrow="Products" title="Available items">
              <div className="Cards">
                {PRODUCTS.map((product) => (
                  <Card
                    key={product.name}
                    title={product.name}
                    subtitle={formatPrice(product.price)}
                    actions={<PrimaryButton onClick={() => goTo('contact')}>Inquire</PrimaryButton>}
                  >
                    {product.image ? (
                      <img
                        className="ServiceImage ServiceImage--full"
                        src={`${process.env.PUBLIC_URL}/images/${product.image}`}
                        alt={product.name}
                        loading="lazy"
                      />
                    ) : null}
                    <div className="Muted">Send us a message to check stock.</div>
                  </Card>
                ))}
              </div>
            </Section>
          </div>
        ) : null}

        {page === 'team' ? (
          <div className="Container Page">
            <Section eyebrow="Team" title="Meet our team">
              <div className="TeamGrid">
                <div className="PersonCard">
                  <div className="Avatar">
                    <img
                      className="Avatar-img"
                      src={`${process.env.PUBLIC_URL}/images/team/maylyn-pepito.jpg`}
                      alt="Maylyn Pepito"
                      loading="lazy"
                    />
                  </div>
                  <div className="PersonCard-name">Maylyn Pepito</div>
                  <div className="PersonCard-role">Owner</div>
                  <div className="Muted">Salon owner</div>
                </div>

                <div className="PersonCard">
                  <div className="Avatar" aria-hidden="true">
                    S1
                  </div>
                  <div className="PersonCard-name">Staff Member</div>
                  <div className="PersonCard-role">Stylist</div>
                  <div className="Muted">Hair • Styling • Color</div>
                </div>

                <div className="PersonCard">
                  <div className="Avatar" aria-hidden="true">
                    S2
                  </div>
                  <div className="PersonCard-name">Staff Member</div>
                  <div className="PersonCard-role">Nail Tech</div>
                  <div className="Muted">Manicure • Pedicure • Spa</div>
                </div>

                <div className="PersonCard">
                  <div className="Avatar" aria-hidden="true">
                    S3
                  </div>
                  <div className="PersonCard-name">Staff Member</div>
                  <div className="PersonCard-role">Therapist</div>
                  <div className="Muted">Massage</div>
                </div>
              </div>
            </Section>
          </div>
        ) : null}

        {page === 'contact' ? (
          <div className="Container Page">
            <Section eyebrow="Contact" title="Book or message us">
              <div className="Grid2">
                <div className="ContactCard">
                  <div className="ContactCard-title">Contact details</div>
                  <div className="ContactList">
                    <div className="ContactRow">
                      <div className="ContactKey">Location</div>
                      <div className="ContactVal">{BUSINESS.address}</div>
                    </div>
                    <div className="ContactRow">
                      <div className="ContactKey">Phone</div>
                      <div className="ContactVal">
                        <a className="Link" href={`tel:${BUSINESS.phone}`}>
                          {BUSINESS.phone}
                        </a>
                      </div>
                    </div>
                    <div className="ContactRow">
                      <div className="ContactKey">Email</div>
                      <div className="ContactVal">
                        <a className="Link" href={`mailto:${BUSINESS.email}`}>
                          {BUSINESS.email}
                        </a>
                      </div>
                    </div>
                    <div className="ContactRow">
                      <div className="ContactKey">Facebook</div>
                      <div className="ContactVal">{BUSINESS.facebook}</div>
                    </div>
                    <div className="ContactRow">
                      <div className="ContactKey">Open hours</div>
                      <div className="ContactVal">{BUSINESS.hours}</div>
                    </div>
                    <div className="ContactRow">
                      <div className="ContactKey">Payment</div>
                      <div className="ContactVal">
                        {BUSINESS.payment} • GCash: {BUSINESS.gcash}
                      </div>
                    </div>
                  </div>
                </div>

                <BookingForm
                  services={SERVICES}
                  initialService={bookingService}
                  onDone={() => goTo('home')}
                />
              </div>

              <div className="MapWrap" aria-label="Map">
                <iframe
                  title="Maylyn Salon map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    BUSINESS.address
                  )}&output=embed`}
                />
              </div>
            </Section>
          </div>
        ) : null}
      </main>

      <footer className="Footer">
        <div className="Container Footer-inner">
          <div className="Footer-brand">
            <div className="Footer-name">{BUSINESS.name}</div>
            <div className="Footer-tagline">{BUSINESS.tagline}</div>
          </div>
          <div className="Footer-meta">
            <div className="Muted">
              {BUSINESS.address} • {BUSINESS.phone}
            </div>
            <div className="Muted">{BUSINESS.hours}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BookingForm({ services, initialService, onDone }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const subject = `Booking request — ${BUSINESS.name}`;
  const body = [
    `Name: ${name || '-'}`,
    `Phone: ${phone || '-'}`,
    `Service: ${service || '-'}`,
    `Preferred date: ${date || '-'}`,
    `Preferred time: ${time || '-'}`,
    `Notes: ${notes || '-'}`,
  ].join('\n');

  const mailtoHref = `mailto:${encodeURIComponent(BUSINESS.email)}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const canSubmit = Boolean(name.trim() && phone.trim() && service);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="ContactCard">
      <div className="ContactCard-title">Booking form</div>

      {!submitted ? (
        <form className="Form" onSubmit={handleSubmit}>
          <div className="Form-grid">
            <Input
              id="book-name"
              label="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
              required
            />
            <Input
              id="book-phone"
              label="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="09xxxxxxxxx"
              inputMode="tel"
              autoComplete="tel"
              required
            />
            <Select
              id="book-service"
              label="Service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a service…
              </option>
              {services.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name} ({formatPrice(s.price)})
                </option>
              ))}
            </Select>
            <Input
              id="book-date"
              label="Preferred date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Input
              id="book-time"
              label="Preferred time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <TextArea
              id="book-notes"
              label="Notes (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add a message, preferred stylist, etc."
              rows={4}
            />
          </div>

          <div className="Form-actions">
            <PrimaryButton type="submit" onClick={() => {}}>
              Prepare message
            </PrimaryButton>
            <div className="Muted">
              This form doesn’t submit to a server yet — it prepares an email/message you can
              send.
            </div>
          </div>
          {!canSubmit ? <div className="Form-hint">Fill name, phone, and service.</div> : null}
        </form>
      ) : (
        <div className="Confirm">
          <div className="Confirm-title">Ready to send</div>
          <div className="Confirm-actions">
            <a className="Button Button--primary" href={mailtoHref}>
              Send via Email
            </a>
            <GhostButton
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(body);
                } catch (err) {
                  // ignore
                }
              }}
            >
              Copy message
            </GhostButton>
            <GhostButton
              onClick={() => {
                setSubmitted(false);
              }}
            >
              Edit
            </GhostButton>
            <GhostButton
              onClick={() => {
                setSubmitted(false);
                setName('');
                setPhone('');
                setService(initialService || '');
                setDate('');
                setTime('');
                setNotes('');
                onDone?.();
              }}
            >
              Done
            </GhostButton>
          </div>
          <pre className="Confirm-preview">{body}</pre>
          <div className="Muted">
            Tip: You can also message us on Facebook ({BUSINESS.facebook}) or call{' '}
            {BUSINESS.phone}.
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
