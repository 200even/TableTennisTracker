namespace TableTennisTracker.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DefaultVal : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Players", "TotalGamesPlayed", c => c.Int(nullable: false));
            AddColumn("dbo.Players", "Rating", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Players", "Rating");
            DropColumn("dbo.Players", "TotalGamesPlayed");
        }
    }
}
