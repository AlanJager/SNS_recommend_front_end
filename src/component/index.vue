<template>
  <div id="index">
    <h1>I am a title.</h1>
    <p> written <a class='author' href="https://github.com/AlanJager">{{ author_1 }}</a> &  <a class='author' href="https://github.com/ywcmaike">{{ author_2 }}</a> </p>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      author_1: "By AlanJager",
      author_2: "ywcmaike"
    }
  }
}
</script>

<style>
.author {
  color: #4090e5
}
</style>
