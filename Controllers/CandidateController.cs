using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CommunityWeb.Controllers
{
    public class CandidateController : Controller
    {
        public IActionResult InsertCandidate()
        {
            return View();
        }

        public IActionResult ShowCandidate()
        {
            return View();
        }
    }
}