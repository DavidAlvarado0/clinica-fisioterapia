<template>
  <div class="max-w-6xl mx-auto px-4 py-12 text-left space-y-12">
    <div class="border-b border-slate-200 pb-4">

      <h1 class="text-3xl font-extrabold text-slate-900 mt-1">Patologías Abordadas</h1>
    </div>

    
    <div id="degenerativas" class="space-y-4">
      <h2 class="text-xl font-bold text-[#044343]">Enfermedades degenerativas</h2>
      <p class="text-xs text-slate-500">Deterioro progresivo de tejidos donde la fisioterapia mantiene la función e independencia.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div id="artritis" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
          <div class="flex justify-between"><h3 class="font-bold text-slate-900 text-sm">Artritis</h3><span class="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">Fisio: 100%</span></div>
          <p class="text-xs text-slate-600">Inflamación articular, dolor y limitación en actividades de la vida diaria (AVD).</p>
        </div>
        <div id="lupus" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
          <div class="flex justify-between"><h3 class="font-bold text-slate-900 text-sm">Lupus Eritematoso</h3><span class="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">Fisio: 50%</span></div>
          <p class="text-xs text-slate-600">Enfermedad autoinmunitaria crónica adaptada al estado específico del paciente.</p>
        </div>
        <div id="osteoartritis" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
          <div class="flex justify-between"><h3 class="font-bold text-slate-900 text-sm">Osteoartritis</h3><span class="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">Fisio: 100%</span></div>
          <p class="text-xs text-slate-600">Desgaste articular progresivo con pérdida directa de movilidad e independencia.</p>
        </div>
        <div id="fibromialgias" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
          <div class="flex justify-between"><h3 class="font-bold text-slate-900 text-sm">Fibromialgias</h3><span class="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">Fisio: 100%</span></div>
          <p class="text-xs text-slate-600">Dolor generalizado, fatiga constante, rigidez y puntos dolorosos en el cuerpo.</p>
        </div>
        <div id="esclerosis" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
          <div class="flex justify-between"><h3 class="font-bold text-slate-900 text-sm">Esclerosis</h3><span class="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">Fisio: 100%</span></div>
          <p class="text-xs text-slate-600">Afección crónica del sistema nervioso central en la que se preserva la función motora.</p>
        </div>
        <div id="gota" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
          <div class="flex justify-between"><h3 class="font-bold text-slate-900 text-sm">Artritis gotosa</h3><span class="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">Fisio: 100%</span></div>
          <p class="text-xs text-slate-600">Inflamación aguda y dolorosa de las articulaciones causada por acumulación de ácido úrico.</p>
        </div>
      </div>
    </div>

    
    <div id="nervioso" class="space-y-4">
      <h2 class="text-xl font-bold text-[#044343]">Enfermedades de Sistema Nervioso Central y Periférico</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div id="evc" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
          <div class="flex justify-between"><h3 class="font-bold text-slate-900 text-sm">Eventos cerebrales (ECV)</h3><span class="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">Fisio: 100%</span></div>
          <p class="text-xs text-slate-600">Rehabilitación tras pérdida de irrigación sanguínea en el encéfalo (dificultad motora, habla y marcha).</p>
        </div>
        <div id="paralisis-motora" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
          <div class="flex justify-between"><h3 class="font-bold text-slate-900 text-sm">Parálisis</h3><span class="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">Fisio: 100%</span></div>
          <p class="text-xs text-slate-600">Pérdida total o parcial de movimiento en extremidades o segmentos corporales.</p>
        </div>
        <div id="facial" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
          <div class="flex justify-between"><h3 class="font-bold text-slate-900 text-sm">Parálisis facial</h3><span class="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">Fisio: 100%</span></div>
          <p class="text-xs text-slate-600">Estimulación para restablecer el tono y movimiento de ojos, cejas y labios.</p>
        </div>
        <div id="ciatico" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
          <div class="flex justify-between"><h3 class="font-bold text-slate-900 text-sm">Manejo de nervio ciático</h3><span class="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">Fisio: 100%</span></div>
          <p class="text-xs text-slate-600">Tratamiento descompresivo y ejercicios para aliviar el dolor irradiado lumbar y glúteo.</p>
        </div>
      </div>
    </div>
  </div>
</template>