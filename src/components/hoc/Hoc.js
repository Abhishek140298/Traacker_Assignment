import React from "react";
function Hoc(props) {
  const Cmp = props.cmp;
  return <Cmp />;
}
export default Hoc;
