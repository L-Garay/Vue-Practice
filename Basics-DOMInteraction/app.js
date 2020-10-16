// @ts-ignore I don't know why it says it can't find it, but yet works normally.
const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue',
      courseGoalB: 'Quit and give up on life',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
