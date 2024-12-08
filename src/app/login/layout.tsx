// app/cadastro/layout.tsx
import React, { ReactNode } from 'react';

interface CadastroLayoutProps {
  children: ReactNode;
}

const CadastroLayout: React.FC<CadastroLayoutProps> = ({ children }) => {
  return (
    <div>
        {children}
    </div>
  );
}

export default CadastroLayout;
