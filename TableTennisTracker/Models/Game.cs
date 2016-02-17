using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TableTennisTracker.Models
{
    public class Game
    {
        public Guid Id { get; set; }
        public Player Winner { get; set; }
        public Player Loser { get; set; }
        public DateTime GameDate { get; set; }
        public int? WinnerScore { get; set; }
        public int? LoserScore { get; set; }
    }
}