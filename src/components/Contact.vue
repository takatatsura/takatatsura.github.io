<template>
  <v-container class="fill-height contact-wrapper">
    <div class="contact-main">
      <div class="sobre-mim">
        <table>
          <tr>
            <td><v-icon>mdi-account</v-icon></td>
            <td><span>Rafael Tatsuki Takagi</span></td>
          </tr>

          <tr>
            <td><v-icon>mdi-email</v-icon></td>
            <td><span>rafaelttakagi@hotmail.com</span></td>
          </tr>
        </table>
      </div>
      <div class="social">
        <v-btn size="x-large" icon="mdi-github" href="https://github.com/takatatsura">
        </v-btn>

        <v-btn size="x-large" icon="mdi-linkedin" href="https://www.linkedin.com/in/rafaelttakagi/">
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
//
</script>
<style scoped lang="scss">
.contact-wrapper {
  background: #00000050;
  position: absolute;
  z-index: 1;
}

.contact-main {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 0;
  height: 50%;
  width: 80%;
  margin: 0 10%;
  color: #fff;
}

.sobre-mim {
  width: 60%;
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sobre-mim i {

  width: 22px;
  text-align: center;
}

.sobre-mim tr {
  font-size: 22px;
  height: 50px;
}

.social {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  border-left: 2px solid #fff;
}
</style>
