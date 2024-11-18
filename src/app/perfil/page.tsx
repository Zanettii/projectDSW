"use client";
import React from 'react';


export default function Page() {
  return (
    <div className="flex rounded-lg p-4 bg-secondary ">
      <section id="perfil" className="w-1/3 flex flex-col items-center pt-12 border-r-2 border-[var(-background)]">
        <div className="text-center">
          <img
            src="/Personagens/Diogo/DiogoPerfil.png"
            alt="Foto do Perfil"
            className="mb-1 w-44 h-44 rounded-full border-8 border-[var(--text)]"
          />
          <h3 className="mt-1 mb-1 text-xl font-semibold">João da Silva</h3>
          <h4 className="text-[var(--text-sub)]">@joaosilva</h4>
        </div>

        <div className="flex gap-5 py-5 text-center">
          <div className="max-w-[82px] min-h-[50px]">
            <p className="mb-1 mt-2 text-base font-semibold">Livros lidos</p>
            <p className="mt-1 text-base">12</p>
          </div>
          <div className="max-w-[82px] min-h-[50px]">
            <p className="mb-1 mt-2 text-base font-semibold">Páginas lidas</p>
            <p className="mt-1 text-base">1502</p>
          </div>
          <div className="max-w-[82px] min-h-[50px]">
            <p className="mb-1 mt-2 text-base font-semibold">Missões concluídas</p>
            <p className="mt-1 text-base">5</p>
          </div>
        </div>
      </section>

      {/* Conquistas e Missão */}
      <section id="conquistas" className="w-2/3 flex flex-col items-center pt-8">
        <h3 className="mb-1 text-lg font-semibold">• CONQUISTA •</h3>

        <div className="flex gap-5 py-5 mt-1">
          {['Conquista 1', 'Conquista 2', 'Conquista 3'].map((title, idx) => (
            <div key={idx} className="text-center">
              <img
                src="conquista.jfif"
                alt={title}
                className="w-36 h-36 rounded-lg mb-1"
              />
              <h4 className="mt-1">{title}</h4>
            </div>
          ))}
        </div>

        <h3 className="mb-1 text-lg font-semibold">• MISSÃO DO MÊS •</h3>

        <div className="mt-1 w-[450px]">
          <div id="progresso-paginas" className="mb-5">
            <h4 className="mb-1">Páginas</h4>
            <progress id="barra-progresso" value="46" max="100" className="w-full h-8"></progress>
          </div>

          <div id="progresso-livros">
            <h4 className="mb-1">Livros</h4>
            <progress id="barra-progresso" value="2" max="5" className="w-full h-8"></progress>
          </div>
        </div>
      </section>
    </div>
  );
}
