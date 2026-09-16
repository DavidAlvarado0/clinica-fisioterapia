<script setup lang="ts">
import logoCompleto from '../assets/images/logo-completo.jpg'
</script>

<template>
  <div class="bg-slate-50 min-h-screen text-left space-y-16 pb-16">
    
    
    <section class="relative w-full bg-[#8fa4a2] overflow-hidden border-b border-slate-200">
      <div class="max-w-7xl mx-auto min-h-[300px] md:min-h-[360px] flex flex-col md:flex-row items-center relative">
        <div class="w-full md:w-7/12 h-64 md:h-[360px] relative overflow-hidden order-1">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80" 
            alt="Instalaciones y Equipo Clínica de Fisioterapia G&G" 
            class="w-full h-full object-cover object-center"
          />
          <div class="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#8fa4a2]"></div>
        </div>

        <div class="w-full md:w-5/12 p-6 md:p-10 flex flex-col justify-center items-start md:items-end text-left md:text-right space-y-3 z-10 order-2">
          <div class="flex items-center gap-1.5 opacity-90">
            <span class="text-xl font-black tracking-tight text-[#044343]">fisioclinics</span>
            <span class="text-[10px] uppercase font-bold bg-[#044343] text-teal-200 px-1.5 py-0.5 rounded">G&G</span>
          </div>
          <p class="text-xs uppercase tracking-widest font-black text-[#044343]">
            Medicina Física & Rehabilitación
          </p>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold italic text-white drop-shadow-sm leading-tight">
            Quiénes Somos
          </h1>
          <p class="text-xs sm:text-sm text-slate-800 font-medium">
            Conoce nuestro compromiso, equipo profesional e instalaciones clínicas en San Miguel.
          </p>
        </div>
      </div>

      <div class="bg-[#044343] text-white text-center py-2 px-4 text-xs md:text-sm font-semibold tracking-wide">
        Clínica de Fisioterapia G&G es ATENCIÓN HUMANA Y PROFESIONAL
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 space-y-16">

      
      <section class="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div class="md:col-span-4 flex justify-center border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
          <img 
            :src="logoCompleto" 
            alt="Identidad Corporativa Clínica G&G" 
            class="max-h-64 w-auto object-contain hover:scale-105 transition-transform duration-300 rounded-xl"
            height="256"
          />
        </div>
        <div class="md:col-span-8 space-y-4 text-left">
          <span class="text-xs font-bold text-teal-700 uppercase tracking-wider">Identidad y Enfoque Clínico</span>
          <h2 class="text-2xl sm:text-3xl font-black text-[#044343]">Comprometidos con tu Bienestar y Movilidad</h2>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            En la <strong>Clínica de Fisioterapia G&G</strong> combinamos la precisión técnica de la fisioterapia moderna con la calidez humana. Ofrecemos tratamientos especializados para la prevención, alivio del dolor y rehabilitación integral de afecciones traumatológicas, neurológicas, deportivas y reumatológicas en San Miguel.
          </p>
          <div class="flex flex-wrap gap-2 pt-2">
            <span class="bg-teal-50 text-[#044343] text-xs font-semibold px-3 py-1 rounded-full border border-teal-200/60">Fisioterapia General</span>
            <span class="bg-teal-50 text-[#044343] text-xs font-semibold px-3 py-1 rounded-full border border-teal-200/60">Terapia Ocupacional</span>
            <span class="bg-teal-50 text-[#044343] text-xs font-semibold px-3 py-1 rounded-full border border-teal-200/60">Rehabilitación Funcional</span>
          </div>
        </div>
      </section>

      
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-bold text-lg text-[#044343] mb-3 flex items-center gap-2">🎯 MISIÓN</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Proporcionar servicios de medicina física y de rehabilitación con altos estándares de calidad, innovación y todo orientado a la recuperación funcional, proporcionando recomendaciones para prevenir lesiones o reincidencias; mejorar la calidad de vida de nuestros pacientes niños, jóvenes y adulto mayor a través de tratamientos y manejo personalizado con profesionales capacitados con una amplia experiencia clínica.
          </p>
        </div>

        <div class="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-bold text-lg text-[#044343] mb-3 flex items-center gap-2">👁️‍🗨️ VISIÓN</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Consolidarnos como una clínica líder en fisioterapia y rehabilitación física reconocida en nuestra región, que nuestros pacientes puedan percibir la calidez humana con la que son tratados y la empatía a su dificultad funcional; Resaltar nuestro compromiso permanente día con día con la salud y el bienestar físico de la población.
          </p>
        </div>

        <div class="bg-[#044343] p-7 rounded-2xl text-white shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-bold text-lg text-teal-300 mb-3 flex items-center gap-2">⭐ VALORES</h3>
          <ul class="space-y-2.5 text-xs sm:text-sm font-medium">
            <li class="flex items-center gap-2"><span class="text-teal-400 font-bold">✔</span> Humanismo</li>
            <li class="flex items-center gap-2"><span class="text-teal-400 font-bold">✔</span> Compromiso</li>
            <li class="flex items-center gap-2"><span class="text-teal-400 font-bold">✔</span> Empatía</li>
            <li class="flex items-center gap-2"><span class="text-teal-400 font-bold">✔</span> Ética profesional</li>
            <li class="flex items-center gap-2"><span class="text-teal-400 font-bold">✔</span> Responsabilidad</li>
            <li class="flex items-center gap-2"><span class="text-teal-400 font-bold">✔</span> Trabajo en equipo</li>
          </ul>
        </div>
      </section>

      
      <section class="space-y-6">
        <div class="border-b border-slate-200 pb-3">
          <span class="text-xs font-bold text-teal-700 uppercase tracking-wider">Espacios y Equipamiento</span>
          <h2 class="text-2xl font-bold text-slate-900 mt-1">Nuestras Instalaciones y Atención</h2>
          <p class="text-xs text-slate-500 mt-0.5">Áreas acondicionadas para terapia manual, mecanoterapia y masajes terapéuticos.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all">
            <div class="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                alt="Área de Terapia Manual" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-4">
              <h4 class="font-bold text-slate-800 text-sm">Consultorio de Terapia Manual</h4>
              <p class="text-xs text-slate-500 mt-1">Ambiente privado para evaluación palpatoria, descompresión articular y movilidad activa.</p>
            </div>
          </div>

          <div class="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all">
            <div class="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                alt="Gimnasio Terapéutico" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-4">
              <h4 class="font-bold text-slate-800 text-sm">Gimnasio Terapéutico y Marcha</h4>
              <p class="text-xs text-slate-500 mt-1">Reeducación del equilibrio, ejercicios guiados y fortalecimiento postraumático.</p>
            </div>
          </div>

          <div class="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all">
            <div class="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" 
                alt="Cabina de Relajación" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-4">
              <h4 class="font-bold text-slate-800 text-sm">Cabina de Relajación y Electroterapia</h4>
              <p class="text-xs text-slate-500 mt-1">Espacio para manejo del dolor con agentes físicos, masoterapia y relajación muscular.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section class="space-y-6">
        <div class="border-b border-slate-200 pb-3">
          <span class="text-xs font-bold text-teal-700 uppercase tracking-wider">Encuéntranos en San Miguel</span>
          <h2 class="text-2xl font-bold text-slate-900 mt-1">Ubicación y Horarios de Atención</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          
          <div class="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
            <div>
              <span class="text-[11px] font-bold uppercase text-teal-700 tracking-wider">Sede Principal</span>
              <h3 class="text-lg font-bold text-[#044343] mt-0.5">Clínica de Fisioterapia G&G</h3>
            </div>
            
            <div class="space-y-3.5 text-xs sm:text-sm text-slate-600">
              <div class="flex items-start gap-3">
                <span class="text-teal-600 text-lg">📍</span>
                <div>
                  <p class="font-bold text-slate-800">Dirección</p>
                  <p class="leading-relaxed">4 Calle Poniente 611 bis, San Miguel 3301, El Salvador</p>
                  <p class="text-[11px] text-slate-400 mt-0.5">Código Plus: FRJ8+QV San Miguel</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="text-teal-600 text-lg">⏰</span>
                <div>
                  <p class="font-bold text-slate-800">Horarios de Atención</p>
                  <ul class="text-xs space-y-1 mt-1 text-slate-600">
                    <li class="flex justify-between gap-4"><span>Lunes a Viernes:</span> <span class="font-medium text-slate-800">8:00 AM – 5:00 PM</span></li>
                    <li class="flex justify-between gap-4"><span>Sábado:</span> <span class="font-medium text-slate-800">8:00 AM – 12:00 PM</span></li>
                    <li class="flex justify-between gap-4 text-slate-400"><span>Domingo:</span> <span>Cerrado</span></li>
                  </ul>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="text-teal-600 text-lg">📞</span>
                <div>
                  <p class="font-bold text-slate-800">Teléfono y WhatsApp</p>
                  <a href="https://wa.me/50372086815" target="_blank" class="text-green-600 font-semibold hover:underline">+503 7208-6815</a>
                </div>
              </div>

              
              <div class="flex items-start gap-3">
                <span class="text-blue-600 mt-0.5 flex-shrink-0">
                  <svg 
                    class="w-5 h-5 min-w-[20px] fill-current" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-bold text-slate-800">Facebook</p>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61568829156289&locale=es_LA" 
                    target="_blank" 
                    class="text-teal-700 font-semibold hover:underline"
                  >
                    Clínica de Fisioterapia G&G
                  </a>
                </div>
              </div>
            </div>

            <div class="pt-2 space-y-2">
              <a 
                href="https://wa.me/50372086815" 
                target="_blank" 
                class="block text-center w-full bg-[#044343] hover:bg-teal-800 text-white font-bold py-3 rounded-xl transition-all text-xs uppercase tracking-wide shadow-sm"
              >
                Agendar Cita por WhatsApp
              </a>

              <a 
                href="https://maps.google.com/?q=Clinica+de+Fisioterapia+G%26G+4+calle+poniente+611+bis+San+Miguel" 
                target="_blank" 
                class="block text-center w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl transition-all text-xs"
              >
                Abrir en la App de Google Maps
              </a>
            </div>
          </div>

          
          <div class="lg:col-span-2 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 h-[440px] bg-slate-200">
            <iframe 
              title="Ubicación Clínica de Fisioterapia G&G"
              src="https://maps.google.com/maps?q=Clinica%20de%20Fisioterapia%20G%26G,%204%20calle%20poniente%20611%20bis,%20San%20Miguel&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  </div>
</template>