import React from 'react';
import CadastroLayout from './layout';

export default function Page() {
  const backgroundStyle = {
    backgroundColor: 'var(--background)',
    color: 'var(--text)',
  };
  const secondaryBackground = { backgroundColor: 'var(--primary)' };

  return (
    <CadastroLayout>
    <div className="flex flex-col sm:flex-row h-screen m-0 p-0" style={backgroundStyle}>
      {/* Lado esquerdo */}
      <div
        className="flex-1 flex flex-col justify-center items-center rounded-tr-md rounded-br-md"
        style={secondaryBackground}
      >
        <h1 className="text-[var(--text-title)] mb-2 text-xl font-bold">
          Seja Bem Vindo(a)!
        </h1>
        <p className="text-[var(--text-title)] mt-1 mb-2 text-sm">
          Você é novo por aqui? Não se preocupe, o cadastro é bem simples!
        </p>
        <img
          src="logo.png"
          alt="Logotipo da empresa" 
          className="w-96 h-96 object-contain"
        />
      </div>

      {/* Lado direito */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-sm w-full p-5 rounded-md">
          <h1 className="text-center mb-4 text-xl font-bold text-[var(--primary)]">Cadastre-se</h1>
          <p className="text-center mt-1 text-sm text-[var(--primary)]">Bem vindo(a)!</p>

          <form>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                className="w-full p-2 rounded border focus:outline-none focus:ring focus:ring-[var(--primary)]"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 rounded border focus:outline-none focus:ring focus:ring-[var(--primary)]"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                className="w-full p-2 rounded border focus:outline-none focus:ring focus:ring-[var(--primary)]"
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                id="password-confirm"
                name="password-confirm"
                placeholder="Confirme a Senha"
                className="w-full p-2 rounded border focus:outline-none focus:ring focus:ring-[var(--primary)]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[var(--primary)] text-white rounded font-semibold hover:bg-opacity-90 transition"
            >
              Cadastrar
            </button>
          </form>

          <p className="text-center mt-7 text-sm text-[var(--primary)]">
            Já tem uma conta?{' '}
            <a href="/login" className="text-[var(--secondary)] hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
    </CadastroLayout>
  );
}
