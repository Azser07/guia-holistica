export interface HerbInteraction {
  drugClass: string
  severity: 'alta' | 'moderada' | 'baja'
  effect: string
}

export const HERB_INTERACTIONS: Record<string, HerbInteraction[]> = {
  ashwagandha: [
    { drugClass: 'Hormonas tiroideas', severity: 'moderada', effect: 'Puede aumentar T3 y T4. Riesgo de hipertiroidismo en pacientes medicados.' },
    { drugClass: 'Benzodiacepinas', severity: 'moderada', effect: 'Potencia la sedación. Riesgo de somnolencia excesiva.' },
    { drugClass: 'Inmunosupresores', severity: 'moderada', effect: 'Puede antagonizar la inmunosupresión (efecto inmunoestimulante).' },
    { drugClass: 'Antidiabéticos', severity: 'baja', effect: 'Puede potenciar ligeramente el efecto hipoglucemiante.' },
    { drugClass: 'ISRS', severity: 'baja', effect: 'Puede potenciar el efecto ansiolítico. Monitorear.' }
  ],
  espino_blanco: [
    { drugClass: 'Digoxina', severity: 'alta', effect: 'Potencia los efectos. Riesgo de toxicidad digitálica (arritmias, náuseas).' },
    { drugClass: 'Antihipertensivos', severity: 'moderada', effect: 'Efecto hipotensor aditivo. Riesgo de hipotensión.' },
    { drugClass: 'Betabloqueantes', severity: 'moderada', effect: 'Puede potenciar bradicardia e hipotensión.' },
    { drugClass: 'Antiarrítmicos', severity: 'moderada', effect: 'Interacción farmacodinámica con amiodarona y otros.' }
  ],
  ajo: [
    { drugClass: 'Anticoagulantes', severity: 'moderada', effect: 'Aumenta el riesgo de sangrado. Reportes de aumento del INR con warfarina.' },
    { drugClass: 'Antiplaquetarios', severity: 'moderada', effect: 'Efecto antiagregante aditivo. Mayor riesgo de sangrado.' },
    { drugClass: 'Antihipertensivos', severity: 'baja', effect: 'Puede potenciar el efecto hipotensor.' },
    { drugClass: 'Antidiabéticos', severity: 'baja', effect: 'Puede potenciar ligeramente el efecto hipoglucemiante.' }
  ],
  jengibre: [
    { drugClass: 'Anticoagulantes', severity: 'moderada', effect: 'Puede potenciar el efecto. Riesgo de sangrado aumentado.' },
    { drugClass: 'Antidiabéticos', severity: 'baja', effect: 'Puede potenciar ligeramente la hipoglucemia.' },
    { drugClass: 'Antihipertensivos', severity: 'baja', effect: 'Puede potenciar ligeramente el efecto hipotensor.' }
  ],
  rhodiola: [
    { drugClass: 'ISRS / IRSN', severity: 'moderada', effect: 'Puede potenciar efectos serotoninérgicos. Monitorear.' },
    { drugClass: 'Benzodiacepinas', severity: 'baja', effect: 'Puede antagonizar la sedación por su efecto estimulante.' },
    { drugClass: 'Antidiabéticos', severity: 'baja', effect: 'Puede potenciar ligeramente la hipoglucemia.' }
  ],
  te_verde: [
    { drugClass: 'Anticoagulantes', severity: 'moderada', effect: 'La vitamina K puede antagonizar warfarina. Grandes cantidades reducen INR.' },
    { drugClass: 'Estatinas', severity: 'moderada', effect: 'Puede aumentar niveles de simvastatina al inhibir OATP1B1.' },
    { drugClass: 'Betabloqueantes', severity: 'moderada', effect: 'Puede aumentar niveles de nadolol.' },
    { drugClass: 'Hormonas tiroideas', severity: 'moderada', effect: 'Reduce absorción de levotiroxina si se toman juntos.' },
    { drugClass: 'Litio', severity: 'moderada', effect: 'La cafeína reduce niveles de litio. Al suspender, pueden subir a rango tóxico.' }
  ],
  pasiflora: [
    { drugClass: 'Benzodiacepinas', severity: 'moderada', effect: 'Potencia la sedación. Riesgo de somnolencia excesiva.' },
    { drugClass: 'Opioides', severity: 'moderada', effect: 'Potenciación de la sedación y depresión del SNC.' },
    { drugClass: 'Anestésicos', severity: 'moderada', effect: 'Puede prolongar la sedación. Suspender antes de cirugía.' }
  ],
  equinacea: [
    { drugClass: 'Inmunosupresores', severity: 'alta', effect: 'Antagoniza la inmunosupresión. Riesgo de rechazo de trasplante.' },
    { drugClass: 'Corticosteroides', severity: 'moderada', effect: 'Reduce eficacia de corticosteroides inmunosupresores.' },
    { drugClass: 'Antifúngicos', severity: 'moderada', effect: 'Puede aumentar niveles de ketoconazol e itraconazol.' }
  ],
  menta: [
    { drugClass: 'Antiácidos', severity: 'baja', effect: 'Puede relajar el esfínter esofágico. Evitar en reflujo severo.' },
    { drugClass: 'Hormonas tiroideas', severity: 'baja', effect: 'Grandes cantidades pueden interferir con absorción de levotiroxina.' }
  ],
  canela: [
    { drugClass: 'Antidiabéticos', severity: 'moderada', effect: 'Potencia el efecto hipoglucemiante. Riesgo de hipoglucemia.' },
    { drugClass: 'Anticoagulantes', severity: 'baja', effect: 'La casia contiene cumarina (hepatotóxica). Usar solo Ceylán.' }
  ],
  astragalo: [
    { drugClass: 'Inmunosupresores', severity: 'moderada', effect: 'Puede antagonizar la inmunosupresión por su efecto inmunoestimulante.' },
    { drugClass: 'Antihipertensivos', severity: 'baja', effect: 'Puede potenciar ligeramente el efecto hipotensor.' },
    { drugClass: 'Anticoagulantes', severity: 'baja', effect: 'Posible efecto antiagregante leve.' }
  ],
  glutamina: [
    { drugClass: 'Quimioterapia', severity: 'baja', effect: 'Puede reducir efectos secundarios de la quimioterapia. Consultar oncólogo.' }
  ],
  cordyceps: [
    { drugClass: 'Anticoagulantes', severity: 'moderada', effect: 'Puede potenciar el efecto anticoagulante. Riesgo de sangrado.' },
    { drugClass: 'Inmunosupresores', severity: 'moderada', effect: 'Puede antagonizar la inmunosupresión.' },
    { drugClass: 'Antidiabéticos', severity: 'baja', effect: 'Puede reducir la glucosa en sangre.' }
  ]
}
