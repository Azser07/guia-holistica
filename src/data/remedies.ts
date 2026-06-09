import { SystemData, SystemKey } from '../types'

export const DATA: Record<SystemKey, SystemData> = {
  nervioso: {
    title: "Eje Nervioso",
    icon: "\u{1F9E0}",
    desc: "Neuroprotección, equilibrio vagal y modulación del eje HPA. Abarca cerebro, nervios periféricos y columna vertebral.",
    pathologies: ["Ansiedad", "Insomnio", "Estrés crónico", "Niebla mental", "Neuropatía periférica", "Migraña", "Fatiga adrenal"],
    remedies: [{
      ico: "\u{1F9E0}", name: "Tónico de Lion's Mane y Ashwagandha", type: "Neuroprotector · Adaptógeno",
      tradition: 'occidental', organ: 'Cerebro',
      plantName: "Ashwagandha", scientificName: "Withania somnifera", herbId: "ashwagandha", timerMinutes: 5,
      ingredients: ["1 cucharadita melena de león en polvo", "½ cucharadita ashwagandha KSM-66", "300 ml leche vegetal"],
      steps: ["Entibiar la leche a 70 °C sin hervir", "Disolver los polvos batiendo bien", "Consumir por la mañana"],
      warning: "Evitar en tratamientos tiroideos severos sin supervisión.",
      citations: ["Sharma et al. J Altern Complement Med 2018;24(3):243-248"],
      dosage: "1 taza al día por la mañana, 5 días/semana"
    }, {
      ico: "\u{1F9E0}", name: "Té de Ginkgo Biloba", type: "Vasodilatador Cerebral · Memoria",
      tradition: 'tcm', organ: 'Cerebro',
      plantName: "Ginkgo", scientificName: "Ginkgo biloba", herbId: "ginkgo", timerMinutes: 10,
      ingredients: ["1 cucharadita hojas secas de ginkgo", "250 ml agua"],
      steps: ["Hervir agua y verter sobre el ginkgo", "Reposar tapado 10 min", "Filtrar y beber 1 taza al día"],
      warning: "No combinar con anticoagulantes. Riesgo de sangrado aumentado.",
      dosage: "1 taza al día, 5 días/semana con 2 de descanso"
    }, {
      ico: "\u{1F9E0}", name: "Infusión de Pasiflora, Melisa y Tilo", type: "Ansiolítico · Sedante suave",
      tradition: 'occidental', organ: 'Nervios',
      plantName: "Pasiflora", scientificName: "Passiflora incarnata", herbId: "pasiflora", timerMinutes: 10,
      ingredients: ["1 cucharadita pasiflora seca", "1 cucharadita melisa", "½ cucharadita tilo", "250 ml agua"],
      steps: ["Verter agua hirviendo sobre las hierbas", "Reposar tapado 10 minutos", "Filtrar y beber antes de dormir"],
      warning: "Puede potenciar sedantes recetados.",
      dosage: "1 taza 30-45 min antes de dormir, máximo 2 semanas continuas"
    }, {
      ico: "\u{1F9E0}", name: "Brahmi (Bacopa) con Leche", type: "Nootrópico · Memoria",
      tradition: 'ayurveda', organ: 'Cerebro',
      plantName: "Bacopa", scientificName: "Bacopa monnieri", herbId: "bacopa", timerMinutes: 5,
      ingredients: ["1 cucharadita bacopa en polvo", "250 ml leche tibia", "1 cucharadita miel", "Pizca de cardamomo"],
      steps: ["Disolver bacopa en leche tibia", "Endulzar con miel y añadir cardamomo", "Consumir en ayunas"],
      warning: "Puede causar molestias digestivas leves en altas dosis.",
      dosage: "1 taza en ayunas, 4-6 semanas para efectos nootrópicos"
    }, {
      ico: "\u{1F9E0}", name: "Aceite de Sésamo para Masaje Craneal (Shirodhara)", type: "Relajante · Equilibrio Vagal",
      tradition: 'ayurveda', organ: 'Nervios',
      timerMinutes: 0,
      ingredients: ["2 cucharadas aceite de sésamo", "3 gotas aceite esencial de lavanda"],
      steps: ["Entibiar el aceite ligeramente", "Masajear cuero cabelludo y sienes en círculos 5 min", "Dejar actuar 15 min y lavar con champú suave"],
      warning: "Evitar en caso de heridas abiertas en el cuero cabelludo.",
      dosage: "2-3 veces por semana, preferiblemente por la noche"
    }, {
      ico: "\u{1F9E0}", name: "Tónico Shen Men (Almohadilla del Oído)", type: "Acupresión · Regulación Vagal",
      tradition: 'tcm', organ: 'Nervios',
      timerMinutes: 3,
      ingredients: ["Ninguno — técnica de acupresión"],
      steps: ["Localizar el punto Shen Men en la almohadilla superior del pabellón auditivo", "Presionar suavemente con la punta del dedo por 3 min", "Respirar profundo mientras se presiona"],
      warning: "Presionar con suavidad, no causar dolor.",
      dosage: "3-5 veces al día en episodios de estrés agudo"
    }]
  },
  cardio: {
    title: "Eje Cardiovascular",
    icon: "\u{2764}\u{FE0F}",
    desc: "Elasticidad endotelial, síntesis de óxido nítrico y protección miocárdica. Corazón y sistema vascular.",
    pathologies: ["Hipertensión", "Arritmia", "Insuficiencia cardíaca", "Aterosclerosis", "Varices", "Mala circulación periférica"],
    remedies: [{
      ico: "\u{2764}\u{FE0F}", name: "Elíxir de Espino Blanco y Granada", type: "Vasodilatador · Cardiotónico",
      tradition: 'occidental', organ: 'Corazón',
      plantName: "Espino blanco", scientificName: "Crataegus monogyna", herbId: "espino_blanco", timerMinutes: 15,
      ingredients: ["2 cucharaditas espino blanco seco", "100 ml jugo puro de granada", "200 ml agua filtrada"],
      steps: ["Infusionar espino blanco a 90 °C por 15 min", "Dejar enfriar e integrar el jugo de granada"],
      warning: "No combinar con hipotensores de receta sin supervisión.",
      citations: ["Walker et al. Phytomedicine 2006;13(9-10):643-650"],
      dosage: "1 taza al día, 4 semanas, descanso de 1 semana"
    }, {
      ico: "\u{2764}\u{FE0F}", name: "Decocción de Salvia Milthiorrhiza (Dan Shen)", type: "Antiisquémico · Circulación Coronaria",
      tradition: 'tcm', organ: 'Corazón',
      plantName: "Salvia", scientificName: "Salvia miltiorrhiza", timerMinutes: 20,
      ingredients: ["1 cucharadita raíz de Dan Shen seca", "300 ml agua"],
      steps: ["Hervir la raíz a fuego lento 20 min", "Filtrar y beber 1 taza al día"],
      warning: "Potencia anticoagulantes. Interacción con warfarina documentada.",
      dosage: "1 taza al día por máximo 8 semanas"
    }, {
      ico: "\u{2764}\u{FE0F}", name: "Tintura de Ajo y Hibisco", type: "Hipotensor · Antiagregante",
      tradition: 'occidental', organ: 'Vasos sanguíneos',
      plantName: "Ajo", scientificName: "Allium sativum", herbId: "ajo", timerMinutes: 0,
      ingredients: ["1 diente ajo fresco prensado", "1 cucharadita hibisco seco", "250 ml agua caliente", "Jugo de ½ limón"],
      steps: ["Infusionar el hibisco 5 min", "Añadir ajo prensado y limón", "Beber en ayunas"],
      warning: "Riesgo de sangrado con anticoagulantes. Suspender 7 días antes de cirugía.",
      dosage: "1 taza en ayunas diario"
    }, {
      ico: "\u{2764}\u{FE0F}", name: "Arjuna y Ashwagandha Cardíaca", type: "Cardiotónico · Adaptógeno",
      tradition: 'ayurveda', organ: 'Corazón',
      plantName: "Ashwagandha", scientificName: "Withania somnifera", herbId: "ashwagandha", timerMinutes: 5,
      ingredients: ["½ cucharadita corteza de Arjuna en polvo", "½ cucharadita ashwagandha", "250 ml leche tibia", "Miel al gusto"],
      steps: ["Disolver los polvos en leche tibia", "Endulzar con miel", "Consumir por la noche"],
      warning: "Evitar en bradicardia severa sin supervisión médica.",
      dosage: "1 taza por la noche, 5 días/semana"
    }, {
      ico: "\u{2764}\u{FE0F}", name: "Té de Hojas de Olivo", type: "Antioxidante · Regulador de Presión",
      tradition: 'holistica', organ: 'Vasos sanguíneos',
      timerMinutes: 10,
      ingredients: ["1 cucharadita hojas de olivo secas", "250 ml agua"],
      steps: ["Infusionar 10 min tapado", "Filtrar y beber 2 tazas al día"],
      warning: "Puede potenciar antihipertensivos. Monitorear presión.",
      dosage: "2 tazas al día, 3 semanas, descanso 1 semana"
    }]
  },
  respiratorio: {
    title: "Eje Respiratorio",
    icon: "\u{1FAC1}",
    desc: "Aclaramiento mucociliar, relajación bronquial y defensa antimicrobiana. Pulmones, bronquios y vías aéreas superiores.",
    pathologies: ["Asma", "Bronquitis", "Sinusitis", "Resfriado común", "EPOC", "Alergias respiratorias", "Congestión nasal"],
    remedies: [{
      ico: "\u{1FAC1}", name: "Vaporización Alveolar de Tomillo", type: "Antiséptico · Espasmolítico",
      tradition: 'occidental', organ: 'Bronquios',
      plantName: "Tomillo", scientificName: "Thymus vulgaris", herbId: "tomillo", timerMinutes: 7,
      ingredients: ["2 cucharaditas tomillo seco", "500 ml agua destilada"],
      steps: ["Hervir agua y verter sobre el tomillo", "Inhalar vapores con toalla 7 min"],
      warning: "Mantener distancia del vapor para evitar quemaduras.",
      dosage: "1-2 veces al día en fase aguda, máximo 5 días"
    }, {
      ico: "\u{1FAC1}", name: "Tónico Pulmonar de Regaliz y Astrágalo", type: "Fortalecedor Pulmonar · Qi",
      tradition: 'tcm', organ: 'Pulmones',
      plantName: "Astrágalo", scientificName: "Astragalus membranaceus", herbId: "astragalo", timerMinutes: 20,
      ingredients: ["5 g astrágalo seco", "1 ramita regaliz seco", "400 ml agua"],
      steps: ["Hervir ambas raíces 20 min a fuego lento", "Filtrar y beber tibio en dos tomas"],
      warning: "El regaliz está contraindicado en hipertensión. Usar con moderación.",
      dosage: "2 tomas al día, 3 semanas"
    }, {
      ico: "\u{1FAC1}", name: "Jarabe de Tulsi (Albahaca Sagrada) y Miel", type: "Expectorante · Inmunomodulador",
      tradition: 'ayurveda', organ: 'Pulmones',
      plantName: "Tulsi", scientificName: "Ocimum tenuiflorum", herbId: "tulsi", timerMinutes: 0,
      ingredients: ["10 hojas frescas de tulsi", "2 cucharadas miel", "1 cucharadita jengibre rallado"],
      steps: ["Moler las hojas de tulsi con el jengibre", "Mezclar con la miel hasta formar pasta", "Tomar 1 cucharadita cada 6 h en fase aguda"],
      warning: "No usar en exceso durante el embarazo.",
      dosage: "1 cucharadita cada 6 h en fase aguda, máximo 7 días"
    }, {
      ico: "\u{1FAC1}", name: "Infusión de Menta, Jengibre y Miel", type: "Descongestionante · Antiinflamatorio",
      tradition: 'occidental', organ: 'Senos nasales',
      plantName: "Menta", scientificName: "Mentha piperita", herbId: "menta", timerMinutes: 10,
      ingredients: ["1 cucharadita menta seca", "2 rodajas jengibre fresco", "250 ml agua", "1 cucharada miel"],
      steps: ["Hervir jengibre 5 min", "Añadir menta y reposar tapado 5 min", "Filtrar, endulzar con miel"],
      warning: "Puede relajar el esfínter esofágico. Evitar en reflujo severo.",
      dosage: "2-3 tazas al día en fase aguda"
    }, {
      ico: "\u{1FAC1}", name: "Nebulización de Eucalipto y Árbol de Té", type: "Antimicrobiano · Vapor",
      tradition: 'holistica', organ: 'Bronquios',
      timerMinutes: 10,
      ingredients: ["3 gotas aceite esencial eucalipto", "2 gotas aceite esencial árbol de té", "500 ml agua caliente"],
      steps: ["Verter agua caliente en un recipiente", "Añadir los aceites esenciales", "Inhalar con toalla 10 min"],
      warning: "No ingerir los aceites esenciales. Mantener fuera del alcance de niños.",
      dosage: "1-2 veces al día, máximo 5 días consecutivos"
    }]
  },
  digestivo: {
    title: "Eje Digestivo",
    icon: "\u{1F33F}",
    desc: "Integridad de uniones estrechas, modulación de microbiota y protección mucosal. Estómago, intestinos, hígado y páncreas.",
    pathologies: ["Gastritis", "SII", "Reflujo", "Hígado graso", "Disbiosis", "Estreñimiento", "Colitis", "Mala digestión"],
    remedies: [{
      ico: "\u{1F33F}", name: "Caldo Sella-Mucosas de L-Glutamina", type: "Protector Epitelial",
      tradition: 'occidental', organ: 'Intestinos',
      plantName: "Glutamina", scientificName: "L-Glutamina", herbId: "glutamina", timerMinutes: 0,
      ingredients: ["5 g L-glutamina pura USP", "250 ml agua tibia"],
      steps: ["Disolver la glutamina en agua tibia", "Ingerir en ayuno estricto"],
      warning: "Contraindicado en disfunción renal crónica avanzada.",
      citations: ["Zuhl et al. Clin Nutr 2015;34(2):238-244"],
      dosage: "5 g/día en ayunas por 4-8 semanas"
    }, {
      ico: "\u{1F33F}", name: "Fórmula de Ginseng y Atractylodes (Si Jun Zi Tang)", type: "Armonizador Digestivo · Qi de Bazo",
      tradition: 'tcm', organ: 'Estómago',
      timerMinutes: 20,
      ingredients: ["1 cucharadita ginseng seco", "1 cucharadita atractylodes", "½ cucharadita jengibre seco", "400 ml agua"],
      steps: ["Hervir las hierbas 20 min a fuego lento", "Filtrar y beber tibio antes de comidas"],
      warning: "No usar en exceso en casos de calor interno o inflamación aguda.",
      dosage: "1 taza 30 min antes del almuerzo, 5 días/semana"
    }, {
      ico: "\u{1F33F}", name: "Leche Dorada (Golden Milk)", type: "Antiinflamatorio · Hepatoprotector",
      tradition: 'ayurveda', organ: 'Hígado',
      plantName: "Jengibre", scientificName: "Zingiber officinale", herbId: "jengibre", timerMinutes: 10,
      ingredients: ["1 cucharadita cúrcuma", "½ cucharadita jengibre molido", "1 pizca pimienta negra", "250 ml leche vegetal", "Miel al gusto"],
      steps: ["Calentar la leche con las especias 10 min sin hervir", "Endulzar con miel y beber tibio"],
      warning: "Puede potenciar anticoagulantes. La cúrcuma mancha la ropa.",
      dosage: "1 taza al día por la noche, uso continuo máximo 8 semanas"
    }, {
      ico: "\u{1F33F}", name: "Cardo Mariano y Alcachofa", type: "Hepatoprotector · Depurativo",
      tradition: 'occidental', organ: 'Hígado',
      plantName: "Cardo Mariano", scientificName: "Silybum marianum", herbId: "cardo_mariano", timerMinutes: 15,
      ingredients: ["1 cucharadita cardo mariano", "1 cucharadita alcachofa seca", "250 ml agua"],
      steps: ["Infusionar tapado 15 min", "Filtrar y beber antes de comidas principales"],
      warning: "Interactúa con estatinas y anticoagulantes. Consultar médico.",
      dosage: "1 taza antes del almuerzo y 1 antes de la cena, 4 semanas"
    }, {
      ico: "\u{1F33F}", name: "Aloe Vera y Papaya", type: "Digestivo · Reparador Mucosal",
      tradition: 'ayurveda', organ: 'Intestinos',
      timerMinutes: 0,
      ingredients: ["2 cucharadas gel de aloe vera puro", "½ taza papaya fresca", "Jugo de ½ limón"],
      steps: ["Licuar la papaya con el aloe y el limón", "Beber en ayunas 30 min antes del desayuno"],
      warning: "Usar solo aloe interno puro. El aloe de corteza amarilla es laxante irritante.",
      dosage: "1 vaso en ayunas, 5 días/semana"
    }]
  },
  endocrino: {
    title: "Eje Endócrino",
    icon: "\u{1F9EA}",
    desc: "Modulación del cortisol, sensibilidad insulínica y equilibrio hormonal. Tiroides, suprarrenales y páncreas endócrino.",
    pathologies: ["Fatiga adrenal", "Diabetes tipo 2", "Hipotiroidismo", "Hipertiroidismo", "Síndrome metabólico", "Desequilibrio hormonal", "Resistencia a la insulina"],
    remedies: [{
      ico: "\u{1F9EA}", name: "Infusión de Rhodiola Rosea", type: "Regulador Adrenal · Anti-fatiga",
      tradition: 'occidental', organ: 'Suprarrenales',
      plantName: "Rhodiola", scientificName: "Rhodiola rosea", herbId: "rhodiola", timerMinutes: 8,
      ingredients: ["1 cucharadita raíz de rhodiola", "300 ml agua"],
      steps: ["Hervir a fuego lento 8 min", "Reposar tapado 5 min y filtrar"],
      warning: "Evitar de noche. Puede interactuar con ISRS.",
      citations: ["Panossian & Wikman. Phytomedicine 2010;17(7):481-493"],
      dosage: "1 taza por la mañana, 4 semanas, descanso 1 semana"
    }, {
      ico: "\u{1F9EA}", name: "Schisandra y Regaliz", type: "Adaptógeno · Regulador Adrenal",
      tradition: 'tcm', organ: 'Suprarrenales',
      plantName: "Schisandra", scientificName: "Schisandra chinensis", herbId: "schisandra", timerMinutes: 15,
      ingredients: ["1 cucharadita bayas de schisandra", "1 ramita regaliz", "300 ml agua"],
      steps: ["Hervir las bayas 15 min", "Añadir regaliz al final y reposar 5 min", "Filtrar y beber tibio"],
      warning: "El regaliz eleva la presión arterial. Usar con moderación.",
      dosage: "1 taza por la mañana, 3 semanas"
    }, {
      ico: "\u{1F9EA}", name: "Canela de Ceylán y Gymnema", type: "Regulador Glucémico",
      tradition: 'ayurveda', organ: 'Páncreas',
      plantName: "Canela", scientificName: "Cinnamomum verum", herbId: "canela", timerMinutes: 10,
      ingredients: ["½ cucharadita canela de Ceylán", "½ cucharadita gymnema en polvo", "250 ml agua caliente"],
      steps: ["Disolver los polvos en agua caliente", "Reposar 10 min", "Beber antes de comidas"],
      warning: "Usar solo canela Ceylán. La casia contiene cumarina hepatotóxica.",
      citations: ["Khan et al. Diabetes Care 2003;26(12):3215-3218"],
      dosage: "1 taza antes del almuerzo y 1 antes de la cena"
    }, {
      ico: "\u{1F9EA}", name: "Shatavari y Maca", type: "Tónico Hormonal · Vitalidad",
      tradition: 'ayurveda', organ: 'Tiroides',
      plantName: "Maca", scientificName: "Lepidium meyenii", herbId: "maca", timerMinutes: 0,
      ingredients: ["1 cucharadita shatavari en polvo", "½ cucharadita maca", "250 ml leche vegetal"],
      steps: ["Disolver en leche tibia", "Batir bien y consumir por la mañana"],
      warning: "Puede alterar hormonas tiroideas. Evitar en hipertiroidismo no controlado.",
      dosage: "1 taza por la mañana, 5 días/semana"
    }, {
      ico: "\u{1F9EA}", name: "Tónico de Fucus y Nopal", type: "Regulador Metabólico · Tiroides",
      tradition: 'holistica', organ: 'Tiroides',
      timerMinutes: 10,
      ingredients: ["1 cucharadita fucus seco", "1 cucharadita nopal en polvo", "250 ml agua"],
      steps: ["Infusionar el fucus 10 min", "Añadir nopal en polvo y beber"],
      warning: "El fucus contiene yodo. Evitar en hipertiroidismo o nódulos tiroideos.",
      dosage: "1 taza al día por máximo 4 semanas"
    }]
  },
  inmune: {
    title: "Eje Inmune e Linfático",
    icon: "\u{1F6E1}\u{FE0F}",
    desc: "Estimulación de células T, respuesta innata y drenaje linfático. Sistema linfático, bazo, timo y ganglios.",
    pathologies: ["Inmunodeficiencia", "Infecciones recurrentes", "Linfedema", "Alergias", "Enfermedades autoinmunes", "Fatiga crónica"],
    remedies: [{
      ico: "\u{1F6E1}\u{FE0F}", name: "Decocción Inmunomoduladora de Astrágalo", type: "Inmunostimulante",
      tradition: 'tcm', organ: 'Timo',
      plantName: "Astrágalo", scientificName: "Astragalus membranaceus", herbId: "astragalo", timerMinutes: 20,
      ingredients: ["5 g raíz de astrágalo seca", "400 ml agua filtrada"],
      steps: ["Hervir la raíz 20 min a fuego lento", "Filtrar y consumir en dos tomas diarias"],
      warning: "Evitar en enfermedades autoinmunes activas.",
      citations: ["Block & Mead. Integr Cancer Ther 2003;2(3):247-267"],
      dosage: "2 tomas al día, 3 semanas al mes"
    }, {
      ico: "\u{1F6E1}\u{FE0F}", name: "Equinácea, Saúco y Propóleo", type: "Antiviral · Prevención",
      tradition: 'occidental', organ: 'Ganglios',
      plantName: "Equinácea", scientificName: "Echinacea purpurea", herbId: "equinacea", timerMinutes: 10,
      ingredients: ["1 cucharadita equinácea", "1 cucharadita saúco seco", "5 gotas tintura de propóleo", "250 ml agua"],
      steps: ["Infusionar equinácea y saúco 10 min tapado", "Añadir propóleo y beber caliente"],
      warning: "No usar más de 8 semanas continuas. Evitar en autoinmunes.",
      citations: ["Shah et al. Lancet Infect Dis 2007;7(7):473-480"],
      dosage: "2 tazas al día en fase aguda, 1 taza al día en prevención"
    }, {
      ico: "\u{1F6E1}\u{FE0F}", name: "Caldo de Cordyceps y Reishi", type: "Inmunomodulador · Adaptógeno",
      tradition: 'tcm', organ: 'Bazo',
      plantName: "Cordyceps", scientificName: "Cordyceps sinensis", herbId: "cordyceps", timerMinutes: 15,
      ingredients: ["1 cucharadita cordyceps en polvo", "1 cucharadita reishi en polvo", "300 ml agua caliente"],
      steps: ["Disolver los hongos en agua caliente", "Reposar 5 min", "Beber 1 vez al día"],
      warning: "Los hongos medicinales pueden potenciar anticoagulantes.",
      dosage: "1 taza al día, 6 semanas, descanso 2 semanas"
    }, {
      ico: "\u{1F6E1}\u{FE0F}", name: "Tulsi (Albahaca Sagrada) y Jengibre", type: "Inmunoestimulante · Adaptógeno",
      tradition: 'ayurveda', organ: 'Timo',
      plantName: "Tulsi", scientificName: "Ocimum tenuiflorum", timerMinutes: 10,
      ingredients: ["5 hojas frescas de tulsi", "2 rodajas jengibre", "250 ml agua", "Miel al gusto"],
      steps: ["Hervir jengibre 5 min", "Añadir tulsi y reposar 5 min", "Endulzar con miel"],
      warning: "No usar en exceso durante el embarazo.",
      dosage: "1-2 tazas al día"
    }, {
      ico: "\u{1F6E1}\u{FE0F}", name: "Cepillado Linfático en Seco", type: "Drenaje · Desintoxicación",
      tradition: 'holistica', organ: 'Ganglios',
      timerMinutes: 10,
      ingredients: ["Cepillo de cerdas naturales", "Aceite de coco (opcional)"],
      steps: ["Cepillar la piel en seco con movimientos hacia el corazón", "Empezar por pies y manos, siempre hacia el centro", "Dedicar 5 min por la mañana antes de la ducha"],
      warning: "Evitar sobre piel irritada, heridas o varices.",
      dosage: "5 min diarios por la mañana antes de la ducha"
    }]
  },
  musculo: {
    title: "Eje Musculoesquelético",
    icon: "\u{1F9B4}",
    desc: "Tejido muscular, estructura ósea y salud articular. Músculos, huesos y articulaciones.",
    pathologies: ["Artritis", "Osteoporosis", "Dolor lumbar", "Contracturas musculares", "Fibromialgia", "Lesiones deportivas", "Artrosis"],
    remedies: [{
      ico: "\u{1F9B4}", name: "Cataplasma de Cúrcuma y Jengibre", type: "Antiinflamatorio · Analgésico",
      tradition: 'ayurveda', organ: 'Articulaciones',
      timerMinutes: 20,
      ingredients: ["2 cucharadas cúrcuma en polvo", "1 cucharada jengibre rallado", "Agua tibia para formar pasta"],
      steps: ["Mezclar los ingredientes hasta formar pasta", "Aplicar sobre la articulación dolorida", "Cubrir con gasa y dejar actuar 20 min", "Enjuagar con agua tibia"],
      warning: "La cúrcuma mancha la piel y la ropa temporalmente.",
      dosage: "Aplicar 1-2 veces al día en crisis de dolor"
    }, {
      ico: "\u{1F9B4}", name: "Infusión de Harpagofito (Garra del Diablo)", type: "Antiartrósico · Analgésico",
      tradition: 'occidental', organ: 'Articulaciones',
      timerMinutes: 15,
      ingredients: ["1 cucharadita raíz de harpagofito", "250 ml agua"],
      steps: ["Hervir la raíz 15 min", "Filtrar y beber hasta 3 tazas al día"],
      warning: "Contraindicado en úlcera gástrica activa y embarazo.",
      dosage: "2-3 tazas al día, 4-6 semanas"
    }, {
      ico: "\u{1F9B4}", name: "Té de Boswellia (Incienso Indio)", type: "Antiinflamatorio · Condroprotector",
      tradition: 'ayurveda', organ: 'Músculos',
      timerMinutes: 10,
      ingredients: ["1 cucharadita resina de boswellia", "250 ml agua"],
      steps: ["Hervir la resina 10 min", "Filtrar y beber tibio 2 veces al día"],
      warning: "Puede causar molestias gastrointestinales leves.",
      dosage: "2 tazas al día, 8 semanas para efecto condroprotector"
    }, {
      ico: "\u{1F9B4}", name: "Caldo de Huesos con Vinagre de Manzana", type: "Reparador Óseo · Colágeno",
      tradition: 'holistica', organ: 'Huesos',
      timerMinutes: 0,
      ingredients: ["500 ml caldo de huesos de res ecológica", "1 cucharada vinagre de manzana", "Sal marina y especias al gusto"],
      steps: ["Calentar el caldo a fuego medio", "Añadir vinagre (extrae minerales de los huesos)", "Sazonar y beber 1 taza al día"],
      warning: "Usar huesos de animales ecológicos para evitar metales pesados.",
      dosage: "1 taza al día, uso continuo"
    }, {
      ico: "\u{1F9B4}", name: "Linimento de Árnica y Romero", type: "Relajante Muscular · Tópico",
      tradition: 'occidental', organ: 'Músculos',
      timerMinutes: 0,
      ingredients: ["2 cucharadas flores secas de árnica", "1 cucharada romero seco", "100 ml aceite de oliva"],
      steps: ["Macertar las hierbas en aceite por 7 días en frasco oscuro", "Filtrar y aplicar masajeando la zona dolorida"],
      warning: "Solo uso externo. No aplicar sobre heridas abiertas.",
      dosage: "Aplicar 2-3 veces al día en zona afectada"
    }, {
      ico: "\u{1F9B4}", name: "Aceite de Linaza y Cúrcuma para Osteoporosis", type: "Osteoprotector · Antiinflamatorio",
      tradition: 'holistica', organ: 'Huesos',
      timerMinutes: 0,
      ingredients: ["1 cucharada aceite de linaza prensado en frío", "½ cucharadita cúrcuma", "Pizca de pimienta negra"],
      steps: ["Mezclar todos los ingredientes", "Consumir en ayunas con un vaso de agua"],
      warning: "El aceite de linaza se oxida rápido. Mantener refrigerado.",
      dosage: "1 dosis en ayunas, 6 meses para efecto osteoprotector"
    }]
  },
  renal: {
    title: "Eje Renal-Urinario",
    icon: "\u{1F9FC}",
    desc: "Filtración glomerular, equilibrio hidroelectrolítico y drenaje urinario. Riñones y vejiga.",
    pathologies: ["Infección urinaria", "Cálculos renales", "Insuficiencia renal", "Cistitis intersticial", "Retención de líquidos", "Prostatitis"],
    remedies: [{
      ico: "\u{1F9FC}", name: "Infusión de Cola de Caballo", type: "Diurético Suave · Mineralizante",
      tradition: 'occidental', organ: 'Riñones',
      timerMinutes: 10,
      ingredients: ["1 cucharadita cola de caballo seca", "250 ml agua"],
      steps: ["Infusionar tapado 10 min", "Filtrar y beber 2 tazas al día"],
      warning: "No usar más de 6 semanas seguidas. Puede depletar potasio.",
      dosage: "2 tazas al día, máximo 6 semanas"
    }, {
      ico: "\u{1F9FC}", name: "Tónico Renal de Rehmannia (Liu Wei Di Huang Wan)", type: "Fortalecedor Renal · Yin",
      tradition: 'tcm', organ: 'Riñones',
      timerMinutes: 20,
      ingredients: ["1 cucharadita raíz de rehmannia", "½ cucharadita corno", "½ cucharadita ñame chino", "400 ml agua"],
      steps: ["Hervir las hierbas 20 min", "Filtrar y beber tibio 1 vez al día"],
      warning: "Evitar en casos de humedad-flema o deficiencia de bazo con inflamación.",
      dosage: "1 taza al día, 4 semanas, descanso 2 semanas"
    }, {
      ico: "\u{1F9FC}", name: "Punarnava (Boerhavia Diffusa)", type: "Diurético · Renoprotector",
      tradition: 'ayurveda', organ: 'Riñones',
      timerMinutes: 10,
      ingredients: ["1 cucharadita punarnava en polvo", "250 ml agua caliente"],
      steps: ["Disolver el polvo en agua caliente", "Reposar 10 min y beber en ayunas"],
      warning: "Efecto diurético moderado. Aumentar consumo de agua.",
      dosage: "1 taza en ayunas, 3 semanas"
    }, {
      ico: "\u{1F9FC}", name: "Infusión de Gayuba (Uva Ursi)", type: "Antiséptico Urinario",
      tradition: 'occidental', organ: 'Vejiga',
      timerMinutes: 10,
      ingredients: ["1 cucharadita hojas de gayuba", "250 ml agua"],
      steps: ["Infusionar 10 min tapado", "Filtrar y beber hasta 3 tazas al día por máx 5 días"],
      warning: "No usar más de 5 días. Evitar en embarazo y enfermedad renal.",
      dosage: "3 tazas al día, máximo 5 días"
    }, {
      ico: "\u{1F9FC}", name: "Té de Diente de León y Ortiga", type: "Diurético · Depurativo",
      tradition: 'occidental', organ: 'Riñones',
      timerMinutes: 10,
      ingredients: ["1 cucharadita diente de león", "1 cucharadita ortiga seca", "250 ml agua"],
      steps: ["Infusionar tapado 10 min", "Filtrar y beber 2 tazas al día"],
      warning: "El diente de león puede interactuar con diuréticos y litio.",
      dosage: "2 tazas al día, 4 semanas"
    }, {
      ico: "\u{1F9FC}", name: "Agua de Coco y Limón", type: "Hidratante · Alcalinizante",
      tradition: 'holistica', organ: 'Vejiga',
      timerMinutes: 0,
      ingredients: ["200 ml agua de coco natural", "Jugo de ½ limón"],
      steps: ["Mezclar ambos ingredientes", "Beber en ayunas para alcalinizar la orina"],
      warning: "El agua de coco contiene potasio. Moderar en insuficiencia renal.",
      dosage: "1 vaso en ayunas diario"
    }]
  },
  reproductor: {
    title: "Eje Reproductor",
    icon: "\u{1F9EC}",
    desc: "Salud hormonal, fertilidad y función reproductiva. Útero, ovarios, próstata y órganos reproductores.",
    pathologies: ["Síndrome premenstrual", "Menopausia", "Disfunción eréctil", "HPB", "Infertilidad", "Endometriosis", "Dismenorrea"],
    remedies: [{
      ico: "\u{1F9EC}", name: "Infusión de Frambuesa Roja y Ortiga", type: "Tónico Uterino · Regulador Hormonal",
      tradition: 'occidental', organ: 'Útero',
      timerMinutes: 10,
      ingredients: ["1 cucharadita hojas de frambuesa roja", "1 cucharadita ortiga verde", "250 ml agua"],
      steps: ["Infusionar tapado 10 min", "Filtrar y beber 2 tazas al día"],
      warning: "Evitar en el primer trimestre de embarazo sin supervisión.",
      dosage: "2 tazas al día, desde la semana premenstrual hasta el fin del ciclo"
    }, {
      ico: "\u{1F9EC}", name: "Dong Quai (Angélica China)", type: "Tónico Femenino · Regulador Menstrual",
      tradition: 'tcm', organ: 'Útero',
      timerMinutes: 15,
      ingredients: ["1 cucharadita raíz de dong quai", "250 ml agua"],
      steps: ["Hervir 15 min a fuego lento", "Filtrar y beber tibio en la semana premenstrual"],
      warning: "Potentes anticoagulantes. No usar con warfarina. Evitar en embarazo.",
      citations: ["Page & Lawrence. Pharmacotherapy 1999;19(7):870-876"],
      dosage: "1 taza al día en la semana premenstrual, no usar durante la menstruación"
    }, {
      ico: "\u{1F9EC}", name: "Shatavari con Leche", type: "Tónico Femenino · Fertilidad",
      tradition: 'ayurveda', organ: 'Ovarios',
      plantName: "Shatavari", scientificName: "Asparagus racemosus", timerMinutes: 5,
      ingredients: ["1 cucharadita shatavari en polvo", "250 ml leche tibia", "1 cucharadita ghee", "Miel al gusto"],
      steps: ["Disolver shatavari en la leche tibia", "Añadir ghee y miel", "Consumir por la mañana"],
      warning: "Evitar en exceso de estrógeno o endometriosis sin supervisión.",
      dosage: "1 taza por la mañana, 5 días/semana"
    }, {
      ico: "\u{1F9EC}", name: "Saw Palmetto y Ortiga para Próstata", type: "Antiandrogénico · Prostático",
      tradition: 'occidental', organ: 'Próstata',
      timerMinutes: 10,
      ingredients: ["1 cucharadita saw palmetto", "1 cucharadita raíz de ortiga", "250 ml agua"],
      steps: ["Infusionar 10 min tapado", "Filtrar y beber 2 tazas al día"],
      warning: "Puede interferir con pruebas de PSA. Informar al urólogo.",
      citations: ["Wilt et al. Cochrane Database Syst Rev 2002;CD001423"],
      dosage: "2 tazas al día, 12 semanas para evaluación de resultados"
    }, {
      ico: "\u{1F9EC}", name: "Agnus Castus (Sauzgatillo)", type: "Regulador Progesterónico · Ciclo Menstrual",
      tradition: 'occidental', organ: 'Ovarios',
      timerMinutes: 0,
      ingredients: ["30 gotas tintura de agnocasto", "Vaso de agua"],
      steps: ["Tomar las gotas en agua cada mañana durante 3 meses continuos"],
      warning: "No usar junto con anticonceptivos hormonales o tratamientos de fertilidad.",
      dosage: "30 gotas/día por la mañana, mínimo 3 meses de uso continuo"
    }]
  },
  tegumentario: {
    title: "Eje Tegumentario",
    icon: "\u{2728}",
    desc: "Barrera cutánea, anexos y tejido conjuntivo. Piel, cabello y uñas.",
    pathologies: ["Acné", "Eczema", "Psoriasis", "Caída del cabello", "Uñas quebradizas", "Cicatrices", "Envejecimiento cutáneo"],
    remedies: [{
      ico: "\u{2728}", name: "Gel de Aloe Vera y Caléndula", type: "Reparador Cutáneo · Antiinflamatorio",
      tradition: 'occidental', organ: 'Piel',
      timerMinutes: 0,
      ingredients: ["3 cucharadas gel de aloe vera puro", "1 cucharadita infusión concentrada de caléndula", "2 gotas aceite esencial de lavanda"],
      steps: ["Mezclar todos los ingredientes", "Aplicar sobre la piel limpia después de la ducha"],
      warning: "Conservar en refrigerador. Usar en 5 días.",
      dosage: "Aplicar 2 veces al día, conservar en refrigeración"
    }, {
      ico: "\u{2728}", name: "Té Verde Tópico (Compresa)", type: "Antioxidante · Antiinflamatorio Tópico",
      tradition: 'tcm', organ: 'Piel',
      plantName: "Té verde", scientificName: "Camellia sinensis", herbId: "te_verde", timerMinutes: 10,
      ingredients: ["2 bolsitas de té verde", "250 ml agua caliente"],
      steps: ["Preparar té verde concentrado", "Dejar enfriar y mojar un paño limpio", "Aplicar sobre el rostro o zona inflamada 10 min"],
      warning: "Puede manchar telas claras. Usar con precaución en piel sensible.",
      dosage: "Aplicar 3-4 veces/semana como compresa facial"
    }, {
      ico: "\u{2728}", name: "Aceite de Onagra y Rosa Mosqueta", type: "Regenerador Cutáneo · Cicatrizante",
      tradition: 'occidental', organ: 'Piel',
      timerMinutes: 0,
      ingredients: ["5 gotas aceite de onagra", "5 gotas aceite de rosa mosqueta", "1 cucharadita aceite de jojoba"],
      steps: ["Mezclar los aceites en la palma de la mano", "Aplicar sobre la piel limpia con suaves masajes", "Usar por la noche antes de dormir"],
      warning: "El aceite de rosa mosqueta puede ser fotosensible. Usar por la noche.",
      dosage: "Aplicar cada noche, 8-12 semanas para ver resultados"
    }, {
      ico: "\u{2728}", name: "Brahmi (Bacopa) para Fortalecer el Cabello", type: "Capilar · Fortalecedor",
      tradition: 'ayurveda', organ: 'Cabello',
      timerMinutes: 0,
      ingredients: ["1 cucharada bacopa en polvo", "2 cucharadas aceite de coco"],
      steps: ["Mezclar bacopa con aceite de coco", "Calentar ligeramente y aplicar en cuero cabelludo", "Masajear 5 min y dejar actuar 30 min antes de lavar"],
      warning: "Hacer prueba de alergia en el antebrazo antes de usar.",
      dosage: "1-2 veces/semana, dejar actuar 30 min"
    }, {
      ico: "\u{2728}", name: "Infusión de Ortiga y Cola de Caballo para Uñas", type: "Fortalecedor de Uñas",
      tradition: 'occidental', organ: 'Uñas',
      timerMinutes: 10,
      ingredients: ["1 cucharadita ortiga seca", "1 cucharadita cola de caballo", "250 ml agua"],
      steps: ["Infusionar tapado 10 min", "Filtrar y beber 1 taza al día por 3 meses"],
      warning: "Resultados visibles después de 8-12 semanas de uso continuo.",
      dosage: "1 taza al día, mínimo 3 meses"
    }, {
      ico: "\u{2728}", name: "Mascarilla de Cúrcuma y Miel", type: "Iluminador · Antimicrobiano",
      tradition: 'ayurveda', organ: 'Piel',
      timerMinutes: 15,
      ingredients: ["½ cucharadita cúrcuma", "1 cucharada miel", "1 cucharada yogur natural"],
      steps: ["Mezclar todos los ingredientes", "Aplicar sobre el rostro limpio 15 min", "Enjuagar con agua tibia"],
      warning: "La cúrcuma tiñe la piel temporalmente. No usar en piel muy sensible.",
      dosage: "1-2 veces/semana"
    }]
  }
}
