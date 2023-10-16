<template>
  <div ref="home" style="height: 100%;">
    <section ref="target" id="about">
      <About />
    </section>
    <section ref="target" id="projects">
      <Projects />
    </section>
    <section ref="target" id="contact">
      <Contact />
    </section>

  </div>
</template>

<script lang="ts" setup>
import About from '@/components/About.vue';
import Projects from "@/components/Projects.vue"
import Contact from "@/components/Contact.vue"
import { useAppStore } from '@/store/app';
import { ref, onMounted } from 'vue';
import { onUnmounted } from 'vue';
import useIntersectionObserver from "@/composables/useIntersectionObserver"


const home = ref<HTMLElement | null>(null);
let observer = null as IntersectionObserver | null

const store = useAppStore();
const target = ref<HTMLElement[]>([]);


onMounted(() => {
  home.value?.querySelectorAll('section[id]').forEach((section) => {
    if (section) {
      useIntersectionObserver.observeElemement(section as HTMLElement, intersectCallback, { threshold: 0.22 })
    }
  })

})

onUnmounted(() => {
  observer?.disconnect()
})

function intersectCallback(entry: IntersectionObserverEntry) {
  if (entry.isIntersecting) {
    const id = entry.target.getAttribute("id")
    if (id) store.elementObserved = id;
  }

}
</script>
<style scoped> section {
   height: 100%;
 }
</style>