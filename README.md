# Servicio de Transcripción

Este es un servicio de transcripción de audio desarrollado con NestJS que utiliza AssemblyAI para realizar transcripciones de alta calidad.

## 🚀 Características

- Transcripción de audio a texto utilizando AssemblyAI
- Arquitectura basada en microservicios
- Comunicación mediante RabbitMQ
- API RESTful
- Documentación completa
- Tests automatizados

## 📋 Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- RabbitMQ
- Cuenta de AssemblyAI con API key

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd transcription-service
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
ASSEMBLYAI_API_KEY=tu_api_key
RABBITMQ_URL=amqp://localhost:5672
```

## 🚀 Uso

### Desarrollo
```bash
npm run start:dev
```

### Producción
```bash
npm run build
npm run start:prod
```

## 📝 Scripts Disponibles

- `npm run build`: Compila el proyecto
- `npm run format`: Formatea el código usando Prettier
- `npm run start`: Inicia el servidor
- `npm run start:dev`: Inicia el servidor en modo desarrollo con hot-reload
- `npm run start:debug`: Inicia el servidor en modo debug
- `npm run start:prod`: Inicia el servidor en modo producción
- `npm run lint`: Ejecuta el linter
- `npm run test`: Ejecuta los tests unitarios
- `npm run test:watch`: Ejecuta los tests en modo watch
- `npm run test:cov`: Genera reporte de cobertura de tests
- `npm run test:e2e`: Ejecuta los tests end-to-end

## 🏗️ Estructura del Proyecto

```
transcription-service/
├── src/                    # Código fuente
├── test/                   # Tests
├── dist/                   # Código compilado
├── node_modules/          # Dependencias
├── package.json           # Configuración del proyecto
├── tsconfig.json          # Configuración de TypeScript
└── README.md              # Este archivo
```

## 🛠️ Tecnologías Principales

- NestJS - Framework para Node.js
- TypeScript - Superset de JavaScript
- AssemblyAI - API de transcripción
- RabbitMQ - Message broker
- Jest - Framework de testing
- ESLint & Prettier - Linting y formateo de código

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia UNLICENSED.

## 📧 Contacto

[Tu información de contacto] 