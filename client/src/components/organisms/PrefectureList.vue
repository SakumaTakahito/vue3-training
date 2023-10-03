<script lang="ts" setup>
import { computed, onMounted, ref } from "vue"
import PrefectureCheck from "./PrefectureCheck.vue"
import axiosInstance from "@/utils/axiosSettings"
import { PrefectureDisplay } from "@/types/prefecture"
import { PrefectureResponse } from "@/types/api"

// TODO: prefectureで千葉県を表示してみましょう
// const prefecture = ref<PrefectureDisplay>({
//   prefCode: 1,
//   prefName: "千葉県1",
//   isCheck: true
// })

const prefectures = ref<PrefectureDisplay[]>([
  // {
  //   prefCode: 1,
  //   prefName: "千葉県",
  //   isCheck: true
  // },
  // {
  //   prefCode: 2,
  //   prefName: "茨城県",
  //   isCheck: false
  // }
])

const uncheckedList = computed(() => {
  return prefectures.value.filter((x) => x.isCheck)
})

onMounted(async () => {
  // TODO: 全県取得のAPIへリクエストを送ってみましょう!
  const response = await axiosInstance.get<PrefectureResponse>("prefectures")
  prefectures.value = response.data.result.map((x) => {
    return {
      // prefCode: x.prefCode, prefName: x.prefName, isCheck: false
      ...x,
      isCheck: false
    }
  })
})
// const checkEmits = (p: PrefectureDisplay) => {
//   prefectures.value.forEach((x) => {
//     if (x.prefCode === p.prefCode) {
//       x.isCheck = p.isCheck
//     }
//   })
// }

const checkEmits = (p: PrefectureDisplay, index: number) => {
  console.log(index)
  prefectures.value[index].isCheck = p.isCheck
}
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
      <!-- <input v-model="prefecture.isCheck" type="checkbox" /> -->
      <!-- <h1 v-if="prefecture.isCheck">
        {{ prefecture.isCheck }}
      </h1>
      <h1 v-else-if="!prefecture.isCheck">elseif</h1> -->

      <!-- <h1 v-show="prefecture.isCheck">{{ prefecture.isCheck }} show</h1> -->

      <!-- TODO: 県を表示してみましょう -->
      <div v-for="(pref, index) in prefectures" :key="pref.prefCode">
        <!-- <input v-model="pref.isCheck" type="checkbox" /> -->
        <!-- {{ pref.prefName }} -->
        <PrefectureCheck
          :prefecture="pref"
          @check="checkEmits($event, index)"
        ></PrefectureCheck>
        {{ pref.isCheck }}
      </div>
      <!-- <PrefectureCheck :prefecture="prefectures[0]"></PrefectureCheck> -->
      <!-- <ul>
        <li v-for="(pref, index) in uncheckedList" :key="index">
          <input v-model="pref.isCheck" type="checkbox" />
          {{ pref.prefName }}
        </li>
      </ul> -->
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
