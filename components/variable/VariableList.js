import Variable from "./Variable";

const VariableList = ({ variables }) => {
  return (
    <ul>{
      variables.map((variable, index) => {
        return (
          <Variable expr={variable} key={index} />
        );
      })}
    </ul>
  );
};

export default VariableList;