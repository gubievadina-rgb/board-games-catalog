const games = [
  ["Catan", "🏝️", "3–4 игрока", "60 минут"],
  ["Монополия", "💰", "2–6 игроков", "90 минут"],
  ["Dixit", "🎨", "3–8 игроков", "30 минут"],
  ["UNO", "🃏", "2–10 игроков", "15 минут"],
  ["Шахматы", "♟️", "2 игрока", "30 минут"],
  ["Ticket to Ride", "🚂", "2–5 игроков", "60 минут"]
];
export default function Home() {
  return (
    <main style={{ padding: 30, textAlign: "center" }}>
      <h1>🎲 Каталог настольных игр</h1>
      <p>Выбери игру для интересного вечера!</p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20
      }}>
        {games.map((game, index) => (
          <div key={index} style={{
            background: "#eeeaff",
            padding: 25,
            borderRadius: 15
          }}>
            <h1>{game[1]}</h1>
            <h2>{game[0]}</h2>
            <p>{game[2]}</p>
            <p>⏱️ {game[3]}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
             