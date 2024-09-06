function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Linha para depuração, verifica se a seção foi encontrada
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = ""
  
    // Itera sobre cada item de dados e constrói o HTML
    for (let dado of dados) {
      // Cria um elemento div para cada item e adiciona informações como título, descrição e link
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <p class="descricao-meta">${dado.historia_olimpica}</p>
          <p class="descricao-meta">${dado.regras}</p>
          <p class="descricao-meta">${dado.modalidades}</p>
          <p class="descricao-meta">${dado.estilos}</p>
          <p class="descricao-meta">${dado.medalhistas_brasileiros}</p>
          <a href="${dado.link}" target="_blank"><b>Mais informações sobre o esporte nas Olímpiadas</b></a>
        </div>
      `
    }
  
    // Atribui o HTML gerado para a seção, substituindo o conteúdo anterior
    section.innerHTML = resultados
  }
