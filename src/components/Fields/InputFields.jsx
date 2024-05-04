
export const TextInput = ({onChange, id,disabled,placeHolder, name, required}) => {
    return (
      <input   type="text" name={name? name: null} id={id? id: null} required={required?true: false} className="input input-bordered input-sm  hover:border-teal-500  " onChange={onChange? onChange : null} disabled={disabled? true : false} placeholder={placeHolder?placeHolder: null} />
    );
};
export const NumberInput = ({onChange, id,disabled,placeHolder, name, required}) => {
    return (
      <input type="number" name={name? name: null} id={id? id: null} required={required?true: false} className="input input-bordered input-sm  hover:border-teal-500  " onChange={onChange? onChange : null} disabled={disabled? true : false} placeholder={placeHolder?placeHolder: null} />
    );
};
export const PasswordInput = ({onChange, id,disabled,placeHolder, name, required}) => {
    return (
      <input type="password" name={name? name: null} id={id? id: null} required={required?true: false} className="input input-bordered input-sm  hover:border-teal-500  " onChange={onChange? onChange : null} disabled={disabled? true : false} placeholder={placeHolder?placeHolder: null} />
    );
};
export const EmailInput = ({onChange, id,disabled,placeHolder, name, required}) => {
    return (
      <input type="email" name={name? name: null} id={id? id: null} required={required?true: false} className="input input-bordered input-sm  hover:border-teal-500  " onChange={onChange? onChange : null} disabled={disabled? true : false} placeholder={placeHolder?placeHolder: null} />
    );
};