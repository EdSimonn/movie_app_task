import React from "react";

const Search = () => {
  return (
    <div className="sm:flex md:px-16 mt-6 w-full flex-col justify-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <h1 className="font-normal">Search</h1>

          <input
            type="search"
            className="block w-full px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded mx-auto lg:max-w-[100%]"
            id="exampleSearch2"
            placeholder=""
          />
        </div>
      </div>

    
    </div>
  );
};

export default Search;
