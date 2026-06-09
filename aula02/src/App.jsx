import "./App.css";
import Exemplo1 from "./paginas/Exemplo1"
import Exemplo2 from "./paginas/Exemplo2";
import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";
import Exercicio3 from "./paginas/Exercicio3";
export default function App()
{
  return (
    <div>
      <h1>Aula 02 - Estudo de componenetes e Props</h1>

      <div className="card">
        <h3>Chamada para o Exemplo 1</h3>
        <Exemplo1 numero= {33}/>
        <Exemplo1 numero= {43}/>
        <Exemplo1 numero= {2}/>
      </div>

      <div className="card">
         <h3>Chamadas para o Exemplo2</h3>
         <Exemplo2 numero1= {33}  numero2= {34}/>
         <Exemplo2 numero1= {33}  numero2= {-345}/>
         <Exemplo2 numero1= {33}  numero2= {6.8}/>
      </div>

      <div className="card">
         <h3>Chamadas para o Exercicio1</h3>
         <Exercicio1 Fahrenheit= {30}/> 
      </div>

      <div className="card">
         <h3>Chamadas para o Exercicio2</h3>
         <Exercicio2 peso= {80}  altura= {1.80}/>
         <hr />
         <Exercicio2 peso= {60}  altura= {1.60}/>
      </div>

      <div className="card">
        <h3>Chamada para o Exercicio 3</h3>
        <Exercicio3 nota1 ={10} nota2={10}/>
      </div>

      <div className="card">
        <h3>Chamada para o Exercicio 4</h3>
        <Exercicio4 base ={10} altura={10}/>
      </div>

      <div className="card">
        <h3>Chamada para o Exercicio 5</h3>
        <Exercicio5 consultas={100}/>
      </div>

    </div>



  )
}