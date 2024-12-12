import { ReactNode } from "react";

interface ContainerCategoriasProps {
  title: string;
  qtCompLinha: number;
  children?: ReactNode; 
}

const ContainerCategorias = ({ title, qtCompLinha, children }: ContainerCategoriasProps) => {
  return (
    <div className="relative overflow-visible justify-center">
      <hr />
      <div className={`justify-center relative z-10 grid grid-cols-${qtCompLinha} items-center text-center gap-2 flex-col mt-4 overflow-y-auto max-h-[62vh] scroll-hidden`}>
        {children} 
      </div>
    </div>
  );
};

export default ContainerCategorias;
