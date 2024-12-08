import { Conquista } from "./Classes/Conquistas";
import { Amigo } from "./Classes/Amigo";
import { Missao } from "./Classes/Missoes";

// Definindo que o parâmetro pode ser uma instância de Amigo, Missoes ou Conquista
const SimplesVisu = (props: Amigo | Missao | Conquista) => {
    
    // Condicional para verificar qual classe foi passada e renderizar algo diferente para cada uma
    if (props instanceof Amigo) {
        return (
            <div>
                <img src={props.getAvatarIcone()[1]} alt="Imagem Perfil" />
                <p>{props.getOnline() ? "Online" : "Offline"}</p>
                <p>{props.getNome()}</p>
            </div>
        );
    } else if (props instanceof Missao) {
        return (
            <div>
            <img src={props.getIcone()} alt="Imagem" />
            <p>{props.getNome()}</p>
            <p>{props.getUserProgresso()}</p>
        </div>
        );
    } else if (props instanceof Conquista) {
        return (
            <div>
                <img src={props.getImagens().perfil} alt="Imagem" />
                <p>{props.getTitulo()}</p>
            </div>
        );
    }

    // Caso não seja nenhum dos tipos esperados
    return <div>Elemento não reconhecido</div>;
};



export default {SimplesVisu};