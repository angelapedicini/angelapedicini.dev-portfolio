// Elenco delle app. Per aggiungerne una, copia un blocco e cambia i valori.
// "repo" è il link alla repository GitHub dell'app (per ora punta a GitHub, poi cambialo).
// "tags" sono le tecnologie usate: ognuna ha il link alla sua documentazione.
// "icon" contiene il disegno SVG (viewBox 24x24, stile linee).
window.APPS = [
  {
    name: "Helpdesk",
    description: "Gestione delle richieste di assistenza: apri, assegna e segui le segnalazioni dall'inizio alla chiusura.",
    url: "/helpdesk",
    repo: "https://github.com/",
    status: "Online",
    tags: [
      { name: "Next.js", url: "https://nextjs.org/docs" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
      { name: "Material UI", url: "https://mui.com/material-ui/getting-started/" },
      { name: "GraphQL", url: "https://graphql.org/learn/" },
      { name: "Prisma", url: "https://www.prisma.io/docs" },
      { name: "PostgreSQL", url: "https://www.postgresql.org/docs/" },
      { name: "CASL", url: "https://casl.js.org/v7/en/" },
    ],
    icon: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"/>'
  }
];