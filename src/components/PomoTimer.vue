<template>
  <div class="container">
    <h2>ポモドーロタイマー</h2>
    <div id="timer">{{ pomoTime.formattedTime.value }}</div>
    <div class="controls">
      <button @click="pomoTime.startTimer" :disabled="pomoTime.isRunning.value" id="start">スタート</button>
      <button id="pause" class="none">ポーズ</button>
      <button id="restart" class="none">再開</button>
      <button @click="pomoTime.resetTimer" id="reset" class="none">リセット</button>
    </div>

    <div class="status">ポモドーロカウント</div>
    <div class="status" id="pomo-count">{{ pomoTime.pomoCount.value }}</div>
  </div>
</template>

<script setup>
import { usePomodoroTimer } from '../composables/timer';

const pomoTime = usePomodoroTimer(1,0.5);
</script>