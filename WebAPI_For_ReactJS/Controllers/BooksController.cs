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
        [HttpDelete]
        public object DeleteBook( int id )
        {
            try
            {
                BookDetail book = DB.BookDetails.FirstOrDefault(X => X.Id == id);
                DB.BookDetails.Remove(book);
                DB.SaveChanges();
                return new Response
                {
                    Status = " Success",
                    Message = "Book deleted"
                };
            }
            catch(Exception ex)
            {
                return new Response
                {
                    Status = " failed",
                    Message = ex.Message
                };

            }
        }

        [Route("bookDetails")]
       [HttpGet]
        public object bookDetailsById(int id)
        {
            return DB.BookDetails.Where(book => book.Id == id).ToList().FirstOrDefault();
        }

        [Route("UpdateBook")]
        [HttpPut]
        public object UpdateBook(BookDetails b)
        {
            string status = "";
            string message = "";
            try
            {
                var obj = DB.BookDetails.Where(x => x.Id == b.Id).ToList().FirstOrDefault();
                if (obj.Id > 0)
                {
                    obj.Name = b.Name;
                    obj.Author = b.Author;
                    DB.SaveChanges();
                    status = "Success";
                    message = "Book updated";                
                }
            }
            catch(Exception ex)
            {
                status = " failed";
                message = "book Updated failed";
            }
            return new Response
            {
                Status = status,
                Message = message
            };
        }


      
    }
}
    
       
