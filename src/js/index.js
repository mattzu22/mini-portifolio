const abas = document.querySelectorAll(".aba");

abas.forEach((aba) => {
  aba.addEventListener("click", () => {
    if (aba.classList.contains('selecionado')) {
      return;
    }

    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");

    const informacaoSelecionada = document.querySelector(
      ".informacao.selecionado"
    );

    informacaoSelecionada.classList.remove("selecionado");

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

    const informacaoParaMostrar = document.getElementById(
      idDoElementoDeInformacoesDaAba
    );

    informacaoParaMostrar.classList.add("selecionado");
  });
});
