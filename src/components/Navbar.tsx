'use client';
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import ThemeSwitcher from "./TemaButton";
import { user as userDados } from '../../public/dadosBase/userDados';
import  Notifications  from "./Notificacoes";



const user = {
  userName: userDados.id,
  nome: userDados.nome,
  idade: userDados.idade,
  avatar: userDados.avatar,
  avatarIcon: userDados.avatarIcone,
  conquistas: userDados.conquistas,
  amigos: userDados.friends,
  avancoDados: userDados.avanco,
  missoes: userDados.missoes,
};

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // Controla a visibilidade do menu de perfil
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false); // Controla o menu de notificações

  const profileImage = user.avatarIcon[1]; 

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Aqui você pode definir a lógica para realizar a pesquisa
    console.log('Pesquisando por:', searchQuery);
  };

  const toggleProfileMenu = () => {
    if (isNotificationsMenuOpen) {
      setIsNotificationsMenuOpen(false);
    }
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleNotificationsMenu = () => {
    if (isProfileMenuOpen) {
      setIsProfileMenuOpen(false);
    }
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  };



  return (
    <div className="bg-[var(--primary)] px-4 h-[65px] text-white shadow-lg">
      <div className="flex items-center justify-between g-[var(--secondary)] border-white p-4 pl-0">
        {/* Logo e nome */}
        {!isCollapsed && (
          <h1 className="text-3xl font-bold text-[var(--text-title)] flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png"   
                alt="Logo" 
                className="mr-2 w-8 h-8"  // Define o tamanho do logo
              />
              verbix
            </Link>
          </h1>
        )}

        {/* Campo de pesquisa e perfil */}
        <div className="flex items-center space-x-4">
          {/* Campo de pesquisa com botão */}
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 rounded-full bg-[var(--secondary)] text-text focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <AiOutlineSearch
              aria-label="Pesquisar"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-500 cursor-pointer"
              onClick={handleSearch}
            />
          </div>
          <div>
            <ThemeSwitcher />
          </div>
          {/* Ícone de Notificação */}
          <div className="relative">
            <Notifications />
          </div>

          {/* Menu de Perfil */}
          <div className="relative">
            <div className="w-10 h-10 bg-text-title rounded-full flex items-center justify-center cursor-pointer" onClick={toggleProfileMenu}>
              <img 
                src={profileImage} // A imagem do perfil é carregada aqui
                alt="Perfil"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>

            {/* Menu suspenso de perfil */}
            {isProfileMenuOpen && (
              <div className="absolute top-12 right-0 bg-[var(--background)] text-[var(--text)] rounded-lg shadow-lg w-40 py-2 z-10">
                <Link href="/perfil">
                  <div className="px-4 py-2 hover:bg-[var(--secondary)] cursor-pointer">Perfil</div>
                </Link>
                <Link href="/configuracoes">
                  <div className="px-4 py-2 hover:bg-[var(--secondary)] cursor-pointer">Configurações</div>
                </Link>
                <Link href='/login'>
                  <div className="px-4 py-2 hover:bg-[var(--secondary)] cursor-pointer">Sair</div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
