import { useTheme } from "../context/ThemeContext"

function SelectionBox({icon, title, bgColor, color, id, onClick}) {
    const {resTheme} = useTheme();

    return (
        <div className={`${id} ${resTheme}`} 
             style={{color:color, backgroundColor:bgColor, borderRadius:'20px'}}
             onClick={onClick}>
            <div className="research-icon">
                {icon}
            </div>
            <div className="research-heading">
                {title}
            </div>

        </div>
  )
}
export default SelectionBox