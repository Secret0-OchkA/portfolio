
<script setup lang="ts">

defineProps<{
    lable: string,
    reference: string
}>()
</script>
<template>
    <a :href="reference">
        <div class="btn-three">
            {{lable}}
        </div>
    </a>
</template>

<style scoped>
div{
    width: fit-content;
}

.btn-three {
  font-size: 24px;
  margin-bottom: 12px;
  padding: 0px 8px 3px 8px;

  color: #FFF;
  transition: all 0.5s;
  position: relative;
}

.btn-three:hover{
    color: gray;
}

.btn-three::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  transition: all 0.2s;
  background-color: white;
  transform: scale(1.2,1.2);
  color: gray;
}
.btn-three:hover::after {
  opacity: 1;
  transform: scale(1,1);
}
</style>