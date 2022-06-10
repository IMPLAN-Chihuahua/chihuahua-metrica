import Variable from "./Variable";

const VariableList = ({ variables }) => {
  return (
    <>{
      variables.map((variable, index) => {
        return (<Variable expr={variable} key={index} />);
      })}
    </>
  );
};

export default VariableList;