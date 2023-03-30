import Caption from "../components/atoms/Caption"
import Caption2 from "../components/atoms/Caption2"
import Datos from "../../datos.json"
import Image2 from "../Imagenes/Curriculomm.jpg"
import Text from "../components/atoms/Text";

function Curriculum() {
    return ( 
        <>
        <div className="container">
            <div className="datosPersonales">

                <img className="imagen" src={Image2} alt="Foto" /><br />
                <div  className="cuadro">
                    <Caption msn="Contacto"></Caption>
                    <div className="contacto">
                        <i class="fi fi-br-marker"></i> {Datos.Ubicacion}
                    </div>
                    <div className="contacto">
                        <i class="fi fi-rr-phone-call"></i> {Datos.cel}
                    </div>
                    <div className="contacto">
                        <i class="fi fi-br-envelope"></i> {Datos.correo}
                    </div>
                    
                </div>
                <div className="cuadro">
                    <Caption msn="Habilidades"></Caption>
                    <Text dt={Datos.habilidad01}></Text>
                    <Text dt={Datos.habilidad02}></Text>
                    <Text dt={Datos.habilidad03}></Text>
                    <Text dt={Datos.habilidad04}></Text>
                    <Text dt={Datos.habilidad05}></Text>
                </div>
                <div className="cuadro">
                    <Caption msn="Informacion adiccional"></Caption>
                    <Text dt={Datos.informacionAdicional}></Text>
                </div>
                <div className="cuadro">
                    <Caption msn="Redes Sociales"></Caption>
                    <br />
                    <div class="social-container">
                        <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
                        <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
                        <a href="https://mx.linkedin.com/" class="fa fa-linkedin"></a>
                </div>
                </div>
                
            </div>
            <div className="informacion">
                <br />
                <h1 className="nombre"><span className="color">Proximamente Ing.<br /> {Datos.firtsName}</span> {Datos.name}</h1>
                <hr id="linea"/>

                <div className="cuadro">
                    <br />
                    <h2 className="subtitulo">Resumen Profesional</h2>
                    <Text dt={Datos.resumenProfesional}></Text>
                </div>
                
                <div className="cuadro">
                    <Caption2 msn="Formacion Basica"></Caption2>
                    <Text dt={Datos.formacion}></Text>
                </div>

                <div className="cuadro">
                    <Caption2 msn="Participacion en proyectos"></Caption2>
                    <Text dt={Datos.proyecto1}></Text>
                    <Text dt={Datos.proyecto2}></Text>
                </div>

                <div className="cuadro">
                    <Caption2 msn="Lenguajes Utilizados"></Caption2>
                    <Text dt={Datos.lenguaje1}></Text>
                    <Text dt={Datos.lenguaje2}></Text>
                    <Text dt={Datos.lenguaje3}></Text>
                    <Text dt={Datos.lenguaje4}></Text>
                    <Text dt={Datos.lenguaje5}></Text>
                </div>

            </div>
        </div>
        </>
    );
}

export default Curriculum;