<script setup lang="ts">
import { reactive, ref } from 'vue'

interface AppointmentData {
  fullName: string
  phone: string
  category: string
  preferredDate: string
  preferredTime: string
  notes: string
}

const form = reactive<AppointmentData>({
  fullName: '',
  phone: '',
  category: 'Fisioterapia General',
  preferredDate: '',
  preferredTime: 'Mañana (8:00 AM - 12:00 MD)',
  notes: ''
})

const sentSuccess = ref(false)

// Número oficial de la Clínica de Fisioterapia G&G
const CLINIC_WHATSAPP = '50372086815'

const handleSubmit = () => {
  if (!form.fullName || !form.phone) {
    alert('Por favor completa al menos tu nombre y número de teléfono.')
    return
  }

  const message = 
    `*¡HOLA! DESEO AGENDAR UNA CITA EN CLÍNICA G&G* 🩺\n\n` +
    `👤 *Paciente:* ${form.fullName}\n` +
    `📞 *Teléfono del paciente:* ${form.phone}\n` +
    `📋 *Especialidad/Servicio:* ${form.category}\n` +
    `📅 *Fecha sugerida:* ${form.preferredDate || 'A convenir'}\n` +
    `⏰ *Horario de preferencia:* ${form.preferredTime}\n` +
    (form.notes ? `📝 *Motivo o síntomas:* ${form.notes}\n\n` : '\n') +
    `_Mensaje enviado desde el sitio web de la clínica._`

  const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
  sentSuccess.value = true
}
</script>

<template>
  <div class="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden text-left max-w-4xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-5">
      
      
      <div class="md:col-span-2 bg-[#044343] p-8 text-white flex flex-col justify-between space-y-6">
        <div>
          <span class="text-xs font-bold text-teal-300 uppercase tracking-wider">Atención Profesional</span>
          <h3 class="text-2xl font-black mt-2 leading-tight">Agendá tu Evaluación</h3>
          <p class="text-xs text-slate-200 mt-3 leading-relaxed">
            Completá tus datos para coordinar tu cita clínica y elaborar tu plan de rehabilitación personalizado.
          </p>
        </div>

        <div class="space-y-4 text-xs">
          <div class="flex items-start gap-3">
            <span class="text-teal-300 text-base">📍</span>
            <div>
              <p class="font-bold text-teal-200">Ubicación</p>
              <p class="text-slate-300">4 Calle Poniente 611 bis, San Miguel 3301</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="text-teal-300 text-base">⏰</span>
            <div>
              <p class="font-bold text-teal-200">Horarios</p>
              <p class="text-slate-300">Lun - Vie: 8:00 AM - 5:00 PM</p>
              <p class="text-slate-300">Sábado: 8:00 AM - 12:00 PM</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="text-teal-300 text-base">💬</span>
            <div>
              <p class="font-bold text-teal-200">Contacto Directo</p>
              <p class="text-slate-300">+503 7208-6815</p>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-teal-800/60 text-[11px] text-teal-300/80">
          Respuesta y confirmación en horarios hábiles de la clínica.
        </div>
      </div>

      
      <form @submit.prevent="handleSubmit" class="md:col-span-3 p-8 space-y-4">
        
        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Nombre Completo *</label>
          <input 
            v-model="form.fullName"
            type="text" 
            required 
            placeholder="Ingresa tu nombre completo" 
            class="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Teléfono / WhatsApp *</label>
            <input 
              v-model="form.phone"
              type="tel" 
              required 
              placeholder="Ej: 7000-0000" 
              class="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Área o Especialidad</label>
            <select 
              v-model="form.category"
              class="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white transition-all"
            >
              <option>Fisioterapia General</option>
              <option>Manejo del Dolor</option>
              <option>Lesiones Deportivas</option>
              <option>Patologías Degenerativas</option>
              <option>Sistema Nervioso (EVC / Parálisis)</option>
              <option>Manejo de Nervio Ciático</option>
              <option>Estrés, Ansiedad o Bruxismo</option>
              <option>Ortopedia y Prótesis</option>
              <option>Atención Domiciliar</option>
              <option>Terapia Geriátrica</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Fecha de Preferencia</label>
            <input 
              v-model="form.preferredDate"
              type="date" 
              class="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all text-slate-600"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Horario Sugerido</label>
            <select 
              v-model="form.preferredTime"
              class="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white transition-all"
            >
              <option>Mañana (8:00 AM - 12:00 MD)</option>
              <option>Tarde (1:00 PM - 5:00 PM)</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Motivo de consulta o síntomas (Opcional)</label>
          <textarea 
            v-model="form.notes"
            rows="3" 
            placeholder="Describí brevemente tu molestia o diagnóstico previo..."
            class="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-none transition-all"
          ></textarea>
        </div>

        <button 
          type="submit"
          class="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer"
        >
          <span>💬</span>
          <span>Enviar Solicitud por WhatsApp</span>
        </button>

        <p v-if="sentSuccess" class="text-xs text-center text-green-700 font-semibold pt-1">
          ✓ Se abrió la ventana de WhatsApp hacia el número de la clínica (7208-6815) con los datos listos para enviar.
        </p>
      </form>

    </div>
  </div>
</template>