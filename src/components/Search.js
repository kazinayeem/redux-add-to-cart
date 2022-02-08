
import { connect, useDispatch, useSelector } from "react-redux";
import { search_product } from "../redux/action/action";
import React, { useState } from "react";
import { useEffect } from "react";
const Search = () => {
  const [keyword, setkeyword] = useState("");
  const dispatch = useDispatch();
  const result = useSelector((state) => state.reducer.search_p);

  useEffect(() => {
    dispatch(search_product(keyword));
  }, [dispatch, keyword]);

  

  return (
    <div>
      <div>
        {result}
        <input
          type="search"
          value={keyword}
          onChange={(e) => setkeyword(e.target.value)}
          name="search"
          placeholder="Search"
          id="search"
        />
      </div>
    </div>
  );
};

export default connect()(Search);
