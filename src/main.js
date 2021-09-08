// import Vue from 'vue'
// import App from './App.vue'
// Vue.config.productionTip = false

/*Vue单文件组件*/
import demo from "./demo.vue";
console.log(demo); // 会把 template 自动转为 render
console.log(demo.render.toString()); // 不完整版本的代码写法
new Vue({
    el: "#app",
    render(createElement) {
        const h = createElement;
        return h(demo);
    },
});

/*Vue完整版template的写法*/
// new Vue({
//     el: "#app",
//     template: `
//       <div id="app">{{n}}</div>
//     `,
//     data: {
//         n: 0,
//     },
// });

/*Vue不完整版的写法*/
// new Vue({
//     el: "#app",
//     render(h) {
//         return h("div", [this.n, h("button", { on: { click: this.add } }, "+1")]);
//     },
//     data: {
//         n: 0,
//     },
//     methods: {
//         add() {
//             this.n += 1;
//         },
//     },
// });
