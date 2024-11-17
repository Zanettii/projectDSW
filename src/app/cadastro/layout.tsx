// app/cadastro/layout.tsx
import React, { ReactNode } from 'react';

interface CadastroLayoutProps {
  children: ReactNode;
}

const CadastroLayout: React.FC<CadastroLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
        {children}
    </div>
  );
}

export default CadastroLayout;
