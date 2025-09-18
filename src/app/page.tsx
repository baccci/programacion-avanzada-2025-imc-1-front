'use client';

import { useState } from 'react';
import { Noise } from '@/components/noise/noise';
import { HistoryTable } from '@/features/history/components/history';
import { Calculator } from '@/features/imc-calculator/components/calculator';

//  Formularios de Inicio y Registro.
import SignInForm from '@/features/auth/components/SignInForm';
import SignUpForm from '@/features/auth/components/SignUpForm';

export default function Home() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="flex flex-col w-full relative">
      {/* Fondo degradado */}
      <div className="w-full h-screen absolute inset-0 bg-gradient-to-br from-[#364161] via-[#242120] to-[#324564]" />
      <Noise className="size-full" />

      {/* NAVBAR con botón Ingresar */}
      <header className="relative z-[3]">
        <nav className="mx-auto w-full max-w-6xl px-4 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            {/*Podríamos poner un logo*/}
            <div className="size-8 rounded-full bg-white/15 ring-1 ring-white/20" />
            <span className="font-semibold tracking-tight">Salud IMC</span>
          </div>

          <button
            type="button"
            onClick={() => { setAuthMode('signin'); setAuthOpen(true); }}
            className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-sm font-medium ring-1 ring-white/30 hover:bg-white/20 backdrop-blur"
          >
            {/* Icono perfil */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c2-4 6-6 8-6s6 2 8 6" />
            </svg>
            Ingresar
          </button>
        </nav>
      </header>

      {/* CONTENIDO ORIGINAL */}
      <main className="w-full flex flex-col h-screen justify-center isolate">
        <div className="mt-[-5rem] flex flex-col gap-5 items-center z-[2]">
          <h1 className="text-white text-5xl/14 font-semibold text-center tracking-tighter z-[1]">
            Calculadora de <br />
            <span className="font-serif tracking-normal font-medium italic text-[2.875rem]">
              índice de masa corporal
            </span>{' '}
            (IMC)
          </h1>
          <p className="text-center text-input-white tracking-tight">
            Conoce tu peso ideal y empieza a cuidar tu salud hoy
          </p>
        </div>

        <div className="w-full mt-[0rem] flex flex-col items-center">
          <Calculator />
        </div>
      </main>

      <div className="w-full mb-40 mt-32 flex flex-col items-center">
        <h2 className="text-input-white text-2xl font-semibold mb-8">
          Historial de cálculos
        </h2>
        <HistoryTable />
      </div>

      {/* MODAL de Autenticación con animaciones y tamaño auto */}
      {authOpen && (
        <AuthModal
          mode={authMode}
          onClose={() => setAuthOpen(false)}
          onSwitchMode={(m) => setAuthMode(m)}
        />
      )}
    </div>
  );
}

/* ---------- Modal desacoplado: animaciones + tamaño del formulario ---------- */

import { useEffect } from 'react';

function AuthModal({
  mode,
  onClose,
  onSwitchMode,
}: {
  mode: 'signin' | 'signup';
  onClose: () => void;
  onSwitchMode: (m: 'signin' | 'signup') => void;
}) {
  const [phase, setPhase] = useState<'enter' | 'leave'>('enter');

  // Animación de entrada
  useEffect(() => {
    const id = requestAnimationFrame(() => setPhase('enter'));
    return () => cancelAnimationFrame(id);
  }, []);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function handleClose() {
    setPhase('leave');
    setTimeout(onClose, 220);
  }

  const panelMotion =
    phase === 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4';
  const backdropMotion = phase === 'enter' ? 'opacity-100' : 'opacity-0';

  return (
    <div
      className="fixed inset-0 z-[50] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ease-out ${backdropMotion}`}
      />

      {/* Contenido centrado*/}
      <div className="relative z-[51] pointer-events-none">
        {/* Header (tabs + cerrar) */}
        <div className="mx-auto mb-2 flex items-center justify-between gap-4 text-white px-2 pointer-events-auto">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSwitchMode('signin')}
              className={`px-3 py-1 rounded-lg transition text-white
                ${mode === 'signin'
                  ? 'bg-black hover:bg-black/90 ring-2 ring-white/40'
                  : 'bg-black hover:bg-black/90 ring-1 ring-black/70'}`}
            >
              Iniciar sesión
            </button>

            <button
              type="button"
              onClick={() => onSwitchMode('signup')}
              className={`px-3 py-1 rounded-lg transition text-white
                ${mode === 'signup'
                  ? 'bg-black hover:bg-black/90 ring-2 ring-white/40'
                  : 'bg-black hover:bg-black/90 ring-1 ring-black/70'}`}
            >
              Registrate
            </button>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Cerrar"
            className="p-2 hover:text-white text-white/90"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Panel animado; inline-block + pointer-events-auto; el hijo dicta el tamaño */}
        <div
          className={`mx-auto inline-block transform transition-all duration-200 ease-out pointer-events-auto ${panelMotion}`}
        >
          {mode === 'signin' ? (
            <SignInForm onSwitchToSignUp={() => onSwitchMode('signup')} />
          ) : (
            <SignUpForm onSwitchToSignIn={() => onSwitchMode('signin')} />
          )}
        </div>
      </div>
    </div>
  );
}
