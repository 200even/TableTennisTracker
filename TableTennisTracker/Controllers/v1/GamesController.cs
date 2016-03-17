using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TableTennisTracker.Models;

namespace TableTennisTracker.Controllers.v1
{
    public class GamesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Games
        public IQueryable<Game> GetGames(int playerId)
        {
            var games = db.Games.Where(g => g.Loser.Id == playerId || g.Loser.Id == playerId);
            return games;
        }

        // GET: api/Games/5
        [ResponseType(typeof(Game))]
        public IHttpActionResult GetGame(Guid id)
        {
            Game game = db.Games.Find(id);
            if (game == null)
            {
                return NotFound();
            }

            return Ok(game);
        }

        // PUT: api/Games/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutGame(Guid id, Game game)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != game.Id)
            {
                return BadRequest();
            }

            db.Entry(game).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Games
        [ResponseType(typeof(Game))]
        public IHttpActionResult PostGame(Game game)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            game.Id = Guid.NewGuid();

            //Match the players in the database
            Player winner = db.Players.FirstOrDefault(p => p.Id == game.Winner.Id);
            int winnerRating = int.Parse(String.Copy(winner.Rating.ToString()));
            Player loser = db.Players.FirstOrDefault(p => p.Id == game.Loser.Id);


            //Adjust player stats
            Player scoredWinner = Player.scoreGame(winner, loser.Rating, true);
            Player scoredLoser = Player.scoreGame(loser, winnerRating, false);

            //Update players for the response
            game.Winner = scoredWinner;
            game.Loser = scoredLoser;

            //Update database entries
            db.Games.Add(game);
            db.Entry(scoredWinner).State = EntityState.Modified;
            db.Entry(scoredLoser).State = EntityState.Modified;
            
            //Save changes
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (GameExists(game.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = game.Id }, game);
        }

        // DELETE: api/Games/5
        [ResponseType(typeof(Game))]
        public IHttpActionResult DeleteGame(Guid id)
        {
            Game game = db.Games.Find(id);
            if (game == null)
            {
                return NotFound();
            }

            db.Games.Remove(game);
            db.SaveChanges();

            return Ok(game);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GameExists(Guid id)
        {
            return db.Games.Count(e => e.Id == id) > 0;
        }
    }
}