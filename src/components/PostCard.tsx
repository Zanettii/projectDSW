import { useState } from 'react';

interface PostProps {
    nome: string;
    titulo: string;
    descricao: string;
    imagem: string;
    data: string;
  }

const PostCard = ({ titulo, descricao, imagem, data }: PostProps) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleComment = () => setComments(comments + 1);
  const handleShare = () => setShares(shares + 1);

  return (
    <div className="max-w-[50vh] p-2 w-full max-h-[55vh] mx-auto items-center bg-[var(--accent2)] rounded-lg shadow-lg overflow-hidden  flex flex-col justify-center">
      <div className="max-h-full rounded-lg w-full justify-center items-center">
        {/* Imagem do post */}
        <img 
          src={imagem} 
          alt="Imagem do post" 
          className="w-[75vh] h-[30vh] rounded-lg p-2 " 
        />
      </div>
      <div className="p-2">
        {/* Título */}
        <h2 className="text-[15px] font-semibold text-[var(--text-title)]">{titulo}</h2>
        {/* Descrição */}
        <p className="mt-2 text-[12px] text-[var(--text-title)]">{descricao}</p>
        {/* Data */}
        <p className="mt-1 text-[10px] text-[var(--text-title)]">{data}</p>

        <div className="flex items-center justify-between mt-4">
          {/* Reações */}
          <div className="flex gap-4">
            <button
              onClick={handleLike}
              className="flex items-center text-[10px] text-[var(--text-title)] hover:text-[var(--accent3)] transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 3C11.25 3 7.75 8 3 10c3.75 2 8.25 3 8.25 8s2-7.5 6-9c-3-2-5.25-6-5.25-6z"
                />
              </svg>
              {likes} Likes
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
