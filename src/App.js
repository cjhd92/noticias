

import { useEffect, useState } from "react";

import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";


function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
  
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=sa&category=${categoria}&apiKey=5b02b93d1462486895bfce8de4bcb2ea`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);

    




    }
  
    consultarAPI();
   
  }, [categoria])
  
  return (
    <>
    <Header 
          titulo='Buscador de Noticias'/>

    <div className="container white">
      <Formulario
                guardarCategoria = {guardarCategoria}/>

      <ListadoNoticias
                noticias={noticias}/>          

    </div>      
    </>
  );
}

export default App;
