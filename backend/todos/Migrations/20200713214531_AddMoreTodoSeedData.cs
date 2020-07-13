using Microsoft.EntityFrameworkCore.Migrations;

namespace todos.Migrations
{
    public partial class AddMoreTodoSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Todos",
                columns: new[] { "Id", "Name", "OwnerId" },
                values: new object[] { 4, "Fix front doorstep", 1 });

            migrationBuilder.InsertData(
                table: "Todos",
                columns: new[] { "Id", "Name", "OwnerId" },
                values: new object[] { 5, "Listen to .NET Rocks! podcast", 2 });

            migrationBuilder.InsertData(
                table: "Todos",
                columns: new[] { "Id", "Name", "OwnerId" },
                values: new object[] { 6, "Water plants", 2 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 6);
        }
    }
}
