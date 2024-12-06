<div className="relative">
            <AiOutlineBell 
              aria-label="Notificações"
              className="w-6 h-6 text-text cursor-pointer"
              onClick={toggleNotificationsMenu} // Toca para alternar o menu de notificações
            />
            {/* Indicador de novas notificações */}
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>

            {/* Menu suspenso de notificações */}
            {isNotificationsMenuOpen && (
              <div className="absolute top-12 right-0 bg-[var(--background)] text-[var(--text)] rounded-lg shadow-lg w-80 py-2 z-10">
                <div className="px-4 py-2 border-b ">
                  <h3 className="text-lg font-bold items-center">Notificações</h3>
                </div>
                <div className="px-4 py-2 hover:bg-[var(--secondary)] cursor-pointer">
                  <p>Nova mensagem de usuário.</p>
                </div>
                <div className="px-4 py-2 hover:bg-[var(--secondary)] cursor-pointer">
                  <p>Seu perfil foi atualizado.</p>
                </div>
                <div className="px-4 py-2 hover:bg-[var(--secondary)] cursor-pointer">
                  <p>Você ganhou uma medalha no ranking!</p>
                </div>
                <Link href="/notificacoes">
                  <div className="px-4 py-2 text-center hover:bg-[var(--secondary)] cursor-pointer">Ver todas as notificações</div>
                </Link>
              </div>
            )}
          </div>