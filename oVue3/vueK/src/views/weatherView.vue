<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getCity, getThreeWeather} from "@/api/weather.ts";

const cityInfo = ref([])
const threeWeatherInfo = ref([])


const getCityInfo = async () => {
  const res = await getCity()
  cityInfo.value = res.location
}

const getThreeWeatherInfo = async () => {
  const res = await getThreeWeather()
  threeWeatherInfo.value = res.daily
}


onMounted(async () => {
  await getCityInfo()
  await getThreeWeatherInfo()
})
</script>

<template>
  <h2>和风天气</h2>
  <h3>地址：{{ cityInfo[0]?.country }} {{ cityInfo[0]?.adm1 }} {{ cityInfo[0]?.adm2 }} {{ cityInfo[0]?.name }}</h3>
  <h4>天气信息: </h4>
  <div class="weather" v-for="(item,index) in threeWeatherInfo" :key="index">
    <div class="date">日期: {{ item.fxDate }}</div>
    <div>早: {{ item.textDay }}<i :class="'qi-' + item.iconDay"></i></div>
    <div>晚: {{ item.textNight }}<i :class="'qi-' + item.iconNight"></i></div>
  </div>
</template>

<style scoped lang="scss">
.weather {
  margin: 20px 0;
}
</style>
