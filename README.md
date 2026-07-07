# Lumi Landing Page

Pequeño sitio estático construido con Astro para mostrar el “coming soon” de Lumi y las vistas legales/de soporte.

## Rutas incluidas

- `/` – Mensaje principal “Próximamente”.
- `/polices/terms-of-use` – Placeholder para términos de uso (Android/iOS).
- `/polices/privacy-policy` – Placeholder para política de privacidad (Android/iOS).
- `/center-of-help` – Placeholder para centro de ayuda (Android/iOS).
- `/oauth/consent` – Login y consentimiento OAuth 2.1 para conectar Lumi con ChatGPT.

## OAuth de Lumi

La pantalla de consentimiento necesita estas variables públicas del proyecto
Supabase configurado como OAuth 2.1 Server:

```env
PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
PUBLIC_SUPABASE_ANON_KEY=anon-key
```

Configura en Supabase el Authorization Path como `/oauth/consent`. La página
preserva el `authorization_id`, permite iniciar sesión y aprobar o denegar el
acceso solicitado por ChatGPT.

## Scripts disponibles

| Comando         | Descripción                                  |
| --------------- | --------------------------------------------- |
| `npm install`   | Instala dependencias                          |
| `npm run dev`   | Levanta el entorno local en `localhost:4321`  |
| `npm run build` | Genera la versión estática en `dist/`         |
| `npm run preview` | Previsualiza el build generado               |

El proyecto usa Tailwind integrado mediante `@astrojs/tailwind` para facilitar la maquetación de cada vista.
