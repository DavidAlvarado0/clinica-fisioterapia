<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans flex flex-col justify-between">
    
    <!-- BARRA DE NAVEGACIÓN -->
    <header class="sticky top-0 z-50 bg-[#044343] text-white shadow-md">
      <!-- Contactos Rápidos Superiores -->
      <div class="max-w-7xl mx-auto px-4 h-8 flex items-center justify-end space-x-6 text-xs border-b border-teal-800/40 opacity-90">
        <a href="tel:+503617311285" class="hover:underline flex items-center gap-1">📞 6173-1125</a>
        <a href="https://wa.me/503617311285" target="_blank" class="hover:underline font-semibold text-green-400 flex items-center gap-1">💬 6173-1125</a>
      </div>

      <!-- Fila Principal con Menús Dinámicos -->
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <!-- Logo con Retorno al Home -->
        <router-link to="/" class="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <span class="text-2xl font-bold tracking-tight text-teal-200">fisioclinics</span>
          <span class="text-xs bg-teal-900/60 px-1.5 py-0.5 rounded text-teal-300">SM</span>
        </router-link>

        <!-- Navegación con Redirecciones a /servicio/:slug -->
        <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
          
          <!-- 1. Fisioterapia -->
          <div class="relative group py-4">
            <router-link to="/fisioterapia" class="flex items-center space-x-1 hover:text-teal-300 transition-colors">
              <span>Fisioterapia</span>
              <span class="text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200">▼</span>
            </router-link>
            <div class="absolute left-0 top-full hidden group-hover:block w-64 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-100 py-2">
              <router-link to="/servicio/manejo-del-dolor" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Manejo del dolor</router-link>
              <router-link to="/servicio/lesiones-deportivas" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Lesiones deportivas</router-link>
              <router-link to="/servicio/vendajes-neuromusculares" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Vendajes neuromusculares</router-link>
              <router-link to="/servicio/sugerencia-de-ferulas" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Sugerencia de férulas</router-link>
              <router-link to="/servicio/rehabilitacion-fisica" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Rehabilitación física</router-link>
              <router-link to="/servicio/terapia-manual" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Terapia manual</router-link>
            </div>
          </div>

          <!-- 2. Patologías (Multinivel) -->
          <div class="relative group py-4">
            <router-link to="/patologias" class="flex items-center space-x-1 hover:text-teal-300 transition-colors">
              <span>Patologías</span>
              <span class="text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200">▼</span>
            </router-link>
            <div class="absolute left-0 top-full hidden group-hover:block w-72 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-100 py-2">
              
              <!-- Subnivel Degenerativas -->
              <div class="relative group/sub">
                <button type="button" class="w-full text-left flex items-center justify-between px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs font-semibold">
                  <span>Enf. Degenerativas</span>
                  <span>▶</span>
                </button>
                <div class="absolute left-full top-0 hidden group-hover/sub:block w-56 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-100 py-2 ml-1">
                  <router-link to="/servicio/artritis" class="block px-4 py-1.5 hover:bg-teal-50 hover:text-teal-700 text-xs">Artritis</router-link>
                  <router-link to="/servicio/lupus-eritematoso" class="block px-4 py-1.5 hover:bg-teal-50 hover:text-teal-700 text-xs">Lupus Eritematoso</router-link>
                  <router-link to="/servicio/osteoartritis" class="block px-4 py-1.5 hover:bg-teal-50 hover:text-teal-700 text-xs">Osteoartritis</router-link>
                  <router-link to="/servicio/fibromialgias" class="block px-4 py-1.5 hover:bg-teal-50 hover:text-teal-700 text-xs">Fibromialgias</router-link>
                  <router-link to="/servicio/esclerosis" class="block px-4 py-1.5 hover:bg-teal-50 hover:text-teal-700 text-xs">Esclerosis</router-link>
                  <router-link to="/servicio/artritis-gotosa" class="block px-4 py-1.5 hover:bg-teal-50 hover:text-teal-700 text-xs">Artritis gotosa</router-link>
                </div>
              </div>

              <!-- Subnivel Sistema Nervioso -->
              <div class="relative group/sub">
                <button type="button" class="w-full text-left flex items-center justify-between px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs font-semibold">
                  <span>Sist. Nervioso</span>
                  <span>▶</span>
                </button>
                <div class="absolute left-full top-0 hidden group-hover/sub:block w-56 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-100 py-2 ml-1">
                  <router-link to="/servicio/eventos-cerebrales" class="block px-4 py-1.5 hover:bg-teal-50 hover:text-teal-700 text-xs">Eventos cerebrales (ECV)</router-link>
                  <router-link to="/servicio/paralisis-motora" class="block px-4 py-1.5 hover:bg-teal-50 hover:text-teal-700 text-xs">Parálisis</router-link>
                </div>
              </div>

              <router-link to="/servicio/paralisis-facial" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Parálisis facial</router-link>
              <router-link to="/servicio/manejo-nervio-ciatico" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Manejo de nervio ciático</router-link>
            </div>
          </div>

          <!-- 3. Estrés y Ansiedad -->
          <div class="relative group py-4">
            <router-link to="/estres-ansiedad" class="flex items-center space-x-1 hover:text-teal-300 transition-colors">
              <span>Estrés & Ansiedad</span>
              <span class="text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200">▼</span>
            </router-link>
            <div class="absolute left-0 top-full hidden group-hover:block w-64 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-100 py-2">
              <router-link to="/servicio/bruxismo" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Bruxismo</router-link>
              <router-link to="/servicio/masajes-relajantes" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Masajes relajantes</router-link>
              <router-link to="/servicio/manejo-emocion-dolor" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Manejo de emoción y dolor</router-link>
            </div>
          </div>

          <!-- 4. Ortopedia -->
          <div class="relative group py-4">
            <router-link to="/ortopedia" class="flex items-center space-x-1 hover:text-teal-300 transition-colors">
              <span>Ortopedia</span>
              <span class="text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200">▼</span>
            </router-link>
            <div class="absolute left-0 top-full hidden group-hover:block w-64 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-100 py-2">
              <router-link to="/servicio/hombro-doloroso" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Hombro & Manguito rotador</router-link>
              <router-link to="/servicio/protesis-cadera" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Prótesis de cadera</router-link>
              <router-link to="/servicio/protesis-rodilla" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Prótesis de rodilla</router-link>
              <router-link to="/servicio/lesiones-de-rodilla" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Lesiones de rodilla</router-link>
              <router-link to="/servicio/esguinces" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Esguinces</router-link>
              <router-link to="/servicio/fracturas" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Fracturas</router-link>
              <router-link to="/servicio/amputaciones" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Amputaciones</router-link>
              <router-link to="/servicio/tendinitis" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700 text-xs">Tendinitis</router-link>
            </div>
          </div>

          <!-- 5. Otros -->
          <router-link to="/otros" class="hover:text-teal-300 transition-colors">Otros</router-link>
          
          <!-- Quiénes Somos -->
          <a v-if="route.path === '/'" href="#mision-vision" class="hover:text-teal-300 transition-colors">Quiénes Somos</a>
          <router-link v-else to="/#mision-vision" class="hover:text-teal-300 transition-colors">Quiénes Somos</router-link>
        </nav>

        <!-- Botón Cita -->
        <a v-if="route.path === '/'" href="#contacto" class="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md">Agendar Cita</a>
        <router-link v-else to="/#contacto" class="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md">Agendar Cita</router-link>
      </div>
    </header>

    <!-- Contenido Dinámico de Rutas -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-xs space-y-1">
      <p class="font-semibold text-slate-300">CLÍNICA FISIOCLINICS - MEDICINA FÍSICA Y REHABILITACIÓN</p>
      <p>&copy; 2026. Proyecto de Servicio Social UNIVO.</p>
    </footer>
  </div>
</template>