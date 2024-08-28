// 시작 값을 읽어옵니다
// 1초 단위로 화면에 업데이트됩니다
// 시작 버튼을 누르면 타이머가 실행됩니다
// 정지 버튼을 누르면 타이머가 정지합니다
// 작동 중에 시작 버튼을 누르면 재시작됩니다
// 0초가 되면 초기화됩니다
// 리셋 버튼을 누르면 초기화됩니다

const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('reset-btn');

const initTimer = () => {
    const hours = parseInt(document.getElementById('HRS').value);
    const minutes = parseInt(document.getElementById('MIN').value);
    const seconds = parseInt(document.getElementById('SEC').value);

    secondsPassed = hours * 3600 + minutes * 60 + seconds;
    updateDisplay();
};

const updateDisplay = () => {
    //
    document.getElementById('HRS').value = hours;
    document.getElementById('MIN').value = minutes;
    document.getElementById('SEC').value = seconds;

    const hours = Math.floor();
};

startBtn.addEventListener('click', () => {
    initTimer();
    // 타이머 시작 함수
    startBtn.querySelector('img').src = '../../src/images/icon-start.svg"';
    startBtn.textContent = 'STOP';
});

resetBtn.addEventListener('click', () => {
    // 타이머 리셋 함수
});
