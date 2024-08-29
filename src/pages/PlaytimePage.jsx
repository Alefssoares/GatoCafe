import React from 'react';
import '../styles/PlaytimePage.css'; // Importar estilos específicos para o PlaytimePage

function PlaytimePage() {
  return (
    <div className="playtime-page">
      <h2>Brincadeiras com os Felinos</h2>
      <section className="playtime-info">
        <h3>Informações sobre Preços</h3>
        <p>Para quem deseja passar um tempo brincando com nossos felinos adoráveis, temos as seguintes opções:</p>
        <ul>
          <li>1 Hora: R$ 20,00</li>
          <li>2 Horas: R$ 35,00</li>
          <li>3 Horas: R$ 50,00</li>
          <li>Adicional de 1 Hora: R$ 15,00</li>
        </ul>
        <p>Os horários de brincadeira são de segunda a sexta-feira, das 10h às 18h, e aos sábados, das 10h às 14h.</p>
      </section>
      <section className="playtime-rules">
        <h3>Regras de Brincadeira</h3>
        <ul>
          <li>Por favor, não alimente os felinos durante a sessão de brincadeira.</li>
          <li>Respeite o espaço dos felinos e evite movimentos bruscos.</li>
          <li>Os brinquedos fornecidos devem ser usados com cuidado.</li>
          <li>Qualquer comportamento agressivo será interrompido imediatamente.</li>
          <li>Para a segurança dos felinos e visitantes, é necessário seguir as orientações dos funcionários.</li>
        </ul>
      </section>
    </div>
  );
}

export default PlaytimePage;
