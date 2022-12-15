import Vue from 'nativescript-vue'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'
import YoutubePlayer from '@triniwiz/nativescript-youtubeplayer/vue';
import PreviousNextView from '@nativescript/iqkeyboardmanager';
import { store } from './store';
Vue.registerElement("PreviousNextView", () => require("@nativescript/iqkeyboardmanager"). PreviousNextView);
Vue.registerElement('TextViewWithHint', () => require('@nativescript/iqkeyboardmanager').TextViewWithHint);
Vue.use(YoutubePlayer);

//import CardView from "@nativescript-cardview";
Vue.registerElement('ImageZoom', () => require('@triniwiz/nativescript-image-zoom').ImageZoom);
Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);

Vue.use(RadSideDrawer)
//Vue.use(CardView)


import App from './components/App'

Vue.config.silent = !__DEV__

new Vue({
  render: h => h(App)
}).$start()
