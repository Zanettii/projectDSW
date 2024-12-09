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
    <div className="max-w-[360px] w-full max-h-[500px] mx-auto items-center bg-[var(--accent2)] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col justify-center">
      <div className="h-[200px] overflow-hidden flex justify-center items-center">
        {/* Imagem do post */}
        <img src={imagem} alt="Imagem do post" className="w-[200px] h-[300px] " />
      </div>
      <div className="p-4">
        {/* Título */}
        <h2 className="text-xl font-semibold text-[var(--text-title)]">{titulo}</h2>
        {/* Descrição */}
        <p className="mt-2 text-[var(--text-title)]">{descricao}</p>
        {/* Data */}
        <p className="mt-1 text-sm text-[var(--text-title)]">{data}</p>

        <div className="flex items-center justify-between mt-4">
          {/* Reações */}
          <div className="flex gap-4">
            <button
              onClick={handleLike}
              className="flex items-center text-sm text-[var(--text-title)] hover:text-[var(--accent3)] transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 mr-1"
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
