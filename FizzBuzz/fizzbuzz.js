'use strict';

function start() {
  $('#number-chooser').submit(function() {
    event.preventDefault();
    console.log('submit');
    let numChoice = $('#number-choice').val();
    console.log(numChoice);
    // const output = function() {
    //   for (let i = 0; i < )
    // }
    // $('.js-results').append(output);
  });
  console.log('page loaded');
}

$(start);

{/* <div class="fizz-buzz-item fizz">
  <span>fizz</span>
</div>
<div class="fizz-buzz-item buzz">
  <span>buzz</span>
</div>
<div class="fizz-buzz-item fizzbuzz">
  <span>fizzbuzz</span>
</div> */}