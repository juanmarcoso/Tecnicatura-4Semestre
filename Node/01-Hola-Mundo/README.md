# Gestión de Procesos en Node.js: nodemon vs pm2

## 📋 Introducción
Node.js ofrece diversas herramientas para gestionar la ejecución de aplicaciones. Dos de las más populares son nodemon y pm2, cada una con propósitos y características distintivas.

# 🔄 Nodemon
¿Qué es?
Nodemon es una utilidad de desarrollo que monitorea cambios en los archivos de tu aplicación y reinicia automáticamente el servidor.

### Características Principales

- 🎯 Propósito: Desarrollo local
- 🔄 Reinicio automático al detectar cambios en el código
- ⚡ Configuración simple y minimalista
- 🚀 Ideal para desarrollo con hot-reload

### Instalación y Uso

```bash
# Instalación global
npm install -g nodemon

# Uso básico
nodemon app.js

# Con configuración personalizada
nodemon --ignore 'uploads/' --delay 2500 app.js
Configuración (nodemon.json)
json
{
  "watch": ["src", "config"],
  "ignore": ["tests/*", "node_modules"],
  "ext": "js,json",
  "delay": 1000
}
```

# 🚀 PM2
### ¿Qué es?
PM2 es un administrador de procesos de producción para aplicaciones Node.js con balanceo de carga integrado.

### Características Principales

- 🎯 Propósito: Producción y staging
- 🔄 Balanceo de carga con cluster mode
- 📊 Monitoreo en tiempo real
- 🔧 Auto-reinicio y recuperación de fallos
- 📝 Logs centralizados
- ⚡ Zero-downtime deployment

## Instalación y Uso

```bash
# Instalación global
npm install -g pm2

# Iniciar aplicación
pm2 start app.js

# Iniciar en modo cluster (balanceo de carga)
pm2 start app.js -i max

# Monitoreo
pm2 monit

# Listar procesos
pm2 list

# Logs
pm2 logs
```
### Configuración (ecosystem.config.js)

```bash
module.exports = {
  apps: [{
    name: 'mi-app',
    script: './app.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
};
```

## 📊 Comparativa Detallada

| Característica | Nodemon | PM2 (Process Manager 2) |
| :--- | :--- | :--- |
| **Propósito Principal** | **Desarrollo** (Productividad) | **Producción** (Robustez y Escalabilidad) |
| **Reinicio Automático** | ✅ Por detección de cambios en archivos | ✅ Por fallos o consumo excesivo de memoria |
| **Modo Cluster** | ❌ No soporta nativamente | ✅ Soporte nativo para utilizar múltiples núcleos de CPU |
| **Balanceo de Carga** | ❌ No incluye | ✅ Incluye balanceador de carga integrado |
| **Monitoreo** | Básico (Consola) | Avanzado (Dashboard en consola, métricas de rendimiento) |
| **Logs** | Consola | Centralizados y rotados |
| **Deploy Cero Downtime** | ❌ No soporta | ✅ Permite recargas y despliegues sin interrupción del servicio |
| **Configuración** | Simple (Suele bastar con el comando `nodemon`) | Compleja (Requiere archivo de configuración `.yml` o `.json`) |
| **Uso en CI/CD** | Limitado (Solo pruebas/builds iniciales) | Excelente (Diseñado para orquestación de servicios en producción) |

## 🛠 Casos de Uso Recomendados

### Usa Nodemon cuando:

- ✅ Estás en desarrollo local
- ✅ Necesitas reinicio automático al hacer cambios
- ✅ Trabajas en un entorno de coding
- ✅ Quieres una configuración simple

### Usa PM2 cuando:

- ✅ Despliegues en producción
- ✅ Necesitas alta disponibilidad
- ✅ Requieres balanceo de carga
- ✅ Quieres monitoreo avanzado
- ✅ Necesitas gestión de logs
- ✅ Implementas CI/CD

## 🔧 Ejemplo de Workflow Complet

### Desarrollo con Nodemon

```bash
# package.json
{
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  }
}

# Ejecutar en desarrollo
npm run dev
```

### Producción con PM2

```bash
# package.json
{
  "scripts": {
    "start": "pm2 start ecosystem.config.js --env production",
    "stop": "pm2 stop all",
    "restart": "pm2 restart all"
  }
}

# Despliegue en producción
npm start
```

## ⚡ Mejores Prácticas

#### Para Nodemon:

- Ignora carpetas innecesarias (node_modules, logs)
- Configura delays apropiados para tu proyecto
- Usa en combinación con herramientas de debug

#### Para PM2:

- Configura número de instancias según tus CPUs
- Establece límites de memoria
- Configura logs rotation
- Usa variables de entorno para diferentes ambientes

## 🚨 Consideraciones Importantes

1. **NO uses nodemon en producción** - No está diseñado para ello
2. **PM2 añade overhead** - En desarrollo puede ser excesivo
3. **Configura adecuadamente** los recursos según tu hardware
4. **Monitorea el performance** especialmente en producción

## 📚 Conclusión
Ambas herramientas son excelentes pero sirven para propósitos diferentes:

- **Nodemon**: Tu mejor aliado en desarrollo
- **PM2**: Imprescindible para producción

La combinación ideal es usar nodemon durante el desarrollo y PM2 para producción, aprovechando lo mejor de cada herramienta según el contexto.