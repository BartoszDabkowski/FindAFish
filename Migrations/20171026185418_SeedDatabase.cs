using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace FindAFish.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Genuses (Name, CommonName) VALUES ('Amphiprion', 'Clownfish')");
            migrationBuilder.Sql("INSERT INTO Genuses (Name, CommonName) VALUES ('Centropyge', 'Angelfish')");
            migrationBuilder.Sql("INSERT INTO Genuses (Name, CommonName) VALUES ('Pseudanthias', 'Anthias')");
            migrationBuilder.Sql("INSERT INTO Genuses (Name, CommonName) VALUES ('Synchiropus', 'Dragonets')");
            migrationBuilder.Sql("INSERT INTO Genuses (Name, CommonName) VALUES ('Arothron', 'Puffers')");
            migrationBuilder.Sql("INSERT INTO Genuses (Name, CommonName) VALUES ('Halichoeres', 'Wrasse')");
            migrationBuilder.Sql("INSERT INTO Genuses (Name, CommonName) VALUES ('Gymnomuraena', 'Eels')");

            migrationBuilder.Sql("INSERT INTO Species (Name, GenusId, CommonName) VALUES ('bispinosa', (SELECT ID FROM Genuses WHERE Name = 'Centropyge'), 'Coral Beauty Angelfish')");
            migrationBuilder.Sql("INSERT INTO Species (Name, GenusId, CommonName) VALUES ('loricula', (SELECT ID FROM Genuses WHERE Name = 'Centropyge'), 'Flame Angelfish')");
            migrationBuilder.Sql("INSERT INTO Species (Name, GenusId, CommonName) VALUES ('flavissima', (SELECT ID FROM Genuses WHERE Name = 'Centropyge'), 'Lemonpeel Angelfish')");
            migrationBuilder.Sql("INSERT INTO Species (Name, GenusId, CommonName) VALUES ('acanthops', (SELECT ID FROM Genuses WHERE Name = 'Centropyge'), 'Flameback Angelfish')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Species WHERE Name IN ('bispinosa', 'loricula', 'flavissima', 'acanthops')");
            migrationBuilder.Sql("DELETE FROM Genuses WHERE Name IN ('Amphiprion', 'Centropyge', 'Pseudanthias', 'Synchiropus', 'Arothron', 'Halichoeres', 'Gymnomuraena')");
        }
    }
}
