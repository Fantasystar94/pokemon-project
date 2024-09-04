
import { useEffect, useRef, useState } from 'react';

export default function Quiz() {
  const [time, setTime] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    console.log('useEffect 실행!')
    timerRef.current = setInterval(()=>{
      setTime(new Date());
    },1000);
    // 컴포넌트가 언마운트 될 때 타이머 정리
    return () => {
      if (timerRef.current) {
        console.log('useEffect-timerclear')
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleStop = (event) => {
    clearInterval(timerRef.current);
    timerRef.current=null;
  };

  const handleStart = (event) => {
    if(timerRef.current===null){
      console.log('start')
      timerRef.current = setInterval(()=>{
        setTime(new Date);
      },1000);

    }

};

  if (time === null) return null;

  return (
    <section className='app'>
      <div className='watch_container'>
        <h1>⏰ 현재시간 ⏰</h1>
        <p>{time.toLocaleTimeString()}</p>

        <div className='action_button_container'>
          <button className='start_button_container' onClick={handleStart}>
            시작
          </button>
          <button className='stop_button_container' onClick={handleStop}>
            멈춤
          </button>
        </div>
      </div>
    </section>
  );
}


