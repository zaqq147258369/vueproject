<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TarBar"
}
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 2px rgba(1,2,3,0.2);
  }

</style>