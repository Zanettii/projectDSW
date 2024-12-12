

interface PostProps {
    id: number;
    nome: string;
    tipo: string;
    icone: string;
    dataFim: string;
    progresso: number;
  }

  const MissaoCardPerfil = ({ id, nome, tipo, icone, dataFim, progresso }: PostProps) => {
    return (
      <div
        key={id}
        className="relative flex flex-col justify-end items-center rounded-md p-2 w-[130px] h-[160px] bg-gradient-to-t from-[rgb(42,23,62)] to-[rgb(136,105,167,0.43)] transition-all duration-300 ease-in-out hover:from-[rgb(42,23,62,0.15)] hover:to-[rgb(136,105,167,0.96)] cursor-pointer  bg-opacity-80"
        style={{
          filter: 'brightness(0.8) saturate(1.3) contrast(1.1)',
        }}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <img
            src={icone}
            alt={icone}
            className="w-[100px] h-[100px] object-contain mix-blend-overlay"
          />
          <div className="absolute inset-0 flex flex-col items-center z-10">
            <p
              className="text-[12px] font-semibold text-white"
              style={{
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
              }}
            >
              {nome} | {tipo}
            </p>
            <p
              className="text-[12px] font-semibold text-white mt-2"
              style={{
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
              }}
            >
              {dataFim}
            </p>
          </div>
        </div>
        {/* Barra de progresso */}
        {progresso < 100 && progresso >= 0 && (
          <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
            <div
              className="bg-[var(--accent2)] h-2.5 rounded-full"
              style={{ width: `${progresso}%` }}
            ></div>
          </div>
        )}
      </div>
    );
  };
  
  
  export default MissaoCardPerfil;
  