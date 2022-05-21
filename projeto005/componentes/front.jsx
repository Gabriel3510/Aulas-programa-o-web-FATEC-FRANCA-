export default function Amostragem(props){
    const contador = {

        color:"black",
        backgroundColor:"red",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
        margin: "5px",
        width:"120px",
        height:"120px",
        borderRadius:"50%",
        fontWeight:"bolder",
        fontSize:"50px"
        
    }
    return (
        <span style={contador}>{props.numero}</span>
    )
}