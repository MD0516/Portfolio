import React from 'react'
import { useState, useEffect } from 'react'

const TypingText = ({text, speed}) => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    const randomSpeed = speed + Math.floor(Math.random() * 50);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile());
        return () => window.removeEventListener('resize', checkMobile());
    })

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex(index + 1);
            }, randomSpeed);          
            return () => clearTimeout(timeout)
        }
    }, [index, text, speed]);

    const renderedText = isMobile 
    ?displayText.split('\n').map((line,i) =>(
        <React.Fragment key={i}>
            {line}
            <br />
        </React.Fragment>
    )) : displayText.replace(/\n/g, '')

  return (
    <>
        <p className='typewriter'>
            {isMobile ? (
            <>
                {displayText.split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                    {line}
                    {i !== arr.length - 1 && <br />}
                </React.Fragment>
                ))}
                {index < text.length &&<span className='cursor'> | </span>}
            </>
            ) : (
            <>
                {displayText}
                {index < text.length &&<span className='cursor'> | </span>}
            </>
            )}
          </p>
    </>
  )
}

export default TypingText