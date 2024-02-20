using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Student[]> Get() 
        {
            try
            {
                return Ok(StudentsDBMock.students.ToArray());
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status400BadRequest, e.Message);
            }   
        }


        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type =typeof(Student))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Student[]> Get(int id)
        {
            try
            {
                Student stu = StudentsDBMock.students.FirstOrDefault(stu => stu.Id == id);
                if (stu == null)
                {
                    return NotFound($"student with id = {id} was not found in Get by ID!");
                }
                return Ok(stu);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Student))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Post([FromBody] Student student)
        {
            try
            {
                if (student == null)
                {
                    return BadRequest();
                }
                else if (student.Id != 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError);
                }

                student.Id = StudentsDBMock.students.Max(stu => stu.Id) + 1;
                StudentsDBMock.students.Add(student);

                return CreatedAtAction(nameof(Get), new { id= student.Id}, student);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


    }
}
