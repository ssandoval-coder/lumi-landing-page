import type { Translations } from './es';

export const translations: Translations = {
    common: {
        polices: 'Policies',
        android: 'Android',
        ios: 'iOS',
    },
    privacyPolicy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: April 2025',
        description: 'At Bempresente, the privacy and security of your data are a fundamental priority. This policy explains how we collect, use, and protect your information when using Lumi.',
        introduction: {
            title: 'Introduction',
            content: 'This Privacy Policy describes how Bempresente collects, uses, stores, and protects the personal information you provide when using Lumi, our AI-powered parenting assistance application.\n\nBy creating an account and using Lumi, you agree to the practices described in this policy. If you disagree with any of its terms, please do not use the service.',
        },
        dataController: {
            title: 'Data Controller',
            content: 'The data controller responsible for processing your personal data is Bempresente, developer of the Lumi application.\n\nFor any questions related to privacy or data protection, you can contact us at: admin@bempresente.com',
        },
        dataCollected: {
            title: 'Information We Collect',
            content: 'We collect the following types of information:\n\n• Account data: name, email address, date of birth, country, and encrypted password.\n\n• Baby profile: name, date of birth, gender, prematurity status, and gestational weeks at birth.\n\n• Health and habit information: sleep data, feeding, breastfeeding, motor development, emotional state, medical conditions, allergies, medications, and family context, voluntarily provided when completing the profile.\n\n• AI conversations: all messages exchanged with the Lumi assistant, including usefulness ratings.\n\n• Usage data: frequency of use, features used, and technical error logs.\n\n• Payment information: securely processed through Stripe. Bempresente does not store credit card data.',
        },
        howWeUse: {
            title: 'How We Use Your Information',
            content: 'We use your information for the following purposes:\n\n• Providing and personalizing the service: contextualizing AI assistant responses with your baby\'s profile.\n\n• Improving the experience: analyzing usage patterns to enhance features and response accuracy.\n\n• Communications: sending relevant service notifications and updates. With your consent, we may send you valuable parenting content.\n\n• Payment processing and subscription management.\n\n• Error detection and application stability improvement.\n\n• Compliance with legal and regulatory obligations.',
        },
        sensitiveData: {
            title: 'Sensitive Data',
            content: 'Lumi collects information about the health and development of minors. We treat this data with the highest level of protection and confidentiality.\n\nThis information is used exclusively to personalize the AI assistant\'s responses. It is never sold or shared with third parties for commercial purposes.\n\nYou are responsible for ensuring that the baby profile information you enter is accurate and that you are authorized to provide such data.',
        },
        aiUsage: {
            title: 'Use of Artificial Intelligence',
            content: 'Conversations with the Lumi assistant are processed by advanced language models (currently OpenAI\'s API). Your information and your baby\'s profile are sent to OpenAI solely to generate contextualized responses.\n\nOpenAI processes this data under its own privacy terms and does not use API data to train its models by default.\n\nAdditionally, Lumi automatically extracts relevant information from conversations — such as detected allergies or identified routines — to enrich the baby\'s profile and improve the quality of future responses.',
        },
        thirdParties: {
            title: 'Third Parties and Service Providers',
            content: 'We work with the following trusted providers to operate the service:\n\n• OpenAI: language model processing to generate AI assistant responses.\n\n• Supabase: secure data storage in a PostgreSQL database with encryption at rest.\n\n• Stripe: payment processing and subscription management.\n\n• Sentry: error monitoring and application stability.\n\nThese providers only access the information strictly necessary to provide their services and are subject to confidentiality and data protection agreements.',
        },
        retention: {
            title: 'Data Retention',
            content: 'We retain your personal information while your account is active and as necessary to provide the service.\n\nAfter account deletion, your personal data will be anonymized or deleted within a maximum of 90 days, unless the law requires longer retention.\n\nConversation records may be retained in anonymized form for the purpose of improving the service.',
        },
        security: {
            title: 'Security',
            content: 'We implement appropriate technical and organizational measures to protect your information, including:\n\n• Data encryption in transit using TLS.\n\n• Data encryption at rest in the database.\n\n• Strict role-based access controls.\n\n• Continuous security and error monitoring.\n\nNo system is 100% infallible. In the event of a security breach affecting your data, we will notify you as required by applicable regulations.',
        },
        userRights: {
            title: 'Your Rights',
            content: 'Depending on your country of residence, you may exercise the following rights regarding your personal data:\n\n• Access: request a copy of the data we hold about you.\n\n• Rectification: correct inaccurate or incomplete data.\n\n• Deletion: request the erasure of your data ("right to be forgotten").\n\n• Portability: receive your data in a structured, readable format.\n\n• Objection: object to certain processing of your data.\n\n• Restriction: request restriction of processing in certain circumstances.\n\nTo exercise any of these rights, write to us at: admin@bempresente.com',
        },
        childrenPrivacy: {
            title: 'Children\'s Privacy',
            content: 'Lumi is designed to be used by adult caregivers of babies and children. We do not collect data directly from minors.\n\nBaby profile data is provided by the responsible adult caregiver. If you are under 16 years old, you must not use Lumi without the supervision of a responsible adult.\n\nIf you become aware that a minor has provided personal information without parental consent, contact us at admin@bempresente.com to arrange its deletion.',
        },
        internationalTransfers: {
            title: 'International Transfers',
            content: 'Your data may be processed on servers located outside your country of residence, including the United States (OpenAI, Supabase, Stripe).\n\nThese transfers are carried out under the appropriate safeguards required by applicable regulations, including standard contractual clauses or recognized transfer frameworks where applicable.',
        },
        changes: {
            title: 'Changes to This Policy',
            content: 'We may periodically update this Privacy Policy to reflect changes in the service or applicable regulations.\n\nWe will notify you of significant changes through the application or by email at least 15 days in advance.\n\nContinued use of Lumi after the publication of changes implies acceptance of the updated policy.',
        },
        contact: {
            title: 'Contact',
            content: 'For any questions about privacy, data protection, or the exercise of your rights, you can contact us at:\n\nadmin@bempresente.com\n\nYou can also access the Help Center within the application for additional assistance.',
        },
    },
    termsOfUse: {
        title: 'Terms of Use',
        lastUpdated: 'Last updated: April 2025',
        description: 'By using Lumi, you agree to the following terms and conditions. Please read them carefully before using the service.',
        aboutUs: {
            title: 'About Us',
            content: 'Lumi is an application developed by Bempresente. We are an AI-powered assistance platform designed to provide information, support, and general guidance on baby and child care (ages 0–7).\n\nWe use advanced language models, semantic search, and a specialized knowledge base to deliver personalized responses adapted to your baby\'s profile and developmental stage.',
        },
        registration: {
            title: 'Registration and Access',
            content: 'Minimum Age. You must be at least 16 years old, or the minimum age required in your country to consent to digital services.\n\nUser Account. To use Lumi, you must register by providing accurate, up-to-date, and truthful information. You are responsible for maintaining the confidentiality of your credentials and for all activities carried out under your account. Notify us immediately of any unauthorized use.\n\nBaby Profile. By creating a profile for your baby, you confirm that the information provided is accurate and that you will use it solely to receive personalized guidance within the app.',
        },
        serviceDescription: {
            title: 'Service Description',
            content: 'Lumi offers the following main features:\n\n• AI assistant available 24 hours a day, 7 days a week, to answer questions about sleep, feeding, breastfeeding, routines, health, development, and baby care.\n\n• Creation and tracking of personalized daily routines adapted to your baby\'s age and developmental stage.\n\n• Detailed baby profiles with health information, preferences, and habits to contextualize AI responses.\n\n• Saving favorite responses for later access.\n\nThe service is available in Spanish, English, and Portuguese.',
        },
        subscriptions: {
            title: 'Plans and Subscriptions',
            content: 'Lumi offers two access plans:\n\n• Lumi Basic (Free): limited access to the AI chat with a maximum number of daily messages, one baby profile, and basic features.\n\n• Lumi Max (Paid Subscription): unlimited AI chat 24/7, access to the best AI models, support for multiple baby profiles, profile export, and advanced features.\n\nThe Lumi Max subscription renews automatically based on the selected period. You can cancel at any time from your app store (App Store or Google Play). Refunds are not provided for subscription periods already started, unless required by applicable law.',
        },
        aiDisclaimer: {
            title: 'AI Disclaimer',
            content: 'Lumi uses artificial intelligence to generate personalized parenting responses. It is essential that you understand the following limitations:\n\n• Lumi is NOT a medical service and is not a substitute for professional healthcare. All information provided is educational and informational in nature, not diagnostic or therapeutic.\n\n• For any health concern or medical emergency, immediately consult your pediatrician or go to an emergency service.\n\n• AI responses are generated based on your baby\'s profile and knowledge patterns, but may contain errors or may not apply to specific situations.\n\n• Do not share sensitive medical information expecting a clinical diagnosis; Lumi is not authorized for that purpose.',
        },
        userObligations: {
            title: 'User Obligations',
            content: 'By using Lumi, you agree to:\n\n• Use the service only for legitimate purposes related to parenting and child care.\n\n• Not attempt to compromise application security or access other users\' data.\n\n• Not enter false information or attempt to manipulate the AI system.\n\n• Not use Lumi to obtain information for purposes other than those established in these terms.\n\n• Respect Bempresente\'s intellectual property rights.',
        },
        intellectualProperty: {
            title: 'Intellectual Property',
            content: 'Lumi, its design, logos, texts, knowledge base, and software are the property of Bempresente and are protected by applicable intellectual property laws.\n\nYou are granted a limited, non-exclusive, non-transferable license to use the application in accordance with these terms. You may not reproduce, modify, distribute, or create derivative works from any component of Lumi without express written authorization.',
        },
        feedback: {
            title: 'Feedback',
            content: 'We value your comments and suggestions to improve Lumi. By sending us feedback through the app or by email, you grant us a non-exclusive, royalty-free, worldwide license to use, modify, and implement your ideas for the purpose of improving the service, without creating any obligation for additional compensation.',
        },
        termination: {
            title: 'Suspension and Cancellation',
            content: 'Bempresente reserves the right to suspend or cancel your access to Lumi in the event of:\n\n• Breach of these Terms of Use.\n\n• Fraudulent, abusive, or off-purpose use of the service.\n\n• Activities that jeopardize the security of other users or the system.\n\nTo request account cancellation and data deletion, write to us at admin@bempresente.com. Once processed, your data will be handled in accordance with our Privacy Policy.',
        },
        liability: {
            title: 'Limitation of Liability',
            content: 'To the maximum extent permitted by applicable law, Bempresente will not be liable for indirect, incidental, special, or consequential damages arising from the use or inability to use Lumi.\n\nLumi is provided "as is" without guarantees of uninterrupted availability. Bempresente\'s total liability for any claim will not exceed the amount paid by the user in the last 12 months.',
        },
        modifications: {
            title: 'Modifications to Terms',
            content: 'We reserve the right to modify these Terms of Use at any time to reflect changes in the service or applicable regulations.\n\nWe will notify you of substantial changes through the application or by email at least 15 days in advance. Continued use of Lumi after the publication of changes constitutes acceptance of the new terms.',
        },
        contact: {
            title: 'Contact',
            content: 'For any questions related to these Terms of Use, you can contact us at:\n\nadmin@bempresente.com\n\nYou can also access the Help Center within the application for additional assistance.',
        },
    },
    centerOfHelp: {
        title: 'Help Center',
        support: 'Support',
        description: 'Find answers to the most frequently asked questions about Lumi.',
        contactPrompt: 'Didn\'t find what you were looking for? Write to us at admin@bempresente.com',
        categories: [
            {
                title: 'Getting Started',
                faqs: [
                    {
                        q: 'How do I create my Lumi account?',
                        a: 'Download the app from the App Store or Google Play, open it, and sign up with your email address and a password. You must be at least 16 years old to create an account.',
                    },
                    {
                        q: 'How do I set up my baby\'s profile?',
                        a: 'When you first log in, Lumi will guide you through creating the profile. You can also complete or update it at any time from the "My Baby" section. The more information you add, the more personalized the assistant\'s responses will be.',
                    },
                    {
                        q: 'What ages is Lumi designed for?',
                        a: 'Lumi is optimized for babies and children aged 0 to 7 years, adapting its responses to the corresponding developmental stage.',
                    },
                    {
                        q: 'What languages is Lumi available in?',
                        a: 'Lumi is available in Spanish, English, and Portuguese. The assistant automatically detects the language you write in and responds in the same language.',
                    },
                ],
            },
            {
                title: 'AI Assistant',
                faqs: [
                    {
                        q: 'How does Lumi\'s AI assistant work?',
                        a: 'The assistant uses advanced language models and a specialized parenting knowledge base. It analyzes your baby\'s profile to provide contextualized responses based on their age, habits, and developmental stage.',
                    },
                    {
                        q: 'Can I use Lumi for medical consultations?',
                        a: 'No. Lumi provides educational and informational guidance on parenting, but does not replace consultation with a healthcare professional. For any medical concern, always consult your pediatrician or go to an emergency service.',
                    },
                    {
                        q: 'What topics can Lumi answer?',
                        a: 'Lumi can guide you on sleep, feeding, breastfeeding, daily routines, motor development, body care, emotions, play, and general baby health.',
                    },
                    {
                        q: 'Why does the assistant sometimes give different answers to the same question?',
                        a: 'The AI generates dynamic responses that may vary slightly. If a response is especially useful, save it in Favorites to have it handy at any time.',
                    },
                ],
            },
            {
                title: 'Plans and Subscriptions',
                faqs: [
                    {
                        q: 'What\'s the difference between Lumi Basic and Lumi Max?',
                        a: 'Lumi Basic is free with a daily message limit and one baby profile. Lumi Max is the paid subscription with unlimited 24/7 chat, the best AI models, multiple baby profiles, and profile export.',
                    },
                    {
                        q: 'How do I subscribe to Lumi Max?',
                        a: 'From the app, go to the Plans section and select Lumi Max. Payment is processed securely through your app store (App Store or Google Play).',
                    },
                    {
                        q: 'How do I cancel my subscription?',
                        a: 'From the App Store (Settings > Your Name > Subscriptions) or Google Play (Apps > Subscriptions). Cancellation applies to the next billing period; you keep access until the current period ends.',
                    },
                    {
                        q: 'Will I be charged automatically each period?',
                        a: 'Yes, the subscription renews automatically based on the period you chose (monthly or annual). Cancel before the renewal date to avoid the charge.',
                    },
                ],
            },
            {
                title: 'Baby Profile',
                faqs: [
                    {
                        q: 'What information should I add to my baby\'s profile?',
                        a: 'The essentials are the name and date of birth. You can also add sleep habits, feeding, health conditions, allergies, and family context. A more complete profile generates more accurate responses.',
                    },
                    {
                        q: 'Can I manage profiles for multiple children?',
                        a: 'Yes, with Lumi Max you can create multiple profiles to manage the parenting of several children from a single account.',
                    },
                    {
                        q: 'Can I update my baby\'s profile later?',
                        a: 'Yes, you can update any data at any time from the "My Baby" section within the app.',
                    },
                    {
                        q: 'Does Lumi adapt its responses as my baby grows?',
                        a: 'Yes. Lumi automatically calculates the current age from the date of birth and adjusts its responses to the corresponding developmental stage.',
                    },
                ],
            },
            {
                title: 'Privacy and Security',
                faqs: [
                    {
                        q: 'Is my baby\'s information secure?',
                        a: 'Yes. All data is stored encrypted in transit and at rest. We never sell or share your information with third parties for commercial purposes. Check our Privacy Policy for more details.',
                    },
                    {
                        q: 'How does Lumi use my baby\'s health data?',
                        a: 'Health data is used exclusively to personalize the assistant\'s responses. It is not shared with advertisers or third parties outside the providers needed to operate the service.',
                    },
                    {
                        q: 'How do I request deletion of my data?',
                        a: 'You can request deletion of your data by writing to us at admin@bempresente.com. We will process your request and delete or anonymize your data within a maximum of 90 days.',
                    },
                ],
            },
            {
                title: 'Technical Issues',
                faqs: [
                    {
                        q: 'The app won\'t load or is running slowly, what should I do?',
                        a: 'Make sure you have a stable internet connection. Ensure you have the latest version of the app installed. If the problem persists, close the app and reopen it, or reinstall it.',
                    },
                    {
                        q: 'I forgot my password, how do I recover it?',
                        a: 'On the login screen, tap "Forgot your password?" and enter your email address. You\'ll receive a link to reset your password.',
                    },
                    {
                        q: 'How do I contact the support team?',
                        a: 'Write to us at admin@bempresente.com and we\'ll get back to you as soon as possible.',
                    },
                ],
            },
        ],
    },
    languageSelector: {
        label: 'Language',
        spanish: 'Español',
        english: 'English',
        portuguese: 'Português',
    },
    home: {
        navbar: {
            downloadApp: 'Download App',
        },
        hero: {
            titleLine1: 'Parenting with',
            titleLine2: 'clarity',
            subtitle: 'Your smart companion that understands your baby\'s rhythm. Get expert answers and personalized routines instantly.',
        },
        features: {
            title: 'Magic for you and your baby',
            subtitle: 'Lumi grows with your little one, learns their routines and offers you expert advice instantly.',
            card1Title: 'Dynamic Routines',
            card1Description: 'Plan your baby\'s day adapted to their development stages.',
            card2Title: 'AI Assistant 24/7',
            card2Description: 'Resolve questions about sleep, feeding and milestones in seconds.',
            card3Title: 'Favorites',
            card3Description: 'Save Lumi\'s messages so you never miss what matters to you',
            card4Title: 'Milestone Tracking',
            card4Description: 'Don\'t miss a single detail of their growth and achievements.',
        },
        plans: {
            title: 'Plans designed for you',
            subtitle: 'Start for free and unlock the full potential when you need it.',
            basicName: 'Lumi Basic',
            basicDescription: 'To start on the right foot',
            basicPrice: 'Free',
            basicFeature1: 'Basic daily tracking',
            basicFeature2: 'Weekly tips',
            basicFeature3: 'One baby profile',
            maxName: 'Lumi Max',
            maxDescription: 'Parenting without limits',
            maxPriceUnit: '/mo',
            maxFeature1: 'Unlimited AI Chat 24/7',
            maxFeature2: 'Best models',
            maxFeature3: 'Export profile',
            maxFeature4: 'Multi-profile for siblings',
        },
        footer: {
            slogan: 'Parenting with clarity',
            company: 'Company',
            aboutUs: 'About us',
            contact: 'Contact',
            help: 'Help Center',
            privacy: 'Privacy',
            terms: 'Terms',
            copyright: 'Bempresente. All rights reserved.',
        },
    }
};
