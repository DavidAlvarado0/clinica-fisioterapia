<script setup lang="ts">
import AppointmentForm from '../components/AppointmentForm.vue'
</script>

<template>
  <div class="space-y-16 pb-16">
    <!-- Hero Banner -->
    <section class="relative bg-gradient-to-r from-teal-950 to-slate-900 text-white min-h-[460px] flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-30 mix-blend-multiply">
        <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80" alt="Fisioterapia" class="w-full h-full object-cover">
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full text-left">
        <span class="bg-teal-500/20 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Medicina Física y Rehabilitación</span>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mt-4">
          Recuperá tu movilidad, <br><span class="text-teal-400">mejorá tu calidad de vida</span>
        </h1>
        <p class="mt-4 text-base text-slate-300 max-w-lg">
          Atención fisioterapéutica integral y personalizada orientada a la recuperación funcional y el bienestar físico.
        </p>
        <div class="mt-8 flex gap-4">
          <a href="#contacto" class="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all">
            Agendar Consulta
          </a>
          <router-link to="/fisioterapia" class="border border-slate-400 hover:border-white text-white font-medium px-6 py-3 rounded-xl transition-all">
            Ver Especialidades
          </router-link>
        </div>
      </div>
    </section>

    <!-- Conceptos Clave -->
    <section class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
        <div class="text-3xl mb-3">🩺</div>
        <h3 class="text-xl font-bold text-[#044343] mb-2">¿Qué es Fisioterapia?</h3>
        <p class="text-slate-600 text-sm leading-relaxed">
          Es una rama de la medicina que se encarga de la recuperación de las diferentes estructuras muscular, articular, ósea y neural, donde su objetivo es restablecer toda función perdida o disminuida[cite: 3].
        </p>
      </div>
      <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
        <div class="text-3xl mb-3">🧩</div>
        <h3 class="text-xl font-bold text-[#044343] mb-2">¿Qué es Terapia Ocupacional?</h3>
        <p class="text-slate-600 text-sm leading-relaxed">
          Son todas aquellas actividades guiadas que nos conducirán al objetivo específico para recuperar funciones perdidas en las actividades de la vida diaria del paciente[cite: 3].
        </p>
      </div>
    </section>

    <!-- Accesos Rápidos a Páginas -->
    <section class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-slate-900">Especialidades Médicas</h2>
        <p class="text-xs text-slate-500 mt-1">Selecciona una categoría para ver la información técnica de los tratamientos.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
        <router-link to="/fisioterapia" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 block">
          <div class="text-3xl mb-2">🩹</div>
          <h3 class="font-bold text-slate-900 text-sm">1. Fisioterapia</h3>
          <p class="text-xs text-slate-500 mt-1">Manejo del dolor, lesiones y terapia manual[cite: 3, 6].</p>
        </router-link>
        <router-link to="/patologias" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 block">
          <div class="text-3xl mb-2">🧬</div>
          <h3 class="font-bold text-slate-900 text-sm">2. Patologías</h3>
          <p class="text-xs text-slate-500 mt-1">Degenerativas, EVC y nervio ciático[cite: 3, 6].</p>
        </router-link>
        <router-link to="/estres-ansiedad" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 block">
          <div class="text-3xl mb-2">💆‍♀️</div>
          <h3 class="font-bold text-slate-900 text-sm">3. Estrés y Ansiedad</h3>
          <p class="text-xs text-slate-500 mt-1">Bruxismo y regulación emocional del dolor[cite: 3, 6].</p>
        </router-link>
        <router-link to="/ortopedia" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 block">
          <div class="text-3xl mb-2">🦴</div>
          <h3 class="font-bold text-slate-900 text-sm">4. Ortopedia</h3>
          <p class="text-xs text-slate-500 mt-1">Prótesis, fracturas y manguito rotador[cite: 3, 6].</p>
        </router-link>
        <router-link to="/otros" class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 block">
          <div class="text-3xl mb-2">👐</div>
          <h3 class="font-bold text-slate-900 text-sm">5. Otros Servicios</h3>
          <p class="text-xs text-slate-500 mt-1">Domiciliar, masajes terapéuticos y geriátrico[cite: 3].</p>
        </router-link>
      </div>
    </section>

    <!-- Quiénes Somos: Misión, Visión, Valores -->
    <section id="mision-vision" class="max-w-7xl mx-auto px-4 pt-6">
      <div class="text-center mb-10">
        <h2 class="text-2xl font-bold text-slate-900">Quiénes Somos</h2>
        <p class="text-xs text-slate-500 mt-1">Compromiso, ética y recuperación orientada al paciente[cite: 3].</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 class="font-bold text-[#044343] mb-3 flex items-center gap-2">🎯 MISIÓN</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Proporcionar servicios de medicina física y de rehabilitación con altos estándares de calidad, innovación y todo orientado a la recuperación funcional, proporcionando recomendaciones para prevenir lesiones o reincidencias; mejorar la calidad de vida de nuestros pacientes niños, jóvenes y adulto mayor a través de tratamientos y manejo personalizado con profesionales capacitados con una amplia experiencia clínica[cite: 3].
          </p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 class="font-bold text-[#044343] mb-3 flex items-center gap-2">👁️‍🗨️ VISIÓN</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Consolidarnos como una clínica líder en fisioterapia y rehabilitación física reconocida en nuestra región, que nuestros pacientes puedan percibir la calidez humana con la que son tratados y la empatía a su dificultad funcional; Resaltar nuestro compromiso permanente día con día con la salud y el bienestar físico de la población[cite: 3].
          </p>
        </div>
        <div class="bg-[#044343] p-6 rounded-2xl text-white shadow-sm">
          <h3 class="font-bold text-teal-300 mb-3 flex items-center gap-2">⭐ VALORES INSTITUCIONALES</h3>
          <ul class="space-y-2 text-xs font-medium">
            <li class="flex items-center gap-2"><span class="text-teal-400">✔</span> Humanismo[cite: 3]</li>
            <li class="flex items-center gap-2"><span class="text-teal-400">✔</span> Compromiso[cite: 3]</li>
            <li class="flex items-center gap-2"><span class="text-teal-400">✔</span> Empatía[cite: 3]</li>
            <li class="flex items-center gap-2"><span class="text-teal-400">✔</span> Ética profesional[cite: 3]</li>
            <li class="flex items-center gap-2"><span class="text-teal-400">✔</span> Responsabilidad[cite: 3]</li>
            <li class="flex items-center gap-2"><span class="text-teal-400">✔</span> Trabajo en equipo[cite: 3]</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Formulario de Cita -->
    <section id="contacto" class="max-w-7xl mx-auto px-4 pt-6">
      <AppointmentForm />
    </section>
  </div>
</template>