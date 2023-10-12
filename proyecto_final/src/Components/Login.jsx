export default function Login() {
  return (
    <div className="w-2/5 h-full items-center justify-center flex">
      <div className="'logo-y-login' justify-center items-center mx-8 h-4/5 w-3/5 bg-black">
        <div className="'logo' rounded-full translate-y-14 border-solid border-2 w-20 h-20 m-auto rounded-fulmt-20 bg-gray-50">logo</div>
        <div className="'login inset-x-0 top-0 p-4 justify-center rounded-lg mx-3.5 my-3.5 border border-white bg-cian-oscuro h-3/5">

            <form action="" className="login-form font-sans text-white mx-2 ">
            <div className="">
              <div className="">
                  <input type="Email" className="border-none rounded-lg flex justify-self-center mb-4 mt-20 w-full h-4/5 bg-gris-claro " placeholder='Email'/>
                  
              </div>
              <div>
                  <input type="Contraseña" className="border-none rounded-lg flex w-full  justify-self-center mb-2 h-4/5  bg-gris-claro" placeholder='Contraseña' />
                  
              </div>
              <div className="mb-4">
                  <input type="checkbox" name="" id="" />
                    <label htmlFor="Recuerdame" className="text-xs">recuerdame.</label>

                    <span className="text-xs text-left"><p className="text-left text-xs inline">Olvidé mi contraseña</p></span>
                </div>
            </div>
            <div >
            <button type="submit" className="rounded-full bg-azul-oscuro mb-4 mt-4 w-full h-1/3">Iniciar sesión</button>
            </div>
            <div className="text-xs text-center">
            <span className="">¿Eres nuevo?<link rel="" href=""/> Registrate</span>
            </div>
            </form>
      </div>
    </div>
    </div>
  )
}
