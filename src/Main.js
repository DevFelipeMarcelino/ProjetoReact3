function Main(){
    return(
        <div className='main'>
        <div className='center'>
        <div className='menu'>
          <div className='logo'>
            <h3>Primeiro Projeto React !</h3>
          </div>
          <div className='item-menu'>
            <a href='#'>Login</a>
          </div>
        </div>
        <div className='form'>
        <h2>Entre em Contato!</h2> 
          <form>
            
            <div className='items-form'>
              <input placeholder='Digite o seu nome' type='text' />
              <input placeholder='Digite o seu sobrenome' type='text' />
              <input placeholder='Digite o seu email' type='text' />
              <input className="enviar" type='submit' />
              
            </div>
          </form>
        </div>
        </div>

        

      </div>
    )
}

export default Main;