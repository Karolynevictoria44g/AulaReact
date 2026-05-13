export default function Exercicio1( {Fahrenheit} )
{ 

  let celsius= (Number(Fahrenheit)-32* 5) / 9
  return (
    <div>
       A temperatura {Fahrenheit} é {celsius} em celsius
    </div>



  )
}