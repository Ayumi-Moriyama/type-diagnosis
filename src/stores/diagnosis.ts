import { ref } from 'vue'
import { defineStore } from 'pinia'
import diagnosisData from '@/assets/diagnosisData.json'

export const useDiagnosisStore = defineStore('diagnosis', () => {
    const gender = ref('')
    const season = ref('')
    const bloodType = ref('')
    const diagnosisResult = ref<{ type?: string; description?: string }>({})

    const getDiagnosisResult = () => {
        console.log('gender:', gender.value)
        console.log('season:', season.value)
        console.log('bloodType:', bloodType.value)
        const result = diagnosisData.find(item =>
            item.gender === gender.value &&
            item.season === season.value &&
            item.bloodType === bloodType.value
        )
        diagnosisResult.value = result ? result : { type: '診断結果が見つかりません' }
    }

    return { gender, season, bloodType, diagnosisResult, getDiagnosisResult }
})