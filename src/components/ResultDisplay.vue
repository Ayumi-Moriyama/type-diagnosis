<template>
  <v-card v-if="store.diagnosisResult">
    <v-card-title>あなたのタイプ：{{ store.diagnosisResult.type }}</v-card-title>
    <v-card-text>タイプ説明：{{ store.diagnosisResult.description }}</v-card-text>
  </v-card>
    <v-card v-else>
    <v-card-title>診断結果がありません</v-card-title>
  </v-card>
  <v-btn to="/" color="primary">ホームへ戻る</v-btn>
</template>

<script setup>
import { useDiagnosisStore } from '@/stores/diagnosis';
const store = useDiagnosisStore();
</script>