

export const GreenButton = ({onClick,name,isLoading}) => {
    return (
        <button type="submit" onClick={onClick?onClick: null} disabled={isLoading ? true :  false} className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium     text-white">{name}</button>
    );
};
