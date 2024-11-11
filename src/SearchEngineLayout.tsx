/**
 * This code was generated by Builder.io
 */
import React from "react";
import Header from "./Header.tsx";
import SearchTabs from "./SearchTabs.tsx";
import MainContent from "./MainContent.tsx";

const SearchEngineLayout: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col pt-5 pb-20 w-full max-md:max-w-full">
        <Header />
        <SearchTabs />
        <div className="flex mt-4 w-full bg-white bg-opacity-50 min-h-[5px] max-md:max-w-full" />
        <MainContent />
      </div>
    </div>
  );
};

export default SearchEngineLayout;