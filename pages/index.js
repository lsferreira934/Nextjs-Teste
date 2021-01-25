import { useState } from 'react';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Contador />

      <Link href="/politicas">
        <a>Ir para politicas</a>
      </Link>
    </div>
  );
}

const Contador = () => {
  const [contador, setContador] = useState(1);
  function adicionarValor() {
    setContador(contador + 1);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarValor}>+</button>
    </div>
  );
};

export default Home;
