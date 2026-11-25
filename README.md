# Hotel Díaz Vega

Sitio web inicial para Hotel Díaz Vega, con una identidad visual inspirada en cuentos de princesas: rosa suave, lavanda, dorado y detalles de castillo.

## Funcionalidades incluidas

- Página responsive para móvil, tablet y escritorio.
- Presentación de las categorías de habitación NK1, NQQ y Suite.
- Sección de amenidades preparada para incorporar la información oficial del hotel.
- Formulario de solicitud de reserva que prepara un mensaje para WhatsApp.
- Concierge virtual en la página con respuestas iniciales sobre habitaciones, reservas y amenidades.

## Configuración pendiente

### Activar WhatsApp

En el archivo `index.html`, busca:

```js
const HOTEL_CONFIG = { whatsappNumber: "" };
```

Agrega el número oficial del hotel con indicativo internacional, solo números y sin `+`, espacios ni guiones. Ejemplo de formato: `573001234567` (número ilustrativo, no usar como contacto real).

### Información que debe confirmar el hotel

- Tarifas, capacidad y descripción de NK1, NQQ y Suite.
- Distribución de las 100 habitaciones entre las categorías.
- Amenidades y servicios reales, horarios y condiciones.
- Dirección, teléfono y datos de contacto oficiales.

## Sobre el concierge 24/7

El concierge actual es una primera versión funcional basada en respuestas predefinidas en el navegador. Está disponible en todo momento mientras la página esté abierta, pero **todavía no es un chatbot con IA ni está conectado a un equipo de recepción**.

Para convertirlo en un concierge con IA real se necesita integrar un proveedor de IA mediante un backend seguro, guardar la clave API como variable de entorno y definir qué información del hotel puede consultar. No se deben colocar claves secretas en el JavaScript público del navegador.

## Publicar con GitHub Pages

1. En GitHub abre **Settings → Pages**.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda y espera a que GitHub Pages publique el sitio.

La publicación requiere habilitar GitHub Pages en la configuración del repositorio.
