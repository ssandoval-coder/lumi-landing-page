export const translations = {
    common: {
        polices: 'Políticas',
        android: 'Android',
        ios: 'iOS',
    },
    privacyPolicy: {
        title: 'Política de Privacidad',
        description: 'En esta sección detallaremos cómo cuidamos tus datos personales.',
        androidDescription: 'Vista dedicada para describir la política de privacidad de la aplicación en Android.',
        iosDescription: 'Vista dedicada para describir la política de privacidad de la aplicación en iOS.',
    },
    termsOfUse: {
        title: 'Términos de Uso',
        description: 'Al utilizar Lumi, aceptas los siguientes términos y condiciones. Por favor, léelos detenidamente.',
        aboutUs: {
            title: 'Quiénes Somos',
            content: 'Lumi es una aplicación desarrollada por Bempresente. Somos una plataforma de asistencia basada en inteligencia artificial diseñada para proporcionar información, acompañamiento y orientación general sobre la crianza de niños, utilizando modelos de lenguaje avanzados y una base de conocimientos especializada.'
        },
        registration: {
            title: 'Registro y Acceso',
            content: 'Edad mínima. Debes tener al menos 16 años o la edad mínima requerida en tu país para consentir el uso de los Servicios.\n\nPara utilizar Lumi, debes crear una cuenta proporcionando información precisa y actualizada. Eres responsable de mantener la confidencialidad de tus credenciales de acceso y de todas las actividades que ocurran bajo tu cuenta.'
        },
        serviceUsage: {
            title: 'Uso de Nuestros Servicios',
            content: 'Te comprometes a utilizar Lumi únicamente para fines legítimos y de acuerdo con estos términos. No debes usar la aplicación para actividades fraudulentas, manipular registros de asistencia, o interferir con el funcionamiento normal del servicio.'
        },
        content: {
            title: 'Contenido',
            content: 'Cualquier contenido que compartas a través de Lumi (fotos de perfil, comentarios, etc.) debe ser apropiado y no infringir derechos de terceros. Nos reservamos el derecho de eliminar contenido inapropiado sin previo aviso.'
        },
        checkInOut: {
            title: 'Entradas y Salidas',
            content: 'Los registros de entrada y salida realizados en Lumi son vinculantes y se consideran válidos para efectos de control de asistencia. Falsificar o manipular registros puede resultar en la suspensión o cancelación de tu cuenta.'
        },
        feedback: {
            title: 'Retroalimentación',
            content: 'Valoramos tus comentarios y sugerencias para mejorar Lumi. Al enviarnos retroalimentación, nos otorgas el derecho de usar, modificar e implementar tus ideas sin compensación adicional.'
        }
    },
    centerOfHelp: {
        title: 'Centro de Ayuda',
        description: 'Encuentra respuestas a tus preguntas más frecuentes.',
    },
    languageSelector: {
        label: 'Idioma',
        spanish: 'Español',
        english: 'English',
        portuguese: 'Português',
    },
    home: {
        navbar: {
            downloadApp: 'Descargar App',
        },
        hero: {
            titleLine1: 'Crianza con',
            titleLine2: 'claridad',
            subtitle: 'Tu companero inteligente que entiende el ritmo de tu bebe. Obtén respuestas expertas y rutinas personalizadas al instante.',
        },
        features: {
            title: 'Magia para ti y tu bebé',
            subtitle: 'Lumi crece con tu peque, aprende sus rutinas y te ofrece consejos expertos al instante.',
            card1Title: 'Rutinas Dinámicas',
            card1Description: 'Planifica el día de tu bebé adaptado a sus fases de desarrollo.',
            card2Title: 'Asistente IA 24/7',
            card2Description: 'Resuelve dudas sobre sueño, alimentación y hitos en segundos.',
            card3Title: 'Favoritos',
            card3Description: 'Guarda los mensajes de lumi para nunca perderte lo que quieres',
            card4Title: 'Seguimiento Hitos',
            card4Description: 'No te pierdas ni un detalle de su crecimiento y logros.',
        },
        plans: {
            title: 'Planes diseñados para ti',
            subtitle: 'Empieza gratis y desbloquea el máximo potencial cuando lo necesites.',
            basicName: 'Lumi Basic',
            basicDescription: 'Para empezar con buen pie',
            basicPrice: 'Gratis',
            basicFeature1: 'Seguimiento básico diario',
            basicFeature2: 'Consejos semanales',
            basicFeature3: 'Perfil de un bebé',
            maxName: 'Lumi Max',
            maxDescription: 'Crianza sin límites',
            maxPriceUnit: '/mes',
            maxFeature1: 'Chat IA Ilimitado 24/7',
            maxFeature2: 'Mejores modelos',
            maxFeature3: 'Exportar perfil',
            maxFeature4: 'Multiperfil para hermanos',
        },
        footer: {
            slogan: 'Crianza con claridad',
            company: 'Compañía',
            aboutUs: 'Sobre nosotros',
            contact: 'Contacto',
            privacy: 'Privacidad',
            terms: 'Términos',
            copyright: 'Bempresente. Todos los derechos reservados.',
        },
    }
};

export type Translations = typeof translations;
