import { createApp } from 'vue';
import App from './App.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

library.add(faPaperclip);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
