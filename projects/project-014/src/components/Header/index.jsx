import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/LucasCarvalhoSilva.png" alt="Foto do usuario" />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Lucas Carvalho</strong>
                </div>
            </Profile> 
            <Logout>
                <RiShutDownLine />
            </Logout>           
        </Container>
    )
}