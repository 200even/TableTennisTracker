using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace TableTennisTracker.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Nickname { get; set; }
        public int OpponentsTotalRating { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public int TotalGamesPlayed { get; set; }
        [DefaultValue(1300)]
        public int Rating { get; set; }

        public static Player scoreGame(Player player, int opponentRating, bool isWin)
        {
            //Set wins and losses
            if (isWin)
            {
                player.Wins = player.Wins + 1;
            }
            else
            {
                player.Losses = player.Losses + 1;
            }
            
            //Set OTR
            player.OpponentsTotalRating += opponentRating;

            //Set TGP
            player.TotalGamesPlayed = player.TotalGamesPlayed + 1;

            //Set Rating
            player.Rating = getRating(player);

            return player;
        }

        public static int getRating(Player player)
        {
            int r = ((1300 * 23) + player.OpponentsTotalRating + (400 * (player.Wins - player.Losses))) / (23 + player.TotalGamesPlayed);
            return r;
        }
    }


}