import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

const Kurssi = ({kurssi}) => {
  return (
    <div>
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

const Otsikko = (props) => {
  return (
    <h1>{props.kurssi}</h1>
  );
} 

const Sisalto = ({osat}) => {
  return (
    <div>
      {osat.map((osa) => <Osa osa={osa.nimi} tehtavia={osa.tehtavia} key={osa.id}/>)}
    </div>
  )
} 

const Osa = (props) => {
  return (
    <p>{props.osa} {props.tehtavia}</p>
  )
}

const Yhteensa = ({osat}) => {
  return (
    <p>yhteensä<span> </span>
      {osat.reduce((sum, osa) => sum + osa.tehtavia
      , 0)} 
      <span> </span>tehtävää</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

