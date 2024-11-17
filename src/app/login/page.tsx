'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './stileLogin.css';

export default function Page() {
  const router = useRouter();

  const direcionar = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Previne o envio do formulário padrão
    router.push('/'); // Redireciona para a página inicial
  };

  return (
    <div className="flex h-screen m-0 p-0 bg-[var(--background)] text-[var(--text)]">
      <style>styled</style>

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-sm w-full p-5 rounded-md">
          <h1 className="text-center mb-4 text-xl font-bold">Login</h1>
          <p className="text-center mt-1 text-sm">Bem-vindo(a) de volta</p>

          <form>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu email"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-[var(--accent)]"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Sua senha"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-[var(--accent)]"
                required
              />
            </div>

            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="mr-2"
                />
                <label htmlFor="remember-me" className="text-sm">
                  Lembre-se de mim
                </label>
              </div>
              <a
                href="/recuperacaoSenha"
                className="text-[var(--accent)] text-sm hover:underline"
              >
                Esqueci minha senha
              </a>
            </div>

            <button
              onClick={direcionar}
              type="submit"
              className="w-full py-3 bg-[var(--accent)] text-white rounded font-semibold hover:bg-opacity-90"
            >
              Entrar
            </button>
          </form>

          <p className="text-center mt-7 text-sm">
            Não tem uma conta?{' '}
            <a
              href="/cadastro"
              className="text-[var(--accent)] hover:underline"
            >
              Cadastre-se
            </a>
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center bg-[var(--secondary)] rounded-bl-md rounded-tl-md">
        <h1 className="text-white mb-3 text-xl font-bold">Hello, amigo!</h1>
        <p className="text-white mb-3 text-sm">
          Ficamos felizes em tê-lo(a) aqui conosco novamente!
        </p>
        <img src="logo.png" alt="Logo" className="w-96 h-96 object-contain" />
      </div>
    </div>
  );
}
