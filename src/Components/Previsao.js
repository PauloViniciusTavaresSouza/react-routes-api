import React from 'react';
import apiGeral from '../api.json';

export const Previsao = () => {
  const [cidade, setCidade] = React.useState('');
  const [resultCity, setResultCity] = React.useState(null);
  console.log(apiGeral);

  function handleSubmit(event) {
    event.preventDefault(event);
    // implementar remoção de acentos e caracteres especiais
    const resultado = apiGeral.find(
      (localizacao) => localizacao.by === cidade.toLowerCase(),
    );
    resultado ? setResultCity(resultado) : setResultCity(false);
    console.log(resultado);
  }

  React.useEffect(() => {
    console.log('carreguei');
  }, []);

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cidade">Seleciona a cidade</label>
          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
          />
          <button>Pesquisar</button>
        </form>
      </section>
      {resultCity ? (
        <>
          <h1>{resultCity.results.city} </h1>
          <p>Descrição do dia: {resultCity.results.description}</p>
          <p>Humidade: {resultCity.results.humidity}</p>
          <p>Temperatura atual: {resultCity.results.condition_code} Graus</p>
        </>
      ) : resultCity === false ? (
        <h5>Localização não encontrada</h5>
      ) : (
        <h5>Digite alguma localização</h5>
      )}
    </div>
  );
};
