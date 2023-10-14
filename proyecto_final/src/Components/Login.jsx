import React from 'react';
import { Link } from 'react-router-dom';
import { Envelope} from 'react-bootstrap-icons';
import {Lock} from 'react-bootstrap-icons';

export default function Login() {
  return (
    <>
    <div className="'PANTALLA IZQUIERDA' w-2/4 h-full items-center justify-center flex">
      <div className="'LOGO Y LOGIN' h-full w-3/5">
        <div className="'LOGO DEL USUARIO' translate-y-2/3 rounded-full border-2 m-auto w-28 h-28 bg-white"></div>
        <div className="'LOGIN' text-white h-2/3 p-4 mx-3.5 my-3.5 border-2 border-color-icons rounded-lg bg-cian-oscuro">
          <form action="" className=" h-full pb-20 pt-16 px-1.5">
            <div className='relative my-2 text-xs'>
            <Envelope className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-6 text-color-icons" />
              <input type="Email" placeholder="Email" className="rounded-md h-7 my-2 w-full bg-gris-claro text-black p-1 pl-8 placeholder-white" />
            </div>
            <div className='relative my-1 text-xs'>
                  <Lock className="absolute left-2 top-1/2 transform -translate-y-3/4 w-4 h-6 text-color-icons" />
              <input type="Contraseña" placeholder="Contraseña" className="rounded-md mb-3 h-7 w-full bg-gris-claro text-black p-1 pl-8 placeholder-white" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <input type="checkbox"/>
                <label htmlFor="Recuerdame" className="text-xs underline">Recuerdame</label>
              </div>
              <Link to='' className="text-xs text-white underline">Olvide mi contraseña</Link>
            </div>
            <div className="'BOTON LOGIN ">
              <button type="submit"className="active:scale-[.98] text-center py-1 bg-azul-oscuro rounded-full mb-2 mt-4 w-full mt-8">Iniciar sesión</button>
            </div>
            <div className='px-12'>
              <span className="text-xs mt-4">¿Eres nuevo? <Link to='/Singin' className='text-azul-oscuro underline' > Registrate</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
