<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const emit = defineEmits(['progressCompleted']);
const barState = ref('indeterminate');
const loading = ref(0);
const interval = ref();
const welcomeMessage = computed(() => {
  if (loading.value <= 5) {
    return t('greeting[0]')
  } else if (loading.value > 5 && loading.value <= 25) {
    return t('greeting[1]')
  } else if (loading.value > 25 && loading.value <= 50) {
    return t('greeting[2]')
  } else if (loading.value > 50 && loading.value <= 75) {
    return t('greeting[3]')
  } else {
    return t('greeting[4]')
  }
})
//Seteo
onMounted(() => {
    lazyload()
});

onBeforeUnmount(() => {
    endProgress(true);
});
//Funciones
const lazyload = () => {
  setTimeout(() => {
    barState.value = 'determinate'
    startProgress();
  }, 2000)
}

const startProgress = () => {
    interval.value = setInterval(() => {
        let newValue = loading.value + Math.max(Math.floor(Math.random() * 10) + 1, 10);
        if (newValue >= 100) {
            newValue = 100;
            emit('progressCompleted');
            endProgress(false)
        }
        loading.value = newValue;
    }, 1000);
};
const endProgress = (unmount) => {
    clearInterval(interval.value);
    if(unmount) {
      interval.value = null;
    }
    
};

</script>

<template>
      <div class="card lg:w-5 w-8 flex flex-column gap-4 align-items-center">
        <div class="scalein animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3">
          {{ welcomeMessage }}
        </div>
        <ProgressBar :mode="barState" :value="loading" class="lg:w-5 w-full"></ProgressBar>
        <Button :label="$t('greeting2')" severity="contrast" outlined @click="emit('progressCompleted')" class="lg:w-5 w-full"/>
      </div>
</template>

