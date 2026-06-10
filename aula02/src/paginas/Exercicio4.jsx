export default function Exercicio4({base,altura})
{
    let area;
    area=(Number(base)*Number(altura))/2;
    return(
        <div>
           A área do triangulo é {area}; 
        </div>
    )
}



export default function Exercicio7( {celcius} )
{

  let fah, kelvin
  fah=(Number(celcius)*9/5)+32
  kelvin=Number(celcius) + 273.15


  return(

    <div>
      {celcius}°C equivale a {fah}°F e {kelvin}°K
    </div>



  )
}




<>
      <Exercicio7 celsius="30" />
    </>
