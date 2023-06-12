import React, { useState } from 'react';
import Header from './components/Header';
import MainUnder from './components/MainUnder';

import PizzaTitle from './components/PizzaTitle';
import PizzaTapMenu from './components/PizzaTapMenu';
import PizzaSelectKategoire from './components/PizzaSelectKategoire';
import PizzaMenu from './components/PizzaMenu';
import Page from "./components/Page";

function Pizza() {
    const [isBoxVisible, setIsBoxVisible] = useState(false);

  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [pizzaData, setPizzaData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const pageSize = 2;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='background'>
      <Header isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></Header>
      <MainUnder isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></MainUnder>
      <PizzaTitle />
      <PizzaTapMenu activeTab={activeTab}  setActiveTab={setActiveTab} setCurrentPage={setCurrentPage} />
      {activeTab === 0 && <PizzaSelectKategoire activeTab={activeTab} onOptionChange={handleOptionChange} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />}
      <PizzaMenu pizzaData={pizzaData} setPizzaData={setPizzaData} totalItems={totalItems} setTotalItems={setTotalItems} pageSize={pageSize} activeTab={activeTab} currentPage={currentPage} onPageChange={handlePageChange} selectedOption={selectedOption} totalPages={totalPages} setTotalPages={setTotalPages} />
      <Page currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </div>
  );
}

export default Pizza;