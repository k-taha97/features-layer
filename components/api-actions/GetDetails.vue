<script setup lang="ts">
import type { GetDetailsProps } from '#imports'

const props = defineProps<GetDetailsProps>()

const {
  data,
  error,
  isLoading,
  refetch,
  goBack,
  enabled,
  hideLoading,
} = useGetDetailsQuery(props)

provide('apiData', data)
provide('refetchApiData', refetch)
</script>

<template>
  <slot v-if="!error?.message && !isLoading || !enabled" :data="data || {}" />

  <div v-if="error?.message" class="mt-5 p-6 text-center border border-red-200 rounded-lg bg-red-50">
    <PrimeIcon name="pi pi-exclamation-triangle" class="text-4xl text-red-500 mb-4" />
    <Paragraph class="text-xl text-red-700 font-semibold mb-2">
      Oops! Something went wrong
    </Paragraph>
    <Paragraph class="text-gray-600 mb-6">
      We encountered an error while loading the data. Please try again or go back.
    </Paragraph>
    <div class="flex gap-4 justify-center">
      <PrimeButton class="base-btn" @click="() => refetch()">
        Try Again
      </PrimeButton>
      <PrimeButton class="outline-btn" @click="goBack">
        Go Back
      </PrimeButton>
    </div>
  </div>

  <div
    v-if="!hideLoading && isLoading"
    class="mt-5 bg-white flex h-full min-h-[70dvh] w-full items-center justify-center"
  >
    <Loader />
  </div>
</template>
