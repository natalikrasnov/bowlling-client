import './Confetti.style.scss';

function Confetti() {

  const confettiElements = Array(10).fill(0);
 
  return (
   <div className='confetti-container'>
        {confettiElements.map(() => (<div className='confetti'></div>))}
    </div>
  )
}

export default Confetti
