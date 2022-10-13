import { useEffect, useState } from 'react';

export const useCountDays = (targetDate : string) => {
  const countDate = new Date(targetDate).getTime();

  const [countDatePass, setCountDatepass] = useState(
    new Date().getTime() - countDate 
  );

  useEffect(() => {
    const interval = setInterval(() => {
        setCountDatepass(new Date().getTime() - countDate);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDate]);

  return getReturnValues(countDatePass);
};

const getReturnValues = (countDatePass : number) => {
  
  const days = Math.floor(countDatePass / (1000 * 60 * 60 * 24));
  const months = Math.floor(days/31);
  const years = Math.floor(months/12);

  const hours = Math.floor(
    (countDatePass % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDatePass % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDatePass % (1000 * 60)) / 1000);

  return {years, months, days, hours, minutes, seconds};
};
