import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import {Button} from '../components/button';
import { useAuth } from '../hooks/useAuth';
import '../styles/auth.scss'
import {database} from '../services/firebase'
import { useNavigate } from 'react-router-dom';

export function NewRoom() {
const {user} = useAuth();
const navigate = useNavigate()
const [NewRoom, setNewRoom] = useState('');

async function HandleCreateRoom(event: FormEvent): Promise<void> {
  event.preventDefault();
  
  if(NewRoom.trim() == '') {
    return;
  }
  
  const roomRef = database.ref('rooms');
    
  const FirebaseRoom = roomRef.push({
    title: NewRoom, 
    authorId: user?.id,
  })
 
  navigate(`/rooms/${FirebaseRoom.key}`)
  
  
}


  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire duvidas da sua audiencia em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Crie uma nova sala</h2>
          <form onSubmit={HandleCreateRoom}>
            <input 
            type="text"
            placeholder="Nome da sala" 
            onChange={event => setNewRoom(event.target.value)}
            value={NewRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>


  )
  

}