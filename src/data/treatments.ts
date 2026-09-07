export interface TreatmentDetail {
  slug: string
  title: string
  category: string
  categorySlug: string
  importance?: string
  heroImage: string
  definition: string
  details?: string[]
  objectives?: string
  benefits: string[]
}

export const treatmentsData: Record<string, TreatmentDetail> = {
  // 1. FISIOTERAPIA
  'manejo-del-dolor': {
    slug: 'manejo-del-dolor',
    title: 'Manejo del Dolor',
    category: 'Fisioterapia',
    categorySlug: 'fisioterapia',
    importance: '100%',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
    definition: 'Es el conjunto de tratamientos y técnicas utilizadas para disminuir o controlar el dolor, mejorar la movilidad y recuperar la calidad de vida de las personas[cite: 1, 2, 3]. Se emplean métodos como ejercicios terapéuticos, terapia manual, electroterapia, láser terapéutico, calor o frío y educación del paciente[cite: 1, 2, 3].',
    objectives: 'Aliviar el dolor, tratar su causa, prevenir recaídas y ayudar al paciente a retomar sus actividades diarias de forma segura[cite: 1, 2, 3].',
    benefits: [
      'Disminución del dolor agudo y crónico',
      'Restablecimiento de la movilidad funcional[cite: 1, 2, 3]',
      'Educación del paciente para prevención de recaídas[cite: 1, 2, 3]'
    ]
  },
  'lesiones-deportivas': {
    slug: 'lesiones-deportivas',
    title: 'Lesiones Deportivas',
    category: 'Fisioterapia',
    categorySlug: 'fisioterapia',
    importance: '100%',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80',
    definition: 'Tratamiento terapéutico profesional enfocado en aliviar el dolor, reducir la inflamación, recuperar la movilidad y la fuerza, prevenir complicaciones y disminuir el riesgo de nuevas lesiones[cite: 1, 2, 3].',
    objectives: 'Ayudar a que el paciente regrese a sus actividades deportivas de forma segura, mejorando su rendimiento y calidad de vida[cite: 1, 2, 3].',
    benefits: [
      'Disminución de procesos inflamatorios[cite: 1, 2, 3]',
      'Recuperación de la fuerza muscular[cite: 1, 2, 3]',
      'Retorno deportivo seguro y prevención de recaídas[cite: 1, 2, 3]'
    ]
  },
  'vendajes-neuromusculares': {
    slug: 'vendajes-neuromusculares',
    title: 'Vendajes Neuromusculares',
    category: 'Fisioterapia',
    categorySlug: 'fisioterapia',
    importance: '100%',
    heroImage: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1600&q=80',
    definition: 'Método terapéutico físico para disminuir dolor y lograr movilidad sin dolor[cite: 1, 2, 3]. La técnica es individual para cada lesión y para cada paciente[cite: 1, 2, 3].',
    benefits: [
      'Soporte biomecánico sin limitar el movimiento',
      'Disminución del dolor por estimulación propioceptiva',
      'Técnica 100% individualizada a la lesión del paciente[cite: 1, 2, 3]'
    ]
  },
  'sugerencia-de-ferulas': {
    slug: 'sugerencia-de-ferulas',
    title: 'Sugerencia de Férulas',
    category: 'Fisioterapia',
    categorySlug: 'fisioterapia',
    importance: '100%',
    heroImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1600&q=80',
    definition: 'Asesoramiento técnico en ortesis e inmovilizadores que deben ser específicos e indicados por el médico ortopeda o por un profesional en rehabilitación (fisioterapista), respetando estrictamente el tiempo prescrito de uso[cite: 1, 2, 3].',
    benefits: [
      'Elección precisa de la férula según la lesión[cite: 1, 2, 3]',
      'Dosificación temporal exacta para evitar atrofias[cite: 1, 2, 3]',
      'Supervisión por personal de rehabilitación calificado[cite: 1, 2, 3]'
    ]
  },
  'rehabilitacion-fisica': {
    slug: 'rehabilitacion-fisica',
    title: 'Rehabilitación Física',
    category: 'Fisioterapia',
    categorySlug: 'fisioterapia',
    importance: '100%',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    definition: 'Recuperación total o parcial de funciones perdidas o disminuidas a causa de enfermedades, accidentes, lesiones u otras afecciones[cite: 1, 2, 3].',
    objectives: 'Reintegrar funcionalmente al paciente a sus actividades diarias[cite: 1, 2, 3].',
    benefits: [
      'Restauración de la amplitud articular',
      'Fortalecimiento muscular progresivo',
      'Readquisición de habilidades motrices perdidas[cite: 1, 2, 3]'
    ]
  },
  'terapia-manual': {
    slug: 'terapia-manual',
    title: 'Terapia Manual',
    category: 'Fisioterapia',
    categorySlug: 'fisioterapia',
    importance: '100%',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80',
    definition: 'Conjunto de técnicas especializadas realizadas por un fisioterapista para evaluar y tratar alteraciones de los músculos, articulaciones y nervios afectados por alguna razón específica[cite: 1, 2, 3].',
    objectives: 'Recuperar el movimiento y la fuerza muscular[cite: 1, 2, 3].',
    benefits: [
      'Evaluación manual y palpatoria directa[cite: 1, 2, 3]',
      'Descompresión de tejidos miofasciales y articulares',
      'Alivio localizado del dolor y restauración del arco de movimiento[cite: 1, 2, 3]'
    ]
  },

  // 2. PATOLOGÍAS DEGENERATIVAS
  'artritis': {
    slug: 'artritis',
    title: 'Artritis',
    category: 'Enfermedades Degenerativas',
    categorySlug: 'patologias',
    importance: '100%[cite: 1, 3]',
    heroImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=80',
    definition: 'Enfermedad inflamatoria de articulaciones que produce limitación articular, dolor severo e incapacidad de realizar actividades específicas incluyendo las actividades de la vida diaria (AVD)[cite: 1, 3].',
    benefits: [
      'Control y modulación del dolor inflamatorio',
      'Mantenimiento del rango articular para evitar deformidades',
      'Conservación de la independencia motora en AVD[cite: 1, 3]'
    ]
  },
  'lupus-eritematoso': {
    slug: 'lupus-eritematoso',
    title: 'Lupus Eritematoso',
    category: 'Enfermedades Degenerativas',
    categorySlug: 'patologias',
    importance: '50% (por razones propias de cada paciente)[cite: 1, 3]',
    heroImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80',
    definition: 'Enfermedad autoinmunitaria crónica en la que el sistema inmunológico sufre un auto-ataque contra sus propios tejidos y órganos[cite: 1, 3].',
    benefits: [
      'Movilización suave y ejercicios dosificados sin sobrecarga',
      'Alivio de la rigidez articular matutina',
      'Acompañamiento funcional respetando la tolerancia de cada paciente[cite: 1, 3]'
    ]
  },
  'osteoartritis': {
    slug: 'osteoartritis',
    title: 'Osteoartritis',
    category: 'Enfermedades Degenerativas',
    categorySlug: 'patologias',
    importance: '100%[cite: 1, 3]',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
    definition: 'Enfermedad degenerativa de las articulaciones caracterizada por desgaste articular progresivo, dolor marcado, movilidad afectada y pérdida de independencia[cite: 1, 3].',
    benefits: [
      'Fortalecimiento muscular periarticular para reducir la carga',
      'Prevención de contracturas y rigidez[cite: 3]',
      'Mantenimiento de la autonomía funcional en la marcha[cite: 1, 3]'
    ]
  },
  'fibromialgias': {
    slug: 'fibromialgias',
    title: 'Fibromialgias',
    category: 'Enfermedades Degenerativas',
    categorySlug: 'patologias',
    importance: '100%[cite: 1, 3]',
    heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80',
    definition: 'Trastorno crónico que se caracteriza por dolor musculoesquelético generalizado, acompañado de fatiga, rigidez y sensibilidad en diferentes partes del cuerpo[cite: 1, 3].',
    benefits: [
      'Técnicas manuales suaves para modular el dolor[cite: 1, 2, 3]',
      'Disminución progresiva de la tensión y rigidez generalizada[cite: 1, 3]',
      'Mejora de la resistencia física y alivio de la fatiga[cite: 1, 3]'
    ]
  },
  'esclerosis': {
    slug: 'esclerosis',
    title: 'Esclerosis',
    category: 'Enfermedades Degenerativas',
    categorySlug: 'patologias',
    importance: '100%[cite: 1, 3]',
    heroImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1600&q=80',
    definition: 'Enfermedad crónica del sistema nervioso central en la que el sistema inmunitario compromete las vías de conducción nerviosa, afectando la movilidad[cite: 1, 3].',
    benefits: [
      'Preservación de la movilidad activa y pasiva',
      'Entrenamiento continuo de equilibrio y balance motor',
      'Retraso del impacto discapacitante en la vida diaria[cite: 1, 3]'
    ]
  },
  'artritis-gotosa': {
    slug: 'artritis-gotosa',
    title: 'Artritis Gotosa',
    category: 'Enfermedades Degenerativas',
    categorySlug: 'patologias',
    importance: '100%[cite: 1, 3]',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80',
    definition: 'Enfermedad inflamatoria de las articulaciones causada por la acumulación y depósito de cristales de ácido úrico[cite: 1, 3].',
    benefits: [
      'Alivio de las fases de dolor intenso',
      'Prevención del anquilosamiento o rigidez articular',
      'Recuperación de arcos de movimiento una vez superada la crisis aguda'
    ]
  },

  // PATOLOGÍAS NEUROLÓGICAS
  'eventos-cerebrales': {
    slug: 'eventos-cerebrales',
    title: 'Eventos Cerebrales (ECV)',
    category: 'Sistema Nervioso',
    categorySlug: 'patologias',
    importance: '100%[cite: 1, 3]',
    heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1600&q=80',
    definition: 'También conocido como derrame cerebral, ocurre cuando una parte del cerebro deja de recibir la sangre que necesita para funcionar[cite: 1, 3]. La persona puede presentar dificultad para mover un brazo o una pierna, hablar, caminar o mantener el equilibrio[cite: 1, 3].',
    objectives: 'Reeducar patrones motores y estimular la neuroplasticidad para maximizar la independencia[cite: 1, 3].',
    benefits: [
      'Reeducación temprana de la marcha y balance[cite: 1, 3]',
      'Estimulación neuromuscular del hemicuerpo afectado[cite: 1, 3]',
      'Prevención de deformidades articulares y patrones espásticos'
    ]
  },
  'paralisis-motora': {
    slug: 'paralisis-motora',
    title: 'Parálisis',
    category: 'Sistema Nervioso',
    categorySlug: 'patologias',
    importance: '100%[cite: 1, 3]',
    heroImage: 'https://images.unsplash.com/photo-1584467735874-9f2231b46a2a?auto=format&fit=crop&w=1600&q=80',
    definition: 'Pérdida total o parcial de la capacidad para mover una parte del cuerpo[cite: 1, 3]. Puede afectar un brazo, una pierna, un lado del cuerpo o, en algunos casos, varias partes al mismo tiempo[cite: 1, 3].',
    benefits: [
      'Mantenimiento de la elasticidad muscular y movilidad articular',
      'Prevención de atrofia por denervación o falta de uso',
      'Activación neuromuscular progresiva[cite: 1, 3]'
    ]
  },
  'paralisis-facial': {
    slug: 'paralisis-facial',
    title: 'Parálisis Facial',
    category: 'Sistema Nervioso',
    categorySlug: 'patologias',
    importance: '100%[cite: 1, 3]',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80',
    definition: 'Condición en la que una parte de la cara deja de moverse de forma normal[cite: 1, 3]. Produce dificultad para sonreír, cerrar un ojo, levantar una ceja o mover la boca de un solo lado del rostro[cite: 1, 3].',
    benefits: [
      'Reeducación motriz con ejercicios de mímica facial[cite: 1, 3]',
      'Masoterapia facial y técnicas de estimulación refleja',
      'Recuperación de la simetría muscular facial[cite: 1, 3]'
    ]
  },
  'manejo-nervio-ciatico': {
    slug: 'manejo-nervio-ciatico',
    title: 'Manejo del Nervio Ciático',
    category: 'Sistema Nervioso',
    categorySlug: 'patologias',
    importance: '100%[cite: 1, 3]',
    heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80',
    definition: 'Tratamiento fisioterapéutico diseñado para aliviar el dolor e incapacidad a través de modalidades terapéuticas, ejercicios y estiramientos, enseñando movimientos saludables para disminuir el dolor, mejorar el movimiento y fortalecer los músculos[cite: 1, 3].',
    objectives: 'Permitir que la persona retome sus actividades diarias con mayor comodidad[cite: 1, 3].',
    benefits: [
      'Descompresión de raíces lumbares y trayecto del nervio ciático[cite: 1, 3]',
      'Alivio de hormigueos y dolor irradiado a la extremidad',
      'Fortalecimiento de la musculatura estabilizadora del core[cite: 1, 3]'
    ]
  },

  // 3. ESTRÉS Y ANSIEDAD
  'bruxismo': {
    slug: 'bruxismo',
    title: 'Bruxismo (Rechinar de Dientes)',
    category: 'Manejo de Estrés y Ansiedad',
    categorySlug: 'estres-ansiedad',
    importance: '100%[cite: 3]',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80',
    definition: 'Condición en la que una persona aprieta o rechina los dientes de forma involuntaria, excesiva y sin función masticatoria[cite: 3]. Ocurre de noche al dormir o de día en momentos de alta tensión[cite: 3].',
    benefits: [
      'Liberación miofascial de músculos maseteros, temporales y cuello[cite: 3]',
      'Disminución del desgaste dental involuntario[cite: 3]',
      'Alivio de la tensión y dolor de cabeza de origen temporomandibular'
    ]
  },
  'masajes-relajantes': {
    slug: 'masajes-relajantes',
    title: 'Masajes Relajantes',
    category: 'Manejo de Estrés y Ansiedad',
    categorySlug: 'estres-ansiedad',
    importance: '100%',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80',
    definition: 'Técnica manual terapéutica que aplica movimientos suaves, lentos y armónicos sobre el cuerpo para calmar el sistema nervioso, aliviar la tensión muscular superficial y generar bienestar físico y mental[cite: 3].',
    benefits: [
      'Reducción de niveles de cortisol y reactividad al estrés',
      'Alivio de la sobrecarga muscular por tensión física o emocional[cite: 3]',
      'Inducción de relajación profunda y mejora del sueño[cite: 3]'
    ]
  },
  'manejo-emocion-dolor': {
    slug: 'manejo-emocion-dolor',
    title: 'Manejo de la Emoción Relacionado al Dolor',
    category: 'Manejo de Estrés y Ansiedad',
    categorySlug: 'estres-ansiedad',
    importance: '100%',
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80',
    definition: 'Conjunto de estrategias mentales y emocionales que ayudan a regular el sentir, procesar y responder al dolor físico, evitando que el sufrimiento aumente la molestia[cite: 3].',
    details: [
      'Identificación de la relación directa entre mente y cuerpo[cite: 3]',
      'Modificación de pensamientos sobre el dolor físico[cite: 3]',
      'Aceptación y regulación emocional estructurada[cite: 3]'
    ],
    benefits: [
      'Disminución de la respuesta de alerta exagerada al dolor[cite: 3]',
      'Mayor control del impacto funcional del síntoma[cite: 3]',
      'Herramientas de afrontamiento ante molestias prolongadas[cite: 3]'
    ]
  },

  // 4. ORTOPEDIA
  'hombro-doloroso': {
    slug: 'hombro-doloroso',
    title: 'Hombro Doloroso y Manguito Rotador',
    category: 'Ortopedia',
    categorySlug: 'ortopedia',
    importance: '100%[cite: 3]',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    definition: 'Molestia, rigidez o limitación en el hombro, con daño, inflamación o rotura de los tendones del manguito rotador, encargados de sostener la cabeza humeral y permitir levantar y rotar el brazo[cite: 3].',
    benefits: [
      'Desinflamación y alivio de la compresión tendinosa[cite: 3]',
      'Recuperación de rangos de elevación y rotación del brazo[cite: 3]',
      'Fortalecimiento estabilizador escapulohumeral'
    ]
  },
  'protesis-cadera': {
    slug: 'protesis-cadera',
    title: 'Fisioterapia en Prótesis de Cadera',
    category: 'Ortopedia',
    categorySlug: 'ortopedia',
    importance: '100%[cite: 3]',
    heroImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1600&q=80',
    definition: 'Intervenciones terapéuticas orientadas a rehabilitar el miembro inferior tras reemplazo articular para restaurar amplitud, fortalecer la pelvis y reeducar la marcha[cite: 3].',
    objectives: 'Prevenir complicaciones posquirúrgicas como luxación del componente protésico, rigidez o contracturas secundarias[cite: 3].',
    benefits: [
      'Reeducación de la marcha segura y equilibrada[cite: 3]',
      'Fortalecimiento de la musculatura estabilizadora pélvica[cite: 3]',
      'Prevención de luxaciones mediante posturas protegidas[cite: 3]'
    ]
  },
  'protesis-rodilla': {
    slug: 'protesis-rodilla',
    title: 'Fisioterapia en Prótesis de Rodilla',
    category: 'Ortopedia',
    categorySlug: 'ortopedia',
    importance: '100%[cite: 3]',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
    definition: 'Rehabilitación posquirúrgica cuyo objetivo es lograr que la articulación artificial funcione de forma óptima, reduciendo inflamación y evitando rigidez[cite: 3].',
    objectives: 'Recuperar la movilidad, la fuerza muscular y la autonomía en la marcha[cite: 3].',
    benefits: [
      'Recuperación completa de los grados de flexión y extensión[cite: 3]',
      'Reducción del edema e inflamación postoperatoria[cite: 3]',
      'Fortalecimiento funcional del cuádriceps para caminar sin apoyo[cite: 3]'
    ]
  },
  'lesiones-de-rodilla': {
    slug: 'lesiones-de-rodilla',
    title: 'Lesiones de Rodilla (Meniscos y Ligamentos)',
    category: 'Ortopedia',
    categorySlug: 'ortopedia',
    importance: '100%[cite: 3]',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80',
    definition: 'Daño o trauma que afecta a los meniscos (desgarros por rotaciones con pie fijo) o ligamentos (cruzados o colaterales por giros bruscos o impactos directos)[cite: 3].',
    benefits: [
      'Disminución del dolor y recuperación del rango articular',
      'Readaptación funcional propioceptiva de la rodilla[cite: 3]',
      'Estabilización articular para evitar bloqueos mecánicos[cite: 3]'
    ]
  },
  'esguinces': {
    slug: 'esguinces',
    title: 'Esguinces',
    category: 'Ortopedia',
    categorySlug: 'ortopedia',
    importance: '100%[cite: 3]',
    heroImage: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1600&q=80',
    definition: 'Lesión de ligamentos cuando una articulación sufre un movimiento brusco, retorcimiento o impacto que estira o rompe sus fibras más allá del límite elástico[cite: 3].',
    benefits: [
      'Control del proceso inflamatorio y derrame local[cite: 3]',
      'Cicatrización orientada del ligamento lesionado[cite: 3]',
      'Reeducación neuromuscular para evitar esguinces a repetición'
    ]
  },
  'fracturas': {
    slug: 'fracturas',
    title: 'Fracturas (Expuestas y Cerradas)',
    category: 'Ortopedia',
    categorySlug: 'ortopedia',
    importance: '100%[cite: 3]',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
    definition: 'Ruptura parcial o total de un hueso por impacto superior a su resistencia (expuesta con herida abierta o cerrada con piel intacta)[cite: 3].',
    benefits: [
      'Rehabilitación de articulaciones adyacentes tras inmovilización[cite: 3]',
      'Recuperación de masa muscular atrofiada por el reposo[cite: 3]',
      'Progresión segura en la carga de peso corporal'
    ]
  },
  'amputaciones': {
    slug: 'amputaciones',
    title: 'Amputaciones',
    category: 'Ortopedia',
    categorySlug: 'ortopedia',
    importance: '100%[cite: 3]',
    heroImage: 'https://images.unsplash.com/photo-1584467735874-9f2231b46a2a?auto=format&fit=crop&w=1600&q=80',
    definition: 'Pérdida o extirpación quirúrgica de una extremidad o parte de ella[cite: 3]. La fisioterapia es indispensable para el manejo del dolor residual y adaptación funcional[cite: 3].',
    benefits: [
      'Modelado, desensibilización y vendaje del muñón[cite: 3]',
      'Fortalecimiento de la musculatura adyacente',
      'Entrenamiento de equilibrio y reeducación para uso protésico[cite: 3]'
    ]
  },
  'tendinitis': {
    slug: 'tendinitis',
    title: 'Tendinitis',
    category: 'Ortopedia',
    categorySlug: 'ortopedia',
    importance: '100%[cite: 3]',
    heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80',
    definition: 'Inflamación o irritación aguda de un tendón, estructura de tejido fibroso que conecta el músculo con el hueso[cite: 3].',
    benefits: [
      'Alivio de la inflamación y dolor mecánico por tracción[cite: 3]',
      'Ejercicios excéntricos específicos para regenerar colágeno',
      'Corrección del gesto deportivo o biomecánico que originó la lesión[cite: 1, 2, 3]'
    ]
  }
}