// @ts-ignore I don't know why it says it can't find it, but yet works normally.
const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue',
    };
  },
});

app.mount('#user-goal');
