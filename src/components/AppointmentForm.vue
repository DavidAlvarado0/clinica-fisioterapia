<script setup lang="ts">
import { ref } from 'vue'
const services = [
'Rehabilitación Traumatológica',
'Fisioterapia Deportiva',
'Terapia Neurológica',
'Terapia Manual y Masoterapia',
'Descarga Muscular'
]
const specialists = [
'Licda. María José Ramos (Fisioterapeuta)',
'Lic. Carlos Mendoza (Especialista Deportivo)'
]
const form = ref({
fullName: '',
phone: '',
service: '',
specialist: '',
date: '',
time: '',
notes: ''
})
const sendToWhatsApp = () => {
// Número de WhatsApp de la clínica en El Salvador (formato internacional)
const phoneNumber = '50370000000'
const message = `*Nueva Solicitud de Cita - KineActiva*\n\n` +
`*Paciente:* ${form.value.fullName}\n` +
`*Teléfono:* ${form.value.phone}\n` +
`*Servicio:* ${form.value.service || 'No especificado'}\n` +
`*Especialista:* ${form.value.specialist || 'Cualquiera disponible'}\n` +
`*Fecha:* ${form.value.date}\n` +
`*Hora:* ${form.value.time}\n` +
(form.value.notes ? `*Motivo de consulta:* ${form.value.notes}` : '')

const encodedText = encodeURIComponent(message)
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`
window.open(whatsappUrl, '_blank')
}
</script>
<template>
<div class="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
<form @submit.prevent="sendToWhatsApp" class="space-y-4">
<div>
<label class="block text-sm font-semibold text-slate-700">Nombre Completo</label>
<input v-model="form.fullName" type="text" required class="mt-1 w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" placeholder="Juan Pérez" />
</div>
<div>
<label class="block text-sm font-semibold text-slate-700">Número de Teléfono</label>
<input v-model="form.phone" type="tel" required class="mt-1 w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500" placeholder="7777-7777" />
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label class="block text-sm font-semibold text-slate-700">Servicio Requerido</label>
<select v-model="form.service" required class="mt-1 w-full p-2.5 border border-slate-200 rounded-lg bg-white">
<option value="" disabled>Seleccione servicio</option>
<option v-for="srv in services" :key="srv" :value="srv">{{ srv }}</option>
</select>
</div>
<div>
<label class="block text-sm font-semibold text-slate-700">Especialista Preferido</label>
<select v-model="form.specialist" class="mt-1 w-full p-2.5 border border-slate-200 rounded-lg bg-white">
<option value="">Cualquier especialista</option>
<option v-for="spec in specialists" :key="spec" :value="spec">{{ spec }}</option>
</select>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label class="block text-sm font-semibold text-slate-700">Fecha de la Cita</label>
<input v-model="form.date" type="date" required class="mt-1 w-full p-2.5 border border-slate-200 rounded-lg" />
</div>
<div>
<label class="block text-sm font-semibold text-slate-700">Hora sugerida</label>
<input v-model="form.time" type="time" required class="mt-1 w-full p-2.5 border border-slate-200 rounded-lg" />
</div>
</div>
<div>
<label class="block text-sm font-semibold text-slate-700">Notas o Motivo de Consulta</label>
<textarea v-model="form.notes" rows="3" class="mt-1 w-full p-2.5 border border-slate-200 rounded-lg" placeholder="Breve descripción del dolor o lesión..."></textarea>
</div>
<button type="submit" class="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg shadow-sm transition-colors text-center">
Solicitar Cita vía WhatsApp
</button>
</form>
</div>
</template>