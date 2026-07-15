<template>
  <div>

    <!-- Hero -->
    <section class="relative w-full pt-40 pb-20 lg:pt-52 lg:pb-28" style="background-color: #F5F2EC;">
      <div class="mx-auto max-w-screen-xl px-6 lg:px-12">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-span-12 lg:col-span-7">
            <p class="font-sans text-xs uppercase tracking-[0.3em] text-stone-400 mb-6">
              Contatto
            </p>
            <h1
              class="font-serif text-stone-900 leading-none tracking-tight mb-8"
              style="font-size: clamp(3rem, 7vw, 7rem);"
            >
              Parliamo<br /><em class="not-italic text-stone-400">del tuo progetto.</em>
            </h1>
            <p class="font-sans text-base lg:text-lg leading-relaxed text-stone-600 font-light max-w-md">
              Ogni storia merita di essere raccontata con cura. Scrivimi per raccontarmi la tua.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Form -->
    <section class="w-full py-20 lg:py-28" style="background-color: #F5F2EC;">
      <div class="mx-auto max-w-screen-xl px-6 lg:px-12">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-span-12 lg:col-start-2 lg:col-span-7 xl:col-start-2 xl:col-span-6">

            <form
              class="space-y-10"
              novalidate
              @submit.prevent="handleSubmit"
            >
              <!-- Name + Email -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div class="field-group">
                  <label for="name" class="field-label">Nome *</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    autocomplete="name"
                    required
                    class="field-input"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div class="field-group">
                  <label for="email" class="field-label">Email *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    required
                    class="field-input"
                    placeholder="La tua email"
                  />
                </div>
              </div>

              <!-- Phone + Service -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div class="field-group">
                  <label for="phone" class="field-label">Telefono</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    name="phone"
                    autocomplete="tel"
                    class="field-input"
                    placeholder="+39 000 000 0000"
                  />
                </div>
                <div class="field-group">
                  <label for="service" class="field-label">Servizio di interesse</label>
                  <select
                    id="service"
                    v-model="form.service"
                    name="service"
                    class="field-input"
                  >
                    <option value="" disabled>Seleziona un servizio</option>
                    <option v-for="s in services" :key="s.id" :value="s.title">
                      {{ s.title }}
                    </option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>
              </div>

              <!-- Message -->
              <div class="field-group">
                <label for="message" class="field-label">Messaggio *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  rows="6"
                  required
                  class="field-input resize-none"
                  placeholder="Raccontami la tua storia, il momento che vuoi immortalare..."
                />
              </div>

              <!-- Submit -->
              <div class="pt-2">
                <button
                  type="submit"
                  :disabled="submitting"
                  class="inline-block font-sans text-xs uppercase tracking-[0.3em] text-[#262624]
                         border border-[#262624] px-12 py-4
                         hover:bg-[#262624] hover:text-[#F5F2EC]
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition-all duration-500"
                >
                  {{ submitting ? 'Invio in corso...' : 'Invia messaggio' }}
                </button>

                <p v-if="submitted" class="mt-6 font-sans text-sm text-stone-600 font-light" role="status">
                  ✓ Messaggio inviato. Ti rispondo entro 24 ore.
                </p>
                <p v-if="error" class="mt-6 font-sans text-sm text-red-600 font-light" role="alert">
                  Si è verificato un errore. Riprova o scrivimi direttamente.
                </p>
              </div>
            </form>

          </div>

          <!-- Sidebar info -->
          <aside class="col-span-12 lg:col-start-10 lg:col-span-3 mt-16 lg:mt-0 lg:pt-4">
            <div class="space-y-10">
              <div>
                <p class="font-sans text-xs uppercase tracking-[0.3em] text-stone-400 mb-4">Email</p>
                <a
                  href="mailto:valentinacomettifotografa@outlook.it"
                  class="font-sans text-sm text-stone-700 hover:text-stone-900 transition-colors duration-300 break-all"
                >
                  valentinacomettifotografa@outlook.it
                </a>
              </div>
              <div>
                <p class="font-sans text-xs uppercase tracking-[0.3em] text-stone-400 mb-4">Studio</p>
                <p class="font-sans text-sm text-stone-700 font-light leading-relaxed">
                  Bergamo, Lombardia<br />Disponibile in tutta Italia
                </p>
              </div>
              <div>
                <p class="font-sans text-xs uppercase tracking-[0.3em] text-stone-400 mb-4">Instagram</p>
                <a
                  href="https://www.instagram.com/by.mothernature.fotografie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-sans text-sm text-stone-700 hover:text-stone-900 transition-colors duration-300"
                >
                  @by.mothernature.fotografie
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <SiteFooter />

  </div>
</template>

<script setup lang="ts">
import { useServices } from '~/composables/useServices'

useHead({ title: 'Contatto — Valentina Cometti' })

const { services } = useServices()

const form = reactive({
  name:    '',
  email:   '',
  phone:   '',
  service: '',
  message: '',
})

const submitting = ref(false)
const submitted  = ref(false)
const error      = ref(false)

async function handleSubmit() {
  if (!form.name || !form.email || !form.message) return

  submitting.value = true
  error.value      = false

  try {
    // Replace with actual form submission endpoint
    await new Promise(resolve => setTimeout(resolve, 800))
    submitted.value = true
    Object.assign(form, { name: '', email: '', phone: '', service: '', message: '' })
  } catch {
    error.value = true
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #78716c; /* stone-500 */
}

.field-input {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  color: #262624;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d6d3d1; /* stone-300 */
  padding: 0.75rem 0;
  width: 100%;
  outline: none;
  transition: border-color 0.3s;
  -webkit-appearance: none;
  border-radius: 0;
}

.field-input::placeholder {
  color: #a8a29e; /* stone-400 */
}

.field-input:focus {
  border-bottom-color: #262624;
}

select.field-input {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%23262624' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.25rem center;
  padding-right: 1.5rem;
}
</style>
