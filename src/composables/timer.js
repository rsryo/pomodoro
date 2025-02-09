import { ref, computed } from "vue";

export const usePomodoroTimer = (pomoTime, restTime) => {
  const workDuration = pomoTime * 60 * 1000;
  const restDuration = restTime * 60 * 1000;

  const timeLeft = ref(workDuration);
  const isRunning = ref(false);
  const isWorkSession = ref(true);
  const pomoCount = ref(0);
  let timer = null;

  const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60000);
    const seconds = Math.floor((timeLeft.value % 60000) / 1000);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  });

  const tick = () => {
    timeLeft.value -= 1000;

    if (timeLeft.value <= 0) {
      clearTimeout(timer);
      isRunning.value = false;

      isWorkSession.value = !isWorkSession.value;
      timeLeft.value = isWorkSession.value ? workDuration : restDuration;
      if(isWorkSession.value) pomoCount.value++;

      startTimer(); // 次のセッションを自動開始
    } else {
      timer = setTimeout(tick, 1000); // 1秒ごとに正確に実行
    }
  };

  const startTimer = () => {
    if (isRunning.value) return;
    isRunning.value = true;
    timer = setTimeout(tick, 1000);
  };

  const resetTimer = () => {
    clearTimeout(timer);
    isRunning.value = false;
    isWorkSession.value = true;
    timeLeft.value = workDuration;
  };

  return {
    formattedTime,
    isRunning,
    pomoCount,
    startTimer,
    resetTimer,
  };
};
