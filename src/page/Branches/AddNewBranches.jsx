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


      <div className="m-4 grid grid-cols-2 gap-4">

        <div className="flex flex-col gap-1">
          <Label name={"branchName"} />
          <TextInput onChange={handleChange} name={"branchName"} placeHolder={"enter your name"} />
        </div>
        <div className="flex flex-col gap-1">
          <Label name={"branchCode"} />
          <NumberInput onChange={handleChange} name={"branchCode"} placeHolder={"enter code"} />
        </div>
        <div className="flex flex-col gap-1">
          <Label name={"address"} />
          <TextInput onChange={handleChange} name={"address"} placeHolder={"enter your address"} />
        </div>
        <div className="flex flex-col gap-1">
          <Label name={"status"} />

        </div>
        <div className="">

          <Label name={"hostBranch"} />

        </div>

        {/* <div>
          <NumberInput />

        </div>
        <TextInput />

        <form action="">
          <GreenButton name="Submit" onClick={handleSubmit} />
          <NumberInput />
        </form> */}
      </div>

      <div className="w-full flex justify-center mt-8">
        <GreenButton name={"Submit"} />
      </div>

    </div>
  );
};

export default AddNewBranches;