using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using TableTennisTracker.Models;

namespace TableTennisTracker.Controllers
{
    public class GameController : Controller
    {

        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Game/NewGame
        public ActionResult NewGame()
        {
            return View(db.Players.ToList());
        }

        // POST: Game/NewGame
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult NewGame(List<Player> players)
        {
            return RedirectToAction("Game", players);
        }

        // GET: Game/Game
        public ActionResult Game(List<Player> players)
        {
            return View(players);
        }
    }
}
