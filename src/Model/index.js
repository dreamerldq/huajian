import { observable, action, autorun } from 'mobx';

const indexState = observable({
  timer: 100,
  get computedTimer() {
    return this.timer * 2;
  },
  subTimer: action(function subTimer() {
    this.timer -= 1;
  }),
  addTimer: action(function addTimer() {
    this.timer += 1;
  }),
});
const promiseAddTimer = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
})
  .then((res) => {
    indexState.timer += 1;
  });
indexState.promiseAddTimer = promiseAddTimer;
autorun(() => {
  console.log(
    indexState.timer,
  );
});
export default indexState;
