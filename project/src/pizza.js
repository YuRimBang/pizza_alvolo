import React, { useState } from "react";
import Header from "./components/Header";
import PizzaTitle from "./components/PizzaTitle";
import PizzaTapMenu from "./components/PizzaTapMenu";
import PizzaSelectKategoire from "./components/PizzaSelectKategoire";
import PizzaMenu from "./components/PizzaMenu";

function Pizza() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="background">
      <Header />
      <PizzaTitle />
      <PizzaTapMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setCurrentPage={setCurrentPage}
      />
      {activeTab === 0 && (
        <PizzaSelectKategoire
          activeTab={activeTab}
          onOptionChange={handleOptionChange}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      )}
      <PizzaMenu
        activeTab={activeTab}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        selectedOption={selectedOption}
      />
    </div>
  );
}

export default Pizza;
