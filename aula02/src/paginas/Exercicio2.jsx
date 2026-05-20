export default function Exercicio2( {peso , altura} )
{

  let IMC= peso / (altura * altura)
  return (

    <div>
      o peso é {peso} a altura é {altura}, e o IMC é {IMC}
    </div>



  )
}