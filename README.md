<h1 align="center">📱 SAS-APP - Health-Oriented System (Mobile Application)</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=STATUS&message=IN%20DEVELOPMENT&color=yellow&style=for-the-badge"/>
  <img src="https://img.shields.io/github/stars/lopes-obregon/SAS-APP?style=social"/>
  <img src="https://img.shields.io/github/languages/top/lopes-obregon/SAS-APP?color=blue&style=for-the-badge"/>
  <img src="https://img.shields.io/github/last-commit/lopes-obregon/SAS-APP?color=green&style=for-the-badge"/>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge"/>
  </a>
</p>

<p align="center">
  The mobile application of the Health-Oriented System, connecting patients to medical services.
</p>

---

## 📑 Index

* [📌 Project Description](#-descrição-do-projeto)
* [⚙️ Features](#-funcionalidades)
* [🧪 Screenshots & Demonstrations](#-screenshots--demonstrações)
* [🚀 How to Run the Project](#-como-executar-o-projeto)
* [🛠️ Technologies Used](#-tecnologias-usadas)
* [👥 Contributors](#-contribuidores)
* [📄 License](#-licença)

---

## 📌 Project Description

**SAS-APP** is the mobile component of the SAS ecosystem - Health-Oriented System. Designed to offer an **intuitive and accessible experience** to patients, this app acts as a direct bridge to healthcare services, interacting with the [SAS system backend](https://github.com/lopes-obregon/SAS) to manage data and functionalities.

Its main goal is to **empower the patient**, allowing them to:
* Easily pre-schedule medical appointments.
* Establish a direct communication channel to ask questions to healthcare professionals.
* Track the history of exams and medical certificates.

Additionally, SAS-APP aims to **facilitate communication and coordination** among different healthcare institutions, such as hospitals and private clinics, promoting a more integrated and efficient health ecosystem.

---

## ⚙️ Features

The SAS-APP offers a set of essential features to optimize patient interaction with healthcare services:

* **User Registration and Authentication:**
    * Secure creation of new patient accounts.
    * Intuitive login with credential validation.
* **Patient Data Consultation:**
    * Viewing personal and health-related information.
    * Tracking history of appointments, exams, and certificates.
* **Appointment Scheduling:**
    * Pre-scheduling appointments with doctors from UBS (Basic Health Unit) or partner clinics.
    * Viewing available time slots and specialties.
* **Interaction with Doctors:**
    * Direct communication channel for sending questions and receiving guidance.
    * Notifications about appointment status or doctor responses.
* **Document Management:**
    * Easy access to digital exams and certificates.
* **User-Friendly Interface:**
    * Clean and responsive design for smooth navigation across mobile devices.

---

### 🚀 Project Demo

Click here to view the demo on LinkedIn:
<a href="https://www.linkedin.com/posts/renan-lopes-obregon-5b8892104_nodejs-react-reactnative-activity-7249131651040002048-Y4Jj?utm_source=share&utm_medium=member_desktop&rcm=ACoAABp4idwBvHi2ikv6o5FEFlzHholvtMAINLs" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Ver Demonstração no LinkedIn">
</a>


## 🚀 How to Run the Project

To test and run SAS-APP in your development environment, follow the instructions below:

### Prerequisites

* **Node.js:** Make sure you have [Node.js](https://nodejs.org/en/download/) (LTS version recommended) installed.
* **npm:** The `npm` package manager (comes with Node.js).
* **Expo CLI:** Expo CLI simplifies React Native development. If you don’t have it, install it globally:
    ```bash
    npm install -g expo-cli
    ```
* **SAS Backend:** The **[SAS system backend](https://github.com/lopes-obregon/SAS)** **must be running in parallel**. Make sure to follow the execution instructions from the `SAS` repository and that it’s accessible by the app (likely on the same network or via configured `localhost`).

### Setup and Initialization

1.  **Clone the App Repository:**
    ```bash
    git clone https://github.com/lopes-obregon/SAS-APP.git
    cd SAS-APP
    ```

2.  **Install Dependencies:**
    In the root directory of the app project, install Node.js dependencies:
    ```bash
    npm install
    ```

3.  **Start the Project with Expo:**
    After installing dependencies, start the Expo development server:
    ```bash
    expo start
    ```
    This will open a browser page with a QR Code.

4.  **Run the App:**
    * **On your phone:** Download the "Expo Go" app (available on the App Store or Google Play). Open Expo Go and scan the QR Code displayed in your browser.
    * **On emulator/simulator:** Use the options on the Expo page (e.g., "Run on Android emulator", "Run on iOS simulator") if you have an emulator configured.

**Important:** Make sure the backend address (where the SAS server is running) is correctly configured in your app’s code so it can communicate with the APIs.

---

## 🛠️ Technologies Used

SAS-APP was developed using the following technologies and tools:

* **Programming Language:** `JavaScript`
* **Mobile Framework:** `React Native`
* **Development/Execution Environment:** `Expo` (simplifies React Native app development and builds)
* **API Consumption:** Communication with `Node.js` backend (SAS project).

---

## 👥 Contributors

This project was developed with the collaboration of:
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/45721862?v=4" width=115><br><sub>Renan Lopes Obregon</sub>](https://github.com/lopes-obregon) |[<img loading="lazy" src="https://avatars.githubusercontent.com/u/164580150?v=4"  width=115><br><sub>Samara Freitas</sub>](https://github.com/Samara0liveira)|
| :---: | :---: |

---

## 📄 License

This project is licensed under the **MIT License**.

The MIT License is a permissive free software license that allows free use, modification, and distribution of the source code, provided that the copyright notice and the license itself are included in all copies or substantial portions of the software.

For more details, see the [LICENSE](LICENSE) file in the root of this repository.

---
