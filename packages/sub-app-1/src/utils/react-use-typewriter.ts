import { useEffect, useRef, useState } from 'react';

export interface State {
  words: string[];
  typeSpeed?: number;
  eraseSpeed?: number;
  afterErasingDelay?: number;
  eraseWords?: boolean;
  afterTypingDelay?: number;
}

const useTypewriter = ({
  words,
  typeSpeed = 100,
  eraseSpeed = 50,
  afterErasingDelay = 1000,
  eraseWords = true,
  afterTypingDelay = 1000,
}: State): string => {
  const [loop, setLoop] = useState(0);
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState('');
  const [singleWordMode, setSingleWordMode] = useState(words.length === 1);

  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  const erasing = useRef<boolean>(false);

  const animate = (time: number) => {
    const deltaTime = time - previousTimeRef.current;
    const speed = erasing.current ? eraseSpeed : typeSpeed;

    if (deltaTime >= speed) {
      const wordIndex = loop % words.length;

      if (index > words[wordIndex].length) {
        if (singleWordMode) {
          // 如果是单词模式，并且在单词结束后，取消动画
          cancelAnimationFrame(requestRef.current);
          return;
        }
        time = time + afterTypingDelay;
      }

      if (index === words[wordIndex].length + 1) {
        if (eraseWords) {
          erasing.current = !erasing.current;
        } else {
          setLoop((loop) => loop + 1);
          setIndex(0);
        }
      }

      if (index === -1 && erasing.current) {
        erasing.current = !erasing.current;
        if (singleWordMode) {
          // 如果是单词模式，并且在擦除结束后，取消动画
          cancelAnimationFrame(requestRef.current);
          return;
        }
        setLoop((loop) => loop + 1);
        time = time + afterErasingDelay;
      }

      setIndex((index) => index + (erasing.current ? -1 : 1));
      setWord(words[wordIndex].substring(0, index));

      previousTimeRef.current = time;
    }

    if (!singleWordMode || (singleWordMode && index <= words[0].length)) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (words.length === 1) {
      setSingleWordMode(true);
    }
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [loop, index, word, words.length]); // 注意这里添加了 words.length 作为依赖项

  return word;
};

export default useTypewriter;
