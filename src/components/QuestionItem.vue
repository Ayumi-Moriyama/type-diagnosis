<template>
  <v-container>
    <h1>診断項目</h1>

    <v-card class="mb-4">
      <v-card-title>性別</v-card-title>
      <v-card-text>
        <v-radio-group v-model="store.gender" @change="store.getDiagnosisResult">
          <v-radio label="男性" value="male"></v-radio>
          <v-radio label="女性" value="female"></v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>

    <v-card class="mb-4">
      <v-card-title>季節</v-card-title>
      <v-card-text>
        <v-radio-group v-model="store.season" @change="store.getDiagnosisResult">
          <v-radio label="春" value="spring"></v-radio>
          <v-radio label="夏" value="summer"></v-radio>
          <v-radio label="秋" value="autumn"></v-radio>
          <v-radio label="冬" value="winter"></v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>

    <v-card class="mb-4">
      <v-card-title>血液型</v-card-title>
      <v-card-text>
        <v-radio-group v-model="store.bloodType" @change="store.getDiagnosisResult">
          <v-radio label="A型" value="a"></v-radio>
          <v-radio label="B型" value="b"></v-radio>
          <v-radio label="O型" value="o"></v-radio>
          <v-radio label="AB型" value="ab"></v-radio>
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