# El Pájaro Hot Wings - Sitio Web

> Interfaz web interactiva para la digitalización del menú del restaurante "El Pájaro Hot Wings" en Magdalena de Kino.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Descripción del Proyecto

Este proyecto surge como una solución tecnológica para modernizar la oferta gastronómica de **"El Pájaro Hot Wings"**. El objetivo principal es resolver la falta de un medio centralizado de consulta, eliminando la dependencia de métodos físicos o telefónicos tradicionales.

La plataforma ofrece una experiencia de navegación intuitiva que permite a los usuarios:
1.  Visualizar el menú digitalizado.
2.  Filtrar productos en tiempo real.
3.  Realizar pedidos mediante un mensaje a través de WhatsApp.

El diseño está orientado estratégicamente al público local que valora la inmediatez y el uso de dispositivos móviles.

## Objetivos

### Objetivo General
Desarrollar e implementar un portal web interactivo y adaptable (responsive) que permita la digitalización integral del catálogo de productos y facilite la gestión de pedidos mediante tecnologías web modernas.

### Objetivos Específicos
* Implementar estructura semántica en **HTML5**.
* Aplicar diseño responsive con **CSS3**.
* Manipular el DOM y eventos mediante **JavaScript**.
* Integrar formularios y validación para conexión con API de WhatsApp.

## Tecnologías y Herramientas

* **Lenguajes:** HTML5, CSS3, JavaScript (ES6+).
* **Editor:** VS Code.
* **Integraciones:** API de WhatsApp.
* **Testing:** Google Chrome DevTools.

## Características Principales

### 1. Catálogo Dinámico (Filtrado JS)
Implementación de un sistema de clasificación en tiempo real. Utilizando atributos `dataset` y eventos `click`, el usuario puede filtrar el menú por:
* Pollo
* Sushi
* Complementos
* Bebidas

### 2. Pedidos vía WhatsApp
Módulo de contacto funcional que:
* Intercepta el envío del formulario (`preventDefault`).
* Valida que los datos no sean nulos.
* Codifica el pedido y redirige automáticamente al chat de WhatsApp del negocio.

### 3. Diseño Responsive (RWD)
La interfaz se adapta a diferentes dispositivos mediante Media Queries:
* **Tabletas (max-width: 900px):** Reestructuración de la cuadrícula de contenido.
* **Móviles (max-width: 600px):** Transformación de navegación y elementos táctiles.

## Estructura y Semántica

El proyecto sigue las mejores prácticas de semántica web:

* `<header>`: Identidad del sitio, logotipo y título.
* `<nav>`: Enlaces de anclaje para desplazamiento fluido ("Menú", "Contacto").
* `<main>`: Contenedor de la lógica central (catálogo y formularios).
* `<section>`: Agrupación temática del contenido.
* `<footer>`: Derechos de autor y enlaces a redes sociales.

## Vistas Previas (Wireframes y Diseño)

| Vista Escritorio | Vista Móvil |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/ff4e71ee-d7c2-4f46-919a-a8e0fc0981f5" width="400"> | <img src="https://github.com/user-attachments/assets/8f99a771-e670-406b-8d7b-9bdbae110d50" width="200"> |

## Instalación y Uso

Este es un proyecto de sitio estático, por lo que no requiere instalación de dependencias de servidor.

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/osrmoi/el-pajaro-sitio-web.git
    ```
2.  **Abrir el proyecto:**
    Navega a la carpeta y abre el archivo `index.html` en tu navegador de preferencia.

---
Desarrollado por **Mariana Corona y Moisés Osorio** - Estudiantes de Ingeniería en Software.
