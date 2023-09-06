import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectInputValue,
  setInputType,
  setInputVal,
} from "../redux/textgenSlice";
import { getAsyncTexts } from "../redux/serviceTextgen";

const Form = () => {
  const inputVal = useSelector(selectInputValue);
  const inputFormat = useSelector((state) => state.textgen.inputFormat);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let newVal = Number(e.target.value);
    dispatch(setInputVal(newVal));
    dispatch(getAsyncTexts(newVal, inputFormat));
  };
  const handleFormatChange = (e) => {
    dispatch(setInputType(e.target.value));
  };

  useEffect(() => {
    dispatch(getAsyncTexts());
  }, [dispatch]);
  return (
    <div className="w-3/4 p-5">
      <div className="w-80 flex justify-between items-center">
        <div className="">
          <label htmlFor="">Paragraphs</label>
          <br />
          <input
            className="text-black p-1"
            value={inputVal}
            type="number"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="">
          <label htmlFor="">Include HTML</label>
          <br />
          <select
            onChange={(e) => handleFormatChange(e)}
            className="text-black p-2 flex justify-center items-center"
            name=""
            id=""
            value={inputFormat}
          >
            <option value="html">Yes</option>
            <option value="text">No</option>
            
          </select>
        </div>
      </div>
    </div>
  );
};

export default Form;
