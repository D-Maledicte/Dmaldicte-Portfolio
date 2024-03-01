<script setup>


</script>

<template>
  <main class="flex flex-column justify-content-around">
      <ScrollPanel class="xl:w-8 lg:w-10 w-full h-full">
        <div class="flex flex-column justify-content-between gap-4">
        <Panel class="bg-white-alpha-10 panel">
          <template #header>
            <div class="flex flex-row align-items-center justify-content-between gap-2 w-full">
              <div class="flex flew-row align-items-center">
                  <i class="pi pi-hashtag m-2 text-xl text-primary"/>
                  <span class="font-bold text-3xl">{{$t('navBar[2]')}}</span>
              </div>
            </div>
          </template>
          <div class="flex md:flex-row flex-column justify-content-center align-items-center">
            <div class="xl:w-4 sm:mt-0 mt-2 flex align-items-center">
                <Fieldset >
                  <template #legend>
                    <div class="flex align-items-center pl-2">
                        <Avatar image="https://i.imgur.com/S8mPEMX.png" shape="circle" /> 
                        <span class="font-bold">DMaledicte</span>
                    </div>
                  </template>
                  <p class="h-auto border-round transition-ease-out transition-duration-100 hover:bg-primary-reverse hover:text-gray-900 text-3xl">{{ $t('comingSoon') }}</p>
                </Fieldset>
            </div>
            <div class="flex flex-row justify-content-center md:w-5">
                <Image alt="Image">
                  <template #image>
                      <img src="/src/assets/coming-soon.png" alt="image" class="md:h-30rem h-20rem"/>
                  </template>
              </Image>
            </div>
          </div>
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