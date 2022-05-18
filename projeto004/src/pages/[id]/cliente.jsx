import { useRouter } from "next/router";

export default function init(){
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.id
    //console.log(router)
    return (
        <>
            <h1> em rotas/parametros</h1>
            <h1> id: {id}</h1>
            <h1> Nome: {nome}</h1>
        </>
    )
}