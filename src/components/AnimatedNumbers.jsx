 "use client"
 
 import React, { useEffect, useState } from "react";
 
 const AnimatedNumbers = () => {
    const Counter = ({ end, suffix = "" }) => {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        const duration = 2000; 
        const increment = end / (duration / 10); 
        const timer = setInterval(() => {
          setCount((prev) => {
            const next = prev + increment;
            if (next >= end) {
              clearInterval(timer);
              return end;
            }
            return next;
          });
        }, 10);
    
        return () => clearInterval(timer);
      }, [end]);
    
      return <span >{Math.round(count)}{suffix}</span>;
    };
  
    return (
      <div className="grid lg:grid-cols-3 gap-12 mb-10 mt-20">
        <div className="flex flex-col gap-10 items-center">
          <h3 className="text-6xl text-primary_color font-semibold w-[120px]">
            <Counter end={99} suffix="%" />
          </h3>
          <p className="text-xl leading-7 text-gray-900 text-text_color">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <h3 className="text-6xl text-primary_color font-semibold w-[120px]">
            <Counter end={20} suffix="+" />
          </h3>
          <p className="text-xl leading-7 text-gray-900 text-text_color">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <h3 className="text-6xl text-primary_color font-semibold w-[120px]">
            <Counter end={70} suffix="+" />
          </h3>
          <p className="text-xl leading-7 text-gray-900 text-text_color">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    );
  };

export default AnimatedNumbers