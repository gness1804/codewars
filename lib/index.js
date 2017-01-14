const $ = require('jquery');
import iqTest from './bob-iq-test';
import moveZeroes from './move-zeroes';

require("./styles.scss");

$('.q1-submit-button').on("click", () => {
  $('.q1-solution').text(iqTest($('.q1-input').val()));
  });

$('.q2-submit-button').on("click", () => {
  $('.q2-solution').text(moveZeroes($('.q2-input').val()));
  });
