<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();


const textArea = ref('');
const mailValue = ref('');
const nameValue = ref('');

const validateFields = () => {
      if (mailValue.value.includes('@') && textArea.value !== '') {
        return true
      } else {
        return false
      }
};

const validarYEnviar = () => {
      if (validateFields()) {
        fetch('https://formspree.io/f/xdoqzjob', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mail: mailValue.value,
            texto: textArea.value,
            name: nameValue.value,
          }),
        })
        .then(response => {
          if (response.ok) {
            // Maneja la respuesta exitosa
            toast.add({severity:'success', summary: 'Muchas gracias', detail: 'Formulario enviado con éxito', group: 'br', life: 3000})
            mailValue.value = ''
            textArea.value = ''
            nameValue.value = ''
          } else {
            // Maneja los errores o la respuesta no exitosa
            toast.add({severity:'Error', summary: 'Lo siento', detail: 'Hubo un error al procesar tu solicitud', group: 'br', life: 3000})
          }
        })
      } else {
        // Manejo de error, por ejemplo, mostrando un mensaje al usuario
        toast.add({severity:'Warn', summary: 'Hubo un problema', detail: 'Por favor, verifica los campos', group: 'br', life: 3000})
      }
};

</script>

<template>
  <main class="flex flex-column justify-content-around">
    <Toast position="bottom-right" group="br"></Toast>
      <ScrollPanel class="lg:w-8 w-full h-full">
        <div class="flex flex-column justify-content-between gap-4">
        <Panel class="bg-white-alpha-10 panel">
          <template #header>
            <div class="flex flex-row align-items-center justify-content-between gap-2 w-full">
              <div class="flex flew-row align-items-center">
                  <i class="pi pi-hashtag m-2 text-xl text-primary"/>
                  <span class="font-bold text-3xl hover:text-primary">{{$t('navBar[3]')}}</span>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="flex flex-row justify-content-around align-items-center md:gap-0 gap-2">
                <a href="https://www.linkedin.com/in/mjmartel/" target="_blank" class="w-auto text-primary no-underline">
                  <Button label="LinkedIn =>" icon="pi pi-linkedin" rounded text class="" outlined />
                </a>
                <a href="https://github.com/D-Maledicte" target="_blank" class="w-auto text-primary no-underline">
                  <Button label="Github =>" icon="pi pi-github" rounded text class="" outlined></Button>
                </a>
                <a href="mailto:martelmatiasjesus@gmail.com" target="_blank" class="w-auto text-primary no-underline">
                  <Button label="Mail" icon="pi pi-envelope" rounded text outlined />
                </a>
              </div>
          </template>
          <Fieldset :legend="$t('contactView.legend')" class="w-full ">
              <div class="w-full p-2 mt-2 flex flex-column gap-4">
                <p>{{$t('contactView.text')}}</p>
                <form @submit.prevent="validarYEnviar" class="w-full flex flex-column md:justify-content-center md:align-items-center gap-4">
                  <FloatLabel>
                    <InputText name="email" id="email" v-model="mailValue" :invalid="mailValue.includes('@') ? false : true"/>
                    <label for="email">{{$t('contactView.mail')}}</label>
                  </FloatLabel>
                  <FloatLabel>
                    <InputText name="name" id="username" type="text" v-model="nameValue"/>
                    <label for="username">{{$t('contactView.name')}}</label>
                  </FloatLabel>
                  <Textarea name="texto" v-model="textArea" rows="5" cols="40" class="md:w-6 w-full" :placeholder="$t('contactView.textAreaPlaceholder')" :invalid="textArea !== '' ? false : true"/>
                  <Button :label="$t('contactView.submit')" type="submit"/>
                </form>
              </div>
            </Fieldset>
        </Panel>
        </div>
        
      </ScrollPanel> 
  </main>
</template>

<style scoped>
:deep(.p-panel .p-panel-content) {
  padding: 0 1.125rem 0.50rem 1.125rem;
}

.panel {
  height: auto;
}

.stickyPanel{
  height: 2px;
}
</style>