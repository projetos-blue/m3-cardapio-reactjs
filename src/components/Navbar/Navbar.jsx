function Navbar(props){

    return(
        <div className="Home__header Header">
            <div className="row">
                <div className="Header__logo Logo">
                <img
                    src={props.logo}
                    width="70px"
                    alt="Logo El Geladon"
                    className="Logo__icone"
                />
                </div>
                <div className="Header__opcoes Opcoes">
                <div className="Opcoes__sacola Sacola">
                    <img
                    src={props.sacola}
                    width="40px"
                    className="Sacola__icone"
                    alt="Sacola de compras"
                    />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar