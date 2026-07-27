# Portafolio Cloud & DevOps — Andrés Mateos

Portafolio profesional, moderno y responsive para presentar mi ruta como **Cloud & DevOps Engineer en crecimiento**. Está construido sin frameworks para mantener una base rápida, accesible y fácil de mantener.

**Sitio:** [mateos1712.github.io/amateos.portafolio.mx](https://mateos1712.github.io/amateos.portafolio.mx/)

## Características

- Diseño responsive para escritorio, tablet y móvil.
- Navegación móvil accesible.
- Modo claro y oscuro con persistencia local.
- Secciones de trayectoria, stack, proyectos y contacto.
- Contenido profesional con posicionamiento honesto.
- Tarjetas preparadas para futuros proyectos de AWS, Terraform, Bash, Python y CI/CD.
- SEO técnico, datos estructurados, Open Graph, Twitter Cards, canonical, sitemap y favicon.
- Sin repositorios ficticios ni enlaces vacíos.
- Animaciones discretas con soporte para `prefers-reduced-motion`.

## Stack del sitio

- HTML5 semántico
- CSS moderno
- JavaScript sin dependencias
- GitHub Pages

## Estructura

```text
.
├── assets/
│   ├── apple-touch-icon.png
│   ├── favicon-32.png
│   ├── favicon.svg
│   └── og-cloud-devops.png
├── scripts/
│   ├── generate_social_assets.py
│   └── validate-site.mjs
├── index.html
├── script.js
├── site.webmanifest
├── sitemap.xml
├── style.css
└── robots.txt
```

## Ejecutar localmente

Desde la raíz del repositorio:

```bash
python -m http.server 8000
```

Después abre `http://localhost:8000`.

## Validación

Con Node.js disponible:

```bash
npm run check
```

La validación comprueba la sintaxis de JavaScript, metadatos esenciales, anclas, referencias locales, archivos requeridos y ausencia de enlaces vacíos.

Para regenerar la imagen social y los iconos se necesita Python con Pillow:

```bash
python scripts/generate_social_assets.py
```

## Añadir un proyecto real

1. Sustituye una tarjeta marcada como `Próximamente` en `index.html`.
2. Describe el objetivo, la arquitectura y las decisiones técnicas.
3. Añade el enlace únicamente cuando el repositorio o demo exista.
4. Ejecuta la validación y revisa el resultado en móvil y escritorio.

## Despliegue

GitHub Pages publica la raíz de la rama `main`. Los cambios deben llegar mediante pull request; el sitio utiliza rutas relativas para funcionar correctamente bajo `/amateos.portafolio.mx/`.

## Autor

**Andrés Mateos**

- [GitHub](https://github.com/Mateos1712)
- [LinkedIn](https://www.linkedin.com/in/andres-mateos-8192822a1)
- [Email](mailto:mateos1711@gmail.com)
