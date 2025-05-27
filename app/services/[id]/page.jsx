export default function ArticlePage({ params }) {
  const { id } = params;
  return (
    <div>
      <h2>Détail du service {id}</h2>
      <p>Voici les infos liées au service {id}</p>
    </div>
  );
}
