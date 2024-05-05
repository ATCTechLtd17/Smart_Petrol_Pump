import { GreenButton } from "../../components/Component/Button";
import PageHead from "../../components/Component/PageHead";
import { Label, NumberInput, TextInput } from "../../components/Fields/InputFields";
import BranchesNav from "./BranchesNav/BranchesNav";

const AddNewBranches = () => {
  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Nashit");
  }
  return (
    <div>


      <section>
        <h1 className="text-xl m-4 p-2 border-b-2"> Add New Branch</h1>
      </section>

      <section className="m-4">
        <BranchesNav />
      </section>


      <div className="m-4">
        <div className=" ">
          <Label name={"branchName"}/>
          <TextInput onChange={handleChange} name={"branchName"} placeHolder={"enter your name"} />

        </div>
        <div>
          <NumberInput />

        </div>
        <TextInput />

        <form action="">
          <GreenButton name="Submit" onClick={handleSubmit} />
          <NumberInput />
        </form>
      </div>

    </div>
  );
};

export default AddNewBranches;