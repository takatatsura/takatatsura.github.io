<template>
  <div class="about-background">
    <v-container class="fill-height about-main">
      <div class="about-wrap">
        <div class="name">
          Rafael Takagi
        </div>
        <div class="about">
          {{ $t("common.aboutText") }}
        </div>
      </div>
    </v-container>
    <div ref="animeContainer" class="anime-container">
      <div class="bar bar1"></div>
      <div class="ball"></div>
      <div class="bar bar2"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import anime from 'animejs/lib/anime.es.js';
import { onMounted, ref } from 'vue';

let loop = true;
let easing = 'linear';
let direction = 'alternate';
const animeContainer = ref<HTMLElement>()

onMounted(() => {
  const animeContainerWidth = animeContainer.value?.clientWidth ? animeContainer.value?.clientWidth - 40 : 0
  anime({
    targets: '.ball',
    translateX: animeContainerWidth,
    translateY: 100,
    easing,
    loop,
    direction,
    background: [
      { value: '#573796' },
      { value: '#FB89FB' },
      { value: '#FBF38C' },
      { value: '#18FF92' },
      { value: '#5A87FF' }
    ]
  })
  let ballTimeline = anime.timeline({ loop, direction })
  let bar2Timeline = anime.timeline({ loop, direction })
  let bar1Timeline = anime.timeline({ loop, direction })
  ballTimeline.add({
    targets: '.ball',
    translateY: 200,
    translateX: animeContainerWidth,
    easing
  }).add({
    targets: '.ball',
    translateY: 0,
    translateX: 5,
    easing
  }).add({
    targets: '.ball',
    translateY: '-160',
    translateX: animeContainerWidth,
    easing
  })

  bar2Timeline.add({
    targets: '.bar2',
    translateY: 200,
    easing,
    background: '#573796'
  }).add({
    targets: '.bar2',
    translateY: 0,
    easing,
    background: '#FB89FB'
  }).add({
    targets: '.bar2',
    translateY: '-200',
    easing,
    background: '#FBF38C'
  })

  bar1Timeline.add({
    targets: '.bar1',
    translateY: '-160',
    easing,
    background: '#18FF92'
  }).add({
    targets: '.bar1',
    translateY: 10,
    easing,
    background: '#5A87FF'
  }).add({
    targets: '.bar1',
    translateY: 120,
    easing,
    background: '#FF1461'
  })
})
</script>
<style scoped lang="scss">
.about-background {
  background: #000000;
  height: 100%;
  width: 100%;
}

.about-main {
  background: #ffffff50;
  position: absolute;
  z-index: 1;
}

.about-wrap {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 100px 0;
  width: 60%;
  margin: 15vh 20%;
  color: #fff;
}

.about-wrap .name {
  font-size: 60px;
  width: 40%;
  word-spacing: 9999px;
  text-align: right;
  padding-right: 10px;
  border-right: 5px solid #fff;
  line-height: 95%;
}

.about-wrap .about {
  font-size: 32px;
  padding-left: 10px;
  padding-top: 18px;
  width: 60%;
  text-align: left;
  text-wrap: wrap;
}

.anime-container {
  position: absolute;
  background: #000000;
  // width: 10px;
  // height: 100px;
  z-index: 0;
  width: 60%;
  margin: 40vh 15%;
  height: 20vh;
  // display: inline-block;
  // transform: translateY(200px);
}

.bar {
  background: #FFFFFF;
  width: 20px;
  height: 200px;
}

.bar1 {
  float: left;
}

.bar2 {
  float: right;
}

.ball {
  background: #FFFFFF;
  width: 20px;
  height: 20px;
  position: relative;
  top: 45px;
  left: 10px;
}
</style>