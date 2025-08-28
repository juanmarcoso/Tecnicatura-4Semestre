package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
//boilerplate - Codigo repetitivo
//Con lombok vamos a evitar escribir codigo repetitivo como getters, setters, toString, constructor vacio y constructor con todos los parametros
//Con @Data le decimos a lombok que genere todo eso por nosotros
@lombok.Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Estudiante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idestudiante;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;

}
