import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  UserCheck,
  FileSignature,
  HardHat as HelmetIcon,
  Map,
  Sparkles,
  Lock,
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
    <section className="container mx-auto px-4 py-24">
      <Card className="relative overflow-hidden border-0 p-10 text-primary-foreground shadow-[var(--shadow-elegant)] md:p-14" style={{ background: "var(--gradient-ocean)" }}>
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5" />
              Quiz de Segurança
            </div>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Antes de agendar, realize o quiz de segurança
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              O quiz é obrigatório e garante que todos os visitantes compreendam as normas
              de segurança do estaleiro. Leva apenas alguns minutos.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-safety px-8 text-base font-semibold text-safety-foreground hover:bg-safety/90"
          >
            <a href="#agendar">
              Iniciar Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
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
          Realize o quiz de segurança e em seguida solicite sua visita ao estaleiro.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="h-14 rounded-full bg-safety px-8 text-base font-semibold text-safety-foreground hover:bg-safety/90">
            <ShieldCheck className="mr-2 h-5 w-5" />
            Quiz de Segurança
          </Button>
          <Button size="lg" variant="outline" className="h-14 rounded-full px-8 text-base font-semibold">
            <CalendarCheck className="mr-2 h-5 w-5" />
            Solicitar Visita
          </Button>
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
