using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI_For_ReactJS.Models;

namespace WebAPI_For_ReactJS.Controllers
{
    [RoutePrefix("api/Books")]
    public class BooksController : ApiController
    {
        BooksManagementEntities DB = new BooksManagementEntities();
        //sonali_123Entities DB1 = new sonali_123Entities();
        [HttpPost]
        public object AddNewBook(BookDetails b)
        {
            try
            {
                BookDetail bookDetails = new BookDetail();
                bookDetails.Name = b.Name;
                bookDetails.Author = b.Author;
                DB.BookDetails.Add(bookDetails);
                DB.SaveChanges();
                return new Response
                {
                    Status = " Success",
                    Message = "Book added"
                };
            }
            catch (Exception )
            {
                return new Response
                {
                    Status = " Success",
                    Message = "Book added"
                };

            }
    
         }
        [HttpGet]
        public object GetALLBooks()
        {
            return DB.BookDetails.ToList();
        }

      
    }
}
    
       
