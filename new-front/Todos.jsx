import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";

import { useSelector } from "react-redux";
import OrderBook from "../orderbook/OrderBook";
import { selectCurrentUser } from '../../store/reducers/user.selector';

const Todos = () => {
  // const auth = useSelector( (state) => state.auth);
  const auth = useSelector(selectCurrentUser);
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  useEffect(() => {
    console.log("one")
    console.log(auth)
    // console.log(auth)
  }, [auth]);

  const handleInput = (value) => {
    console.log("here");
    console.log(value);
    setTodo({...todo, name: value})
  }
  
  const [open, setOpen] = useState(false);

  return (
    <>
      {auth ? (
        <>
          {console.log("hjahaa")}
          {/* {console.log(auth)} */}
          <OrderBook 
            open    = {open}
            setOpen = {setOpen}
          />
          {/* <AddTodo todo={todo} setTodo={setTodo} /> */}
          <AddTodo todo={todo} handleChange={handleInput} />
          <ListTodos todo={todo} setTodo={setTodo} />
        </>
      ) : (
        <>      
          {console.log("maman")}
          {/* <ListTodos todo={todo} setTodo={setTodo} /> */}
        </>
      )}
    </>
  );
  
};

export default Todos;
