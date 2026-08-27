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
├── staticwebapp.config.json   # config de Azure Static Web Apps
├── .github/workflows/
│   └── azure-static-web-apps.yml
├── public/favicon.svg
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

El workflow de este repo **ya construye el sitio con pnpm** y solo sube `dist/` a Azure
(`skip_app_build: true`). Esto es a propósito: el builder Oryx de Azure asume npm/yarn y
tropieza con el lockfile de pnpm.

1. Subir este repo a GitHub.
2. En el Portal de Azure: **Create a resource → Static Web App**.
   - **Plan type:** Free
   - **Deployment source:** `Other` (así Azure **no** genera un segundo workflow)
   - Crear el recurso.
3. En el recurso → **Overview → Manage deployment token** → copiar el token.
4. En GitHub → **Settings → Secrets and variables → Actions → New repository secret**:
   - **Name:** `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Secret:** el token del paso 3
5. Hacer push a `main` (o re-correr el workflow). La URL queda en el Overview del recurso:
   `https://<nombre>.azurestaticapps.net`

> Si en su lugar conectas GitHub desde el portal, Azure generará **otro** workflow con su
> propio secret `AZURE_STATIC_WEB_APPS_API_TOKEN_<NOMBRE>`. En ese caso borra
> `.github/workflows/azure-static-web-apps.yml` para no desplegar dos veces, y en el workflow
> generado por Azure cambia `output_location` a `dist`.

`staticwebapp.config.json` ya está configurado con el fallback de SPA y el cacheo de los
assets con hash.

## Cómo funciona el CI/CD

`.github/workflows/azure-static-web-apps.yml`:

- **push a `main`** → build + deploy a producción.
- **abrir/actualizar un PR** → deploy a un entorno de *staging* con URL propia.
- **cerrar el PR** → Azure destruye ese entorno de staging.
