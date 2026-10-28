# Portafolio Cloud & DevOps — Andrés Mateos

Portafolio profesional, moderno y responsive para presentar mi ruta como **Cloud & DevOps Engineer en crecimiento**. Está construido sin frameworks para mantener una base rápida, accesible y fácil de mantener.

**Sitio:** [mateos1712.github.io/amateos.portafolio.mx](https://mateos1712.github.io/amateos.portafolio.mx/)

## Características

- Diseño responsive para escritorio, tablet y móvil.
- Navegación móvil accesible.
- Modo claro y oscuro con persistencia local.
- Secciones de trayectoria, stack, proyectos y contacto.
- Contenido profesional con posicionamiento honesto.
- Proyectos reales de AWS, Terraform, contenedores, CI/CD y observabilidad.
- Tarjetas preparadas para futuros proyectos de Python y CI/CD.
- Diagramas de arquitectura generados para cada proyecto y optimizados en WebP.
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
│   ├── projects/
│   │   ├── project-aws-architecture.webp
│   │   ├── project-bash-automation.webp
│   │   ├── project-cafe-53.webp
│   │   ├── project-campus-pulse.webp
│   │   ├── project-cicd.webp
│   │   ├── project-cloudvault.webp
│   │   ├── project-portfolio.webp
│   │   ├── project-python-automation.webp
│   │   └── project-terraform.webp
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

Las imágenes de CloudVault y Campus Pulse son ilustraciones conceptuales generadas con IA. La imagen de Café 53 es una captura de la aplicación desplegada. Las tarjetas marcadas como `Próximamente` representan la hoja de ruta.

## Proyectos incluidos

- [CloudVault AWS](https://github.com/Mateos1712/cloudvault-aws): VPC en dos zonas, subredes públicas y privadas, EC2 con Nginx y un bucket S3 privado con versionado y cifrado, definido con Terraform.
- [Campus Pulse Cloud Platform](https://github.com/Mateos1712/campuspulse-cloud-platform): laboratorio DevOps en desarrollo con API instrumentada, Docker, CI/CD, Terraform para ECS Fargate, manifiestos Kubernetes y observabilidad con Prometheus y Grafana.
- [Café 53](https://github.com/Mateos1712/cafe-53): aplicación serverless desplegada con API Gateway, Lambda, DynamoDB, EventBridge, SQS/DLQ, SNS, CloudFront, Terraform, Bruno y CloudWatch.
- [Portafolio Cloud & DevOps](https://github.com/Mateos1712/amateos.portafolio.mx): este sitio, construido con HTML, CSS y JavaScript sin frameworks.

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
