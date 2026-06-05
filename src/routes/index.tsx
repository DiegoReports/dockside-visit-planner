import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Anchor,
  CalendarCheck,
  PlayCircle,
  ClipboardCheck,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HardHat,
  Footprints,
  Shirt,
  ArrowRight,
  Ship,
  MapPin,
  Users,
  Camera,
  Lock,
  type LucideIcon,
} from "lucide-react";
import heroImage from "@/assets/shipyard-hero.jpg";

const QUIZ_URL = "https://forms.gle/YYjpe3wq3fhzscAQ9";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agendamento de Visitas | Wilson Sons" },
      {
        name: "description",
        content:
          "Agende sua visita ao estaleiro Wilson Sons. Conheça o processo, assista ao vídeo institucional e realize o quiz de segurança obrigatório.",
      },
      { property: "og:title", content: "Agendamento de Visitas | Wilson Sons" },
      {
        property: "og:description",
        content:
          "Centralize sua solicitação de visita ao estaleiro Wilson Sons com segurança e praticidade.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutVisit />
      <Process />
      <SafetyRules />
      <InstitutionalVideo />
      <VisitTimeline />
      <QuizCTA />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Anchor className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Wilson Sons</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a>
          <a href="#processo" className="transition-colors hover:text-foreground">Processo</a>
          <a href="#seguranca" className="transition-colors hover:text-foreground">Segurança</a>
          <a href="#video" className="transition-colors hover:text-foreground">Vídeo</a>
          <a href="#quiz" className="transition-colors hover:text-foreground">Quiz</a>
        </nav>
        <Button asChild size="sm" className="rounded-full">
          <a href="#agendar">Agendar</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <img
        src={heroImage}
        alt="Estaleiro Wilson Sons ao entardecer"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="container relative z-10 mx-auto px-4 py-24 text-primary-foreground">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-md">
            <Ship className="h-3.5 w-3.5" />
            Estaleiro Wilson Sons
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Agendamento de Visitas Wilson Sons
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            Centralize sua solicitação de visita ao nosso estaleiro. Um processo simples,
            seguro e padronizado — do vídeo institucional ao quiz de segurança, até a
            confirmação do seu agendamento.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-marine px-8 text-base font-semibold text-marine-foreground shadow-[var(--shadow-elegant)] hover:bg-marine/90"
            >
              <a href="#agendar">
                Realizar Agendamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
            >
              <a href="#processo">Como funciona</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function AboutVisit() {
  return (
    <section id="sobre" className="container mx-auto px-4 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-marine">
            Sobre a Visita
          </span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Conheça o estaleiro com segurança e organização
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            As visitas ao estaleiro Wilson Sons proporcionam uma imersão completa nas
            operações marítimas, mostrando de perto a engenharia naval, manutenção de
            embarcações e logística portuária. Toda visita segue um protocolo rigoroso de
            segurança para garantir uma experiência enriquecedora e protegida.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: Ship, title: "Operações reais", desc: "Veja embarcações e operações em tempo real." },
            { icon: ShieldCheck, title: "Protocolo seguro", desc: "Procedimentos rigorosos do início ao fim." },
            { icon: ClipboardCheck, title: "Conteúdo guiado", desc: "Acompanhamento técnico durante a visita." },
            { icon: Anchor, title: "Acesso restrito", desc: "Áreas operacionais com supervisão dedicada." },
          ].map((item) => (
            <Card key={item.title} className="border-border/60 p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <item.icon className="h-8 w-8 text-marine" />
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { icon: PlayCircle, title: "Assistir vídeo", desc: "Vídeo institucional com orientações iniciais." },
    { icon: ClipboardCheck, title: "Fazer quiz", desc: "Avaliação de segurança obrigatória." },
    { icon: CalendarCheck, title: "Solicitar visita", desc: "Preencha o formulário de agendamento." },
    { icon: CheckCircle2, title: "Receber confirmação", desc: "Confirmação oficial por e-mail." },
  ];
  return (
    <section id="processo" className="bg-secondary/50 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-marine">
            Processo
          </span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Quatro passos simples</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Siga o passo a passo abaixo para realizar sua visita com tranquilidade.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <Card className="h-full border-border/60 bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-bold text-marine/30">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SafetyRules() {
  const forbidden = [
    { icon: Shirt, label: "Regatas" },
    { icon: Shirt, label: "Shorts" },
    { icon: Footprints, label: "Sapatos abertos" },
  ];
  const required = [
    { icon: HardHat, label: "Capacete" },
    { icon: Footprints, label: "Botas" },
    { icon: Shirt, label: "Colete" },
  ];
  return (
    <section id="seguranca" className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-marine">
          Regras de Segurança
        </span>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
          O que usar — e o que evitar
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Cumprir as regras de segurança é obrigatório para todos os visitantes.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {/* Proibido */}
        <Card className="overflow-hidden border-danger/30 bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-danger/10 text-danger">
              <XCircle className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-danger">Proibido</h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Itens que não são permitidos durante a visita.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {forbidden.map((item) => (
              <div
                key={item.label}
                className="group flex flex-col items-center gap-3 rounded-xl border border-danger/20 bg-danger/5 p-5 text-center transition-all hover:-translate-y-1 hover:border-danger/40"
              >
                <div className="relative">
                  <item.icon className="h-10 w-10 text-danger/80" />
                  <XCircle className="absolute -right-2 -top-2 h-5 w-5 fill-background text-danger" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Obrigatório */}
        <Card className="overflow-hidden border-success/30 bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-success/10 text-success">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-success">Obrigatório</h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            EPIs e itens obrigatórios para acesso ao estaleiro.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {required.map((item) => (
              <div
                key={item.label}
                className="group flex flex-col items-center gap-3 rounded-xl border border-success/20 bg-success/5 p-5 text-center transition-all hover:-translate-y-1 hover:border-success/40"
              >
                <div className="relative">
                  <item.icon className="h-10 w-10 text-success" />
                  <CheckCircle2 className="absolute -right-2 -top-2 h-5 w-5 fill-background text-success" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function InstitutionalVideo() {
  return (
    <section id="video" className="bg-primary py-24 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-marine">
            Vídeo Institucional
          </span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Conheça a Wilson Sons
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Assista ao vídeo institucional antes de iniciar o quiz de segurança.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl bg-black shadow-[var(--shadow-elegant)] ring-1 ring-white/10">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/rB6jcirH848"
              title="Vídeo Institucional Wilson Sons"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuizCTA() {
  return (
    <section id="quiz" className="container mx-auto px-4 py-24">
      <Card
        className="relative overflow-hidden border-0 p-6 text-primary-foreground shadow-[var(--shadow-elegant)] md:p-10"
        style={{ background: "var(--gradient-ocean)" }}
      >
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5" />
            Quiz de Segurança
          </div>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Realize o quiz de segurança
          </h2>
          <p className="mt-3 text-white/80">
            Preencha o formulário abaixo. O quiz é obrigatório e garante que todos os
            visitantes compreendam as normas de segurança do estaleiro.
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeYN4QCfEGSAiPfNcmvFHIY85MKBF1p1QEptBMI2Cn9q4SRqQ/viewform?embedded=true"
            title="Quiz de Segurança Wilson Sons"
            width="640"
            height="1156"
            className="block w-full"
            style={{ minHeight: "1156px" }}
          >
            A carregar…
          </iframe>
        </div>

        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-marine/30 blur-3xl" />
      </Card>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="agendar" className="container mx-auto px-4 pb-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-12 text-center shadow-[var(--shadow-card)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <CalendarCheck className="h-7 w-7" />
        </div>
        <h2 className="mt-6 text-4xl font-bold md:text-5xl">Pronto para visitar?</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Após concluir e ser aprovado no quiz de segurança, sua solicitação de visita
          será liberada.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <Button
            size="lg"
            disabled
            aria-disabled="true"
            className="h-14 rounded-full bg-muted px-8 text-base font-semibold text-muted-foreground"
          >
            <Lock className="mr-2 h-5 w-5" />
            Solicitar Visita
          </Button>
          <Badge variant="outline" className="gap-1 border-dashed text-muted-foreground">
            <Lock className="h-3 w-3" />
            Liberado após aprovação no Quiz de Segurança
          </Badge>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-10 text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2">
          <Anchor className="h-5 w-5 text-marine" />
          <span className="font-semibold">Wilson Sons</span>
        </div>
        <p className="text-sm text-white/70">
          Projeto desenvolvido para fins educativos na{" "}
          <span className="font-semibold text-white">KODIE Academy</span>
        </p>
      </div>
    </footer>
  );
}

type Phase = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const PHASES: Phase[] = [
  {
    icon: MapPin,
    title: "Chegada e Recepção",
    desc: "Ao chegar à Wilson Sons, você será recebido pela equipe responsável e realizará seu credenciamento para acesso às áreas autorizadas.",
  },
  {
    icon: ShieldCheck,
    title: "Orientação de Segurança",
    desc: "Antes do início da visita, você receberá instruções sobre normas de segurança, circulação nas áreas operacionais e utilização dos equipamentos de proteção.",
  },
  {
    icon: HardHat,
    title: "Preparação para Acesso",
    desc: "Nossa equipe verificará as vestimentas adequadas e fornecerá os EPIs necessários para garantir uma visita segura.",
  },
  {
    icon: Ship,
    title: "Conheça as Operações Portuárias",
    desc: "Descubra como funcionam as atividades marítimas e portuárias que fazem da Wilson Sons uma referência no setor.",
  },
  {
    icon: Anchor,
    title: "Exploração das Áreas Operacionais",
    desc: "Acompanhe de perto estruturas, equipamentos e processos que fazem parte da rotina operacional do estaleiro.",
  },
  {
    icon: Users,
    title: "Interação com Especialistas",
    desc: "Tenha a oportunidade de conhecer profissionais da área e compreender os desafios e tecnologias envolvidos nas operações.",
  },
  {
    icon: Camera,
    title: "Encerramento da Experiência",
    desc: "Finalize sua visita com uma visão ampla do universo marítimo, levando novos conhecimentos sobre logística, engenharia e operações portuárias.",
  },
];

function VisitTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });
  const lineHeightCSS = useTransform(lineHeight, (v) => `${v * 100}%`);
  const progressPct = useTransform(lineHeight, (v) => `${Math.round(v * 100)}%`);

  return (
    <section
      id="cronograma"
      className="relative overflow-hidden py-28"
      style={{ background: "var(--gradient-ocean)" }}
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{
        backgroundImage:
          "radial-gradient(circle at 20% 10%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
        backgroundSize: "48px 48px, 64px 64px",
      }} />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-marine/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-safety/20 blur-3xl" />

      <div className="container relative mx-auto px-4 text-primary-foreground">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md">
            <Anchor className="h-3.5 w-3.5" />
            Jornada do Visitante
          </span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">Fases da Sua Visitação</h2>
          <p className="mt-4 text-lg text-white/75">
            Uma jornada guiada do desembarque ao encerramento — segurança, descoberta e
            profissionalismo em cada etapa.
          </p>
        </div>

        {/* Progress indicator (sticky during section scroll) */}
        <div className="sticky top-4 z-30 mx-auto mt-12 w-fit md:top-20">
          <div className="flex items-center gap-3 rounded-full border border-white/15 bg-background/60 px-3 py-2 shadow-lg backdrop-blur-xl md:px-4">
            <div className="relative h-2 w-32 overflow-hidden rounded-full bg-white/15 md:w-40">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-marine via-safety to-success"
                style={{ width: lineHeightCSS }}
              />
            </div>
            <motion.span className="min-w-[3ch] text-xs font-semibold tabular-nums text-white">
              {progressPct}
            </motion.span>
          </div>
        </div>

        <div ref={containerRef} className="relative mx-auto mt-12 max-w-5xl">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 h-full w-[2px] -translate-x-1/2 overflow-hidden rounded-full bg-white/10 md:left-1/2">
            <motion.div
              className="absolute inset-x-0 top-0 origin-top rounded-full bg-gradient-to-b from-marine via-safety to-success shadow-[0_0_20px_rgba(56,189,248,0.6)]"
              style={{ height: lineHeightCSS }}
            />
          </div>

          <ol className="space-y-20 md:space-y-28">
            {PHASES.map((phase, i) => (
              <TimelineItem key={phase.title} phase={phase} index={i} total={PHASES.length} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  phase,
  index,
  total,
}: {
  phase: Phase;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { amount: 0.55, margin: "-15% 0px -15% 0px" });
  const isLeft = index % 2 === 0;
  const Icon = phase.icon;

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid items-center gap-6 md:grid-cols-2 md:gap-16"
    >
      {/* Dot / Icon */}
      <div className="absolute left-6 top-2 z-10 -translate-x-1/2 md:left-1/2">
        <motion.div
          animate={
            inView
              ? { scale: 1, boxShadow: "0 0 0 8px rgba(255,255,255,0.06), 0 0 40px 4px var(--accent-marine)" }
              : { scale: 0.6, boxShadow: "0 0 0 0px rgba(255,255,255,0), 0 0 0px 0px var(--accent-marine)" }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-marine to-safety ring-4 ring-background/60"
        >
          <motion.div
            animate={inView ? { rotate: [0, -8, 8, 0], scale: [1, 1.15, 1] } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-white"
          >
            <Icon className="h-6 w-6" />
          </motion.div>
          <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-background text-[10px] font-bold text-marine ring-2 ring-marine/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Card */}
      <div
        className={`pl-20 md:pl-0 ${
          isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
        }`}
      >
        <motion.div
          animate={
            inView
              ? { opacity: 1, scale: 1, filter: "blur(0px)" }
              : { opacity: 0.35, scale: 0.97, filter: "blur(2px)" }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card
            className={`relative overflow-hidden border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all ${
              inView ? "shadow-[0_0_40px_-10px_rgba(56,189,248,0.6)]" : "shadow-none"
            }`}
          >
            {/* glow active */}
            <motion.span
              className="pointer-events-none absolute inset-0 -z-10"
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                background:
                  "radial-gradient(circle at 30% 0%, color-mix(in oklab, var(--accent-marine) 35%, transparent), transparent 60%)",
              }}
            />
            <div
              className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-marine ${
                isLeft ? "md:justify-end" : ""
              }`}
            >
              Fase {String(index + 1).padStart(2, "0")} de {String(total).padStart(2, "0")}
            </div>
            <h3 className="mt-2 text-2xl font-bold text-white md:text-[1.65rem]">
              {phase.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
              {phase.desc}
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.li>
  );
}

