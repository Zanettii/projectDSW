import React from "react";

const Page = () => {
  return (
    <div>
      <iframe
        frameBorder="0"
        scrolling="no"
        style={{ border: "0px" }}
        src="https://books.google.com.br/books?id=1enwDwAAQBAJ&newbks=0&lpg=PP1&hl=pt-BR&pg=PT6&output=embed"
        width="100%" // você pode definir uma largura específica ou usar 100% para responsividade
        height="500" // você pode ajustar a altura conforme necessário
      ></iframe>
    </div>
  );
};

export default Page;
