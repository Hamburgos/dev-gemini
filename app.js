function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if (campoPesquisa == "") {
        section.innerHTML = "Nenhum Item Encontrado"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    console.log(campoPesquisa);
    console.log(section); // Linha para depuração, verifica se a seção foi encontrada
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let historia_olimpica = "";
    let regras = "";
    let modalidades = "";
    let estilos = "";
    let medalhistas_brasileiros = "";
    let tags = "";
  
    // Itera sobre cada item de dados e constrói o HTML
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase()
      descricao = dado.descricao.toLocaleLowerCase()
      historia_olimpica = dado.historia_olimpica.toLocaleLowerCase()
      regras = dado.regras.toLocaleLowerCase()
      modalidades = dado.modalidades.toLocaleLowerCase()
      estilos = dado.estilos.toLocaleLowerCase()
      medalhistas_brasileiros = dado.medalhistas_brasileiros.toLocaleLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      // se titulo inclues campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || historia_olimpica.includes(campoPesquisa) || regras.includes(campoPesquisa) || modalidades.includes(campoPesquisa) || estilos.includes(campoPesquisa) || medalhistas_brasileiros.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // cria um novo elemento
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
          <a href="${dado.link}" target="_blank"><b>Mais informações sobre o esporte</b></a>
        </div>
      `
      }
      // Cria um elemento div para cada item e adiciona informações como título, descrição e link
      
    }
  
    // Atribui o HTML gerado para a seção, substituindo o conteúdo anterior
    section.innerHTML = resultados
  }
