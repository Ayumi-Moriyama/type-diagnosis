<template>
  <v-container>
    <h1>診断項目</h1>

    <v-card class="mb-4">
      <v-card-title>性別</v-card-title>
      <v-card-text>
        <v-radio-group v-model="store.gender" @change="store.getDiagnosisResult" class="custom-radio-group">
          <v-radio label="男性" value="male" class="custom-radio"></v-radio>
          <v-radio label="女性" value="female" class="custom-radio"></v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>

    <v-card class="mb-4">
      <v-card-title>季節</v-card-title>
      <v-card-text>
        <v-radio-group v-model="store.season" @change="store.getDiagnosisResult" class="custom-radio-group">
          <v-radio label="春" value="spring" class="custom-radio"></v-radio>
          <v-radio label="夏" value="summer" class="custom-radio"></v-radio>
          <v-radio label="秋" value="autumn" class="custom-radio"></v-radio>
          <v-radio label="冬" value="winter" class="custom-radio"></v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>

    <v-card class="mb-4">
      <v-card-title>血液型</v-card-title>
      <v-card-text>
        <v-radio-group v-model="store.bloodType" @change="store.getDiagnosisResult" class="custom-radio-group">
          <v-radio label="A型" value="a" class="custom-radio"></v-radio>
          <v-radio label="B型" value="b" class="custom-radio"></v-radio>
          <v-radio label="O型" value="o" class="custom-radio"></v-radio>
          <v-radio label="AB型" value="ab" class="custom-radio"></v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>

    <v-btn @click="submit" color="primary">結果を表示</v-btn>
  </v-container>
</template>

<script setup>
import { useDiagnosisStore } from '../stores/diagnosis'
import { useRouter } from 'vue-router'

const store = useDiagnosisStore()
const router = useRouter()


const submit = () => {
      store.getDiagnosisResult()  // 選択に基づいて診断結果を算出
      router.push('/result')
    }

</script>

<style scoped>
/* ラジオボタンの外枠 */
.custom-radio :deep(.v-selection-control__input) {
  border: 2px solid gray; /* 未選択時の枠線 */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
}

/* 選択されたときの枠線を黒に変更 */
.custom-radio :deep(.v-selection-control--dirty) .v-selection-control__input {
  border: 2px solid black !important;
}

/* Vuetify の内部要素（黒丸）をカスタマイズ */
.custom-radio :deep(.v-selection-control--dirty) .v-selection-control__input {
  background-color: black !important; /* 内部の色を黒に */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 黒丸のサイズ調整 */
.custom-radio :deep(.v-selection-control--dirty) .v-selection-control__input::after {
  content: '';
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  display: block;
}
</style>