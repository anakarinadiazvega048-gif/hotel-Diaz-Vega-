# Hotel Díaz Vega

Sitio web responsive para Hotel Díaz Vega, con una identidad inspirada en cuentos de princesas: rosa suave, lavanda, dorado y detalles de castillo.

## Funcionalidades

- Presentación del hotel y sus **100 habitaciones en total**.
- Categorías de habitación NK1, NQQ y Suite.
- Sección de amenidades, pendiente de completar con el inventario oficial.
- Formulario que prepara una solicitud de reserva y la envía por WhatsApp.
- Concierge web con respuestas locales de respaldo y endpoint opcional de IA.

## Configuración

### 1. WhatsApp

En `index.html`, configura el número oficial:

```js
const HOTEL_CONFIG = { whatsappNumber: "573001234567", conciergeEndpoint: "/api/concierge" };
```

El número anterior es solo un ejemplo de formato. Sustitúyelo por el número real, con indicativo internacional, solo dígitos y sin `+`, espacios ni guiones. Mientras esté vacío, el formulario no enviará mensajes.

### 2. Activar el concierge con IA

El proyecto incluye `api/concierge.js`, una función de servidor para Vercel que consulta la API de OpenAI. Para activarla:

1. Importa este repositorio en Vercel.
2. En **Project Settings → Environment Variables**, agrega `OPENAI_API_KEY` con una clave válida.
3. Opcionalmente configura `OPENAI_MODEL` con un modelo habilitado para tu cuenta.
4. Despliega el proyecto.

La clave permanece en el servidor y nunca debe ponerse en `index.html` ni en otro archivo público. Sin esa variable, el chat usa respuestas locales de respaldo y no se presenta como IA activa.

### 3. Información que debe confirmar el hotel

- Distribución de las 100 habitaciones entre NK1, NQQ y Suite.
- Tarifas, capacidad, características y fotografías autorizadas de cada categoría.
- Amenidades reales, horarios y condiciones.
- Dirección, contacto oficial y políticas de reserva/cancelación.

El sitio no inventa disponibilidad ni confirma reservas: cada solicitud por WhatsApp queda pendiente de validación por el hotel.

## Despliegue

Para que funcione el endpoint de IA, despliega en Vercel (incluye configuración en `vercel.json`). GitHub Pages solo sirve el sitio estático y no ejecuta `api/concierge.js`; en GitHub Pages funcionará el formulario cuando se configure WhatsApp y el chat mostrará sus respuestas locales de respaldo.
