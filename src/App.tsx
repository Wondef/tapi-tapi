import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  ExternalLink,
  Star,
  MessageCircle,
  ChevronDown,
  Check,
  Globe,
} from 'lucide-react';
import { translations } from './translations';
export type Language = 'he' | 'en' | 'ru';

const WHATSAPP_NUMBER = '972504577602'; // Replace with actual number
const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function App() {
  const [lang, setLang] = useState<Language>(
    () => (localStorage.getItem('lang') as Language) || 'he'
  );
  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  const toggleLang = () => {
    const next = lang === 'he' ? 'en' : lang === 'en' ? 'ru' : 'he';
    setLang(next);
  };

  return (
    <div className="min-h-screen text-primary selection:bg-accent-blue/30 overflow-x-hidden">
      {/* Background */}
      <div className="bg-cinematic">
        <div className="glow-blob w-[600px] h-[600px] bg-accent-blue/10 top-[-200px] left-[-200px]" />
        <div
          className="glow-blob w-[500px] h-[500px] bg-accent-cyan/5 bottom-[-100px] right-[-100px]"
          style={{ animationDelay: '-5s' }}
        />
      </div>

      <Navbar lang={lang} toggleLang={toggleLang} t={t} />

      <main className="max-w-6xl mx-auto px-6 space-y-32 pb-32">
        <Hero t={t} />
        <HowItWorks t={t} />
        <Products t={t} />
        <ProductComparison t={t} />
        <Benefits t={t} />
        <BusinessTypes t={t} />
        <InteractiveDemo t={t} />
        <FAQ t={t} />
        <FinalCTA t={t} />
      </main>

      <Footer t={t} />
      <FloatingWhatsApp t={t} />
    </div>
  );
}

function Navbar({
  lang,
  toggleLang,
  t,
}: {
  lang: Language;
  toggleLang: () => void;
  t: any;
}) {
  return (
    <nav className="sticky top-0 z-50 liquid-glass border-x-0 border-t-0 border-b border-white/10 py-4 px-6 mb-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">tapi tapi</div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-secondary">
          <a href="#how" className="hover:text-primary transition">
            {t.nav.works}
          </a>
          <a href="#products" className="hover:text-primary transition">
            {t.nav.products}
          </a>
          <a href="#businesses" className="hover:text-primary transition">
            {t.nav.businesses}
          </a>
          <a href="#faq" className="hover:text-primary transition">
            {t.nav.faq}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="text-sm font-medium opacity-70 hover:opacity-100 flex items-center gap-1"
          >
            <Globe className="w-4 h-4" /> {lang.toUpperCase()}
          </button>
          <a
            href={buildWhatsAppUrl(t.whatsapp.general)}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
          >
            {t.nav.order}
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero({ t }: { t: any }) {
  return (
    <section className="pt-20 md:pt-32 pb-10 flex flex-col md:flex-row items-center gap-16">
      <motion.div
        className="flex-1 flex flex-col items-start gap-6 text-start"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-xs font-bold tracking-widest text-secondary uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
          {t.hero.eyebrow}
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
          {t.hero.title1} <br />
          <span className="text-gradient">{t.hero.title2}</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed">
          {t.hero.desc}
        </p>
        <div className="flex flex-col gap-3 mt-4">
          <a
            href={buildWhatsAppUrl(t.whatsapp.general)}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition shadow-[0_0_40px_rgba(255,255,255,0.2)] text-center"
          >
            {t.hero.cta}
          </a>
          <span className="text-sm text-secondary text-center">
            {t.hero.subCta}
          </span>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 relative w-full h-[400px] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 1 }}
      >
        {/* Abstract NFC Setup */}
        <motion.div
          className="liquid-glass w-48 h-48 rounded-2xl flex flex-col items-center justify-center z-10 shadow-[0_0_50px_rgba(0,210,255,0.15)]"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        >
          <Smartphone className="w-8 h-8 text-accent-cyan mb-2 opacity-80" />
          <div className="text-3xl font-black tracking-widest mb-1">TAP</div>
          <div className="text-xs font-medium text-accent-cyan uppercase tracking-widest">
            NFC Active
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function HowItWorks({ t }: { t: any }) {
  const icons = [Smartphone, ExternalLink, Star];
  return (
    <section id="how" className="space-y-12 scroll-m-24">
      <div className="text-center space-y-4">
        <h2 className="text-xs font-bold tracking-widest text-secondary uppercase">
          {t.works.eyebrow}
        </h2>
        <h3 className="text-4xl md:text-5xl font-black">
          {t.works.title1}{' '}
          <span className="text-secondary">{t.works.title2}</span>
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6 relative">
        {t.works.steps.map((step: any, idx: number) => {
          const Icon = icons[idx];
          return (
            <motion.div
              key={idx}
              className="liquid-glass rounded-3xl p-8 flex flex-col items-start gap-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Icon className="w-5 h-5 text-accent-cyan" />
              </div>
              <h4 className="text-xl font-bold">{step.title}</h4>
              <p className="text-secondary leading-relaxed">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Products({ t }: { t: any }) {
  return (
    <section id="products" className="space-y-16 scroll-m-24">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-black">
          {t.products.title1}{' '}
          <span className="text-secondary">{t.products.title2}</span>
        </h2>
        <p className="text-lg text-secondary">{t.products.sub}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Google Card */}
        <motion.div
          className="liquid-glass rounded-[2rem] p-10 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
              <Star className="w-8 h-8 text-accent-cyan" />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-2">
                {t.products.googleTitle}
              </h3>
              <p className="text-secondary">{t.products.googleDesc}</p>
            </div>
            <ul className="space-y-3 font-medium text-sm text-secondary">
              {[
                'NFC technology',
                'Direct Google review link',
                'Personalized design',
                'No app required',
                'No subscription',
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent-cyan" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
            <div>
              <div className="text-3xl font-bold">{t.products.price}</div>
              <div className="text-xs text-secondary">{t.products.oneTime}</div>
            </div>
            <a
              href={buildWhatsAppUrl(t.whatsapp.google)}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
            >
              {t.nav.order}
            </a>
          </div>
        </motion.div>

        {/* Instagram Card */}
        <motion.div
          className="liquid-glass rounded-[2rem] p-10 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="space-y-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
              <Smartphone className="w-8 h-8 text-fuchsia-400" />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-2">
                {t.products.instagramTitle}
              </h3>
              <p className="text-secondary">{t.products.instagramDesc}</p>
            </div>
            <ul className="space-y-3 font-medium text-sm text-secondary">
              {[
                'NFC technology',
                'Direct Instagram profile link',
                'Personalized design',
                'No app required',
                'No subscription',
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-fuchsia-400" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 relative z-10">
            <div>
              <div className="text-3xl font-bold">{t.products.price}</div>
              <div className="text-xs text-secondary">{t.products.oneTime}</div>
            </div>
            <a
              href={buildWhatsAppUrl(t.whatsapp.instagram)}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
            >
              {t.nav.order}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductComparison({ t }: { t: any }) {
  // Keeping it minimal to reinforce they are separate tools
  return (
    <div className="grid md:grid-cols-2 gap-4 text-center text-sm p-6 liquid-glass rounded-3xl">
      <div className="border-b md:border-b-0 md:border-e border-white/10 pb-4 md:pb-0 md:pe-4">
        <h4 className="font-bold text-lg mb-2">Google Reviews</h4>
        <p className="text-secondary">
          Best for: Restaurants, cafés, clinics, local services
        </p>
      </div>
      <div className="pt-4 md:pt-0 md:ps-4">
        <h4 className="font-bold text-lg mb-2">Instagram</h4>
        <p className="text-secondary">
          Best for: Fashion, beauty, retail, creators
        </p>
      </div>
    </div>
  );
}

function Benefits({ t }: { t: any }) {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-xs font-bold tracking-widest text-secondary uppercase">
          {t.benefits.eyebrow}
        </h2>
        <h3 className="text-4xl md:text-5xl font-black">
          {t.benefits.title1}{' '}
          <span className="text-secondary">{t.benefits.title2}</span>
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {t.benefits.items.map((item: any, idx: number) => (
          <div
            key={idx}
            className="liquid-glass p-6 rounded-2xl flex flex-col gap-2 border-t border-t-white/10"
          >
            <div className="text-accent-cyan font-black text-xl">
              0{idx + 1}
            </div>
            <h4 className="font-bold text-lg">{item.title}</h4>
            <p className="text-sm text-secondary leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BusinessTypes({ t }: { t: any }) {
  return (
    <section id="businesses" className="space-y-8 scroll-m-24 overflow-hidden">
      <div className="text-center space-y-4">
        <h2 className="text-xs font-bold tracking-widest text-secondary uppercase">
          {t.business.eyebrow}
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
          {t.business.title}
        </h3>
      </div>
      <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
        {t.business.types.map((type: string, i: number) => (
          <div
            key={i}
            className="liquid-glass px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap border border-white/10"
          >
            {type}
          </div>
        ))}
      </div>
    </section>
  );
}

function InteractiveDemo({ t }: { t: any }) {
  const [demoType, setDemoType] = useState<'google' | 'instagram'>('google');

  return (
    <section className="py-12 flex justify-center">
      <div className="liquid-glass rounded-[2rem] p-8 md:p-16 max-w-3xl w-full flex flex-col items-center gap-10">
        <div className="flex bg-black/50 p-1 rounded-full border border-white/10">
          <button
            onClick={() => setDemoType('google')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition ${
              demoType === 'google'
                ? 'bg-white text-black'
                : 'text-secondary hover:text-white'
            }`}
          >
            Google
          </button>
          <button
            onClick={() => setDemoType('instagram')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition ${
              demoType === 'instagram'
                ? 'bg-white text-black'
                : 'text-secondary hover:text-white'
            }`}
          >
            Instagram
          </button>
        </div>

        <div className="relative w-full h-[300px] flex items-center justify-center gap-8 md:gap-20">
          {/* Card */}
          <motion.div className="liquid-glass w-24 h-24 md:w-32 md:h-32 rounded-xl flex items-center justify-center border-t border-white/20 shadow-lg">
            {demoType === 'google' ? (
              <Star className="text-white opacity-80" />
            ) : (
              <Smartphone className="text-white opacity-80" />
            )}
          </motion.div>

          {/* NFC Waves */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-50">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-8 bg-accent-cyan rounded-full"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
              />
            ))}
          </div>

          {/* Phone Screen Mockup */}
          <motion.div
            className="w-40 h-64 md:w-48 md:h-72 bg-black border-4 border-gray-800 rounded-3xl overflow-hidden shadow-2xl relative"
            layout
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={demoType}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full h-full p-4 flex flex-col items-center justify-center bg-white/5"
              >
                {demoType === 'google' ? (
                  <div className="text-center space-y-3">
                    <Star className="w-8 h-8 text-yellow-500 mx-auto" />
                    <div className="text-xs font-bold">Google Reviews</div>
                    <div className="text-[10px] text-gray-400">
                      Share your experience
                    </div>
                    <div className="flex gap-1 justify-center text-yellow-500">
                      <Star size={12} />
                      <Star size={12} />
                      <Star size={12} />
                      <Star size={12} />
                      <Star size={12} />
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 mx-auto p-[2px]">
                      <div className="w-full h-full bg-black rounded-full" />
                    </div>
                    <div className="text-xs font-bold">@yourbusiness</div>
                    <div className="bg-accent-blue text-white text-[10px] py-1 px-4 rounded font-bold">
                      Follow
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ t }: { t: any }) {
  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
  ];
  return (
    <section id="faq" className="max-w-3xl mx-auto space-y-8 scroll-m-24">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-12">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="liquid-glass rounded-2xl overflow-hidden border border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-start p-6 flex items-center justify-between font-bold text-lg hover:bg-white/5 transition"
      >
        {q}
        <ChevronDown
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6 text-secondary"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FinalCTA({ t }: { t: any }) {
  return (
    <section className="liquid-glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-blue/10 rounded-full blur-[100px] -z-10" />
      <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
        {t.cta.title1} <br />
        <span className="text-secondary">{t.cta.title2}</span>
      </h2>
      <p className="text-lg text-secondary mb-10">{t.cta.desc}</p>
      <a
        href={buildWhatsAppUrl(t.whatsapp.general)}
        target="_blank"
        rel="noreferrer"
        className="inline-flex bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition shadow-[0_0_30px_rgba(255,255,255,0.2)]"
      >
        {t.cta.button}
      </a>
      <p className="mt-6 text-xs text-secondary/60">{t.cta.note}</p>
    </section>
  );
}

function Footer({ t }: { t: any }) {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-secondary">
        <div className="flex items-center gap-4">
          <div className="font-bold text-xl text-primary tracking-tight">
            tapi tapi
          </div>
          <span className="hidden md:inline">|</span>
          <span>{t.footer.tagline}</span>
        </div>
        <div className="flex gap-6">
          <a href="#how" className="hover:text-primary transition">
            {t.nav.works}
          </a>
          <a href="#products" className="hover:text-primary transition">
            {t.nav.products}
          </a>
          <a href="#faq" className="hover:text-primary transition">
            {t.nav.faq}
          </a>
        </div>
        <div>tapi tapi &copy; 2026</div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp({ t }: { t: any }) {
  return (
    <a
      href={buildWhatsAppUrl(t.whatsapp.general)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 end-6 liquid-glass bg-green-500/20 border-green-500/30 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition z-50 flex items-center justify-center gap-2 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-green-400 group-hover:text-green-300" />
      <span className="hidden md:block font-bold text-sm pe-2">WhatsApp</span>
    </a>
  );
}
