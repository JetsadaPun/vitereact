const FormatedDate = ({children}) => {
    return (
        <div>
            <span className={`text-sm ${isMouseEnter["exp1"] ? "text-primaryTitle" : ""}`}>{children}</span>
          </div>
    );
}
export default FormatedDate;