import Variable from "./Variable";

const VariableList = ({ variables }) => {
  return (
    <>{
      variables.map((variable, index) => {
        return (
          <ul>
            <Variable expr={variable} key={index} />
          </ul>
        );
      })}
    </>
  );
};

export default VariableList;