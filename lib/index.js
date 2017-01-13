const $ = require('jquery');
import iqTest from './bob-iq-test';

require("./styles.scss");

$('.q1-submit-button').on("click", () => {
  $('.q1-solution').text(iqTest($('.q1-input').val()));
  });
