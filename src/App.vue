<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import logoCirculo from './assets/images/logo-circulo.jpg'

const route = useRoute()

// Estados para control en móviles
const isMobileMenuOpen = ref(false)
const openMobileSubmenu = ref<string | null>(null)
const openMobileNested = ref<string | null>(null)

const toggleMobileSubmenu = (menu: string) => {
  openMobileSubmenu.value = openMobileSubmenu.value === menu ? null : menu
}

const toggleMobileNested = (submenu: string) => {
  openMobileNested.value = openMobileNested.value === submenu ? null : submenu
}

// Cierra el menú al cambiar de ruta
watch(() => route.fullPath, () => {
  isMobileMenuOpen.value = false
  openMobileSubmenu.value = null
  openMobileNested.value = null
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans flex flex-col justify-between">
    
    
    <header class="sticky top-0 z-50 bg-[#044343] text-white shadow-md">
      
      <div class="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between text-xs border-b border-teal-800/40 opacity-95">
        <a 
          href="https://www.facebook.com/profile.php?id=61568829156289&locale=es_LA" 
          target="_blank" 
          class="hover:text-teal-200 flex items-center gap-1.5 transition-colors font-medium"
        >
          <svg 
            class="w-4 h-4 min-w-[16px] fill-current text-white inline-block flex-shrink-0" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span>Facebook</span>
        </a>

        <a 
          href="https://wa.me/50372086815" 
          target="_blank" 
          class="hover:underline font-semibold text-green-400 flex items-center gap-1.5 transition-colors"
        >
          <span>💬</span>
          <span>WhatsApp: 7208-6815</span>
        </a>
      </div>

      
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        
        <router-link to="/" class="flex items-center space-x-3 hover:opacity-95 transition-opacity">
          <img 
            :src="logoCirculo" 
            alt="Logo Clínica de Fisioterapia G&G" 
            class="w-10 h-10 min-w-[40px] max-h-10 rounded-full bg-white p-0.5 object-contain shadow-sm flex-shrink-0"
            width="40"
            height="40"
          />
          <div class="flex flex-col text-left leading-none">
            <span class="text-base font-black tracking-tight text-white">Clínica G&G</span>
            <span class="text-[10px] text-teal-300 font-semibold tracking-wider uppercase mt-0.5">Fisioterapia & TO</span>
          </div>
        </router-link>

        
        <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
          
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

          
          <div class="relative group py-4">
            <router-link to="/patologias" class="flex items-center space-x-1 hover:text-teal-300 transition-colors">
              <span>Patologías</span>
              <span class="text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200">▼</span>
            </router-link>
            <div class="absolute left-0 top-full hidden group-hover:block w-72 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-100 py-2">
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

          
          <router-link to="/otros" class="hover:text-teal-300 transition-colors">Otros</router-link>
          
          
          <router-link to="/quienes-somos" class="hover:text-teal-300 transition-colors">Quiénes Somos</router-link>
        </nav>

        
        <div class="hidden md:block">
          <a v-if="route.path === '/'" href="#contacto" class="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md">Agendar Cita</a>
          <router-link v-else to="/#contacto" class="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md">Agendar Cita</router-link>
        </div>

        
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          type="button" 
          class="md:hidden p-2 text-teal-200 hover:text-white focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg class="w-7 h-7" width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      
      <div v-show="isMobileMenuOpen" class="md:hidden bg-[#033434] border-t border-teal-800 px-4 py-4 space-y-3 text-sm text-left max-h-[85vh] overflow-y-auto">
        
        
        <div class="pb-2 border-b border-teal-800">
          <a 
            href="https://www.facebook.com/profile.php?id=61568829156289&locale=es_LA" 
            target="_blank" 
            class="text-xs text-teal-200 hover:text-white flex items-center gap-2 font-semibold"
          >
            <svg class="w-4 h-4 min-w-[16px] fill-current flex-shrink-0" width="16" height="16" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook Oficial</span>
          </a>
        </div>

        
        <div>
          <button @click="toggleMobileSubmenu('fisio')" class="w-full flex justify-between items-center py-2 font-medium text-teal-200">
            <span>Fisioterapia</span>
            <span class="text-xs">{{ openMobileSubmenu === 'fisio' ? '▲' : '▼' }}</span>
          </button>
          <div v-show="openMobileSubmenu === 'fisio'" class="pl-4 space-y-2 py-2 border-l border-teal-700/60 ml-2">
            <router-link to="/servicio/manejo-del-dolor" class="block text-xs py-1 text-slate-300 hover:text-white">Manejo del dolor</router-link>
            <router-link to="/servicio/lesiones-deportivas" class="block text-xs py-1 text-slate-300 hover:text-white">Lesiones deportivas</router-link>
            <router-link to="/servicio/vendajes-neuromusculares" class="block text-xs py-1 text-slate-300 hover:text-white">Vendajes neuromusculares</router-link>
            <router-link to="/servicio/sugerencia-de-ferulas" class="block text-xs py-1 text-slate-300 hover:text-white">Sugerencia de férulas</router-link>
            <router-link to="/servicio/rehabilitacion-fisica" class="block text-xs py-1 text-slate-300 hover:text-white">Rehabilitación física</router-link>
            <router-link to="/servicio/terapia-manual" class="block text-xs py-1 text-slate-300 hover:text-white">Terapia manual</router-link>
          </div>
        </div>

        
        <div>
          <button @click="toggleMobileSubmenu('patologias')" class="w-full flex justify-between items-center py-2 font-medium text-teal-200">
            <span>Patologías</span>
            <span class="text-xs">{{ openMobileSubmenu === 'patologias' ? '▲' : '▼' }}</span>
          </button>
          <div v-show="openMobileSubmenu === 'patologias'" class="pl-4 space-y-3 py-2 border-l border-teal-700/60 ml-2">
            <div>
              <button @click="toggleMobileNested('deg')" class="w-full flex justify-between items-center text-xs text-teal-300 py-1 font-semibold">
                <span>Enf. Degenerativas</span>
                <span class="text-[10px]">{{ openMobileNested === 'deg' ? '▲' : '▼' }}</span>
              </button>
              <div v-show="openMobileNested === 'deg'" class="pl-3 space-y-1.5 py-1 border-l border-teal-600/40 ml-1">
                <router-link to="/servicio/artritis" class="block text-xs text-slate-300 hover:text-white">Artritis</router-link>
                <router-link to="/servicio/lupus-eritematoso" class="block text-xs text-slate-300 hover:text-white">Lupus Eritematoso</router-link>
                <router-link to="/servicio/osteoartritis" class="block text-xs text-slate-300 hover:text-white">Osteoartritis</router-link>
                <router-link to="/servicio/fibromialgias" class="block text-xs text-slate-300 hover:text-white">Fibromialgias</router-link>
                <router-link to="/servicio/esclerosis" class="block text-xs text-slate-300 hover:text-white">Esclerosis</router-link>
                <router-link to="/servicio/artritis-gotosa" class="block text-xs text-slate-300 hover:text-white">Artritis gotosa</router-link>
              </div>
            </div>

            <div>
              <button @click="toggleMobileNested('nerv')" class="w-full flex justify-between items-center text-xs text-teal-300 py-1 font-semibold">
                <span>Sist. Nervioso</span>
                <span class="text-[10px]">{{ openMobileNested === 'nerv' ? '▲' : '▼' }}</span>
              </button>
              <div v-show="openMobileNested === 'nerv'" class="pl-3 space-y-1.5 py-1 border-l border-teal-600/40 ml-1">
                <router-link to="/servicio/eventos-cerebrales" class="block text-xs text-slate-300 hover:text-white">Eventos cerebrales (ECV)</router-link>
                <router-link to="/servicio/paralisis-motora" class="block text-xs text-slate-300 hover:text-white">Parálisis</router-link>
              </div>
            </div>

            <router-link to="/servicio/paralisis-facial" class="block text-xs py-1 text-slate-300 hover:text-white">Parálisis facial</router-link>
            <router-link to="/servicio/manejo-nervio-ciatico" class="block text-xs py-1 text-slate-300 hover:text-white">Manejo de nervio ciático</router-link>
          </div>
        </div>

        
        <div>
          <button @click="toggleMobileSubmenu('estres')" class="w-full flex justify-between items-center py-2 font-medium text-teal-200">
            <span>Estrés & Ansiedad</span>
            <span class="text-xs">{{ openMobileSubmenu === 'estres' ? '▲' : '▼' }}</span>
          </button>
          <div v-show="openMobileSubmenu === 'estres'" class="pl-4 space-y-2 py-2 border-l border-teal-700/60 ml-2">
            <router-link to="/servicio/bruxismo" class="block text-xs py-1 text-slate-300 hover:text-white">Bruxismo</router-link>
            <router-link to="/servicio/masajes-relajantes" class="block text-xs py-1 text-slate-300 hover:text-white">Masajes relajantes</router-link>
            <router-link to="/servicio/manejo-emocion-dolor" class="block text-xs py-1 text-slate-300 hover:text-white">Manejo de emoción y dolor</router-link>
          </div>
        </div>

        
        <div>
          <button @click="toggleMobileSubmenu('ortopedia')" class="w-full flex justify-between items-center py-2 font-medium text-teal-200">
            <span>Ortopedia</span>
            <span class="text-xs">{{ openMobileSubmenu === 'ortopedia' ? '▲' : '▼' }}</span>
          </button>
          <div v-show="openMobileSubmenu === 'ortopedia'" class="pl-4 space-y-2 py-2 border-l border-teal-700/60 ml-2">
            <router-link to="/servicio/hombro-doloroso" class="block text-xs py-1 text-slate-300 hover:text-white">Hombro & Manguito rotador</router-link>
            <router-link to="/servicio/protesis-cadera" class="block text-xs py-1 text-slate-300 hover:text-white">Prótesis de cadera</router-link>
            <router-link to="/servicio/protesis-rodilla" class="block text-xs py-1 text-slate-300 hover:text-white">Prótesis de rodilla</router-link>
            <router-link to="/servicio/lesiones-de-rodilla" class="block text-xs py-1 text-slate-300 hover:text-white">Lesiones de rodilla</router-link>
            <router-link to="/servicio/esguinces" class="block text-xs py-1 text-slate-300 hover:text-white">Esguinces</router-link>
            <router-link to="/servicio/fracturas" class="block text-xs py-1 text-slate-300 hover:text-white">Fracturas</router-link>
            <router-link to="/servicio/amputaciones" class="block text-xs py-1 text-slate-300 hover:text-white">Amputaciones</router-link>
            <router-link to="/servicio/tendinitis" class="block text-xs py-1 text-slate-300 hover:text-white">Tendinitis</router-link>
          </div>
        </div>

        
        <router-link to="/otros" class="block py-2 font-medium text-teal-200 hover:text-white">Otros Servicios</router-link>

        
        <router-link to="/quienes-somos" @click="isMobileMenuOpen = false" class="block py-2 font-medium text-teal-200 hover:text-white">Quiénes Somos</router-link>

        
        <div class="pt-2">
          <a v-if="route.path === '/'" href="#contacto" @click="isMobileMenuOpen = false" class="block text-center bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2.5 rounded-lg text-xs shadow-md">
            Agendar Cita
          </a>
          <router-link v-else to="/#contacto" class="block text-center bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2.5 rounded-lg text-xs shadow-md">
            Agendar Cita
          </router-link>
        </div>
      </div>
    </header>

    
    <main class="flex-grow">
      <router-view />
    </main>

    
    <footer class="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-xs space-y-4">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3 text-center md:text-left">
          <img 
            :src="logoCirculo" 
            alt="Logo G&G" 
            class="w-8 h-8 min-w-[32px] max-h-8 rounded-full bg-white p-0.5 object-contain flex-shrink-0" 
            width="32" 
            height="32" 
          />
          <div class="space-y-0.5">
            <p class="font-bold text-slate-200 text-sm">CLÍNICA DE FISIOTERAPIA G&G</p>
            <p>Medicina Física y Rehabilitación Integral — 4 Calle Poniente 611 bis, San Miguel</p>
          </div>
        </div>
        
        <div class="flex items-center gap-6">
          <a 
            href="https://www.facebook.com/profile.php?id=61568829156289&locale=es_LA" 
            target="_blank" 
            class="text-teal-300 hover:underline flex items-center gap-1.5 font-semibold"
          >
            <svg class="w-4 h-4 min-w-[16px] fill-current flex-shrink-0" width="16" height="16" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>
          <a 
            href="https://wa.me/50372086815" 
            target="_blank" 
            class="text-green-400 hover:underline flex items-center gap-1 font-semibold"
          >
            <span>WhatsApp: 7208-6815</span>
          </a>
        </div>
      </div>
      <p class="text-center text-slate-500 text-[11px]">&copy; 2026. Proyecto de Servicio Social UNIVO.</p>
    </footer>
  </div>
</template>