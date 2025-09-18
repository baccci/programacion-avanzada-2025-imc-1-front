'use client';

import { useState } from 'react';

type Props = {
  onSwitchToSignUp?: () => void; 
};

export default function SignInForm({ onSwitchToSignUp }: Props) {
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Inicio de sesión xd');
    }, 800);
  }

  return (
    <div className="w-full max-w-sm rounded-2xl bg-white/95 backdrop-blur-2xl shadow-xl p-6 ring-1 ring-black/5">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Iniciar sesión</h2>
        <p className="text-gray-600">Accede para guardar tu historial de IMC.</p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4">
        {/* E-mail */}
        <div className="grid gap-2">
          <label className="text-sm font-medium">E-mail</label>
          <input
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#364161]"
          />
        </div>

        {/* Password*/}
        <div className="grid gap-2">
          <label className="text-sm font-medium">Contraseña</label>
          <div className="relative">
            <input
              name="password"
              type={showPwd ? 'text' : 'password'}
              required
              placeholder="••••••••"
              className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 pr-12 outline-none focus:ring-2 focus:ring-[#364161]"
            />
            <button
              type="button"
              onClick={() => setShowPwd((s) => !s)}
              aria-label={showPwd ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#364161]"
            >
              {showPwd ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3l18 18" />
                  <path d="M9.88 5.09A10.94 10.94 0 0 1 12 5c7 0 10 7 10 7a18.2 18.2 0 0 1-3.06 3.87M6.61 6.61A18.35 18.35 0 0 0 2 12s3 7 10 7a10.7 10.7 0 0 0 3.07-.45" />
                  <path d="M10.58 10.58A3 3 0 0 0 12 15a3 3 0 0 0 2.42-4.42" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Olvidaste tu contraseña */}
        <div className="text-sm text-gray-600">
          ¿Olvidaste tu contraseña?{' '}
          <button
            type="button"
            className="text-[#364161] underline hover:opacity-90 cursor-pointer"
            onClick={() => {}}
          >
            Presione aquí.
          </button>
        </div>

        {/* Enviar */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 rounded-xl bg-[#364161] px-4 py-2 text-white font-medium hover:opacity-95 disabled:opacity-60"
        >
          {loading ? 'Entrando…' : 'Entrar'}
        </button>

        {/* CTA -> cambiar a SignUp */}
        <p className="text-sm">
          ¿No tienes una cuenta?{' '}
          <button
            type="button"
            className="text-[#364161] underline hover:opacity-90 cursor-pointer"
            onClick={() => onSwitchToSignUp?.()}
          >
            ¡Registrate acá!
          </button>
        </p>
      </form>
    </div>
  );
}
