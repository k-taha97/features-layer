<script setup lang="ts">
import noData from '~/assets/images/no-data.png'

const props = defineProps<ListDataProps>()

const {
  data,
  error,
  isFetching,
  isRenderData,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  refetch,
} = useListDataQuery(props)
</script>

<template>
  <div
    v-if="error"
    class="mt-12 p-10 text-center border border-gray-200 rounded-md flex flex-col gap-4 h-fit items-center justify-center"
  >
    <PrimeImage :src="props.noDataImageSrc || noData" alt="Error" image-class="rounded-md h-52 w-52" class="rounded-md h-52 w-52 object-contain drop-shadow-md" />
    <Paragraph class="text-xl text-red-500 font-bold">
      {{ (error as IGenericObject)?.response?.data?.[0]?.description || 'Something went wrong!' }}
    </Paragraph>
  </div>

  <template v-if="isFetching && !(error as IGenericObject)?.response">
    <slot name="loader" />
  </template>

  <slot
    v-if="isRenderData" :data="data.value" :actions="{
      fetchNextPage, isLoading: isFetching || isFetchingNextPage, hasNextPage, refetch,
    }"
  />
</template>
