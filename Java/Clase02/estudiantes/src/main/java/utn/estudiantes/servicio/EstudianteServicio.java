package utn.estudiantes.servicio;

import java.util.List;

import utn.estudiantes.modelo.Estudiante;

public class EstudianteServicio implements IEstudianteServicio {

    // Logicas para el servicio de estudiantes
    public List<Estudiante> listarEstudiantes();
    public Estudiante buscarEstudiantePorId(Integer idEstudiante);
    public void guardarEstudiante(Estudiante estudiante);
    public void eliminarEstudiante(Integer idEstudiante);

}
