# CV — Raul Angel Valdes Corona

Single page application con mi CV, construida con **React + Vite + Tailwind CSS v4** y desplegada en **Azure Static Web Apps**.

Proyecto para la materia de Cómputo en la Nube — CETYS Universidad.

## Stack

| Pieza           | Tecnología                 |
| --------------- | -------------------------- |
| UI              | React 18                   |
| Bundler         | Vite 7                     |
| Estilos         | Tailwind CSS v4 (`@theme`) |
| Iconos          | lucide-react               |
| Package manager | pnpm                       |
| Hosting         | Azure Static Web Apps      |
| CI/CD           | GitHub Actions             |

### Paleta

| Token         | Hex       | Uso                        |
| ------------- | --------- | -------------------------- |
| `ink`         | `#0d1b2a` | Fondo de la página         |
| `slate-deep`  | `#1b263b` | Superficies / tarjetas     |
| `steel`       | `#415a77` | Bordes y acentos           |
| `mist`        | `#778da9` | Texto secundario           |
| `parchment`   | `#e0e1dd` | Texto principal            |

## Desarrollo local

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # genera dist/
pnpm preview  # sirve dist/ localmente
```

## Estructura

```
.
├── index.html
├── vite.config.js
├── pnpm-workspace.yaml
├── .github/workflows/
│   └── azure-static-web-apps-agreeable-wave-03f1e0310.yml
├── public/
│   ├── favicon.svg
│   ├── cv-raul-valdes-corona.pdf
│   └── staticwebapp.config.json   # config de Azure (va en public/ para acabar en dist/)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css              # tokens de Tailwind v4
    ├── data/cv.js             # todo el contenido del CV
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Section.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

Para editar el contenido del CV no hace falta tocar componentes: todo vive en [`src/data/cv.js`](src/data/cv.js).

## Deploy en Azure Static Web Apps

El recurso se creó desde el Portal de Azure conectando este repo de GitHub, así que Azure
generó el workflow `.github/workflows/azure-static-web-apps-agreeable-wave-03f1e0310.yml`
y el secret `AZURE_STATIC_WEB_APPS_API_TOKEN_AGREEABLE_WAVE_03F1E0310`.

Ese workflow está **modificado a mano** respecto al que genera Azure:

| Cambio                                                | Por qué                                                        |
| ----------------------------------------------------- | -------------------------------------------------------------- |
| `skip_app_build: true` + build con pnpm en el runner   | El builder Oryx asume npm/yarn y tropieza con `pnpm-lock.yaml` |
| `app_location: dist` y `output_location: ""`           | Con `skip_app_build`, `app_location` **es** la carpeta ya construida y `output_location` debe ir vacío ([docs](https://learn.microsoft.com/azure/static-web-apps/build-configuration#skip-building-front-end-app)) |
| `staticwebapp.config.json` vive en `public/`           | Azure lo busca dentro de la carpeta desplegada, no en la raíz  |

Si algún día hay que recrear el recurso desde cero, la ruta más limpia es elegir
**Deployment source: `Other`** en el portal (así Azure no genera su propio workflow),
copiar el token de **Overview → Manage deployment token** y guardarlo como secret de
GitHub. Después basta con apuntar el workflow a ese nombre de secret.

## Cómo funciona el CI/CD

- **push a `main`** → `pnpm install --frozen-lockfile` → `pnpm build` → sube `dist/` a producción.
- **abrir/actualizar un PR** → deploy a un entorno de *staging* con URL propia.
- **cerrar el PR** → Azure destruye ese entorno de staging.

Solo debe existir **un** workflow de SWA en el repo; dos despliegan dos veces y el que no
tenga el secret correcto falla en cada push.
