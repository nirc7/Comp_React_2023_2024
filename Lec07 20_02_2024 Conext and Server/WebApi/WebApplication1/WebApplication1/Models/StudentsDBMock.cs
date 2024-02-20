namespace WebApplication1.Models
{
    public class StudentsDBMock
    {
        static public List<Student> students = new List<Student>() {
            new Student(){Id=1 , Name="Avi" , Grade=100},
            new Student(){Id=2 , Name="Dora" , Grade=99},
            new Student(){Id=3 , Name="Benny" , Grade=97},
            new Student(){Id=4 , Name="Elad" , Grade=98},
        };
    }
}
