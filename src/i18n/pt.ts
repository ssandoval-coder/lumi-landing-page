import type { Translations } from './es';

export const translations: Translations = {
    common: {
        polices: 'Políticas',
        android: 'Android',
        ios: 'iOS',
    },
    privacyPolicy: {
        title: 'Política de Privacidade',
        lastUpdated: 'Última atualização: Abril 2025',
        description: 'Na Bempresente, a privacidade e a segurança dos seus dados são uma prioridade fundamental. Esta política explica como coletamos, usamos e protegemos suas informações ao usar o Lumi.',
        introduction: {
            title: 'Introdução',
            content: 'Esta Política de Privacidade descreve como a Bempresente coleta, usa, armazena e protege as informações pessoais que você nos fornece ao utilizar o Lumi, nosso aplicativo de assistência para criação de filhos movido por inteligência artificial.\n\nAo criar uma conta e usar o Lumi, você concorda com as práticas descritas nesta política. Se você discordar de algum dos seus termos, pedimos que não utilize o serviço.',
        },
        dataController: {
            title: 'Responsável pelo Tratamento',
            content: 'O responsável pelo tratamento dos seus dados pessoais é a Bempresente, desenvolvedora do aplicativo Lumi.\n\nPara qualquer dúvida relacionada à privacidade ou proteção de dados, você pode nos contatar em: admin@bempresente.com',
        },
        dataCollected: {
            title: 'Informações que Coletamos',
            content: 'Coletamos os seguintes tipos de informações:\n\n• Dados da conta: nome, endereço de e-mail, data de nascimento, país e senha criptografada.\n\n• Perfil do bebê: nome, data de nascimento, sexo, condição de prematuridade e semanas de gestação ao nascer.\n\n• Informações de saúde e hábitos: dados de sono, alimentação, amamentação, desenvolvimento motor, estado emocional, condições médicas, alergias, medicamentos e contexto familiar, fornecidos voluntariamente ao completar o perfil.\n\n• Conversas com a IA: todas as mensagens trocadas com o assistente do Lumi, incluindo avaliações de utilidade.\n\n• Dados de uso: frequência de uso, funcionalidades utilizadas e registros técnicos de erros.\n\n• Informações de pagamento: processadas de forma segura através do Stripe. A Bempresente não armazena dados de cartão de crédito.',
        },
        howWeUse: {
            title: 'Como Usamos Suas Informações',
            content: 'Usamos suas informações para os seguintes fins:\n\n• Fornecer e personalizar o serviço: contextualizar as respostas do assistente de IA com o perfil do seu bebê.\n\n• Melhorar a experiência: analisar padrões de uso para aprimorar funcionalidades e a precisão das respostas.\n\n• Comunicações: enviar notificações relevantes do serviço e atualizações. Com seu consentimento, podemos enviar conteúdo valioso sobre criação de filhos.\n\n• Processamento de pagamentos e gestão de assinaturas.\n\n• Detecção de erros e melhoria da estabilidade do aplicativo.\n\n• Cumprimento de obrigações legais e regulatórias.',
        },
        sensitiveData: {
            title: 'Dados Sensíveis',
            content: 'O Lumi coleta informações sobre a saúde e o desenvolvimento de menores. Tratamos esses dados com o mais alto nível de proteção e confidencialidade.\n\nEssas informações são usadas exclusivamente para personalizar as respostas do assistente de IA. Elas nunca são vendidas nem compartilhadas com terceiros para fins comerciais.\n\nVocê é responsável por garantir que as informações do perfil do bebê que você insere sejam precisas e que você está autorizado a fornecer esses dados.',
        },
        aiUsage: {
            title: 'Uso de Inteligência Artificial',
            content: 'As conversas com o assistente do Lumi são processadas por modelos de linguagem avançados (atualmente a API da OpenAI). Suas informações e as do perfil do seu bebê são enviadas à OpenAI exclusivamente para gerar respostas contextualizadas.\n\nA OpenAI processa esses dados sob seus próprios termos de privacidade e não usa dados da API para treinar seus modelos por padrão.\n\nAlém disso, o Lumi extrai automaticamente informações relevantes das conversas — como alergias detectadas ou rotinas identificadas — para enriquecer o perfil do bebê e melhorar a qualidade das respostas futuras.',
        },
        thirdParties: {
            title: 'Terceiros e Fornecedores de Serviços',
            content: 'Trabalhamos com os seguintes fornecedores de confiança para operar o serviço:\n\n• OpenAI: processamento de modelos de linguagem para gerar respostas do assistente de IA.\n\n• Supabase: armazenamento seguro de dados em banco de dados PostgreSQL com criptografia em repouso.\n\n• Stripe: processamento de pagamentos e gestão de assinaturas.\n\n• Sentry: monitoramento de erros e estabilidade do aplicativo.\n\nEsses fornecedores acessam apenas as informações estritamente necessárias para prestar seus serviços e estão sujeitos a acordos de confidencialidade e proteção de dados.',
        },
        retention: {
            title: 'Retenção de Dados',
            content: 'Mantemos suas informações pessoais enquanto sua conta estiver ativa e conforme necessário para a prestação do serviço.\n\nApós a exclusão da conta, seus dados pessoais serão anonimizados ou excluídos em um prazo máximo de 90 dias, salvo se a lei exigir retenção mais prolongada.\n\nOs registros de conversas podem ser mantidos de forma anonimizada com o objetivo de melhorar o serviço.',
        },
        security: {
            title: 'Segurança',
            content: 'Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações, incluindo:\n\n• Criptografia de dados em trânsito usando TLS.\n\n• Criptografia de dados em repouso no banco de dados.\n\n• Controles de acesso rigorosos baseados em funções.\n\n• Monitoramento contínuo de segurança e erros.\n\nNenhum sistema é 100% infalível. Em caso de violação de segurança que afete seus dados, notificaremos você conforme exigido pela regulamentação aplicável.',
        },
        userRights: {
            title: 'Seus Direitos',
            content: 'Dependendo do seu país de residência, você pode exercer os seguintes direitos em relação aos seus dados pessoais:\n\n• Acesso: solicitar uma cópia dos dados que temos sobre você.\n\n• Retificação: corrigir dados imprecisos ou incompletos.\n\n• Exclusão: solicitar a supressão dos seus dados ("direito ao esquecimento").\n\n• Portabilidade: receber seus dados em formato estruturado e legível.\n\n• Oposição: opor-se a determinados tratamentos dos seus dados.\n\n• Restrição: solicitar a restrição do tratamento em determinadas circunstâncias.\n\nPara exercer qualquer um desses direitos, escreva para: admin@bempresente.com',
        },
        childrenPrivacy: {
            title: 'Privacidade de Menores',
            content: 'O Lumi foi desenvolvido para ser usado por adultos responsáveis pelo cuidado de bebês e crianças. Não coletamos dados diretamente de menores de idade.\n\nOs dados do perfil do bebê são fornecidos pelo adulto responsável pelo seu cuidado. Se você tem menos de 16 anos, não deve usar o Lumi sem a supervisão de um adulto responsável.\n\nSe você souber que um menor forneceu informações pessoais sem consentimento dos pais, entre em contato conosco em admin@bempresente.com para providenciar sua exclusão.',
        },
        internationalTransfers: {
            title: 'Transferências Internacionais',
            content: 'Seus dados podem ser processados em servidores localizados fora do seu país de residência, incluindo os Estados Unidos (OpenAI, Supabase, Stripe).\n\nEssas transferências são realizadas com as salvaguardas adequadas exigidas pela regulamentação aplicável, incluindo cláusulas contratuais padrão ou estruturas de transferência reconhecidas onde aplicável.',
        },
        changes: {
            title: 'Alterações nesta Política',
            content: 'Podemos atualizar periodicamente esta Política de Privacidade para refletir mudanças no serviço ou na regulamentação aplicável.\n\nNotificaremos você sobre mudanças significativas por meio do aplicativo ou por e-mail com pelo menos 15 dias de antecedência.\n\nO uso continuado do Lumi após a publicação das alterações implica a aceitação da política atualizada.',
        },
        contact: {
            title: 'Contato',
            content: 'Para qualquer dúvida sobre privacidade, proteção de dados ou o exercício dos seus direitos, você pode nos contatar em:\n\nadmin@bempresente.com\n\nVocê também pode acessar o Centro de Ajuda dentro do aplicativo para obter assistência adicional.',
        },
    },
    termsOfUse: {
        title: 'Termos de Uso',
        lastUpdated: 'Última atualização: Abril 2025',
        description: 'Ao usar o Lumi, você concorda com os seguintes termos e condições. Por favor, leia-os atentamente antes de usar o serviço.',
        aboutUs: {
            title: 'Quem Somos',
            content: 'Lumi é um aplicativo desenvolvido pela Bempresente. Somos uma plataforma de assistência baseada em inteligência artificial projetada para fornecer informações, acompanhamento e orientação geral sobre criação de bebês e crianças de 0 a 7 anos.\n\nUsamos modelos de linguagem avançados, busca semântica e uma base de conhecimento especializada para oferecer respostas personalizadas adaptadas ao perfil e à fase de desenvolvimento do seu bebê.',
        },
        registration: {
            title: 'Registro e Acesso',
            content: 'Idade mínima. Você deve ter pelo menos 16 anos, ou a idade mínima exigida em seu país para consentir com o uso de serviços digitais.\n\nConta de usuário. Para usar o Lumi, você deve se registrar fornecendo informações precisas, atualizadas e verdadeiras. Você é responsável por manter a confidencialidade de suas credenciais e por todas as atividades realizadas em sua conta. Notifique-nos imediatamente em caso de uso não autorizado.\n\nPerfil do bebê. Ao criar um perfil para o seu bebê, você confirma que as informações fornecidas são precisas e que as usará exclusivamente para receber orientação personalizada no aplicativo.',
        },
        serviceDescription: {
            title: 'Descrição do Serviço',
            content: 'O Lumi oferece as seguintes funcionalidades principais:\n\n• Assistente de IA disponível 24 horas por dia, 7 dias por semana, para responder perguntas sobre sono, alimentação, amamentação, rotinas, saúde, desenvolvimento e cuidados com o bebê.\n\n• Criação e acompanhamento de rotinas diárias personalizadas adaptadas à idade e fase de desenvolvimento do seu bebê.\n\n• Perfis detalhados do bebê com informações de saúde, preferências e hábitos para contextualizar as respostas da IA.\n\n• Salvamento de respostas favoritas para acesso posterior.\n\nO serviço está disponível em português, espanhol e inglês.',
        },
        subscriptions: {
            title: 'Planos e Assinaturas',
            content: 'O Lumi oferece dois planos de acesso:\n\n• Lumi Basic (Gratuito): acesso limitado ao chat de IA com um número máximo de mensagens diárias, perfil de um bebê e funcionalidades básicas.\n\n• Lumi Max (Assinatura paga): chat de IA ilimitado 24/7, acesso aos melhores modelos de IA, suporte para múltiplos perfis de bebê, exportação de perfil e funcionalidades avançadas.\n\nA assinatura do Lumi Max é renovada automaticamente de acordo com o período selecionado. Você pode cancelar a qualquer momento na loja de aplicativos (App Store ou Google Play). Reembolsos não são concedidos por períodos de assinatura já iniciados, salvo quando exigido pela lei aplicável.',
        },
        aiDisclaimer: {
            title: 'Aviso sobre o Uso de IA',
            content: 'O Lumi usa inteligência artificial para gerar respostas personalizadas sobre criação de filhos. É fundamental que você compreenda as seguintes limitações:\n\n• O Lumi NÃO é um serviço médico e não substitui o atendimento profissional de saúde. Todas as informações fornecidas têm caráter educativo e informativo, não diagnóstico nem terapêutico.\n\n• Para qualquer preocupação de saúde ou emergência médica, consulte imediatamente seu pediatra ou dirija-se a um serviço de urgência.\n\n• As respostas da IA são geradas com base no perfil do seu bebê e em padrões de conhecimento, mas podem conter erros ou não se aplicar a situações específicas.\n\n• Não compartilhe informações médicas sensíveis esperando um diagnóstico clínico; o Lumi não está habilitado para esse fim.',
        },
        userObligations: {
            title: 'Obrigações do Usuário',
            content: 'Ao usar o Lumi, você se compromete a:\n\n• Usar o serviço apenas para fins legítimos relacionados à criação e ao cuidado infantil.\n\n• Não tentar comprometer a segurança do aplicativo nem acessar dados de outros usuários.\n\n• Não inserir informações falsas ou tentar manipular o sistema de IA.\n\n• Não usar o Lumi para obter informações com finalidades diferentes das estabelecidas nestes termos.\n\n• Respeitar os direitos de propriedade intelectual da Bempresente.',
        },
        intellectualProperty: {
            title: 'Propriedade Intelectual',
            content: 'O Lumi, seu design, logotipos, textos, base de conhecimento e software são propriedade da Bempresente e estão protegidos pelas leis de propriedade intelectual aplicáveis.\n\nÉ concedida a você uma licença limitada, não exclusiva e intransferível para usar o aplicativo de acordo com estes termos. Você não pode reproduzir, modificar, distribuir ou criar obras derivadas de qualquer componente do Lumi sem autorização expressa por escrito.',
        },
        feedback: {
            title: 'Feedback',
            content: 'Valorizamos seus comentários e sugestões para melhorar o Lumi. Ao nos enviar feedback por meio do aplicativo ou por e-mail, você nos concede uma licença não exclusiva, gratuita e mundial para usar, modificar e implementar suas ideias com o objetivo de melhorar o serviço, sem gerar obrigação de compensação adicional.',
        },
        termination: {
            title: 'Suspensão e Cancelamento',
            content: 'A Bempresente reserva-se o direito de suspender ou cancelar seu acesso ao Lumi em caso de:\n\n• Descumprimento destes Termos de Uso.\n\n• Uso fraudulento, abusivo ou contrário à finalidade do serviço.\n\n• Atividades que coloquem em risco a segurança de outros usuários ou do sistema.\n\nPara solicitar o cancelamento da conta e a exclusão dos seus dados, escreva para admin@bempresente.com. Após o processamento, seus dados serão tratados conforme nossa Política de Privacidade.',
        },
        liability: {
            title: 'Limitação de Responsabilidade',
            content: 'Na máxima extensão permitida pela lei aplicável, a Bempresente não será responsável por danos indiretos, incidentais, especiais ou consequentes decorrentes do uso ou da impossibilidade de uso do Lumi.\n\nO Lumi é fornecido "como está", sem garantias de disponibilidade ininterrupta. A responsabilidade total da Bempresente por qualquer reclamação não excederá o valor pago pelo usuário nos últimos 12 meses.',
        },
        modifications: {
            title: 'Alterações nos Termos',
            content: 'Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento para refletir mudanças no serviço ou na regulamentação aplicável.\n\nNotificaremos você sobre mudanças substanciais por meio do aplicativo ou por e-mail com pelo menos 15 dias de antecedência. O uso continuado do Lumi após a publicação das alterações constitui aceitação dos novos termos.',
        },
        contact: {
            title: 'Contato',
            content: 'Para qualquer dúvida relacionada a estes Termos de Uso, você pode nos contatar em:\n\nadmin@bempresente.com\n\nVocê também pode acessar o Centro de Ajuda dentro do aplicativo para obter assistência adicional.',
        },
    },
    centerOfHelp: {
        title: 'Centro de Ajuda',
        support: 'Suporte',
        description: 'Encontre respostas para as perguntas mais frequentes sobre o Lumi.',
        contactPrompt: 'Não encontrou o que procurava? Escreva para admin@bempresente.com',
        categories: [
            {
                title: 'Primeiros Passos',
                faqs: [
                    {
                        q: 'Como crio minha conta no Lumi?',
                        a: 'Baixe o app na App Store ou Google Play, abra-o e cadastre-se com seu e-mail e uma senha. Você deve ter pelo menos 16 anos para criar uma conta.',
                    },
                    {
                        q: 'Como configuro o perfil do meu bebê?',
                        a: 'Ao fazer login pela primeira vez, o Lumi irá guiá-lo para criar o perfil. Você também pode completá-lo ou atualizá-lo a qualquer momento na seção "Meu Bebê". Quanto mais informações você adicionar, mais personalizadas serão as respostas.',
                    },
                    {
                        q: 'Para quais idades o Lumi foi desenvolvido?',
                        a: 'O Lumi foi otimizado para bebês e crianças de 0 a 7 anos, adaptando suas respostas à fase de desenvolvimento correspondente.',
                    },
                    {
                        q: 'Em quais idiomas o Lumi está disponível?',
                        a: 'O Lumi está disponível em português, espanhol e inglês. O assistente detecta automaticamente o idioma que você usa e responde no mesmo idioma.',
                    },
                ],
            },
            {
                title: 'Assistente de IA',
                faqs: [
                    {
                        q: 'Como funciona o assistente de IA do Lumi?',
                        a: 'O assistente usa modelos de linguagem avançados e uma base de conhecimento especializada em criação de filhos. Ele analisa o perfil do seu bebê para fornecer respostas contextualizadas de acordo com a idade, hábitos e fase de desenvolvimento.',
                    },
                    {
                        q: 'Posso usar o Lumi para consultas médicas?',
                        a: 'Não. O Lumi oferece orientação educativa e informativa sobre criação de filhos, mas não substitui a consulta com um profissional de saúde. Para qualquer preocupação médica, consulte sempre seu pediatra ou dirija-se a uma emergência.',
                    },
                    {
                        q: 'Quais assuntos o Lumi pode responder?',
                        a: 'O Lumi pode orientar sobre sono, alimentação, amamentação, rotinas diárias, desenvolvimento motor, cuidados corporais, emoções, brincadeiras e saúde geral do bebê.',
                    },
                    {
                        q: 'Por que o assistente às vezes dá respostas diferentes para a mesma pergunta?',
                        a: 'A IA gera respostas dinâmicas que podem variar ligeiramente. Se uma resposta for especialmente útil, salve-a nos Favoritos para tê-la sempre à mão.',
                    },
                ],
            },
            {
                title: 'Planos e Assinaturas',
                faqs: [
                    {
                        q: 'Qual é a diferença entre Lumi Basic e Lumi Max?',
                        a: 'O Lumi Basic é gratuito com limite diário de mensagens e perfil de um bebê. O Lumi Max é a assinatura paga com chat ilimitado 24/7, os melhores modelos de IA, múltiplos perfis de bebê e exportação do perfil.',
                    },
                    {
                        q: 'Como faço para assinar o Lumi Max?',
                        a: 'No app, vá à seção Planos e selecione Lumi Max. O pagamento é processado de forma segura pela sua loja de aplicativos (App Store ou Google Play).',
                    },
                    {
                        q: 'Como cancelo minha assinatura?',
                        a: 'Pela App Store (Ajustes > Seu nome > Assinaturas) ou Google Play (Aplicativos > Assinaturas). O cancelamento se aplica ao próximo período; você mantém o acesso até o final do período atual.',
                    },
                    {
                        q: 'Serei cobrado automaticamente a cada período?',
                        a: 'Sim, a assinatura é renovada automaticamente com base no período escolhido (mensal ou anual). Cancele antes da data de renovação para evitar a cobrança.',
                    },
                ],
            },
            {
                title: 'Perfil do Bebê',
                faqs: [
                    {
                        q: 'Quais informações devo adicionar ao perfil do meu bebê?',
                        a: 'O essencial é o nome e a data de nascimento. Você também pode adicionar hábitos de sono, alimentação, condições de saúde, alergias e contexto familiar. Um perfil mais completo gera respostas mais precisas.',
                    },
                    {
                        q: 'Posso gerenciar perfis de vários filhos?',
                        a: 'Sim, com o Lumi Max você pode criar múltiplos perfis para gerenciar a criação de vários filhos em uma única conta.',
                    },
                    {
                        q: 'Posso atualizar o perfil do bebê depois?',
                        a: 'Sim, você pode atualizar qualquer dado a qualquer momento na seção "Meu Bebê" dentro do app.',
                    },
                    {
                        q: 'O Lumi adapta as respostas conforme o bebê cresce?',
                        a: 'Sim. O Lumi calcula automaticamente a idade atual a partir da data de nascimento e ajusta suas respostas à fase de desenvolvimento correspondente.',
                    },
                ],
            },
            {
                title: 'Privacidade e Segurança',
                faqs: [
                    {
                        q: 'As informações do meu bebê estão seguras?',
                        a: 'Sim. Todos os dados são armazenados criptografados em trânsito e em repouso. Nunca vendemos nem compartilhamos suas informações com terceiros para fins comerciais. Consulte nossa Política de Privacidade para mais detalhes.',
                    },
                    {
                        q: 'Como o Lumi usa os dados de saúde do meu bebê?',
                        a: 'Os dados de saúde são usados exclusivamente para personalizar as respostas do assistente. Não são compartilhados com anunciantes nem com terceiros fora dos provedores necessários para operar o serviço.',
                    },
                    {
                        q: 'Como solicito a exclusão dos meus dados?',
                        a: 'Por enquanto, você pode solicitar a exclusão dos seus dados escrevendo para admin@bempresente.com. Processaremos sua solicitação e excluiremos ou anonimizaremos seus dados em no máximo 90 dias.',
                    },
                ],
            },
            {
                title: 'Problemas Técnicos',
                faqs: [
                    {
                        q: 'O app não carrega ou está lento, o que faço?',
                        a: 'Verifique se você tem uma conexão de internet estável. Certifique-se de ter a versão mais recente do app instalada. Se o problema persistir, feche o app e abra novamente, ou reinstale-o.',
                    },
                    {
                        q: 'Esqueci minha senha, como a recupero?',
                        a: 'Na tela de login, toque em "Esqueceu sua senha?" e insira seu endereço de e-mail. Você receberá um link para redefinir sua senha.',
                    },
                    {
                        q: 'Como entro em contato com o suporte?',
                        a: 'Escreva para admin@bempresente.com e responderemos o mais breve possível.',
                    },
                ],
            },
        ],
    },
    languageSelector: {
        label: 'Idioma',
        spanish: 'Español',
        english: 'English',
        portuguese: 'Português',
    },
    home: {
        navbar: {
            downloadApp: 'Baixar App',
        },
        hero: {
            titleLine1: 'Criação com',
            titleLine2: 'clareza',
            subtitle: 'Seu companheiro inteligente que entende o ritmo do seu bebê. Obtenha respostas especializadas e rotinas personalizadas instantaneamente.',
        },
        features: {
            title: 'Magia para você e seu bebê',
            subtitle: 'Lumi cresce com seu pequeno, aprende suas rotinas e oferece conselhos especializados instantaneamente.',
            card1Title: 'Rotinas Dinâmicas',
            card1Description: 'Planeje o dia do seu bebê adaptado às suas fases de desenvolvimento.',
            card2Title: 'Assistente IA 24/7',
            card2Description: 'Resolva dúvidas sobre sono, alimentação e marcos em segundos.',
            card3Title: 'Favoritos',
            card3Description: 'Salve as mensagens do Lumi para nunca perder o que importa para você',
            card4Title: 'Acompanhamento de Marcos',
            card4Description: 'Não perca nenhum detalhe do crescimento e conquistas.',
        },
        plans: {
            title: 'Planos feitos para você',
            subtitle: 'Comece grátis e desbloqueie o máximo potencial quando precisar.',
            basicName: 'Lumi Basic',
            basicDescription: 'Para começar com o pé direito',
            basicPrice: 'Grátis',
            basicFeature1: 'Acompanhamento básico diário',
            basicFeature2: 'Dicas semanais',
            basicFeature3: 'Perfil de um bebê',
            maxName: 'Lumi Max',
            maxDescription: 'Criação sem limites',
            maxPriceUnit: '/mês',
            maxFeature1: 'Chat IA Ilimitado 24/7',
            maxFeature2: 'Melhores modelos',
            maxFeature3: 'Exportar perfil',
            maxFeature4: 'Multiperfil para irmãos',
        },
        footer: {
            slogan: 'Criação com clareza',
            company: 'Empresa',
            aboutUs: 'Sobre nós',
            contact: 'Contato',
            help: 'Centro de Ajuda',
            privacy: 'Privacidade',
            terms: 'Termos',
            copyright: 'Bempresente. Todos os direitos reservados.',
        },
    }
};
