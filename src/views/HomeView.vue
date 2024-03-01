<script setup>
import { ref } from 'vue';
import FakeLoad from '@/components/fakeLoad.vue'

const showSkeleton = ref(true);

const progressCompleted = () => {
  showSkeleton.value = false
};

const projects = ref([
  {
    imgUrl: "https://i.imgur.com/RH88vJE.png",
    title: "SSR Quasar Datatable",
    subtitle: "Tabla diseñada con Quasar Framework con filtrado avanzado y anidamiento, utilizada en un proyecto de gestion de cartera para productores de seguros.",
    codeLink: "https://github.com/D-Maledicte/table-built-in-quasar",
    demoLink: "https://d-maledicte.github.io/table-built-in-quasar/",
    composition: [
    { label: 'Vue.js', color: '#34d399', value: 60 },
    { label: 'Quasar', color: '#60a5fa', value: 25 },
    { label: 'Material Design', color: '#fbbf24', value: 5 },
    { label: 'Wordpress', color: '#37404c', value: 10 }]
  },
  {
    imgUrl: "https://i.imgur.com/9YlRv8x.png",
    title: "FUT Calculator 2024 Edition",
    subtitle: "WebApp para el modo de juego de FUT Champions de EA FC orientada a realizar un seguimiento del score del usuario y sus recompensas",
    codeLink: "https://github.com/D-Maledicte/fut-calculator-2024",
    demoLink: "https://d-maledicte.github.io/fut-calculator-2024/#/",
    composition: [
    { label: 'Vue.js', color: '#34d399', value: 60 },
    { label: 'Quasar', color: '#60a5fa', value: 30 },
    { label: 'Material Icons', color: '#fbbf24', value: 5 },
    { label: 'VueRouter', color: '#37404c', value: 5 }]
  }
]);

const skills = ref([
  {
    label: 'Back-End',
    elements: ['PHP', 'Node.js', 'Express.js', 'Postgres', 'MongoDB', 'Deluge'],
    icon: 'dns'
  },
  {
    label: 'Front-End',
    elements: ['JavaScript', 'Vue.js', 'Pinia', 'VueRouter', 'vueI18n', 'Quasar Framework', 'PrimeVue',  'Tailwind', 'PHP'],
    icon: 'desktop_windows'
  },
  {
    label: 'Soft Skills',
    elements: [0,1,2,3,4,5],
    icon: 'face'
  }
]);

//no hay clase//menos de 576 es smartphone
//sm//entre 576 y 770 es tablet
//md//entre 770 y 990 es notebook
//lg//entre 990 y 1200 es monitor chico
//xl//arriba de 1200 es tamaño decente y respetable
</script>

<template>
  <main class="flex flex-column justify-content-around">
    <template v-if="showSkeleton">
      
      <!-- <div class="card w-3">
        <ProgressBar :mode="barState" :value="loadingValue"></ProgressBar>
      </div> -->
      <FakeLoad @progressCompleted="progressCompleted"></FakeLoad>
    </template>
    <template v-else>
      <ScrollPanel class="xl:w-8 lg:w-10 w-full h-full">
        <div class="flex flex-column justify-content-between gap-6">
          <Panel class="bg-white-alpha-10 panel stickypanel" toggleable>
          <template #header>
            <div class="w-full">
              <div class="flex flex-row align-items-center justify-content-between gap-2 w-full">
                <div class="flex flew-row align-items-center xl:w-2">
                  <i class="pi pi-hashtag m-2 text-xl text-primary"/>
                  <span class="font-bold sm:text-3xl text-xl">{{$t('homeView.aboutMe')}}</span>
                </div>
                <router-link  to="about">
                  <Button :label="$t('homeView.learnMore') + ' =>'" icon="pi pi-user" rounded text class="w-full" ></Button>
                </router-link> 
            </div>
            </div>
          </template>
          <div class="flex sm:flex-row flex-column justify-content-between">
              <div class="sm:w-7 sm:mt-0 mt-2 flex align-items-center">
                <Fieldset >
                  <template #legend>
                    <div class="flex align-items-center pl-2">
                        <Avatar image="https://i.imgur.com/S8mPEMX.png" shape="circle" /> 
                        <span class="font-bold">DMaledicte</span>
                    </div>
                  </template>
                  <p class="h-auto border-round transition-ease-out transition-duration-100 hover:bg-primary-reverse hover:text-gray-900">{{ $t('homeView.parrafo1') }}</p>
                  <p class="h-auto border-round transition-ease-out transition-duration-100 hover:bg-primary-reverse hover:text-gray-900">
                    {{ $t('homeView.parrafo2') }}
                  </p>
                  <p class="h-auto border-round transition-ease-out transition-duration-100 hover:bg-primary-reverse hover:text-gray-900">
                    {{ $t('homeView.parrafo3') }}
                  </p>
                </Fieldset>
              </div>
              <div class="flex flex-row justify-content-center sm:w-5 ">
                <Image alt="Image">
                  <template #image>
                      <img src="/src/assets/ProfilePïc.png" alt="image" class="h-30rem"/>
                  </template>
              </Image>
              </div>
          </div>
        </Panel>
        <Panel class="bg-white-alpha-10 panel stickypanel" toggleable collapsed>
          <template #header>
              <div class="flex flex-row align-items-center justify-content-between gap-2 w-full">
              <div class="flex flew-row align-items-center xl:w-2">
                  <i class="pi pi-hashtag m-2 text-xl text-primary"/>
                  <span class="font-bold sm:text-3xl text-xl">{{ $t('homeView.projects') }}</span>
              </div>   
              <router-link  to="projects">
                  <Button :label="$t('homeView.learnMore') + ' =>'" icon="pi pi-user" rounded text class="w-full"></Button>
                </router-link>
            </div>
          </template>
          <div class="md:p-5 md:mt-0 mt-2 flex md:flex-row flex-column sm:align-items-center justify-content-center gap-4">
            <template v-for="(project, index) in projects" :key="project.label">
              <Card class="w-25rem projectPanel overflow-hidden">
              <template #header>
                <Image alt="Image" preview>
                  <template #image>
                      <img :src="project.imgUrl" alt="image" class="h-9rem w-full"/>
                  </template>
                  <template #preview="slotProps">
                      <img :src="project.imgUrl" alt="preview" :style="slotProps.style" @click="slotProps.previewCallback" />
                  </template>
                </Image>
              </template>
              <template #title>{{ project.title }}</template>
              <template #subtitle>
                <p class="">
                  {{ $t(`homeView.mainprojects[${index}]`) }}
                </p>
              </template>
              <template #content>
                  <p class="">
                      <MeterGroup :value="project.composition" />
                  </p>
              </template>
              <template #footer>
                  <div class="flex gap-3 mt-1">
                    <a :to="project.codeLink" :href="project.codeLink" target="_blank">
                      <Button icon="pi pi-code" label="Codigo" severity="secondary" outlined class="w-full" />
                    </a>
                    <a :to="project.demoLink" :href="project.demoLink" target="_blank">
                      <Button icon="pi-external-link" label="Demo" severity="secondary" outlined class="w-full" />
                    </a>
                  </div>
              </template>
            </Card>
            </template>
          </div>
        </Panel>
        <Panel class="bg-white-alpha-10 panel stickypanel" toggleable collapsed>
          <template #header>
            <div class="flex flex-row align-items-center justify-content-between gap-2 w-full">
              <div class="flex flew-row align-items-center xl:w-2">
                  <i class="pi pi-hashtag m-2 text-xl text-primary"/>
                  <span class="font-bold sm:text-3xl text-xl">{{ $t('homeView.skills') }}</span>
              </div>
              <router-link  to="contact">
                <Button :label="$t('homeView.learnMore') + ' =>'" icon="pi pi-user" rounded text class="w-full"></Button>
              </router-link> 
            </div>
          </template>
          <div class="md:p-4 flex md:flex-row md:mt-0 mt-2 flex-column sm:align-items-center md:gap-4">
            <template v-for="(item, index) in skills" :key="item.label">
              <Panel class="md:w-4 sm:w-9 md:h-25rem">
                <template #header>
                  <div class="flex align-items-center justify-content-center w-full gap-2">
                      <span class="material-icons text-primary">{{ item.icon }}</span>
                      <span class="font-bold">{{item.label}}</span>
                      
                  </div>
                  <Divider class="m-0"/>
                </template>
                <div class="flex flex-column align-items-center justify-content-center mt-2">
                  <template v-for="(element, elementIndex) in item.elements" :key="element">
                    <p class="m-2 transition-ease-out transition-duration-100 hover:bg-primary-reverse hover:text-gray-900">
                      {{ item.label == 'Soft Skills'? $t(`homeView.softSkills[${element}]`) : element }}
                    </p>
                    <template v-if="elementIndex + 1 !== item.elements.length">
                      <Divider class="m-0"/>
                    </template>
                  </template>
                </div>
              </Panel>
              <template v-if="index + 1 !== skills.length">
                <Divider layout="vertical" />
              </template>
            </template>
          </div>
        </Panel>
        </div>  
      </ScrollPanel>
    </template>   
  </main>
</template>

<style scoped>
:deep(.stickypanel > .p-panel-header) {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: rgba(0,0,0,1) !important;
}
:deep(.p-panel .p-panel-content) {
  padding: 0 1.125rem 0.50rem 1.125rem;
}

:deep(.p-card-body .p-card-caption) {
  height: 130px;
}

:deep(.p-card-body .p-card-content) {
  height: 130px;
}

:deep(.p-card) {
  transition: transform 0.7s ease;
}

:deep(.p-card:hover) {
  transform: scale(1.05);
}

.panel {
  height: auto;
}

.projectPanel {
  min-height: 550px;
}

.stickyPanel{
  height: 2px;
}
</style>
