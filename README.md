# SGISE - Sistema de Gestión de Ingreso y Salida de Estudiantes

Sistema institucional automatizado para el control de ingreso y salida de estudiantes mediante lectura de código de barras.

![License](https://img.shields.io/badge/License-AGPL%203.0-blue.svg)
![Status](https://img.shields.io/badge/Status-En%20Desarrollo-yellow.svg)
![Node](https://img.shields.io/badge/Node-18+-green.svg)
![React](https://img.shields.io/badge/React-18+-blue.svg)

## 📋 Descripción General

SGISE es una solución integral diseñada para instituciones educativas que necesitan automatizar y monitorear el acceso de estudiantes. El sistema integra:

- ✅ Lectura automática de código de barras (USB HID)
- ✅ Dashboard en tiempo real
- ✅ Reportes administrativos avanzados
- ✅ Gestión completa de estudiantes
- ✅ Control de roles y permisos
- ✅ API REST documentada
- ✅ Arquitectura escalable y modular

## 🚀 Stack Tecnológico

### Backend
- **Node.js + Express** - Framework web
- **Prisma ORM** - Gestión de base de datos
- **PostgreSQL** - Base de datos
- **JWT** - Autenticación
- **Socket.IO** - Comunicación en tiempo real
- **Swagger** - Documentación API

### Frontend
- **React 18 + Vite** - SPA moderna
- **TailwindCSS** - Estilos CSS
- **Axios** - Cliente HTTP
- **Chart.js** - Gráficos y estadísticas
- **Socket.IO Client** - WebSockets

### Infraestructura
- **Docker & Docker Compose** - Contenedorización
- **GitHub Actions** - CI/CD

## 📁 Estructura del Proyecto

```
lfcg_sgise/
├── backend/                    # API REST
├── frontend/                   # SPA React
├── database/                   # Migraciones y seeds
├── docs/                       # Documentación
├── docker-compose.yml
└── README.md
```

## 🎯 Fases de Implementación

### FASE 1: Core System
- [ ] Estructura base del proyecto
- [ ] Autenticación JWT
- [ ] CRUD de estudiantes
- [ ] Registro de acceso

### FASE 2: Dashboard y Reportes
- [ ] Dashboard administrativo
- [ ] Sistema de reportes
- [ ] Gestión de roles

### FASE 3: Tiempo Real y Optimización
- [ ] WebSockets en tiempo real
- [ ] Estadísticas avanzadas
- [ ] Optimización de rendimiento

## 📦 Instalación Rápida

### Con Docker
```bash
git clone https://github.com/terry-alvarez/lfcg_sgise.git
cd lfcg_sgise
docker-compose up -d
```

### Desarrollo Local
```bash
# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

## 👥 Roles del Sistema

| Rol | Permisos |
|-----|----------|
| **Administrador** | Acceso total, CRUD usuarios, reportes |
| **Personal de Vigilancia** | Registro entrada/salida |
| **Coordinador Académico** | Visualización de reportes |

## 📚 Documentación

- [Guía de Instalación](./docs/SETUP.md)
- [API REST](./docs/API.md)
- [Arquitectura](./docs/ARCHITECTURE.md)

## 📝 Licencia

AGPL-3.0 License

---

**Estado**: FASE 1 - En Desarrollo
