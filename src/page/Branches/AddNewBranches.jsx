import { NumberInput, TextInput } from "../../components/Fields/InputFields";
import BranchesNav from "./BranchesNav/BranchesNav";

const AddNewBranches = () => {
  function handleChange(e){
    const { name , value} = e.target;
    console.log(name,value);
  }
  return (
    <div>
      <section>
        <BranchesNav />
      </section>
      <div className="w-full">
      <TextInput onChange={handleChange} name={"nashit"} placeHolder={"As"}/>
      <NumberInput />
      </div>

    </div>
  );
};

export default AddNewBranches;