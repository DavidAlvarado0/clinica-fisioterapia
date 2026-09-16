<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { treatmentsData } from '../data/treatments'

const route = useRoute()
const treatment = computed(() => treatmentsData[route.params.slug as string])
</script>

<template>
  <div v-if="treatment" class="text-left bg-slate-50 min-h-screen">
    
    
    <section class="relative w-full bg-[#8fa4a2] overflow-hidden border-b border-slate-200">
      <div class="max-w-7xl mx-auto min-h-[300px] md:min-h-[340px] flex flex-col md:flex-row items-center relative">
        
        
        <div class="w-full md:w-7/12 h-64 md:h-[340px] relative overflow-hidden order-1 md:order-1">
          <img 
            :src="treatment.heroImage" 
            :alt="treatment.title" 
            class="w-full h-full object-cover object-center"
          />
          <div class="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#8fa4a2]"></div>
        </div>

        
        <div class="w-full md:w-5/12 p-6 md:p-10 flex flex-col justify-center items-start md:items-end text-left md:text-right space-y-3 z-10 order-2 md:order-2">
          
          <div class="flex items-center gap-1.5 opacity-90 mb-1">
            <span class="text-lg font-black tracking-tight text-[#044343]">fisioclinics</span>
            <span class="text-[10px] uppercase font-bold bg-[#044343] text-teal-200 px-1.5 py-0.5 rounded">G&G</span>
          </div>

          <p class="text-xs uppercase tracking-widest font-black text-[#044343]">
            Especialistas en Fisioterapia
          </p>

          <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold italic text-white drop-shadow-sm leading-tight">
            {{ treatment.title }}
          </h1>

          <p class="text-xs sm:text-sm text-slate-800 font-medium">
            Valoración clínica | Rehabilitación funcional | Prevención
          </p>

          <div v-if="treatment.importance" class="inline-block bg-white/70 text-[#044343] px-3 py-1 rounded-full text-[11px] font-bold shadow-sm">
            Abordaje Fisioterapéutico: {{ treatment.importance }}
          </div>

          
          <div class="pt-2">
            <a 
              href="https://wa.me/50372086815" 
              target="_blank" 
              class="inline-block bg-[#044343] hover:bg-[#032e2e] text-teal-100 hover:text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow hover:shadow-md transition-all"
            >
              Llámanos o escríbenos para más info
            </a>
          </div>
        </div>

      </div>

      
      <div class="bg-[#044343] text-white text-center py-2 px-4 text-xs md:text-sm font-semibold tracking-wide">
        Clínica de Fisioterapia G&G es RECUPERACIÓN Y SALUD INTEGRAL
      </div>
    </section>

    
    <div class="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      
      <div class="lg:col-span-2 space-y-8">
        
        
        <div class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div class="border-b border-slate-100 pb-3">
            <span class="text-xs font-bold text-teal-700 uppercase tracking-wider">{{ treatment.category }}</span>
            <h2 class="text-2xl font-bold text-[#044343] mt-0.5">Definición y Enfoque Fisioterapéutico</h2>
          </div>
          <p class="text-slate-600 text-sm leading-relaxed">{{ treatment.definition }}</p>
        </div>

        
        <div v-if="treatment.objectives || treatment.details" class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <h2 class="text-xl font-bold text-[#044343]">Aspectos Clave del Tratamiento</h2>
          <p v-if="treatment.objectives" class="text-slate-600 text-sm leading-relaxed">{{ treatment.objectives }}</p>
          <ul v-if="treatment.details" class="space-y-2 text-sm text-slate-600">
            <li v-for="d in treatment.details" :key="d" class="flex items-start gap-2">
              <span class="text-teal-600 font-bold">✔</span>
              <span>{{ d }}</span>
            </li>
          </ul>
        </div>

        
        <div class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <h2 class="text-xl font-bold text-[#044343]">Beneficios Clínicos</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div v-for="b in treatment.benefits" :key="b" class="p-3.5 bg-slate-50 border border-slate-200/70 rounded-xl text-xs text-slate-700 font-medium flex items-center gap-2">
              <span class="text-teal-600 text-base">✦</span>
              <span>{{ b }}</span>
            </div>
          </div>
        </div>

      </div>

      
      <div>
        <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-left space-y-4 sticky top-24">
          <span class="text-xs font-bold text-teal-700 uppercase tracking-wider">Citas y Valoración</span>
          <h3 class="text-lg font-bold text-slate-900 leading-snug">¿Deseas iniciar este tratamiento?</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Coordinamos tu evaluación inicial con fisioterapeutas certificados para estructurar tu plan de rehabilitación.
          </p>
          
          <router-link 
            to="/#contacto" 
            class="block w-full text-center bg-[#044343] hover:bg-teal-800 text-white font-bold py-3 rounded-xl transition-all text-xs uppercase tracking-wide shadow-sm"
          >
            Agendar Consulta
          </router-link>

          <a 
            href="https://wa.me/50372086815" 
            target="_blank" 
            class="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 rounded-xl transition-all text-xs shadow-sm flex items-center justify-center gap-1.5"
          >
            <span>💬</span> WhatsApp Directo (7208-6815)
          </a>

          <div class="border-t border-slate-100 pt-3 space-y-1 text-xs text-slate-500">
            <p>📍 4 Calle Poniente 611 bis, San Miguel</p>
            <p>⏰ Lun - Vie: 8:00 AM - 5:00 PM | Sáb: 8:00 AM - 12:00 PM</p>
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