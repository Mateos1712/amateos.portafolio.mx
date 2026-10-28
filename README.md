# Portafolio profesional — Andrés Mateos

Portafolio profesional, moderno y responsive para presentar mi perfil como **Ingeniero en Ciencias de la Computación titulado**, con experiencia en integraciones, Linux, infraestructura y automatización, además de proyectos prácticos de AWS y Terraform. Está construido sin frameworks para mantener una base rápida, accesible y fácil de mantener.

**Sitio:** [mateos1712.github.io/amateos.portafolio.mx](https://mateos1712.github.io/amateos.portafolio.mx/)

## Características

- Diseño responsive para escritorio, tablet y móvil.
- Navegación móvil accesible.
- Modo claro y oscuro con persistencia local.
- Secciones de trayectoria, stack, proyectos y contacto.
- Contenido profesional con posicionamiento honesto.
- Proyectos reales de AWS, Terraform, contenedores, APIs y observabilidad.
- Casos profesionales privados descritos sin exponer código ni datos de clientes.
- Diagramas técnicos SVG basados en la arquitectura real de cada proyecto.
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
│   │   ├── diagram-campus-pulse.svg
│   │   ├── diagram-cloudvault.svg
│   │   ├── diagram-enterprise-platform.svg
│   │   ├── diagram-nas-infrastructure.svg
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

Los diagramas de CloudVault y Campus Pulse reflejan los recursos y flujos documentados en sus repositorios. La imagen de Café 53 es una captura de la aplicación desplegada. Los casos de aplicaciones empresariales y NAS son resúmenes visuales sin información confidencial.

## Proyectos incluidos

- [CloudVault AWS](https://github.com/Mateos1712/cloudvault-aws): VPC en dos zonas, subredes públicas y privadas, EC2 con Nginx y un bucket S3 privado con versionado y cifrado, definido con Terraform.
- [Campus Pulse Cloud Platform](https://github.com/Mateos1712/campuspulse-cloud-platform): laboratorio DevOps en desarrollo con API instrumentada, Docker, CI/CD, Terraform para ECS Fargate, manifiestos Kubernetes y observabilidad con Prometheus y Grafana.
- [Café 53](https://github.com/Mateos1712/cafe-53): aplicación serverless desplegada con API Gateway, Lambda, DynamoDB, EventBridge, SQS/DLQ, SNS, CloudFront, Terraform, Bruno y CloudWatch.
- [Portafolio profesional](https://github.com/Mateos1712/amateos.portafolio.mx): este sitio, construido con HTML, CSS y JavaScript sin frameworks.
- **Virtualización de aplicaciones empresariales:** caso profesional privado con Linux, Tomcat, Docker y LDAP/Active Directory.
- **Implementación NAS y red local:** proyecto freelance privado con Synology, conectividad, inventario y cámaras IP.

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

1. Añade una tarjeta nueva en `index.html` solo cuando exista trabajo realizado.
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
