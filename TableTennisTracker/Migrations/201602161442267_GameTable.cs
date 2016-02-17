namespace TableTennisTracker.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class GameTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Games",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        GameDate = c.DateTime(nullable: false),
                        WinnerScore = c.Int(defaultValue: 21),
                        LoserScore = c.Int(defaultValue: 19),
                        Loser_Id = c.Int(),
                        Winner_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Players", t => t.Loser_Id)
                .ForeignKey("dbo.Players", t => t.Winner_Id)
                .Index(t => t.Loser_Id)
                .Index(t => t.Winner_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Games", "Winner_Id", "dbo.Players");
            DropForeignKey("dbo.Games", "Loser_Id", "dbo.Players");
            DropIndex("dbo.Games", new[] { "Winner_Id" });
            DropIndex("dbo.Games", new[] { "Loser_Id" });
            DropTable("dbo.Games");
        }
    }
}
