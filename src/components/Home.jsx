import React, { useState } from 'react';
import Spongebob from './Spongebob';
import FairyOddParents from './FairyOddParents';
import MoviePlayer from './MoviePlayer';
import './Home.css';

function Home() {
  const [isShowsOpen, setIsShowsOpen] = useState(false);
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);
  const [currentShow, setCurrentShow] = useState('spongebob');

  const shows = [
    { name: 'Spongebob', path: 'spongebob' },
    { name: 'FairyOddParents', path: 'fairyoddparents' },
    { name: 'Ben10', path: 'ben10' }
  ];

  const movies = [
    { name: 'A Christmas Carol', path: 'christmas-carol' },
    { name: 'Polar Express', path: 'polar-express' },
    { name: 'Monsters Inc', path: 'monsters-inc' },
    { name: 'Sinbad: Legend of the Seven Seas', path: 'sinbad-legend-of-the-seven-seas' }
  ];

  const renderShow = () => {
    switch(currentShow) {
      case 'spongebob':
        return <Spongebob />;
      case 'fairyoddparents':
        return <FairyOddParents />;
      case 'ben10':
        return <div>Ben10 Coming Soon</div>;
      case 'christmas-carol':
      case 'polar-express':
      case 'monsters-inc':
      case 'sinbad-legend-of-the-seven-seas':
        return <MoviePlayer movieId={currentShow} />;
      default:
        return <Spongebob />;
    }
  };

  const renderDropdown = (items, isOpen, onItemClick) => {
    if (!isOpen) return null;
    return (
      <div className="dropdown-menu">
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              onItemClick(item.path);
              setIsShowsOpen(false);
              setIsMoviesOpen(false);
            }}
            className="dropdown-item"
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <div className="dropdown-container">
          <button 
            onClick={() => {
              setIsShowsOpen(!isShowsOpen);
              setIsMoviesOpen(false);
            }}
            className="menu-button"
          >
            Shows {isShowsOpen ? '▼' : '▶'}
          </button>
          {renderDropdown(shows, isShowsOpen, setCurrentShow)}
        </div>

        <div className="dropdown-container">
          <button 
            onClick={() => {
              setIsMoviesOpen(!isMoviesOpen);
              setIsShowsOpen(false);
            }}
            className="menu-button"
          >
            Movies {isMoviesOpen ? '▼' : '▶'}
          </button>
          {renderDropdown(movies, isMoviesOpen, setCurrentShow)}
        </div>
      </div>
      <div className="content">
        {renderShow()}
      </div>
    </div>
  );
}

export default Home;
