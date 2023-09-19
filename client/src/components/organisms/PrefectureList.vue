<script lang="ts" setup>
import { onMounted, ref } from "vue"
import axiosInstance from "@/utils/axiosSettings"
import { PrefectureDisplay } from "@/types/prefecture"

// TODO: prefectureで千葉県を表示してみましょう
const prefecture = ref<PrefectureDisplay>({
  prefCode: 1,
  prefName: "千葉県1",
  isCheck: true
})

onMounted(() => {
  // TODO: 全県取得のAPIへリクエストを送ってみましょう!
  const response = axiosInstance.get("")
})

// const check = (bool: boolean) => {
//   prefecture.value.isCheck = !bool
// }
</script>
<template>
  <div class="prefecture-container">
    <h3>都道府県</h3>
    <div class="prefecture-flex">
      <!-- <input type="checkbox" value="" @change="check(prefecture.isCheck)" /> -->
      <!-- <input
        type="checkbox"
        @change="check(($event.target as HTMLInputElement).checked)"
      /> -->

      <!-- <input type="checkbox" :checked="prefecture.isCheck" /> -->
      <input v-model="prefecture.isCheck" type="checkbox" />
      <!-- <h1 v-if="prefecture.isCheck">
        {{ prefecture.isCheck }}
      </h1>
      <h1 v-else-if="!prefecture.isCheck">elseif</h1> -->

      <h1 v-show="prefecture.isCheck">{{ prefecture.isCheck }} show</h1>

      <!-- TODO: 県を表示してみましょう -->
    </div>
  </div>
</template>
<style scoped>
.prefecture-container {
  max-width: 900px;
  width: 100%;
}

.prefecture-flex {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>
