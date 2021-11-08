document.addEventListener('DOMContentLoaded', function () {
  let Timer = function (saleStartTime, saleEndTime, endMessage, outputDestination) {
    this.saleStartTime = saleStartTime;
    this.saleEndTime = saleEndTime;
    this.endMessage = endMessage;
    this.outputDestination = outputDestination;
  };

  Timer.prototype.countDown = function () {
    let saleStartTime = new Date(this.saleStartTime);
    let saleEndTime = new Date(this.saleEndTime);
    let oneDay = 24 * 60 * 60 * 1000;
    let countDownTimer = document.getElementById(this.outputDestination);
    let endMessage = this.endMessage;
    let currentTimeCD = new Date();
    let untilStartTime = new Date();
    let untilFinishTime = new Date();
    let d = 0;
    let h = 0;
    let m = 0;
    let s = 0;

    setInterval(calculateTime, 500);

    function calculateTime() {
      currentTimeCD = new Date();
      untilStartTime = saleStartTime - currentTimeCD;
      untilFinishTime = saleEndTime - currentTimeCD;

      // if (currentTimeCD < saleStartTime) {
      //   d = Math.floor(untilStartTime / oneDay);
      //   h = Math.floor((untilStartTime % oneDay) / (60 * 60 * 1000));
      //   m = Math.floor((untilStartTime % oneDay) / (60 * 1000)) % 60;
      //   s = Math.floor((untilStartTime % oneDay) / 1000) % 60 % 60;
      // } else {
        d = Math.floor(untilFinishTime / oneDay);
        h = Math.floor((untilFinishTime % oneDay) / (60 * 60 * 1000));
        m = Math.floor((untilFinishTime % oneDay) / (60 * 1000)) % 60;
        s = Math.floor((untilFinishTime % oneDay) / 1000) % 60 % 60;
      // }

      showTime();
    }

    function showTime() {
      // if (currentTimeCD < saleStartTime) {
      //   countDownTimer.innerHTML
      //     = '開始まで' + d + '日' + h + '時間' + m + '分' + s + '秒';
      // } else if (currentTimeCD >= saleStartTime && currentTimeCD <= saleEndTime) {
        countDownTimer.innerHTML = `次回シフト提出期限まで:<br>
          ${d}日${h}時間${m}分${s}秒で終了`;
      // } else {
      //   countDownTimer.innerHTML = endMessage;
      // }
    }
  }

  var myTimer = new Timer('2021/1/11 00:00:00', '2021/11/31 23:59:59', '終了！', 'timer');
  myTimer.countDown();
}, false)