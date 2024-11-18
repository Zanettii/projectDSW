/** @type {import('next').NextConfig} */
const nextConfig = {
    // Habilita a reescrita de rotas, por exemplo
    async redirects() {
      return [
        {
          source: '/configuracoes',
          destination: '/not-found',
          permanent: false, // redirecionamento temporário
        },
      ];
    },
  
    // Habilita reescritas (caso você queira manipular URLs diretamente)
    async rewrites() {
      return [
        {
          source: '/configuracoes',
          destination: '/not-found', // Redireciona para o seu componente NotFound
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  