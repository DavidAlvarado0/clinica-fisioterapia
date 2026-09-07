<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { treatmentsData } from '../data/treatments'

const route = useRoute()
const treatment = computed(() => treatmentsData[route.params.slug as string])
</script>

<template>
  <div v-if="treatment" class="text-left">
    <!-- Hero Banner Dinámico -->
    <section class="relative bg-gradient-to-r from-teal-950 to-slate-900 text-white min-h-[340px] flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-30 mix-blend-multiply">
        <img :src="treatment.heroImage" :alt="treatment.title" class="w-full h-full object-cover">
      </div>
      <div class="relative z-10 max-w-6xl mx-auto px-4 py-16 w-full">
        <div class="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-wider mb-2">
          <router-link :to="'/' + treatment.categorySlug" class="hover:underline">{{ treatment.category }}</router-link>
          <span>/</span>
          <span>Especialidad Clínica</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight mt-1">{{ treatment.title }}</h1>
        <div v-if="treatment.importance" class="mt-4 inline-block bg-teal-500/20 text-teal-300 border border-teal-500/40 px-3 py-1 rounded-full text-xs font-bold">
          Importancia Fisioterapéutica: {{ treatment.importance }}
        </div>
      </div>
    </section>

    <!-- Cuerpo del Contenido -->
    <div class="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      <!-- Columna Principal -->
      <div class="lg:col-span-2 space-y-8">
        <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <h2 class="text-xl font-bold text-[#044343]">Definición y Enfoque Clínico</h2>
          <p class="text-slate-600 text-sm leading-relaxed">{{ treatment.definition }}</p>
        </div>

        <div v-if="treatment.objectives || treatment.details" class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <h2 class="text-xl font-bold text-[#044343]">Aspectos Clave del Tratamiento</h2>
          <p v-if="treatment.objectives" class="text-slate-600 text-sm leading-relaxed">{{ treatment.objectives }}</p>
          <ul v-if="treatment.details" class="space-y-2 text-sm text-slate-600">
            <li v-for="d in treatment.details" :key="d" class="flex items-start gap-2">
              <span class="text-teal-600 font-bold">✔</span>
              <span>{{ d }}</span>
            </li>
          </ul>
        </div>

        <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <h2 class="text-xl font-bold text-[#044343]">Beneficios de la Fisioterapia</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div v-for="b in treatment.benefits" :key="b" class="p-3.5 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-700 font-medium flex items-center gap-2">
              <span class="text-teal-500 text-base">✦</span>
              <span>{{ b }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tarjeta Lateral de Citas -->
      <div>
        <div class="bg-[#044343] text-white p-6 rounded-2xl shadow-md text-left space-y-4 sticky top-24">
          <h3 class="text-lg font-bold text-teal-200">¿Requieres este tratamiento?</h3>
          <p class="text-xs text-slate-200 leading-relaxed">
            Agenda una evaluación profesional para estructurar un plan de recuperación individualizado.
          </p>
          
          <router-link to="/#contacto" class="block w-full text-center bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3 rounded-xl transition-all text-sm shadow-md">
            Agendar Consulta
          </router-link>

          <div class="border-t border-teal-800/60 pt-4 space-y-2 text-xs text-teal-200">
            <p>📞 Tel: <a href="tel:+503617311285" class="hover:underline text-white font-semibold">6173-1125</a></p>
            <p>💬 WhatsApp: <a href="https://wa.me/503617311285" target="_blank" class="hover:underline text-white font-semibold">6173-1125</a></p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div v-else class="max-w-4xl mx-auto py-20 px-4 text-center space-y-4">
    <h2 class="text-2xl font-bold text-slate-800">Tratamiento no encontrado</h2>
    <p class="text-slate-500 text-sm">El contenido solicitado no está registrado.</p>
    <router-link to="/" class="inline-block bg-[#044343] text-white px-5 py-2.5 rounded-xl text-sm font-semibold">Regresar al Inicio</router-link>
  </div>
</template>