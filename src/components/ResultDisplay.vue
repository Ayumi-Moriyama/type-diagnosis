<template>
  <div v-if="store.diagnosisResult">
    <h2>あなたのタイプ：{{ store.diagnosisResult.type }}</h2>
    <p>タイプ説明：{{ store.diagnosisResult.description }}</p>
  </div>
    <div v-else>
    <h2>診断結果がありません</h2>
  </div>
  <v-btn to="/" color="primary">ホームへ戻る</v-btn>
</template>

<script setup>
import { useDiagnosisStore } from '@/stores/diagnosis';
const store = useDiagnosisStore();
</script>