import React from 'react';
import '../css/PizzaTapMenu.css';

function PizzaTapMenu({ activeTab, setActiveTab, setCurrentPage }) {
  const handleTabClick = (index) => {
    setActiveTab(index);
    setCurrentPage(1);
  };

  return (
    <div className='menu'>
      <div className='tapMenu'>
        <div
          className={`op ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
          style={{
            backgroundColor: activeTab === 0 ? '#41b6e6' : 'transparent',
            color: activeTab === 0 ? 'white' : 'lightslategray',
          }}
        >
          전체
        </div>
        <div
          className={`op ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
          style={{
            backgroundColor: activeTab === 1 ? '#41b6e6' : 'transparent',
            color: activeTab === 1 ? 'white' : 'lightslategray',
          }}
        >
          장인피자
        </div>
        <div
          className={`op ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
          style={{
            backgroundColor: activeTab === 2 ? '#41b6e6' : 'transparent',
            color: activeTab === 2 ? 'white' : 'lightslategray',
          }}
        >
          달인피자
        </div>
        <div
          className={`op ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
          style={{
            backgroundColor: activeTab === 3 ? '#41b6e6' : 'transparent',
            color: activeTab === 3 ? 'white' : 'lightslategray',
          }}
        >
          명품피자
        </div>
      </div>
    </div>
  );
}

export default PizzaTapMenu;
