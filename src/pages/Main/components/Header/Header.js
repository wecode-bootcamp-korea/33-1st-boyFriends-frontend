import React, { useEffect, useRef, useState } from 'react';
import CircleBtn from '../common/CircleBtn';
import ImageCard from '../common/ImageCard';
import DirectionBtn from '../common/DirectionBtn';
import './Header.scss';
import Nav from '../../../../components/Nav/Nav';

const Header = ({ headerData }) => {
  const carousel = 4;
  const [index, setIndex] = useState(0);
  // console.log(headerData[headerData.length - 1].id); // carousel 하드코딩 풀어야함
  // 자동 캐러셀

  const cardRef = useRef(null);

  useEffect(() => {
    cardRef.current.style.transition = 'all 0.5s ease-in-out';
    cardRef.current.style.transform = `translateX(-${index}00vw)`;
  }, [index]);

  return (
    <>
      <header className="header">
        <div ref={cardRef} className="card">
          {headerData.map(headerData => {
            return <ImageCard src={headerData.src} key={headerData.id} />;
          })}
        </div>
      </header>

      <div className="headerCopy">
        <strong className="cardTitle">{headerData[index]?.title}</strong>
        <p className="cardContent">{headerData[index]?.content}</p>
        <DirectionBtn index={index} setIndex={setIndex} carousel={carousel} />
        <div className="circleBtnList">
          {headerData.map(headerData => {
            return (
              <CircleBtn
                id={headerData.id}
                setIndex={setIndex}
                key={headerData.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;