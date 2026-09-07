<script setup lang="ts">
import { ref } from 'vue'
const activeAccordion = ref<string | null>('masoterapia')
const toggleAccordion = (sec: string) => {
  activeAccordion.value = activeAccordion.value === sec ? null : sec
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-12 text-left space-y-8">
    <div class="border-b border-slate-200 pb-4">
      <span class="text-xs font-bold text-teal-600 uppercase tracking-wider">Sección 5</span>
      <h1 class="text-3xl font-extrabold text-slate-900 mt-1">Otros Servicios Clínicos[cite: 3]</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div id="domiciliar" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2">
        <div class="text-2xl">🏠</div>
        <h3 class="font-bold text-slate-900 text-base">5.1 Fisioterapia domiciliar[cite: 3]</h3>
        <p class="text-xs text-slate-600">Atención personalizada en casa para pacientes con movilidad limitada o postquirúrgicos inmediatos.</p>
      </div>

      <div id="terapeuticos" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2">
        <div class="text-2xl">👐</div>
        <h3 class="font-bold text-slate-900 text-base">5.2 Masajes terapéuticos[cite: 3]</h3>
        <p class="text-xs text-slate-600">Técnicas manuales para descontracturar tejido, mejorar circulación y aliviar dolor crónico[cite: 3].</p>
      </div>

      <div id="geriatricos" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2">
        <div class="text-2xl">👵</div>
        <h3 class="font-bold text-slate-900 text-base">5.3 Terapia grupal geriátrica[cite: 3]</h3>
        <p class="text-xs text-slate-600">Actividades adaptadas para el adulto mayor orientadas a preservar equilibrio y coordinación[cite: 3].</p>
      </div>
    </div>

    <!-- Módulo Masoterapia Integrado -->
    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mt-6">
      <div class="p-6 border-b border-slate-100 bg-slate-50/50">
        <h3 class="font-bold text-[#044343] text-sm">Fundamento de la Masoterapia en Fisioterapia[cite: 3]</h3>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">
          Técnica manual dentro de la fisioterapia para mejorar circulación, reducir dolor, aliviar estrés y facilitar la recuperación funcional[cite: 3].
        </p>
      </div>

      <div class="border-b border-slate-100">
        <button @click="toggleAccordion('tipos')" class="w-full px-6 py-4 flex justify-between items-center font-bold text-xs text-slate-800 hover:bg-slate-50">
          <span>👐 Tipos de Masaje (Deportivo, Relajante, Linfático, Terapéutico, Infantil)[cite: 3]</span>
          <span>{{ activeAccordion === 'tipos' ? '▲' : '▼' }}</span>
        </button>
        <div v-show="activeAccordion === 'tipos'" class="p-6 bg-slate-50/30 text-xs text-slate-600 space-y-2 border-t border-slate-100">
          <p><strong>Deportivo:</strong> Rendimiento y recuperación en atletas[cite: 3].</p>
          <p><strong>Relajante:</strong> Reducción del estrés acumulado[cite: 3].</p>
          <p><strong>Linfático:</strong> Circulación y retención de líquidos[cite: 3].</p>
          <p><strong>Terapéutico:</strong> Dolor muscular y movilidad articular[cite: 3].</p>
          <p><strong>Infantil:</strong> Desarrollo neuromotor y relajación[cite: 3].</p>
        </div>
      </div>

      <div>
        <button @click="toggleAccordion('contra')" class="w-full px-6 py-4 flex justify-between items-center font-bold text-xs text-red-700 hover:bg-red-50">
          <span>⚠️ Contraindicaciones Clínicas[cite: 3]</span>
          <span>{{ activeAccordion === 'contra' ? '▲' : '▼' }}</span>
        </button>
        <div v-show="activeAccordion === 'contra'" class="p-6 bg-red-50/20 text-xs text-slate-600 border-t border-red-100 space-y-1">
          <p>✗ Fiebre o infecciones activas[cite: 3].</p>
          <p>✗ Heridas abiertas o patologías dermatológicas activas[cite: 3].</p>
          <p>✗ Trombosis o problemas severos de coagulación[cite: 3].</p>
          <p>✗ Fracturas recientes o inflamación aguda[cite: 3].</p>
          <p>✗ Hipertensión arterial no controlada[cite: 3].</p>
        </div>
      </div>
    </div>
  </div>
</template>