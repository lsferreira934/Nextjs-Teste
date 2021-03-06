async function buscaCep(req, res) {
  const dynamicDate = new Date();

  const CEP = process.env.CEP_INFO;

  const checkCep = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
  const data = await checkCep.json();

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

  res.json({
    CEP: data,
    DATA: dynamicDate,
  });
}

export default buscaCep;
