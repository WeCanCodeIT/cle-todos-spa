using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace todos.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Owners",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Owners", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Todos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsDone = table.Column<bool>(type: "bit", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DueBy = table.Column<DateTime>(type: "datetime2", nullable: false),
                    OwnerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Todos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Todos_Owners_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "Owners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Owners",
                columns: new[] { "Id", "Email", "Name" },
                values: new object[] { 1, "carlos@wecancodeit.org", "Carlos" });

            migrationBuilder.InsertData(
                table: "Owners",
                columns: new[] { "Id", "Email", "Name" },
                values: new object[] { 2, "davis@wecancodeit.org", "Davis" });

            migrationBuilder.InsertData(
                table: "Todos",
                columns: new[] { "Id", "Content", "CreatedOn", "DueBy", "IsDone", "Name", "OwnerId" },
                values: new object[] { 1, "Sample todo item 1", new DateTime(2021, 7, 21, 10, 23, 54, 969, DateTimeKind.Local).AddTicks(8181), new DateTime(2021, 7, 26, 10, 23, 54, 973, DateTimeKind.Local).AddTicks(1390), false, "Test Todo 1", 1 });

            migrationBuilder.InsertData(
                table: "Todos",
                columns: new[] { "Id", "Content", "CreatedOn", "DueBy", "IsDone", "Name", "OwnerId" },
                values: new object[] { 3, "Sample todo item 3", new DateTime(2021, 7, 21, 10, 23, 54, 973, DateTimeKind.Local).AddTicks(2791), new DateTime(2021, 7, 26, 10, 23, 54, 973, DateTimeKind.Local).AddTicks(2796), false, "Test Todo 3", 1 });

            migrationBuilder.InsertData(
                table: "Todos",
                columns: new[] { "Id", "Content", "CreatedOn", "DueBy", "IsDone", "Name", "OwnerId" },
                values: new object[] { 2, "Sample todo item 2", new DateTime(2021, 7, 21, 10, 23, 54, 973, DateTimeKind.Local).AddTicks(2737), new DateTime(2021, 7, 26, 10, 23, 54, 973, DateTimeKind.Local).AddTicks(2766), false, "Test Todo 2", 2 });

            migrationBuilder.CreateIndex(
                name: "IX_Todos_OwnerId",
                table: "Todos",
                column: "OwnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Todos");

            migrationBuilder.DropTable(
                name: "Owners");
        }
    }
}
