import {ProfileProvider} from "../context/profile.tsx";
import Bar from "../components/Bar/Bar.tsx";
import Form from "../components/addForm/addForm.tsx";

function AddProduct(){
  return(
    <>
      <ProfileProvider>
        <Bar />
      </ProfileProvider>
      <Form />
    </>
  );
}

export default AddProduct;
