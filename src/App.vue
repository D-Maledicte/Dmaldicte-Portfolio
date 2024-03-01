<script setup>
import { ref } from 'vue';
import { RouterLink ,RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const changeLanguage = () => {
  locale.value == 'en' ? locale.value = 'es' : locale.value = 'en'
};

const langValue = ref(locale.value);
const langOptions = ref(['es','en']);

const items = ref([
  {
    label: 'navBar[0]',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'navBar[1]',
    icon: 'pi pi-user',
    route: '/about'
  },
  {
    label: 'navBar[2]',
    icon: 'pi pi-briefcase',
    route: '/projects'
  },
  {
    label: 'navBar[3]',
    icon: 'pi pi-comment',
    route: '/contact'
  },
]);

const stickyItems = ref([
  {
    label: 'LinkedIn',
    icon: 'pi pi-linkedin',
    link: 'https://www.linkedin.com/in/mjmartel/',
    tooltip: 'stickyTooltip'
  },
  {
    label: 'Github',
    icon: 'pi pi-github',
    link: 'https://github.com/D-Maledicte',
    tooltip: 'stickyTooltip'
  },
  {
    label: 'Mail',
    icon: 'pi pi-envelope',
    link: 'mailto:martelmatiasjesus@gmail.com',
    tooltip: 'stickyTooltip'
  }
]);
//no hay clase//menos de 576 es smartphone
//sm//entre 576 y 770 es tablet
//md//entre 770 y 990 es notebook
//lg//entre 990 y 1200 es monitor chico
//xl//arriba de 1200 es tamaño decente y respetable
</script>

<template>
  <div class="flex flex-column align-items-center sm:justify-content-center justify-content-between">
    <div class="hidden lg:flex flex-column justify-content-center align-items-center fixed left-0 px-2 py-4 w-1 font-bold">
      <div class="border-left-2  border-white stickyPanel h-25rem"></div>      
      <div class="flex flex-column">
        <a v-tooltip="$t(`${item.tooltip}[${index}]`)" v-for="(item, index) in stickyItems" :key="item.label" :href="item.link" :to="item.link" target="_blank">
          <i  :class="item.icon"  class="cursor-pointer m-2 text-3xl text-primary sticky-icons"/>
        </a>
      </div>
    </div>
    <header class="flex align-items-center justify-content-center lg:header xl:w-9 w-full md:h-auto">
      <div class="flex flex-row justify-content-between align-items-center w-full ">
        <Card class="lg:w-3 md:w-4 sm:w-5 w-6 flex justify-content-center align-items-center h-3rem hover:text-primary shadow-4 ">
          <template #content><i class="pi pi-qrcode mr-2"/>{{ $t('webName') }}</template>
        </Card>
        <div class="max-w-max xl:w-7 lg:w-7 md:w-3 sm:w-3 w-5 flex justify-content-center hover:text-primary">
          <Menubar :model="items" class="flex justify-content-center w-full">
            <template #item="{ item, props}">
                  <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route"  custom>
                      <a v-ripple :href="href" v-bind="props.action" @click="navigate" >
                          <span :class="item.icon" class="icon" />
                          <span class="hover:text-primary">{{ $t(item.label) }}</span>
                      </a>
                  </router-link>
                  
            </template>
            <template #end>
              <div class="flex align-items-center">
                <SelectButton v-model="langValue" :options="langOptions" @update:modelValue="changeLanguage" aria-labelledby="basic" :allowEmpty=false />
              </div>
            </template>
          </Menubar>
        </div>
      </div>
      
    </header>
    <RouterView class="w-full routerComp xl:mt-3 md:mt-3 sm:mt-2 mt-3 flex align-items-center justify-content-center "/>
    <footer class="xl:footer md:w-full sm:w-full h-5rem sm:mt-0 mt-3 flex sm:flex-row flex-column md:align-items-center sm:align-items-end justify-content-between">
      <div class="flex md:w-7 md:ml-2 sm:flex-row flex-column lg:justify-content-center lg:justify-content-between xl:justify-content-start align-items-center sm:gap-0 gap-1">
        <span class="md:text-base sm:text-xs">
        {{ $t('emailReference')}}
        </span>  
        <a href="mailto:martelmatiasjesus@gmail.com" target="_blank" class="sm:ml-2">
          <Chip class="py-0 pl-0 pr-3 w-full">
            <span class="bg-primary border-circle sm:w-1rem sm:h-1rem w-2rem h-2rem flex align-items-center justify-content-center">M</span>
            <span class="ml-2 md:text-base sm:text-xs font-medium">martelmatiasjesus@gmail.com</span>
          </Chip>
        </a>
      </div>
      <div class="md:w-5 flex sm:justify-content-end justify-content-center sm:align-items-center align-items-end">
        <span class="md:text-base md:mr-2 sm:text-xs">
          DMaledicte©{{$t('copyright')}}
        </span>
      </div>
    </footer>
  </div>
</template>

<style scoped>

.stickyMedia{
  left: 0px;
  top: 0px
}

.stickyPanel{
  width: 1px;
}
.sticky-icons {
  transition: transform 0.7s ease;
}
.sticky-icons:hover {
  transform: scale(1.1);
}
.header {
  height: 10vh;
  /*
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  */
}
.header-section {
  width: 100%;
  /*
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  */
}
.icon {
  margin-right: 1rem;
}

.routerComp {
  min-height: 78vh;
  height: 80vh;
}

.footer {
  height: 10vh;
  /*
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  */
}


</style>
