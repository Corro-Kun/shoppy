import "./addForm.css"

export default function AddForm(){
  return(
    <div className="AddForm-Div" >
      <div className="AddForm-Input-Div" >
        <label>Escribe el nombre del producto</label>
        <input type="text" />
      </div>
      <div className="AddForm-Input-Div" >
        <label>Escribe una descripcion del producto</label>
        <input type="text" />
      </div>
      <div className="AddForm-Input-Div" >
        <label>ponle precio del producto</label>
        <input type="number" />
      </div>
      <div className="AddForm-Input-Div" >
        <label>Añade una foto del producto</label>
        <input style={{display: "none"}} type="file" />
        <picture>
          <img src="https://cdn.icon-icons.com/icons2/564/PNG/512/Add_Image_icon-icons.com_54218.png" />
        </picture>
      </div>
      <div className="AddForm-Input-Div" >
        <label>seleciona la secion del producto</label>
        <select>
          <option>...</option>
        </select>     
      </div>
      <div className="AddForm-Button" >
        <button>Publicar</button>
      </div>
    </div>
  );
}
