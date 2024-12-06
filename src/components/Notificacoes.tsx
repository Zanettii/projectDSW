"use client";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
import notificationsData from "./../../public/dadosBase/notifications.json";

const Notifications = () => {
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [notificationsList, setNotificationsList] = useState(
    notificationsData.notifications.slice(0, 4)
  );
  

  const toggleNotificationsMenu = () => {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  };

  const removeNotification = (id) => {
    setNotificationsList((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="relative">
      {/* Ícone de Notificação */}
      <FaBell
        aria-label="Notificações"
        className="w-6 h-6 text-text cursor-pointer"
        onClick={toggleNotificationsMenu}
      />
      {/* Indicador de notificações não lidas */}
      {notificationsList.some((notification) => !notification.read) && (
        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
      )}
      {/* Menu de notificações */}
      {isNotificationsMenuOpen && (
        <div className="absolute top-12 right-0 bg-[var(--background)] text-[var(--text)] rounded-lg shadow-lg w-80 py-2 z-10">
          <div className="px-4 py-2 border-b">
            <h3 className="text-lg font-bold">Notificações</h3>
          </div>
          <div className="overflow-y-auto max-h-[300px]">
            {notificationsList.length > 0 ? (
              notificationsList.slice(0, 4).map((notification) => (
                <div
                  key={notification.id}
                  className="flex justify-between items-center px-4 py-2 hover:bg-[var(--secondary)] cursor-pointer"
                >
                  <p>{notification.text}</p>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeNotification(notification.id)}
                    aria-label="Remover notificação"
                  >
                    &times;
                  </button>
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-center text-sm text-gray-500">
                Nenhuma nova notificação
              </div>
            )}
          </div>
          {/* Botão fixo para acessar a página de notificações */}
          <div className="border-t sticky bottom-0 bg-[var(--background)]">
            <Link href="/notificacoes">
              <div className="text-center py-2 text-[var(--text)] text-sm hover:bg-[var(--secondary)] cursor-pointer font-semibold">
                Ver todas as notificações
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
