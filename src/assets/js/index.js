import '../css/main.scss';
import '../../../node_modules/fullpage.js/dist/fullpage.css';
import fullpage from 'fullpage.js';

new fullpage('#fullpage', {
  autoscroll: true,
  navigation: true,
  verticalCentered: false,
});
