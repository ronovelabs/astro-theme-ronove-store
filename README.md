# 🚀 Astro Theme Ronove Store

Tema ecommerce moderno desarrollado con Astro, TypeScript y Tailwind CSS para Ronove Store.

## 📋 Historia de Usuario

**HU-000: Inicializar proyecto Astro ecommerce**

- Estado: 🏗️ In Progress
- Prioridad: 🔥 Alta
- Story Points: 5

### Criterios de Aceptación

- [x] Astro 5.x instalado con TypeScript
- [x] Estructura de carpetas definida (src/components, src/layouts, src/pages, src/styles, src/types)
- [x] Tailwind CSS integrado
- [x] Configuración base SEO con astro-seo
- [x] Layout principal con header/footer
- [x] Página home básica funcional
- [x] Scripts de build y dev configurados
- [x] README con instrucciones de instalación

## 🚀 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── ProductCard.astro
│   ├── layouts/         # Layouts de página
│   │   └── Layout.astro
│   ├── pages/           # Rutas de la aplicación
│   │   ├── index.astro
│   │   ├── productos.astro
│   │   ├── nosotros.astro
│   │   └── 404.astro
│   ├── styles/          # Estilos globales
│   │   └── global.css
│   └── types/           # Tipos TypeScript
│       └── index.ts
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.mjs  # Configuración de Tailwind
├── tsconfig.json        # Configuración de TypeScript
└── package.json
```

## 🛠️ Instalación

### Requisitos

- Node.js 18+
- npm 9+

### Pasos

1. Clonar el repositorio:

```bash
git clone https://github.com/ronovelabs/astro-theme-ronove-store.git
cd astro-theme-ronove-store
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar servidor de desarrollo:

```bash
npm run dev
```

4. Abrir en el navegador: `http://localhost:4321`

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con hot reload |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Previsualiza la build de producción |

## 🎨 Características

- ✅ **Astro 5.x** - Framework estático ultrarrápido
- ✅ **TypeScript** - Tipado estricto para código más seguro
- ✅ **Tailwind CSS** - Estilos utilitarios modernos
- ✅ **SEO optimizado** - Con astro-seo para meta tags
- ✅ **Diseño responsive** - Mobile-first approach
- ✅ **Componentes reutilizables** - Header, Footer, Hero, ProductCard
- ✅ **Tipado completo** - Interfaces para Productos y Carrito

## 📁 Convenciones

- **Repos:** `plataforma-lo-que-es-propietario`
- **Ramas:** `feature/HU-XXX-descripcion-corta`
- **Commits:** `tipo(scope): descripción`

## 🔗 Referencias

- [Notion - Tablero Scrum](https://www.notion.so/astro-theme-ronove-store)
- [GitHub - Issues](https://github.com/ronovelabs/astro-theme-ronove-store/issues)

## 👥 Equipo

**Ronove Labs** - Medellín, Colombia

---

Desarrollado con ❤️ usando Astro
