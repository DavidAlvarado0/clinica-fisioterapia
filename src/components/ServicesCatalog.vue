<script setup lang="ts">
import { ref, computed } from 'vue'
const categories = ['Todos', 'Clínica', 'Deportiva', 'Neurología']
const servicesList = [
{ id: 1, name: 'Fisioterapia Traumatológica', category: 'Clínica', duration: '50 min', desc: 'Recuperación de fracturas, esguinces, tendinitis y post-cirugías osteoarticulares.' },
{ id: 2, name: 'Descarga Muscular Deportiva', category: 'Deportiva', duration: '60 min', desc: 'Masaje profundo y terapia asistida para liberar tensión muscular antes o después de entrenar.' },
{ id: 3, name: 'Rehabilitación de Lesiones de Columna', category: 'Clínica', duration: '45 min', desc: 'Manejo efectivo de hernias discales, ciática, lumbalgias y corrección postural.' },
{ id: 4, name: 'Fisioterapia Neurológica', category: 'Neurología', duration: '50 min', desc: 'Tratamiento restaurativo para secuelas de derrame cerebral (EVC), Parkinson y neuropatías.' }
]
const activeTab = ref('Todos')
const filteredServices = computed(() => {
if (activeTab.value === 'Todos') return servicesList
return servicesList.filter(s => s.category === activeTab.value)
})
</script>
<template>
<div class="max-w-5xl mx-auto py-4">
<div class="flex justify-center space-x-2 mb-8 bg-slate-100 p-1 rounded-xl max-w-md mx-auto">
<button v-for="cat in categories" :key="cat" @click="activeTab = cat" :class="[ 'px-4 py-2 text-sm font-semibold rounded-lg transition-all', activeTab === cat ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-600 hover:text-slate-900' ]">
{{ cat }}
</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div v-for="srv in filteredServices" :key="srv.id" class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div class="flex justify-between items-start">
<h3 class="font-bold text-lg text-slate-900">{{ srv.name }}</h3>
<span class="bg-teal-50 text-teal-700 text-xs font-semibold px-2.5 py-1 rounded-full">{{ srv.duration }}</span>
</div>
<p class="text-slate-600 text-sm mt-2">{{ srv.desc }}</p>
</div>
</div>
</div>
</template>