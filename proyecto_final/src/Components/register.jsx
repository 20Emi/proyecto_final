import { Link } from 'react-router-dom';
import {Envelope, Lock, Telephone, Person} from 'react-bootstrap-icons';

export default function register() {
    return (
      <>
      <div className="'PANTALLA IZQUIERDA' w-2/4 h-full items-center justify-center flex">
        <div className="'LOGO Y LOGIN' h-full w-3/5">
          <div className="'LOGO DEL USUARIO' translate-y-1/2 rounded-full border-2 m-auto w-28 h-28 bg-white"></div>
          <div className="'LOGIN' text-white py-3 h-custom p-4 mx-3.5 my-1.5 border-2 border-color-icons rounded-lg bg-cian-oscuro">
            <form action="" className=" h-full pb-10 pt-12 px-1.5">
            <div className='relative my-2 text-xs'>
                <Person className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-6 text-color-icons" />
                <input type="Name" placeholder="Nombre del taller" className="rounded-md h-6 w-full bg-gris-claro text-black p-1 pl-8 placeholder-white" />
            </div>
            <div className='relative my-2 text-xs'>
                <Telephone className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-6 text-color-icons" />
                <input type="Number" placeholder="Número del taller" className="rounded-md h-6 w-full bg-gris-claro text-black p-1 pl-8 placeholder-white" />
            </div>
            
              <div className='relative my-2 text-xs'>
                <Envelope className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-6 text-color-icons" />
                <input type="Email" placeholder="Email" className="rounded-md h-6 w-full bg-gris-claro text-black p-1 pl-8 placeholder-white" />
              </div>
              <div className='relative my-1 text-xs'>
                <Lock className="absolute left-2 top-3/4 transform -translate-y-3/4 w-4 h-6 text-color-icons" />
                <input type="Contraseña" placeholder="Contraseña" className="rounded-md h-6 w-full bg-gris-claro text-black p-1 pl-8 placeholder-white" />
              </div>
              <div className='relative my-2 text-xs'>
                <Lock className="absolute left-2 top-3/4 transform -translate-y-3/4 w-4 h-6 text-color-icons" />
                <input type="Contraseña" placeholder="Repetir contraseña" className="rounded-md h-6  w-full bg-gris-claro text-black p-1 pl-8 placeholder-white" />
              </div>
              <div className="'BOTON LOGIN ">
                <button type="submit"className="active:scale-[.98] text-center py-1 bg-azul-oscuro rounded-full mb-2 mt-4 w-full mt-4">Registrarse</button>
              </div>
              <div className='px-14 text-center'>
                <span className="text-xs  mt-4">¿Ya tienes cuenta? </span>
              </div>
              <div className='px-20 text-center'>
                <Link to='/login' className='text-azul-oscuro underline text-xs mt-4' > Iniciar sesión</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    )
  }