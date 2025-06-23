public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.setName("srijita");
        student.setId("120");
        student.setGrade("A");

        StudentView view = new StudentView();
        StudentController controller = new StudentController(student, view);

        controller.updateView();
        controller.setStudentName("shreya");
        controller.updateView();
    }
}