<h1 align="center">📱 SAS-APP - Sistema Ambientado à Saúde (Aplicativo Mobile)</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=yellow&style=for-the-badge"/>
  <img src="https://img.shields.io/github/stars/lopes-obregon/SAS-APP?style=social"/>
  <img src="https://img.shields.io/github/languages/top/lopes-obregon/SAS-APP?color=blue&style=for-the-badge"/>
  <img src="https://img.shields.io/github/last-commit/lopes-obregon/SAS-APP?color=green&style=for-the-badge"/>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge"/>
  </a>
</p>

<p align="center">
  O aplicativo mobile do Sistema Ambientado à Saúde, conectando pacientes a serviços médicos.
</p>

---

## 📑 Índice

* [📌 Descrição do Projeto](#-descrição-do-projeto)
* [⚙️ Funcionalidades](#-funcionalidades)
* [🧪 Screenshots & Demonstrações](#-screenshots--demonstrações)
* [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
* [🛠️ Tecnologias Usadas](#-tecnologias-usadas)
* [👥 Contribuidores](#-contribuidores)
* [📄 Licença](#-licença)

---

## 📌 Descrição do Projeto

O **SAS-APP** é o componente mobile do ecossistema SAS - Sistema Ambientado à Saúde. Desenvolvido para oferecer uma **experiência intuitiva e acessível** aos pacientes, este aplicativo funciona como uma ponte direta para serviços de saúde, interagindo com o [backend do sistema SAS](https://github.com/lopes-obregon/SAS) para gerenciar dados e funcionalidades.

Seu principal objetivo é **empoderar o paciente**, permitindo:
* Realizar pré-agendamentos de consultas de forma simplificada.
* Estabelecer um canal de comunicação direto para tirar dúvidas com profissionais de saúde.
* Acompanhar o histórico de exames e atestados.

Além disso, o SAS-APP visa **facilitar a comunicação e a coordenação** entre diferentes instituições de saúde, como hospitais e clínicas privadas, promovendo um ecossistema de saúde mais integrado e eficiente.

---

## ⚙️ Funcionalidades

O aplicativo SAS-APP oferece um conjunto de funcionalidades essenciais para otimizar a interação do paciente com os serviços de saúde:

* **Cadastro e Autenticação de Usuário:**
    * Criação de novas contas para pacientes de forma segura.
    * Login intuitivo com validação de credenciais.
* **Consulta de Dados do Paciente:**
    * Visualização de informações pessoais e de saúde.
    * Acompanhamento do histórico de consultas, exames e atestados.
* **Agendamento de Consultas:**
    * Funcionalidade de pré-agendamento de consultas com médicos da UBS (Unidade Básica de Saúde) ou clínicas parceiras.
    * Visualização de disponibilidade de horários e especialidades.
* **Interação com Médicos:**
    * Canal de comunicação direto para envio de dúvidas e recebimento de orientações.
    * Notificações sobre o status de consultas ou respostas de médicos.
* **Gestão de Documentos:**
    * Acesso facilitado a exames e atestados digitais.
* **Interface Amigável:**
    * Design limpo e responsivo para uma navegação fluida em diferentes dispositivos móveis.

---


## 🚀 Como Executar o Projeto

Para testar e rodar o SAS-APP em seu ambiente de desenvolvimento, siga as instruções abaixo:

### Pré-requisitos

* **Node.js:** Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) (versão LTS recomendada) instalado.
* **npm:** O gerenciador de pacotes `npm` (vem com o Node.js).
* **Expo CLI:** O Expo CLI facilita o desenvolvimento React Native. Se não tiver, instale-o globalmente:
    ```bash
    npm install -g expo-cli
    ```
* **Backend SAS:** O **[backend do sistema SAS](https://github.com/lopes-obregon/SAS)** **deve estar rodando em paralelo**. Certifique-se de seguir as instruções de execução do repositório `SAS` e que ele esteja acessível pelo aplicativo (provavelmente na mesma rede ou via `localhost` configurado).

### Configuração e Inicialização

1.  **Clone o Repositório do Aplicativo:**
    ```bash
    git clone [https://github.com/lopes-obregon/SAS-APP.git](https://github.com/lopes-obregon/SAS-APP.git)
    cd SAS-APP
    ```

2.  **Instale as Dependências:**
    No diretório raiz do projeto do aplicativo, instale as dependências Node.js:
    ```bash
    npm install
    ```

3.  **Inicie o Projeto com o Expo:**
    Após a instalação das dependências, inicie o servidor de desenvolvimento do Expo:
    ```bash
    expo start
    ```
    Isso abrirá uma página no seu navegador com um QR Code.

4.  **Execute o Aplicativo:**
    * **No seu celular:** Baixe o aplicativo "Expo Go" (disponível na App Store ou Google Play). Abra o Expo Go e escaneie o QR Code exibido no seu navegador.
    * **No emulador/simulador:** Use as opções na página do Expo (ex: "Run on Android emulator", "Run on iOS simulator") se você tiver um emulador configurado.

**Importante:** Certifique-se de que o endereço do backend (onde o servidor SAS está rodando) esteja corretamente configurado no código do seu aplicativo para que ele possa se comunicar com as APIs.

---

## 🛠️ Tecnologias Usadas

O desenvolvimento do SAS-APP foi realizado utilizando as seguintes tecnologias e ferramentas:

* **Linguagem de Programação:** `JavaScript`
* **Framework Mobile:** `React Native`
* **Ambiente de Desenvolvimento/Execução:** `Expo` (simplifica o desenvolvimento e build de apps React Native)
* **Consumo de API:** Comunicação com o backend `Node.js` (projeto SAS).


---

## 👥 Contribuidores

Este projeto foi desenvolvido com a colaboração de:
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/45721862?v=4" width=115><br><sub>Renan Lopes Obregon</sub>](https://github.com/lopes-obregon) |[<img loading="lazy" src="https://avatars.githubusercontent.com/u/164580150?v=4"  width=115><br><sub>Samara Freitas</sub>]([https://github.com/lopes-obregon](https://github.com/Samara0liveira))
| :---: | :---: |



---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**.

A Licença MIT é uma licença de software livre permissiva que permite a livre utilização, modificação e distribuição do código-fonte, desde que a notificação de direitos autorais e a própria licença sejam incluídas em todas as cópias ou partes substanciais do software.

Para mais detalhes, consulte o arquivo [LICENSE](LICENSE) na raiz deste repositório.

---
